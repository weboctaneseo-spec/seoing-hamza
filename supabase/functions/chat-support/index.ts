import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation constants
const MAX_MESSAGES = 50;
const MAX_MESSAGE_LENGTH = 2000;
const VALID_ROLES = ["user", "assistant"];

interface ChatMessage {
  role: string;
  content: string;
}

function validateMessages(messages: unknown): { valid: boolean; error?: string; sanitized?: ChatMessage[] } {
  // Check if messages is an array
  if (!Array.isArray(messages)) {
    return { valid: false, error: "Messages must be an array" };
  }

  // Check array length
  if (messages.length === 0) {
    return { valid: false, error: "Messages array cannot be empty" };
  }

  if (messages.length > MAX_MESSAGES) {
    return { valid: false, error: `Too many messages. Maximum allowed: ${MAX_MESSAGES}` };
  }

  const sanitized: ChatMessage[] = [];

  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];

    // Check message structure
    if (typeof msg !== "object" || msg === null) {
      return { valid: false, error: `Message at index ${i} must be an object` };
    }

    // Check required fields
    if (typeof msg.role !== "string" || typeof msg.content !== "string") {
      return { valid: false, error: `Message at index ${i} must have 'role' and 'content' string fields` };
    }

    // Validate role
    if (!VALID_ROLES.includes(msg.role)) {
      return { valid: false, error: `Invalid role at index ${i}. Must be one of: ${VALID_ROLES.join(", ")}` };
    }

    // Check content length
    if (msg.content.length > MAX_MESSAGE_LENGTH) {
      return { valid: false, error: `Message content at index ${i} exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters` };
    }

    // Sanitize and add to result (trim whitespace)
    sanitized.push({
      role: msg.role,
      content: msg.content.trim(),
    });
  }

  return { valid: true, sanitized };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate body structure
    if (typeof body !== "object" || body === null || !("messages" in body)) {
      return new Response(JSON.stringify({ error: "Request body must contain 'messages' field" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate and sanitize messages
    const validation = validateMessages((body as { messages: unknown }).messages);
    if (!validation.valid) {
      return new Response(JSON.stringify({ error: validation.error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const messages = validation.sanitized!;
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with messages:", messages.length);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: `You are a helpful customer support assistant for TaxFiler Pakistan, a professional tax filing service for overseas Pakistanis. 

Your role is to:
- Answer questions about Pakistani tax filing, NTN registration, FBR compliance, and tax deadlines
- Explain services including income tax returns, sales tax registration, wealth statements, and company registration
- Provide information about pricing (starting from PKR 5,000 for basic returns)
- Help with common tax questions for overseas Pakistanis
- Guide users to contact via WhatsApp (+92 300 1234567) for complex queries or to book consultations

Key information:
- Tax filing deadline in Pakistan is typically September 30th each year
- Non-resident Pakistanis still need to file returns if they have Pakistani income or assets
- NTN (National Tax Number) is required for tax filing
- Active Taxpayer List (ATL) status provides reduced withholding tax rates

Be friendly, professional, and concise. If you don't know something specific, suggest contacting the team directly.`
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "Failed to get response from AI" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response from AI gateway");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat support error:", error);
    return new Response(JSON.stringify({ error: "An unexpected error occurred" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
