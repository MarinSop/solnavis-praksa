import { useState } from "react";
import carImg from "../../assets/images/home/hero-car.jpg";
import yachtImg from "../../assets/images/home/hero-yacht.jpg";
import investmentsImg from "../../assets/images/home/hero-investments.jpeg";

const zoomPercentage = "105%";

const Hero = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  return (
    <div className="relative w-full h-[80vh] pt-16">
      <div
        onMouseEnter={() => setHovered1(true)}
        onMouseLeave={() => setHovered1(false)}
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: "polygon(0 0, 35% 0, 25% 100%, 0 100%)" }}
      >
        <img
          src={carImg}
          className="absolute left-0 top-0 w-[35%] h-full object-cover transition-transform duration-500 ease-out"
          style={{
            objectPosition: "center center",
            transform: hovered1 ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      <div
        onMouseEnter={() => setHovered2(true)}
        onMouseLeave={() => setHovered2(false)}
        className="absolute inset-0 transition-all duration-500 ease-out"
        style={{
          backgroundImage: `url(${yachtImg})`,
          backgroundSize: hovered2 ? zoomPercentage : "100%",
          backgroundPosition: "center",
          clipPath: "polygon(35% 0, 75% 0, 65% 100%, 25% 100%)",
        }}
      />

      <div
        onMouseEnter={() => setHovered3(true)}
        onMouseLeave={() => setHovered3(false)}
        className="absolute inset-0 transition-all duration-500 ease-out"
        style={{
          backgroundImage: `url(${investmentsImg})`,
          backgroundSize: hovered3 ? zoomPercentage : "100%",
          backgroundPosition: "right center",
          clipPath: "polygon(75% 0, 100% 0, 100% 100%, 65% 100%)",
        }}
      />

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
