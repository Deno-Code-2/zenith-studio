
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string
  email: string
  subject: string
  price_range: string
  service_type: string
  message: string
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const formData: ContactFormData = await req.json()
    
    const { data, error } = await resend.emails.send({
      from: 'Zenith Studio <onboarding@resend.dev>',
      to: ['your-email@example.com'], // Replace with your email
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Price Range:</strong> ${formData.price_range}</p>
        <p><strong>Service Type:</strong> ${formData.service_type}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `
    })

    if (error) {
      throw error
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
