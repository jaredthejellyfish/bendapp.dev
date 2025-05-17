import { createFileRoute } from "@tanstack/react-router";
import ContactForm from "~/components/Contact/ContactForm";
import ContactHero from "~/components/Contact/ContactHero";
import FAQ from "~/components/Contact/FAQ";
import ContactInfo from "~/components/Contact/ContactInfo";

export const Route = createFileRoute("/contact")({
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
