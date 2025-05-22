
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isActive: (path: string) => boolean;
  scrollToTop: () => void;
  scrollToSection?: (sectionId: string) => void;
  currentTime: string;
  navItems: Array<{name: string; href: string;}>;
}

const MobileMenu = ({ isActive, scrollToTop, scrollToSection, navItems }: MobileMenuProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (isActive('/') && scrollToSection) {
        // If we're on homepage, scroll to section
        handleSectionClick(href.substring(1));
      } else {
        // If we're on another page, navigate to homepage and then to section
        window.location.href = `/${href}`;
      }
    } else {
      scrollToTop();
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
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

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden pb-4 border-t border-border absolute top-16 left-0 right-0 bg-background z-50"
          >
            <div className="flex flex-col space-y-2 mt-2 px-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md font-medium text-left text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              ))}
              
              <Button
                asChild
                variant="default"
                className="w-full mt-2 font-medium bg-black hover:bg-black/80 text-white rounded-full"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
