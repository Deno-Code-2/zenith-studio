
import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, AtSign, MessageSquare, Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const currentYear = new Date().getFullYear();

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const isHomePage = window.location.pathname === '/';
    
    if (isHomePage) {
      // If we're on homepage, scroll directly
      const section = document.getElementById(sectionId);
      if (section) {
        const headerOffset = 100;
        const sectionPosition = section.getBoundingClientRect().top;
        const offsetPosition = sectionPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="relative overflow-hidden rounded-t-3xl border-t bg-muted/30 md:rounded-t-[4rem]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl dark:bg-primary/10"></div>
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl dark:bg-blue-500/10"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-4">
            <Link to="/" className="inline-block" onClick={scrollToTop}>
              <h1 className="text-2xl font-bold font-syne">
                <span className="text-green-500">Zen</span>ith Studio
              </h1>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm font-jakarta">
              Your dream, our code — launched in days.®
            </p>
            <p className="text-muted-foreground mt-4 text-sm font-jakarta">
              AI-powered studio helping founders launch MVPs and scale their startups in under 5 weeks.
            </p>
            
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <a 
                href="mailto:support@zenith-studio.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <AtSign className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/919108041057"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-4 font-syne">Pages</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  className="text-muted-foreground hover:text-green-500 text-sm transition-colors font-jakarta text-left"
                  onClick={() => scrollToSection("features")}
                >
                  Features
                </button>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="text-muted-foreground hover:text-green-500 text-sm transition-colors font-jakarta"
                >
                  About
                </Link>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-green-500 text-sm transition-colors font-jakarta text-left"
                  onClick={() => scrollToSection("pricing")}
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-4 font-syne">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  className="text-muted-foreground hover:text-green-500 text-sm transition-colors font-jakarta text-left"
                  onClick={() => scrollToSection("services")}
                >
                  Web Development
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-green-500 text-sm transition-colors font-jakarta text-left"
                  onClick={() => scrollToSection("services")}
                >
                  Mobile Apps
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-green-500 text-sm transition-colors font-jakarta text-left"
                  onClick={() => scrollToSection("services")}
                >
                  UI/UX Design
                </button>
              </li>
            </ul>
          </div>

          {/* Our Presence */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-4 font-syne">Our Presence</h3>
            <p className="text-muted-foreground text-sm mb-1 font-jakarta">
              USA
            </p>
            <p className="text-muted-foreground text-sm mb-1 font-jakarta">
              Dubai
            </p>
            <p className="text-muted-foreground text-sm mb-4 font-jakarta">
              India
            </p>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-4 font-syne">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4 font-jakarta">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border border-border rounded-md px-4 py-2 text-sm text-foreground w-full font-jakarta focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-jakarta"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative border-t border-muted/50 mt-12 pt-8">
          <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/70 to-transparent"></div>
          <div className="flex flex-col items-center justify-between text-sm text-muted-foreground md:flex-row">
            <p>
              &copy; {currentYear} Zenith Studio. All rights reserved.
            </p>
            <div className="mt-4 flex items-center space-x-1 md:mt-0">
              <span>
                Building the future with
                <a
                  href="https://zenith-studio.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 font-medium text-primary hover:underline"
                >
                  Zenith
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
