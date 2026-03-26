import EditorialDivider from "@/components/EditorialDivider";
import { useTranslation } from "react-i18next";

const CarsSection = () => {
  const { t } = useTranslation();

  return (
    <article className="mb-16 md:mb-32 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row w-full justify-between gap-8 md:gap-16">
        <div>
          <div className="flex flex-wrap items-baseline gap-4 mb-6 md:mb-8">
            <h2 className="text-headline text-3xl md:text-4xl">{t("about.cars.title")}</h2>
            <span className="text-primary font-headline italic text-xl">
              {t("about.cars.experience")}
            </span>
          </div>
          <p className="text-base md:text-lg text-text leading-relaxed">
            {t("about.cars.desc")}
          </p>
        </div>
        <div className="hidden md:block"><EditorialDivider vertical /></div>
        <div className="md:mt-12 gap-8 md:pt-8">
          <div className="mb-6">
            <h4 className="text-primary text-sm uppercase mb-4">
              {t("about.cars.logistics")}
            </h4>
            <p className="text-sm text-text">{t("about.cars.logisticsDesc")}</p>
          </div>
          <div>
            <h4 className="text-primary text-sm uppercase mb-4">
              {t("about.cars.payment")}
            </h4>
            <p className="text-sm text-text">{t("about.cars.paymentDesc")}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CarsSection;
