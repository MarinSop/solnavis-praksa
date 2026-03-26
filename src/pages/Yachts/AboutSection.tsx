import { useTranslation } from "react-i18next";
import { njuskaloUrl } from "@/constants/urls";
import fixerIcon from "@assets/icons/fix.svg";
import checklistIcon from "@assets/icons/checklist.svg";
import warningIcon from "@assets/icons/!.svg";
import cartIcon from "@assets/icons/cart.svg";

const AboutSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: warningIcon,
      titleKey: "yachts.services.intervention.title",
      descKey: "yachts.services.intervention.desc",
    },
    {
      icon: fixerIcon,
      titleKey: "yachts.services.repair.title",
      descKey: "yachts.services.repair.desc",
    },
    {
      icon: checklistIcon,
      titleKey: "yachts.services.assessment.title",
      descKey: "yachts.services.assessment.desc",
    },
  ];

  const brands = [
    {
      titleKey: "yachts.brands.blumar.title",
      descKey: "yachts.brands.blumar.desc",
    },
    {
      titleKey: "yachts.brands.salona.title",
      descKey: "yachts.brands.salona.desc",
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 pt-8 md:pt-12 pb-16 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
      {/* Lijevo */}
      <div className="md:col-span-7 flex flex-col gap-12">
        <div>
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">
            {t("yachts.about.label")}
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-[48px] text-headline mb-8">
            {t("yachts.about.title")}
          </h2>
          <p className="text-text text-lg font-light leading-relaxed">
            {t("yachts.about.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((b) => (
            <div
              key={b.titleKey}
              className="p-8 transition-colors cursor-default"
              style={{ border: "1px solid rgba(212,175,55,0.2)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.border =
                  "1px solid rgba(212,175,55,0.8)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.border =
                  "1px solid rgba(212,175,55,0.2)")
              }
            >
              <h4 className="font-serif font-bold text-primary mb-3">
                {t(b.titleKey)}
              </h4>
              <p className="text-text text-sm font-light leading-relaxed">
                {t(b.descKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-secondary-light p-10 border-l-4 border-primary">
          <h3 className="font-serif font-bold text-[24px] text-headline mb-3">
            {t("yachts.about.cta.title")}
          </h3>
          <p className="text-text mb-8 font-light">
            {t("yachts.about.cta.desc")}
          </p>
          <a
            href={njuskaloUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-4 bg-primary font-bold text-[14px] tracking-[1.6px] uppercase px-10 py-5"
          >
            {t("yachts.about.cta.btn")}
            <img src={cartIcon} className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Desno */}
      <div className="md:col-span-5 pl-0 md:pl-8 md:border-l md:border-primary/30 flex flex-col gap-12">
        <h2 className="font-serif font-bold text-[28px] text-primary">
          {t("yachts.services.title")}
        </h2>
        {services.map((s) => (
          <div key={s.titleKey}>
            <div className="flex flex-row items-center gap-4">
              <img src={s.icon} className="w-5 h-5" />
              <h4 className="font-serif font-bold text-[20px] text-headline ">
                {t(s.titleKey)}
              </h4>
            </div>
            <p className="text-text text-sm font-light leading-relaxed">
              {t(s.descKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
