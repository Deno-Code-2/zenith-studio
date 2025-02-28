
import { Twitter, Instagram, Linkedin, Facebook, Youtube, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.from(".footer-animate", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
      }
    });

    gsap.from(".footer-logo", {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
      }
    });
  }, []);

  return (
    <footer className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo and Company Info */}
          <div className="col-span-1 footer-animate footer-logo">
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
          <div className="col-span-1 footer-animate">
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
                <Link to="/contact" className="text-white hover:text-custom-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 footer-animate">
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

          {/* Socials */}
          <div className="col-span-1 footer-animate">
            <h3 className="text-lg font-bold mb-6 font-syne text-white">Socials</h3>
            <div className="flex flex-wrap gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-custom-orange/80 transition-colors">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-custom-orange/80 transition-colors">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-custom-orange/80 transition-colors">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-custom-orange/80 transition-colors">
                <Linkedin size={18} className="text-white" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-custom-orange/80 transition-colors">
                <Youtube size={18} className="text-white" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-custom-orange/80 transition-colors">
                <Github size={18} className="text-white" />
              </a>
              <a href="mailto:contact@zenithstudio.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-custom-orange/80 transition-colors">
                <Mail size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Large Website Name */}
        <div className="overflow-hidden pt-12 border-t border-gray-800">
          <div className="flex justify-center items-center">
            <h1 className="text-[8vw] md:text-[6vw] leading-none font-bold text-center opacity-5 font-syne">
              <span className="text-custom-orange mr-2">Zen</span>ith
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
