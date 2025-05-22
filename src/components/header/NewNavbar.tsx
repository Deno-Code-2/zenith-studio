
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Since we don't have the exact components from Next.js, we'll create our own versions
const Navbar = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border ${className || ""}`}>
    <div className="container mx-auto px-4 sm:px-6">
      {children}
    </div>
  </header>
);

const NavBody = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-between h-16">
    {children}
  </div>
);

const NavbarLogo = () => (
  <Link to="/" className="text-xl font-bold font-syne cursor-pointer flex-shrink-0">
    <div className="flex items-center">
      <span className="text-3xl font-bold">ZS</span>
    </div>
  </Link>
);

const NavItems = ({ items }: { items: {name: string, link: string}[] }) => {
  const location = useLocation();
  
  return (
    <nav className="hidden md:flex space-x-8">
      {items.map((item, index) => (
        <NavItem key={index} item={item} isActive={location.pathname === item.link || (item.link.startsWith('#') && location.hash === item.link)} />
      ))}
    </nav>
  );
};

const NavItem = ({ item, isActive }: { item: {name: string, link: string}, isActive: boolean }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (item.link.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(item.link.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link
      to={item.link.startsWith('#') ? '/' + item.link : item.link}
      className={`text-lg font-medium transition-colors ${
        isActive ? "text-green-500" : "text-foreground hover:text-green-500"
      }`}
      onClick={handleClick}
    >
      {item.name}
    </Link>
  );
};

const NavbarButton = ({ 
  variant = "default", 
  className = "", 
  children, 
  onClick 
}: { 
  variant?: string, 
  className?: string, 
  children: React.ReactNode,
  onClick?: () => void
}) => (
  <Button 
    className={`font-medium text-sm ${variant === "gradient" ? "bg-black hover:bg-black/80 text-white rounded-full px-6" : ""} ${className}`} 
    size="sm"
    onClick={onClick}
  >
    {children}
  </Button>
);

const MobileNav = ({ children }: { children: React.ReactNode }) => (
  <div className="md:hidden">{children}</div>
);

const MobileNavHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-between h-16">{children}</div>
);

const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => (
  <button 
    className="p-2 rounded-md text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
    onClick={onClick}
  >
    {isOpen ? (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileNavMenu = ({ 
  isOpen, 
  onClose, 
  children 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  children: React.ReactNode 
}) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-0 z-50 bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col space-y-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export function NewNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Updated navigation items to match your existing site structure
  const navItems = [
    {
      name: "Showcase",
      link: "#recent-work",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Process",
      link: "#features",
    },
    {
      name: "Guarantees",
      link: "#testimonials",
    },
  ];

  return (
    <Navbar className="z-[150]">
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="gradient">
            <a 
              href="https://cal.com/zenithstudio/30min" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-4">
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                if (item.link.startsWith('#')) {
                  const element = document.getElementById(item.link.substring(1));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  window.location.href = item.link;
                }
              }}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              variant="gradient"
              className="w-full"
            >
              <a 
                href="https://cal.com/zenithstudio/30min" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

export default NewNavbar;
