
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap justify-center gap-4 mb-16"
    >
      {filterOptions.map((option, index) => (
        <motion.div
          key={option}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Button
            onClick={() => setActiveFilter(option)}
            variant={activeFilter === option ? "default" : "outline"}
            className={`
              rounded-full px-6 py-2 font-jakarta
              ${activeFilter === option 
                ? "bg-custom-orange hover:bg-custom-orange/90 text-white" 
                : "border-custom-orange/20 text-black hover:bg-custom-orange"}
            `}
          >
            {option}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceFilter;
