import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Search, Sparkles, FileImage, ArrowUp } from "lucide-react";

import { Badge } from "~/components/ui/badge";

import ChatActionItem from "~/components/chat/ChatActionItem";
import generateId from "~/utils/generateId";
export const Route = createFileRoute("/chat/")({
  component: PerplexityStyleChat,
  head: () => ({
    meta: [
      {
        title: "Bend | Chat",
      },
    ],
  }),
});

function PerplexityStyleChat() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(query);
    setIsLoading(true);
    // Generate a random chat ID
    const randomId = generateId("conv_", 18);

    // Navigate to the chat page with the generated ID
    void navigate({
      to: `/chat/$id`,
      params: { id: randomId },
      search: { query },
      viewTransition: { types: ["slide-right"] },
    });
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 relative  [view-transition-name:main-content]">
      {/* Perplexity logo */}
      <div className="mb-6">
        <div className="text-2xl font-medium flex items-center">
          Bend
          <Badge className="ml-1 font-medium py-0.5">pro</Badge>
        </div>
      </div>

      {/* Search box */}
      <div className="w-full max-w-xl">
        <form onSubmit={handleSubmit} className="relative mb-2">
          <input
            ref={inputRef}
            type="text"
            name="query"
            placeholder="Ask anything..."
            className="w-full bg-sidebar-accent/20 border border-border rounded-xl py-3 px-4 pr-10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/40"
            disabled={isLoading}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {isLoading ? (
              <motion.div
                className="w-5 h-5 border-2 border-muted-foreground/30 border-t-primary/50 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <button
                type="submit"
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowUp size={18} />
              </button>
            )}
          </div>
        </form>
        {/* Search buttons */}
        <div className="flex flex-row justify-between gap-2 mb-8">
          <div className="flex gap-2">
            <ChatActionItem icon={<Search size={14} />} label="Search" />
            <ChatActionItem icon={<Sparkles size={14} />} label="Research" />
          </div>

          <button className="p-1.5 rounded-full bg-sidebar-accent/20 hover:bg-sidebar-accent/40 text-foreground/70">
            <FileImage size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
