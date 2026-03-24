import { useTranslation } from "react-i18next";
import maseratiImg from "../../assets/images/home/maserati.jpeg";
import porscheImg from "../../assets/images/home/porsche.jpg";

const CarsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-32 mb-56 max-w-[1280px] mx-auto">
      <div className="flex flex-col">
        <h2 className="font-serif my-3 font-bold text-[72px] text-headline">
          {t("cars.title")}
        </h2>
        <div className="flex flex-row justify-between w-full items-end">
          <p className="font-sans font-normal text-[18px] leading-[29px] w-[70%] text-text">
            {t("cars.desc")}
          </p>
          <a
            href="/automobili"
            className="font-bold tracking-[1.6px] uppercase text-primary border-b border-primary pb-1"
          >
            {t("cars.cta")}
          </a>
        </div>
      </div>
      <div className="relative h-[572px] mt-20">
        <div className="absolute left-0 w-[calc(50%-16px)] top-0 flex flex-col">
          <img src={maseratiImg} />
          <div className="p-8 border-t border-primary/20 bg-[#0E0E0E]">
            <h3 className="font-serif font-bold text-[24px] text-headline">
              Maserati MC 20
            </h3>
          </div>
        </div>

        <div className="absolute right-0 w-[calc(50%-16px)] top-24 flex flex-col">
          <img src={porscheImg} />
          <div className="p-8 border-t border-primary/20 bg-[#0E0E0E]">
            <h3 className="font-serif font-bold text-[24px] text-headline">
              Porsche Taycan 4s
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
