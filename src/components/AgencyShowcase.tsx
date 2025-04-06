
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Safari } from "./magicui/safari";

const AgencyShowcase = () => {
  const stats = [
    { value: "15+", label: "Projects Delivered" },
    { value: "2+", label: "Years Experience" },
    { value: "88%", label: "Client Satisfaction" },
    { value: "24/7", label: "Customer Support" },
  ];

  const benefits = [
    "Client-focused approach with dedicated project managers",
    "Transparent pricing and clear communication throughout",
    "Adherence to deadlines and project timelines",
    "Post-launch support and optimization services",
    "Continuous updates on project progress",
    "Expert team of designers, developers, and strategists"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-syne">
              Why Work With Our <span className="text-custom-orange">Agency</span>
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 max-w-2xl mx-auto font-jakarta"
            >
              We combine creativity, technical expertise, and strategic thinking to deliver exceptional digital experiences that drive results for your business.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-5 rounded-xl border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300 bg-white shadow-sm"
              >
                <h3 className="text-3xl font-bold text-custom-orange mb-1">{stat.value}</h3>
                <p className="text-gray-600 font-jakarta text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h3 className="text-2xl font-bold text-black mb-5 font-syne">
                Our Commitment to <span className="text-custom-orange">Excellence</span>
              </h3>

              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-custom-orange flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 font-jakarta">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden shadow-md w-full h-full"
            >
              <div className="relative">
                <Safari
                  url="zenithstudio.xyz"
                  className="w-full h-full"
                  imageSrc="/images/Zenith Studio.png"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyShowcase;
