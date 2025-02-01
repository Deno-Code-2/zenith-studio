import { Github, Twitter, AtSign, Bird, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-20">
      <div className="container mx-auto px-4">
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
                <a href="/about" className="text-white hover:text-custom-orange transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-white hover:text-custom-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Get Started Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-syne text-white">Get Started</h3>
            <ul className="space-y-3 font-jakarta">
              <li>
                <a href="/download" className="text-white hover:text-custom-orange transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="/mods" className="text-white hover:text-custom-orange transition-colors">
                  Zen Mods
                </a>
              </li>
              <li>
                <a href="/releases" className="text-white hover:text-custom-orange transition-colors">
                  Release Notes
                </a>
              </li>
              <li>
                <a href="/twilight" className="text-white hover:text-custom-orange transition-colors">
                  Twilight
                </a>
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
                  <a href="/status" className="text-white hover:text-custom-orange transition-colors">
                    Uptime Status
                  </a>
                </div>
              </li>
              <li>
                <a href="/report" className="text-white hover:text-custom-orange transition-colors">
                  Report an Issue
                </a>
              </li>
              <li>
                <a href="mailto:hello@zen-browser.app" className="text-white hover:text-custom-orange transition-colors">
                  hello@zen-browser.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-custom-orange/20">
          <p className="text-sm text-gray-400 font-jakarta text-center space-x-2">
            <span>Made with <span className="text-red-500">❤</span> by the</span>
            <span className="text-custom-orange">Zen Browser Team</span>
            <span>|</span>
            <span>Version 1.0</span>
            <span>|</span>
            <a href="/cookie-policy" className="text-white hover:text-custom-orange">Cookie Policy</a>
            <span>|</span>
            <a href="/privacy-policy" className="text-white hover:text-custom-orange">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;