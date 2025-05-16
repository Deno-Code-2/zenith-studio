
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.36.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, sessionId } = await req.json();
    const groqApiKey = Deno.env.get('GROQ_API_KEY');
    
    if (!groqApiKey) {
      throw new Error('Groq API key not found');
    }

    // Create a Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get user country from request headers if available
    const countryHeader = req.headers.get('x-country') || 'unknown';

    // System prompt with information about the website
    const systemPrompt = `
    You are a helpful AI assistant for Zenith Studio, a digital agency. Your role is to provide information about our agency and services.
    
    About Zenith Studio:
    - We are a digital agency specializing in web development, UI/UX design, and digital marketing solutions
    - We create modern, responsive, and user-friendly websites and applications
    - We offer services including web development, UI/UX design, digital marketing, and SaaS development
    
    Services Information:
    - Web Development: Custom websites and web applications using modern technologies
    - UI/UX Design: Creating user-centered designs that are both beautiful and functional
    - Digital Marketing: SEO, content marketing, and social media strategies
    - SaaS Development: Building sustainable SaaS products from concept to launch
    
    Projects:
    - We have completed numerous successful projects across various industries
    - Our portfolio showcases our work in e-commerce, SaaS, corporate websites, and mobile applications
    
    Pricing:
    - We offer flexible pricing options based on project requirements
    - Typically our pricing starts at $5,000 for basic websites and scales based on complexity
    
    Blog:
    - We regularly publish articles about web development, design trends, marketing strategies, and agency operations
    - Our blog provides valuable insights for both clients and fellow industry professionals
    
    Important:
    - Only answer questions about Zenith Studio and its services
    - Respond in a friendly, professional tone
    - Keep responses concise but informative
    - If you don't know the answer to a specific question, suggest contacting us directly through our "Request Quote" form
    - Don't make up information that isn't included here
    
    The user is visiting from country: ${countryHeader}
    If the user is from the USA, emphasize our US-based support team and mention our offices in major US tech hubs.
    `;

    // Use Groq API to generate a response
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192', // Using Llama 3 8B model for good performance
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    const groqData = await groqResponse.json();
    
    if (!groqData.choices || groqData.choices.length === 0) {
      throw new Error('Invalid response from Groq');
    }
    
    const aiResponse = groqData.choices[0].message.content;

    // Save AI response to database
    await supabase
      .from('chatbot_interactions')
      .insert({
        session_id: sessionId,
        message: aiResponse,
        is_user: false,
        location: countryHeader, // Store the user's country
      });

    // Return the AI response to the client
    return new Response(JSON.stringify({ response: aiResponse }), { 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error in chatbot function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
