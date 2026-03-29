import CarCard from "@/components/CarCard";
import jaguarImg from "@assets/images/cars/jaguar.webp";
import bentlyImg from "@assets/images/cars/bentley.webp";
import bmwM3Img from "@assets/images/cars/bmw-m3.webp";
import porscheImg from "@assets/images/cars/porsche.webp";
import mercedesImg from "@assets/images/cars/mercedes.webp";
import audiImg from "@assets/images/cars/audi.webp";
import { njuskaloUrl } from "@/constants/urls";

const cars = [
  {
    id: 1,
    name: "Jaguar F-Type 300ks Turbo RWD Sport R Dynamic Firenze RED",
    year: "2019",
    km: "69.000 KM",
    img: jaguarImg,
  },
  {
    id: 2,
    name: "BENTLEY CONTINETAL GT Mulliner",
    year: "2022",
    km: "1,850 KM",
    img: bentlyImg,
  },
  {
    id: 3,
    name: "BMW M3 Performance Carbon LCI",
    year: "2022",
    km: "24.000 KM",
    img: bmwM3Img,
  },
  {
    id: 4,
    name: "Porsche Carrera 992",
    year: "2022",
    km: "5,100 KM",
    img: porscheImg,
  },
  {
    id: 5,
    name: "MERCEDES E350d AMG ",
    year: "2022",
    km: "5,100 KM",
    img: mercedesImg,
  },
  {
    id: 6,
    name: "AUDI A4 3.0tdi quattro S performance 280ks",
    year: "2022",
    km: "5,100 KM",
    img: audiImg,
  },
];

const GridSection = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 pt-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-16">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            name={car.name}
            img={car.img}
            href={njuskaloUrl}
            variant={"grid"}
          />
        ))}
      </div>
    </section>
  );
};

export default GridSection;
