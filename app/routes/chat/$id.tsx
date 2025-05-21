import { useChat } from "@ai-sdk/react";
import type { Message } from "@ai-sdk/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { useScrollToBottom } from "~/hooks/useScrollToBottom";
import ChatMessage from "~/components/chat/ChatMessage";
import ChatInputForm from "~/components/chat/ChatInputForm";

type TabId = "answer" | "sources" | "images" | "tasks";

type SearchParams = {
  query?: string | null;
};

export const Route = createFileRoute("/chat/$id")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      query: typeof search.query === "string" ? search.query : undefined,
    };
  },
});

function RouteComponent() {
  const [activeTab, setActiveTab] = useState<TabId>("answer");
  const [input, setInput] = useState<string>("");
  const processedQueryRef = useRef<string | null>(null);
  const navigate = useNavigate({ from: Route.fullPath });
  const chatId = Route.useParams().id;

  const { append, messages, status } = useChat({
    api: "/api/chat",
    id: chatId,
    initialMessages: [],
    onFinish: () => {},
    experimental_throttle: 50,
  });

  const { containerRef, endRef, scrollToBottom } = useScrollToBottom();

  // Auto-scroll when streaming
  useEffect(() => {
    if (status === "streaming") {
      scrollToBottom();
    }
  }, [status, scrollToBottom, messages.length]);

  const search = Route.useSearch();

  // Process the search query only once on component mount
  useEffect(() => {
    const query = search.query;
    // Only process the query if it exists and hasn't been processed yet
    if (
      query &&
      processedQueryRef.current !== query &&
      status !== "streaming"
    ) {
      processedQueryRef.current = query;
      const sendMessage = async () => {
        try {
          await append({ role: "user", content: query });
          // After successful append, clear the query param
          await navigate({ search: (prev) => ({ ...prev, query: undefined }) });
        } catch (error) {
          console.error("Error sending message:", error);
        }
      };
      void sendMessage();
    }
  }, [append, navigate, search, status]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!input.trim() || status === "streaming") return;

      void (async () => {
        try {
          await append({ role: "user", content: input });
          setInput("");
          scrollToBottom();
        } catch (error) {
          console.error("Failed to send message:", error);
        }
      })();
    },
    [input, status, append, scrollToBottom]
  );

  // Transform messages into user-assistant pairs
  const conversationPairs = useMemo(() => {
    const pairs: Array<{ user: Message; assistant: Message; id: string }> = [];

    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
      if (message && message.role === "user") {
        // Find the next assistant message that corresponds to this user message
        const assistantMessage = messages
          .slice(i + 1)
          .find((msg) => msg.role === "assistant");

        if (assistantMessage) {
          pairs.push({
            user: message,
            assistant: assistantMessage as Message,
            id: `conversation-${chatId}-${i.toString()}`,
          });
        }
      }
    }

    return pairs;
  }, [messages, chatId]);

  return (
    <div
      className="[view-transition-name:main-content] w-full h-full relative flex flex-col"
      ref={containerRef}
    >
      <div className="flex-1 flex flex-col items-start justify-start px-4 relative overflow-y-auto">
        <div className="w-full max-w-4xl mt-10 mx-auto flex flex-col">
          {conversationPairs.length === 0 && (
            <div className="flex justify-center items-center h-[30vh] text-muted-foreground">
              No messages yet. Start a conversation below.
            </div>
          )}
          {conversationPairs.map(({ user, assistant, id }) => (
            <ChatMessage
              key={id}
              user={user}
              assistant={assistant}
              id={id}
              activeTab={activeTab}
              setActiveTab={(tab: TabId) => {
                setActiveTab(tab);
              }}
            />
          ))}
        </div>
        <div
          ref={endRef}
          className="h-[10px] w-full mb-4"
          id="end-ref"
          aria-hidden="true"
        />
      </div>

      {/* Chat input */}
      <div className="sticky bottom-0 left-0 right-0 w-full bg-background/80 backdrop-blur-md border-t border-border/30 py-4 z-10">
        <ChatInputForm
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          isStreaming={status === "streaming"}
        />
      </div>
    </div>
  );
}
