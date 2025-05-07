import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful AI assistant for a software development portfolio website. 
          Your main tasks are:
          1. Help potential clients understand the types of projects we can build
          2. Gather requirements for their project ideas
          3. Explain our development process
          4. Discuss technology choices
          5. Provide rough estimates for project timelines
          
          Be professional but friendly. Ask follow-up questions to better understand their needs.
          Focus on web development, mobile apps, and enterprise software solutions.`
        },
        ...messages
      ],
    });

    // Store the conversation in Supabase
    await supabase.from('conversations').insert({
      messages: messages,
      response: completion.choices[0].message.content
    });

    return new Response(
      JSON.stringify({ message: completion.choices[0].message.content }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}