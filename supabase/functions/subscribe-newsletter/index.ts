
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Create a Resend client
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NewsletterSubscriptionRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: NewsletterSubscriptionRequest = await req.json();

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Email to the subscriber
    const subscriberEmailResponse = await resend.emails.send({
      from: "Zenith Studio <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Zenith Studio Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #E46534;">Thank You for Subscribing!</h1>
          </div>
          
          <p>Hello,</p>
          
          <p>Thank you for subscribing to the Zenith Studio newsletter. You'll now receive updates on our latest projects, design trends, and exclusive content.</p>
          
          <p>Stay creative!</p>
          
          <p>Warm regards,<br>
          The Zenith Studio Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777; text-align: center;">
            <p>&copy; 2025 Zenith Studio. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    // Email to the admin
    const adminEmailResponse = await resend.emails.send({
      from: "Zenith Studio <onboarding@resend.dev>",
      to: ["syedmoinuddin106@gmail.com"],
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #E46534;">New Newsletter Subscriber</h1>
          </div>
          
          <p>Hello,</p>
          
          <p>A new user has subscribed to the Zenith Studio newsletter.</p>
          
          <p><strong>Email:</strong> ${email}</p>
          
          <p>Warm regards,<br>
          The Zenith Studio Team</p>
        </div>
      `,
    });

    console.log("Subscriber email sent successfully:", subscriberEmailResponse);
    console.log("Admin email sent successfully:", adminEmailResponse);

    return new Response(
      JSON.stringify({ 
        message: "Subscription successful",
        subscriber: subscriberEmailResponse,
        admin: adminEmailResponse
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
    console.error("Error in subscribe-newsletter function:", error);
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
