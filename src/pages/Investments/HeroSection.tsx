import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 pt-24 md:pt-40 mb-16 md:mb-32 relative">
      <div className="absolute -top-4 left-4 md:left-12 w-20 h-20 border-t-2 border-l-2 border-primary" />

      <h1 className="font-headline text-5xl md:text-[8rem] leading-[0.9] font-light tracking-tighter text-headline uppercase mb-10 md:mb-14">
        {t("investments.hero.title")} <br />
        <span className="text-primary italic">
          {t("investments.hero.titleAccent")}
        </span>
      </h1>

      <div className="flex items-center gap-6 mb-12 md:mb-16">
        <div className="w-16 md:w-24 h-px bg-primary" />
        <div className="w-2 h-2 bg-primary" />
        <div className="flex-1 h-px bg-primary/20" />
      </div>

      <p className="font-headline text-3xl md:text-6xl text-headline font-light leading-tight max-w-5xl">
        {t("investments.hero.tagline")}
      </p>

      <div className="absolute -bottom-4 right-4 md:right-12 w-20 h-20 border-b-2 border-r-2 border-primary" />
    </section>
  );
};

export default HeroSection;
