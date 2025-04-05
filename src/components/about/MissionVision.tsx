
import { motion } from "framer-motion";
import { Compass, Target } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-black font-syne"
          >
            Our Mission & <span className="text-custom-orange">Vision</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-10 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-custom-orange/5 rounded-full -mt-20 -mr-20 group-hover:scale-150 transition-transform duration-700"></div>
            <Target className="w-14 h-14 text-custom-orange mb-8" />
            <h3 className="text-3xl font-bold text-black mb-6 font-syne relative z-10">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-6 font-jakarta relative z-10">
              At Zenith Studio, our mission is to empower businesses with exceptional digital solutions that drive growth and success. 
              We're committed to delivering innovative websites and applications that not only look stunning but also perform flawlessly.
            </p>
            <p className="text-gray-700 leading-relaxed font-jakarta relative z-10">
              We believe in creating digital experiences that are accessible, user-friendly, and aligned with our clients' business objectives. 
              Through a perfect blend of creativity and technical expertise, we strive to be the catalyst for our clients' digital transformation.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-10 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-custom-orange/5 rounded-full -mt-20 -mr-20 group-hover:scale-150 transition-transform duration-700"></div>
            <Compass className="w-14 h-14 text-custom-orange mb-8" />
            <h3 className="text-3xl font-bold text-black mb-6 font-syne relative z-10">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed mb-6 font-jakarta relative z-10">
              We envision a future where every business, regardless of size, has access to world-class digital solutions that enable them to thrive in an increasingly digital world.
            </p>
            <p className="text-gray-700 leading-relaxed font-jakarta relative z-10">
              Our vision is to be recognized globally as a leading digital agency that consistently pushes boundaries, embraces emerging technologies, and sets new standards for excellence in web design and development.
              We aim to build long-lasting partnerships with our clients and contribute positively to their growth journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
