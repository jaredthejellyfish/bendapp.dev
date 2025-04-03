import HeroSection from "@/components/Landing/HeroSection";
import FeaturesSection from "@/components/Landing/FeaturesSection";
import TestimonialsSection from "@/components/Landing/TestimonialsSection";
import UnfuckYourLife from "@/components/Landing/UnfuckYourLife";

export const metadata = {
  title: "Bend",
  description: "Bend is not just a personal assistant, it's a way of life.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <UnfuckYourLife />
    </main>
  );
}
