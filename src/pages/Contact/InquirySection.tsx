import { useState } from "react";
import { useTranslation } from "react-i18next";

const interests = [
  { key: "cars", label: "contact.inquiry.cars", subject: "Automobili" },
  { key: "yachts", label: "contact.inquiry.yachts", subject: "Nautika" },
  {
    key: "investments",
    label: "contact.inquiry.investments",
    subject: "Investicije",
  },
];

const ACCESS_KEY = import.meta.env.VITE_STATIC_FORMS_KEY;
const ENDPOINT = "https://api.staticforms.xyz/submit";

type Status = "idle" | "sending" | "success" | "error";

const InquirySection = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("cars");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessKey: ACCESS_KEY,
          name,
          email,
          replyTo: email,
          subject: `[${interests.find((i) => i.key === interest)?.subject.toUpperCase()}] Upit — ${name}`,
          message,
          honeypot,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setInterest("cars");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-16 md:mb-32">
      <div className="bg-secondary-light p-6 md:p-12 border-b border-primary">
        <h2 className="font-headline text-2xl md:text-3xl text-primary mb-8 md:mb-12">
          {t("contact.inquiry.title")}
        </h2>
        <form className="space-y-10" onSubmit={handleSubmit}>
          <input
            type="text"
            name="honeypot"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-text mb-2">
                {t("contact.inquiry.nameLabel")}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  <input
                    type="radio"
                    name="interest"
                    value={key}
                    checked={interest === key}
                    onChange={() => setInterest(key)}
                    className="hidden peer"
                  />
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
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("contact.inquiry.messagePlaceholder")}
              className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary focus:outline-none text-headline py-2 resize-none"
            />
          </div>

          <div className="pt-2 flex items-center gap-6">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-primary text-secondary px-12 py-4 text-xs uppercase tracking-[0.3em] font-bold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? t("contact.inquiry.sending")
                : t("contact.inquiry.submit")}
            </button>
            {status === "success" && (
              <p className="text-primary text-xs uppercase tracking-widest">
                {t("contact.inquiry.success")}
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-xs uppercase tracking-widest">
                {t("contact.inquiry.error")}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default InquirySection;
