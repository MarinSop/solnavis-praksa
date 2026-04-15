import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import Seo from "@/components/Seo";

const Error = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <Seo
        title="404 — Stranica nije pronađena | Sol Navis"
        description="Stranica koju tražite ne postoji."
        path="/404"
      />
      <h1 className="font-serif font-bold text-[96px] text-primary">404</h1>
      <p className="font-bold text-[24px] text-headline">{t("error.title")}</p>
      <p className="text-text">{t("error.desc")}</p>
      <Link
        to="/"
        style={{ backgroundColor: "#D4AF37", color: "#131313" }}
        className="mt-4 hover:brightness-110 font-bold text-[14px] tracking-[1.6px] uppercase px-8 py-3 transition-all"
      >
        {t("error.back")}
      </Link>
    </div>
  );
};

export default Error;
