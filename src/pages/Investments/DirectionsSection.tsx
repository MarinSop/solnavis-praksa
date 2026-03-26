import { useTranslation } from "react-i18next";
import buildingIcon from "@assets/icons/building.svg";
import suitacaseIcon from "@assets/icons/suitcase.svg";

const CARDS = [
  {
    icon: buildingIcon,
    titleKey: "investments.directions.residential",
    descKey: "investments.directions.residentialDesc",
  },
  {
    icon: suitacaseIcon,
    titleKey: "investments.directions.strategic",
    descKey: "investments.directions.strategicDesc",
  },
];

const DirectionsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 mb-16 md:mb-24">
      <div className="flex items-center gap-6 mb-10 md:mb-16">
        <h2 className="font-headline text-xl md:text-3xl tracking-widest uppercase text-primary whitespace-nowrap">
          {t("investments.directions.title")}
        </h2>
        <div className="hidden md:block flex-grow h-px bg-primary" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {CARDS.map(({ icon, titleKey, descKey }) => (
          <div
            key={titleKey}
            className="bg-secondary-light p-10 border border-primary/10"
          >
            <img src={icon} className="w-10 h-10" />
            <h3 className="font-headline text-2xl mb-6 text-headline">
              {t(titleKey)}
            </h3>
            <p className="text-text font-light leading-relaxed mb-8">
              {t(descKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DirectionsSection;
