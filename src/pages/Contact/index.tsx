import Seo from "@/components/Seo";
import ContactInfoSection from "./ContactInfoSection";
import HeroSection from "./HeroSection";
import InquirySection from "./InquirySection";
import MapSection from "./MapSection";
import { CONTACT } from "@/constants/contact";

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
          name: CONTACT.entity,
          url: "https://sol-navis.hr",
          telephone: CONTACT.phoneTel,
          email: CONTACT.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: CONTACT.hqStreet,
            postalCode: CONTACT.hqPostalCode,
            addressLocality: CONTACT.hqCity,
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
