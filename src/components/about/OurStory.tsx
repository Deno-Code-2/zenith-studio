
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-syne">
              Our <span className="text-custom-orange">Story</span>
            </h2>
            <p className="text-gray-700 mb-6 font-jakarta">
              Zenith Studio was born from a passion for creating digital experiences that not only look beautiful 
              but also drive real business results. What started as a small team of passionate designers and developers 
              has grown into a full-service digital agency with a global client base.
            </p>
            <p className="text-gray-700 mb-6 font-jakarta">
              Our journey began in 2015 with crafting simple websites, but quickly evolved into developing complex web applications 
              and comprehensive digital strategies. Today, we blend creativity with cutting-edge technology to deliver 
              solutions that help our clients stand out in the digital landscape.
            </p>
            <p className="text-gray-700 font-jakarta">
              With a team of experts across design, development, marketing, and strategy, we've helped hundreds of businesses
              transform their digital presence and achieve remarkable growth.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Zenith team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 md:bottom-12 md:-right-12 bg-white p-4 md:p-6 rounded-xl shadow-lg max-w-[200px]">
              <p className="text-custom-orange font-bold text-3xl font-syne">7+</p>
              <p className="text-gray-700 font-jakarta text-sm">Years of excellence in digital solutions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
