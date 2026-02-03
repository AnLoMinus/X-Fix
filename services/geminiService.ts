import { GoogleGenAI } from "@google/genai";

// Initialize client securely using process.env.API_KEY directly as per guidelines.
// Assume process.env.API_KEY is pre-configured and valid.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAiSolution = async (problem: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are X-Fix, an expert troubleshooter for all life's problems. 
      Provide a concise, step-by-step solution for the following problem: "${problem}".
      
      Format the output in clear steps. 
      Keep the tone professional, helpful, and direct.
      If the problem involves health, add a disclaimer to consult a doctor.`,
      config: {
        // Guidelines: Avoid setting maxOutputTokens if not required.
        // Gemini 3 models are thinking models; setting maxOutputTokens without thinkingBudget is incorrect.
        temperature: 0.7,
      }
    });

    return response.text || "Could not generate a solution at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI Fixer. Please try again later.";
  }
};