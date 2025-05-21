import { authClient } from "../lib/auth-client";
import { LogOut, Settings, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { cn } from "~/lib/utils";
import { Skeleton } from "~/components/ui/skeleton";
import { useNavigate } from "@tanstack/react-router";
type Props = {
  className?: string;
};

function UserButton({ className }: Props) {
  const { data: session, isPending } = authClient.useSession();
  const navigate = useNavigate();

  // Show loading placeholder
  if (isPending) {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  const { user } = session;
  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : (user.email && user.email.charAt(0).toUpperCase()) || "?";

  const handleSignOut = async (): Promise<void> => {
    await authClient.signOut();
    await navigate({
      to: "/auth/$pathname",
      params: { pathname: "login" },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "focus:ring-primary/70 focus:outline-none focus:ring-2 rounded-full",
            className
          )}
        >
          <Avatar className="h-10 w-10">
            {user.image ? (
              <AvatarImage src={user.image} alt={user.name || "User"} />
            ) : (
              <AvatarFallback>{initials}</AvatarFallback>
            )}
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{user.name || "User"}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            void handleSignOut();
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton;
