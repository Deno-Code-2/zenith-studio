
import { useState } from "react";
import { Search } from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How long does it take to create a website?",
      answer: "The timeline depends on the complexity of the project. For smaller sites, it typically takes 1-3 weeks from start to finish. Larger or more complex sites, especially those requiring custom functionality or intricate animations, may take longer. We’ll discuss a more detailed timeline during our initial call."
    },
    {
      question: "What kind of companies do you usually work with?",
      answer: "We’ve worked with companies of all sizes—from early-stage startups with just 1-2 people to enterprise teams with 30-40 people on meeting calls. At the end of the day, it’s less about the size of your company and more about the project and the quality of the design."
    },
    {
      question: "Will my site be responsive on all devices?",
      answer: "Yes! Every site we build is fully responsive, ensuring it works smoothly on desktops, tablets, and mobile devices. In most cases, we can also help create the mobile layouts directly in Webflow, saving your team hours of work. With our design background, we can handle the responsive adjustments in much less time, allowing you to focus on the next page instead of preparing mobile versions in Figma."    
    },
    {
      question: "What does your process looks like??",
      answer: "We keep things simple—no unnecessary meetings, no endless back-and-forth. You’ll be working directly with one or two of us throughout the project, ensuring crystal-clear communication and a streamlined process. Once the design is ready (or partially ready), we’ll have a quick kick-off or handover call to align on design, animations, and expected behaviors. From there, we break it down into clear deliverables and start checking off pages one by one. The bulk of the time is spent building. As key sections take shape, we’ll share a staging link for feedback while continuing development. Most of our updates happen via Google Meet to keep things efficient—unless you prefer otherwise."
    },
    {
      question: "Do I need to have the design?",
      answer: "Having the design ready is ideal, as it allows us to dive straight into important discussions and accurately scope the project. Seeing the full design—including interactions and details—makes it much easier to estimate the timeline and cost. The clearer the design, the smoother the process. That said, if you don’t have the design yet, we can still start initial discussions, reserve time in our schedule, and even assist during the design phase. By collaborating early, we can ensure everything is feasible and set you up for a smooth development process once the design is finalized."
    },
    {
      question: "How much does it cost?",
      answer: "Our projects start at 800$ - $1,000, with a standard 8-page website typically costing around $3,500–$5,000. For ongoing maintenance, we charge $100/hour, and you only pay for the time you actually use—no monthly fees unless work is done. So, if you go three months without any updates, there will be no charges during that period. We believe in keeping our pricing transparent, flexible, and straightforward.",
    },
    {
      question: "Will you prepare our site for SEO?",
      answer: "Yes, we make sure your site follows SEO best practices—clean code, proper structure, meta tags, and optimized images. But it’s important to note that good SEO takes time, plenty of content, and sometimes even a bit of luck. While we’ll ensure everything’s up to standard, being #1 on Google with a one-page site might be as likely as winning the lottery—possible, but don’t bank on it!",
    },
    {
      question: "Do you handle migrating my old site?",
      answer: "Yes, we handle site migrations as part of our services. Whether you’re moving from another platform or just updating an existing site, we’ll ensure a smooth transition. We’ll work closely with you to migrate your content, design, and functionality to Webflow, minimizing downtime and preserving your SEO rankings. Just let us know your current setup, and we’ll take care of the rest!",
    },
    {
      question: "When can you start?",
      answer: "We typically can start within a week of our initial discussions. While we’ve handled tight deadlines before, to ensure a smooth process, it’s best to initiate the conversation with us as early as possible—ideally alongside your design partner or agency. This way, we can adjust our schedule and be ready to kick off your project on time.",
    },
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
            Got questions? We've got answers.
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
