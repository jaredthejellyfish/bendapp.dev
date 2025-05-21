import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "~/components/Landing/Contact/ContactForm";
import ContactHero from "~/components/Landing/Contact/ContactHero";
import FAQ from "~/components/Landing/Contact/FAQ";
import ContactInfo from "~/components/Landing/Contact/ContactInfo";

// The path here was updated in the previous turn. If you reverted it,
// it should be: "/_landingLayout/(landing)/contact"
export const Route = createFileRoute("/(landing)/contact")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Bend | Contact",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <main>
      <section>
        <ContactHero />
      </section>

      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ContactInfo />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <FAQ />
      </section>
    </main>
  );
}
