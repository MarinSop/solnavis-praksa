import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <header className="max-w-7xl mx-auto px-8 md:px-12 text-center my-32">
      <h1 className="font-headline text-6xl md:text-8xl text-primary tracking-tighter leading-tight mb-12">
        {t("about.hero.title")}
      </h1>
      <p className="font-headline text-headline italic text-2xl md:text-3xl font-light text-on-surface/90 leading-relaxed">
        "{t("about.hero.desc")}"
      </p>
    </header>
  );
};

export default HeroSection;
