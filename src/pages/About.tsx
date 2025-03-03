import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cube3D } from "@/components/Cube3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Animate the timeline
    gsap.from(".timeline-item", {
      scrollTrigger: {
        trigger: ".timeline-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    });

    // Animate the stats
    gsap.from(".stat-item", {
      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });

    // Animate the values section
    gsap.from(".value-item", {
      scrollTrigger: {
        trigger: ".values-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });
  }, []);

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Satisfied Clients" },
    { value: "15+", label: "Team Members" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality, delivering premium digital solutions that exceed expectations."
    },
    {
      title: "Client-Centered",
      description: "Your vision and goals are at the heart of everything we do, ensuring results that align with your needs."
    },
    {
      title: "Innovative Thinking",
      description: "We stay ahead of industry trends, implementing cutting-edge technologies and creative solutions."
    },
    {
      title: "Transparent Process",
      description: "Clear communication and honest feedback throughout the entire development journey."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Zenith Studio was established with a vision to transform digital experiences."
    },
    {
      year: "2019",
      title: "First Major Client",
      description: "Secured our first major client and delivered an award-winning website."
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Expanded our team and office space to accommodate growing client demands."
    },
    {
      year: "2021",
      title: "International Recognition",
      description: "Received international recognition for our innovative digital solutions."
    },
    {
      year: "2022",
      title: "Technology Partners",
      description: "Formed strategic partnerships with leading technology providers."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded our services to clients across multiple countries."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-custom-orange font-medium mb-4 font-jakarta"
                >
                  About Us
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-6xl font-bold text-white mb-6 font-syne"
                >
                  Crafting <span className="text-custom-orange">Digital</span> Experiences
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-300 text-lg leading-relaxed mb-8 font-jakarta"
                >
                  Zenith Studio is a forward-thinking digital agency dedicated to transforming ideas into impactful digital experiences. With a team of creative minds and technical experts, we craft solutions that drive growth and success for our clients worldwide.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    asChild
                    className="bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
                  >
                    <Link to="/services">
                      Our Services <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-custom-orange/20 text-white hover:bg-custom-orange/10 hover:border-custom-orange/40 font-jakarta"
                  >
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <Cube3D />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-black/30 relative">
          <div className="absolute inset-0 opacity-30">
            <FlickeringGrid />
          </div>
          <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-xl"
              >
                <img 
                  src="/lovable-uploads/c668a09e-b5f1-4512-9a80-1abc366f4aba.png" 
                  alt="Our Mission" 
                  className="w-full rounded-xl"
                />
              </motion.div>
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-custom-orange font-medium mb-4 font-jakarta"
                >
                  Our Mission & Vision
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-6 font-syne"
                >
                  Empowering Businesses Through <span className="text-custom-orange">Digital Excellence</span>
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-3 font-syne">Our Mission</h3>
                    <p className="text-gray-300 leading-relaxed font-jakarta">
                      To deliver innovative digital solutions that solve complex challenges and drive meaningful growth for our clients. We combine creativity, technology, and strategic thinking to transform ideas into impactful digital experiences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 font-syne">Our Vision</h3>
                    <p className="text-gray-300 leading-relaxed font-jakarta">
                      To be the leading digital transformation partner for businesses worldwide, known for our excellence, innovation, and the tangible value we create for our clients and their customers.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 stats-section">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item text-center bg-black/30 border border-custom-orange/20 rounded-lg p-8 hover:border-custom-orange/40 transition-all">
                  <div className="text-4xl md:text-5xl font-bold text-custom-orange mb-2 font-syne">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium font-jakarta">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <span className="inline-block text-custom-orange font-medium mb-4 font-jakarta">
                Meet The Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-syne">
                The <span className="text-custom-orange">Creative Minds</span> Behind Our Success
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto font-jakarta">
                Our team of talented professionals brings diverse expertise and a shared passion for digital excellence to every project we undertake.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Alex Johnson", role: "Founder & CEO", image: "/lovable-uploads/c56e51e7-ddcf-4b55-8a37-33329ec603c7.png" },
                { name: "Sarah Chen", role: "Creative Director", image: "/lovable-uploads/53ba9584-ecb7-4e75-95ee-504dc9872b0f.png" },
                { name: "David Kim", role: "Lead Developer", image: "/lovable-uploads/2866c035-24bd-4228-bf9f-af01f2e821da.png" },
                { name: "Lisa Patel", role: "Marketing Strategist", image: "/lovable-uploads/cef3806d-cc75-44b0-9a49-bb61a1cf12ef.png" }
              ].map((member, index) => (
                <div 
                  key={index}
                  className="bg-black/30 border border-custom-orange/20 rounded-xl overflow-hidden hover:border-custom-orange/40 transition-all group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-1 font-syne">{member.name}</h3>
                    <p className="text-custom-orange font-jakarta">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-black/30 values-section">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <span className="inline-block text-custom-orange font-medium mb-4 font-jakarta">
                Core Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-syne">
                Principles That <span className="text-custom-orange">Guide Us</span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto font-jakarta">
                Our core values define who we are and how we approach our work, guiding every decision and interaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="value-item flex items-start gap-6 bg-black/30 border border-custom-orange/20 p-8 rounded-xl hover:border-custom-orange/40 transition-all">
                  <div className="w-12 h-12 rounded-full bg-custom-orange/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-custom-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 font-syne">{value.title}</h3>
                    <p className="text-gray-300 font-jakarta">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 timeline-section">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <span className="inline-block text-custom-orange font-medium mb-4 font-jakarta">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-syne">
                Key <span className="text-custom-orange">Milestones</span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto font-jakarta">
                From our humble beginnings to where we are today, these are the significant moments that have shaped our journey.
              </p>
            </div>
            
            <div className="relative flex flex-col items-center max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-custom-orange/30 transform -translate-x-1/2"></div>
              
              {/* Timeline Items */}
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`timeline-item relative w-full flex items-center mb-12 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-custom-orange"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}>
                    <div className="bg-black/30 border border-custom-orange/20 p-6 rounded-xl hover:border-custom-orange/40 transition-all">
                      <div className="text-custom-orange font-bold mb-2 font-syne">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3 font-syne">{milestone.title}</h3>
                      <p className="text-gray-300 font-jakarta">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/40">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-syne">
                Ready to Bring Your <span className="text-custom-orange">Vision to Life</span>?
              </h2>
              <p className="text-gray-300 mb-8 font-jakarta">
                Let's collaborate to create digital experiences that elevate your brand and drive your business forward. Contact us today to get started!
              </p>
              <Button
                asChild
                className="bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
              >
                <Link to="/contact">
                  Get In Touch <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
