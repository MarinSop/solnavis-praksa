import EditorialDivider from "@/components/EditorialDivider";
import { useTranslation } from "react-i18next";

const InvestmentsSection = () => {
  const { t } = useTranslation();

  return (
    <article className="flex flex-col md:flex-row gap-16 mb-32 max-w-7xl mx-auto">
      <div className="flex flex-row w-full justify-between gap-16">
        <div>
          <h2 className="text-headline text-4xl mb-8">
            {t("about.investments.title")}
          </h2>
          <p className="text-lg text-text leading-relaxed text-on-surface/80">
            {t("about.investments.desc")}
          </p>
        </div>
        <EditorialDivider vertical />
        <div className="mt-12 pt-8">
          <div className="border-l-2 border-primary pl-8 py-2 mb-6">
            <h4 className="text-primary text-sm uppercase mb-4">
              {t("about.investments.housing")}
            </h4>
            <p className="text-sm text-text">
              {t("about.investments.housingDesc")}
            </p>
          </div>
          <div className="border-l-2 border-primary pl-8 py-2">
            <h4 className="text-primary text-sm uppercase mb-4">
              {t("about.investments.consulting")}
            </h4>
            <p className="text-sm text-text">
              {t("about.investments.consultingDesc")}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default InvestmentsSection;
