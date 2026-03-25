import { useTranslation } from "react-i18next";

const MAPS = [
  {
    labelKey: "contact.info.hqLabel",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.4098316876743!2d16.47722527666917!3d43.51464576138051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355f0c77c034d1%3A0xd067026de456f461!2sRABLJENI%20AUTOMOBILI%20SPLIT!5e0!3m2!1sen!2shr!4v1774477557753!5m2!1sen!2shr",
  },
  {
    labelKey: "contact.info.showroomLabel",
    src: "https://maps.google.com/maps?q=Trenkova+1,+Split,+Croatia&output=embed&hl=hr",
  },
];

const MapSection = () => {
  const { t } = useTranslation();

  return (
    <section className="px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MAPS.map(({ labelKey, src }) => (
          <div key={labelKey}>
            <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-4">
              {t(labelKey)}
            </p>
            <iframe
              src={src}
              className="w-full h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MapSection;
