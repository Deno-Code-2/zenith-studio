
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LinkPreview from "@/components/ui/link-preview";

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

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="services-title text-5xl md:text-6xl font-bold text-white mb-6 font-syne">
            Our <span className="text-custom-orange">Services</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Transforming businesses through innovative digital solutions that drive growth and success.
          </p>
        </div>

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

        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-syne">
            Ready to Transform Your <span className="text-custom-orange">Digital Presence</span>?
          </h2>
          <p className="text-gray-300 mb-8">
            Let's collaborate to bring your vision to life with our comprehensive suite of digital services.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-custom-orange text-white font-bold py-3 px-8 rounded-md hover:bg-orange-600 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
