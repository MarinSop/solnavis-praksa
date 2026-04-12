import { useState } from "react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import logo from "../assets/icons/logo.png";
import logoText from "../assets/icons/logo_text.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const items = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.cars"), to: "/automobili" },
    { label: t("nav.yachts"), to: "/nautika" },
    { label: t("nav.investments"), to: "/investicije" },
    { label: t("nav.about"), to: "/o-nama" },
    { label: t("nav.contact"), to: "/kontakt" },
  ];

  const linkClass = (to: string) =>
    `font-bold text-xs uppercase transition-colors duration-200 ${
      location.pathname === to
        ? "text-primary visited:text-primary"
        : "text-headline visited:text-headline hover:text-primary"
    }`;

  const langClass = (lang: string) =>
    `font-bold text-xs transition-colors bg-transparent border-none cursor-pointer duration-200 ${
      i18n.language === lang
        ? "text-primary"
        : "text-headline hover:text-primary"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-screen overflow-x-hidden bg-secondary/60 backdrop-blur-sm">
      <div className="h-16 flex items-center justify-between px-4">
        <Link to="/" className="flex gap-2 items-center">
          <img src={logo} className="h-8 w-8" />
          <img src={logoText} className="h-8" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-8 h-full absolute left-1/2 -translate-x-1/2">
          {items.map((item) => (
            <li key={item.to} className="flex items-center">
              <Link to={item.to} className={linkClass(item.to)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => i18n.changeLanguage("hr")}
            className={langClass("hr")}
          >
            HR
          </button>
          <span className="text-primary">|</span>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={langClass("en")}
          >
            EN
          </button>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 ml-2 cursor-pointer bg-transparent border-none"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block w-5 h-px bg-headline transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-headline transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-headline transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <ul
        className="lg:hidden flex flex-col px-4 gap-4 overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: open ? "400px" : "0",
          paddingTop: open ? "1rem" : "0",
          paddingBottom: open ? "1rem" : "0",
        }}
      >
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={linkClass(item.to)}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
