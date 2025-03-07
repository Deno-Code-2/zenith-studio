
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
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not found');
    }

    // Create a Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Save user message to database
    const { error: insertError } = await supabase
      .from('chat_messages')
      .insert({
        session_id: sessionId,
        message: message,
        is_user: true
      });
      
    if (insertError) {
      console.error('Error saving user message:', insertError);
    }

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
    - If you don't know the answer to a specific question, suggest contacting us directly
    - Don't make up information that isn't included here
    `;

    // Use OpenAI API to generate a response
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Using a cost-effective and powerful model
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const openAIData = await openAIResponse.json();
    
    if (!openAIData.choices || openAIData.choices.length === 0) {
      throw new Error('Invalid response from OpenAI');
    }
    
    const aiResponse = openAIData.choices[0].message.content;

    // Save AI response to database
    const { error: responseError } = await supabase
      .from('chat_messages')
      .insert({
        session_id: sessionId,
        message: aiResponse,
        is_user: false
      });
      
    if (responseError) {
      console.error('Error saving AI response:', responseError);
    }

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
