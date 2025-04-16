import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Declare the dataLayer property on the window object
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const serviceData = {
  "strategic-business-solutions": {
    title: "Strategic Business Solutions",
    description: "We craft innovative digital solutions tailored to your business goals, helping you scale effectively.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    details: "Our strategic business solutions are designed to help you identify opportunities for growth, streamline operations, and maximize your return on investment. We work closely with you to understand your unique challenges and objectives, then develop a customized strategy that aligns with your vision.",
    features: [
      "Business strategy consulting",
      "Digital transformation roadmaps",
      "Process optimization",
      "Technology stack assessment",
      "Data-driven decision frameworks",
      "Growth strategy development"
    ],
    benefits: [
      "Increased operational efficiency",
      "Clear roadmap for digital growth",
      "Improved decision-making processes",
      "Enhanced competitive positioning",
      "Optimized resource allocation"
    ],
    cta: "Ready to transform your business strategy?"
  },
  "precision-marketing-branding": {
    title: "Precision Marketing & Branding",
    description: "Our data-driven marketing strategies ensure your brand reaches the right audience with maximum impact.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    details: "Our precision marketing and branding services help you cut through the noise and connect with your target audience in meaningful ways. We leverage data analytics, market research, and creative expertise to build compelling brand narratives and effective marketing campaigns.",
    features: [
      "Brand identity development",
      "Target audience analysis",
      "Content marketing strategy",
      "Social media campaigns",
      "Search engine marketing",
      "Performance analytics and reporting"
    ],
    benefits: [
      "Enhanced brand recognition",
      "Increased audience engagement",
      "Higher conversion rates",
      "Improved ROI on marketing spend",
      "Data-driven campaign optimization"
    ],
    cta: "Ready to elevate your brand presence?"
  },
  "web-design": {
    title: "Stunning & Functional Web Design",
    description: "Create visually compelling and user-friendly websites that elevate your brand and enhance engagement.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    details: "Our web design services combine aesthetic excellence with functional brilliance. We create websites that not only look beautiful but also deliver exceptional user experiences, driving engagement and conversions. Each design is custom-tailored to reflect your brand identity and meet your business objectives.",
    features: [
      "Responsive design for all devices",
      "User experience (UX) optimization",
      "Custom graphics and animations",
      "SEO-friendly architecture",
      "Performance optimization",
      "Accessibility compliance"
    ],
    benefits: [
      "Increased visitor engagement",
      "Higher conversion rates",
      "Strengthened brand identity",
      "Improved search engine rankings",
      "Reduced bounce rates"
    ],
    cta: "Ready to transform your web presence?"
  },
  "mobile-app-development": {
    title: "Custom Mobile App Development",
    description: "We build high-performance mobile applications with seamless user experiences and cutting-edge features.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    details: "Our mobile app development team creates intuitive, feature-rich applications that engage users and drive business growth. We specialize in developing cross-platform and native apps that deliver exceptional performance, security, and user experience across all devices.",
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions",
      "User-centered design approach",
      "Advanced features and integrations",
      "Performance optimization",
      "Ongoing maintenance and support"
    ],
    benefits: [
      "Enhanced customer engagement",
      "New revenue stream opportunities",
      "Improved brand loyalty",
      "Competitive marketplace advantage",
      "Valuable user data collection"
    ],
    cta: "Ready to launch your mobile app?"
  },
  "seo-optimization": {
    title: "Growth-Driven SEO Optimization",
    description: "Boost your online presence with expert SEO strategies that drive traffic and improve search rankings.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    details: "Our SEO optimization services help you climb the search engine rankings and drive targeted organic traffic to your website. We employ white-hat techniques and data-driven strategies to improve your visibility, increase your authority, and connect you with users actively searching for your products or services.",
    features: [
      "Comprehensive SEO audits",
      "Keyword research and strategy",
      "On-page optimization",
      "Technical SEO improvements",
      "Content optimization",
      "Link building and authority development"
    ],
    benefits: [
      "Improved search engine rankings",
      "Increased organic website traffic",
      "Better quality leads",
      "Enhanced online visibility",
      "Long-term sustainable results"
    ],
    cta: "Ready to rank higher and drive more traffic?"
  },
  "digital-transformation": {
    title: "End-to-End Digital Transformation",
    description: "Empowering businesses with digital transformation strategies that future-proof their online presence.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    details: "Our end-to-end digital transformation services help businesses evolve and thrive in the digital age. We guide you through the entire process of adopting new technologies, reimagining business processes, and cultivating a digital-first culture to stay competitive in a rapidly changing landscape.",
    features: [
      "Digital maturity assessment",
      "Technology infrastructure modernization",
      "Business process reengineering",
      "Cloud migration and adoption",
      "Data analytics implementation",
      "Digital workforce enablement"
    ],
    benefits: [
      "Increased business agility",
      "Enhanced customer experiences",
      "Improved operational efficiency",
      "New business model opportunities",
      "Data-driven decision making"
    ],
    cta: "Ready to transform your business digitally?"
  }
};

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceData[id as keyof typeof serviceData] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-4771BVNJVP');
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Service not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{service.title} | Zenith Studio</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.title} | Zenith Studio`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.zenith-studio.dev/services/${id}`} />
        <link rel="canonical" href={`https://www.zenith-studio.dev/services/${id}`} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4771BVNJVP"></script>
      </Helmet>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10"></div>
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover" 
          />
          <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-syne">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl font-jakarta">
                {service.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <h2 className="text-3xl font-bold mb-6 font-syne text-black">About This Service</h2>
                <p className="text-gray-700 mb-8 leading-relaxed font-jakarta">
                  {service.details}
                </p>
                
                <h3 className="text-2xl font-bold mb-4 font-syne text-black">Key Features</h3>
                <ul className="space-y-3 mb-12">
                  {service.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="text-custom-orange h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-jakarta">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <h3 className="text-2xl font-bold mb-4 font-syne text-black">Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="text-custom-orange h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-jakarta">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-2"
              >
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 sticky top-24">
                  <h3 className="text-2xl font-bold mb-6 font-syne text-black">Get Started</h3>
                  <p className="text-gray-700 mb-6 font-jakarta">
                    {service.cta}
                  </p>
                  <Button 
                    className="w-full bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
                    size="lg"
                    asChild
                  >
                    <a href="/contact">
                      Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-bold mb-4 font-syne text-black">Want to learn more?</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="/services" className="text-custom-orange hover:underline font-jakarta flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          View all services
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-custom-orange hover:underline font-jakarta flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Schedule a consultation
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
