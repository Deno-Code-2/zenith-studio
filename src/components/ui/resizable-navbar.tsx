
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Type definitions for all the navbar components
interface NavbarProps {
  className?: string;
  children: ReactNode;
}

interface NavBodyProps {
  className?: string;
  children: ReactNode;
}

interface NavItemsProps {
  className?: string;
  items: { name: string; link: string }[];
}

interface MobileNavProps {
  className?: string;
  children: ReactNode;
}

interface NavbarLogoProps {
  className?: string;
}

interface NavbarButtonProps {
  className?: string;
  variant?: "default" | "outline" | "gradient";
  children: ReactNode;
  onClick?: () => void;
}

interface MobileNavHeaderProps {
  className?: string;
  children: ReactNode;
}

interface MobileNavToggleProps {
  className?: string;
  isOpen: boolean;
  onClick: () => void;
}

interface MobileNavMenuProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

// Navbar component
export const Navbar = ({ className, children }: NavbarProps) => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md",
        className
      )}
    >
      <div className="container mx-auto">{children}</div>
    </header>
  );
};

// NavBody component - main container for desktop navbar
export const NavBody = ({ className, children }: NavBodyProps) => {
  return (
    <div
      className={cn(
        "hidden h-16 items-center justify-between px-4 lg:flex",
        className
      )}
    >
      {children}
    </div>
  );
};

// NavItems component - container for navigation links
export const NavItems = ({ className, items }: NavItemsProps) => {
  return (
    <nav className={cn("flex items-center space-x-6", className)}>
      {items.map((item, idx) => (
        <a
          key={`nav-link-${idx}`}
          href={item.link}
          className="relative text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

// NavbarLogo component
export const NavbarLogo = ({ className }: NavbarLogoProps) => {
  return (
    <a
      href="/"
      className={cn("flex items-center gap-2 font-medium", className)}
    >
      <img src="/images/Logo.png" alt="Logo" className="h-8 w-8 rounded-full" />
      <span className="text-xl font-semibold">Zenith Studio</span>
    </a>
  );
};

// NavbarButton component
export const NavbarButton = ({
  className,
  variant = "default",
  children,
  onClick,
}: NavbarButtonProps) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    gradient: "bg-gradient-to-r from-primary to-pink-600 text-white hover:opacity-90",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

// MobileNav component - container for mobile navigation
export const MobileNav = ({ className, children }: MobileNavProps) => {
  return (
    <div className={cn("lg:hidden", className)}>
      {children}
    </div>
  );
};

// MobileNavHeader component - top section of mobile navigation
export const MobileNavHeader = ({ className, children }: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex h-16 items-center justify-between px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

// MobileNavToggle component - hamburger button
export const MobileNavToggle = ({
  className,
  isOpen,
  onClick,
}: MobileNavToggleProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-md border text-foreground",
        className
      )}
      aria-label="Toggle menu"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpen ? (
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
};

// MobileNavMenu component - dropdown menu for mobile
export const MobileNavMenu = ({
  className,
  isOpen,
  onClose,
  children,
}: MobileNavMenuProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-background transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        className
      )}
    >
      <div className="container mx-auto flex h-full flex-col px-4 py-8">
        <button
          onClick={onClose}
          className="mb-8 ml-auto flex h-10 w-10 items-center justify-center rounded-md border"
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <nav className="flex flex-1 flex-col items-center justify-center space-y-8">
          {children}
        </nav>
      </div>
    </div>
  );
};
