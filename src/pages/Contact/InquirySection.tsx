import { useTranslation } from "react-i18next";

const interests = [
  { key: "cars", label: "contact.inquiry.cars" },
  { key: "yachts", label: "contact.inquiry.yachts" },
  { key: "investments", label: "contact.inquiry.investments" },
];
const InquirySection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-16 md:mb-32">
      <div className="bg-secondary-light p-6 md:p-12 border-b border-primary">
        <h2 className="font-headline text-2xl md:text-3xl text-primary mb-8 md:mb-12">
          {t("contact.inquiry.title")}
        </h2>
        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-text mb-2">
                {t("contact.inquiry.nameLabel")}
              </label>
              <input
                type="text"
                placeholder={t("contact.inquiry.namePlaceholder")}
                className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:outline-none text-headline py-2"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-text mb-2">
                {t("contact.inquiry.emailLabel")}
              </label>
              <input
                type="email"
                placeholder={t("contact.inquiry.emailPlaceholder")}
                className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:outline-none text-headline py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-text mb-4">
              {t("contact.inquiry.interestLabel")}
            </label>
            <div className="flex flex-wrap gap-4">
              {interests.map(({ key, label }) => (
                <label key={key} className="cursor-pointer">
                  <input type="radio" name="interest" className="hidden peer" />
                  <span className="px-6 py-2 border border-primary/20 border-solid text-text text-xs uppercase peer-checked:text-primary peer-checked:bg-primary/2 transition-colors">
                    {t(label)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-text mb-2">
              {t("contact.inquiry.messageLabel")}
            </label>
            <textarea
              rows={4}
              placeholder={t("contact.inquiry.messagePlaceholder")}
              className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:outline-none text-headline py-2 resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="bg-primary text-secondary px-12 py-4 text-xs uppercase tracking-[0.3em] font-bold hover:brightness-110 transition-all"
            >
              {t("contact.inquiry.submit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InquirySection;
