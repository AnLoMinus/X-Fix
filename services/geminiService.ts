import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client securely
// Note: In a production environment, requests should be proxied through a backend to protect the API key.
// For this frontend-only demo, we use the env variable directly.
const ai = new GoogleGenAI({ apiKey });

export const generateAiSolution = async (problem: string): Promise<string> => {
  if (!apiKey) {
    return "Error: API Key is missing. Please configure the environment variable.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are X-Fix, an expert troubleshooter for all life's problems. 
      Provide a concise, step-by-step solution for the following problem: "${problem}".
      
      Format the output in clear steps. 
      Keep the tone professional, helpful, and direct.
      If the problem involves health, add a disclaimer to consult a doctor.`,
      config: {
        maxOutputTokens: 500,
        temperature: 0.7,
      }
    });

    return response.text || "Could not generate a solution at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI Fixer. Please try again later.";
  }
};
