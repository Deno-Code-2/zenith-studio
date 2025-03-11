
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
      question: "Can you create a responsive website design that looks great on all devices?",
      answer: "Yes, we specialize in creating fully responsive websites that provide an optimal viewing experience across all devices, from mobile phones to desktop computers."
    },
    {
      question: "What digital marketing strategies do you employ to drive website traffic?",
      answer: "We employ a comprehensive digital marketing approach including SEO, content marketing, social media marketing, and paid advertising to drive targeted traffic to your website."
    },
    {
      question: "Can you handle large-scale mobile app development projects?",
      answer: "Yes, our experienced team has successfully delivered numerous large-scale mobile applications across various industries."
    },
    {
      question: "Can you integrate third-party APIs into our mobile app?",
      answer: "Yes, we have extensive experience integrating various third-party APIs to enhance app functionality and user experience."
    },
    {
      question: "How do you ensure cross-platform compatibility for mobile apps?",
      answer: "We use modern frameworks and follow best practices to ensure our apps work seamlessly across different platforms and devices."
    },
    {
      question: "Do you offer maintenance services for websites and apps developed by other companies?",
      answer: "Yes, we provide comprehensive maintenance services for existing websites and applications, regardless of who developed them."
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
