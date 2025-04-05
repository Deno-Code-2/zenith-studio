
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatCurrency } from '@/utils/formatCurrency';

interface ServiceProps {
  service: {
    id: string;
    title: string;
    description: string | null;
    image_url: string | null;
    service_url: string | null;
    service_type: string;
    price: number;
    features: string[];
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-xl overflow-hidden bg-white border border-custom-orange/20 hover:border-custom-orange/40 transition-all shadow-sm hover:shadow-lg"
    >
      <div className="relative h-52 overflow-hidden">
        <motion.img 
          src={service.image_url || "/placeholder.svg"} 
          alt={service.title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-6">
          <div className="bg-custom-orange/10 text-custom-orange px-3 py-1 rounded-full text-sm inline-block font-jakarta">
            {service.service_type}
          </div>
        </div>
      </div>
      <div className="p-6 relative bg-white">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-black font-syne">{service.title}</h3>
          <div className="text-custom-orange text-xl font-bold font-syne">
            {formatCurrency(service.price)}
          </div>
        </div>
        <p className="text-gray-700 mb-6 font-jakarta">{service.description}</p>
        
        {service.features && service.features.length > 0 && (
          <div className="mb-6">
            <div className="text-lg font-semibold text-black mb-3 font-syne">Features:</div>
            <ul className="space-y-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start space-x-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="text-custom-orange h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-jakarta">{feature}</span>
                </motion.li>
              ))}
              {service.features.length > 3 && (
                <li className="text-custom-orange text-sm font-jakarta">
                  + {service.features.length - 3} more features
                </li>
              )}
            </ul>
          </div>
        )}
        
        <motion.a 
          href={service.service_url || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-custom-orange hover:text-black transition-colors gap-2 font-jakarta"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          View Details <ArrowRight size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
