
import { Link } from "react-router-dom";

interface NavigationItemsProps {
  isActive: (path: string) => boolean;
  scrollToTop: () => void;
  scrollToSection?: (sectionId: string) => void;
  className?: string;
}

const NavigationItems = ({ isActive, scrollToTop, scrollToSection, className }: NavigationItemsProps) => {
  // Navigation items in the specified order
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
  ];
  
  // Section navigation for the landing page
  const sectionNavigation = [
    { name: "Features", id: "features" },
    { name: "Services", id: "services" },
    { name: "Recent Work", id: "recent-work" },
    { name: "Testimonials", id: "testimonials" },
  ];

  return (
    <div className={`flex items-center justify-center ${className || "space-x-1 md:space-x-4 lg:space-x-6"}`}>
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`font-jakarta relative py-1 px-2 text-sm sm:text-base rounded-md transition-colors ${
            isActive(item.href)
              ? "text-green-500"
              : "text-foreground hover:text-green-500 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
          }`}
          onClick={scrollToTop}
        >
          {item.name}
        </Link>
      ))}

      {/* Only show section navigation on homepage */}
      {isActive("/") && scrollToSection && sectionNavigation.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="font-jakarta relative py-1 px-2 text-sm sm:text-base rounded-md transition-colors text-foreground hover:text-green-500 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default NavigationItems;
