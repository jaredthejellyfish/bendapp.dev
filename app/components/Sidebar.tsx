import UserButton from "~/components/UserButton";
import { Button } from "~/components/ui/button";
import { Globe, Plus, Grid2X2, Home } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { TooltipProvider } from "~/components/ui/tooltip";
import { useNavigate } from "@tanstack/react-router";

function SidebarItem({
  icon,
  label,
  onClick,
  ghost = false,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  ghost?: boolean;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex flex-col items-center">
            <Button
              variant={ghost ? "ghost" : "outline"}
              size="icon"
              onClick={onClick}
            >
              {icon}
            </Button>
            <p className="sr-only">{label}</p>
          </div>
        </TooltipTrigger>
        <TooltipContent side="right">
          <span className="text-xs font-medium">{label}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="w-[72px] flex flex-col items-center border-r border-sidebar-border h-screen">
      <div className="py-4 flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="p-2 w-16 h-16">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="300" height="300" rx="59" fill="#19181B" />
              <path
                d="M66 72C66 60.9543 74.9543 52 86 52H169C193.853 52 214 72.1472 214 97C214 121.853 193.853 142 169 142H86C74.9543 142 66 133.046 66 122V72Z"
                fill="#FE343D"
              />
              <path
                d="M66 172C66 160.954 74.9543 152 86 152H188C212.853 152 233 172.147 233 197V203C233 227.853 212.853 248 188 248H86C74.9543 248 66 239.046 66 228V172Z"
                fill="#FF333D"
              />
            </svg>
          </div>

          {/* New chat button */}
          <SidebarItem
            icon={<Plus size={20} />}
            label="New chat"
            onClick={() => {}}
          />

          {/* Home button */}
          <SidebarItem
            icon={<Home size={20} />}
            label="Home"
            onClick={() => {
              void navigate({
                to: "/chat",
              });
            }}
          />

          {/* Discover button */}
          <SidebarItem
            icon={<Globe size={20} />}
            label="Discover"
            ghost
            onClick={() => {}}
          />

          {/* Spaces button */}
          <SidebarItem
            icon={<Grid2X2 size={20} />}
            label="Spaces"
            onClick={() => {}}
            ghost
          />
        </div>

        {/* User button - pinned to bottom */}
        <div className="mt-auto py-4">
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
