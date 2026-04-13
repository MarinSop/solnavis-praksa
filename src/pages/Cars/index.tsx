import Seo from "@/components/Seo";
import FinancingSection from "./FinancingSection";
import GridSection from "./GridSection";
import HeroSection from "./HeroSection";

const Cars = () => {
  return (
    <>
      <Seo
        title="Automobili | Sol Navis — uvoz i prodaja vozila"
        description="Prodaja, otkup i uvoz rabljenih i egzotičnih automobila iz EU. Leasing, kartično plaćanje do 60 rata, kompletna usluga do registracije."
        path="/automobili"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AutoDealer",
          name: "Sol Navis Automobili",
          url: "https://sol-navis.hr/automobili",
          areaServed: "HR",
          priceRange: "$$$",
        }}
      />
      <HeroSection />
      <FinancingSection />
      <GridSection />
    </>
  );
};
export default Cars;
