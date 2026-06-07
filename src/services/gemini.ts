const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

export const getGeminiResponse = async (prompt: string, context: string) => {
  if (!API_KEY || API_KEY === "YOUR_GEMINI_API_KEY") {
    throw new Error("API Key not configured");
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are Ananya Chaurasia's Professional AI Assistant.
            Context about Ananya: ${context}.
            User Question: ${prompt}.
            Answer professionally and concisely as if you are representing her.`
          }]
        }]
      })
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
