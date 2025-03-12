import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ChevronRight, Rocket, Lightbulb, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cube3D } from "@/components/Cube3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { Toaster } from "@/components/ui/toaster";

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
  }, []);

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Satisfied Clients" },
    { value: "15+", label: "Team Members" }
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
  
  const tabContent = [
    {
      title: "Our Vision",
      value: "vision",
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 font-syne">Shaping Digital Futures</h3>
            <p className="text-gray-300 leading-relaxed mb-4 font-jakarta">
              Our vision is to be the leading digital transformation partner for businesses worldwide, 
              known for our excellence, innovation, and the tangible value we create for our clients and their customers.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4 font-jakarta">
              We envision a world where technology and creativity converge to create meaningful digital experiences
              that drive growth, engagement, and success for businesses of all sizes.
            </p>
            <div className="flex flex-col space-y-3 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-custom-orange/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-4 h-4 text-custom-orange" />
                </div>
                <p className="text-gray-300 font-jakarta">Leading the industry with innovative solutions</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-custom-orange/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-4 h-4 text-custom-orange" />
                </div>
                <p className="text-gray-300 font-jakarta">Setting new standards in digital experience design</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img 
              src="/lovable-uploads/c668a09e-b5f1-4512-9a80-1abc366f4aba.png" 
              alt="Our Vision" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      )
    },
    {
      title: "Our Process",
      value: "process",
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/30 border border-custom-orange/20 p-6 rounded-xl hover:border-custom-orange/40 transition-all">
              <div className="w-12 h-12 rounded-full bg-custom-orange/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-custom-orange">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Discovery</h3>
              <p className="text-gray-300 font-jakarta">We begin by understanding your business, goals, and vision through in-depth consultations.</p>
            </div>
            
            <div className="bg-black/30 border border-custom-orange/20 p-6 rounded-xl hover:border-custom-orange/40 transition-all">
              <div className="w-12 h-12 rounded-full bg-custom-orange/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-custom-orange">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Planning</h3>
              <p className="text-gray-300 font-jakarta">Our team creates a strategic roadmap and detailed specifications for your project.</p>
            </div>
            
            <div className="bg-black/30 border border-custom-orange/20 p-6 rounded-xl hover:border-custom-orange/40 transition-all">
              <div className="w-12 h-12 rounded-full bg-custom-orange/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-custom-orange">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Design</h3>
              <p className="text-gray-300 font-jakarta">We craft stunning, functional designs that align with your brand and user expectations.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/30 border border-custom-orange/20 p-6 rounded-xl hover:border-custom-orange/40 transition-all">
              <div className="w-12 h-12 rounded-full bg-custom-orange/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-custom-orange">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Development</h3>
              <p className="text-gray-300 font-jakarta">Our developers bring designs to life with clean, efficient, and scalable code.</p>
            </div>
            
            <div className="bg-black/30 border border-custom-orange/20 p-6 rounded-xl hover:border-custom-orange/40 transition-all">
              <div className="w-12 h-12 rounded-full bg-custom-orange/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-custom-orange">5</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Testing</h3>
              <p className="text-gray-300 font-jakarta">Rigorous quality assurance ensures your project works flawlessly across all devices.</p>
            </div>
            
            <div className="bg-black/30 border border-custom-orange/20 p-6 rounded-xl hover:border-custom-orange/40 transition-all">
              <div className="w-12 h-12 rounded-full bg-custom-orange/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-custom-orange">6</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-syne">Launch & Support</h3>
              <p className="text-gray-300 font-jakarta">We deploy your project and provide ongoing support to ensure continued success.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Our Team",
      value: "team",
      content: (
        <div className="space-y-8">
          <p className="text-gray-300 leading-relaxed font-jakarta max-w-3xl">
            Our diverse team of designers, developers, strategists, and project managers brings together a 
            wealth of expertise and creativity to every project we undertake.
          </p>
          
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
          
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center gap-3 bg-black/30 border border-custom-orange/20 rounded-xl px-6 py-3">
              <Users className="w-5 h-5 text-custom-orange" />
              <p className="text-gray-300 font-jakarta">We're always looking for talented individuals to join our team</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Our Culture",
      value: "culture",
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-white mb-4 font-syne">Work Culture at Zenith</h3>
            <p className="text-gray-300 leading-relaxed mb-4 font-jakarta">
              At Zenith Studio, we foster a culture of creativity, collaboration, and continuous learning. 
              We believe that the best work happens when talented people are empowered to explore their ideas in a supportive environment.
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="bg-black/30 border border-custom-orange/20 p-4 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2 font-syne">Innovation Days</h4>
                <p className="text-gray-300 font-jakarta">Regular days dedicated to exploring new technologies and creative concepts.</p>
              </div>
              
              <div className="bg-black/30 border border-custom-orange/20 p-4 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2 font-syne">Knowledge Sharing</h4>
                <p className="text-gray-300 font-jakarta">Weekly workshops and presentations led by team members to share expertise.</p>
              </div>
              
              <div className="bg-black/30 border border-custom-orange/20 p-4 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2 font-syne">Work-Life Balance</h4>
                <p className="text-gray-300 font-jakarta">Flexible scheduling and remote work options to support overall wellbeing.</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
              alt="Our Culture" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Toaster />
      <main className="pb-0">
        {/* Hero Section - Reduced vertical spacing */}
        <section className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-custom-orange font-medium mb-3 font-jakarta"
                >
                  About Us
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 font-syne"
                >
                  Crafting <span className="text-custom-orange">Digital</span> Experiences
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-700 text-lg leading-relaxed mb-6 font-jakarta"
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
                    className="border-custom-orange/20 text-black hover:bg-custom-orange/10 hover:border-custom-orange/40 font-jakarta"
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
                className="relative -ml-6 sm:ml-0"
              >
                <Cube3D />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 stats-section bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item text-center bg-white border border-custom-orange/20 rounded-lg p-4 hover:border-custom-orange/40 transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-custom-orange mb-1 font-syne">
                    {stat.value}
                  </div>
                  <div className="text-gray-700 text-sm font-medium font-jakarta">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <span className="inline-block text-custom-orange font-medium mb-2 font-jakarta">
                Meet The Team
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-syne">
                The <span className="text-custom-orange">Creative Minds</span> Behind Our Success
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base font-jakarta">
                Our team of talented professionals brings diverse expertise and a shared passion for digital excellence to every project we undertake.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
                  <div className="p-3 text-center">
                    <h3 className="text-base md:text-lg font-bold text-white mb-0 font-syne">{member.name}</h3>
                    <p className="text-custom-orange text-xs font-jakarta">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Animated Tabs Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <span className="inline-block text-custom-orange font-medium mb-2 font-jakarta">
                More About Us
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-syne">
                Discover <span className="text-custom-orange">Who We Are</span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base font-jakarta">
                Learn more about what makes Zenith Studio unique, from our vision and process to our team culture.
              </p>
            </div>
            
            <AnimatedTabs tabs={tabContent} />
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 timeline-section bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <span className="inline-block text-custom-orange font-medium mb-2 font-jakarta">
                Our Journey
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-syne">
                Key <span className="text-custom-orange">Milestones</span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base font-jakarta">
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
                  className={`timeline-item relative w-full flex items-center mb-8 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-custom-orange"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"
                  }`}>
                    <div className="bg-black/30 border border-custom-orange/20 p-4 rounded-xl hover:border-custom-orange/40 transition-all">
                      <div className="text-custom-orange font-bold mb-1 text-sm font-syne">{milestone.year}</div>
                      <h3 className="text-lg font-bold text-white mb-2 font-syne">{milestone.title}</h3>
                      <p className="text-gray-300 text-sm font-jakarta">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-syne">
                Ready to Bring Your <span className="text-custom-orange">Vision to Life</span>?
              </h2>
              <p className="text-gray-300 mb-6 text-sm md:text-base font-jakarta">
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
