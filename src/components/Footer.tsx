import { Github, Twitter, AtSign, Bird, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-20 relative overflow-hidden">
      {/* Large Agency Name Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h1 className="text-[25vw] leading-none font-black text-white font-syne tracking-tight">ZENITH</h1>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-custom-orange transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-custom-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-white hover:text-custom-orange transition-colors">
                <AtSign size={20} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-custom-orange transition-colors">
                <Bird size={20} />
              </a>
              <a href="https://t.me/example" target="_blank" rel="noopener noreferrer" className="text-white hover:text-custom-orange transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-white">About Us</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <Link to="/about" className="text-white hover:text-custom-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-custom-orange transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white hover:text-custom-orange transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-custom-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white hover:text-custom-orange transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-white">Get Started</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <Link to="/services" className="text-white hover:text-custom-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white hover:text-custom-orange transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-white">Get Help</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer" className="text-white hover:text-custom-orange transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <Link to="/status" className="text-white hover:text-custom-orange transition-colors">
                    Status
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-custom-orange transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Version number moved to bottom center */}
        <div className="text-center mt-20 mb-12 border-t border-custom-orange/20 pt-12">
          <span className="text-custom-orange font-jakarta inline-block">Version 1.0</span>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-custom-orange/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white font-jakarta">
              © 2025 All rights reserved
            </div>
            <div className="flex space-x-4 text-white font-jakarta">
              <Link to="/privacy" className="hover:text-custom-orange transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-custom-orange transition-colors">
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
