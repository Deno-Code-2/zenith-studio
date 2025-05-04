
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-syne text-black mb-4">
            Get in <span className="text-green-500">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-jakarta">
            Have a question or want to discuss your project? Reach out to us using any of the methods below.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center hover:border-green-500 transition-all duration-300"
          >
            <div className="bg-green-50 p-4 rounded-full mb-4">
              <Mail className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="font-bold text-lg mb-2 font-syne">Email Us</h3>
            <p className="text-gray-600 mb-3 font-jakarta">For any inquiries or questions</p>
            <a href="mailto:contact@zenith-studio.dev" className="text-green-500 hover:text-green-600 font-medium">
              contact@zenith-studio.dev
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center hover:border-green-500 transition-all duration-300"
          >
            <div className="bg-green-50 p-4 rounded-full mb-4">
              <Phone className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="font-bold text-lg mb-2 font-syne">Call Us</h3>
            <p className="text-gray-600 mb-3 font-jakarta">We're available on weekdays</p>
            <a href="tel:+1234567890" className="text-green-500 hover:text-green-600 font-medium">
              +1 (234) 567-890
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center hover:border-green-500 transition-all duration-300"
          >
            <div className="bg-green-50 p-4 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="font-bold text-lg mb-2 font-syne">Visit Us</h3>
            <p className="text-gray-600 mb-3 font-jakarta">Our office location</p>
            <address className="not-italic text-green-500">
              123 Design Street, Digital Valley
            </address>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
