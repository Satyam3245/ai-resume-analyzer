"use server";
import { LLM_Prompt } from '@/lib/prompt';
import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});
export async function AI_SDK(text:string) : Promise <string | undefined | null>{
    const combinedPrompt = LLM_Prompt.replace('{{MY_PERSONAL_INFO}}',text);    
    try {
        const response = await ai.models.generateContent({
            model : 'gemini-2.5-flash-lite',
            contents : [{
                parts : [{
                    text : combinedPrompt
                }]
            }]
        });

        return response.text;
    } catch (error) {
        console.log("error while calling gemmini",error);
        return null;
    }


} 


export async function JOB_SDK(){
    try {
        
    } catch (error) {
        
    }
}