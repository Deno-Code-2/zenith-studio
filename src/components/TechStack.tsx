
import { motion } from "framer-motion";
import Marquee from "./Marquee";

const techStack = [
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "GitHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "MySQL",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
  },
  {
    name: "Redis",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg",
  },
  {
    name: "GraphQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  },
  {
    name: "Webpack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg",
  },
  { 
    name: "Vite", 
    logo: "https://vitejs.dev/logo.svg" 
  },
  {
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Sass",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
  },
  {
    name: "Nginx",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg",
  },
  {
    name: "Flutter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
  },
  {
    name: "Django",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
  },
];

const TechStack = () => {
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
        
        <div className="relative mt-6">
          <Marquee className="max-w-full" speed={40}>
            {techStack.map((tech, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-center h-16 w-28 mx-4"
              >
                <img
                  src={tech.logo}
                  className="h-10 w-auto grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  alt={tech.name}
                />
              </div>
            ))}
          </Marquee>
          
          {/* Gradient overlays for seamless scroll effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-black to-transparent z-10"></div>
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
