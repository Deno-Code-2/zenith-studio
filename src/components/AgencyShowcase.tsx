
import { motion } from "framer-motion";
import { CheckCircle2, Award, Clock, Users } from "lucide-react";
import { Safari } from "./magicui/safari";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AgencyShowcase = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (statsRef.current && contentRef.current) {
      // Stats animation
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      });

      // Benefits animation
      gsap.from(".benefit-item", {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
        },
        x: -30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out"
      });
      
      // Safari window animation
      gsap.from(".safari-window", {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 60%",
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out"
      });
    }
  }, []);

  const stats = [
    { 
      value: "15+", 
      label: "Projects Delivered",
      icon: <Award className="h-5 w-5 text-custom-orange" />
    },
    { 
      value: "2+", 
      label: "Years Experience",
      icon: <Clock className="h-5 w-5 text-custom-orange" />
    },
    { 
      value: "88%", 
      label: "Client Satisfaction",
      icon: <Users className="h-5 w-5 text-custom-orange" />
    },
    { 
      value: "24/7", 
      label: "Customer Support",
      icon: <CheckCircle2 className="h-5 w-5 text-custom-orange" />
    }
  ];

  const benefits = [
    "Client-focused approach with dedicated project managers",
    "Transparent pricing and clear communication throughout",
    "Adherence to deadlines and project timelines",
    "Post-launch support and optimization services",
    "Continuous updates on project progress",
    "Expert team of designers, developers, and strategists"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-6 mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-custom-orange/10 text-custom-orange text-sm font-medium mb-3"
            >
              Why Choose Us
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-syne">
              Experience the <span className="text-custom-orange">Zenith</span> Difference
            </h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 max-w-2xl mx-auto font-jakarta"
            >
              We combine creativity, technical expertise, and strategic thinking to deliver exceptional digital experiences that drive results for your business.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14" ref={statsRef}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item text-center p-5 rounded-xl border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300 bg-white shadow-sm transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-custom-orange/10 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-custom-orange mb-1">{stat.value}</h3>
                <p className="text-gray-600 font-jakarta text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center" ref={contentRef}>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-black mb-5 font-syne">
                Our Commitment to <span className="text-custom-orange">Excellence</span>
              </h3>

              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item flex items-start space-x-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-custom-orange flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600 font-jakarta">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="safari-window overflow-hidden shadow-xl w-full h-full">
              <div className="relative transform transition-transform duration-500 hover:scale-[1.02]">
                <Safari
                  url="zenithstudio.xyz"
                  className="w-full h-full"
                  imageSrc="/images/Zenith Studio.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyShowcase;
