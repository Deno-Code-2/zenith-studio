
import { Link } from "react-router-dom";

export interface NavigationItemsProps {
  isActive: (path: string) => boolean;
  scrollToTop: () => void;
  className?: string;
}

// Export the navigation items for use in MobileMenu
export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const NavigationItems = ({ isActive, scrollToTop, className }: NavigationItemsProps) => {
  return (
    <div className={`flex items-center justify-center ${className || "space-x-1 md:space-x-4 lg:space-x-6"}`}>
      {navigationItems.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className={`font-jakarta relative py-1 px-2 text-sm sm:text-base rounded-md transition-colors ${
            isActive(item.href)
              ? "text-green-500 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-green-500 after:left-0 after:bottom-0"
              : "text-foreground hover:text-green-500 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
          }`}
          onClick={scrollToTop}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavigationItems;
