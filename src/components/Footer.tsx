
import { useState, useEffect } from "react";
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
     // { name: "Blog", href: "/blog" },
      { name: "Pricing", href: "/pricing" },
    ],
    contact: [
      { name: "Contact Us", href: "/contact" },
     // { name: "support@zenithstudio.com", href: "mailto:support@zenithstudio.com" },
      { name: "+91 9108041057", href: "tel:+919108041057" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
  };

  const socialIcons = [
    { icon: Linkedin, href: "" },
  ];

  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-4">
          {/* Logo and info */}
          <div className="md:col-span-3">
            <Link to="/" className="inline-block mb-6" onClick={scrollToTop}>
              <h1 className="text-2xl font-bold font-syne">
                <span className="text-custom-orange">Zen</span>ith Studio
              </h1>
            </Link>
            <p className="text-muted-foreground mb-8 font-jakarta">
              Transforming vision into digital reality with innovation, expertise, and meticulous craftsmanship.
            </p>
          </div>

          {/* Pages */}
          <div className="md:col-span-3">
            <h3 className="text-foreground font-bold mb-4 font-syne">Pages</h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-jakarta"
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
            <h3 className="text-foreground font-bold mb-4 font-syne">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-jakarta"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="md:col-span-3">
            <h3 className="text-foreground font-bold mb-4 font-syne">Follow Us</h3>
            <div className="flex items-center space-x-4 mb-6">
              {socialIcons.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-custom-orange hover:border-custom-orange transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-foreground font-bold mb-3 font-syne">Subscribe to our newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/30 border border-border rounded-md px-4 py-2 text-foreground w-full font-jakarta"
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
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-jakarta">
            &copy; {currentYear} copyright Zenith Studio. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Large Text at the Bottom */}
      <div className="mt-16 mb-8 relative">
        <div className="relative z-10">
          <h2 className="text-[5vw] font-bold text-center text-black opacity-20 font-syne tracking-tight">
          Let’s build your website together.
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
