
import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderLogoProps {
  scrollToTop: () => void;
}

const HeaderLogo = ({ scrollToTop }: HeaderLogoProps) => {
  const [logoTextIndex, setLogoTextIndex] = useState(0);

  // All text variations with their maximum width
  const textVariations = [
    { text: (<><span className="text-custom-orange">Zen</span>ith Studio</>) }, // Default
    { text: "Definitely not SVG" },
    { text: "Web Dev" },
    { text: "superheroes" },
    { text: "running out of ideas" },
    { text: "DM for your projects now" },
    { text: "Book A Call Now" },
    { text: "check the projects pls" },
    { text: "stop now" },
    { text: "for real?" },
    { text: "one more" },
    { text: "maybe one more" }
  ];

  const handleLogoClick = () => {
    setLogoTextIndex((prev) => (prev + 1) % textVariations.length);
  };

  return (
    <Link 
      to="/"
      className="text-xl font-bold font-syne cursor-pointer flex-shrink-0"
      onClick={() => {
        handleLogoClick();
        scrollToTop();
      }}
    >
      <div className="whitespace-nowrap">
        {textVariations[logoTextIndex].text}
      </div>
    </Link>
  );
};

export default HeaderLogo;
