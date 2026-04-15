interface CarCardProps {
  name?: string;
  img: string;
  href?: string;
  variant?: "default" | "grid";
}

const CarCard = ({ name, img, href, variant = "default" }: CarCardProps) => {
  const content = (
    <>
      <div className="relative overflow-hidden border border-primary/10 group-hover:border-primary/30 transition-all duration-500">
        <img
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 ${variant === "grid" ? "aspect-[16/10]" : ""}`}
          src={img}
          loading="lazy"
          alt={name ?? ""}
        />
      </div>
      {variant === "grid" && (
        <div className="mt-4">
          <h3 className="font-serif font-bold text-[24px] text-headline">
            {name}
          </h3>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group relative flex flex-col"
      >
        {content}
      </a>
    );
  }

  return <div className="group relative flex flex-col">{content}</div>;
};

export default CarCard;
