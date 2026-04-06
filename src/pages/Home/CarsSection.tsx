import { useTranslation } from "react-i18next";
import maseratiImg from "../../assets/images/home/maserati.webp";

const CarsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-12 md:mt-32 mb-24 md:mb-56 max-w-[1280px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col">
        <a  href="/automobili"><h2 className="font-serif my-3 font-bold text-4xl md:text-[72px] text-primary">
          {t("cars.title")}
        </h2></a>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <p className="font-sans font-normal text-[18px] leading-[29px] md:w-[70%] text-text">
            {t("cars.desc")}
          </p>
          <a
            href="/automobili"
            className="font-bold tracking-[1.6px] visited:text-primary uppercase text-primary border-b border-primary pb-1 shrink-0"
          >
            {t("cars.cta")}
          </a>
        </div>
      </div>
      <div className="mt-20 grid items-center justify-center">
        <a  href="/automobili"><img src={maseratiImg}></img></a>
      </div>
    </section>
  );
};

export default CarsSection;
