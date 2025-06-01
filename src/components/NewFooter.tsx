
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-background border-t border-border">
      <div className="container mx-auto max-w-7xl px-6 pb-8 pt-16">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Logo and description */}
          <div className="col-span-1">
            <div className="mb-4 flex items-center justify-start gap-2">
              <img
                src="/images/Logo.png"
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-xl font-semibold text-foreground font-cal">
                Zenith Studio
              </span>
            </div>
            <p className="mb-6 text-sm text-muted-foreground font-inter">
              © {currentYear} Zenith Studio Private Limited.
              <br />
              All rights reserved.
            </p>
            <p className="mb-4 text-sm text-muted-foreground font-inter">
              contact@zenith-studio.dev
            </p>
            <div className="flex space-x-3">
              <a
                href="mailto:support@zenith-studio.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/zenithstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold font-cal text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground font-inter"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground font-inter"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#pricing"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground font-inter"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground font-inter"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground font-inter"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground font-inter"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold font-cal text-foreground">Products</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground font-inter">
                Zenith UI
              </li>
              <li className="text-sm text-muted-foreground font-inter">
                Zenith UI Pro
              </li>
              <li className="text-sm text-muted-foreground font-inter">
                Algochurn
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold font-cal text-foreground">Tools</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground font-inter">
                Awesome Components
              </li>
              <li className="text-sm text-muted-foreground font-inter">
                Tailwindcss Buttons
              </li>
              <li className="text-sm text-muted-foreground font-inter">
                Mechanical Keyboard
              </li>
              <li className="text-sm text-muted-foreground font-inter">
                Box Shadows
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold font-cal text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground font-inter">
                Privacy Policy
              </li>
              <li className="text-sm text-muted-foreground font-inter">
                Terms and Conditions
              </li>
              <li className="text-sm text-muted-foreground font-inter">
                Refund Policy
              </li>
            </ul>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-8">
          <h3 className="mb-6 font-semibold font-cal text-foreground">Services</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            <div className="text-sm text-muted-foreground font-inter">Real Estate Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Healthcare Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Restaurant Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Affordable Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">B2B Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">B2C Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Attorney Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Mobile Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Fiverr Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Commercial Real Estate Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Lawyer Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Church Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Medical Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Los Angeles Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Corporate Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Hotel Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Creative Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Construction Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Marketing Website Design</div>
            <div className="text-sm text-muted-foreground font-inter">Landing Page Development</div>
            <div className="text-sm text-muted-foreground font-inter">SaaS App development</div>
            <div className="text-sm text-muted-foreground font-inter">Custom Webapp Development</div>
            <div className="text-sm text-muted-foreground font-inter">AI App Development</div>
            <div className="text-sm text-muted-foreground font-inter">Custom Web Development</div>
            <div className="text-sm text-muted-foreground font-inter">Custom Web Development Services</div>
            <div className="text-sm text-muted-foreground font-inter">Custom Web Development Company</div>
            <div className="text-sm text-muted-foreground font-inter">React Web Development Company</div>
            <div className="text-sm text-muted-foreground font-inter">Web Design and Development</div>
            <div className="text-sm text-muted-foreground font-inter">Web Design Services for Small Businesses</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
