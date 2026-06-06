import { PdfReader } from "pdfreader";

export async function extractTextFromPDF(file: File): Promise<string> {
  const buffer = Buffer.from(
    await file.arrayBuffer()
  );

  return new Promise((resolve, reject) => {
    let text = "";

    new PdfReader().parseBuffer(
      buffer,
      (err, item) => {
        if (err) {
          reject(err);
          return;
        }

        if (!item) {
          resolve(text);
          return;
        }

        if (item.text) {
          text += item.text;
        }
      }
    );
  });
}