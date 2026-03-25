import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-12 mb-24 max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
      <div className="md:w-1/2">
        <h1 className="font-headline text-6xl md:text-8xl text-primary tracking-tighter leading-none mb-8">
          {t("contact.hero.title")}
        </h1>
        <p className="text-lg text-text max-w-md">{t("contact.hero.desc")}</p>
      </div>
      <div className="md:w-1/3 text-right">
        <div className="inline-block p-8 border-l border-primary/20 text-left">
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
