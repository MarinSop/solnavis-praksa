import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const InvestmentsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-0 mb-16 max-w-[1280px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col items-center gap-1 text-center">
        <Link to="/investicije">
          <h2 className="font-serif font-bold text-5xl md:text-[96px] leading-none mb-3 text-primary">
            {t("investments.title")}
          </h2>
        </Link>

        <p className="font-sans text-lg md:text-[24px] text-headline">
          {t("investments.subtitle")}
        </p>

        <p className="font-sans text-base md:text-[20px] leading-[32px] text-text">
          {t("investments.desc")}
        </p>

        <Link
          to="/investicije"
          className="font-bold tracking-[1.6px] visited:text-primary uppercase text-primary border-b border-primary pb-1 mt-6"
        >
          {t("investments.cta")}
        </Link>
      </div>
    </section>
  );
};

export default InvestmentsSection;
