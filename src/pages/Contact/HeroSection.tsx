import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 lg:px-12 pt-24 md:pt-0 mb-12 md:mb-24 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
      <div className="md:w-1/2">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl text-primary tracking-tighter leading-none mb-6 md:mb-8">
          {t("contact.hero.title")}
        </h1>
        <p className="text-base md:text-lg text-text max-w-md">{t("contact.hero.desc")}</p>
      </div>
      <div className="md:w-1/3 md:text-right">
        <div className="inline-block p-6 md:p-8 border-l border-primary/20 text-left">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary mb-2">
            {t("contact.hero.emailLabel")}
          </p>
          <p className="text-headline text-xl text-on-surface tracking-wide">
            {t("contact.hero.email")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
