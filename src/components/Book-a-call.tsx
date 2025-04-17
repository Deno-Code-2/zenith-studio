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
      borderRadius: "8px"
    }}>
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