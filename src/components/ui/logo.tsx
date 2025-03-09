
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/My-Logo.png" 
        alt="Zenith Studio Logo" 
        className="h-10 w-auto" 
      />
      <span className="ml-2 text-xl font-bold font-syne">Zenith Studio</span>
    </div>
  );
};
