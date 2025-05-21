import { tool } from "ai";
import { z } from "zod";
import { BraveSearch } from "brave-search";
import type { DataStreamWriter } from "ai";
import FirecrawlApp from "@mendable/firecrawl-js";

if (!process.env.BRAVE_API_KEY) {
  throw new Error("BRAVE_API_KEY is not set");
}

const braveSearch = new BraveSearch(process.env.BRAVE_API_KEY);

export const WebSearchInputSchema = z.object({
  query: z
    .string()
    .describe(
      "The query to search the web for. Make it as specific as possible. Be concise and to the point. Keep it to one sentence."
    ),
});

export const WebSearchOutputSchema = z.array(
  z.object({
    type: z.enum(["web", "video"]),
    title: z.string(),
    description: z.string(),
    url: z.string(),
    age: z.number().nullable(),
    duration: z.number().nullable(),
  })
);

export type WebSearchOutput = z.infer<typeof WebSearchOutputSchema>;

export const webSearch = (dataStream: DataStreamWriter) =>
  tool({
    description: "Search the web for information.",
    parameters: WebSearchInputSchema,
    execute: async ({ query }) => {
      try {
        if (!query) {
          throw new Error("No query provided.");
        }

        dataStream.writeMessageAnnotation({
          type: "tool-invocation-state",
          state: "step-started",
          toolCallId: "web-search",
          frameType: "web-search-started",
        });

        const timeStartWebSearch = performance.now();

        const result = await braveSearch.webSearch(query);

        const timeEndWebSearch = performance.now();

        dataStream.writeMessageAnnotation({
          type: "tool-invocation-state",
          state: "step-completed",
          toolCallId: "web-search",
          frameType: "web-search-completed",
          metadata: {
            count: result.web?.results.length || 0,
            time: timeEndWebSearch - timeStartWebSearch,
          },
        });

        // Simplify the response to include only useful information
        const webResults = result.web?.results || [];
        const videoResults = result.videos?.results || [];

        const simplifiedResults: WebSearchOutput = [
          ...webResults.map((item) => ({
            type: "web" as const,
            title: item.title,
            description: item.description,
            url: item.url,
            age: item.age ? parseInt(item.age, 10) || null : null,
            duration: null,
          })),
          ...videoResults.map((item) => ({
            type: "video" as const,
            title: item.title,
            description: item.description,
            url: item.url,
            age: item.age ? parseInt(item.age, 10) || null : null,
            duration: item.video.duration
              ? parseInt(item.video.duration, 10) || null
              : null,
          })),
        ];

        // -------------------------------------------------------------
        // Step 2 – Batch-scrape all unique URLs and extract key points
        // -------------------------------------------------------------

        const urlsToScrape = [...new Set(simplifiedResults.map((r) => r.url))];

        if (urlsToScrape.length > 0) {
          dataStream.writeMessageAnnotation({
            type: "tool-invocation-state",
            state: "step-started",
            toolCallId: "firecrawl-batch",
            frameType: "firecrawl-batch-started",
          });

          const timeStartBatch = performance.now();

          const firecrawl = new FirecrawlApp({
            apiKey: process.env.FIRECRAWL_API_KEY ?? "",
          });

          // Define a minimal extraction schema – up to 5 bullet-point key points
          const extractionSchema = z.object({
            key_points: z
              .array(z.string())
              .max(5)
              .describe(
                "Concise bullet-point summary (max 5) capturing the main ideas of the page"
              ),
          });

          const batchResult = await firecrawl.batchScrapeUrls(urlsToScrape, {
            formats: ["json"],
            jsonOptions: {
              schema: extractionSchema,
            },
            onlyMainContent: true,
          });

          type BatchItem = {
            metadata?: { sourceURL?: string };
            url?: string;
            json?: { key_points?: string[] };
          };

          const batchData: BatchItem[] =
            (batchResult as { data?: BatchItem[] }).data ?? [];

          const keyPointSummaries = batchData.map((item) => {
            const sourceURL = item.metadata?.sourceURL ?? item.url ?? "";
            const summary = item.json?.key_points ?? [];
            return {
              url: sourceURL,
              keyPoints: summary,
            };
          });

          const timeEndBatch = performance.now();

          dataStream.writeMessageAnnotation({
            type: "tool-invocation-state",
            state: "step-completed",
            toolCallId: "firecrawl-batch",
            frameType: "firecrawl-batch-completed",
            metadata: {
              count: keyPointSummaries.length,
              time: timeEndBatch - timeStartBatch,
            },
          });

          const parsedResults = WebSearchOutputSchema.parse(simplifiedResults);

          return {
            results: parsedResults,
            summaries: keyPointSummaries,
            nextStep:
              "Use the provided key-point summaries to craft a polished answer.",
          };
        }

        // Fallback – no valid URLs to scrape

        const parsedResults = WebSearchOutputSchema.parse(simplifiedResults);

        return {
          results: parsedResults,
          summaries: [],
          nextStep:
            "Compile the information from the search results and provide a detailed answer.",
        };
      } catch (error) {
        console.error(error);
        const e = error as Error;
        throw new Error("Unknown error occurred. " + e.message);
      }
    },
  });
