
import { Sparkles, Lightbulb, Smartphone, Zap, Users2, Search } from "lucide-react";
import TextRotate from "./TextRotate";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Expertise That Drives Results",
    description: "Our team of seasoned professionals brings years of experience and expertise to the table."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Tailored Business Solutions",
    description: "We understand that every business is unique. That's why our solutions are customized."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Cutting-Edge Web Design",
    description: "Leave a lasting impression on your audience with our top-notch web design services."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile-First Approach",
    description: "In today's mobile-centric world, we prioritize mobile-first design to ensure your website."
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: "Marketing Strategies",
    description: "Our data-driven marketing strategies allow us to target the right audience with precision."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Search Engine Optimization",
    description: "(SEO) Mastery Boost your online visibility with our expert SEO techniques."
  }
];

const Services = () => {
  return (
    <section className="py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4 font-syne text-white flex items-center justify-center flex-wrap">
            <span className="mr-2">Reasons to Choose Zenith for</span>
            <TextRotate
              texts={[
                "Innovation",
                "Excellence",
                "Growth",
                "Success",
                "Results",
                "Vision",
              ]}
            />
          </h2>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto font-jakarta">
            Transform your digital presence with our comprehensive solutions. We deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-black border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-custom-orange/10 flex items-center justify-center mb-6">
                <div className="text-custom-orange">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white font-syne">
                {service.title}
              </h3>
              <p className="text-gray-400 font-jakarta">
                {service.description}
              </p>
              <Link to="/services-details" className="mt-6 text-custom-orange flex items-center gap-2 hover:gap-3 transition-all duration-300 font-jakarta">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
