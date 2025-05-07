import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateResponse = async (messages: any[]) => {
  try {
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

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
};