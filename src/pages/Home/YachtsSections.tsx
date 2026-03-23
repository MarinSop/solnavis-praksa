import anchorIcon from "../../assets/icons/anchor.svg";
import boatIcon from "../../assets/icons/boat.svg";
import compassIcon from "../../assets/icons/compass.svg";
import yachtImg from "../../assets/images/home/yacht.jpg";

const features = [
  {
    title: "Prodaja i zastupstvo plovila",
    desc: "Ovlašteni zastupnici renomiranih brendova poput Blumar Yachts i Salona jedrilica",
    icon: boatIcon,
  },
  {
    title: "Servis i održavanje",
    desc: "Kompletna briga o plovilu od popravaka do godišnjeg održavanja i transfera",
    icon: anchorIcon,
  },
  {
    title: "Charter i savjetovanje",
    desc: "Najam plovila, charter usluge i stručni nautički te brodograđevni konzulting",
    icon: compassIcon,
  },
];

const YachtsSection = () => {
  return (
    <section className="px-12 py-48 max-w-[1280px] mx-auto relative">
      <div className="flex gap-5">
        <div className="flex flex-col w-[465px] shrink-0">
          <h2 className="font-serif font-bold text-[60px] my-3 text-headline">
            Ekskluzivna nautika
          </h2>

          <p className="font-sans text-[18px] leading-[29px] text-text">
            Specijalizirani za prodaju, servis i charter plovila, pružamo
            kompletnu nautičku uslugu od kupnje i održavanja do savjetovanja i
            organizacije plovidbe. Vaše povjerenje gradimo kroz iskustvo,
            stručnost i vrhunsku podršku na moru i kopnu.
          </p>

          <div className="flex flex-col">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <img src={f.icon} className="w-5 h-5 mt-4" />
                <div>
                  <p className="font-bold text-[16px] text-headline">
                    {f.title}
                  </p>
                  <p className="text-[14px] text-text">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full gap-6 items-center">
          <img
            src={yachtImg}
            className="w-full h-[670px] object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default YachtsSection;
