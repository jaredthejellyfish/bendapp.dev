import ContactHero from "@/components/Contact/ContactHero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import FAQ from "@/components/Contact/FAQ";

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
