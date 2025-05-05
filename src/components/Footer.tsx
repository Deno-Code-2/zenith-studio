
import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, AtSign, MessageSquare } from "lucide-react";
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
      { name: "Projects", href: "/projects" },
      { name: "Pricing", href: "/pricing" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
  };
  
  // Social media links
  const socialLinks = [
    { icon: AtSign, href: "mailto:support@zenith-studio.dev", label: "Email" },
    { icon: MessageSquare, href: "https://wa.me/919108041057", label: "WhatsApp" }
  ];

  return (
    <footer className="bg-background border-t border-border">
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
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-green-500 transition-colors"
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
                    className="text-muted-foreground hover:text-green-500 text-sm transition-colors font-jakarta"
                    onClick={scrollToTop}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Presence */}
          <div className="col-span-1 md:col-span-2">
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
          <div className="col-span-1 md:col-span-4">
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
        <div className="border-t border-border mt-12 pt-8">
          <p className="text-muted-foreground text-sm text-center font-jakarta">
            &copy; {currentYear} Zenith Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
