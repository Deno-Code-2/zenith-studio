
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
      { name: "+1 (555) 123-4567", href: "tel:+15551234567" },
      { name: "123 Innovation Way, Tech City, TX 75001", href: "#" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo and info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/My-Logo.png" 
                alt="Zenith Studio" 
                className="h-14"
              />
            </Link>
            <p className="text-gray-400 mb-8 font-jakarta">
              Transforming vision into digital reality with innovation, expertise, and meticulous craftsmanship.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-bold mb-6 font-syne">Pages</h3>
            <ul className="space-y-4">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors font-jakarta"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 font-syne">Contact</h3>
            <ul className="space-y-4">
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
          <div>
            <h3 className="text-white font-bold mb-6 font-syne">Follow Us</h3>
            <div className="flex items-center space-x-4 mb-8">
              {socialIcons.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black border border-neutral-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 font-syne">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-black/30 border border-neutral-800 rounded-md px-4 py-2 text-white w-full"
                />
                <Button className="bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-jakarta">
            &copy; {currentYear} Zenith Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
