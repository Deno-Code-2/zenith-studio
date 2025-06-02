
import { Mail, Linkedin } from "lucide-react";
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
                <Mail className="h-5 w-5 text-black" />
              </a>
              <a
                href="https://linkedin.com/company/zenithstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              >
                <Linkedin className="h-5 w-5 text-black" />
              </a>
              <a
                href="https://wa.me/919108041057"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              >
                <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
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
