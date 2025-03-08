
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const techStacks = [
  {
    image: "/lovable-uploads/9a6bb897-1c81-4012-a1ce-acacb4c2d71a.png",
    alt: "Google Technology"
  },
  {
    image: "/lovable-uploads/9a6bb897-1c81-4012-a1ce-acacb4c2d71a.png",
    alt: "Microsoft Technology"
  },
  {
    image: "/lovable-uploads/9a6bb897-1c81-4012-a1ce-acacb4c2d71a.png",
    alt: "Oracle Technology"
  },
  {
    image: "/lovable-uploads/9a6bb897-1c81-4012-a1ce-acacb4c2d71a.png",
    alt: "Adobe Technology"
  },
  {
    image: "/lovable-uploads/9a6bb897-1c81-4012-a1ce-acacb4c2d71a.png",
    alt: "SAP Technology"
  },
  {
    image: "/lovable-uploads/9a6bb897-1c81-4012-a1ce-acacb4c2d71a.png",
    alt: "Meta Technology"
  },
  {
    image: "/lovable-uploads/9a6bb897-1c81-4012-a1ce-acacb4c2d71a.png",
    alt: "Apple Technology"
  },
  {
    image: "/lovable-uploads/9a6bb897-1c81-4012-a1ce-acacb4c2d71a.png",
    alt: "Amazon Technology"
  },
  {
    image: "/lovable-uploads/9a6bb897-1c81-4012-a1ce-acacb4c2d71a.png",
    alt: "Netflix Technology"
  },
  {
    image: "/lovable-uploads/375c4a3f-3d4f-4ffc-9d9b-bba965ac13de.png",
    alt: "Prisma Technology"
  },
  {
    image: "/lovable-uploads/08b48e64-0210-4f80-b81b-942a339622a9.png",
    alt: "Formik Technology"
  },
  {
    image: "/lovable-uploads/990fd2eb-d75f-4db6-a0cb-4fd5af08e5f3.png",
    alt: "React Technology"
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
                  className="min-w-[180px] bg-[#111] rounded-xl p-4 border border-gray-800 flex flex-col items-center hover:border-custom-orange transition-all duration-300"
                >
                  <div className="h-32 w-full overflow-hidden rounded-lg flex items-center justify-center bg-black">
                    <img 
                      src={tech.image} 
                      alt={tech.alt} 
                      className="w-24 h-24 object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
              
              {/* Duplicate items for seamless looping */}
              {techStacks.map((tech, index) => (
                <div 
                  key={`duplicate-${index}`}
                  className="min-w-[180px] bg-[#111] rounded-xl p-4 border border-gray-800 flex flex-col items-center hover:border-custom-orange transition-all duration-300"
                >
                  <div className="h-32 w-full overflow-hidden rounded-lg flex items-center justify-center bg-black">
                    <img 
                      src={tech.image} 
                      alt={tech.alt} 
                      className="w-24 h-24 object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
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
