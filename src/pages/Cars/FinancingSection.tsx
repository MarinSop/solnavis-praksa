import { useTranslation } from "react-i18next";
import cardIcon from "../../assets/icons/card.svg";
import leasingIcon from "../../assets/icons/leasing.svg";
import truckIcon from "../../assets/icons/truck.svg";

const financingItems = [
  {
    icon: cardIcon,
    titleKey: "cars.financing.credit.title",
    descKey: "cars.financing.credit.desc",
  },
  {
    icon: leasingIcon,
    titleKey: "cars.financing.leasing.title",
    descKey: "cars.financing.leasing.desc",
  },
  {
    icon: truckIcon,
    titleKey: "cars.financing.transport.title",
    descKey: "cars.financing.transport.desc",
  },
];

const FinancingSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 border-y border-[#4D4635]/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {financingItems.map((item) => (
          <div key={item.titleKey} className="flex flex-col gap-4 flex-1">
            <img src={item.icon} alt="" className="w-8 h-8" />
            <h3 className="font-serif font-bold text-[20px] text-headline">
              {t(item.titleKey)}
            </h3>
            <p className="text-[14px] leading-[23px] text-text">
              {t(item.descKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinancingSection;
