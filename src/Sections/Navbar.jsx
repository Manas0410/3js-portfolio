import { useState } from "react";
import { navLinks } from "../Constants";

const NavItems = () => {
  return (
    <ul className="nav-ul ">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center p-5 mx-auto c-space ">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            MANAS
          </a>
          <button
            onClick={() => setIsOpen(!IsOpen)}
            className="text-neutral-400 hover:text-white focus:outline-none  sm:hidden flex "
            aria-label="toggle menu"
          >
            <img
              src={IsOpen ? "./assets/close.svg" : "./assets/menu.svg"}
              alt="toggle"
              className="h-6 w-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`${IsOpen ? "max-h-screen" : "max-h-0"} nav-sidebar  `}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
