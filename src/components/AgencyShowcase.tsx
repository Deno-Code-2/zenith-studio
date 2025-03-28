
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
    <section className="py-20 bg-gray-50">
      <div className="container px-8 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-black mb-6 font-syne"
            >
              Why Work With Our <span className="text-custom-orange">Agency</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 max-w-3xl mx-auto font-jakarta"
            >
              We combine creativity, technical expertise, and strategic thinking to deliver exceptional digital experiences that drive results for your business.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300 bg-white shadow-sm"
              >
                <h3 className="text-4xl font-bold text-custom-orange mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-jakarta">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-black mb-6 font-syne">
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
              className="overflow-hidden shadow-md size-full"
            >
                  <div className="relative">
                    <Safari
                        url="zenithstudio.xyz"
                        className="size-full"
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
