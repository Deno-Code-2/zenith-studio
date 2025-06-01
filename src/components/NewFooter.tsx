
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden rounded-t-3xl border-t bg-muted/30 md:rounded-t-[4rem]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-green-500/30 blur-3xl dark:bg-green-500/10"></div>
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl dark:bg-blue-500/10"></div>
      </div>
      <div className="container mx-auto max-w-6xl px-5 pb-8 pt-16">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <div className="mb-4 flex items-center justify-start gap-2">
              <img
                src="/images/Logo.png"
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="bg-green-500 bg-clip-text text-2xl font-semibold text-transparent">
                Zenith Studio
              </span>
            </div>
            <p className="mb-4 text-muted-foreground">
              AI-powered studio helping founders launch MVPs and scale their startups in under 5 weeks.
            </p>
            <div className="flex space-x-3">
              <a
                href="mailto:support@zenith-studio.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/zenithstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/zenithstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/zenithstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#features"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#pricing"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold">Our Presence</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                USA
              </li>
              <li className="text-muted-foreground">
                Dubai
              </li>
              <li className="text-muted-foreground">
                India
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#faq"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919108041057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative border-t border-muted/50 pt-8">
          <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-green-500/70 to-transparent"></div>
          <div className="flex flex-col items-center justify-between text-sm text-muted-foreground md:flex-row">
            <p>
              &copy; {currentYear}{" "}
              <span className="font-medium text-foreground">Zenith Studio</span>.
              All rights reserved.
            </p>
            <div className="mt-4 flex items-center space-x-1 md:mt-0">
              <span>
                Your dream, our code — launched in days.®
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
