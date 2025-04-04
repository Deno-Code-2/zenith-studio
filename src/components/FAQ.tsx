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

        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredFAQs.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden mb-4 last:mb-0"
              variants={itemVariants}
              whileHover={{ 
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                borderColor: expandedItem === index ? "rgba(228, 101, 52, 0.5)" : "rgba(200,200,200,0.8)"
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 px-6 transition-colors"
                onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                whileTap={{ scale: 0.995 }}
              >
                <span className="text-black font-syne text-lg font-semibold pr-4">{item.question}</span>
                <motion.div 
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-custom-orange/10 flex items-center justify-center"
                  animate={{ 
                    rotate: expandedItem === index ? 45 : 0,
                    backgroundColor: expandedItem === index ? "rgba(228, 101, 52, 0.2)" : "rgba(228, 101, 52, 0.1)" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-custom-orange text-xl font-medium leading-none">+</span>
                </motion.div>
              </motion.button>
              
              <AnimatePresence initial={false}>
                {expandedItem === index && (
                  <motion.div
                    className="overflow-hidden bg-gray-50/50"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={answerVariants}
                  >
                    <motion.div 
                      className="p-6 pt-0 text-gray-600 font-jakarta"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {item.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;