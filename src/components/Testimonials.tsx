import { Card } from "./ui/card";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Working with Zenith Studio was a game-changer for our business. Their attention to detail and innovative solutions exceeded our expectations.",
  },
  {
    name: "Michael Chen",
    role: "Founder, DigitalCraft",
    content: "The team's expertise in web development and design helped us achieve our vision. Highly recommended for any business looking to establish a strong online presence.",
  },
  {
    name: "Emma Williams",
    role: "Marketing Director, GrowthLabs",
    content: "Exceptional service and outstanding results. Our website traffic has increased significantly since working with Zenith Studio.",
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-syne text-white">
            Testimonials
          </h2>
          <p className="text-xl text-custom-orange font-syne mb-12">
            What our customers are saying
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-black border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300">
              <MessageSquare className="text-custom-orange mb-4" size={24} />
              <p className="text-gray-300 mb-6 font-jakarta">{testimonial.content}</p>
              <div className="mt-4">
                <h4 className="text-white font-bold font-syne">{testimonial.name}</h4>
                <p className="text-custom-orange text-sm font-jakarta">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;