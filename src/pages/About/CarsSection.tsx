import EditorialDivider from "@/components/EditorialDivider";
import { useTranslation } from "react-i18next";

const CarsSection = () => {
  const { t } = useTranslation();

  return (
    <article className="flex flex-col md:flex-row gap-16 mb-32 max-w-7xl mx-auto">
      <div className="flex flex-row w-full justify-between gap-16">
        <div>
          <div className="flex items-baseline gap-4 mb-8">
            <h2 className="text-headline text-4xl">{t("about.cars.title")}</h2>
            <span className="text-primary font-headline italic text-xl">
              {t("about.cars.experience")}
            </span>
          </div>
          <p className="text-lg text-text leading-relaxed text-on-surface/80">
            {t("about.cars.desc")}
          </p>
        </div>
        <EditorialDivider vertical />
        <div className="mt-12 gap-8 pt-8">
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
