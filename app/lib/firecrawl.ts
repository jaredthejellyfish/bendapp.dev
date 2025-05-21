import FirecrawlApp from "@mendable/firecrawl-js";

const app = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY,
  apiUrl: "https://firecrawl.bendapp.dev",
});

export { app };
