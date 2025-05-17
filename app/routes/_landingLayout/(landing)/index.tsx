import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "~/components/Landing/HeroSection";
import FeaturesSection from "~/components/Landing/FeaturesSection";
import TestimonialsSection from "~/components/Landing/TestimonialsSection";
import UnfuckYourLife from "~/components/Landing/UnfuckYourLife";

// The path here was updated in the previous turn. If you reverted it,
// it should be: "/_landingLayout/(landing)/"
export const Route = createFileRoute("/_landingLayout/(landing)/")({
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
