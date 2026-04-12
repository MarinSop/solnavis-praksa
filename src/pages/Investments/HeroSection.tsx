import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 pt-24 md:pt-0 mb-16 md:mb-32">
      <h1 className="font-headline text-5xl md:text-[8rem] leading-[0.9] font-light tracking-tighter text-headline uppercase mb-8">
        {t("investments.hero.title")} <br />
        <span className="text-primary italic">
          {t("investments.hero.titleAccent")}
        </span>
      </h1>
      <div className="w-24 h-px bg-primary mb-20" />
      <p className="font-headline text-4xl md:text-5xl text-headline font-light leading-tight">
        {t("investments.hero.tagline")}
      </p>
    </section>
  );
};

export default HeroSection;
