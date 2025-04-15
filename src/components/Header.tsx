
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import HeaderLogo from "./header/HeaderLogo";
import NavigationItems from "./header/NavigationItems";
import TimeDisplay from "./header/TimeDisplay";
import MobileMenu from "./header/MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Handle resize and scroll events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
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
      };
      const formatter = new Intl.DateTimeFormat('en-IN', options);
      setCurrentTime(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if a path is active (exact match or starts with for nested routes)
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-background/80"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <HeaderLogo scrollToTop={scrollToTop} />

          {/* Desktop Navigation - Centered */}
          {!isMobile && (
            <div className="flex-grow flex justify-center">
              <NavigationItems isActive={isActive} scrollToTop={scrollToTop} />
            </div>
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
                  href="https://cal.com/zenithstudio/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book A Call
                </a>
              </Button>
            )}
            
            {/* Time Display */}
            {(!isMobile) && <TimeDisplay />}

            <ThemeToggle />

            {/* Mobile Menu */}
            {isMobile && <MobileMenu isActive={isActive} scrollToTop={scrollToTop} currentTime={currentTime} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
