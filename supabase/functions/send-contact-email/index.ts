
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  service: string;
  pricing?: string;
  deadline?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, pricing, deadline, message }: ContactEmailRequest = await req.json();

    // Send email to both business emails
    const businessEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["support@zenith-studio.dev", "syedmoinuddin106@gmail.com"], // Both email addresses
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Contact Information:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Project Details:</h3>
          <p><strong>Service:</strong> ${service}</p>
          ${pricing ? `<p><strong>Budget:</strong> ${pricing}</p>` : ''}
          ${deadline ? `<p><strong>Deadline:</strong> ${deadline}</p>` : ''}
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          This email was sent from the Zenith Studio contact form.
        </p>
      `,
    });

    // Send confirmation email to the customer
    const customerEmailResponse = await resend.emails.send({
      from: "Zenith Studio <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Zenith Studio!",
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <div style="background: #199e76; color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
          </div>
          
          <div style="padding: 30px; background: white;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              We've received your inquiry and are excited to learn more about your project. Our team will review your requirements and get back to you within 24 hours.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #199e76; margin-top: 0;">Your Submission Summary:</h3>
              <p><strong>Service:</strong> ${service}</p>
              ${pricing ? `<p><strong>Budget Range:</strong> ${pricing}</p>` : ''}
              ${deadline ? `<p><strong>Timeline:</strong> ${deadline}</p>` : ''}
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              In the meantime, feel free to explore our portfolio and learn more about our services on our website.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://zenith-studio.dev" style="background: #199e76; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              Best regards,<br>
              The Zenith Studio Team
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666;">
            <p>© 2024 Zenith Studio. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { businessEmailResponse, customerEmailResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        businessEmailId: businessEmailResponse.data?.id,
        customerEmailId: customerEmailResponse.data?.id 
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
    console.error("Error in send-contact-email function:", error);
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
