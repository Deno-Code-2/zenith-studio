
import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Pricing", path: "/pricing" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header 
      className={`fixed w-full py-6 px-8 lg:px-16 transition-all duration-300 z-50 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-sm border-b border-neutral-800" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="/"
          onClick={handleLogoClick}
          className="logo text-3xl font-bold text-white hover:text-neutral-200 transition-colors font-syne relative group"
        >
          <span className="text-custom-orange">Zen</span>ith Studio
          <span className="text-custom-orange">.</span>
        </a>
        
        <nav className="hidden lg:flex items-center space-x-12">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="nav-item text-white hover:text-neutral-200 transition-colors text-base font-medium font-jakarta relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-custom-orange after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Button 
            variant="outline"
            onClick={() => window.open("https://calendly.com/syedmoinuddin106", "_blank")}
            className="border-custom-orange/20 font-jakarta text-white hover:bg-custom-orange/10"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book a Call
          </Button>
        </div>

        <button 
          className="lg:hidden text-white hover:text-neutral-200 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-black/95 backdrop-blur-sm animate-in slide-in-from-right">
            <nav className="flex flex-col items-center space-y-8 pt-12">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:text-neutral-200 transition-colors text-lg font-medium font-jakarta"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="outline"
                onClick={() => {
                  window.open("https://calendly.com/syedmoinuddin106", "_blank");
                  setIsMenuOpen(false);
                }}
                className="border-custom-orange/20 text-white font-jakarta hover:bg-custom-orange/10"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a call
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
