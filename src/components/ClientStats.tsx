
import { motion } from "framer-motion";
import { UpgradeBanner } from "@/components/ui/upgrade-banner";
import { useState } from "react";

const ClientStats = () => {
  const [showBanner, setShowBanner] = useState(true);
  
  return (
    <div className="w-full bg-green-50 py-2 border-b border-green-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-8 mb-2 sm:mb-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center sm:items-start"
            >
              <span className="text-lg sm:text-xl font-bold text-custom-green">4+</span>
              <span className="text-xs text-gray-600">Clients Onboarded</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center sm:items-start"
            >
              <span className="text-lg sm:text-xl font-bold text-custom-green">$2,500+</span>
              <span className="text-xs text-gray-600">Revenue Generated</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center sm:items-start"
            >
              <span className="text-lg sm:text-xl font-bold text-custom-green">100%</span>
              <span className="text-xs text-gray-600">Client Satisfaction</span>
            </motion.div>
          </div>
          
          {showBanner && (
            <UpgradeBanner 
              buttonText="Get Started"
              description="Limited Time Offer: 20% Off!"
              onClose={() => setShowBanner(false)}
              onClick={() => window.open('https://cal.com/zenithstudio/30min', '_blank')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientStats;
