
import { Github, Twitter, AtSign, Bird, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white font-syne">
            <span className="text-custom-orange">Zen</span>ith Studio
          </h2>
          <p className="text-gray-300 max-w-2xl font-jakarta">
            At <span className="text-custom-orange">Zen</span>ith Studio, we're more than just a digital agency. 
            We're your strategic partner in navigating the digital landscape. 
            Our team of creative technologists and strategic thinkers work together 
            to craft exceptional digital experiences that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-white">Follow Us</h3>
            <h4 className="text-base font-medium mb-4 text-custom-orange font-jakarta">Digital Solutions for Modern Businesses</h4>
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

        {/* Bottom Section */}
        <div className="mt-20">
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

        {/* Large Website Name */}
        <div className="mt-20 relative overflow-hidden">
          <h1 className="text-[12vw] font-bold text-center opacity-5 font-syne select-none">
            <span className="text-custom-orange opacity-10">Zen</span>ith Studio
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
