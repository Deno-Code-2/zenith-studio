
import { useTheme } from "@/contexts/ThemeContext";

const GridPattern = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`absolute inset-0 -z-10 h-full w-full ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#4357A2] via-[#3a4c8f] to-[#2f3d73]'
        : 'bg-gradient-to-br from-[#f5f7ff] via-[#ebeffe] to-[#e0e4f8]'
    }`}>
      <div className={`absolute h-full w-full ${
        theme === 'dark'
          ? 'bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)]'
      } bg-[size:64px_64px]`} />
    </div>
  );
};

export default GridPattern;
