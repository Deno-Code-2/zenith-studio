
import { motion } from "framer-motion";
import { Award, Users, TrendingUp, MessageSquareQuote } from "lucide-react";

const CoreValues = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black font-syne">
            Our Core <span className="text-custom-orange">Values</span>
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto mt-4 font-jakarta">
            These fundamental principles guide our work and define who we are as a company
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Award className="w-12 h-12 text-custom-orange" />,
              title: "Excellence",
              description: "We strive for excellence in everything we do, from design and development to client communication."
            },
            {
              icon: <Users className="w-12 h-12 text-custom-orange" />,
              title: "Collaboration",
              description: "We believe in the power of collaboration—both within our team and with our clients."
            },
            {
              icon: <TrendingUp className="w-12 h-12 text-custom-orange" />,
              title: "Innovation",
              description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions."
            },
            {
              icon: <MessageSquareQuote className="w-12 h-12 text-custom-orange" />,
              title: "Integrity",
              description: "We operate with complete transparency and honesty in all our business dealings."
            }
          ].map((value, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg border-b-4 border-custom-orange transition-all duration-300"
            >
              <div className="mb-6">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-black font-syne">{value.title}</h3>
              <p className="text-gray-700 font-jakarta">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
