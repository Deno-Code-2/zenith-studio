import TextRotate from "./TextRotate";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { 
  Briefcase, 
  Target, 
  LayoutGrid, 
  Smartphone, 
  TrendingUp, 
  Globe 
} from "lucide-react";

const services = [
  {
    icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />,
    title: "Strategic Business Solutions",
    description: "We craft innovative digital solutions tailored to your business goals, helping you scale effectively."
  },
  {
    icon: <Target className="w-8 h-8 md:w-10 md:h-10 text-red-500" />,
    title: "Precision Marketing & Branding",
    description: "Our data-driven marketing strategies ensure your brand reaches the right audience with maximum impact."
  },
  {
    icon: <LayoutGrid className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />,
    title: "Stunning & Functional Web Design",
    description: "Create visually compelling and user-friendly websites that elevate your brand and enhance engagement."
  },
  {
    icon: <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-green-500" />,
    title: "Custom Mobile App Development",
    description: "We build high-performance mobile applications with seamless user experiences and cutting-edge features."
  },
  {
    icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />,
    title: "Growth-Driven SEO Optimization",
    description: "Boost your online presence with expert SEO strategies that drive traffic and improve search rankings."
  },
  {
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-indigo-500" />,
    title: "End-to-End Digital Transformation",
    description: "Empowering businesses with digital transformation strategies that future-proof their online presence."
  }
];

const Services = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-syne text-black">
            Reasons to Choose Zenith for{" "}
            <span className="inline-flex items-center">
              <TextRotate
                texts={["Growth", "Success", "Results", "Vision"]}
              />
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-700 max-w-3xl mx-auto text-sm sm:text-base font-jakarta px-4 sm:px-0">
            Transform your digital presence with our comprehensive solutions. We deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 shadow-sm"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-custom-orange/10 flex items-center justify-center mb-4 sm:mb-6">
                <div className="text-custom-orange">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black font-syne">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base font-jakarta">
                {service.description}
              </p>
              <Link 
                to="/services/how-we-work" 
                className="mt-4 sm:mt-6 text-custom-orange flex items-center gap-2 hover:gap-3 transition-all duration-300 font-jakarta text-sm sm:text-base"
              >
                Learn More <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;