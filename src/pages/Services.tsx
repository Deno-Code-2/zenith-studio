
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import AgencyShowcase from "@/components/AgencyShowcase";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceFilter from "@/components/services/ServiceFilter";
import ServiceGrid from "@/components/services/ServiceGrid";
import ProcessSection from "@/components/services/ProcessSection";
import ServiceCTA from "@/components/services/ServiceCTA";
import { ServiceItem } from "@/components/services/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

type ServiceType = 'All' | 'Landing Page' | 'SaaS Website' | 'Startup Website' | 'E-commerce Website';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState<ServiceType>('All');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [filteredServices, setFilteredServices] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch services from Supabase
    const fetchServices = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*');
        
        if (error) {
          throw error;
        }
        
        // Transform the data to include timeline and recommended_for fields
        const transformedData = data.map(service => {
          // Extract timeline from features if available
          let timeline = "2-3 weeks";
          let recommendedFor = "Small to medium businesses";
          
          if (service.features) {
            const timelineFeature = service.features.find(f => f.includes('Delivery in'));
            if (timelineFeature) {
              timeline = timelineFeature.replace('Delivery in ', '');
            }
            
            // Simple logic to determine recommended for
            if (service.price < 40000) {
              recommendedFor = "Small businesses and startups";
            } else if (service.price < 90000) {
              recommendedFor = "Growing businesses";
            } else {
              recommendedFor = "Enterprise organizations";
            }
          }
          
          return {
            ...service,
            timeline,
            recommended_for: recommendedFor
          };
        });
        
        setServices(transformedData);
        setFilteredServices(transformedData);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredServices(services);
    } else {
      setFilteredServices(
        services.filter((service) => service.service_type === activeFilter)
      );
    }
  }, [activeFilter, services]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="bg-white">
        <ServiceHero />

        <section className="container mx-auto px-4 py-20">
          <ServiceFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <ServiceGrid services={filteredServices} isLoading={isLoading} />
        </section>

        <ProcessSection />
        <ServiceCTA />
      </main>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Services;
