import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Smartphone, Zap, MonitorSmartphone, BarChart3 } from "lucide-react";
import ActionButton from "@/components/ActionButton";
import AgencyShowcase from "@/components/AgencyShowcase";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const services = document.querySelectorAll('.service-card');
    services.forEach((service, index) => {
      gsap.from(service, {
        scrollTrigger: {
          trigger: service,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });
  }, []);

  const services = [
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "Web Design",
      description: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression on your audience.",
      price: "1,500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Web Development",
      description: "Our Web Development service is focused on turning your website into a powerful digital asset.",
      price: "1,800"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications.",
      price: "2,500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "In the digital age, marketing is a critical aspect of your business's success.",
      price: "1,900"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 pt-32">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-syne">
            Our <span className="text-custom-orange">Services</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto font-jakarta">
            At Zenith Studio, we are committed to providing exceptional digital solutions tailored to suit your unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-black/50 backdrop-blur-sm border border-custom-orange/20 rounded-xl p-8 hover:border-custom-orange/40 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-custom-orange/10 flex items-center justify-center mb-6">
                <div className="text-custom-orange">
                  {service.icon}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 font-syne">
                {service.title}
              </h2>
              <p className="text-gray-400 mb-6 font-jakarta">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-custom-orange font-syne">
                  Starts at ${service.price}
                </p>
                <ActionButton href="/contact" variant="primary">
                  Book a Call
                </ActionButton>
              </div>
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