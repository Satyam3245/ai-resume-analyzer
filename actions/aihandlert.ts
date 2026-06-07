"use server";
import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});
export async function AI_SDK(prompt : string) : Promise <string | undefined | null>{
    
    try {
        const response = await ai.models.generateContent({
            model : 'gemini-2.5-flash-lite',
            contents : [{
                parts : [{
                    text : prompt
                }]
            }]
        });
        return response.text;
    } catch (error) {
        console.log("error while calling gemmini",error);
        return null;
    }

} 