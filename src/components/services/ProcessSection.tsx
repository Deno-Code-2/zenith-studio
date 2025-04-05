
import { motion } from "framer-motion";

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start with a deep dive into your business, target audience, and goals to create a strategic roadmap."
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Our team develops a detailed implementation plan with project timeline and deliverables."
    },
    {
      number: "03",
      title: "Design & Prototyping",
      description: "We create visually stunning designs and interactive prototypes for your approval."
    },
    {
      number: "04", 
      title: "Development",
      description: "Our developers bring designs to life with clean, efficient, and scalable code."
    },
    {
      number: "05",
      title: "Testing & QA",
      description: "Rigorous testing across devices and browsers ensures a flawless experience."
    },
    {
      number: "06",
      title: "Launch & Support",
      description: "We handle the deployment and provide ongoing support to ensure continued success."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-custom-orange font-medium mb-4 font-jakarta"
          >
            Our Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-black mb-6 font-syne"
          >
            How We <span className="text-custom-orange">Deliver Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 max-w-3xl mx-auto font-jakarta"
          >
            Our proven six-step methodology ensures we deliver exceptional results on time, every time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="process-item p-8 border border-custom-orange/20 rounded-xl hover:border-custom-orange/40 transition-all duration-300 bg-white shadow-sm hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-custom-orange/10 text-custom-orange font-bold mb-5 font-syne text-xl">
                {step.number}
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
