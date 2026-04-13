import Seo from "@/components/Seo";
import ContactInfoSection from "./ContactInfoSection";
import HeroSection from "./HeroSection";
import InquirySection from "./InquirySection";
import MapSection from "./MapSection";

const Contact = () => {
  return (
    <>
      <Seo
        title="Kontakt | Sol Navis Split — nautika, auti, investicije"
        description="Kontaktirajte Sol Navis — Stanka Vraza 15, 21000 Split. +385 98 173 2273. info@sol-navis.hr. Pon–Pet 09:00–17:00."
        path="/kontakt"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Sol Navis d.o.o.",
          url: "https://sol-navis.hr",
          telephone: "+385 98 173 2273",
          email: "info@sol-navis.hr",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Stanka Vraza 15",
            postalCode: "21000",
            addressLocality: "Split",
            addressCountry: "HR",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "17:00",
          },
          sameAs: [
            "https://yachtsincroatia.com",
            "https://yachtsinmontenegro.com",
          ],
        }}
      />
      <HeroSection />
      <ContactInfoSection />
      <InquirySection />
      <MapSection />
    </>
  );
};
export default Contact;
