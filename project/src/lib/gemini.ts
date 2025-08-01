import { GoogleGenerativeAI } from "@google/generative-ai";

//Gemini API KEY
const genAI = new GoogleGenerativeAI('AIzaSyCyEVylRAyqGqUEbg8tpzyNweLvAa3QN0I');

export async function getFunnyAstroFact(name: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemma-3-1b-it" });

    const prompt = `Generate one short, funny, and slightly humiliating fake astrological fact about a person named ${name}. 
    Keep it under 20 words. It must sound mystical but be clearly useless.`;

     const result = await model.generateContent(prompt);

    // Try safe extraction
    const text = result.response?.text?.() 
              || result.response?.candidates?.[0]?.content?.parts?.[0]?.text 
              || "The stars are silent on this one.";

    return text.trim();
  } catch (error) {
    console.error("Gemini error:", error);
    return "The stars refuse to comment on your destiny today.";
  }
}