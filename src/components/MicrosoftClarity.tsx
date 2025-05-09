
import { useEffect } from 'react';

const CLARITY_PROJECT_ID = "k0zlnial1j";

const MicrosoftClarity = () => {
  useEffect(() => {
    // Add Microsoft Clarity script
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
    
    // Initialize
    window.clarity("consent");
  }, []);

  return null; // This component doesn't render anything visible
};

export default MicrosoftClarity;
