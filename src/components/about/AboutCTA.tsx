
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-custom-orange/10 p-10 md:p-16 rounded-3xl border border-custom-orange/20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-syne">
            Ready to bring your <span className="text-custom-orange">vision to life?</span>
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-jakarta">
            Let's collaborate to create a digital experience that perfectly represents your brand and engages your audience.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
          >
            <Link to="/contact">
              Start Your Project <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
