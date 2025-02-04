import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  icon?: React.ReactNode;
}

const ActionButton = ({
  children,
  className,
  variant = "primary",
  href,
  icon,
  ...props
}: ActionButtonProps) => {
  const buttonClasses = cn(
    "px-6 py-3 rounded-lg font-medium transition-all duration-200 ease-in-out flex items-center gap-2",
    variant === "primary"
      ? "bg-primary hover:bg-primary/90 text-white"
      : "bg-background hover:bg-background/90 text-text border border-primary/20",
    className
  );

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {content}
    </button>
  );
};

export default ActionButton;