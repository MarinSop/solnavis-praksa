import CarCard from "@/components/CarCard";
import { njuskaloUrl } from "@/constants/urls";

const cars = [
  {
    id: 1,
    name: "Porsche 911 GT3 RS",
    year: "2023",
    km: "4,200 KM",
    price: "€245,000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnJWb7ye6wa_BsOIlzIhJBke2uuxnxQxwK4nmDjRYzSLPhM-8gWgSf8R1WJwzrE7UTAWDpWjdHz9p4m2O1UwKY0b6GOOpAl0HZTrVGt7UxsWQurl26S9G58PgrWjBG3hRLF3Ia7IbG5N3qwxz6WOvFycftFbN1Fmfyum6iOZ8i6TVrbFAkUKsJbQ_Ql1ww-DrahXFevJqeaQnZJE6j1Kfzy7bjvKf-RRBmYF4k7LhvAmzb3LVlVDpEeVINjvy2044YgilDg5SQlg",
  },
  {
    id: 2,
    name: "Lamborghini Huracán STO",
    year: "2022",
    km: "1,850 KM",
    price: "€389,000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYXGidw-SbHTjUxqtdbC6kLTBcSjTgMEVAeWoJdKex1NntYHhIFya4GeekSNoqc7ve6VC6Rnml5vbEdM_2vlXAe_Q9-ape_-Jl2CpE5yCQV0wO2fJfZbGLRaFmTUV_P5mnggOdOgyOV43TxXC7_utbiH6kTYC801i9sYpFt6KCmfHeV-6OnJaFFG55CEaI5ZUGBc-gQdV8rc7sZUphecYziliW1ht-B6I6bBDj--C-QZY9JcrfTlSXpdgorwXkKCawoJkrjSQgdg",
  },
  {
    id: 3,
    name: "Mercedes-AMG GT R",
    year: "2021",
    km: "12,400 KM",
    price: "€168,500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm0Saibhs5C0WiqoZSDzc2yGedHd1PjUYYjXAwu4heUEOuhrNTac8R6Py3ErmCZAuSn-81_74Jmufg3gWDS6QrybjtWZs3w2UIaXwA-h9rjnQU7rEFD7Yman6LWl6Y8Q2xocbqYMoSGuY-kTkWrL9DRSmQDsxSQf8eDoSeX9Df_MiL4g2y7GT72CVVkqNnNVUO_cP_8OEjilIZn8GCeeuTbhvEySIpzJc3XKfv86B4gmyD4rYP5zmWnnbcqonAFozYuQWoMywd6w",
  },
  {
    id: 4,
    name: "Ferrari F8 Tributo",
    year: "2022",
    km: "5,100 KM",
    price: "€312,000",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyW7TSuLuJIwdIoK-A9CNNHI18LViegEpKCM3XYdbRLarXlTglaZZF1CAYxaagvZH0pTLj0pDJ0ylhhBLbD6lJhUZF_HuVCqAWQFVq1-4EHC4nLG6uJia_b6kKk1dyOyoTKpz0GeJ9Ql2rs4obYirZhRouU3BTt4Net7NaxwjKds2cr-0ixxg0BAex32GFV_JzZ_THnTyCy1w7fB098E3BDl2VIejvJVW2rEZYCW6y0csMn-rBc3tfvuzcoUkRwr2J2rhN2VXfTg",
  },
];

const GridSection = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-12 py-16">
      <div className="grid grid-cols-2 gap-x-8 gap-y-16">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            name={car.name}
            img={car.img}
            href={njuskaloUrl}
            variant={"grid"}
            year={car.year}
            km={car.km}
          />
        ))}
      </div>
    </section>
  );
};

export default GridSection;
