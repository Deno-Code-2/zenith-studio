import { Github, Twitter, AtSign, Bird, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img
            src="/lovable-uploads/My-Logo.png"
            alt="Agency Logo"
            className="h-16 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-text">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-text hover:text-primary transition-colors">
                <AtSign size={20} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors">
                <Bird size={20} />
              </a>
              <a href="https://t.me/example" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-text">About Us</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <Link to="/about" className="text-text hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-text hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-text hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-text hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-text">Get Started</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <Link to="/services" className="text-text hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-text hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-text">Get Help</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <Link to="/status" className="text-text hover:text-primary transition-colors">
                    Status
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/contact" className="text-text hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text font-jakarta">
              © 2024 All rights reserved
            </div>
            <div className="flex space-x-4 text-text font-jakarta">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;