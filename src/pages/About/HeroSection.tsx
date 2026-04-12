import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <header className="max-w-7xl mx-auto px-6 lg:px-12 text-center my-16 md:my-32">
      <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl text-primary tracking-tighter leading-tight mb-6 md:mb-12">
        {t("about.hero.title")}
      </h1>

      <div className="space-y-6 text-base md:text-lg text-text leading-relaxed">
        <p>{t("about.hero.desc")}</p>
      </div>
    </header>
  );
};

export default HeroSection;
