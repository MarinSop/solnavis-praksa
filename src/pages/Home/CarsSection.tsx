import { useTranslation } from "react-i18next";
import maseratiImg from "../../assets/images/home/maserati.webp";
import { Link } from "react-router";
import CarCard from "@/components/CarCard";

const CarsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-12 md:mt-32 mb-24 md:mb-56 max-w-[1280px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row gap-8 md:items-center">
        <div className="flex flex-col md:w-1/2">
          <Link to="/automobili">
            <h2 className="font-serif mt-3 mb-6 font-bold text-4xl md:text-[72px] leading-tight text-primary">
              {t("cars.title")}
            </h2>
          </Link>
          <p className="font-sans font-normal text-[18px] leading-[29px] text-text">
            {t("cars.desc")}
          </p>
          <a
            href="/automobili"
            className="font-bold tracking-[1.6px] visited:text-primary uppercase text-primary border-b border-primary pb-1 shrink-0 self-start mt-6"
          >
            {t("cars.cta")}
          </a>
        </div>
        <div className="md:w-1/2">
          <Link to="/automobili">
            <CarCard img={maseratiImg} variant="default" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
