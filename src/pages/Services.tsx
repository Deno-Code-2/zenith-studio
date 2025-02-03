import { useEffect } from "react";
import { gsap } from "gsap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".service-card",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reverse"
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies.",
      icon: "🚀"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love.",
      icon: "🎨"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies to grow your online presence.",
      icon: "📈"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications.",
      icon: "📱"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-white mb-12 font-syne">
          Our <span className="text-custom-orange">Services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-black border border-custom-orange/20 rounded-xl p-8 hover:border-custom-orange/40 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h2 className="text-2xl font-bold text-white mb-4 font-syne">{service.title}</h2>
              <p className="text-gray-400 font-jakarta">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;