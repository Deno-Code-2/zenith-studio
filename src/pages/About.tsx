
import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Animation for team members
    gsap.from(".team-member", {
      scrollTrigger: {
        trigger: ".team-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });

    // Content sections animation
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
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Toaster />
      <main className="pb-0">
        {/* Hero Section */}
        <section className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-8 items-center">
              <div className="text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 font-syne"
                >
                  About <span className="text-custom-orange">Zenith Studio</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-black text-lg leading-relaxed max-w-3xl mx-auto font-jakarta"
                >
                  We transform digital visions into exceptional online experiences through innovative design, 
                  seamless development, and strategic digital solutions.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <hr className="border-t border-gray-200 my-8" />
        </div>

        {/* Our Story Section */}
        <section className="py-12 content-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 font-syne">
                  <span className="text-custom-orange">OUR STORY</span>
                </h2>
                <p className="text-black leading-relaxed mb-4 font-jakarta text-sm">
                  Zenith Studio was born from a passion for creating digital experiences that not only look beautiful 
                  but also drive real business results. What started as a small team of passionate designers and developers 
                  has grown into a full-service digital agency with a global client base.
                </p>
                <p className="text-black leading-relaxed font-jakarta text-sm">
                  Our journey began with crafting simple websites but quickly evolved into developing complex web applications 
                  and comprehensive digital strategies. Today, we blend creativity with cutting-edge technology to deliver 
                  solutions that help our clients stand out in the digital landscape.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg h-64 md:h-80 w-full flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full bg-custom-orange/10 flex items-center justify-center">
                  <p className="text-gray-600 font-jakarta">Our studio workspace</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-12 bg-gray-50 content-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-12 text-center font-syne">
              <span className="text-custom-orange">OUR PHILOSOPHY</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "We constantly push boundaries and explore new technologies to provide cutting-edge solutions."
                },
                {
                  title: "Precision",
                  description: "Every pixel matters. We pay meticulous attention to detail in everything we create."
                },
                {
                  title: "Partnership",
                  description: "We work as an extension of your team, aligning our expertise with your business goals."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
                  <h3 className="font-bold text-lg mb-4 font-syne">{item.title}</h3>
                  <p className="text-gray-600 font-jakarta text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-12 content-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gray-100 rounded-lg h-64 md:h-80 w-full flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full bg-custom-orange/5 flex items-center justify-center">
                  <p className="text-gray-600 font-jakarta">Our workflow visualization</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 font-syne">
                  <span className="text-custom-orange">OUR APPROACH</span>
                </h2>
                <p className="text-black leading-relaxed mb-4 font-jakarta text-sm">
                  We begin every project with a deep dive into understanding your business, audience, and objectives. 
                  This discovery phase informs our strategic approach before we move into design and development.
                </p>
                <p className="text-black leading-relaxed mb-4 font-jakarta text-sm">
                  Our iterative process ensures that you're involved at every step, providing feedback that helps us 
                  refine the solution until it perfectly matches your vision and exceeds your expectations.
                </p>
                <p className="text-black leading-relaxed font-jakarta text-sm">
                  After launch, we continue to analyze performance and make data-driven optimizations to ensure 
                  your digital presence delivers ongoing results and ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 bg-gray-50 team-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black font-syne">
                <span className="text-custom-orange">OUR TEAM</span>
              </h2>
              <p className="text-black max-w-2xl mx-auto mt-4 font-jakarta text-sm">
                Our talented team brings together diverse skills and experiences to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[
                { 
                  name: "Alex Chen", 
                  role: "Creative Director",
                  image: "https://randomuser.me/api/portraits/women/44.jpg"
                },
                { 
                  name: "Maya Rodriguez", 
                  role: "Lead Designer",
                  image: "https://randomuser.me/api/portraits/women/68.jpg" 
                },
                { 
                  name: "James Wilson", 
                  role: "Web Developer",
                  image: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                { 
                  name: "Sarah Johnson", 
                  role: "UX Researcher",
                  image: "https://randomuser.me/api/portraits/women/65.jpg"
                },
                { 
                  name: "David Kim", 
                  role: "Front-end Engineer",
                  image: "https://randomuser.me/api/portraits/men/75.jpg"
                }
              ].map((member, index) => (
                <div key={index} className="team-member bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="rounded-full h-24 w-24 mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-black font-syne">{member.name}</h3>
                  <p className="text-gray-600 text-sm font-jakarta">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-custom-orange/10">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 font-syne">
              Ready to bring your vision to life?
            </h2>
            <p className="text-black mb-6 font-jakarta text-sm">
              Let's collaborate to create a digital experience that perfectly represents your brand and engages your audience.
            </p>
            <Button
              asChild
              className="bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
            >
              <Link to="/contact">
                Start Your Project <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
