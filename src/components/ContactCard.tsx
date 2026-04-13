interface ContactCardProps {
  label: string;
  title: string;
  subtitle: string;
  icon?: string;
  href?: string;
}

const ContactCard = ({
  label,
  title,
  subtitle,
  icon,
  href,
}: ContactCardProps) => (
  <div>
    <h3 className="text-primary text-xs uppercase tracking-[0.3em] mb-6">
      {label}
    </h3>
    <div className="flex gap-3">
      {icon && <img src={icon} className="w-5 h-5 mt-1" />}
      <div>
        {href ? (
          <a
            href={href}
            className="text-headline font-headline text-lg mb-1 m-0 hover:text-primary transition-colors"
          >
            {title}
          </a>
        ) : (
          <p className="text-headline font-headline text-lg mb-1 m-0">{title}</p>
        )}
        <p className="text-text">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default ContactCard;
