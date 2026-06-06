"use server";

import { extractTextFromPDF } from "@/lib/pdf";

export async function parseResume(
  file: File
) {
  try {
    const text = await extractTextFromPDF(file);
    console.log(text);
    return text;
  } catch (error) {
    console.log(error)
    throw error;
  }
}