import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Building2, MessageSquareMore, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-syne">
            We Turn Ideas into <span className="text-custom-orange">High-Performing</span> Digital Experiences
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-jakarta">
            Empowering businesses with innovative solutions that drive growth and success in the digital age.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white font-syne">Our Story</h2>
              <p className="text-gray-300 leading-relaxed font-jakarta">
                Founded with a vision to bridge the gap between innovative technology and business success, 
                Zenith Studio emerged from a passion for creating exceptional digital experiences. What makes 
                us unique is our commitment to treating each project as a strategic partnership, focusing on 
                your long-term success rather than just immediate results.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="/lovable-uploads/My-Logo.png"
                alt="Our Journey"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise & Values */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-syne">Our Expertise & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20"
            >
              <Rocket className="w-12 h-12 text-custom-orange mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Technical Excellence</h3>
              <p className="text-gray-300 font-jakarta">
                Expertise in React, Next.js, TypeScript, and modern web technologies
              </p>
            </motion.div>
            {/* Add more expertise cards here */}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-syne">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20"
            >
              <p className="text-gray-300 mb-4 font-jakarta">
                "Working with Zenith Studio transformed our online presence. Their attention to detail
                and technical expertise delivered results beyond our expectations."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/lovable-uploads/My-Logo.png"
                  alt="Client"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-white font-bold font-syne">John Smith</h4>
                  <p className="text-gray-400 font-jakarta">CEO, TechCorp</p>
                </div>
              </div>
            </motion.div>
            {/* Add more testimonials here */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;