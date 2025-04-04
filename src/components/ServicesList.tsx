
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

type ServiceType = 'All' | 'Landing Page' | 'SaaS Website' | 'Startup Website' | 'E-commerce Website';

const filterOptions: ServiceType[] = [
  'All', 
  'Landing Page',
  'SaaS Website', 
  'Startup Website',
  'E-commerce Website'
];

const fetchServices = async () => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('price', { ascending: true });

  if (error) {
    console.error('Error fetching services:', error);
    throw error;
  }

  return data || [];
};

const ServicesList = () => {
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices
  });

  const [activeFilter, setActiveFilter] = useState<ServiceType>('All');
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);

  useEffect(() => {
    if (!services) return;
    
    if (activeFilter === 'All') {
      setFilteredServices(services);
    } else {
      setFilteredServices(
        services.filter((service) => service.service_type === activeFilter)
      );
    }
  }, [activeFilter, services]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filterOptions.map((option, index) => (
            <motion.div
              key={option}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Button
                onClick={() => setActiveFilter(option)}
                variant="ghost"
                className={`
                  rounded-full px-6 py-2 font-jakarta transition-all duration-300
                  ${activeFilter === option 
                    ? "bg-custom-orange text-white shadow-md hover:bg-custom-orange/90 hover:text-white" 
                    : "bg-transparent text-black border border-gray-200 hover:bg-gray-100 hover:text-black"}
                `}
              >
                {option}
              </Button>
            </motion.div>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center text-gray-600 py-20">
            <div className="w-10 h-10 border-4 border-custom-orange/20 border-t-custom-orange rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading services...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-400">Error loading services. Please try again later.</div>
        ) : filteredServices?.length === 0 ? (
          <div className="text-center text-gray-600 py-20">
            <p>No services found for this category. Try selecting a different filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices?.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesList;
