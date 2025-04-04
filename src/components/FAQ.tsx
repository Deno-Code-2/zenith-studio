import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItem, setExpandedItem] = useState<number | null>(0); // Default first item open

  const faqItems = [
    {
      question: "When can you start?",
      answer: "We typically can start within a week of our initial discussions. While we've handled tight deadlines before, to ensure a smooth process, it's best to initiate the conversation with us as early as possible."
    },
    {
      question: "Do you handle migrating my old site?",
      answer: "Yes, we handle site migrations as part of our services. Whether you're moving from another platform or just updating an existing site, we'll ensure a smooth transition while preserving your SEO rankings."
    },
    {
      question: "How long does it take to complete a web development project?",
      answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    },
    {
      question: "How long does it take to create a website?",
      answer: "The timeline depends on the complexity of the project. For smaller sites, it typically takes 1-3 weeks from start to finish. Larger or more complex sites, especially those requiring custom functionality or intricate animations, may take longer. We'll discuss a more detailed timeline during our initial call."
    },
    // Add more FAQ items as needed
  ];  

  const filteredFAQs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      height: "auto",
      scale: 1,
      transition: {
        height: {
          duration: 0.4,
          ease: [0.04, 0.62, 0.23, 0.98]
        },
        opacity: {
          duration: 0.25,
          delay: 0.1
        },
        scale: {
          duration: 0.3,
          delay: 0.05
        }
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      scale: 0.95,
      transition: {
        height: {
          duration: 0.3,
          ease: [0.04, 0.62, 0.23, 0.98]
        },
        opacity: {
          duration: 0.2
        },
        scale: {
          duration: 0.2
        }
      }
    }
  };

  useEffect(() => {
    // Reset expanded item when search query changes but keep first item open if no search
    if (searchQuery === "") {
      setExpandedItem(0);
    } else {
      setExpandedItem(null);
    }
  }, [searchQuery]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 font-syne">
            <span className="text-black">Frequently</span>{" "}
            <span className="text-custom-orange">Asked</span>{" "}
            <span className="text-black">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-jakarta">
            Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.
          </p>
          <motion.div 
            className="relative max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4 rounded-lg bg-gray-100 text-black border border-gray-200 focus:outline-none focus:border-custom-orange font-jakarta"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
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
                      <motion.div
                        variants={{
                          open: { rotate: 45 },
                          closed: { rotate: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                        className="h-6 w-6 flex items-center justify-center"
                      >
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
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </motion.div>
                    </div>
                  </AccordionTrigger>
                  <AnimatePresence>
                    <AccordionContent className="px-6 pb-6">
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-neutral-400 font-jakarta"
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  </AnimatePresence>
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