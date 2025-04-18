import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  Rocket,
  Layout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DisplayCards from "@/components/ui/display-cards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProcessSection from "@/components/about/ProcessSection";
import ServiceCTA from "@/components/services/ServiceCTA";

const services = [
  {
    title: "Custom Web Development",
    description: "Responsive, fast, and beautiful websites using modern tech stacks.",
    image: "/images/web.png"
  },
  {
    title: "SaaS MVPs",
    description: "We build your SaaS MVP in weeks with scalable architecture and clean UI.",
    image: "/images/services/saas.jpg"
  },
  {
    title: "AI Integration",
    description: "Power your product with AI features using OpenAI, LangChain, and more.",
    image: "/images/services/ai.jpg"
  },
  {
    title: "E-commerce Development",
    description: "Custom storefronts built on Shopify, Medusa, or custom stacks.",
    image: "/images/services/ecommerce.jpg"
  },
  {
    title: "Web App Design (UI/UX)",
    description: "World-class UX/UI design using Figma, Tailwind, and best practices.",
    image: "/images/services/ui-ux.jpg"
  },
  {
    title: "Landing Pages",
    description: "Pixel-perfect, high-converting landing pages for marketing and launches.",
    image: "/images/services/landing.jpg"
  },
  {
    title: "API & Database Architecture",
    description: "Robust backend solutions with PostgreSQL, Prisma, Supabase, and REST/GraphQL.",
    image: "/images/services/api.jpg"
  },
  {
    title: "DevOps & Deployment",
    description: "CI/CD, Docker, Vercel, Railway, or AWS—we handle your infrastructure.",
    image: "/images/services/devops.jpg"
  },
];

export default function FullServicesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <>
      <Header />
      <section className="section-animate relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
          </div>

          <h1 className="animate-fade-in-up mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block"> #1 Startup Agency</span>
            <span className="block text-custom-orange">We Build, You Scale</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-100 mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl">
            An <span className="text-custom-orange">AI-powered</span> startup studio that helps founders launch MVPs in record time — with beautiful design, automation, and long-term support.
          </p>

          <div className="animate-fade-in-up animate-delay-200 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-custom-orange hover:bg-custom-orange/90 text-white rounded-full px-8" asChild>
              <a href="https://cal.com/zenithstudio/30min" target="_blank" rel="noopener noreferrer">
                Book a Free Strategy Call
              </a>
            </Button>
          </div>

          <div className="animate-fade-in-up animate-delay-300 mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-full bg-custom-orange/10 p-3">
                <Zap className="h-6 w-6 text-custom-orange" />
              </div>
              <h3 className="font-medium">Fast Delivery</h3>
              <p className="text-sm text-gray-500">Under 5 Weeks</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-full bg-custom-orange/10 p-3">
                <Sparkles className="h-6 w-6 text-custom-orange" />
              </div>
              <h3 className="font-medium">AI-Powered</h3>
              <p className="text-sm text-gray-500">Efficient & Smart</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-full bg-custom-orange/10 p-3">
                <Rocket className="h-6 w-6 text-custom-orange" />
              </div>
              <h3 className="font-medium">Built for Growth</h3>
              <p className="text-sm text-gray-500">Ready to Scale</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-full bg-custom-orange/10 p-3">
                <Layout className="h-6 w-6 text-custom-orange" />
              </div>
              <h3 className="font-medium">Custom Designs</h3>
              <p className="text-sm text-gray-500">Tailored to You</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} id="services" className="section-animate bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From <span className="text-custom-orange">SaaS</span> to <span className="text-custom-orange">e-commerce</span> to <span className="text-custom-orange">AI</span>, we deliver results. All projects come with <strong className="text-custom-orange">3-4 months free maintenance</strong> for early clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-52 w-full object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <ServiceCTA />
      <Footer />
    </>
  );
}
