import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import anchorIcon from "../../assets/icons/anchor.svg";
import boatIcon from "../../assets/icons/boat.svg";
import compassIcon from "../../assets/icons/compass.svg";
import yachtImg from "../../assets/images/home/yacht.webp";

const YachtsSection = () => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  const features = [
    {
      title: t("yachts.features.sales.title"),
      desc: t("yachts.features.sales.desc"),
      icon: boatIcon,
    },
    {
      title: t("yachts.features.service.title"),
      desc: t("yachts.features.service.desc"),
      icon: anchorIcon,
    },
    {
      title: t("yachts.features.charter.title"),
      desc: t("yachts.features.charter.desc"),
      icon: compassIcon,
    },
  ];

  return (
    <section className="mb-8 max-w-[1280px] mx-auto px-6 lg:px-12 relative">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col md:w-[465px] md:shrink-0">
          <Link to="/nautika">
            <h2 className="font-serif font-bold text-4xl md:text-[60px] leading-tight my-3 text-primary">
              {t("yachts.title")}
            </h2>
          </Link>
          <p className="font-sans text-[18px] leading-[29px] text-text">
            {t("yachts.desc")}
          </p>
          <div className="flex flex-col">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <img src={f.icon} className="w-5 h-5 mt-4" />
                <div>
                  <p className="font-bold text-[16px] text-headline">
                    {f.title}
                  </p>
                  <p className="text-[14px] text-text">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative w-full"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={yachtImg}
            loading="lazy"
            className="w-full h-[670px] object-cover object-bottom"
          />
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${hovered ? "opacity-50" : "opacity-0"}`}
          />
          <Link
            to="/jahte"
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          >
            <span className="bg-primary text-secondary font-bold text-[14px] tracking-[1.6px] uppercase px-10 py-4">
              {t("yachts.cta")}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default YachtsSection;
