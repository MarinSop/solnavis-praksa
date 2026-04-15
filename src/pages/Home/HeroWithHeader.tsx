import Hero from "./Hero";
import logo from "../../assets/icons/logo.webp";
import logoText from "../../assets/icons/sol-navis-text.webp";

const HeroWithHeader = () => {
  return (
    <section className="relative">
      <Hero />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-6 pointer-events-none px-6">
        <img
          src={logo}
          alt="Sol Navis logo"
          className="w-24 md:w-[16rem] h-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
        />
        <img
          src={logoText}
          alt="Sol Navis"
          className="w-56 sm:w-72 md:w-[48rem] h-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
        />
      </div>
    </section>
  );
};

export default HeroWithHeader;
