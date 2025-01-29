import { Calendar } from "lucide-react";
import ActionButton from "./ActionButton";

const Header = () => {
  const menuItems = ["About me", "Skills", "Services I Provide"];

  return (
    <header className="w-full py-8 px-8 flex items-center justify-between bg-dark-green/80 backdrop-blur-sm border-b border-hunter-green">
      <div>
        <h1 className="text-2xl font-bold text-mindaro hover:text-moss-green transition-colors font-syne">
          Zenith Studio
        </h1>
      </div>
      
      <nav className="hidden lg:flex items-center space-x-12">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-mindaro hover:text-moss-green transition-colors text-sm font-medium font-jakarta"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;