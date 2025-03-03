
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
      transition={{ duration: 0.5 }}
      className="group relative rounded-xl overflow-hidden bg-black/30 border border-custom-orange/20 hover:border-custom-orange/40 transition-all"
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={service.image_url || "/placeholder.svg"} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-4 left-6">
          <div className="bg-custom-orange/10 text-custom-orange px-3 py-1 rounded-full text-sm inline-block font-jakarta">
            {service.service_type}
          </div>
        </div>
      </div>
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-white font-syne">{service.title}</h3>
          <div className="text-custom-orange text-xl font-bold font-syne">
            {formatCurrency(service.price)}
          </div>
        </div>
        <p className="text-gray-300 mb-6 font-jakarta">{service.description}</p>
        
        {service.features && service.features.length > 0 && (
          <div className="mb-6">
            <div className="text-lg font-semibold text-white mb-3 font-syne">Features:</div>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="text-custom-orange h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-jakarta">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <a 
          href={service.service_url || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-custom-orange hover:text-white transition-colors gap-2 font-jakarta"
        >
          View Details <ArrowRight size={16} />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
