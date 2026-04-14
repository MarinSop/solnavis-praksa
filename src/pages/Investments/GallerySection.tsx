import house1 from "@assets/images/investments/house-1.webp";
import house2 from "@assets/images/investments/house-2.webp";
import house3 from "@assets/images/investments/house-3.webp";
import { njuskaloUrl } from "@/constants/urls";

const images = [
  { src: house1, alt: "Investicijski projekt" },
  { src: house2, alt: "Investicijski projekt" },
  { src: house3, alt: "Investicijski projekt" },
];

const GallerySection = () => (
  <section className="max-w-7xl mx-auto px-4 md:px-12 mb-16 md:mb-32 grid grid-cols-1 md:grid-cols-3 gap-6">
    {images.map((img) => (
      <a
        key={img.src}
        href={njuskaloUrl}
        target="_blank"
        rel="noreferrer"
        className="overflow-hidden block"
      >
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
        />
      </a>
    ))}
  </section>
);

export default GallerySection;
