import EditorialDivider from "@/components/EditorialDivider";
import CarsSection from "./CarsSection";
import HeroSection from "./HeroSection";
import InvestmentsSection from "./InvestmentsSection";
import NauticsSection from "./NauticsSection";
import NetworkSection from "./NetworkSection";

const About = () => {
  return (
    <>
      <HeroSection />
      <NauticsSection />
      <EditorialDivider />
      <CarsSection />
      <EditorialDivider />
      <InvestmentsSection />
      <EditorialDivider />
      <NetworkSection />
    </>
  );
};
export default About;
