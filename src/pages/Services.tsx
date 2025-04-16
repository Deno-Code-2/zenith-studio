import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import ServiceFilter from "@/components/services/ServiceFilter";
import ServiceGrid from "@/components/services/ServiceGrid";
import ProcessSection from "@/components/services/ProcessSection";
import ServiceCTA from "@/components/services/ServiceCTA";
import { ServiceItem } from "@/components/services/ServiceCard";
import { Helmet } from "react-helmet-async";

// Declare the dataLayer property on the window object
declare global {
  interface Window {
    dataLayer: any[];
  }
}

gsap.registerPlugin(ScrollTrigger);

type ServiceType = 'All' | 'Landing Page' | 'SaaS Website' | 'Startup Website' | 'E-commerce Website';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState<ServiceType>('All');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [filteredServices, setFilteredServices] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-4771BVNJVP');
    
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
      <Helmet>
        <title>Our Services | Zenith Studio</title>
        <meta name="description" content="Explore our comprehensive range of digital services including web design, development, mobile apps, SEO optimization, and more." />
        <meta name="keywords" content="web design, web development, mobile app, SEO, digital marketing, e-commerce, design services" />
        <meta property="og:title" content="Digital Services | Zenith Studio" />
        <meta property="og:description" content="Professional web design, development and digital marketing services for businesses of all sizes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zenithstudio.xyz/services" />
        <link rel="canonical" href="https://zenithstudio.xyz/services" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4771BVNJVP"></script>
      </Helmet>
      
      <Header />
      <main className="bg-white">
        <section className="pt-28 pb-10">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="text-custom-orange font-medium mb-2 block">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-bold font-syne mb-4">
                We Create <span className="text-custom-orange">Digital Solutions</span> For Your Business
              </h1>
              <p className="text-gray-700">
                Browse our comprehensive range of services designed to help your business thrive in the digital landscape.
                From web design to digital marketing, we've got you covered.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <ServiceFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <ServiceGrid services={filteredServices} isLoading={isLoading} />
        </section>

        <ProcessSection />
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
