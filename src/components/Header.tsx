
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [logoTextIndex, setLogoTextIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // All text variations with their maximum width
  const textVariations = [
    { text: (<><span className="text-custom-orange">Zen</span>ith Studio</>) }, // Default
    { text: "Definitely not SVG" },
    { text: "Web Dev" },
    { text: "superheroes" },
    { text: "running out of ideas" },
    { text: "DM for your projects now" },
    { text: "Book A Call Now" },
    { text: "check the projects pls" },
    { text: "stop now" },
    { text: "for real?" },
    { text: "one more" },
    { text: "maybe one more" }
  ];

  // Handle resize and scroll events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update IST time
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: !isMobile ? '2-digit' : undefined
      };
      const formatter = new Intl.DateTimeFormat('en-IN', options);
      setCurrentTime(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [isMobile]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    setLogoTextIndex((prev) => (prev + 1) % textVariations.length);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ height: 80 }}
      animate={{ 
        height: isScrolled ? 64 : 80,
        backgroundColor: isScrolled || mobileMenuOpen ? "rgba(var(--background-rgb), 0.95)" : "rgba(var(--background-rgb), 0.80)"
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled || mobileMenuOpen ? "border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link 
            to="/"
            className={`text-xl font-bold font-syne cursor-pointer flex-shrink-0 transition-all duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
            onClick={() => {
              handleLogoClick();
              scrollToTop();
            }}
          >
            <div className="whitespace-nowrap">
              {textVariations[logoTextIndex].text}
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="mx-auto">
              <motion.div 
                className="flex space-x-1 md:space-x-2 lg:space-x-6"
                animate={{
                  scale: isScrolled ? 0.95 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-jakarta relative py-1 px-2 text-sm sm:text-base rounded-md transition-colors ${
                      location.pathname === item.href
                        ? "text-custom-orange after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-custom-orange after:left-0 after:bottom-0"
                        : "text-foreground hover:text-custom-orange hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    }`}
                    onClick={scrollToTop}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            </nav>
          )}

          {/* Right Side Controls */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            
            {!isMobile && (
              <Button
                asChild
                variant="default"
                className="font-jakarta text-sm"
                size="sm"
              >
                <a 
                  href="https://cal.com/zenith-studio/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book A Call
                </a>
              </Button>
            )}
            
            {/* Updated Time Display */}
            {(!isMobile || !mobileMenuOpen) && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hidden md:flex items-center gap-2 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full text-xs shadow-sm border border-black/10 dark:border-white/10"
              >
                <span className="font-medium">Local Time: {currentTime} IST</span>
              </motion.div>
            )}

            <ThemeToggle />

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                type="button"
                className="p-2 rounded-md text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMobile && mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden pb-4 border-t border-border"
            >
              <div className="flex flex-col space-y-2 mt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md font-jakarta ${
                      location.pathname === item.href
                        ? "bg-gray-100 dark:bg-gray-800 text-custom-orange"
                        : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={scrollToTop}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* IST Time in Mobile Menu */}
                <div className="flex items-center gap-2 px-3 py-2 text-sm">
                  <span className="text-muted-foreground">Local Time: {currentTime} IST</span>
                </div>
                
                <Button
                  asChild
                  variant="default"
                  className="w-full mt-2 font-jakarta"
                  size="sm"
                >
                  <a 
                    href="https://cal.com/zenith-studio/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Book A Call
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
