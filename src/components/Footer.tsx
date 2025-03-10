
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Matter from "matter-js";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const currentYear = new Date().getFullYear();
  const ballpitRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine>();
  const boxRef = useRef<HTMLDivElement>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase.functions.invoke("subscribe-newsletter", {
        body: { email },
      });
      
      if (error) throw error;
      
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      toast({
        title: "Subscription failed",
        description: "There was an error processing your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!ballpitRef.current) return;

    // Module aliases
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Body = Matter.Body;
    const Runner = Matter.Runner;

    // Create engine
    const engine = Engine.create({
      gravity: { x: 0, y: 1 }
    });
    engineRef.current = engine;

    // Create renderer
    const containerWidth = ballpitRef.current.clientWidth;
    const containerHeight = ballpitRef.current.clientHeight;
    
    const render = Render.create({
      element: ballpitRef.current,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        wireframes: false,
        background: 'transparent',
      },
    });

    // Add walls
    const wallOptions = {
      isStatic: true,
      render: {
        visible: false
      }
    };

    const walls = [
      // Bottom wall
      Bodies.rectangle(containerWidth / 2, containerHeight + 25, containerWidth, 50, wallOptions),
      // Left wall
      Bodies.rectangle(-25, containerHeight / 2, 50, containerHeight, wallOptions),
      // Right wall
      Bodies.rectangle(containerWidth + 25, containerHeight / 2, 50, containerHeight, wallOptions),
    ];

    // Create balls
    const balls = [];
    const colors = ['#E46534', '#e48734', '#e4a434', '#FFFFFF'];
    
    for (let i = 0; i < 40; i++) {
      const radius = Math.random() * 10 + 5;
      balls.push(
        Bodies.circle(
          Math.random() * containerWidth,
          Math.random() * containerHeight * 0.5,
          radius,
          {
            restitution: 0.8,
            friction: 0.005,
            render: {
              fillStyle: colors[Math.floor(Math.random() * colors.length)]
            }
          }
        )
      );
    }

    // Add all bodies to the world
    World.add(engine.world, [...walls, ...balls]);

    // Run the renderer
    Render.run(render);

    // Create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Handle resize
    const handleResize = () => {
      if (!ballpitRef.current) return;
      
      const newWidth = ballpitRef.current.clientWidth;
      const newHeight = ballpitRef.current.clientHeight;
      
      // Update renderer
      render.options.width = newWidth;
      render.options.height = newHeight;
      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
      
      // Update walls
      Body.setPosition(walls[0], { x: newWidth / 2, y: newHeight + 25 });
      Body.setPosition(walls[2], { x: newWidth + 25, y: newHeight / 2 });
      
      // Run a tick to update
      Render.world(render);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Clean up Matter.js
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    pages: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Projects", href: "/projects" },
      { name: "Blog", href: "/blog" },
      { name: "Pricing", href: "/pricing" },
    ],
    contact: [
      { name: "Contact Us", href: "/contact" },
      { name: "support@zenithstudio.com", href: "mailto:support@zenithstudio.com" },
      { name: "+91 9108041057", href: "tel:+919108041057" },
      { name: "HSR Layout, Bangalore, India 560102", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
  };

  const socialIcons = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-black py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-4">
          {/* Logo and info */}
          <div className="md:col-span-3">
            <Link to="/" className="inline-block mb-6" onClick={scrollToTop}>
              <h1 className="text-2xl font-bold font-syne">
                <span className="text-custom-orange">Zen</span>ith Studio
              </h1>
            </Link>
            <p className="text-gray-400 mb-8 font-jakarta">
              Transforming vision into digital reality with innovation, expertise, and meticulous craftsmanship.
            </p>
          </div>

          {/* Pages */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-4 font-syne">Pages</h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors font-jakarta"
                    onClick={scrollToTop}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-4 font-syne">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors font-jakarta"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-4 font-syne">Follow Us</h3>
            <div className="flex items-center space-x-4 mb-6">
              {socialIcons.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black border border-neutral-800 rounded-full flex items-center justify-center text-gray-400 hover:text-custom-orange hover:border-custom-orange transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 font-syne">Subscribe to our newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/30 border border-neutral-800 rounded-md px-4 py-2 text-white w-full font-jakarta"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-jakarta">
            &copy; {currentYear} Zenith Studio. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Large Text at the Bottom with Ballpit */}
      <div className="mt-16 mb-8 relative">
        <div ref={boxRef} className="relative z-10">
          <h2 className="text-[8vw] font-bold text-center opacity-20 font-syne tracking-tight">
            Building The Future.
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
