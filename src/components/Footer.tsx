import { Github, Twitter, AtSign, Bird, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-dark-green/95 text-platinum py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-mint">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-platinum hover:text-mint transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-platinum hover:text-mint transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-platinum hover:text-mint transition-colors">
                <AtSign size={20} />
              </a>
              <a href="#" className="text-platinum hover:text-mint transition-colors">
                <Bird size={20} />
              </a>
              <a href="#" className="text-platinum hover:text-mint transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-mint">About Us</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <a href="#" className="text-platinum hover:text-mint transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-platinum hover:text-mint transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Get Started Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-mint">Get Started</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <a href="#" className="text-platinum hover:text-mint transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="text-platinum hover:text-mint transition-colors">
                  Zen Mods
                </a>
              </li>
              <li>
                <a href="#" className="text-platinum hover:text-mint transition-colors">
                  Release Notes
                </a>
              </li>
              <li>
                <a href="#" className="text-platinum hover:text-mint transition-colors">
                  Twilight
                </a>
              </li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-mint">Get Help</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <a href="#" className="text-platinum hover:text-mint transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-mint rounded-full"></span>
                  <a href="#" className="text-platinum hover:text-mint transition-colors">
                    Uptime Status
                  </a>
                </div>
              </li>
              <li>
                <a href="#" className="text-platinum hover:text-mint transition-colors">
                  Report an Issue
                </a>
              </li>
              <li>
                <a href="#" className="text-platinum hover:text-mint transition-colors">
                  hello@zen-browser.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-mint/20">
          <p className="text-sm text-platinum/60 font-jakarta">
            Made with <span className="text-red-500">❤</span> by the{" "}
            <span className="text-mint">Zenith Studio Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;