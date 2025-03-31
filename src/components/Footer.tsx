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
      { name: "Pricing", href: "/pricing" },
    ],
    contact: [
      { name: "Contact Us", href: "/contact" },
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
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          {/* Logo and info */}
          <div className="col-span-2 md:col-span-3">
            <Link to="/" className="inline-block mb-4" onClick={scrollToTop}>
              <h1 className="text-2xl font-bold font-syne">
                <span className="text-custom-orange">Zen</span>ith Studio
              </h1>
            </Link>
            <p className="text-muted-foreground text-sm font-jakarta">
              Transforming vision into digital reality with innovation and expertise.
            </p>
          </div>

          {/* Pages */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground text-sm font-bold mb-3 font-syne">PAGES</h3>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors font-jakarta"
                    onClick={scrollToTop}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground text-sm font-bold mb-3 font-syne">CONTACT</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors font-jakarta"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-foreground text-sm font-bold mb-3 font-syne">LEGAL</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors font-jakarta"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-3">
            <h3 className="text-foreground text-sm font-bold mb-3 font-syne">NEWSLETTER</h3>
            <p className="text-muted-foreground text-sm mb-3 font-jakarta">
              Subscribe to our newsletter for updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground w-full font-jakarta"
                required
              />
              <Button 
                type="submit" 
                className="bg-custom-orange hover:bg-custom-orange/90 text-white text-sm h-9 font-jakarta"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Social and Copyright */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              {socialIcons.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-custom-orange hover:border-custom-orange transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm font-jakarta">
              &copy; {currentYear} Zenith Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Large Text at the Bottom */}
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black/20 font-syne tracking-tight">
            Let's build your website together.
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;