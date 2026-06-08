"use client";
import { AI_SDK } from "@/actions/aihandlert";
import { parseResume } from "@/actions/pdfparser";
import InfoSection from "@/components/info";
import { LLM_Prompt } from "@/lib/prompt";
import { ChangeEvent, useState } from "react";
import { FileUp, Send } from 'lucide-react'

export default function Analyzer() {
  const [pdf, setPdf] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string|null>(null);
  const [resumeText,setResumeText] = useState<string|null>("");

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
    setPdf(selectedFile);
    setResumeText(text);
  };

  async function AI_HANDLER(text:string){
    const combinedPrompt = LLM_Prompt.replace('{{MY_PERSONAL_INFO}}',text);
    const aiResponse = await AI_SDK(combinedPrompt);
    if(typeof aiResponse === "string"){
      setResult(aiResponse);
    }else {
      setError("Error Occured in AI Side");
    }
  }


  return (
    <div>
      {!resumeText && (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="w-full max-w-3xl rounded-3xl border border-blue-500/20 bg-zinc-900/80 backdrop-blur-lg shadow-2xl shadow-blue-500/10 p-8">

          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-4">
              <FileUp className="w-8 h-8 text-blue-400" />
            </div>

            <h1 className="text-4xl font-bold text-white mb-3">
              Resume Analyzer
            </h1>

            <p className="text-zinc-400 max-w-lg mx-auto">
              Upload your resume and get AI-powered insights, feedback, and answers to your questions.
            </p>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-zinc-300">
              Upload PDF Resume
            </label>

            <label className="group flex items-center justify-center w-full p-10 border-2 border-dashed border-zinc-700 rounded-2xl cursor-pointer transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/5">
              <div className="flex flex-col items-center">

                <div className="p-4 rounded-full bg-blue-500/10 mb-4 group-hover:scale-110 transition-transform">
                  <FileUp className="w-10 h-10 text-blue-400" />
                </div>

                {pdf ? (
                  <>
                    <span className="text-blue-400 font-semibold text-lg">
                      {pdf.name}
                    </span>

                    <p className="text-zinc-500 text-sm mt-2">
                      Ready to analyze
                    </p>
                  </>
                ) : (
                  <>
                    <span className="text-white font-medium">
                      Click to upload or drag & drop
                    </span>

                    <p className="text-zinc-500 text-sm mt-2">
                      PDF files only
                    </p>
                  </>
                )}
              </div>

              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {pdf && (
            <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
              <p className="text-white">
                <span className="text-zinc-400">File:</span>{" "}
                <span className="font-semibold text-blue-400">
                  {pdf.name}
                </span>
              </p>

              <p className="text-zinc-400 text-sm mt-1">
                Size: {(pdf.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}

          <div className="mt-8">
            <InfoSection />
          </div>
        </div>
      </div>
      )}

      {error && (
        <p className="text-red-500">{error}</p>
      )}

      {resumeText && (
        <div className="max-w-4xl mx-auto">
          {pdf && (
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-blue-500/20 bg-zinc-900 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                📄
              </div>

              <div className="flex-1 overflow-hidden">
                <p className="text-sm text-zinc-400">
                  Resume Uploaded
                </p>

                <p className="truncate font-medium text-white">
                  {pdf.name}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-zinc-500">
                  File Size
                </p>

                <p className="text-sm font-semibold text-blue-400">
                  {(pdf.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              AI_HANDLER(resumeText);
            }}
            className="flex flex-col gap-4 mt-6"
          >
           <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Resume content..."
              rows={15}
              className="
                w-full
                min-h-[400px]
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-700
                text-white
                resize-y
                overflow-y-auto
                focus:outline-none
                focus:border-blue-500
              "
            />

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
            >
              Analyze
            </button>
          </form>

          {result && (
            <div className="mt-6 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-200">
              {result}
            </div>
          )}
        </div>
      )}
      
    </div>
  );
}