
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Create a Resend client
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NewsletterRequest {
  subject: string;
  content: string;
  recipients: string[];
  senderName?: string;
  imageUrl?: string;
  callToActionText?: string;
  callToActionUrl?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      subject, 
      content, 
      recipients, 
      senderName = "Zenith Studio",
      imageUrl,
      callToActionText,
      callToActionUrl
    }: NewsletterRequest = await req.json();

    if (!subject || !content || !recipients || recipients.length === 0) {
      return new Response(
        JSON.stringify({ error: "Subject, content, and recipients are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Build HTML content with optional image and call to action
    let htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #E46534;">${subject}</h1>
        </div>
        
        <div style="margin-bottom: 30px;">
          ${content.replace(/\n/g, '<br>')}
        </div>
    `;

    // Add image if provided
    if (imageUrl) {
      htmlContent += `
        <div style="margin-bottom: 30px; text-align: center;">
          <img src="${imageUrl}" alt="Newsletter Image" style="max-width: 100%; border-radius: 8px;" />
        </div>
      `;
    }

    // Add call to action button if provided
    if (callToActionText && callToActionUrl) {
      htmlContent += `
        <div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
          <a href="${callToActionUrl}" style="background-color: #E46534; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">
            ${callToActionText}
          </a>
        </div>
      `;
    }

    // Close the HTML content
    htmlContent += `
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777; text-align: center;">
          <p>&copy; ${new Date().getFullYear()} ${senderName}. All rights reserved.</p>
          <p>If you no longer wish to receive these emails, you can <a href="#" style="color: #777;">unsubscribe</a>.</p>
        </div>
      </div>
    `;

    // Log for debugging
    console.log(`Sending newsletter to ${recipients.length} recipients`);

    // Send to each recipient individually for personalization
    const sendResults = await Promise.all(
      recipients.map(async (email) => {
        try {
          const result = await resend.emails.send({
            from: `${senderName} <onboarding@resend.dev>`,
            to: [email],
            subject: subject,
            html: htmlContent,
          });
          
          return { email, success: true, result };
        } catch (error) {
          console.error(`Error sending to ${email}:`, error);
          return { email, success: false, error };
        }
      })
    );

    const successCount = sendResults.filter(result => result.success).length;
    console.log(`Successfully sent ${successCount} of ${recipients.length} emails`);

    return new Response(
      JSON.stringify({ 
        message: `Newsletter sent to ${successCount} recipients`, 
        results: sendResults
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-newsletter function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
