
import { motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";
import { formatCurrency } from "@/utils/formatCurrency";

interface Service {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  service_url: string | null;
  service_type: string;
  price: number;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="service-card overflow-hidden h-full flex flex-col group rounded-xl bg-white shadow-md border border-gray-200 hover:border-custom-orange/40 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
    >
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-black font-syne mb-2">{service.title}</h3>
        <p className="text-gray-600 font-jakarta text-sm mb-4">{service.description}</p>
        <div className="mt-auto">
          <div className="flex items-baseline justify-between mb-6">
            <span className="text-2xl font-bold text-black font-syne">{formatCurrency(service.price)}</span>
            <span className="bg-custom-orange/10 text-custom-orange px-3 py-1 rounded-full text-xs font-medium">
              {service.service_type}
            </span>
          </div>
          
          {service.features && service.features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-bold text-black font-syne mb-3">Features:</h4>
              <ul className="space-y-2">
                {service.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <Check className="h-4 w-4 text-custom-orange shrink-0 mr-2 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
                {service.features.length > 4 && (
                  <li className="text-sm text-custom-orange">+{service.features.length - 4} more features</li>
                )}
              </ul>
            </div>
          )}
          
          <a 
            href={service.service_url || "#"}
            className="inline-flex items-center gap-2 text-custom-orange hover:text-custom-orange/80 font-medium transition-colors"
          >
            Learn more <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
