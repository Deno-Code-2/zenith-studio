import { cn } from "@/lib/utils";

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
}

const ActionButton = ({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: ActionButtonProps) => {
  const buttonClasses = cn(
    "px-6 py-3 rounded-lg font-medium transition-all duration-200 ease-in-out",
    variant === "primary"
      ? "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm"
      : "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm",
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default ActionButton;