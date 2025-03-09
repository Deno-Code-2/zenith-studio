import { Link } from "react-router-dom";
import { useState } from "react";
import { Logo } from "@/components/ui/logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo />
        </Link>
        <nav className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link to="/" className="hover:text-custom-orange" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-custom-orange" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-custom-orange" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-custom-orange" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-custom-orange" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-custom-orange" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
};

export default Header;
