import EditorialDivider from "@/components/EditorialDivider";
import { useTranslation } from "react-i18next";

const NauticsSection = () => {
  const { t } = useTranslation();

  return (
    <article className="mb-16 md:mb-32 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row w-full justify-between gap-8 md:gap-16">
        <div>
          <h2 className="text-headline text-3xl md:text-4xl mb-6 md:mb-8">
            {t("about.nautics.title")}
          </h2>
          <div className="space-y-6 text-base md:text-lg text-text leading-relaxed">
            <p>{t("about.nautics.p1")}</p>
            <p>{t("about.nautics.p2")}</p>
          </div>
        </div>
        <div className="hidden md:block"><EditorialDivider vertical /></div>
        <div className="md:mt-12 md:pt-8">
          <div className="mb-6">
            <h4 className="text-primary text-sm uppercase mb-4">
              {t("about.nautics.partners")}
            </h4>
            <ul className="space-y-2 text-sm text-text">
              <li>REX</li>
              <li>BOAT CARE</li>
              <li>YIC SEA ASSIST</li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary text-sm uppercase mb-4">
              {t("about.nautics.accreditations")}
            </h4>
            <p className="text-sm text-text">
              {t("about.nautics.accreditationsDesc")}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NauticsSection;
