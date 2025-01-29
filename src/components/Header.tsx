import { Calendar } from "lucide-react";
import ActionButton from "./ActionButton";

const Header = () => {
  const menuItems = ["About me", "Skills", "Services I Provide"];

  return (
    <header className="w-full py-8 px-8 flex items-center justify-between bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div>
        <h1 className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors font-syne">
          Syed Moinuddin
        </h1>
      </div>
      
      <nav className="hidden lg:flex items-center space-x-12">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-gray-600 hover:text-primary transition-colors text-sm font-medium font-jakarta"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <ActionButton 
          href="YOUR_CAL_LINK_HERE"
          className="text-sm font-jakarta"
        >
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Book a Call
          </span>
        </ActionButton>
      </div>
    </header>
  );
};

export default Header;