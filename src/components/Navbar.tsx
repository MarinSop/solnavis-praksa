import { Link } from "react-router";
import logo from "../assets/icons/logo.png";
import logoText from "../assets/icons/logo_text.png";

const items = [
  { label: "Automobili", to: "/automobili" },
  { label: "Jahte", to: "/jahte" },
  { label: "Nekretnine", to: "/nekretnine" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 bg-secondary/60 backdrop-blur-sm">
      <div className="flex gap-2 items-center">
        <img src={logo} className="h-8 w-8" />
        <img src={logoText} className="h-8" />
      </div>
      <ul className="flex gap-8 h-full">
        {items.map((item) => (
          <li className="h-full">
            <Link
              to={item.to}
              className="h-full font-bold flex items-center text-xs tracking-[0.15em] uppercase hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
