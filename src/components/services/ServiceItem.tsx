
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const ServiceItem = ({ icon, title, description, link, index }: ServiceItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 shadow-sm"
    >
      <motion.div 
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-custom-orange/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-6"
      >
        <div className="text-custom-orange">
          {icon}
        </div>
      </motion.div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-black font-syne">
        {title}
      </h3>
      <p className="text-gray-700 text-xs sm:text-sm md:text-base font-jakarta">
        {description}
      </p>
      <motion.div 
        whileHover={{ x: 8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link 
          to={link} 
          className="mt-3 sm:mt-4 md:mt-6 text-custom-orange flex items-center gap-1 sm:gap-2 transition-all duration-300 font-jakarta text-xs sm:text-sm md:text-base"
        >
          Learn More <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ServiceItem;
