import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-syne text-white">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-white font-syne">
                What services do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 font-jakarta">
                We offer a comprehensive range of digital services including web development, UI/UX design, digital marketing, and brand strategy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-white font-syne">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 font-jakarta">
                Project timelines vary depending on scope and complexity. A typical website project can take 4-8 weeks from start to finish.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-white font-syne">
                Do you offer maintenance services?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 font-jakarta">
                Yes, we offer ongoing maintenance and support services to ensure your digital assets remain up-to-date and secure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-white font-syne">
                What is your pricing structure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 font-jakarta">
                We offer customized pricing based on project requirements. Contact us for a detailed quote tailored to your needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;