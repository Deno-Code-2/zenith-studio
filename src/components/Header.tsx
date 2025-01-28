import { Calendar, Phone } from "lucide-react";
import ActionButton from "./ActionButton";

const Header = () => {
  const menuItems = ["About me", "Skills", "SaaS Website", "Services I Provide"];

  return (
    <header className="w-full py-6 px-8 flex items-center justify-between animate-fadeIn">
      <div>
        <h1 className="text-2xl font-bold text-primary">Syed Moinuddin</h1>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <ActionButton variant="secondary" href="mailto:your-email@example.com">
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            Contact
          </span>
        </ActionButton>
        <ActionButton href="YOUR_CAL_LINK_HERE">
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