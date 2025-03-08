
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const techStacks = [
  {
    name: "React",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=300&auto=format&fit=crop",
    alt: "React Technology"
  },
  {
    name: "Node.js",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&auto=format&fit=crop",
    alt: "Node.js Technology"
  },
  {
    name: "JavaScript",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=300&auto=format&fit=crop",
    alt: "JavaScript Technology"
  },
  {
    name: "TypeScript",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=300&auto=format&fit=crop",
    alt: "TypeScript Technology"
  },
  {
    name: "Next.js",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=300&auto=format&fit=crop",
    alt: "Next.js Technology"
  },
  {
    name: "GraphQL",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=300&auto=format&fit=crop",
    alt: "GraphQL Technology"
  }
];

const TechStack = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollAnimation = () => {
      if (scrollContainer.current) {
        const scrollWidth = scrollContainer.current.scrollWidth;
        const containerWidth = scrollContainer.current.offsetWidth;
        
        if (scrollContainer.current.scrollLeft >= scrollWidth - containerWidth) {
          // Reset scroll position when reaching the end
          scrollContainer.current.scrollLeft = 0;
        } else {
          // Scroll by 1px
          scrollContainer.current.scrollLeft += 1;
        }
      }
    };
    
    // Set up the animation interval
    const interval = setInterval(scrollAnimation, 20);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="w-full py-16 bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-8 lg:px-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center text-white font-syne">
          Tech Stack We Use
        </h2>
        
        <div className="relative">
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto gap-8 py-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-8 min-w-max">
              {techStacks.map((tech, index) => (
                <div 
                  key={index}
                  className="min-w-[250px] bg-[#111] rounded-xl p-4 border border-gray-800 flex flex-col items-center hover:border-custom-orange transition-all duration-300"
                >
                  <div className="h-48 w-full overflow-hidden rounded-lg mb-4">
                    <img 
                      src={tech.image} 
                      alt={tech.alt} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-jakarta">{tech.name}</h3>
                </div>
              ))}
              
              {/* Duplicate items for seamless looping */}
              {techStacks.map((tech, index) => (
                <div 
                  key={`duplicate-${index}`}
                  className="min-w-[250px] bg-[#111] rounded-xl p-4 border border-gray-800 flex flex-col items-center hover:border-custom-orange transition-all duration-300"
                >
                  <div className="h-48 w-full overflow-hidden rounded-lg mb-4">
                    <img 
                      src={tech.image} 
                      alt={tech.alt} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white font-jakarta">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for seamless scroll effect */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-400 text-lg font-jakarta">
            We leverage cutting-edge technologies to deliver exceptional digital solutions
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
