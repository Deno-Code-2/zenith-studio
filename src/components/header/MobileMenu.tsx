
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import TimeDisplay from './TimeDisplay';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  sectionNavItems?: { label: string; href: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, sectionNavItems = [] }) => {
  const handleClose = () => setIsOpen(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  // Animation variants for the menu
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.2 } },
  };

  // Animation variants for the menu items
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const handleSectionClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden focus:outline-none"
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-gray-900 shadow-xl p-6 overflow-y-auto"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <TimeDisplay />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="focus:outline-none"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400">
                    Main Navigation
                  </h3>
                  <div className="flex flex-col space-y-3">
                    {navigation.map((item, i) => (
                      <motion.div
                        key={item.name}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          to={item.href}
                          className="text-xl font-medium text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-500"
                          onClick={handleClose}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {sectionNavItems.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400">
                      Page Sections
                    </h3>
                    <div className="flex flex-col space-y-3">
                      {sectionNavItems.map((item, i) => (
                        <motion.div
                          key={item.href}
                          custom={i + navigation.length}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <a
                            href={item.href}
                            className="text-xl font-medium text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-500"
                            onClick={() => handleSectionClick(item.href)}
                          >
                            {item.label}
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
