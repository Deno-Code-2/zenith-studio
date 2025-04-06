
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
      question: "What is Zenith Studio?",
      answer:
        "Zenith Studio is a premium digital agency that specializes in creating high-quality websites, applications, and digital solutions without the need for complex coding. While we leverage modern tools and platforms to accelerate development, our team has deep technical expertise to handle customizations and advanced functionality when needed.",
    },
    {
      question: "How long does it take to create a website?",
      answer:
        "The timeline depends on the complexity of your project. For smaller sites, it typically takes 1-3 weeks from start to finish. Larger or more complex sites may take 4-8 weeks or longer. We also offer expedited services for time-sensitive projects—if you've got a pressing deadline, we're happy to step in and get your website live on short notice.",
    },
    {
      question: "What kind of companies do you usually work with?",
      answer:
        "We've worked with businesses of all sizes—from early-stage startups to established enterprises. Our focus is on the quality of the project rather than the size of the company. We're particularly passionate about projects that allow us to showcase our creativity with engaging animations and compelling visual experiences.",
    },
    {
      question: "Will my site be responsive on all devices?",
      answer:
        "Absolutely! Every site we build is fully responsive, ensuring it works flawlessly on desktops, tablets, and mobile devices. Our team handles all the responsive design considerations, saving you time and ensuring a consistent experience for your users across all platforms.",
    },
    {
      question: "What does your process look like?",
      answer:
        "We keep our process straightforward and efficient. You'll work with a dedicated point of contact throughout the project. We typically begin with a kickoff call to review designs and requirements, then create a detailed plan of deliverables. During development, we provide regular updates and a staging link for feedback. Once all elements are approved, we handle the final technical setup before launching your site.",
    },
    {
      question: "Do I need to have the design ready?",
      answer:
        "Having a design ready is ideal as it allows us to provide accurate timelines and cost estimates. However, we're flexible and can collaborate at any stage. If you don't have designs yet, we can discuss your vision, reserve time in our schedule, and provide guidance during the design phase to ensure everything will work well technically once development begins.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Our projects start at ₹50,000, with most website projects typically ranging between ₹1,00,000-₹5,00,000 depending on complexity and features. For ongoing maintenance and updates, we charge based on the actual time spent on your project—there are no mandatory monthly fees unless work is being done. We believe in transparent pricing with no surprises.",
    },
    {
      question: "Will you prepare my site for SEO?",
      answer:
        "Yes, we implement SEO best practices in all our projects—including clean code, proper structure, meta tags, and optimized images. While this provides a solid foundation for your digital presence, achieving top search rankings typically requires ongoing content creation and SEO efforts beyond the initial website development.",
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
