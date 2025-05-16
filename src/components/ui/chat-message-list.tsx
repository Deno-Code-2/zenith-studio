
import * as React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatMessageListProps extends React.HTMLAttributes<HTMLDivElement> {
  smooth?: boolean;
}

const ChatMessageList = React.forwardRef<HTMLDivElement, ChatMessageListProps>(
  ({ className, children, smooth = false, ...props }, _ref) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const [isAtBottom, setIsAtBottom] = React.useState(true);
    
    const scrollToBottom = React.useCallback(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, []);
    
    React.useEffect(() => {
      scrollToBottom();
    }, [children, scrollToBottom]);
    
    const handleScroll = React.useCallback(() => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const distanceToBottom = Math.abs(scrollHeight - scrollTop - clientHeight);
        setIsAtBottom(distanceToBottom <= 20);
      }
    }, []);
    
    React.useEffect(() => {
      const element = scrollRef.current;
      if (element) {
        element.addEventListener("scroll", handleScroll, { passive: true });
        return () => element.removeEventListener("scroll", handleScroll);
      }
    }, [handleScroll]);

    return (
      <div className="relative w-full h-full">
        <div
          className={cn("flex flex-col w-full h-full p-4 overflow-y-auto", className)}
          ref={scrollRef}
          onWheel={handleScroll}
          onTouchMove={handleScroll}
          {...props}
        >
          <div className="flex flex-col gap-3">{children}</div>
        </div>

        {!isAtBottom && (
          <Button
            onClick={scrollToBottom}
            size="icon"
            variant="outline"
            className="absolute bottom-2 right-2 inline-flex rounded-full shadow-md bg-custom-green text-white hover:bg-custom-green/90 border-none"
            aria-label="Scroll to bottom"
          >
            <ArrowDown className="h-4 w-4" />
          </Button>
        )}
      </div>
    );
  }
);

ChatMessageList.displayName = "ChatMessageList";

export { ChatMessageList };
