
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
    // Rather than fetch from Supabase, we'll use hardcoded data for now
    const servicesData: ServiceItem[] = [
      {
        id: "1",
        title: "Landing Page Pro",
        description: "Capture leads with a high-converting landing page optimized for your business goals.",
        price: 35999,
        service_type: "Landing Page",
        features: [
          "Responsive design that works on all devices",
          "Custom animations and interactions",
          "Lead capture form integration",
          "SEO optimization",
          "Analytics setup",
          "2 weeks delivery time"
        ],
        timeline: "2 weeks",
        recommended_for: "Small businesses and startups looking to establish online presence"
      },
      {
        id: "2",
        title: "SaaS Website Package",
        description: "Present your software product with clarity and convert visitors into trial users.",
        price: 75999,
        service_type: "SaaS Website",
        features: [
          "Up to 10 custom pages",
          "User dashboard integration",
          "Pricing table design",
          "Feature showcase sections",
          "Blog setup",
          "Interactive demo capability",
          "3 weeks delivery time"
        ],
        timeline: "3 weeks",
        recommended_for: "SaaS founders and product companies"
      },
      {
        id: "3",
        title: "E-Commerce Complete",
        description: "Sell products online with a fully-featured e-commerce website designed to maximize conversions.",
        price: 125000,
        service_type: "E-commerce Website",
        features: [
          "Product catalog with filters",
          "Shopping cart and checkout",
          "Payment gateway integration",
          "Inventory management",
          "Customer accounts",
          "Order tracking",
          "Mobile app integration",
          "4 weeks delivery time"
        ],
        timeline: "4 weeks",
        recommended_for: "Retailers and product-based businesses"
      },
      {
        id: "4",
        title: "Startup Growth Suite",
        description: "A complete digital presence for startups looking to make an impact in their industry.",
        price: 95000,
        service_type: "Startup Website",
        features: [
          "Brand identity development",
          "Up to 15 pages website",
          "Custom illustrations",
          "Investor relations section",
          "Team showcase",
          "Integration with CRM",
          "SEO optimization",
          "Social media setup",
          "3-4 weeks delivery time"
        ],
        timeline: "3-4 weeks",
        recommended_for: "Early-stage startups and growth-phase companies"
      },
      {
        id: "5",
        title: "Enterprise Portal",
        description: "Enterprise-grade web solution with advanced functionality and scalable architecture.",
        price: 199000,
        service_type: "SaaS Website",
        features: [
          "Custom user roles and permissions",
          "Advanced analytics dashboard",
          "Third-party API integrations",
          "Scalable cloud architecture",
          "Security compliance setup",
          "Custom admin panel",
          "Employee portal",
          "6 weeks delivery time"
        ],
        timeline: "6 weeks",
        recommended_for: "Large businesses with complex requirements"
      },
      {
        id: "6",
        title: "Multi-vendor Marketplace",
        description: "Build your own marketplace platform connecting vendors and customers.",
        price: 250000,
        service_type: "E-commerce Website",
        features: [
          "Multi-vendor capability",
          "Vendor and customer dashboards",
          "Commission system",
          "Review and rating system",
          "Chat functionality",
          "Advanced search with filters",
          "Payment splitting",
          "8 weeks delivery time"
        ],
        timeline: "8 weeks",
        recommended_for: "Entrepreneurs building marketplace platforms"
      }
    ];
    
    setServices(servicesData);
    setFilteredServices(servicesData);
    setIsLoading(false);
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
        <section className="container mx-auto px-4 py-32 pt-28 bg-white">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-custom-orange font-medium mb-4 font-jakarta"
            >
              Our Services
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-syne">
              Crafting <span className="text-custom-orange">Digital Excellence</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 text-lg md:text-xl font-jakarta"
            >
              From concept to deployment, we design and develop digital experiences that elevate your brand, engage your audience, and drive business growth.
            </motion.p>
          </div>

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div 
                  key={service.id}
                  className="relative group overflow-hidden rounded-xl border border-gray-200 hover:border-custom-orange/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white flex flex-col"
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
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-custom-orange font-medium mb-4 font-jakarta"
              >
                Our Process
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-black mb-6 font-syne"
              >
                How We <span className="text-custom-orange">Deliver Excellence</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-700 max-w-3xl mx-auto font-jakarta"
              >
                Our proven six-step methodology ensures we deliver exceptional results on time, every time.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="process-item p-8 border border-custom-orange/20 rounded-xl hover:border-custom-orange/40 transition-all duration-300 bg-white shadow-sm"
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-custom-orange/10 p-10 rounded-2xl border border-custom-orange/20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-black mb-6 font-syne"
              >
                Need a <span className="text-custom-orange">Custom Solution?</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
            </div>
          </div>
        </section>
      </main>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Services;
