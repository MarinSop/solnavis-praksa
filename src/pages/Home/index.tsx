import Seo from "@/components/Seo";
import CarsSection from "./CarsSection";
import HeroWithHeader from "./HeroWithHeader";
import InvestmentsSection from "./InvestmentsSection";
import YachtsSection from "./YachtsSections";

const Home = () => {
  return (
    <>
      <Seo
        title="Sol Navis — Nautika, automobili i investicije u Splitu"
        description="Sol Navis d.o.o. — prodaja i servis plovila, uvoz automobila i investicije na Jadranu. 15+ godina iskustva. Split, Hrvatska."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Sol Navis d.o.o.",
          url: "https://sol-navis.hr",
          logo: "https://sol-navis.hr/logo.png",
          sameAs: [
            "https://yachtsincroatia.com",
            "https://yachtsinmontenegro.com",
            "https://www.njuskalo.hr/trgovina/sol-navis-yachting",
          ],
          areaServed: ["HR", "ME", "BA", "RS"],
        }}
      />
      <HeroWithHeader />
      <CarsSection />
      <YachtsSection />
      <InvestmentsSection />
    </>
  );
};

export default Home;
