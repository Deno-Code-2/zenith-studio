
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

type ServiceType = 'All' | 'Landing Page' | 'SaaS Website' | 'Startup Website' | 'E-commerce Website';

type ProjectItem = {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  project_url: string | null;
  project_type: string;
};

const Services = () => {
  const [activeFilter, setActiveFilter] = useState<ServiceType>('All');
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter options
  const filterOptions: ServiceType[] = [
    'All', 
    'Landing Page', 
    'SaaS Website', 
    'Startup Website', 
    'E-commerce Website'
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*');
        
        if (error) {
          console.error('Error fetching projects:', error);
          return;
        }
        
        if (data) {
          // Make sure we cast the data properly with project_type
          const projectsWithType = data.map(project => ({
            ...project,
            project_type: project.project_type || 'Landing Page' // Provide fallback for older data
          })) as ProjectItem[];
          
          setProjects(projectsWithType);
          setFilteredProjects(projectsWithType);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
    
    // GSAP animations
    gsap.from(".services-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.project_type === activeFilter)
      );
    }
  }, [activeFilter, projects]);

  const benefits = [
    "Increased online visibility and brand awareness",
    "Improved user engagement and conversion rates",
    "Seamless functionality across all devices",
    "Enhanced security and performance",
    "Ongoing support and maintenance",
    "Data-driven insights for continuous improvement"
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience to create a strategic roadmap for your project."
    },
    {
      number: "02",
      title: "Planning",
      description: "Our team develops a detailed plan with project timeline, deliverables, and key milestones to ensure efficient execution."
    },
    {
      number: "03",
      title: "Design",
      description: "We create visually stunning designs that align with your brand identity and provide optimal user experiences."
    },
    {
      number: "04", 
      title: "Development",
      description: "Our developers bring designs to life using the latest technologies and best practices for performance and scalability."
    },
    {
      number: "05",
      title: "Testing",
      description: "We rigorously test all aspects of your project to ensure functionality, performance, and compatibility across devices."
    },
    {
      number: "06",
      title: "Launch",
      description: "Once approved, we deploy your project and provide detailed documentation and training if needed."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-custom-orange font-medium mb-4 font-jakarta"
            >
              Our Services
            </motion.span>
            <h1 className="services-title text-5xl md:text-6xl font-bold text-white mb-6 font-syne">
              Transforming Ideas Into <span className="text-custom-orange">Digital Reality</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl font-jakarta"
            >
              We offer comprehensive digital solutions designed to help businesses thrive in today's competitive landscape. From stunning websites to powerful mobile apps, our services are tailored to drive growth and success.
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
                    : "border-custom-orange/20 text-white hover:bg-custom-orange/10"}
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
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl text-white font-jakarta mb-4">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category or check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group relative rounded-xl overflow-hidden bg-black/30 border border-custom-orange/20 hover:border-custom-orange/40 transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image_url || "/placeholder.svg"} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                  <div className="p-6 relative">
                    <div className="bg-custom-orange/10 text-custom-orange px-3 py-1 rounded-full text-sm inline-block mb-4">
                      {project.project_type}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-syne">{project.title}</h3>
                    <p className="text-gray-300 mb-4 font-jakarta">{project.description}</p>
                    <a 
                      href={project.project_url || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-custom-orange hover:text-white transition-colors gap-2 font-jakarta"
                    >
                      View Project <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-custom-orange font-medium mb-4 font-jakarta"
                >
                  Why Choose Us
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-6 font-syne"
                >
                  Benefits of Our <span className="text-custom-orange">Professional Services</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-300 mb-8 font-jakarta"
                >
                  Partner with us to experience a transformative approach to digital solutions. Our commitment to excellence ensures that your business reaps the following benefits:
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="text-custom-orange mt-1 flex-shrink-0" size={18} />
                      <p className="text-gray-300 font-jakarta">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="overflow-hidden rounded-xl"
              >
                <img 
                  src="/lovable-uploads/109e990b-ee2c-458e-8383-158a22aa6437.png" 
                  alt="Professional Services" 
                  className="w-full rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 process-section">
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
                className="text-3xl md:text-4xl font-bold text-white mb-6 font-syne"
              >
                How We <span className="text-custom-orange">Work</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 max-w-3xl mx-auto font-jakarta"
              >
                Our streamlined process ensures efficient project delivery while maintaining the highest quality standards at every stage.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="process-item p-6 border border-custom-orange/20 rounded-lg hover:border-custom-orange/40 transition-all duration-300 bg-black/30">
                  <div className="text-4xl font-bold text-custom-orange mb-4 font-syne">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-syne">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 font-jakarta">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/40">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6 font-syne"
              >
                Ready to Transform Your <span className="text-custom-orange">Digital Presence</span>?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 mb-8 font-jakarta"
              >
                Let's collaborate to bring your vision to life with our comprehensive suite of digital services. Contact us today to get started!
              </motion.p>
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                href="/contact" 
                className="inline-flex items-center gap-2 bg-custom-orange text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors duration-300"
              >
                Get in Touch <ArrowRight size={18} />
              </motion.a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
