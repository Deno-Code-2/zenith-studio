
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-white border-t border-gray-200">
      <div className="container mx-auto max-w-6xl px-5 pb-8 pt-16">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <div className="mb-4 flex items-center justify-start gap-2">
              <img
                src="/images/Logo.png"
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-2xl font-semibold text-black font-cal">
                Zenith Studio
              </span>
            </div>
            <p className="mb-4 text-gray-600 font-inter">
              © 2025 Zenith Studio Solutions Private Limited.
            </p>
            <p className="mb-4 text-gray-600 font-inter">
              All rights reserved.
            </p>
            <p className="mb-4 text-gray-600 font-inter">
              contact@zenithstudio.com
            </p>
            <div className="flex space-x-3">
              <a
                href="mailto:support@zenith-studio.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              >
                <Github className="h-5 w-5 text-black" />
              </a>
              <a
                href="https://twitter.com/zenithstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              >
                <Twitter className="h-5 w-5 text-black" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold text-black font-cal">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/work"
                  className="text-gray-600 transition-colors hover:text-black font-inter"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="text-gray-600 transition-colors hover:text-black font-inter"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#pricing"
                  className="text-gray-600 transition-colors hover:text-black font-inter"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/templates"
                  className="text-gray-600 transition-colors hover:text-black font-inter"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 transition-colors hover:text-black font-inter"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 transition-colors hover:text-black font-inter"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold text-black font-cal">Products</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 font-inter">Zenith UI</span>
              </li>
              <li>
                <span className="text-gray-600 font-inter">Zenith UI Pro</span>
              </li>
              <li>
                <span className="text-gray-600 font-inter">Algochurn</span>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold text-black font-cal">Tools</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 font-inter">Awesome Components</span>
              </li>
              <li>
                <span className="text-gray-600 font-inter">Tailwindcss Buttons</span>
              </li>
              <li>
                <span className="text-gray-600 font-inter">Mechanical Keyboard</span>
              </li>
              <li>
                <span className="text-gray-600 font-inter">Box Shadows</span>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold text-black font-cal">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 transition-colors hover:text-black font-inter"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 transition-colors hover:text-black font-inter"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="text-gray-600 transition-colors hover:text-black font-inter"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <h3 className="mb-6 font-semibold text-black font-cal text-lg">Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-gray-600 font-inter">Real Estate Website Design</p>
              <p className="text-gray-600 font-inter">B2B Website Design</p>
              <p className="text-gray-600 font-inter">Fiverr Website Design</p>
              <p className="text-gray-600 font-inter">Medical Website Design</p>
              <p className="text-gray-600 font-inter">Creative Website Design</p>
              <p className="text-gray-600 font-inter">SaaS App development</p>
              <p className="text-gray-600 font-inter">Custom Web Development Services</p>
              <p className="text-gray-600 font-inter">Web Design Services for Small Businesses</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600 font-inter">Healthcare Website Design</p>
              <p className="text-gray-600 font-inter">B2C Website Design</p>
              <p className="text-gray-600 font-inter">Commercial Real Estate Website Design</p>
              <p className="text-gray-600 font-inter">Los Angeles Website Design</p>
              <p className="text-gray-600 font-inter">Construction Website Design</p>
              <p className="text-gray-600 font-inter">Custom Webapp Development</p>
              <p className="text-gray-600 font-inter">Custom Web Development Company</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600 font-inter">Restaurant Website Design</p>
              <p className="text-gray-600 font-inter">Attorney Website Design</p>
              <p className="text-gray-600 font-inter">Lawyer Website Design</p>
              <p className="text-gray-600 font-inter">Corporate Website Design</p>
              <p className="text-gray-600 font-inter">Marketing Website Design</p>
              <p className="text-gray-600 font-inter">AI App Development</p>
              <p className="text-gray-600 font-inter">React Web Development Company</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600 font-inter">Affordable Website Design</p>
              <p className="text-gray-600 font-inter">Mobile Website Design</p>
              <p className="text-gray-600 font-inter">Church Website Design</p>
              <p className="text-gray-600 font-inter">Hotel Website Design</p>
              <p className="text-gray-600 font-inter">Landing Page Development</p>
              <p className="text-gray-600 font-inter">Custom Web Development</p>
              <p className="text-gray-600 font-inter">Web Design and Development</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
