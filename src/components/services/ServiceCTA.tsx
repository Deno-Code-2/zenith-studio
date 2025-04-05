
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center bg-custom-orange/10 p-10 rounded-2xl border border-custom-orange/20 shadow-lg"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-black mb-6 font-syne"
          >
            Need a <span className="text-custom-orange">Custom Solution?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 mb-8 font-jakarta max-w-2xl mx-auto"
          >
            Don't see exactly what you're looking for? Our team specializes in creating tailored solutions to match your specific business requirements and objectives.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
              size="lg"
            >
              <Link to="/contact">
                Schedule a Consultation <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-custom-orange text-custom-orange hover:bg-custom-orange/10 font-jakarta"
              size="lg"
            >
              <Link to="/pricing">
                View Pricing Plans
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
