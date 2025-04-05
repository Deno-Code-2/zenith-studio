
import { motion } from "framer-motion";
import { Zap, Target, Code, TrendingUp } from "lucide-react";

const processSteps = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and audience to develop a strategic foundation."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Strategy",
    description: "Based on our findings, we create a comprehensive strategy tailored to your specific needs and objectives."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Development",
    description: "Our experts bring the vision to life with cutting-edge technology and design best practices."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Growth",
    description: "We continually optimize and improve to ensure sustained success and measurable results."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black font-syne">
            Our <span className="text-custom-orange">Process</span>
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto mt-4 font-jakarta">
            We follow a proven methodology to deliver exceptional results for our clients
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-custom-orange/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="h-16 w-16 flex items-center justify-center bg-custom-orange/10 text-custom-orange rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4 font-syne">
                {step.title}
              </h3>
              <p className="text-gray-700 font-jakarta">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
