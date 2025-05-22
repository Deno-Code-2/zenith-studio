
import { useState, useEffect } from "react";

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState("");

  // Update IST time
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
      };
      const formatter = new Intl.DateTimeFormat('en-IN', options);
      setCurrentTime(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden md:flex items-center gap-2 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full text-xs shadow-sm border border-black/10 dark:border-white/10">
      <span className="font-medium">Local Time: {currentTime} IST</span>
    </div>
  );
};

export default TimeDisplay;
