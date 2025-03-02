
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LinkPreview from "@/components/ui/link-preview";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    // Animation for the heading
    gsap.from(".services-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animation for the services cards
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });

    // Animation for process section
    gsap.from(".process-item", {
      scrollTrigger: {
        trigger: ".process-section",
        start: "top bottom-=100",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom website development with cutting-edge technologies to deliver exceptional user experiences and performant web applications.",
      image: "/lovable-uploads/c56e51e7-ddcf-4b55-8a37-33329ec603c7.png",
      link: "/services-details?service=web-development"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
      image: "/lovable-uploads/75af366f-3448-4646-acc0-9ef4cf799b9d.png",
      link: "/services-details?service=mobile-development"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Human-centered design solutions that elevate user experiences through intuitive interfaces and engaging visual aesthetics.",
      image: "/lovable-uploads/53ba9584-ecb7-4e75-95ee-504dc9872b0f.png",
      link: "/services-details?service=ui-ux-design"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to boost your online presence and drive meaningful engagement with your target audience.",
      image: "/lovable-uploads/49d0139e-2632-442c-9a15-3da4b0ead595.png",
      link: "/services-details?service=digital-marketing"
    },
    {
      id: 5,
      title: "Brand Identity",
      description: "Comprehensive brand development services to create a distinctive and memorable identity for your business.",
      image: "/lovable-uploads/c668a09e-b5f1-4512-9a80-1abc366f4aba.png",
      link: "/services-details?service=brand-identity"
    },
    {
      id: 6,
      title: "e-Commerce Solutions",
      description: "End-to-end e-commerce development to help you build and scale your online store with powerful sales capabilities.",
      image: "/lovable-uploads/2866c035-24bd-4228-bf9f-af01f2e821da.png",
      link: "/services-details?service=ecommerce-solutions"
    }
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

  const benefits = [
    "Increased online visibility and brand awareness",
    "Improved user engagement and conversion rates",
    "Seamless functionality across all devices",
    "Enhanced security and performance",
    "Ongoing support and maintenance",
    "Data-driven insights for continuous improvement"
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
              className="text-gray-300 text-lg md:text-xl"
            >
              We offer comprehensive digital solutions designed to help businesses thrive in today's competitive landscape. From stunning websites to powerful mobile apps, our services are tailored to drive growth and success.
            </motion.p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                <LinkPreview
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                />
              </div>
            ))}
          </div>
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
                  className="text-gray-300 mb-8"
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
                className="text-gray-300 max-w-3xl mx-auto"
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
                className="text-gray-300 mb-8"
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
