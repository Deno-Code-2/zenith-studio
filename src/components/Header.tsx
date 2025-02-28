
import { useState, useEffect, useRef } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

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
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <header 
      className={`fixed w-full py-6 px-8 lg:px-16 transition-all duration-300 z-50 ${
        isScrolled || isMenuOpen
          ? "bg-black/95 backdrop-blur-sm border-b border-neutral-800" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="/"
          onClick={handleLogoClick}
          className="logo text-3xl font-bold text-white hover:text-neutral-200 transition-colors font-syne relative group z-50"
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

        <motion.button 
          ref={menuButtonRef}
          className="lg:hidden text-white hover:text-neutral-200 transition-colors z-50 p-2 rounded-full bg-custom-orange/20 hover:bg-custom-orange/30 fixed top-6 right-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden fixed inset-0 top-0 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <nav className="flex flex-col items-center space-y-8 pt-20">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                  >
                    <Link
                      to={item.path}
                      className="text-white hover:text-custom-orange transition-colors text-2xl font-medium font-jakarta"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      window.open("https://calendly.com/syedmoinuddin106", "_blank");
                      setIsMenuOpen(false);
                    }}
                    className="border-custom-orange/20 text-white font-jakarta hover:bg-custom-orange/10 mt-6"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a call
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
