
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
}

const MobileMenu = ({ isActive, scrollToTop, scrollToSection, currentTime }: MobileMenuProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];
  
  // Section navigation for the landing page
  const sectionNavigation = [
    { name: "Features", id: "features" },
    { name: "Services", id: "services" },
    { name: "Recent Work", id: "recent-work" },
    { name: "Testimonials", id: "testimonials" },
  ];

  const handleSectionClick = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md font-jakarta ${
                    isActive(item.href)
                      ? "bg-gray-100 dark:bg-gray-800 text-green-500"
                      : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => {
                    scrollToTop();
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Section navigation - only on homepage */}
              {isActive("/") && scrollToSection && (
                <>
                  <div className="px-3 py-2 text-sm font-semibold text-gray-500">Sections</div>
                  {sectionNavigation.map((item) => (
                    <button
                      key={item.id}
                      className="px-3 py-2 rounded-md font-jakarta text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 text-left"
                      onClick={() => handleSectionClick(item.id)}
                    >
                      {item.name}
                    </button>
                  ))}
                </>
              )}
              
              {/* IST Time in Mobile Menu */}
              <div className="flex items-center gap-2 px-3 py-2 text-sm">
                <span className="pl-3 text-muted-foreground">IST: {currentTime}</span>
              </div>
              
              <Button
                asChild
                variant="default"
                className="w-full mt-2 font-jakarta bg-green-500 hover:bg-green-600"
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
    </>
  );
};

export default MobileMenu;
