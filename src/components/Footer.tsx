import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { facebookUrl, instagramUrl, tiktokUrl } from "@/constants/urls";

const Footer = () => {
  const { t } = useTranslation();

  const socials = [
    { label: "Instagram", href: instagramUrl },
    { label: "Facebook", href: facebookUrl },
    { label: "Tiktok", href: tiktokUrl },
  ];

  const companyInfo = [
    "Primostenska 8",
    "21 000 Split",
    "Hrvatska",
    "OIB: 55388833160",
    "VAT ID: HR55388833160",
  ];

  return (
    <footer className="bg-[#0E0E0E] border-t border-white/5 px-4 md:px-12 py-24">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left justify-items-center md:justify-items-start">
        <div className="flex flex-col flex-1">
          <p className="font-bold text-[14px] tracking-[1.4px] uppercase text-white/60 leading-5">
            Sol Navis d.o.o.
          </p>
          {companyInfo.map((info) => (
            <p
              key={info}
              className="text-[14px] tracking-[1.4px] uppercase text-white/40 leading-6"
            >
              {info}
            </p>
          ))}
          <a
            href="mailto:info@sol-navis.hr"
            className="text-[14px] text-primary lowercase leading-8"
          >
            info@sol-navis.hr
          </a>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <p className="text-[14px] tracking-[1.4px] uppercase text-primary">
            {t("footer.locations")}
          </p>
          <div>
            <p className="text-[14px] tracking-[1.4px] uppercase text-white/60">
              {t("footer.office")}
            </p>
            <p className="text-[14px] tracking-[1.4px] uppercase text-white/40">
              Stanka Vraza 15, Split
            </p>
          </div>
          <div>
            <p className="text-[14px] tracking-[1.4px] uppercase text-white/60">
              {t("footer.showroom")}
            </p>
            <p className="text-[14px] tracking-[1.4px] uppercase text-white/40">
              Trenkova 1, Split
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <p className="text-[14px] tracking-[1.4px] uppercase text-primary">
            {t("footer.nav")}
          </p>
          <Link
            to="/automobili"
            className="text-[16px] text-white/40 hover:text-primary visited:text-white/40 transition-colors"
          >
            {t("nav.cars")}
          </Link>
          <Link
            to="/jahte"
            className="text-[16px] text-white/40 hover:text-primary visited:text-white/40 transition-colors"
          >
            {t("nav.yachts")}
          </Link>
          <Link
            to="/investicije"
            className="text-[16px] text-white/40 hover:text-primary visited:text-white/40 transition-colors"
          >
            {t("nav.investments")}
          </Link>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <p className="text-[14px] tracking-[1.4px] uppercase text-primary">
            {t("footer.social")}
          </p>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-[14px] tracking-[1.4px] uppercase text-white/40 hover:text-primary visited:text-white/40 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto flex justify-between mt-16 pt-8 border-t border-white/5">
        <p className="text-[10px] tracking-[1px] uppercase text-white/20">
          © Sol Navis d.o.o.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
