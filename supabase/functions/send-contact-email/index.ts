
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
      // Enhanced Email to the site owner/admin with more modern SaaS appearance
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
              font-family: 'Inter', 'Segoe UI', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container {
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            }
            .header {
              background: linear-gradient(to right, #E46534, #F97F51);
              padding: 30px 20px;
              text-align: center;
            }
            .logo {
              margin-bottom: 15px;
            }
            .header h1 {
              color: white;
              margin: 0;
              font-size: 24px;
              font-weight: 700;
            }
            .content {
              padding: 30px 25px;
              background-color: #ffffff;
            }
            .info-box {
              background-color: #fafafa;
              border-radius: 8px;
              padding: 20px;
              margin-bottom: 25px;
              border-left: 4px solid #E46534;
            }
            .project-details {
              margin-top: 10px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
            }
            .detail-item {
              background-color: #ffffff;
              border-radius: 6px;
              padding: 12px 15px;
              border: 1px solid #eee;
            }
            .label {
              font-weight: 600;
              color: #E46534;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
              display: block;
            }
            .value {
              font-size: 15px;
              color: #444;
              word-break: break-word;
            }
            .message-box {
              background-color: #ffffff;
              border: 1px solid #eee;
              padding: 20px;
              margin-top: 20px;
              border-radius: 8px;
            }
            .message-content {
              white-space: pre-line;
              line-height: 1.6;
              color: #333;
            }
            .footer {
              text-align: center;
              padding: 20px;
              background-color: #fafafa;
              font-size: 13px;
              color: #777;
              border-top: 1px solid #eee;
            }
            .cta-button {
              display: inline-block;
              background: linear-gradient(to right, #E46534, #F97F51);
              color: white;
              text-decoration: none;
              padding: 12px 25px;
              border-radius: 6px;
              font-weight: 600;
              margin-top: 15px;
              text-align: center;
            }
            .priority-badge {
              display: inline-block;
              background-color: #E46534;
              color: white;
              font-size: 11px;
              font-weight: 600;
              padding: 4px 10px;
              border-radius: 20px;
              margin-top: 10px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">
                <img src="https://i.ibb.co/gjbL3xQ/Zenith-Studio.png" alt="Zenith Studio" width="120" height="auto" />
              </div>
              <h1>New Project Inquiry</h1>
            </div>
            
            <div class="content">
              <p>You've received a new inquiry from your website contact form:</p>
              
              <div class="info-box">
                <div class="label">Client Name</div>
                <div class="value">${name}</div>
                <div style="margin-top:15px;">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}" style="color:#E46534; text-decoration:none;">${email}</a></div>
                </div>
                <div style="margin-top:15px;">
                  <div class="label">Subject</div>
                  <div class="value">${subject}</div>
                </div>
                
                <div class="project-details">
                  <div class="detail-item">
                    <div class="label">Budget Range</div>
                    <div class="value">${price_range}</div>
                  </div>
                  <div class="detail-item">
                    <div class="label">Service Type</div>
                    <div class="value">${service_type}</div>
                  </div>
                </div>
                
                <div class="priority-badge">New Lead</div>
              </div>
              
              <div class="message-box">
                <h3 style="margin-top:0; color:#333; font-size:18px;">Client Message:</h3>
                <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <p style="margin-top:25px;">We recommend responding to this inquiry within 24 hours for the best conversion rates.</p>
              
              <a href="mailto:${email}?subject=Re: ${subject}" class="cta-button">Reply Now</a>
            </div>
            
            <div class="footer">
              <p>This is an automated message from your <strong>Zenith Studio</strong> website.</p>
              <p style="margin:5px 0 0;">© 2025 Zenith Studio. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `;
    } else {
      // Enhanced Confirmation email to the user with more modern SaaS appearance
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
              font-family: 'Inter', 'Segoe UI', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container {
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            }
            .header {
              background: linear-gradient(to right, #E46534, #F97F51);
              padding: 30px 20px;
              text-align: center;
            }
            .logo {
              margin-bottom: 15px;
            }
            .header h1 {
              color: white;
              margin: 0;
              font-size: 24px;
              font-weight: 700;
            }
            .header p {
              color: rgba(255,255,255,0.9);
              margin: 10px 0 0;
              font-size: 16px;
            }
            .content {
              padding: 30px 25px;
              background-color: #ffffff;
            }
            .message {
              background-color: #fafafa;
              border-radius: 8px;
              padding: 25px;
              margin-bottom: 25px;
              border-left: 4px solid #E46534;
            }
            .project-details {
              margin-top: 20px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
            }
            .detail-item {
              background-color: #ffffff;
              border-radius: 6px;
              padding: 15px;
              border: 1px solid #eee;
            }
            .detail-label {
              font-weight: 600;
              color: #E46534;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
              display: block;
            }
            .detail-value {
              font-size: 15px;
              color: #444;
            }
            .footer {
              text-align: center;
              padding: 25px 20px;
              background-color: #fafafa;
              font-size: 13px;
              color: #777;
              border-top: 1px solid #eee;
            }
            .cta-button {
              display: inline-block;
              background: linear-gradient(to right, #E46534, #F97F51);
              color: white;
              text-decoration: none;
              padding: 12px 25px;
              border-radius: 6px;
              font-weight: 600;
              margin-top: 15px;
              text-align: center;
            }
            .steps {
              margin: 25px 0;
              padding: 0;
            }
            .step {
              display: flex;
              align-items: flex-start;
              margin-bottom: 15px;
            }
            .step-number {
              background-color: #E46534;
              color: white;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              flex-shrink: 0;
              margin-right: 15px;
              margin-top: 2px;
            }
            .step-content {
              flex: 1;
            }
            .step-title {
              font-weight: 600;
              color: #333;
              margin-bottom: 5px;
            }
            .social-links {
              margin: 20px 0 10px;
            }
            .social-link {
              display: inline-block;
              margin: 0 8px;
              color: #777;
              text-decoration: none;
              font-weight: 600;
            }
            .social-link:hover {
              color: #E46534;
            }
            .divider {
              height: 1px;
              background-color: #eee;
              margin: 25px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">
                <img src="https://i.ibb.co/gjbL3xQ/Zenith-Studio.png" alt="Zenith Studio" width="120" height="auto" />
              </div>
              <h1>Thanks for reaching out!</h1>
              <p>We've received your inquiry</p>
            </div>
            
            <div class="content">
              <div class="message">
                <p>Hello ${name},</p>
                <p>Thank you for getting in touch with Zenith Studio. We've received your project inquiry about <strong>${subject}</strong>.</p>
                <p><strong>Our team will respond within 48 hours</strong> to discuss your project in detail.</p>
              </div>
              
              <h3 style="margin-top:30px; color:#333; font-size:18px;">What happens next?</h3>
              
              <ol class="steps">
                <li class="step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <div class="step-title">Initial Review</div>
                    <p style="margin:0; color:#666;">Our team will review your project requirements.</p>
                  </div>
                </li>
                <li class="step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <div class="step-title">Consultation Call</div>
                    <p style="margin:0; color:#666;">We'll schedule a call to discuss your project in detail.</p>
                  </div>
                </li>
                <li class="step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <div class="step-title">Proposal & Planning</div>
                    <p style="margin:0; color:#666;">We'll create a customized proposal based on your needs.</p>
                  </div>
                </li>
              </ol>
              
              <div class="divider"></div>
              
              <h3 style="margin-top:0; color:#333; font-size:18px;">Your Project Details</h3>
              <div class="project-details">
                <div class="detail-item">
                  <span class="detail-label">Service Type</span>
                  <span class="detail-value">${service_type}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Budget Range</span>
                  <span class="detail-value">${price_range}</span>
                </div>
              </div>
              
              <a href="https://zenithstudio.com/portfolio" class="cta-button">View Our Portfolio</a>
            </div>
            
            <div class="footer">
              <div class="social-links">
                <a href="https://twitter.com/zenithstudio" class="social-link">Twitter</a>
                <a href="https://instagram.com/zenithstudio" class="social-link">Instagram</a>
                <a href="https://linkedin.com/company/zenithstudio" class="social-link">LinkedIn</a>
              </div>
              <p style="margin:15px 0 5px;">© 2025 Zenith Studio. All rights reserved.</p>
              <p style="margin:5px 0 0; font-size:12px; color:#999;">If you didn't submit this request, please ignore this email.</p>
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
