interface CarCardProps {
  name: string;
  year?: string;
  km?: string;
  price?: string;
  img: string;
  href?: string;
  variant?: "default" | "grid";
}

const CarCard = ({
  name,
  year,
  km,
  price,
  img,
  href,
  variant = "default",
}: CarCardProps) => {
  const content = (
    <>
      <div className="relative overflow-hidden border border-primary/10 group-hover:border-primary/30 transition-all duration-500">
        <img
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 ${variant === "grid" ? "aspect-[16/10]" : ""}`}
          src={img}
        />
      </div>
      {variant === "grid" ? (
        <div className="flex justify-between items-start mt-4">
          <div>
            <h3 className="font-serif font-bold text-[24px] text-headline">
              {name}
            </h3>
            {(year || km) && (
              <p className="text-text text-sm uppercase tracking-wider">
                {year}
                {year && km && " · "}
                {km}
              </p>
            )}
          </div>
          {price && (
            <p className="font-serif font-black text-[24px] text-primary">
              {price}
            </p>
          )}
        </div>
      ) : (
        <div className="p-8 border-t border-primary/20 bg-[#0E0E0E] flex justify-between items-start">
          <div>
            <h3 className="font-serif font-bold text-[24px] text-headline">
              {name}
            </h3>
            {(year || km) && (
              <p className="text-text text-sm uppercase tracking-wider">
                {year}
                {year && km && " · "}
                {km}
              </p>
            )}
          </div>
          {price && (
            <p className="font-serif font-black text-[24px] text-primary">
              {price}
            </p>
          )}
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
