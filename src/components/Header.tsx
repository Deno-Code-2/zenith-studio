
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import MobileMenu from "./header/MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 100;
      const sectionPosition = section.getBoundingClientRect().top;
      const offsetPosition = sectionPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Check if a path is active (exact match or starts with for nested routes)
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  // Navigation items
  const navItems = [
    { name: "Showcase", href: "#recent-work" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#features" },
    { name: "Guarantees", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-border" : "bg-white/80"
      }`}
    >
      {/* Circle Decorations */}
      <div className="circle-decoration circle-decoration-1"></div>
      <div className="circle-decoration circle-decoration-2"></div>
      <div className="circle-decoration circle-decoration-3"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="text-xl font-bold font-syne cursor-pointer flex-shrink-0"
            onClick={scrollToTop}
          >
            <div className="flex items-center">
              <span className="text-3xl font-bold">ZS</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          {!isMobile && (
            <div className="flex-grow flex justify-center">
              <nav className="flex space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-900 hover:text-custom-green transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.href.startsWith('#')) {
                        scrollToSection(item.href.substring(1));
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Right Side Controls */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Button
              asChild
              variant="default"
              className="font-medium text-sm bg-black hover:bg-black/80 text-white rounded-full px-6"
              size="sm"
            >
              <a 
                href="https://cal.com/zenithstudio/30min" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </Button>

            {/* Mobile Menu */}
            {isMobile && <MobileMenu 
              isActive={isActive} 
              scrollToTop={scrollToTop}
              scrollToSection={scrollToSection}
              currentTime=""
              navItems={navItems}
            />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
