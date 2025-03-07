
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? "bg-black/95 backdrop-blur-md border-b border-neutral-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between py-4">
          {/* Agency Name instead of Logo */}
          <Link to="/" className="shrink-0">
            <h1 className="text-2xl font-bold font-syne">
              <span className="text-custom-orange">Zen</span>ith Studio
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-jakarta relative py-1 ${
                  location.pathname === item.href
                    ? "text-custom-orange after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-0"
                    : "text-white hover:text-custom-orange"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book A Call Button */}
          <div className="hidden md:block">
            <Button
              variant="secondary"
              className="font-jakarta"
            >
              Book A Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-8 pt-2 pb-6 space-y-4 border-t border-neutral-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 font-jakarta relative ${
                  location.pathname === item.href
                    ? "text-custom-orange after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:bottom-0"
                    : "text-white hover:text-custom-orange"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="secondary"
              className="w-full mt-4 font-jakarta"
            >
              Book A Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
