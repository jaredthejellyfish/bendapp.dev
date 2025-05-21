import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Book, Camera, List, MessageCircle } from "lucide-react";
import AnimatedStreaming from "./AnimatedStreaming";
import SourcesList, { type ToolInvocationPart } from "./SourcesList";
import type { Message } from "@ai-sdk/react";
type TabId = "answer" | "sources" | "images" | "tasks";

interface TabOption {
  id: TabId;
  label: string;
  icon: React.ReactElement;
  getContent: (assistant: Message) => React.ReactNode;
}

interface ChatTabsProps {
  id: string;
  assistant: Message;
  activeTab: string;
  setActiveTab: (tab: TabId) => void;
}

const tabOptions: TabOption[] = [
  {
    id: "answer",
    label: "Answer",
    icon: <MessageCircle className="h-4 w-4" />,
    getContent: (assistant) => (
      <AnimatedStreaming
        content={
          assistant.parts?.find((part) => part.type === "text")?.text ?? ""
        }
      />
    ),
  },
  {
    id: "sources",
    label: "Sources",
    icon: <Book className="h-4 w-4" />,
    getContent: (assistant) => {
      const toolInvocations =
        assistant.parts?.filter((part) => part.type === "tool-invocation") ||
        [];
      const annotations = assistant.annotations;

      return (
        <SourcesList
          sources={toolInvocations as unknown as ToolInvocationPart[]}
        />
      );
    },
  },
  {
    id: "images",
    label: "Images",
    icon: <Camera className="h-4 w-4" />,
    getContent: () => <span>Images content</span>,
  },
  {
    id: "tasks",
    label: "Tasks",
    icon: <List className="h-4 w-4" />,
    getContent: () => <span>Tasks content</span>,
  },
];

const ChatTabs = ({
  id,
  assistant,
  activeTab,
  setActiveTab,
}: ChatTabsProps) => {
  return (
    <div
      role="tablist"
      aria-label="Answer details"
      className="flex flex-col w-full"
    >
      <LayoutGroup id={`tabs-${id}`}>
        <div className="border-b border-border/40 relative">
          <motion.div layout className="flex items-center">
            {tabOptions.map((option) => {
              const isActive = activeTab === option.id;
              const tabId = `${option.id}-${id}`;
              const panelId = `${option.id}-panel-${id}`;

              return (
                <motion.button
                  key={option.id}
                  id={tabId}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  onClick={() => {
                    setActiveTab(option.id);
                  }}
                  className={`flex items-center gap-2 py-3 px-4 text-sm relative ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-primary/80"
                  }`}
                  tabIndex={isActive ? 0 : -1}
                >
                  <motion.span layout className="flex items-center gap-2">
                    {option.icon}
                    {option.label}
                  </motion.span>

                  {/* Active indicator with layoutId for smooth animations between tabs */}
                  {isActive && (
                    <motion.div
                      layoutId={`tab-indicator-${id}`}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Tab content with AnimatePresence for enter/exit animations */}
        <motion.div
          layout
          layoutDependency={activeTab}
          className="mt-4 relative h-auto"
        >
          <AnimatePresence mode="wait">
            {tabOptions.map((option) => {
              const isActive = activeTab === option.id;
              if (!isActive) return null;

              const tabId = `${option.id}-${id}`;
              const panelId = `${option.id}-panel-${id}`;

              return (
                <motion.div
                  key={option.id}
                  id={panelId}
                  role="tabpanel"
                  aria-labelledby={tabId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full prose prose-invert max-w-none"
                >
                  {option.getContent(assistant)}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
};

export default ChatTabs;
