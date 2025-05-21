import { cn } from "~/lib/utils";
import { AuthCard } from "@daveyplate/better-auth-ui";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { getAuthFn } from "~/serverFn/getAuthFn";
import GoHome from "~/components/GoHome";

export const Route = createFileRoute("/auth/$pathname")({
  component: RouteComponent,
  beforeLoad: async () => {
    const { user } = await getAuthFn();

    if (user) {
      return redirect({
        to: "/chat",
        replace: true,
      });
    }
  },
});

function RouteComponent() {
  const { pathname } = Route.useParams();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 md:p-8 bg-background">
      <GoHome showText />
      <div className="w-full max-w-md mx-auto relative">
        <div className="relative z-10">
          <AuthCard
            pathname={pathname}
            classNames={{
              base: "border border-border/30 bg-card text-card-foreground rounded-xl max-w-md w-full backdrop-blur-[2px]",
              header: "bg-muted/30 rounded-t-lg py-6 px-6 space-y-1",
              title: "text-2xl font-semibold text-primary",
              footerLink:
                "text-primary hover:text-primary/80 transition-colors duration-200 flex justify-center",
              description: "text-muted-foreground text-sm",
              form: {
                input:
                  "bg-background focus-visible:ring-primary/30 rounded-md h-10 border border-primary/30",
                button:
                  "bg-primary hover:bg-primary/90 transition-colors duration-200 font-medium rounded-md h-10 w-full",
                checkbox: "",
              },
            }}
          />

          <p
            className={cn(
              ["callback", "settings", "sign-out"].includes(pathname) &&
                "hidden",
              "text-muted-foreground text-xs"
            )}
          ></p>
        </div>
      </div>
    </main>
  );
}
