
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewFooter() {
  const currentYear = new Date().getFullYear();
  
  const companyLinks = [
    { name: "Work", href: "/projects" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Templates", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "/contact" }
  ];

  const productLinks = [
    { name: "Zenith UI", href: "#" },
    { name: "Zenith UI Pro", href: "#" },
    { name: "Algochurn", href: "#" }
  ];

  const toolLinks = [
    { name: "Awesome Components", href: "#" },
    { name: "Tailwindcss Buttons", href: "#" },
    { name: "Mechanical Keyboard", href: "#" },
    { name: "Box Shadows", href: "#" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund" }
  ];

  const servicesList = [
    "Real Estate Website Design", "Healthcare Website Design", "Restaurant Website Design", "Affordable Website Design",
    "B2B Website Design", "B2C Website Design", "Attorney Website Design", "Mobile Website Design",
    "Fiverr Website Design", "Commercial Real Estate Website Design", "Lawyer Website Design", "Church Website Design",
    "Medical Website Design", "Los Angeles Website Design", "Corporate Website Design", "Hotel Website Design",
    "Creative Website Design", "Construction Website Design", "Marketing Website Design", "Landing Page Development",
    "SaaS App development", "Custom Webapp Development", "AI App Development", "Custom Web Development",
    "Custom Web Development Services", "Custom Web Development Company", "React Web Development Company", "Web Design and Development",
    "Web Design Services for Small Businesses"
  ];
  
  return (
    <footer className="relative overflow-hidden bg-white">
      <div className="container mx-auto max-w-7xl px-5 pb-8 pt-16">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-6">
          <div className="col-span-1 md:col-span-2">
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
              contact@zenith-studio.dev
            </p>
            <div className="flex space-x-3">
              <a
                href="mailto:support@zenith-studio.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/zenithstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/zenithstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/zenithstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-gray-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold text-black font-cal">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-600 transition-colors hover:text-black font-inter"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="mb-4 font-semibold text-black font-cal">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-black font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="mb-4 font-semibold text-black font-cal">Tools</h3>
            <ul className="space-y-2">
              {toolLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-black font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="mb-4 font-semibold text-black font-cal">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-600 transition-colors hover:text-black font-inter"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services section */}
        <div className="mb-8">
          <h3 className="mb-4 font-semibold text-black font-cal">Services</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2">
            {servicesList.map((service, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors font-inter"
              >
                {service}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
