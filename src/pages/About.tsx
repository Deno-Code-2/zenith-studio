import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight, Target, Compass, TrendingUp, Award, Users, MessageSquareQuote } from "lucide-react";
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

    // Mission and Vision animation
    gsap.from(".mission-vision-section", {
      scrollTrigger: {
        trigger: ".mission-vision-section",
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 30,
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
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-8 items-center">
              <div className="text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-syne"
                >
                  About <span className="text-custom-orange">Zenith Studio</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-jakarta"
                >
                  We transform digital visions into exceptional online experiences through innovative design, 
                  seamless development, and strategic digital solutions.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-gray-50 mission-vision-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-custom-orange/5 rounded-full -mt-16 -mr-16 group-hover:scale-150 transition-transform duration-700"></div>
                <Target className="w-12 h-12 text-custom-orange mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-syne relative z-10">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed mb-4 font-jakarta relative z-10">
                  At Zenith Studio, our mission is to empower businesses with exceptional digital solutions that drive growth and success. 
                  We're committed to delivering innovative websites and applications that not only look stunning but also perform flawlessly.
                </p>
                <p className="text-gray-700 leading-relaxed font-jakarta relative z-10">
                  We believe in creating digital experiences that are accessible, user-friendly, and aligned with our clients' business objectives. 
                  Through a perfect blend of creativity and technical expertise, we strive to be the catalyst for our clients' digital transformation.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-custom-orange/5 rounded-full -mt-16 -mr-16 group-hover:scale-150 transition-transform duration-700"></div>
                <Compass className="w-12 h-12 text-custom-orange mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-syne relative z-10">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed mb-4 font-jakarta relative z-10">
                  We envision a future where every business, regardless of size, has access to world-class digital solutions that enable them to thrive in an increasingly digital world.
                </p>
                <p className="text-gray-700 leading-relaxed font-jakarta relative z-10">
                  Our vision is to be recognized globally as a leading digital agency that consistently pushes boundaries, embraces emerging technologies, and sets new standards for excellence in web design and development.
                  We aim to build long-lasting partnerships with our clients and contribute positively to their growth journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <hr className="border-t border-gray-200 my-12" />
        </div>

        {/* Our Story Section */}
        <section className="py-16 content-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-syne">
                  Our <span className="text-custom-orange">Story</span>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 font-jakarta">
                  Zenith Studio was born from a passion for creating digital experiences that not only look beautiful 
                  but also drive real business results. What started as a small team of passionate designers and developers 
                  has grown into a full-service digital agency with a global client base.
                </p>
                <p className="text-gray-700 leading-relaxed font-jakarta">
                  Our journey began with crafting simple websites but quickly evolved into developing complex web applications 
                  and comprehensive digital strategies. Today, we blend creativity with cutting-edge technology to deliver 
                  solutions that help our clients stand out in the digital landscape.
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl h-80 w-full flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full bg-custom-orange/10 flex items-center justify-center">
                  <p className="text-gray-600 font-jakarta">Our studio workspace</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-syne">
                Our <span className="text-custom-orange">Core Values</span>
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto font-jakarta">
                These fundamental principles guide our work and define who we are as a company.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Award className="w-10 h-10 text-custom-orange" />,
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from design and development to client communication."
                },
                {
                  icon: <Users className="w-10 h-10 text-custom-orange" />,
                  title: "Collaboration",
                  description: "We believe in the power of collaboration—both within our team and with our clients."
                },
                {
                  icon: <TrendingUp className="w-10 h-10 text-custom-orange" />,
                  title: "Innovation",
                  description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions."
                },
                {
                  icon: <MessageSquareQuote className="w-10 h-10 text-custom-orange" />,
                  title: "Integrity",
                  description: "We operate with complete transparency and honesty in all our business dealings."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-custom-orange/30 transition-colors duration-300">
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 font-syne">{value.title}</h3>
                  <p className="text-gray-700 font-jakarta">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 content-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-syne">
              Our <span className="text-custom-orange">Philosophy</span>
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
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
                  <h3 className="font-bold text-xl mb-4 text-gray-900 font-syne">{item.title}</h3>
                  <p className="text-gray-700 font-jakarta">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 bg-gray-50 content-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gray-100 rounded-xl h-80 w-full flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full bg-custom-orange/5 flex items-center justify-center">
                  <p className="text-gray-600 font-jakarta">Our workflow visualization</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-syne">
                  Our <span className="text-custom-orange">Approach</span>
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 font-jakarta">
                  We begin every project with a deep dive into understanding your business, audience, and objectives. 
                  This discovery phase informs our strategic approach before we move into design and development.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 font-jakarta">
                  Our iterative process ensures that you're involved at every step, providing feedback that helps us 
                  refine the solution until it perfectly matches your vision and exceeds your expectations.
                </p>
                <p className="text-gray-700 leading-relaxed font-jakarta">
                  After launch, we continue to analyze performance and make data-driven optimizations to ensure 
                  your digital presence delivers ongoing results and ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 team-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 font-syne">
                Meet <span className="text-custom-orange">Our Team</span>
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto mt-4 font-jakarta">
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
                <div key={index} className="team-member bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="rounded-full h-32 w-32 mx-auto mb-4 overflow-hidden border-2 border-custom-orange/20">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 font-syne">{member.name}</h3>
                  <p className="text-gray-600 font-jakarta">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-custom-orange/10">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-syne">
              Ready to bring your vision to life?
            </h2>
            <p className="text-gray-700 mb-8 font-jakarta">
              Let's collaborate to create a digital experience that perfectly represents your brand and engages your audience.
            </p>
            <Button
              asChild
              className="bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Start Your Project <ChevronRight className="h-5 w-5 ml-2" />
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