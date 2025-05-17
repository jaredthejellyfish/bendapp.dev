import { createFileRoute, useRouterState } from "@tanstack/react-router";
import HeroSection from "~/components/Landing/HeroSection";
import FeaturesSection from "~/components/Landing/FeaturesSection";
import TestimonialsSection from "~/components/Landing/TestimonialsSection";
import UnfuckYourLife from "~/components/Landing/UnfuckYourLife";
import { seo } from "../utils/seo";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Bend | Home",
      },
    ],
  }),
});

// Example use cases for Bend

function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <UnfuckYourLife />
    </main>
  );
}
