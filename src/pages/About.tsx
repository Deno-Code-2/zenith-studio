
import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight, Target, Compass, TrendingUp, Award, Users, MessageSquareQuote, Zap, Code } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

gsap.registerPlugin(ScrollTrigger);

// Company leadership/team data
const teamMembers = [
  {
    name: "Alex Rodriguez",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    bio: "With over 15 years of experience in digital strategy and entrepreneurship, Alex founded Zenith Studio to help businesses transform their digital presence."
  },
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    bio: "Sarah brings 12 years of design excellence to Zenith, leading our creative team to deliver stunning visual experiences that elevate brands."
  },
  {
    name: "David Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    bio: "David's expertise in full-stack development and system architecture ensures our technical implementations are robust, scalable, and future-proof."
  },
  {
    name: "Priya Patel",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    bio: "Priya specializes in data-driven marketing strategies that connect brands with their ideal audience and drive measurable results."
  }
];

// Process steps
const processSteps = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and audience to develop a strategic foundation."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Strategy",
    description: "Based on our findings, we create a comprehensive strategy tailored to your specific needs and objectives."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Development",
    description: "Our experts bring the vision to life with cutting-edge technology and design best practices."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Growth",
    description: "We continually optimize and improve to ensure sustained success and measurable results."
  }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Animation for content sections
    gsap.from(".content-section", {
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.7,
      ease: "power2.out"
    });

    // Team members animation
    gsap.from(".team-member", {
      scrollTrigger: {
        trigger: ".team-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Toaster />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Zenith Studio office" 
          className="w-full h-full object-cover"
        />
        
        {/* Hero content */}
        <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-syne">
              About <span className="text-custom-orange">Zenith Studio</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl font-jakarta">
              We transform digital visions into exceptional online experiences through innovative design, 
              seamless development, and strategic digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 content-section">
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

      {/* Mission & Vision Section */}
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

      {/* Process Section */}
      <section className="py-20 content-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black font-syne">
              Our <span className="text-custom-orange">Process</span>
            </h2>
            <p className="text-gray-700 max-w-xl mx-auto mt-4 font-jakarta">
              We follow a proven methodology to deliver exceptional results for our clients
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-custom-orange/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="h-16 w-16 flex items-center justify-center bg-custom-orange/10 text-custom-orange rounded-full mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-syne">
                  {step.title}
                </h3>
                <p className="text-gray-700 font-jakarta">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
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

      {/* Team Section */}
      <section className="py-20 team-section">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black font-syne">
              Our <span className="text-custom-orange">Leadership</span>
            </h2>
            <p className="text-gray-700 max-w-xl mx-auto mt-4 font-jakarta">
              Meet the talented team behind Zenith Studio's success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="team-member group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
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

      {/* Statistics Section */}
      <section className="py-20 bg-custom-orange/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "15+", label: "Industry Awards" },
              { number: "30+", label: "Team Members" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl font-bold text-custom-orange mb-2 font-syne">{stat.number}</p>
                <p className="text-gray-700 font-medium font-jakarta">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-custom-orange/10 p-10 md:p-16 rounded-3xl border border-custom-orange/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-syne">
              Ready to bring your <span className="text-custom-orange">vision to life?</span>
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-jakarta">
              Let's collaborate to create a digital experience that perfectly represents your brand and engages your audience.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
            >
              <Link to="/contact">
                Start Your Project <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
