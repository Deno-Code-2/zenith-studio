import { cn } from "@/lib/utils";
import { PhoneCall } from "lucide-react";

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  showIcon?: boolean;
}

const ActionButton = ({
  children,
  className,
  variant = "primary",
  href,
  showIcon = true,
  ...props
}: ActionButtonProps) => {
  const buttonClasses = cn(
    "px-6 py-3 rounded-lg font-medium transition-all duration-200 ease-in-out flex items-center gap-2",
    variant === "primary"
      ? "bg-custom-orange hover:bg-custom-orange/90 text-black border border-custom-orange/20 backdrop-blur-sm"
      : "bg-black hover:bg-black/90 text-white border border-custom-orange/20 backdrop-blur-sm",
    className
  );

  const content = (
    <>
      {showIcon && <PhoneCall className="w-5 h-5" />}
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