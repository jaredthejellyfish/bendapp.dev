import { cn } from "~/lib/utils";
import useChatStore from "~/stores/chat.store";

function ChatActionItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  const { setSearch, setResearch, search, research } = useChatStore();

  const handleClick = () => {
    if (label === "Search") {
      setSearch(!search);
    } else if (label === "Research") {
      setResearch(!research);
    }
  };

  return (
    <button
      className={cn(
        "flex items-center gap-1.5 bg-sidebar-accent/20  rounded-full px-3 py-1.5 text-sm text-foreground/80 transition-colors duration-200",
        (label === "Search" && search) || (label === "Research" && research)
          ? "bg-primary/50 font-medium hover:bg-primary/60"
          : "hover:bg-sidebar-accent/40"
      )}
      onClick={handleClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default ChatActionItem;
