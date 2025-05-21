// app/routes/__root.tsx
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  useLoaderData,
  useLocation,
} from "@tanstack/react-router";
import globalsCss from "~/styles/globals.css?url";
import favicon from "~/public/favicon.ico?url";
import logo from "~/public/logo.png?url";
import { seo } from "~/utils/seo";
import NotFound from "~/components/NotFound";
import { Toaster } from "../components/ui/sonner";
import { AuthProviders } from "../providers/better-auth";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Landing/Footer";
import Header from "../components/Landing/Header";
import FloatingElements from "../components/Landing/FloatingElements";
import ScrollIndicator from "../components/Landing/ScrollIndicator";
import { getAuthFn } from "~/serverFn/getAuthFn";

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  component: RootComponent,
  loader: async () => {
    const { user } = await getAuthFn();
    return { user };
  },
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
});

const landingRoutes = ["/", "/about", "/contact", "/pricing"];
const noLayoutRoutes = [
  "/auth/sign-in",
  "/auth/sign-up",
  "/auth/forgot-password",
];

function RootComponent() {
  const { pathname } = useLocation();
  const { user } = useLoaderData({ from: "__root__" });
  return (
    <RootDocument>
      {noLayoutRoutes.includes(pathname) ? (
        <Outlet />
      ) : user && !landingRoutes.includes(pathname) ? (
        <AppLayoutComponent />
      ) : (
        <LandingLayoutComponent />
      )}
    </RootDocument>
  );
}

function LandingLayoutComponent() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingElements />
      <ScrollIndicator />

      <div className="max-w-[1200px] mx-auto px-4 py-6 relative min-h-screen flex flex-col justify-between">
        <div className="landing-layout">
          <Header />
          <div className="landing-content">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

function AppLayoutComponent() {
  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden dark dashboard-content">
      <Sidebar />
      <Outlet />
    </div>
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
      <body className="antialiased dark">
        <AuthProviders>{children}</AuthProviders>
        <Scripts />
        <Toaster />
      </body>
    </html>
  );
}
