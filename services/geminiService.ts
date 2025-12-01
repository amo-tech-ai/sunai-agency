import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: In a real production environment, ensure your API key is secure.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateBrief = async (userIdea: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key is missing. Please configure the environment variable.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are an expert Senior Product Manager at a top-tier AI Agency called "Sunai".
      A client has just approached you with the following idea: "${userIdea}".
      
      Please generate a concise, professional Project Brief in Markdown format.
      Include the following sections:
      1. **Executive Summary**: 1-2 sentences clarifying the vision.
      2. **Core Features**: A bulleted list of 3-5 MVP features.
      3. **Target Audience**: Who is this for?
      4. **Suggested Tech Stack**: Recommend modern AI tools (e.g., Gemini, React, Vector DB).
      
      Keep the tone professional, inspiring, and concise (under 200 words).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Speed over deep reasoning for this quick UI task
      }
    });

    return response.text || "Failed to generate brief.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, we encountered an error generating your brief. Please try again later.";
  }
};
