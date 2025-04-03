import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
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
  }, []);

  const featuredProjects = [
    {
      name: "NexaPay",
      description: "Fintech dashboard for a next-gen payment solution",
      url: "https://demo.nexapay.com",
      image: "/project-nexapay.jpg"
    },
    {
      name: "EcoVista",
      description: "Sustainable e-commerce platform with carbon tracking",
      url: "https://demo.ecovista.org",
      image: "/project-ecovista.jpg"
    },
    {
      name: "MediTrack Pro",
      description: "Healthcare management system for clinics",
      url: "https://demo.meditrackpro.io",
      image: "/project-meditrack.jpg"
    }
  ];

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
                  About <span className="text-custom-orange">PixelCraft</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-black text-lg leading-relaxed max-w-3xl mx-auto font-jakarta"
                >
                  When we're not pushing pixels, we like cutting boxes in VR. We're a digital agency specializing in Webflow development, UX design, and brand strategy.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <hr className="border-t border-gray-200 my-8" />
        </div>

        {/* How It Started Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 font-syne">
                  <span className="text-custom-orange">OUR STORY</span>
                </h2>
                <p className="text-black leading-relaxed mb-4 font-jakarta text-sm">
                  Founded in 2018, PixelCraft began as a two-person studio passionate about creating exceptional digital experiences. Today, we've grown into a full-service digital agency with clients across 12 countries.
                </p>
                <p className="text-black leading-relaxed font-jakarta text-sm">
                  Our journey started with simple websites but quickly evolved into complex web applications and digital transformation projects for Fortune 500 companies and innovative startups alike.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg h-64 md:h-80 w-full flex items-center justify-center">
                <p className="text-gray-400">Our first office (2018)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-12 text-center font-syne">
              <span className="text-custom-orange">FEATURED WORK</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">{project.name} Preview</p>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 font-syne">{project.name}</h3>
                    <p className="text-gray-600 mb-4 font-jakarta text-sm">{project.description}</p>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-custom-orange font-medium text-sm font-jakarta hover:underline"
                    >
                      View Live Demo →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 font-syne">
                  <span className="text-custom-orange">OUR APPROACH</span>
                </h2>
                <p className="text-black leading-relaxed mb-4 font-jakarta text-sm">
                  We combine strategic thinking with flawless execution. Our process begins with deep discovery sessions to understand your business objectives, followed by iterative design and development phases.
                </p>
                <p className="text-black leading-relaxed mb-4 font-jakarta text-sm">
                  Unlike traditional agencies, we operate as an extension of your team. We're with you from initial concept through post-launch optimization.
                </p>
                <p className="text-black leading-relaxed font-jakarta text-sm">
                  Our clients love working with us because we deliver pixel-perfect results on time and within budget, every time.
                </p>
              </div>
              <div className="order-2 bg-gray-100 rounded-lg h-64 md:h-80 w-full flex items-center justify-center">
                <p className="text-gray-400">Our process diagram</p>
              </div>
            </div>
          </div>
        </section>

       {/* Team Section */}
<section className="py-12 bg-gray-50 team-section">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-black font-syne">
        MEET THE TEAM
      </h2>
      <p className="text-black max-w-2xl mx-auto mt-4 font-jakarta text-sm">
        Our multidisciplinary team brings together diverse expertise in design, development, and digital strategy.
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
          role: "Webflow Developer",
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
              Ready to build something amazing?
            </h2>
            <p className="text-black mb-6 font-jakarta text-sm">
              Whether you need a simple website or a complex web application, we've got you covered.
            </p>
            <Button
              asChild
              className="bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
            >
              <Link to="/contact">
                Get Started <ChevronRight className="h-4 w-4" />
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