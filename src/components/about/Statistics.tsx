
import { motion } from "framer-motion";

const Statistics = () => {
  return (
    <section className="py-20 bg-custom-orange/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "200+", label: "Projects Completed" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "15+", label: "Industry Awards" },
            { number: "30+", label: "Team Members" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-5xl font-bold text-custom-orange mb-2 font-syne">{stat.number}</p>
              <p className="text-gray-700 font-medium font-jakarta">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
