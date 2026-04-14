import Seo from "@/components/Seo";
import HeroSection from "./HeroSection";
import GallerySection from "./GallerySection";

const Investments = () => {
  return (
    <>
      <Seo
        title="Investicije | Sol Navis — nekretnine i razvoj projekata"
        description="Investicije u nekretnine, turizam, građevinu i ugostiteljstvo na Jadranu. Stambeni i strateški projekti uz transparentno vođenje."
        path="/investicije"
      />
      <HeroSection />
      <GallerySection />
    </>
  );
};
export default Investments;
