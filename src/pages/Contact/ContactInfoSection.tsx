import { useTranslation } from "react-i18next";
import pinIcon from "@assets/icons/pin.svg";
import telephoneIcon from "@assets/icons/telephone.svg";
import ContactCard from "../../components/ContactCard";
import { CONTACT } from "@/constants/contact";

const ContactInfoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-12 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20">
      <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactCard
          label={t("contact.info.hqLabel")}
          title={CONTACT.hqStreet}
          subtitle={`${CONTACT.hqPostalCode} ${CONTACT.hqCity}, ${t("contact.info.country")}`}
          icon={pinIcon}
        />
        <ContactCard
          label={t("contact.info.showroomLabel")}
          title={CONTACT.showroomStreet}
          subtitle={CONTACT.showroomCity}
          icon={pinIcon}
        />
        <ContactCard
          label={t("contact.info.phoneLabel")}
          title={CONTACT.phone}
          subtitle={t("contact.info.phoneHours")}
          icon={telephoneIcon}
          href={`tel:${CONTACT.phoneTel}`}
        />
      </div>

      <div className="lg:col-span-5">
        <div className="bg-secondary-light p-8 border-l-2 border-primary/20">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
            {t("contact.info.registryLabel")}
          </h3>
          <div className="space-y-4 text-sm">
            <p className="flex justify-between border-b border-primary/10 pb-2">
              <span className="text-text">{t("contact.info.entity")}</span>
              <span className="text-headline">{CONTACT.entity}</span>
            </p>
            <p className="flex justify-between border-b border-primary/10 pb-2">
              <span className="text-text">{t("contact.info.vatId")}</span>
              <span className="text-headline">{CONTACT.vatId}</span>
            </p>
            <p className="flex justify-between border-b border-primary/10 pb-2">
              <span className="text-text">{t("contact.info.iban")}</span>
              <span className="text-headline font-mono text-xs">
                {CONTACT.iban}
              </span>
            </p>
            <p className="flex justify-between border-b border-primary/10 pb-2">
              <span className="text-text">{t("contact.info.swift")}</span>
              <span className="text-headline font-mono text-xs">
                {CONTACT.swift}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
