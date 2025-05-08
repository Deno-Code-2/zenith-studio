
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Bookacall() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="w-full py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black font-syne mb-3">Partner With Us. <span className="font-jakarta text-green-500">Launch Fast.</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're gifting 4 months of post-launch support to the first 10 signups.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-5xl mx-auto">
          <Cal
            namespace="30min"
            calLink="zenithstudio/30min"
            style={{ 
              width: "100%", 
              height: "100%",
              minHeight: "600px",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
