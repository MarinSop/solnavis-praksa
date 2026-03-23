import Hero from "./Hero";
import logo from "../../assets/icons/logo.png";
import logoText from "../../assets/icons/logo_text.png";

const HeroWithHeader = () => {
  return (
    <section className="relative">
      <Hero />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <img
          src={logo}
          className="md:w-[16rem] drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
        />
        <img
          src={logoText}
          className="md:w-[48rem] drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
        />
      </div>
    </section>
  );
};

export default HeroWithHeader;
