
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Clock, ChevronsRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ServiceItem {
  id: string;
  title: string;
  description: string | null;
  price: number;
  service_type: string;
  features: string[];
  timeline: string;
  recommended_for: string;
}

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  // Create mailto links with pre-filled subject and body
  const createMailtoLink = (service: ServiceItem) => {
    const subject = `Inquiry about ${service.title}`;
    const body = `Hi Zenith Studio,\n\nI'm interested in the ${service.title} (₹${service.price.toLocaleString('en-IN')}). I'd like to discuss how this service can meet my requirements.\n\nLooking forward to hearing from you!`;
    
    return `mailto:syedmoinuddin106@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.div 
      variants={{
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
      }}
      className="relative group overflow-hidden rounded-xl border border-gray-200 hover:border-custom-orange/40 transition-all duration-300 hover:shadow-lg bg-white flex flex-col"
    >
      {/* Service Type Badge */}
      <div className="absolute top-4 left-4 bg-custom-orange/10 text-custom-orange text-xs font-medium py-1 px-3 rounded-full">
        {service.service_type}
      </div>
      
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-black mt-8 mb-3 font-syne">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-4 font-jakarta flex-grow">{service.description}</p>
        
        {/* Price */}
        <div className="mb-5">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-black font-syne">₹{(service.price).toLocaleString('en-IN')}</span>
            <span className="text-gray-500 text-sm ml-1 font-jakarta">one-time</span>
          </div>
        </div>
        
        {/* Timeline & Recommended For */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-custom-orange" />
            <span className="text-sm text-gray-600 font-jakarta">{service.timeline}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-custom-orange" />
            <span className="text-sm text-gray-600 font-jakarta">For: {service.recommended_for.split(' ')[0]}</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-black mb-3 font-syne">What's Included:</h4>
          <ul className="space-y-2">
            {service.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm font-jakarta">
                <CheckCircle2 className="w-4 h-4 text-custom-orange flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
            {service.features.length > 4 && (
              <li className="text-custom-orange text-sm font-jakarta flex items-center gap-1">
                <ChevronsRight className="w-4 h-4" />
                <span>{service.features.length - 4} more features</span>
              </li>
            )}
          </ul>
        </div>
        
        {/* CTA Button */}
        <Button 
          className="w-full bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
          asChild
        >
          <a href={createMailtoLink(service)}>
            Get Started <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
