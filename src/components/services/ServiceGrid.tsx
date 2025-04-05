
import { motion } from "framer-motion";
import ServiceCard, { ServiceItem } from "./ServiceCard";

interface ServiceGridProps {
  services: ServiceItem[];
  isLoading: boolean;
}

const ServiceGrid = ({ services, isLoading }: ServiceGridProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-10 h-10 border-4 border-custom-orange/20 border-t-custom-orange rounded-full animate-spin"></div>
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="text-center py-16 bg-white">
        <h3 className="text-2xl text-black font-jakarta mb-4">No services found</h3>
        <p className="text-gray-600">Try selecting a different category or check back later.</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </motion.div>
  );
};

export default ServiceGrid;
