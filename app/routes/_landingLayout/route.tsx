import { Outlet, createFileRoute } from "@tanstack/react-router";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const Route = createFileRoute("/_landingLayout")({
  component: LandingLayoutComponent,
});

function LandingLayoutComponent() {
  return (
    <div className="landing-layout">
      <Header />
      <div className="landing-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
