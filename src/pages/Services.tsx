
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ChevronRight, Clock, ChevronsRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/formatCurrency";
import { Link } from "react-router-dom";
import AgencyShowcase from "@/components/AgencyShowcase";

gsap.registerPlugin(ScrollTrigger);

type ServiceType = 'All' | 'Landing Page' | 'SaaS Website' | 'Startup Website' | 'E-commerce Website';

type ServiceItem = {
  id: string;
  title: string;
  description: string | null;
  price: number;
  service_type: string;
  features: string[];
  timeline: string;
  recommended_for: string;
};

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

  // Filter options
  const filterOptions: ServiceType[] = [
    'All', 
    'Landing Page', 
    'SaaS Website', 
    'Startup Website', 
    'E-commerce Website'
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start with a deep dive into your business, target audience, and goals to create a strategic roadmap."
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Our team develops a detailed implementation plan with project timeline and deliverables."
    },
    {
      number: "03",
      title: "Design & Prototyping",
      description: "We create visually stunning designs and interactive prototypes for your approval."
    },
    {
      number: "04", 
      title: "Development",
      description: "Our developers bring designs to life with clean, efficient, and scalable code."
    },
    {
      number: "05",
      title: "Testing & QA",
      description: "Rigorous testing across devices and browsers ensures a flawless experience."
    },
    {
      number: "06",
      title: "Launch & Support",
      description: "We handle the deployment and provide ongoing support to ensure continued success."
    }
  ];

  // Create mailto links with pre-filled subject and body for each service
  const createMailtoLink = (service: ServiceItem) => {
    const subject = `Inquiry about ${service.title}`;
    const body = `Hi Zenith Studio,\n\nI'm interested in the ${service.title} (${formatCurrency(service.price, 'INR')}). I'd like to discuss how this service can meet my requirements.\n\nLooking forward to hearing from you!`;
    
    return `mailto:syedmoinuddin106@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Zenith Studio services" 
            className="w-full h-full object-cover" 
          />
          
          <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block text-custom-orange font-medium mb-4 font-jakarta"
              >
                Our Services
              </motion.span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-syne">
                Crafting <span className="text-custom-orange">Digital Excellence</span>
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/90 text-lg md:text-xl font-jakarta"
              >
                From concept to deployment, we design and develop digital experiences that elevate your brand, engage your audience, and drive business growth.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          {/* Filter Options */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filterOptions.map((option) => (
              <Button
                key={option}
                onClick={() => setActiveFilter(option)}
                variant={activeFilter === option ? "default" : "outline"}
                className={`
                  rounded-full px-6 py-2 font-jakarta
                  ${activeFilter === option 
                    ? "bg-custom-orange hover:bg-custom-orange/90 text-white" 
                    : "border-custom-orange/20 text-black hover:bg-custom-orange/10"}
                `}
              >
                {option}
              </Button>
            ))}
          </div>

          {/* Service Cards */}
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-custom-orange/20 border-t-custom-orange rounded-full animate-spin"></div>
            </div>
          ) : filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white">
              <h3 className="text-2xl text-black font-jakarta mb-4">No services found</h3>
              <p className="text-gray-600">Try selecting a different category or check back later.</p>
            </div>
          ) : (
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
              {filteredServices.map((service, index) => (
                <motion.div 
                  key={service.id}
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
              ))}
            </motion.div>
          )}
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block text-custom-orange font-medium mb-4 font-jakarta"
              >
                Our Process
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-black mb-6 font-syne"
              >
                How We <span className="text-custom-orange">Deliver Excellence</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-700 max-w-3xl mx-auto font-jakarta"
              >
                Our proven six-step methodology ensures we deliver exceptional results on time, every time.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="process-item p-8 border border-custom-orange/20 rounded-xl hover:border-custom-orange/40 transition-all duration-300 bg-white shadow-sm hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-custom-orange/10 text-custom-orange font-bold mb-5 font-syne text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 font-syne">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 font-jakarta">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center bg-custom-orange/10 p-10 rounded-2xl border border-custom-orange/20 shadow-lg"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-black mb-6 font-syne"
              >
                Need a <span className="text-custom-orange">Custom Solution?</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-700 mb-8 font-jakarta max-w-2xl mx-auto"
              >
                Don't see exactly what you're looking for? Our team specializes in creating tailored solutions to match your specific business requirements and objectives.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
                  size="lg"
                >
                  <Link to="/contact">
                    Schedule a Consultation <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-custom-orange text-custom-orange hover:bg-custom-orange/10 font-jakarta"
                  size="lg"
                >
                  <Link to="/pricing">
                    View Pricing Plans
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Services;
