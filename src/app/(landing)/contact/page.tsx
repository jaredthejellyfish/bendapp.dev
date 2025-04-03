import ContactHero from "@/components/Contact/ContactHero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import FAQ from "@/components/Contact/FAQ";

export const metadata = {
  title: "Bend | Contact",
  description: "Contact Bend, if you need help we're here for you.",
};

export default function Contact() {
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
