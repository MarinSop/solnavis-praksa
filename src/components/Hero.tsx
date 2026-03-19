import { useState } from "react";
import img1 from "../assets/pocetna-auto.jpg";
import img2 from "../assets/pocetna-jahta.jpg";
import img3 from "../assets/pocetna-investicije.jpg";

const zoomPercentage = "105%";

const Hero = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  return (
    <div className="relative w-full h-[70vh] mt-6 rounded-2xl overflow-hidden">
      <div
        onMouseEnter={() => setHovered1(true)}
        onMouseLeave={() => setHovered1(false)}
        className="absolute inset-0 transition-all duration-500 ease-out"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: hovered1 ? zoomPercentage : "100%",
          backgroundPosition: "center",
          clipPath: "polygon(0 0, 35% 0, 25% 100%, 0 100%)",
        }}
      />

      <div
        onMouseEnter={() => setHovered2(true)}
        onMouseLeave={() => setHovered2(false)}
        className="absolute inset-0 transition-all duration-500 ease-out"
        style={{
          backgroundImage: `url(${img2})`,
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
          backgroundImage: `url(${img3})`,
          backgroundSize: hovered3 ? zoomPercentage : "100%",
          backgroundPosition: "right center",
          clipPath: "polygon(75% 0, 100% 0, 100% 100%, 65% 100%)",
        }}
      />

      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line
          x1="35%"
          y1="0"
          x2="25%"
          y2="100%"
          stroke="#c9a84c"
          strokeWidth="3"
        />
        <line
          x1="75%"
          y1="0"
          x2="65%"
          y2="100%"
          stroke="#c9a84c"
          strokeWidth="3"
        />
      </svg>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_60%,_rgba(0,0,0,0.75)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,_rgba(0,0,0,0.65),_rgba(0,0,0,0)_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.65),_rgba(0,0,0,0)_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_left,_rgba(0,0,0,0.65),_rgba(0,0,0,0)_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,_rgba(0,0,0,0.65),_rgba(0,0,0,0)_40%)]" />
    </div>
  );
};

export default Hero;
