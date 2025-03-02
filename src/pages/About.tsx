
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Building2, MessageSquareMore, Rocket, Code2, Palette, Target, BrainCircuit, Laptop, Lightbulb, Award, Clock, Globe, ShieldCheck } from "lucide-react";
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
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-custom-orange font-jakarta"
            >
              About Our Agency
            </motion.p>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white font-syne"
            >
              Empowering Your <span className="text-custom-orange">Digital Presence</span> With <span className="text-custom-orange">Innovative</span> Solutions
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              At <span className="text-custom-orange font-semibold">Zenith Studio</span>, we're more than a digital agency; we're your strategic partner in achieving online excellence. With a passionate team of creatives, developers, and strategists, we transform visionary ideas into digital masterpieces that drive growth and elevate your brand.
            </motion.p>
          </div>
          <motion.div 
            className="flex-1"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img 
              src="/lovable-uploads/My-Logo.png"
              alt="Team"
              className="rounded-lg w-full shadow-[0_0_30px_rgba(228,101,52,0.3)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Vision & Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white font-syne mb-4">Our <span className="text-custom-orange">Vision</span></h2>
                <p className="text-gray-300 leading-relaxed font-jakarta">
                  To revolutionize the digital landscape by creating innovative experiences that bridge the gap between brands and their audiences, setting new standards of excellence in the industry.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-white font-syne mb-4">Our <span className="text-custom-orange">Mission</span></h2>
                <p className="text-gray-300 leading-relaxed font-jakarta">
                  Empower businesses with cutting-edge digital solutions that drive meaningful connections, foster growth, and create lasting impact in an ever-evolving digital world.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <span className="bg-custom-orange/10 text-custom-orange px-4 py-2 rounded-full text-sm font-jakarta">Creative Excellence</span>
                <span className="bg-custom-orange/10 text-custom-orange px-4 py-2 rounded-full text-sm font-jakarta">Technical Innovation</span>
                <span className="bg-custom-orange/10 text-custom-orange px-4 py-2 rounded-full text-sm font-jakarta">Strategic Partnership</span>
                <span className="bg-custom-orange/10 text-custom-orange px-4 py-2 rounded-full text-sm font-jakarta">Result-Oriented</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-6 bg-black/30 rounded-lg border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300">
                <Award className="w-10 h-10 text-custom-orange mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 font-syne">Excellence</h3>
                <p className="text-gray-300 font-jakarta">We strive for excellence in every project we undertake.</p>
              </div>
              
              <div className="p-6 bg-black/30 rounded-lg border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300">
                <ShieldCheck className="w-10 h-10 text-custom-orange mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 font-syne">Integrity</h3>
                <p className="text-gray-300 font-jakarta">We maintain the highest standards of honesty and ethics.</p>
              </div>
              
              <div className="p-6 bg-black/30 rounded-lg border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300">
                <Clock className="w-10 h-10 text-custom-orange mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 font-syne">Punctuality</h3>
                <p className="text-gray-300 font-jakarta">We respect deadlines and deliver on time, every time.</p>
              </div>
              
              <div className="p-6 bg-black/30 rounded-lg border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300">
                <Globe className="w-10 h-10 text-custom-orange mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 font-syne">Global Reach</h3>
                <p className="text-gray-300 font-jakarta">Our solutions reach audiences across the globe.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white font-syne">Our <span className="text-custom-orange">Story</span></h2>
              <p className="text-gray-300 leading-relaxed font-jakarta">
                Founded with a vision to bridge the gap between innovative technology and business success, 
                <span className="text-custom-orange font-semibold"> Zenith Studio</span> emerged from a passion for creating exceptional digital experiences. Our journey began when a group of tech enthusiasts and creative minds came together with a shared mission: to help businesses thrive in the digital landscape.
              </p>
              <p className="text-gray-300 leading-relaxed font-jakarta">
                What makes us unique is our commitment to treating each project as a strategic partnership, focusing on 
                your <span className="text-custom-orange font-semibold">long-term success</span> rather than just immediate results. Over the years, we've evolved from a small startup to a full-service digital agency, but our core values remain unchanged.
              </p>
              <p className="text-gray-300 leading-relaxed font-jakarta">
                Today, we're proud to have helped <span className="text-custom-orange font-semibold">hundreds of businesses</span> across various industries establish powerful digital presences and achieve remarkable growth.
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
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center space-y-4"
            >
              <h3 className="text-5xl font-bold text-custom-orange font-syne">2018</h3>
              <p className="text-xl font-bold text-white font-syne">Founded</p>
              <p className="text-gray-300">
                Founded with vision and innovation, ensuring exceptional digital solutions.
              </p>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center space-y-4"
            >
              <h3 className="text-5xl font-bold text-custom-orange font-syne">162+</h3>
              <p className="text-xl font-bold text-white font-syne">Websites Delivered</p>
              <p className="text-gray-300">
                Successfully crafted over 162 websites, delivering exceptional digital solutions worldwide.
              </p>
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center space-y-4"
            >
              <h3 className="text-5xl font-bold text-custom-orange font-syne">260+</h3>
              <p className="text-xl font-bold text-white font-syne">Happy Clients</p>
              <p className="text-gray-300">
                Proudly served over 260 clients, delivering top-notch digital solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise & Values */}
      <section className="py-20">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4 text-center font-syne">Our <span className="text-custom-orange">Expertise</span> & <span className="text-custom-orange">Values</span></h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We combine technical excellence with creative innovation to deliver solutions that exceed expectations and drive measurable results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300"
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
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300"
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
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300"
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
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300"
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
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300"
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
              className="p-6 bg-black/30 rounded-lg border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300"
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

      {/* Team Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 text-center font-syne">Meet Our <span className="text-custom-orange">Team</span></h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              A diverse group of passionate experts dedicated to bringing your digital vision to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black/20 rounded-lg overflow-hidden group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/cef3806d-cc75-44b0-9a49-bb61a1cf12ef.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white font-syne">Alex Johnson</h3>
                <p className="text-custom-orange">Creative Director</p>
                <p className="text-gray-300 mt-3">
                  With over 10 years of experience in design, Alex leads our creative team with vision and innovation.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-black/20 rounded-lg overflow-hidden group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/eb54254d-4104-44da-9fb8-d469e889c9ae.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white font-syne">Sarah Martinez</h3>
                <p className="text-custom-orange">Lead Developer</p>
                <p className="text-gray-300 mt-3">
                  A coding wizard who transforms complex requirements into elegant, efficient solutions.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-black/20 rounded-lg overflow-hidden group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/ef6c47ae-b45d-4fc0-9582-ceaa1b3f849b.png" 
                  alt="Team Member" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white font-syne">Michael Chang</h3>
                <p className="text-custom-orange">Marketing Strategist</p>
                <p className="text-gray-300 mt-3">
                  A data-driven marketer who crafts campaigns that connect, engage, and convert.
                </p>
              </div>
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
