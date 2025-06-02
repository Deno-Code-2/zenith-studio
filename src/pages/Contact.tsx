
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import GoogleMap from "@/components/GoogleMap";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us | Zenith Studio - Get In Touch</title>
        <meta name="description" content="Ready to start your project? Contact Zenith Studio today for a free consultation. We're here to help transform your digital vision into reality." />
        <link rel="canonical" href="https://www.zenith-studio.dev/contact" />
      </Helmet>
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-[#199e76]/10 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-cal">
                Let's Bring Your Vision to <span className="text-[#199e76]">Life</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 font-inter">
                Ready to transform your digital presence? We're here to help you build something extraordinary. 
                Tell us about your project and let's create magic together.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 font-inter">
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">✓ Free Consultation</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">✓ 24hr Response Time</span>
                <span className="bg-white px-4 py-2 rounded-full shadow-sm">✓ Custom Solutions</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-3xl font-bold text-black mb-2 font-cal">
                    Start Your Project
                  </h2>
                  <p className="text-gray-600 mb-8 font-inter">
                    Fill out the form below and we'll get back to you within 24 hours with a custom proposal.
                  </p>
                  <ContactForm />
                </div>
              </motion.div>

              {/* Contact Details */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-1"
              >
                <div className="bg-gradient-to-br from-[#199e76] to-[#147a5e] rounded-2xl shadow-lg p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6 font-cal">
                    Get In Touch
                  </h2>
                  <ContactDetails />
                </div>
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="text-center p-6">
                <div className="bg-[#199e76]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2 font-cal">Fast Response</h3>
                <p className="text-gray-600 font-inter">We respond to all inquiries within 24 hours, usually much faster.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-[#199e76]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2 font-cal">Free Consultation</h3>
                <p className="text-gray-600 font-inter">Get expert advice and project estimates at no cost to you.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-[#199e76]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2 font-cal">Custom Solutions</h3>
                <p className="text-gray-600 font-inter">Every project is unique. We tailor our approach to your specific needs.</p>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-bold text-black mb-6 text-center font-cal">
                Our Location
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <GoogleMap />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
