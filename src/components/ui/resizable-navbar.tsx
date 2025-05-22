
"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Component interfaces
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
  items: {
    name: string;
    link: string;
  }[];
}

interface NavbarLogoProps {
  className?: string;
}

interface NavbarButtonProps {
  className?: string;
  variant?: "default" | "gradient";
  children: ReactNode;
  onClick?: () => void;
}

interface MobileNavProps {
  className?: string;
  children: ReactNode;
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

// Navbar components
export const Navbar = ({ className, children }: NavbarProps) => {
  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md", className)}>
      {children}
    </header>
  );
};

export const NavBody = ({ className, children }: NavBodyProps) => {
  return (
    <div className={cn("container mx-auto hidden items-center justify-between p-4 lg:flex", className)}>
      {children}
    </div>
  );
};

export const NavItems = ({ className, items }: NavItemsProps) => {
  return (
    <nav className={cn("mx-6 flex items-center space-x-4 lg:space-x-6", className)}>
      {items.map((item, i) => (
        <a
          key={`nav-item-${i}`}
          href={item.link}
          className="text-sm font-medium transition-colors hover:text-green-500"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export const NavbarLogo = ({ className }: NavbarLogoProps) => {
  return (
    <a href="/" className={cn("flex items-center gap-2 text-xl font-bold", className)}>
      <span className="font-bold text-2xl">
        <span className="text-green-500">Z</span>S
      </span>
    </a>
  );
};

export const NavbarButton = ({ className, variant = "default", children, onClick }: NavbarButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "font-medium",
        variant === "gradient" 
          ? "bg-green-500 hover:bg-green-600 text-white" 
          : "bg-background text-foreground",
        className
      )}
    >
      {children}
    </Button>
  );
};

export const MobileNav = ({ className, children }: MobileNavProps) => {
  return <div className={cn("lg:hidden", className)}>{children}</div>;
};

export const MobileNavHeader = ({ className, children }: MobileNavHeaderProps) => {
  return <div className={cn("container flex items-center justify-between p-4", className)}>{children}</div>;
};

export const MobileNavToggle = ({ className, isOpen, onClick }: MobileNavToggleProps) => {
  return (
    <button
      className={cn("h-10 w-10 rounded-md flex items-center justify-center", className)}
      onClick={onClick}
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
};

export const MobileNavMenu = ({ className, isOpen, onClose, children }: MobileNavMenuProps) => {
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-[65px] z-50 h-[calc(100vh-65px)] transform overflow-y-auto bg-background p-6 transition-all duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full",
        className
      )}
    >
      <div className="flex flex-col space-y-6">{children}</div>
    </div>
  );
};
