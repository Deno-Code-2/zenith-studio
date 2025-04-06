
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Award, Users, Zap, ArrowRight } from "lucide-react";
import { Safari } from "./magicui/safari";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AgencyShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const safariRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Parallax effect for the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  useEffect(() => {
    if (statsRef.current && contentRef.current && safariRef.current) {
      // Title animation
      gsap.from(".showcase-title .word", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)"
      });
      
      // Stats animation
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      });

      // Safari window animation with more dramatic effect
      gsap.timeline({
        scrollTrigger: {
          trigger: safariRef.current,
          start: "top 70%",
        }
      })
      .from(".safari-container", {
        scale: 0.7, 
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .from(".safari-container", {
        y: 40,
        duration: 0.5,
        ease: "bounce.out"
      }, "-=0.4");
      
      // Text content reveal animation
      gsap.from(".benefit-item", {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
        x: -20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  }, []);

  const stats = [
    { 
      value: "97%", 
      label: "Client Satisfaction",
      icon: <Users className="h-6 w-6 text-white" />
    },
    { 
      value: "48+", 
      label: "Projects Delivered",
      icon: <Zap className="h-6 w-6 text-white" />
    },
    { 
      value: "12+", 
      label: "Industry Awards",
      icon: <Award className="h-6 w-6 text-white" />
    },
    { 
      value: "24/7", 
      label: "Support Available",
      icon: <CheckCircle2 className="h-6 w-6 text-white" />
    }
  ];

  const benefits = [
    "Client-focused approach with dedicated support",
    "Transparent communication throughout projects",
    "Adherence to deadlines and project milestones",
    "Post-launch support and optimization",
    "Expert team of designers and developers"
  ];

  // Split the title into words for gsap animation
  const titleWords = "Our Commitment to Excellence".split(" ");

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-white relative overflow-hidden" ref={containerRef}>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-custom-orange/5 to-transparent opacity-60 z-0"
        style={{ opacity, y }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-custom-orange/10 text-custom-orange text-sm font-medium mb-3"
            >
              Why Choose Zenith Studio
            </motion.span>
            
            <h2 className="showcase-title text-4xl md:text-5xl font-bold text-black mb-6 font-syne">
              {titleWords.map((word, i) => (
                <span key={i} className="word inline-block mx-1">
                  {word}
                </span>
              ))}
            </h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-gray-600 max-w-2xl mx-auto font-jakarta"
            >
              We combine creativity, technical expertise, and strategic thinking to deliver exceptional digital experiences that drive results for your business.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20" ref={statsRef}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item text-center p-5 rounded-xl border border-custom-orange/10 bg-custom-orange/90 text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-1 font-syne">{stat.value}</h3>
                <p className="text-white/90 font-jakarta text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center" ref={contentRef}>
            <div className="space-y-5" ref={textRef}>
              <h3 className="text-2xl font-bold text-black mb-4 font-syne">
                <span className="border-b-2 border-custom-orange pb-1">Our Agency Advantage</span>
              </h3>

              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item flex items-start space-x-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-custom-orange flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-jakarta">{benefit}</p>
                </div>
              ))}

              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="mt-8"
              >
                <Button 
                  asChild
                  className="bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
                >
                  <Link to="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div ref={safariRef} className="safari-container overflow-hidden shadow-2xl rounded-lg border border-gray-200">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Safari
                  url="zenithstudio.xyz"
                  className="w-full h-full"
                  imageSrc="/images/Zenith Studio.png"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Gradient bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-custom-orange/30 to-transparent"></div>
    </section>
  );
};

export default AgencyShowcase;
