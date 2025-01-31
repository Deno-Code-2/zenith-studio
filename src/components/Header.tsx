import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["About me", "Skills", "Services"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-8 flex items-center justify-between bg-black/95 backdrop-blur-sm border-b border-custom-orange/20 sticky top-0 z-50">
      <div>
        <h1 className="text-2xl font-bold text-white hover:text-custom-orange transition-colors font-syne">
          Zenith Studio
        </h1>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-white hover:text-custom-orange"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-center flex-1">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-white hover:text-custom-orange transition-colors text-sm font-medium font-jakarta mx-6"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-custom-orange/20 py-4">
          <nav className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white hover:text-custom-orange transition-colors text-sm font-medium font-jakarta"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;