
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CountryBanner = () => {
  const [country, setCountry] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Simple country detection using a free API
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        setCountry(data.country_name);
        // Store in session storage to avoid repeated API calls
        sessionStorage.setItem('userCountry', data.country_name);
      })
      .catch(error => {
        console.error('Error detecting country:', error);
      });
  }, []);

  // Skip rendering if not from a target country or banner dismissed
  if (!visible || !country) return null;

  // Customize message based on country
  let message = '';
  let highlight = '';

  if (country === 'United States') {
    message = 'Perfect for US-based startups looking for quick MVP development';
    highlight = 'US-based';
  } else if (['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'].includes(country)) {
    message = 'Supporting Middle Eastern businesses with custom digital solutions';
    highlight = 'Middle Eastern';
  } else if (country === 'India') {
    message = 'Trusted by innovative Indian startups and enterprises';
    highlight = 'Indian';
  } else {
    // Default message for other countries
    message = 'Supporting global businesses with custom digital solutions';
    highlight = 'global';
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-[70px] left-0 right-0 z-50 mx-auto max-w-md bg-white shadow-lg rounded-lg border border-green-200 p-3 m-2"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">
              <span className="text-green-500">{highlight}</span> {message}
            </p>
            <button 
              onClick={() => setVisible(false)} 
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CountryBanner;
