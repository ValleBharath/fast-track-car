import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getCarCareAdvice(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert automotive advisor for Fast Track Car Care. 
      Provide accurate, helpful, and professional advice about: ${query}. 
      Use your search grounding to provide the most up-to-date information. 
      Keep the tone professional yet approachable.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    return {
      text: response.text,
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map(chunk => ({
        title: chunk.web?.title,
        uri: chunk.web?.uri
      })).filter(s => s.title && s.uri) || []
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "I'm sorry, I couldn't retrieve that information right now. Please try again later.",
      sources: []
    };
  }
}
