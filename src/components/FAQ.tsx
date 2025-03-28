
import { useState } from "react";
import { Search } from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How long does it take to complete a web development project?",
      answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    },
    {
      question: "How long does it take to create a website?",
      answer: "The timeline depends on the complexity of the project. For smaller sites, it typically takes 1-3 weeks from start to finish. Larger or more complex sites, especially those requiring custom functionality or intricate animations, may take longer. We’ll discuss a more detailed timeline during our initial call."
    },
    {
      question: "Can you create a responsive website design that looks great on all devices?",
      answer: "Yes, we specialize in creating fully responsive websites that provide an optimal viewing experience across all devices, from mobile phones to desktop computers."
    },
    {
      question: "What kind of companies do you usually work with?",
      answer: "We’ve worked with companies of all sizes—from early-stage startups with just 1-2 people to enterprise teams with 30-40 people on meeting calls. At the end of the day, it’s less about the size of your company and more about the project and the quality of the design."
    },
    {
      question: "What digital marketing strategies do you employ to drive website traffic?",
      answer: "We employ a comprehensive digital marketing approach including SEO, content marketing, social media marketing, and paid advertising to drive targeted traffic to your website."
    },
    {
      question: "Will my site be responsive on all devices?",
      answer: "Yes! Every site we build is fully responsive, ensuring it works smoothly on desktops, tablets, and mobile devices. In most cases, we can also help create the mobile layouts directly in Webflow, saving your team hours of work. With our design background, we can handle the responsive adjustments in much less time, allowing you to focus on the next page instead of preparing mobile versions in Figma."
    },
    {
      question: "Can you handle large-scale mobile app development projects?",
      answer: "Yes, our experienced team has successfully delivered numerous large-scale mobile applications across various industries."
    },
    {
      question: "What does your process look like?",
      answer: "We keep things simple—no unnecessary meetings, no endless back-and-forth. You’ll be working directly with one or two of us throughout the project, ensuring crystal-clear communication and a streamlined process. Once the design is ready (or partially ready), we’ll have a quick kick-off or handover call to align on design, animations, and expected behaviors. From there, we break it down into clear deliverables and start checking off pages one by one."
    },
    {
      question: "Can you integrate third-party APIs into our mobile app?",
      answer: "Yes, we have extensive experience integrating various third-party APIs to enhance app functionality and user experience."
    },
    {
      question: "Do I need to have the design?",
      answer: "Having the design ready is ideal, as it allows us to dive straight into important discussions and accurately scope the project. The clearer the design, the smoother the process. That said, if you don’t have the design yet, we can still start initial discussions, reserve time in our schedule, and even assist during the design phase."
    },
    {
      question: "How do you ensure cross-platform compatibility for mobile apps?",
      answer: "We use modern frameworks and follow best practices to ensure our apps work seamlessly across different platforms and devices."
    },
    {
      question: "How much does it cost?",
      answer: "Our projects start at $800 - $1,000, with a standard 8-page website typically costing around $3,500–$5,000. For ongoing maintenance, we charge $100/hour, and you only pay for the time you actually use—no monthly fees unless work is done."
    },
    {
      question: "Do you offer maintenance services for websites and apps developed by other companies?",
      answer: "Yes, we provide comprehensive maintenance services for existing websites and applications, regardless of who developed them."
    },
    {
      question: "Will you prepare our site for SEO?",
      answer: "Yes, we make sure your site follows SEO best practices—clean code, proper structure, meta tags, and optimized images. But good SEO takes time, plenty of content, and sometimes even a bit of luck."
    },
    {
      question: "Do you handle migrating my old site?",
      answer: "Yes, we handle site migrations as part of our services. Whether you’re moving from another platform or just updating an existing site, we’ll ensure a smooth transition while preserving your SEO rankings."
    },
    {
      question: "When can you start?",
      answer: "We typically can start within a week of our initial discussions. While we’ve handled tight deadlines before, to ensure a smooth process, it’s best to initiate the conversation with us as early as possible."
    }
  ];  
  const filteredFAQs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 font-syne">
            <span className="text-black">Frequently</span>{" "}
            <span className="text-custom-orange">Asked</span> <span className="text-black">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-jakarta">
            Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 px-12 rounded-lg bg-gray-100 text-black border border-gray-200 focus:outline-none focus:border-custom-orange font-jakarta"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setExpandedItem(expandedItem === index ? null : index)}
              >
                <span className="text-black font-syne text-lg">{item.question}</span>
                <span className="text-2xl text-custom-orange ml-4">
                  {expandedItem === index ? "−" : "+"}
                </span>
              </button>
              {expandedItem === index && (
                <div className="pb-6 text-gray-600 font-jakarta">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
