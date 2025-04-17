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
    <div style={{ 
      width: "100%", 
      minHeight: "600px", 
      margin: "20px 0",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px"
    }}>
      <div style={{ textAlign: "center" }}>
        <h1 className="text-2xl md:text-3xl font-bold text-black font-syne">Partner With Us. <span className="font-jakarta text-custom-orange">Launch Fast.</span>
        </h1>
        <p style={{ 
          fontSize: "1.2rem",
          color: "#666",
          fontWeight: "500"
        }}>
          We’re gifting 4 months of post-launch support to the first 10 signups.
        </p>
      </div>
      
      <Cal
        namespace="30min"
        calLink="zenithstudio/30min"
        style={{ 
          width: "100%", 
          height: "100%",
          minHeight: "600px"
        }}
      />
    </div>
  );
}