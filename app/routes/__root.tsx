// app/routes/__root.tsx
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import globalsCss from "~/styles/globals.css?url";
import favicon from "~/public/favicon.ico?url";
import logo from "~/public/logo.png?url";
import FloatingElements from "~/components/Landing/FloatingElements";
import ScrollIndicator from "~/components/ScrollIndicator";
import { seo } from "~/utils/seo";
import NotFound from "~/components/NotFound";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      ...seo({
        title: "Bend",
        description:
          "Bend is not just a personal assistant, it's a way of life.",
        image: logo,
        keywords:
          "Bend, life assistant, universal assistant, AI assistant, productivity, automation, personal assistant",
      }),
    ],
    links: [
      {
        rel: "icon",
        href: favicon,
        type: "image/x-icon",
        sizes: "any",
        suppressHydrationWarning: true,
      },
      {
        rel: "stylesheet",
        href: globalsCss,
        type: "text/css",
        suppressHydrationWarning: true,
        charSet: "utf-8",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <HeadContent />
      </head>
      <body>
        <div className="bg-[#121212] min-h-screen relative overflow-hidden">
          <FloatingElements />
          <ScrollIndicator />

          <div className="max-w-[1200px] mx-auto px-4 py-6 relative min-h-screen flex flex-col justify-between">
            {children}
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
