
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl px-5 pb-8 pt-16">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <div className="mb-4 flex items-center justify-start gap-2">
              <img
                src="/images/Logo.png"
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-2xl font-semibold text-foreground font-cal">
                Zenith Studio
              </span>
            </div>
            <p className="mb-4 text-muted-foreground font-inter">
              AI-powered studio helping founders launch MVPs and scale their startups in under 5 weeks.
            </p>
            <div className="flex space-x-3">
              <a
                href="mailto:support@zenith-studio.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-2 transition-colors hover:bg-muted/80"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/zenithstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-2 transition-colors hover:bg-muted/80"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/zenithstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-2 transition-colors hover:bg-muted/80"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/zenithstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-muted p-2 transition-colors hover:bg-muted/80"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold font-cal">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground transition-colors hover:text-foreground font-inter"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="#services"
                  className="text-muted-foreground transition-colors hover:text-foreground font-inter"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="#pricing"
                  className="text-muted-foreground transition-colors hover:text-foreground font-inter"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground transition-colors hover:text-foreground font-inter"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold font-cal">Products</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground font-inter">
                Zenith UI
              </li>
              <li className="text-muted-foreground font-inter">
                Zenith Pro
              </li>
              <li className="text-muted-foreground font-inter">
                Templates
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold font-cal">Tools</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground font-inter">
                Components
              </li>
              <li className="text-muted-foreground font-inter">
                Tailwind CSS
              </li>
              <li className="text-muted-foreground font-inter">
                React
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold font-cal">Legal</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground font-inter">
                Privacy Policy
              </li>
              <li className="text-muted-foreground font-inter">
                Terms and Conditions
              </li>
              <li className="text-muted-foreground font-inter">
                Refund Policy
              </li>
            </ul>
          </div>
        </div>
        <div className="relative border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between text-sm text-muted-foreground md:flex-row">
            <p className="font-inter">
              &copy; {currentYear}{" "}
              <span className="font-medium text-foreground">Zenith Studio</span>.
              All rights reserved.
            </p>
            <div className="mt-4 flex items-center space-x-1 md:mt-0">
              <span className="font-inter">
                Your dream, our code — launched in days.®
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
