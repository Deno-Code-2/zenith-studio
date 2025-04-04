
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Zenith Studio offer?",
    answer:
      "Zenith Studio specializes in creating high-performance websites, custom web applications, and digital solutions including landing pages, SaaS platforms, e-commerce websites, and AI-driven web applications. We provide comprehensive services from design to development and maintenance."
  },
  {
    question: "How long does it typically take to complete a website?",
    answer:
      "Project timelines vary based on complexity and scope. A basic landing page might take 2-3 weeks, while more complex platforms like e-commerce sites or custom web applications typically require 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on the specific requirements, complexity, and scope. We offer packages starting from ₹20,000 for basic landing pages, while complex custom solutions may range from ₹40,000 to ₹80,000. We provide detailed quotes after understanding your specific needs."
  },
  {
    question: "Do you offer ongoing maintenance after the website is launched?",
    answer:
      "Yes, we offer various maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. These include regular updates, performance monitoring, security checks, and technical support. We can customize a maintenance plan based on your specific needs."
  },
  {
    question: "How do we get started working together?",
    answer:
      "The process begins with a consultation where we discuss your business goals, project requirements, and vision. After gathering the necessary information, we'll provide a proposal including scope, timeline, and pricing. Once approved, we'll begin with design concepts before moving to development, testing, and launch."
  },
  {
    question: "Can you help with content creation and SEO?",
    answer:
      "Absolutely! We offer content creation services including copywriting, image selection, and graphic design. Our SEO services include keyword research, on-page optimization, technical SEO, and analytics setup to help your website rank better in search results and attract more targeted traffic."
  },
];

const FAQ = () => {
  const [defaultValue, setDefaultValue] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    // Set the first item to be open by default
    setDefaultValue("item-0");
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-syne">
            Frequently Asked <span className="text-custom-orange">Questions</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto font-jakarta">
            Find answers to the most common questions about our services, process, and expertise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {defaultValue && (
            <Accordion type="single" collapsible defaultValue={defaultValue} className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={`item-${index}`} 
                  value={`item-${index}`}
                  className="border border-neutral-800 rounded-lg overflow-hidden bg-black"
                >
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-custom-orange hover:no-underline font-jakarta flex items-center justify-between">
                    <span className="text-left font-medium">{faq.question}</span>
                    <div className="flex-shrink-0 ml-4 text-custom-orange">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-data-[state=open]:rotate-45"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="text-neutral-400 font-jakarta">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
