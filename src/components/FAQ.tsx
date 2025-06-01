
import { useState } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "What is the turnaround time?",
    answer: "We usually deliver the first draft within 1 week. The final website is delivered within 2 weeks."
  },
  {
    question: "How do you communicate?",
    answer: "We use email, Slack, WhatsApp and Signal to communicate. We strongly prefer slack and keep the conversations async so that we can focus on building your website."
  },
  {
    question: "What is the process of working with you?",
    answer: "Our process involves adding you to a communication channel where you describe your requirements (a call is optional). We then dive deep into your project which involves research, ideation and iterations -- all this with working closely with you for instant feedback."
  },
  {
    question: "What happens if I don't like the design?",
    answer: "We provide unlimited revisions until you are happy with the design. We will work with you to make sure you are happy with the design."
  },
  {
    question: "Are there any refunds?",
    answer: "We provide refunds only if we haven't started working on your website. Once we start working on your website, we don't provide any refunds."
  },
  {
    question: "What is your Tech Stack?",
    answer: "We are comfortable with all the major frameworks and technologies there are (since we are engineers). But yes, we have our favourites. We use Next.js and Tailwind CSS to build out your website. Next because it has SEO benefits, Tailwind because it makes us fast."
  },
  {
    question: "Why no calls or meetings?",
    answer: "We are a small team and we want to focus on building your website. We have found that calls and meetings are a huge distraction and we want to avoid them as much as possible. We prefer async communication over calls and meetings. In the past, We've built huge softwares and SaaS applications without ever getting on a call. We are confident that we can build your website without getting on a call."
  },
  {
    question: "What happens if I have to make some changes in the website after it is delivered?",
    answer: "We provide you with a video tutorial on how to make changes to your website. If you still need help, we can make changes for you at an hourly rate OR you can sign up for our retainer services. Contact us on the website chat for more details."
  },
];

const FAQ = () => {
  // Use state to handle which accordion items are open
  const [openItems, setOpenItems] = useState<string[]>(["item-0"]);

  const handleItemToggle = (value: string) => {
    setOpenItems(prev => 
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-cal mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto font-inter">
            Can't find the answer you're looking for? Reach out to us and we will get in touch with you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion 
            type="multiple" 
            value={openItems} 
            onValueChange={setOpenItems} 
            className="space-y-4"
          >
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger 
                  className="px-6 py-4 hover:bg-gray-50 transition-colors text-left font-cal font-medium text-base sm:text-lg"
                  onClick={() => handleItemToggle(`item-${index}`)}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-700 font-inter text-sm sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
