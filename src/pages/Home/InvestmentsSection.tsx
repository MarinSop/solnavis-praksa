import { useTranslation } from "react-i18next";

const InvestmentsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-0 mb-16 max-w-[1280px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="font-serif font-bold text-5xl md:text-[96px] leading-none mb-3 text-headline">
          {t("investments.title")}
        </h2>

        <p className="font-sans text-lg md:text-[24px] text-headline">
          {t("investments.subtitle")}
        </p>

        <p className="font-sans text-base md:text-[20px] leading-[32px] text-text">
          {t("investments.desc")}
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full mt-6">
          <div className="flex-1 border-t border-primary/30 pt-8 flex flex-col gap-4">
            <h4 className="font-serif font-bold text-[24px] mb-3 text-headline">
              {t("investments.service1.title")}
            </h4>
            <p className="font-sans text-[16px] leading-[24px] text-text">
              {t("investments.service1.desc")}
            </p>
          </div>
          <div className="flex-1 border-t border-primary/30 pt-8 flex flex-col gap-4">
            <h4 className="font-serif font-bold text-[24px] mb-3 text-headline">
              {t("investments.service2.title")}
            </h4>
            <p className="font-sans text-[16px] leading-[24px] text-text">
              {t("investments.service2.desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentsSection;
