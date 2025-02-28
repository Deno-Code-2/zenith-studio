
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo and Company Info */}
          <div className="col-span-1">
            <h2 className="text-3xl font-bold mb-4 text-white font-syne">
              <span className="text-custom-orange">Zen</span>ith Studio
            </h2>
            <p className="text-gray-300 mb-6 font-jakarta">
              Transforming digital visions into reality with innovative solutions and cutting-edge technology.
            </p>
            <p className="text-gray-400 font-jakarta text-sm">
              © 2025 <span className="text-custom-orange">Zen</span>ith Studio. All rights reserved.
            </p>
          </div>

          {/* Pages */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 font-syne text-white">Pages</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <Link to="/" className="text-white hover:text-custom-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-custom-orange transition-colors">
                  About Us
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
              <li>
                <Link to="/pricing" className="text-white hover:text-custom-orange transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white hover:text-custom-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-custom-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 font-syne text-white">Socials</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-custom-orange transition-colors flex items-center gap-2">
                  <Facebook size={16} />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-custom-orange transition-colors flex items-center gap-2">
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-custom-orange transition-colors flex items-center gap-2">
                  <Twitter size={16} />
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-custom-orange transition-colors flex items-center gap-2">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 font-syne text-white">Legal</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <Link to="/privacy" className="text-white hover:text-custom-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white hover:text-custom-orange transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-white hover:text-custom-orange transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Website Name */}
        <div className="overflow-hidden pt-12 border-t border-orange-500">
          <div className="text-[10vw] leading-[0.8] font-bold text-center opacity-5 font-syne text-white-500">
            Zenith Studio
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
