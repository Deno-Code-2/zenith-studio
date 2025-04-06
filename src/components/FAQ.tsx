
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      question: "What services does Zenith Studio offer?",
      answer:
        "Zenith Studio offers a comprehensive suite of digital services including web design, web development, mobile app development, UI/UX design, branding, digital marketing, SEO optimization, and e-commerce solutions. We work with businesses of all sizes to create custom digital experiences that drive growth.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on the scope and complexity. A simple landing page might take 1-2 weeks, while a complex web application or e-commerce platform could take 2-3 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements.",
    },
    {
      question: "What is your design process?",
      answer:
        "Our design process begins with understanding your business goals and target audience. We then create wireframes and mockups for your approval. After refinements, we proceed with development, testing, and deployment. We maintain clear communication throughout to ensure your vision is realized.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, we offer various maintenance and support packages to keep your digital assets performing optimally. These include regular updates, security patches, content updates, and technical support. We can tailor a support package that fits your specific needs and budget.",
    },
    {
      question: "How do you price your services?",
      answer:
        "We offer transparent pricing based on the scope of work, complexity, and required timeline. We provide detailed proposals that break down costs for each aspect of your project. We also offer flexible payment options including milestone-based payments for larger projects.",
    },
    {
      question: "Can you help improve my existing website?",
      answer:
        "Absolutely! We offer website audits and redesign services to improve the performance, aesthetics, and functionality of your existing site. We can enhance user experience, optimize for mobile devices, improve loading speeds, and implement SEO best practices to boost your online presence.",
    },
  ];

  useEffect(() => {
    if (faqRef.current) {
      gsap.from(".faq-header", {
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".accordion-item", {
        scrollTrigger: {
          trigger: accordionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50" ref={faqRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 faq-header">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-custom-orange font-medium font-jakarta mb-2 block"
            >
              Frequently Asked Questions
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-syne">
              Have a <span className="text-custom-orange">Question?</span>
            </h2>
            <p className="text-gray-700 font-jakarta">
              Find answers to commonly asked questions about our services and process.
              If you don't see your question here, feel free to contact us.
            </p>
          </div>

          <div ref={accordionRef} className="space-y-4">
            <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`faq-${index}`}
                  className="accordion-item bg-white border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline focus:no-underline group">
                    <span className="text-left font-medium text-black font-syne group-hover:text-custom-orange transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AnimatePresence>
                    <AccordionContent className="px-6 pb-4">
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-700 font-jakarta">{faq.answer}</p>
                      </motion.div>
                    </AccordionContent>
                  </AnimatePresence>
                </AccordionItem>
              ))}
            </Accordion>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center pt-8"
            >
              <p className="text-gray-700 mb-4 font-jakarta">
                Still have questions? We're here to help!
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="/contact"
                className="inline-block bg-custom-orange text-white px-6 py-3 rounded-md font-medium font-jakarta"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
