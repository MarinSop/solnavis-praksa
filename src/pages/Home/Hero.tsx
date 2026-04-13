import { useState } from "react";
import carImg from "../../assets/images/home/hero-car.webp";
import yachtImg from "../../assets/images/home/hero-yacht.webp";
import investmentsImg from "../../assets/images/home/hero-investments.webp";

const sections = [
  {
    img: carImg,
    clip: "polygon(0 0, 35% 0, 25% 100%, 0 100%)",
    imgClass: "absolute left-0 top-0 w-[35%] h-full",
    objectPosition: "60% center",
    index: 0,
  },
  {
    img: yachtImg,
    clip: "polygon(35% 0, 75% 0, 65% 100%, 25% 100%)",
    imgClass: "absolute left-[25%] top-0 w-[50%] h-full",
    objectPosition: "center center",
    index: 1,
  },
  {
    img: investmentsImg,
    clip: "polygon(75% 0, 100% 0, 100% 100%, 65% 100%)",
    imgClass: "absolute left-[65%] top-0 w-[35%] h-full",
    objectPosition: "center center",
    index: 2,
  },
];
const Hero = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] pt-16">
      {sections.map((s) => (
        <div
          key={s.index}
          onMouseEnter={() => setHovered(s.index)}
          onMouseLeave={() => setHovered(null)}
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: s.clip }}
        >
          <img
            src={s.img}
            fetchPriority="high"
            className={`${s.imgClass} object-cover transition-all duration-700 ease-out`}
            style={{
              objectPosition: s.objectPosition,
              transform: hovered === s.index ? "scale(1.05)" : "scale(1)",
              filter: hovered === s.index ? "grayscale(0)" : "grayscale(1)",
            }}
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line
          x1="31%"
          y1="0"
          x2="21%"
          y2="100%"
          stroke="var(--color-primary)"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <line
          x1="33%"
          y1="0"
          x2="23%"
          y2="100%"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeOpacity="0.8"
        />
        <line
          x1="35%"
          y1="0"
          x2="25%"
          y2="100%"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeOpacity="0.8"
        />
        <line
          x1="37%"
          y1="0"
          x2="27%"
          y2="100%"
          stroke="var(--color-primary)"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <line
          x1="71%"
          y1="0"
          x2="61%"
          y2="100%"
          stroke="var(--color-primary)"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <line
          x1="73%"
          y1="0"
          x2="63%"
          y2="100%"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeOpacity="0.8"
        />
        <line
          x1="75%"
          y1="0"
          x2="65%"
          y2="100%"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeOpacity="0.8"
        />
        <line
          x1="77%"
          y1="0"
          x2="67%"
          y2="100%"
          stroke="var(--color-primary)"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
      </svg>
    </div>
  );
};

export default Hero;
