import { Card } from "./ui/card";
import { Twitter } from "lucide-react";

const testimonials = [
  {
    name: "Mark Roberts",
    role: "Founder of GreenEarth Eco Store",
    content: "Working with Zenith Studio was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    image: "/lovable-uploads/53ba9584-ecb7-4e75-95ee-504dc9872b0f.png"
  },
  {
    name: "Lisa Williams",
    role: "Head of Product at HealthTech Innovations",
    content: "The mobile app Zenith Studio developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.",
  },
  {
    name: "Michael Johnson",
    role: "Marketing Manager at GlobalTech",
    content: "Zenith Studio transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our needs made the entire process smooth and hassle-free.",
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-syne">
            <span className="text-gray-500">Our</span>{" "}
            <span className="text-white">Testimonials</span>
          </h2>
          <p className="text-gray-400 font-jakarta max-w-2xl mx-auto">
            Don't just take our word for it; hear what our satisfied clients have to say about their experience with Zenith Studio. We take pride in building lasting relationships and delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-zinc-900 border-none hover:bg-zinc-800/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                  <Twitter className="text-white w-5 h-5" />
                </div>
              </div>
              <p className="text-gray-300 mb-6 font-jakarta leading-relaxed">{testimonial.content}</p>
              <div className="mt-auto">
                <h4 className="text-white font-bold font-syne">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm font-jakarta">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;