import { GoogleGenAI, Type } from "@google/genai";
import { SERVICES } from "./constants";

let ai: GoogleGenAI | null = null;
function getAi(): GoogleGenAI | null {
  if (ai) return ai;
  try {
    const key = typeof process !== "undefined" && process.env?.API_KEY ? process.env.API_KEY : (import.meta.env?.VITE_GEMINI_API_KEY ?? "");
    if (!key) return null;
    ai = new GoogleGenAI({ apiKey: key });
    return ai;
  } catch {
    return null;
  }
}

export const getBeautyAdvice = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `L'utilisateur demande : "${userQuery}".
      En tant qu'assistant expert de l'institut Bianco Esthétique à Hyères, réponds de manière douce, professionnelle et concise.
      Base-toi sur nos prestations : ${SERVICES.map(s => s.name).join(", ")}. 
      Si la demande concerne le drainage, mentionne la méthode brésilienne. 
      Invite toujours poliment à prendre rendez-vous sur Planity si le soin semble correspondre.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Je suis désolée, je rencontre une petite difficulté technique. N'hésitez pas à nous appeler directement au 07 49 96 76 91 !";
  }
};

export interface WellnessTip {
  title: string;
  content: string;
}

const FALLBACK_TIPS: WellnessTip[] = [
  { title: "Hydratation Profonde", content: "Buvez un verre d'eau citronnée tiède chaque matin pour purifier votre teint de l'intérieur." },
  { title: "Sommeil Réparateur", content: "Privilégiez une taie d'oreiller en soie pour protéger vos cils et limiter les marques de fatigue." },
  { title: "Massage Facial", content: "Accordez-vous 2 minutes de massage ascendant lors de votre routine du soir pour stimuler la circulation." },
  { title: "Rituel Détente", content: "Pratiquez la respiration ventrale 5 minutes avant de dormir pour apaiser votre système nerveux." }
];

export const getWellnessTips = async (): Promise<WellnessTip[]> => {
  const client = getAi();
  if (!client) return FALLBACK_TIPS;
  try {
    const response = await client.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Génère 4 conseils de bien-être et beauté courts, précieux et actionnables pour les clientes d'un institut de beauté haut de gamme. Les conseils doivent porter sur l'hydratation, le sommeil, le soin de la peau ou la relaxation. Format JSON uniquement : une liste d'objets avec les clés 'title' (max 5 mots) et 'content' (max 20 mots).",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              content: { type: Type.STRING },
            },
            required: ["title", "content"],
          },
        },
      },
    });

    const text = response.text;
    if (text) {
      return JSON.parse(text);
    }
    return [];
  } catch (error) {
    console.error("Error generating wellness tips:", error);
    return [
      { title: "Hydratation Profonde", content: "Buvez un verre d'eau citronnée tiède chaque matin pour purifier votre teint de l'intérieur." },
      { title: "Sommeil Réparateur", content: "Privilégiez une taie d'oreiller en soie pour protéger vos cils et limiter les marques de fatigue." },
      { title: "Massage Facial", content: "Accordez-vous 2 minutes de massage ascendant lors de votre routine du soir pour stimuler la circulation." },
      { title: "Rituel Détente", content: "Pratiquez la respiration ventrale 5 minutes avant de dormir pour apaiser votre système nerveux." }
    ];
  }
};
