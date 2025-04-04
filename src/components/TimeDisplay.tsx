
import { useEffect, useState } from 'react';

const TimeDisplay = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      };
      
      setTime(date.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-sm font-medium text-gray-700 font-jakarta">
      Local Time: <span className="text-custom-orange">{time} IST</span>
    </div>
  );
};

export default TimeDisplay;
