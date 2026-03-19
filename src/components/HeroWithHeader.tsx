import Hero from "./Hero";

const HeroWithHeader = () => {
  return (
    <div className="relative w-full h-[70vh] mt-6">
      <Hero />

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-[#ffffff] text-6xl md:text-8xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]">
          SOL NAVIS
        </h1>
        <h3 className="text-[#ffffff] text-xl md:text-2xl mt-4 tracking-wide drop-shadow-[0_0_6px_rgba(0,0,0,0.7)]">
          Premium Luxury Experience
        </h3>
      </div>
    </div>
  );
};

export default HeroWithHeader;
