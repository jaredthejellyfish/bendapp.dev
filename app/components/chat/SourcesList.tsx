import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";

interface Source {
  type: "web" | "video";
  title: string;
  description: string;
  url: string;
  age: number | null;
  duration: number | null;
}

interface ToolInvocation {
  state: string;
  step: number;
  toolCallId: string;
  toolName: string;
  args: { query: string };
  result: { results: Source[]; nextStep: string };
}

export interface ToolInvocationPart {
  type: "tool-invocation";
  toolInvocation: ToolInvocation;
}

interface SourcesListProps {
  sources: ToolInvocationPart[];
}

const SourcesList = ({ sources }: SourcesListProps) => {
  // Find the web search result from the sources array
  const webSearchResult = sources.find(
    (source) =>
      source.toolInvocation.toolName === "webSearch" &&
      source.toolInvocation.state === "result"
  );

  if (!webSearchResult) {
    return (
      <div className="text-center text-muted-foreground my-8">
        No sources found for this query.
      </div>
    );
  }

  const searchResults = webSearchResult.toolInvocation.result.results;
  const searchQuery = webSearchResult.toolInvocation.args.query;

  return (
    <div className="space-y-6">
      {searchQuery && (
        <div className="mb-4">
          <Badge variant="secondary" className="text-sm">
            Search: {searchQuery}
          </Badge>
        </div>
      )}

      <div className="grid gap-4">
        {searchResults.map((source: Source, index: number) => (
          <motion.div
            key={`source-${String(index)}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="overflow-hidden group hover:border-primary/20 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        source.type === "video" ? "secondary" : "outline"
                      }
                      className="capitalize"
                    >
                      {source.type}
                    </Badge>
                    {source.age !== null && (
                      <span className="text-xs text-muted-foreground">
                        {source.age} {source.age === 1 ? "day" : "days"} ago
                      </span>
                    )}
                    {source.duration !== null && (
                      <span className="text-xs text-muted-foreground">
                        {source.duration} min
                      </span>
                    )}
                  </div>
                </div>
                <CardTitle className="text-base mt-2 line-clamp-1">
                  {source.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-2 mb-2">
                  <span
                    dangerouslySetInnerHTML={{ __html: source.description }}
                  />
                </CardDescription>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs flex items-center gap-1 text-primary hover:underline mt-2"
                >
                  <ExternalLink className="h-3 w-3" />
                  {new URL(source.url).hostname.replace("www.", "")}
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SourcesList;
