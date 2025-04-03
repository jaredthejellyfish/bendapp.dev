import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/Landing/FloatingElements";
import ScrollIndicator from "@/components/ScrollIndicator";

export const metadata = {
  title: "Bend",
  description: "Bend is not just a personal assistant, it's a way of life.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#121212] min-h-screen relative overflow-hidden">
      <FloatingElements />
      <ScrollIndicator />

      <div className="max-w-[1200px] mx-auto px-4 py-6 relative">
        <Header />

        {children}

        <Footer />
      </div>
    </div>
  );
}
