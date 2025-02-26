import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Building2, MessageSquareMore, Rocket, Code2, Palette, Target, BrainCircuit, Laptop, Lightbulb } from "lucide-react";
import AgencyShowcase from "@/components/AgencyShowcase";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 px-8 lg:px-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <p className="text-custom-orange font-jakarta">About</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-syne">
              Empowering Your Online Presence<br />
              Discover the <span className="text-orange-500">Zenith Studio</span> Difference Today!
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Zenith Studio is more than a digital agency; we're your partner in online success. With a commitment to excellence and a passion for innovation, we offer a full suite of services designed to elevate your brand and expand your reach.
            </p>
          </div>
          <div className="flex-1">
            <img 
              src="/lovable-uploads/My-Logo.png"
              alt="Team"
              className="rounded-lg w-full"
            />
          </div>
        </div>
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

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white font-syne">Founded</h3>
              <p className="text-gray-300">
                Founded with vision and innovation, ensuring exceptional digital solutions.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white font-syne">162 Websites</h3>
              <p className="text-gray-300">
                Successfully crafted over 162 websites, delivering exceptional digital solutions worldwide.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white font-syne">260 Clients</h3>
              <p className="text-gray-300">
                Proudly served over 260 clients, delivering top-notch digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Values */}
      <section className="py-20">
        <div className="container mx-auto px-8 lg:px-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-syne">Our Expertise & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20"
            >
              <Code2 className="w-12 h-12 text-custom-orange mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Technical Excellence</h3>
              <p className="text-gray-300 font-jakarta">
                Expertise in React, Next.js, TypeScript, and modern web technologies for robust, scalable solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20"
            >
              <Palette className="w-12 h-12 text-custom-orange mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Creative Design</h3>
              <p className="text-gray-300 font-jakarta">
                Innovative UI/UX design combining aesthetics with functionality for exceptional user experiences.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20"
            >
              <Target className="w-12 h-12 text-custom-orange mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Strategic Approach</h3>
              <p className="text-gray-300 font-jakarta">
                Data-driven strategies ensuring your digital presence aligns with business objectives.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20"
            >
              <BrainCircuit className="w-12 h-12 text-custom-orange mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Innovation Focus</h3>
              <p className="text-gray-300 font-jakarta">
                Embracing cutting-edge technologies and methodologies to keep you ahead of the curve.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20"
            >
              <Laptop className="w-12 h-12 text-custom-orange mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Responsive Solutions</h3>
              <p className="text-gray-300 font-jakarta">
                Cross-platform compatibility ensuring seamless experiences across all devices.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20"
            >
              <Lightbulb className="w-12 h-12 text-custom-orange mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Problem Solving</h3>
              <p className="text-gray-300 font-jakarta">
                Creative solutions to complex challenges, turning obstacles into opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <AgencyShowcase />
      <Footer />
    </main>
  );
};

export default About;
