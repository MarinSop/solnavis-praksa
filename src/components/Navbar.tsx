import { Link } from "react-router";
import logo from "../assets/logo.png";

const items = [
  { label: "Automobili", to: "/automobili" },
  { label: "Jahte", to: "/jahte" },
  { label: "Nekretnine", to: "/nekretnine" },
];

const Navbar = () => {
  return (
    <nav className="border-b border-[#c9a84c] shadow-[0_1px_0_0_rgba(201,168,76,0.3)] h-16 flex items-center justify-between px-4">
      <div className="flex gap-2 items-center">
        <img src={logo} className="h-8 w-8" />
        <h4>SOL NAVIS</h4>
      </div>
      <ul className="flex gap-8 h-full">
        {items.map((item) => (
          <li className="h-full">
            <Link
              to={item.to}
              className="h-full font-bold flex items-center text-xs tracking-[0.15em] uppercase hover:text-[#c9a84c] transition-colors duration-200"
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
