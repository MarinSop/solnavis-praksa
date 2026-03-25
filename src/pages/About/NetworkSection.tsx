import { useTranslation } from "react-i18next";

const NetworkSection = () => {
  const { t } = useTranslation();
  const partners = t("about.network.partners", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="mb-32 text-center max-w-7xl mx-auto">
      <span className="text-primary text-xs uppercase tracking-[0.3em] mb-16 block">
        {t("about.network.label")}
      </span>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8">
        {partners.map((name) => (
          <span key={name} className="text-text text-lg">
            {name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default NetworkSection;
