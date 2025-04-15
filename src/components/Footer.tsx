import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Loader2 } from "lucide-react";
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

  // Footer links grouped by section
  const footerLinks = {
    pages: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
  };
  
  // Social media links
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-4">
            <Link to="/" className="inline-block" onClick={scrollToTop}>
              <h1 className="text-2xl font-bold font-syne">
                <span className="text-custom-orange">Zen</span>ith Studio
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
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-custom-orange transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-4 font-syne">Pages</h3>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-custom-orange text-sm transition-colors font-jakarta"
                    onClick={scrollToTop}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-4 font-syne">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/contact"
                  className="text-muted-foreground hover:text-custom-orange text-sm transition-colors font-jakarta"
                  onClick={scrollToTop}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="tel:+919108041057"
                  className="text-muted-foreground hover:text-custom-orange text-sm transition-colors font-jakarta"
                >
                  +91 9108041057
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-4 font-syne">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-custom-orange text-sm transition-colors font-jakarta"
                    onClick={scrollToTop}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2">
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
                className="bg-background border border-border rounded-md px-4 py-2 text-sm text-foreground w-full font-jakarta focus:ring-2 focus:ring-custom-orange focus:border-transparent"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-muted-foreground text-sm text-center font-jakarta">
            &copy; {currentYear} Zenith Studio. All rights reserved.
          </p>
        </div>
      </div>

      {/* Large Text at Bottom */}
      <div className="bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black dark:text-white font-syne tracking-tight">
            Let's build something <span className="text-custom-orange">amazing</span> together.
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;