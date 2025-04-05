
import { Button } from "@/components/ui/button";

type ServiceType = 'All' | 'Landing Page' | 'SaaS Website' | 'Startup Website' | 'E-commerce Website';

interface ServiceFilterProps {
  activeFilter: ServiceType;
  setActiveFilter: (filter: ServiceType) => void;
}

const ServiceFilter = ({ activeFilter, setActiveFilter }: ServiceFilterProps) => {
  // Filter options
  const filterOptions: ServiceType[] = [
    'All', 
    'Landing Page', 
    'SaaS Website', 
    'Startup Website', 
    'E-commerce Website'
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {filterOptions.map((option) => (
        <Button
          key={option}
          onClick={() => setActiveFilter(option)}
          variant={activeFilter === option ? "default" : "outline"}
          className={`
            rounded-full px-6 py-2 font-jakarta
            ${activeFilter === option 
              ? "bg-custom-orange hover:bg-custom-orange/90 text-white" 
              : "border-custom-orange/20 text-black hover:bg-custom-orange/10"}
          `}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default ServiceFilter;
