"use client";
import { AI_SDK } from "@/actions/aihandlert";
import { parseResume } from "@/actions/pdfparser";
import { LLM_Prompt } from "@/lib/prompt";
import { ChangeEvent, useState } from "react";

export default function Analyzer() {
  const [pdf, setPdf] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string|null>(null);
  const [resumeText,setResumetext] = useState<string|null>("");
  // The result will come in """ """ this format so split this and store in the array and
  // map in the DOM
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
    const text = await parseResume(selectedFile);
    setResumetext(text);
    // what can i do this send to this user and let a user to sent to the AI cal and then
    // render the ai response
    const combinedPrompt = LLM_Prompt.replace('{{MY_PERSONAL_INFO}}',text);
    const aiResponse = await AI_SDK(combinedPrompt);
    if(typeof aiResponse === "string"){
      setResult(aiResponse);
    }else {
      setError("Error Occured in AI Side");
    }
    setError(null);
    setPdf(selectedFile);
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

      {result && (
        <div className="mt-2">
            <p className="text-blue-500">
              {result}
            </p>
        </div>
      )}
    </div>
  );
}