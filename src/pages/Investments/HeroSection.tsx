import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-12 mb-32">
      <h1 className="font-headline text-[8rem] leading-[0.9] font-light tracking-tighter text-headline uppercase mb-8">
        {t("investments.hero.title")} <br />
        <span className="text-primary italic">
          {t("investments.hero.titleAccent")}
        </span>
      </h1>
      <div className="w-24 h-px bg-primary mb-20" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <p className="font-headline text-4xl md:text-5xl text-headline font-light leading-tight">
          {t("investments.hero.tagline")}
        </p>
        <div className="bg-secondary-light border-0 border-l border-primary border-solid p-12">
          <p className="text-xl md:text-2xl text-text font-light leading-relaxed">
            {t("investments.hero.desc")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
