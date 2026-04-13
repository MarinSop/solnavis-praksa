import Seo from "@/components/Seo";
import AboutSection from "./AboutSection";
import ConsultingSection from "./ConsultingSection";
import HeroSection from "./HeroSection";

const Yachts = () => {
  return (
    <>
      <Seo
        title="Nautika | Sol Navis — prodaja, servis i charter plovila"
        description="Prodaja i servis plovila na Jadranu. Zastupnik Blumar Yachts, Salona jedrilica i Maestral gumenjaka. 24/7 Sea Assistance. Split, Hrvatska."
        path="/nautika"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sol Navis Nautika",
          url: "https://sol-navis.hr/nautika",
          areaServed: ["HR", "ME", "BA", "RS"],
          provider: { "@type": "Organization", name: "Sol Navis d.o.o." },
        }}
      />
      <HeroSection />
      <AboutSection />
      <ConsultingSection />
    </>
  );
};
export default Yachts;
