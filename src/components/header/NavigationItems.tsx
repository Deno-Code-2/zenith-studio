
import { Link } from "react-router-dom";

interface NavigationItemsProps {
  isActive: (path: string) => boolean;
  scrollToTop: () => void;
  className?: string;
}

const NavigationItems = ({ isActive, scrollToTop, className }: NavigationItemsProps) => {
  // Navigation items - removed Pricing as requested
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className={`flex justify-center ${className || "space-x-1 md:space-x-2 lg:space-x-6"}`}>
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`font-jakarta relative py-1 px-2 text-sm sm:text-base rounded-md transition-colors ${
            isActive(item.href)
              ? "text-custom-orange after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-custom-orange after:left-0 after:bottom-0"
              : "text-foreground hover:text-custom-orange hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
          }`}
          onClick={scrollToTop}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationItems;
