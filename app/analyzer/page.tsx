"use client";

import { parseResume } from "@/actions/pdfparser";
import { ChangeEvent, useState } from "react";

export default function Analyzer() {
  const [pdf, setPdf] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      setError("Please select a valid PDF file.");
      setPdf(null);
      return;
    }

    setError(null);
    setPdf(selectedFile);

    const text = await parseResume(selectedFile);

    console.log(text);
  };

  return (
    <div>
      <label htmlFor="pdf-upload">
        Upload Your PDF
      </label>

      <br />

      <input
        type="file"
        id="pdf-upload"
        accept=".pdf"
        className="p-6 border rounded-xl"
        onChange={handleFileChange}
      />

      {error && (
        <p className="text-red-500">{error}</p>
      )}

      {pdf && (
        <div className="mt-2">
          <p>
            Selected File:
            <strong> {pdf.name}</strong>
          </p>

          <p>
            Size:
            {(pdf.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      )}
    </div>
  );
}