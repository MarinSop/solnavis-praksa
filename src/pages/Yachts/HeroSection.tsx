import { useTranslation } from "react-i18next";
import yachtHeroImg from "@assets/images/home/hero-yacht.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[819px] w-full flex items-end overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <img
          src={yachtHeroImg}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />

        <div className="relative z-10 px-12 pb-20 max-w-[1280px]">
          <h1 className="font-serif font-black text-[72px] leading-tight tracking-tighter text-headline mb-6">
            {t("yachts.hero.title")}
          </h1>
          <p className="text-text text-lg max-w-2xl font-light leading-relaxed">
            {t("yachts.hero.desc")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
