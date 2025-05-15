
import * as React from "react";
import { cn } from "@/lib/utils";

interface ChatInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const ChatInput = React.forwardRef<HTMLTextAreaElement, ChatInputProps>(
  ({ className, ...props }, ref) => (
    <textarea
      autoComplete="off"
      ref={ref}
      name="message"
      className={cn(
        "max-h-24 px-4 py-3 bg-gray-800 border border-gray-700 text-white text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-custom-orange disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md flex items-center resize-none",
        className,
      )}
      {...props}
    />
  ),
);
ChatInput.displayName = "ChatInput";

export { ChatInput };
