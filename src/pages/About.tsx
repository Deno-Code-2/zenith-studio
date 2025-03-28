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
      year: "2024",
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
      title: "How it started",
      value: "started",
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4 font-syne">Our Beginnings</h3>
            <p className="text-black leading-relaxed mb-4 font-jakarta text-sm">
              Zenith Studio was founded by two friends who share a passion for creating digital experiences that look great and work even better. 
            </p>
            <p className="text-black leading-relaxed mb-4 font-jakarta text-sm">
              What started as a friendship soon turned into many late nights and weekends building websites for companies we love.
            </p>
            <p className="text-black leading-relaxed mb-4 font-jakarta text-sm">
              And now, after 100+ projects built together, we've grown into a full-service digital agency.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img 
              src="/lovable-uploads/c668a09e-b5f1-4512-9a80-1abc366f4aba.png" 
              alt="Our Beginnings" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      )
    },
    {
      title: "How it's going",
      value: "going",
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-black leading-relaxed font-jakarta text-sm">
                Today, Zenith Studio is more than just a small team. We are a group of designers and engineers that can take on any digital challenge.
              </p>
              <p className="text-black leading-relaxed mt-4 font-jakarta text-sm">
                We like to keep things simple - you give us your vision and we'll do our best to make it reality. With our technical background we have attention to detail and never deliver something that's not pixel-perfect.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="Our Team Today" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          
          <div className="bg-black/30 border border-custom-orange/20 rounded-xl p-6">
            <p className="text-black font-jakarta text-sm">
              By partnering with leading startups, enterprise tech companies, and design agencies, we've positioned ourselves as the go-to digital partners for businesses that are looking for more than just a one-off project.
            </p>
            <p className="text-black font-jakarta mt-4 text-sm">
              We don't just build websites—we become an extension of your team.
            </p>
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
        {/* Hero Section */}
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
                  className="text-black text-lg leading-relaxed mb-6 font-jakarta"
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
                    className="border-black text-black hover:bg-black hover:border-custom-orange/40 font-jakarta"
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
                  <div className="text-black text-sm font-medium font-jakarta">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <span className="inline-block text-custom-orange font-medium mb-2 font-jakarta">
                Our Story
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 font-syne">
                From <span className="text-custom-orange">Humble Beginnings</span> to Digital Excellence
              </h2>
              <p className="text-black max-w-3xl mx-auto text-sm md:text-base font-jakarta">
                Learn about our journey and what makes us different in the digital landscape.
              </p>
            </div>
            
            <AnimatedTabs tabs={tabContent} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 font-syne">
                Ready to Bring Your <span className="text-custom-orange">Vision to Life</span>?
              </h2>
              <p className="text-black mb-6 text-sm md:text-base font-jakarta">
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