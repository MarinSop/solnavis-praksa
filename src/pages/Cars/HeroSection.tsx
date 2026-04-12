import { useTranslation } from "react-i18next";
import carIcon from "@assets/icons/car.svg";
import { njuskaloUrlNautics } from "@/constants/urls";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 pt-24 md:pt-40 flex justify-between items-end gap-8">
      <div className="flex flex-col gap-4 max-w-[957px]">
        <h1 className="font-serif font-black text-4xl md:text-[72px] md:leading-[72px] tracking-[-1px] md:tracking-[-3.6px] text-headline">
          {t("cars.hero.title")}
        </h1>
        <p className="font-sans text-[18px] leading-[29px] text-text max-w-[672px]">
          {t("cars.hero.desc")}
        </p>

        <div className="flex items-center gap-4 pt-4">
          <a
            href={njuskaloUrlNautics}
            className="flex items-center gap-4 bg-primary text-secondary font-bold text-[14px] tracking-[1.4px] uppercase px-8 py-4"
          >
            <img src={carIcon} />
            {t("cars.hero.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
