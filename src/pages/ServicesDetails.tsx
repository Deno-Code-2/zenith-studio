
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, Code, Zap, Users, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesDetails = () => {
  const processes = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Discovery Call",
      description: "We start with a detailed discussion about your business goals and requirements."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Strategy Development",
      description: "Our team creates a customized strategy aligned with your objectives."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Implementation",
      description: "We execute the strategy with precision and continuous communication."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results & Optimization",
      description: "Monitor performance and optimize for maximum impact."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white font-syne">
              How We <span className="text-custom-orange">Work</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-jakarta">
              We follow a proven process to deliver exceptional results for our clients. Our approach combines innovation, expertise, and dedication to help your business succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-black border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-custom-orange/10 flex items-center justify-center mb-6">
                  <div className="text-custom-orange">
                    {process.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white font-syne">
                  {process.title}
                </h3>
                <p className="text-gray-400 font-jakarta">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center py-20"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white font-syne">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8 font-jakarta">
              Let's discuss how we can help your business grow.
            </p>
            <Button 
              size="lg"
              className="bg-custom-orange hover:bg-custom-orange/90"
              onClick={() => window.open("https://calendly.com/demo/30min", "_blank")}
            >
              Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesDetails;
