import { useTranslation } from "react-i18next";
import supportIcon from "@assets/icons/support.svg";
import educationIcon from "@assets/icons/education.svg";
import partnerIcon from "@assets/icons/leasing.svg";

const partners = ["Dobit", "OTP Leasing", "Impuls", "Erste Leasing"];

const consulting = [
  "yachts.consulting.broker",
  "yachts.consulting.mediation",
  "yachts.consulting.legal",
];

const borderDefault = "1px solid rgba(255,255,255,0.1)";
const borderHover = "1px solid rgba(212,175,55,1)";

const YachtsConsultingSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 pt-8 md:pt-12 pb-16 md:pb-32 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
      {/* Savjetovanje */}
      <div className="flex flex-col gap-6">
        <img src={supportIcon} alt="" className="w-10 h-10" />
        <h3 className="font-serif font-bold text-[24px] text-headline">
          {t("yachts.consulting.title")}
        </h3>
        <p className="text-text text-sm font-light leading-relaxed">
          {t("yachts.consulting.desc")}
        </p>
        <ul className="flex flex-col gap-3">
          {consulting.map((key) => (
            <li
              key={key}
              className="flex items-center gap-3 text-sm text-text font-light"
            >
              <span className="w-1.5 h-1.5 bg-primary shrink-0" />
              {t(key)}
            </li>
          ))}
        </ul>
      </div>

      {/* Charter i Edukacija */}
      <div className="flex flex-col gap-6">
        <img src={educationIcon} alt="" className="w-10 h-10" />
        <h3 className="font-serif font-bold text-[24px] text-headline">
          {t("yachts.charter.title")}
        </h3>
        <p className="text-text text-sm font-light leading-relaxed">
          {t("yachts.charter.desc")}
        </p>
        <div className="flex flex-col gap-4">
          {[
            {
              label: "Yachts in Croatia",
              href: "https://www.yachtsincroatia.com/",
            },
            {
              label: "Yachts in Montenegro",
              href: "http://www.yachtsinmontenegro.com/",
            },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={{ border: borderDefault }}
              onMouseEnter={(e) => (e.currentTarget.style.border = borderHover)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.border = borderDefault)
              }
              className="flex items-center visited:text-headline hover:text-headline justify-between p-4 transition-colors text-headline font-bold text-xs uppercase tracking-widest"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>

      {/* Partneri */}
      <div className="flex flex-col gap-6">
        <img src={partnerIcon} alt="" className="w-10 h-10" />
        <h3 className="font-serif font-bold text-[24px] text-headline">
          {t("yachts.partners.title")}
        </h3>
        <p className="text-text text-sm font-light leading-relaxed">
          {t("yachts.partners.desc")}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {partners.map((p) => (
            <div
              key={p}
              className="p-3 bg-secondary-dark text-center text-[10px] font-bold uppercase tracking-widest text-text"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YachtsConsultingSection;
