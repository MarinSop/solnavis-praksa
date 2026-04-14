import Hero from "./Hero";
import logo from "../../assets/icons/logo.png";
import logoText from "../../assets/icons/sol-navis-text.png";

const HeroWithHeader = () => {
  return (
    <section className="relative">
      <Hero />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <img
          src={logo}
          alt="Sol Navis logo"
          className="w-36 md:w-[16rem] drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
        />
        <img
          src={logoText}
          alt="Sol Navis"
          className="w-64 sm:w-72 md:w-[48rem] drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
        />
      </div>
    </section>
  );
};

export default HeroWithHeader;
