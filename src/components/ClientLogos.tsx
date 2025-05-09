
import { motion } from "framer-motion";

// Company logos with corresponding names
const clients = [
  { name: "NASA", logo: "/images/blacklogo.svg" },
  { name: "Microsoft", logo: "/images/blacklogo.svg" },
  { name: "Google", logo: "/images/blacklogo.svg" },
  { name: "Meta", logo: "/images/blacklogo.svg" },
  { name: "Tesla", logo: "/images/blacklogo.svg" },
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold mb-2 font-syne">Trusted by Innovative Companies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-jakarta">
            Join these forward-thinking organizations that have transformed their digital presence with us
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
