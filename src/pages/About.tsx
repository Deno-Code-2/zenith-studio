
import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Separator } from "@/components/ui/separator";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Zenith Studio | Our Story and Vision</title>
        <meta name="description" content="Learn about Zenith Studio's journey, our mission, vision, core values, and the talented team behind our successful digital solutions." />
        <meta name="keywords" content="about us, digital agency, web design team, creative team, company history, mission, values" />
        <meta property="og:title" content="About Zenith Studio | Our Story and Vision" />
        <meta property="og:description" content="Discover the team, values and mission behind Zenith Studio's innovative digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zenith-s.vercel.app/about" />
        <link rel="canonical" href="https://zenith-s.vercel.app/about" />
      </Helmet>
      
      <Header />
      <Toaster />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left column - Section titles */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-7xl md:text-8xl font-bold font-syne leading-tight mb-12"
              >
                About
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-xl font-medium text-gray-700 mb-2">HOW IT STARTED</h2>
                <Separator className="mb-24" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-xl font-medium text-gray-700 mb-2">HOW IT'S GOING</h2>
                <Separator className="mb-24" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-xl font-medium text-gray-700 mb-2">PERSONAL TOUCH</h2>
                <Separator className="mb-24" />
              </motion.div>
            </div>
            
            {/* Right column - Content */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg mb-4 text-gray-600"
              >
                When we are not pushing pixels, we like playing PlayStation and enjoying good coffee.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <p className="text-lg mb-6 text-gray-700">
                  Zenith Studio was founded by a small team of passionate developers and designers who share a 
                  passion for creating websites that look great and work even better.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Our founder was one of the early adopters of modern web development frameworks, and the team is known 
                  for building highly optimized and performance-focused digital experiences.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  What started as a small freelance operation soon turned into many late nights and 
                  weekends building websites for companies we love.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  And now, after 200+ projects built together, we are proudly running Zenith Studio.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <p className="text-lg mb-6 text-gray-700">
                  Today, Zenith Studio is more than just a small team. We are a group of 
                  designers and engineers that can take on any project far beyond just 
                  code.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  We like to keep things simple, you give us your design and vision and 
                  we will do our best to make it reality. With our design background we 
                  have attention to detail we always take your project 98% seriously as 
                  you and never deliver something that's 4 pixels off.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  By partnering with leading VCs, scaling startups, enterprise tech 
                  companies, and design agencies, we've positioned ourselves as the 
                  go-to digital agency for businesses that are looking for more than just 
                  a one-off project.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  We don't just build websites—we become an extension of your team.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-lg mb-6 text-gray-700">
                  At Zenith Studio, we believe that the best work comes from genuine relationships. 
                  Our clients don't just get a service; they get a dedicated team that truly cares 
                  about their success.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  We take the time to understand not just your business needs, but your vision and values. 
                  This personal approach allows us to create digital solutions that truly represent who you are 
                  and where you want to go.
                </p>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-xl font-medium text-gray-700 mb-6">THE TEAM</h2>
            <Separator className="mb-12" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="Syed Moinuddin" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Syed Moinuddin</h3>
                  <p className="text-gray-600">CEO & Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
