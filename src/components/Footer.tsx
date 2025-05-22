<<<<<<< HEAD
import { Github, Heart, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
=======

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

>>>>>>> 571381d016240992d09adcb337b86070d317610b
  return (
    <footer className="relative overflow-hidden rounded-t-3xl border-t bg-muted/30 md:rounded-t-[4rem]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl dark:bg-primary/10"></div>
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl dark:bg-blue-500/10"></div>
      </div>
<<<<<<< HEAD
      <div className="container mx-auto max-w-6xl px-5 pb-8 pt-16">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <div className="mb-4 flex items-center justify-start gap-2">
              <img
                src="/logo.webp"
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="bg-primary from-foreground via-rose-200 to-primary bg-clip-text text-2xl font-semibold text-transparent dark:bg-gradient-to-b">
                Mvpblocks
              </span>
            </div>
            <p className="mb-4 text-muted-foreground">
              Copy-paste UI components that just work — responsive, animated,
              and beautifully styled.
            </p>
            <div className="flex space-x-3">
              <Link
                href="https://github.com/subhadeeproy3902/mvpblocks"
=======
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
>>>>>>> 571381d016240992d09adcb337b86070d317610b
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Github className="h-5 w-5" />
<<<<<<< HEAD
              </Link>
              <Link
                href="https://x.com/mvp_Subha"
=======
              </a>
              <a 
                href="https://twitter.com/"
>>>>>>> 571381d016240992d09adcb337b86070d317610b
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Twitter className="h-5 w-5" />
<<<<<<< HEAD
              </Link>
              <Link
                href="https://instagram.com/mvp_Subha"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/subhadeep3902"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
=======
              </a>
>>>>>>> 571381d016240992d09adcb337b86070d317610b
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2">
              <li>
<<<<<<< HEAD
                <Link
                  href="#features"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
=======
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
>>>>>>> 571381d016240992d09adcb337b86070d317610b
                >
                  About
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link
                  href="/docs/introduction"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Introduction
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/get-started"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/add-a-block"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Add block
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/subhadeeproy3902/mvpblocks/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative border-t border-muted/50 pt-8">
          <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/70 to-transparent"></div>
          <div className="flex flex-col items-center justify-between text-sm text-muted-foreground md:flex-row">
            <p>
              ©{new Date().getFullYear()}{" "}
              <span className="font-medium text-foreground">Mvpblocks</span>.
              All rights reserved.
            </p>
            <div className="mt-4 flex items-center space-x-1 md:mt-0">
              <span>
                Building in public at
                <Link
                  href="http://mvp-subha.me"
=======
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
>>>>>>> 571381d016240992d09adcb337b86070d317610b
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 font-medium text-primary hover:underline"
                >
<<<<<<< HEAD
                  Subhadeep
                </Link>
=======
                  Zenith
                </a>
>>>>>>> 571381d016240992d09adcb337b86070d317610b
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
