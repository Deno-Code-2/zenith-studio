
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
    question: "What services does Zenith Studio offer?",
    answer: "Zenith Studio offers a complete range of digital services including web design and development, mobile app development, digital marketing and branding, SEO optimization, strategic business consulting, and end-to-end digital transformation solutions tailored to your specific business needs."
  },
  {
    question: "How long does it take to create a website?",
    answer: "The timeline depends on the complexity of the project. For smaller sites, it typically takes 1-3 weeks from start to finish. Larger or more complex sites, especially those requiring custom functionality or intricate animations, may take longer. We'll discuss a more detailed timeline during our initial call. We also play \"Firefighters\" from time to time—while it's not something we actively seek, we're in this for the long run. If you've got a press release coming out and previously hired agency didn't deliver, we're happy to step in, put out the fire, and get your website live on short notice."
  },
  {
    question: "When can you start?",
    answer: "We typically can start within a week of our initial discussions. While we’ve handled tight deadlines before, to ensure a smooth process, it’s best to initiate the conversation with us as early as possible—ideally alongside your design partner or agency. This way, we can adjust our schedule and be ready to kick off your project on time."
  },
  {
    question: "What kind of companies do you usually work with?",
    answer: "We've worked with companies of all sizes—from early-stage startups with just 1-2 people to enterprise teams with 30-40 people on meeting calls. At the end of the day, it's less about the size of your company and more about the project and the quality of the design. And between us—psst—we're always excited to take on a fun one-pager with cool animations and imagery!"
  },
  {
    question: "Will my site be responsive on all devices?",
    answer: "Yes! Every site we build is fully responsive, ensuring it works smoothly on desktops, tablets, and mobile devices. In most cases, we can also help create the mobile layouts directly in Webflow, saving your team hours of work. With our design background, we can handle the responsive adjustments in much less time, allowing you to focus on the next page instead of preparing mobile versions in Figma."
  },
  {
    question: "What does your process look like?",
    answer: "As with everything we do, we keep it simple—no complex meetings or having multiple people from our end involved. You'll be dealing with just one or two of us throughout the project, so communication stays clear and efficient. Once the design is ready (or partially ready), we usually have a kick-off or handover call to review the design, animations, and behavior expectations. We'll also go over any third-party integrations and outline what's needed from your side. From there, we'll create a list of deliverables and start checking off pages one by one. The majority of the time is spent building your site. Once a solid part is done, we'll share a staging link for feedback while we continue working on the rest."
  },
  {
    question: "How much does it cost?",
    answer: "Our projects start at $500, with a standard 8-page website typically costing around $5000-8,000. For ongoing maintenance, we charge $180/hour, and you only pay for the time you actually use—there are no monthly fees unless work is done. So, if you go three months without any updates, you won't have any charges during that time. We believe in keeping pricing transparent and straightforward."
  },
  {
    question: "Will you prepare our site for SEO?",
    answer: "Yes, we make sure your site follows SEO best practices—clean code, proper structure, meta tags, and optimized images. But it's important to note that good SEO takes time, plenty of content, and sometimes even a bit of luck. While we'll ensure everything's up to standard, being #1 on Google with a one-page site might be as likely as winning the lottery—possible, but don't bank on it!"
  },
  {
    question: "Do you handle migrating my old site?",
    answer: "Yes, we handle site migrations as part of our services. Whether you're moving from another platform or just updating an existing site, we'll ensure a smooth transition. We'll work closely with you to migrate your content, design, and functionality, minimizing downtime and preserving your SEO rankings. Just let us know your current setup, and we'll take care of the rest!"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-syne mb-4">
            Frequently Asked <span className="text-custom-orange">Questions</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto font-jakarta">
            Find answers to common questions about our services, process, and expertise.
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
                  className="px-6 py-4 hover:bg-gray-50 transition-colors text-left font-syne font-medium text-base sm:text-lg"
                  onClick={() => handleItemToggle(`item-${index}`)}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-700 font-jakarta text-sm sm:text-base">
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
