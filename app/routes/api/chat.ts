import { createAPIFileRoute } from "@tanstack/react-start/api";
import { openai } from "@ai-sdk/openai";
import type { Message } from "ai";
import { createDataStream, smoothStream, streamText } from "ai";
import { webSearch } from "@/app/lib/web-search";

export const APIRoute = createAPIFileRoute("/api/chat")({
  POST: async ({ request }) => {
    try {
      const { messages } = (await request.json()) as { messages: Message[] };

      // Convert messages to the format expected by OpenAI
      const formattedMessages = messages.map((msg) => ({
        role: msg.role as "user" | "assistant" | "system",
        content: msg.content,
      }));
      const stream = createDataStream({
        execute: (dataStream) => {
          const result = streamText({
            model: openai("gpt-4o"),
            maxSteps: 10,
            system:
              "You are a helpful assistant that can answer questions and help with tasks. You always provide a detailed answer and format your response in github flavored markdown.",
            messages: formattedMessages,
            experimental_transform: smoothStream({ chunking: "word" }),
            toolCallStreaming: true,
            tools: {
              webSearch: webSearch(dataStream),
            },
          });
          result.consumeStream().catch((e: unknown) => {
            console.error(e);
            return "Oops, an error occurred!";
          });

          result.mergeIntoDataStream(dataStream, {
            sendReasoning: true,
          });
        },
        onError: (e) => {
          console.error(e);
          return "Oops, an error occurred!";
        },
      });

      return new Response(stream);
    } catch (error) {
      console.error(error);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
});
