import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuItems = [
    { name: "About me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Pricing", path: "/pricing" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-8 px-8 lg:px-16 flex items-center justify-between bg-black/95 backdrop-blur-sm border-b border-custom-orange/20 sticky top-0 z-50">
      <div>
        <Link to="/" className="text-4xl font-bold text-white hover:text-custom-orange transition-colors font-syne">
          Zenith Studio
        </Link>
      </div>
      
      <nav className="hidden lg:flex items-center justify-center flex-1">
        <div className="flex items-center justify-center space-x-12">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-custom-orange transition-colors text-lg font-medium font-jakarta"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="hidden lg:flex items-center">
        <Button 
          variant="default"
          className="bg-custom-orange hover:bg-custom-orange/90 text-black flex items-center gap-2"
          onClick={() => navigate('/contact')}
        >
          <Calendar className="w-5 h-5" />
          Book a call
        </Button>
      </div>

      <button 
        className="lg:hidden text-white hover:text-custom-orange"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-custom-orange/20 py-4">
          <nav className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-custom-orange transition-colors text-sm font-medium font-jakarta"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="default"
              className="bg-custom-orange hover:bg-custom-orange/90 text-black flex items-center gap-2"
              onClick={() => {
                navigate('/contact');
                setIsMenuOpen(false);
              }}
            >
              Book a call
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;