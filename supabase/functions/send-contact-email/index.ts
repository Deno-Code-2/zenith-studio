
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
      // Enhanced Email to the site owner/admin
      emailSubject = `New Project Inquiry: ${subject}`;
      emailContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Project Inquiry</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #E46534;
              padding: 20px;
              text-align: center;
              color: white;
              border-radius: 5px 5px 0 0;
            }
            .content {
              padding: 20px;
              background-color: #f9f9f9;
              border: 1px solid #ddd;
              border-top: none;
              border-radius: 0 0 5px 5px;
            }
            .label {
              font-weight: bold;
              color: #E46534;
            }
            .info-box {
              background-color: #fff;
              border: 1px solid #ddd;
              padding: 15px;
              margin-bottom: 15px;
              border-radius: 5px;
            }
            .message-box {
              background-color: #fff;
              border: 1px solid #ddd;
              padding: 15px;
              margin-top: 20px;
              border-radius: 5px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 12px;
              color: #777;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>New Project Inquiry</h1>
          </div>
          <div class="content">
            <p>You've received a new inquiry from your website contact form:</p>
            
            <div class="info-box">
              <p><span class="label">Name:</span> ${name}</p>
              <p><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></p>
              <p><span class="label">Subject:</span> ${subject}</p>
              <p><span class="label">Budget Range:</span> ${price_range}</p>
              <p><span class="label">Service Type:</span> ${service_type}</p>
            </div>
            
            <div class="message-box">
              <h3>Client Message:</h3>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <p>We recommend responding to this inquiry within 24 hours.</p>
          </div>
          <div class="footer">
            <p>This is an automated message from your Zenith Studio website.</p>
          </div>
        </body>
        </html>
      `;
    } else {
      // Enhanced Confirmation email to the user
      emailSubject = `Thank you for contacting Zenith Studio!`;
      emailContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Contacting Zenith Studio</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 0;
            }
            .container {
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .header {
              background-color: #E46534;
              padding: 30px 20px;
              text-align: center;
            }
            .header h1 {
              color: white;
              margin: 0;
              font-size: 28px;
            }
            .content {
              padding: 30px 20px;
            }
            .detail-box {
              background-color: #f9f9f9;
              border-radius: 6px;
              padding: 15px;
              margin: 20px 0;
            }
            .detail-item {
              margin-bottom: 8px;
            }
            .detail-label {
              font-weight: bold;
              display: inline-block;
              min-width: 120px;
            }
            .cta-button {
              display: inline-block;
              background-color: #E46534;
              color: white;
              text-decoration: none;
              padding: 12px 25px;
              border-radius: 4px;
              margin-top: 20px;
              font-weight: bold;
            }
            .footer {
              background-color: #f7f7f7;
              padding: 20px;
              text-align: center;
              font-size: 12px;
              color: #777;
            }
            .social-links {
              margin: 15px 0;
            }
            .social-link {
              display: inline-block;
              margin: 0 8px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Us!</h1>
            </div>
            
            <div class="content">
              <p>Hello ${name},</p>
              
              <p>Thank you for reaching out to Zenith Studio. We've received your inquiry regarding "${subject}" and a member of our team will get back to you as soon as possible.</p>
              
              <div class="detail-box">
                <p>Here's a summary of your inquiry:</p>
                <div class="detail-item">
                  <span class="detail-label">Service of Interest:</span> ${service_type}
                </div>
                <div class="detail-item">
                  <span class="detail-label">Budget Range:</span> ${price_range}
                </div>
              </div>
              
              <p>If you have any additional information to share or questions in the meantime, please feel free to reply to this email.</p>
              
              <p>We look forward to exploring how we can help with your project!</p>
              
              <a href="https://zenithstudio.com" class="cta-button">Visit Our Website</a>
              
              <p style="margin-top: 30px;">Warm regards,<br>
              The Zenith Studio Team</p>
            </div>
            
            <div class="footer">
              <div class="social-links">
                <a href="https://twitter.com/zenithstudio" class="social-link">Twitter</a>
                <a href="https://instagram.com/zenithstudio" class="social-link">Instagram</a>
                <a href="https://linkedin.com/company/zenithstudio" class="social-link">LinkedIn</a>
              </div>
              <p>&copy; 2025 Zenith Studio. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
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
