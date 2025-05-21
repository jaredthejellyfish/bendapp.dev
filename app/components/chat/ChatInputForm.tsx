import { Send } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { useCallback } from "react";

interface ChatInputFormProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isStreaming: boolean;
}

const ChatInputForm = ({
  input,
  setInput,
  handleSubmit,
  isStreaming,
}: ChatInputFormProps) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (input.trim() && !isStreaming) {
          handleSubmit(e as unknown as React.FormEvent);
        }
      }
    },
    [handleSubmit, input, isStreaming]
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4">
      <div className="relative flex items-center bg-muted/50 rounded-xl border border-border/50 shadow-sm hover:border-border/80 focus-within:border-primary/60 focus-within:ring-1 focus-within:ring-primary/30 transition-all">
        <Textarea
          value={input}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setInput(e.target.value);
          }}
          placeholder="Ask a follow-up question..."
          className="min-h-[3rem] max-h-[12rem] resize-none bg-transparent border-0 shadow-none focus-visible:ring-0 py-3 px-4"
          onKeyDown={handleKeyDown}
          disabled={isStreaming}
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          disabled={isStreaming || !input.trim()}
          className="absolute right-2 h-8 w-8 text-primary hover:text-primary/80 hover:bg-primary/10"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </form>
  );
};

export default ChatInputForm;
