"use server";

import { extractTextFromPDF } from "@/lib/pdf";

export async function parseResume(
  file: File
) {
  try {
    const text = await extractTextFromPDF(file);
    return text;
  } catch (error) {
    throw error;
  }
}