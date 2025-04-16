
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isActive: (path: string) => boolean;
  scrollToTop: () => void;
  currentTime: string;
}

const MobileMenu = ({ isActive, scrollToTop, currentTime }: MobileMenuProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items - removed Pricing as requested
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

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
                      ? "bg-gray-100 dark:bg-gray-800 text-custom-orange"
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
              
              {/* IST Time in Mobile Menu */}
              <div className="flex items-center gap-2 px-3 py-2 text-sm">
                <span className="pl-3 text-muted-foreground">IST: {currentTime}</span>
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
    </>
  );
};

export default MobileMenu;
