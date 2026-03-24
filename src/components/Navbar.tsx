import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import logo from "../assets/icons/logo.png";
import logoText from "../assets/icons/logo_text.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const items = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.cars"), to: "/automobili" },
    { label: t("nav.yachts"), to: "/jahte" },
    { label: t("nav.investments"), to: "/investicije" },
    { label: t("nav.about"), to: "/o-nama" },
    { label: t("nav.contact"), to: "/kontakt" },
  ];

  const linkClass = (to: string) =>
    `h-full font-bold flex items-center text-xs uppercase transition-colors duration-200 ${
      location.pathname === to
        ? "text-primary"
        : "visited:text-headline text-headline hover:text-primary"
    }`;

  const langClass = (lang: string) =>
    `font-bold text-xs transition-colors bg-transparent border-none cursor-pointer duration-200 ${
      i18n.language === lang
        ? "text-primary"
        : "text-headline hover:text-primary"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 bg-secondary/60 backdrop-blur-sm">
      <Link to="/" className="flex gap-2 items-center">
        <img src={logo} className="h-8 w-8" />
        <img src={logoText} className="h-8" />
      </Link>

      <ul className="flex gap-8 h-full absolute left-1/2 -translate-x-1/2">
        {items.map((item) => (
          <li key={item.to} className="h-full">
            <Link to={item.to} className={linkClass(item.to)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <button
          onClick={() => i18n.changeLanguage("hr")}
          className={`${langClass("hr")} bg-transparent border-none cursor-pointer`}
        >
          HR
        </button>
        <span className="text-primary">|</span>
        <button
          onClick={() => i18n.changeLanguage("en")}
          className={`${langClass("en")} bg-transparent border-none cursor-pointer`}
        >
          EN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
