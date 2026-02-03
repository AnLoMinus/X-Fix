// Gemini client usage is server-side only. Avoid instantiating the client at module load time
// because importing this module in the browser would attempt to create a client and fail
// when an API key is not available (causing the runtime error observed).

export const isAiAvailable = Boolean(process.env.API_KEY);

export const generateAiSolution = async (problem: string): Promise<string> => {
  try {
    // Prevent client instantiation / network calls from running in the browser.
    if (typeof window !== 'undefined') {
      console.warn('Gemini generation requested in browser without a server API key.');
      throw new Error('AI generation is disabled in the browser. Please configure a server-side API key or use a backend endpoint.');
    }

    if (!process.env.API_KEY) {
      console.error('Missing server API key for Gemini generation.');
      throw new Error('Missing server API key for AI generation.');
    }

    // Lazy-load the package on the server to avoid shipping the client code to browsers
    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are X-Fix, an expert troubleshooter for all life's problems. 
      Provide a concise, step-by-step solution for the following problem: "${problem}".
      
      Format the output in clear steps. 
      Keep the tone professional, helpful, and direct.
      If the problem involves health, add a disclaimer to consult a doctor.`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Could not generate a solution at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI Fixer. Please try again later.";
  }
};