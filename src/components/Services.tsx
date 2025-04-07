
import TextRotate from "./TextRotate";
import { 
  Briefcase, 
  Target, 
  LayoutGrid, 
  Smartphone, 
  TrendingUp, 
  Globe 
} from "lucide-react";
import { motion } from "framer-motion";
import ServiceItem from "./services/ServiceItem";

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-500" />,
      title: "Strategic Business Solutions",
      description: "We craft innovative digital solutions tailored to your business goals, helping you scale effectively.",
      link: "/services/strategic-business-solutions"
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-red-500" />,
      title: "Precision Marketing & Branding",
      description: "Our data-driven marketing strategies ensure your brand reaches the right audience with maximum impact.",
      link: "/services/precision-marketing-branding"
    },
    {
      icon: <LayoutGrid className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-500" />,
      title: "Stunning & Functional Web Design",
      description: "Create visually compelling and user-friendly websites that elevate your brand and enhance engagement.",
      link: "/services/web-design"
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-500" />,
      title: "Custom Mobile App Development",
      description: "We build high-performance mobile applications with seamless user experiences and cutting-edge features.",
      link: "/services/mobile-app-development"
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-yellow-500" />,
      title: "Growth-Driven SEO Optimization",
      description: "Boost your online presence with expert SEO strategies that drive traffic and improve search rankings.",
      link: "/services/seo-optimization"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-indigo-500" />,
      title: "End-to-End Digital Transformation",
      description: "Empowering businesses with digital transformation strategies that future-proof their online presence.",
      link: "/services/digital-transformation"
    }
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-syne text-black">
            Reasons to Choose Zenith for{" "}
            <span className="inline-flex items-center">
              <TextRotate
                texts={["Growth", "Success", "Results", "Vision"]}
              />
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-6 text-gray-700 max-w-3xl mx-auto text-sm sm:text-base font-jakarta px-4 sm:px-0">
            Transform your digital presence with our comprehensive solutions. We deliver results that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
