import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // GSAP animation for header elements
    gsap.from(".nav-item", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });

    gsap.from(".logo", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          ? "bg-black/95 backdrop-blur-sm border-b border-custom-orange/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="logo text-3xl font-bold text-white hover:text-custom-orange transition-colors font-syne relative group"
        >
          Zenith
          <span className="text-custom-orange">.</span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-orange transition-all duration-300 group-hover:w-full"></div>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-12">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="nav-item text-white hover:text-custom-orange transition-colors text-base font-medium font-jakarta relative group"
            >
              {item.name}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-orange transition-all duration-300 group-hover:w-full"></div>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Button 
            variant="default"
            className="bg-custom-orange hover:bg-custom-orange/90 text-black flex items-center gap-2 font-jakarta"
            onClick={() => window.open("https://calendly.com/demo/30min", "_blank")}
          >
            <Calendar className="w-5 h-5" />
            Book a call
          </Button>
        </div>

        <button 
          className="lg:hidden text-white hover:text-custom-orange transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-black/95 backdrop-blur-sm">
            <nav className="flex flex-col items-center space-y-8 pt-12">
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
              <Button 
                variant="default"
                className="bg-custom-orange hover:bg-custom-orange/90 text-black flex items-center gap-2 font-jakarta"
                onClick={() => {
                  window.open("https://calendly.com/demo/30min", "_blank");
                  setIsMenuOpen(false);
                }}
              >
                <Calendar className="w-5 h-5" />
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