import { Menu, X, Calendar } from "lucide-react";
import { useState } from "react";
import ActionButton from "./ActionButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["About me", "Skills", "Services"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-8 flex items-center justify-between bg-hunter-green/95 backdrop-blur-sm border-b border-fern-green sticky top-0 z-50">
      <div>
        <h1 className="text-2xl font-bold text-mindaro hover:text-moss-green transition-colors font-syne">
          Zenith Studio
        </h1>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-mindaro hover:text-moss-green"
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
            className="text-mindaro hover:text-moss-green transition-colors text-sm font-medium font-jakarta mx-6"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Book a Call Button - Desktop */}
      <div className="hidden lg:block">
        <ActionButton 
          href="#book-call"
          className="text-sm font-jakarta bg-moss-green text-hunter-green hover:bg-moss-green/90"
        >
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Book a Call
          </span>
        </ActionButton>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-hunter-green/95 backdrop-blur-sm border-b border-fern-green py-4">
          <nav className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-mindaro hover:text-moss-green transition-colors text-sm font-medium font-jakarta"
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