import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Lightbulb, Smartphone, Zap, Users2, Search, Code, Palette } from "lucide-react";
import AgencyShowcase from "@/components/AgencyShowcase";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    const services = document.querySelectorAll('.service-card');
    
    services.forEach((service, index) => {
      gsap.from(service, {
        scrollTrigger: {
          trigger: service,
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

    gsap.from(".services-title", {
      scrollTrigger: {
        trigger: ".services-title",
        start: "top bottom",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies and modern frameworks."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to boost your online presence and reach."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Comprehensive brand development and positioning strategies."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Advanced SEO techniques to improve your search engine rankings."
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Social Media",
      description: "Engaging social media management and content creation services."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Website optimization for maximum speed and performance."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="services-title text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-syne">
            Our <span className="text-custom-orange">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-jakarta">
            We offer a comprehensive suite of digital services to help your business thrive in the modern digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-black border border-custom-orange/20 rounded-xl p-8 hover:border-custom-orange/40 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-custom-orange/10 flex items-center justify-center mb-6 group-hover:bg-custom-orange/20 transition-colors">
                <div className="text-custom-orange">
                  {service.icon}
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-4 font-syne group-hover:text-custom-orange transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-400 font-jakarta">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </main>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Services;
