// app/routes/__root.tsx
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "~/styles/app.css?url";
import favicon from "~/public/favicon.ico";
import Header from "~/components/Header";
import FloatingElements from "~/components/Landing/FloatingElements";
import Footer from "~/components/Footer";
import ScrollIndicator from "~/components/ScrollIndicator";
import { seo } from "../utils/seo";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Bend",
      },
      ...seo({
        title: "Bend",
        description:
          "Bend is not just a personal assistant, it's a way of life.",
        image: "https://bend.com/images/bend-logo.png",
        keywords:
          "Bend, life assistant, universal assistant, AI assistant, productivity, automation, personal assistant",
      }),
    ],
    links: [
      {
        rel: "icon",
        href: favicon,
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
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
        <HeadContent />
      </head>
      <body>
        <div className="bg-[#121212] min-h-screen relative overflow-hidden">
          <FloatingElements />
          <ScrollIndicator />

          <div className="max-w-[1200px] mx-auto px-4 py-6 relative">
            <Header />

            {children}

            <Footer />
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
