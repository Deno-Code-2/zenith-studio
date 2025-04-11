
import { motion } from "framer-motion";

// Company leadership/team data
const teamMembers = [
  {
    name: "Syed Moinuddin",
    role: "CEO & Full Stack Developer",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    bio: "With expertise in full-stack development and digital strategy, Syed leads Zenith Studio in creating innovative digital solutions for clients worldwide."
  },
];

const TeamSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black font-syne">
            Our <span className="text-custom-orange">Leadership</span>
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto mt-4 font-jakarta">
            Meet the talented team behind Zenith Studio's success
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-5">
                    <p className="text-white font-jakarta text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-1 font-syne">{member.name}</h3>
              <p className="text-custom-orange font-medium font-jakarta">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
