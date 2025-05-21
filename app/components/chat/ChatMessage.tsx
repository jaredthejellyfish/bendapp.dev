import type { Message } from "@ai-sdk/react";
import ChatTabs from "./ChatTabs";

type TabId = "answer" | "sources" | "images" | "tasks";

interface ChatMessageProps {
  user: Message;
  assistant: Message;
  id: string;
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

const ChatMessage = ({
  user,
  assistant,
  id,
  activeTab,
  setActiveTab,
}: ChatMessageProps) => {
  return (
    <div className="flex flex-col gap-2 w-full mb-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold mx-3">
          {user.parts?.find((part) => part.type === "text")?.text}
        </h2>
      </div>

      <ChatTabs
        id={id}
        assistant={assistant}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default ChatMessage;
