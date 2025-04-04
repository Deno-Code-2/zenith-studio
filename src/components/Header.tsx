
import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import TimeDisplay from '@/components/TimeDisplay';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white sticky top-0 z-50 shadow-sm"
    >
      <div className="container flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/zenith-studio-logo.svg" alt="Zenith Studio Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl font-syne text-black">Zenith Studio</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={`font-jakarta text-black hover:text-custom-orange transition-colors duration-200 ${
                isActive(item.to) ? 'text-custom-orange font-semibold' : ''
              }`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button and Time Display */}
        <div className="hidden lg:flex items-center space-x-5">
          <TimeDisplay />
          <Button onClick={() => navigate('/contact')} variant="outline" className="font-jakarta">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                <Menu className="h-6 w-6 text-black" aria-label="Toggle Menu" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white w-64">
              <div className="flex justify-end mb-4">
                <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={`font-jakarta text-black hover:text-custom-orange transition-colors duration-200 ${
                      isActive(item.to) ? 'text-custom-orange font-semibold' : ''
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-6">
                <Button onClick={() => navigate('/contact')} className="w-full font-jakarta">
                  Get in Touch
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
