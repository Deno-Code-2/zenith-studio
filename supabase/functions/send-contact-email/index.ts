
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Create a Resend client
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  price_range: string;
  service_type: string;
  message: string;
  recipient: string;
  isAdminEmail: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestData: ContactEmailRequest = await req.json();
    const { name, email, subject, price_range, service_type, message, recipient, isAdminEmail } = requestData;

    let emailContent = '';
    let emailSubject = '';

    if (isAdminEmail) {
      // Email to the site owner/admin
      emailSubject = `New Contact Form Submission: ${subject}`;
      emailContent = `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Price Range:</strong> ${price_range}</p>
        <p><strong>Service Type:</strong> ${service_type}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `;
    } else {
      // Confirmation email to the user
      emailSubject = `Thank you for contacting Zenith Studio!`;
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #E46534;">Thank You for Contacting Us!</h1>
          </div>
          
          <p>Hello ${name},</p>
          
          <p>Thank you for reaching out to Zenith Studio. We've received your message regarding "${subject}" and a member of our team will get back to you shortly.</p>
          
          <p>Here's a summary of your inquiry:</p>
          <ul>
            <li><strong>Service of Interest:</strong> ${service_type}</li>
            <li><strong>Budget Range:</strong> ${price_range}</li>
          </ul>
          
          <p>If you have any additional information to share or questions in the meantime, please feel free to reply to this email.</p>
          
          <p>We look forward to exploring how we can help with your project!</p>
          
          <p>Warm regards,<br>
          The Zenith Studio Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777; text-align: center;">
            <p>&copy; 2025 Zenith Studio. All rights reserved.</p>
          </div>
        </div>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Zenith Studio <onboarding@resend.dev>",
      to: [recipient],
      subject: emailSubject,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
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
