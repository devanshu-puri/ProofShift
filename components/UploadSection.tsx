"use client";

import { motion } from "framer-motion";
import { UploadCloud, FileText, Link as LinkIcon, BadgeCheck, Zap, Briefcase } from "lucide-react";
import { useState, useRef } from "react";
import { generateIdentityAndReview, type AdvancedIdentityData } from "@/lib/mockGemini";

export default function UploadSection({ onComplete }: { onComplete: (data: AdvancedIdentityData) => void }) {
  const [status, setStatus] = useState<"idle" | "processing" | "error">("idle");
  const [stepData, setStepData] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const processingSteps = [
    "Parsing resume capabilities...",
    "Running contextual job match...",
    "Calculating credibility matrix...",
    "Finalizing advanced identity node...",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setErrorMsg("Validation Error: Please upload your resume strictly as a PDF.");
      return;
    }

    setResumeFile(file);
    setErrorMsg("");
  };

  const isUrlValid = linkedinUrl.length === 0 || linkedinUrl.includes("linkedin.com/");
  const canSubmit = resumeFile !== null && isUrlValid;

  const handleSimulateUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("processing");

    for (let i = 0; i < processingSteps.length; i++) {
      setStepData(processingSteps[i]);
      await new Promise(r => setTimeout(r, 800));
    }

    try {
      const result = await generateIdentityAndReview({
        resumeName: resumeFile.name,
        linkedinUrl,
        jobDescription
      });
      onComplete(result);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto w-full" id="upload-section">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-zinc-900 tracking-tight">Initialize Your Transformation</h2>
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto">Securely upload your traditional documents. Our AI handles the extraction, matches against job roles, and builds your Web3 roadmap instantly.</p>
      </div>

      <motion.div 
        className="bg-white border border-black/[0.04] rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {status === "idle" && (
          <form onSubmit={handleSimulateUpload} className="flex flex-col gap-10">
            
            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl font-medium text-sm text-center">
                {errorMsg}
              </div>
            )}

            <div 
              className={`border-2 border-dashed ${resumeFile ? 'border-purple-400 bg-purple-50/50' : 'border-zinc-200 bg-zinc-50/50'} rounded-2xl p-16 flex flex-col items-center justify-center text-center hover:bg-zinc-50 hover:border-purple-300 transition-colors cursor-pointer group`}
              onClick={() => fileInputRef.current?.click()}
            >
              <input type="file" className="hidden" ref={fileInputRef} aria-label="Upload Resume" accept=".pdf" onChange={handleFileChange} />
              <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                {resumeFile ? <FileText className="w-10 h-10 text-purple-600" /> : <UploadCloud className="w-10 h-10 text-purple-600" />}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2 tracking-tight">
                {resumeFile ? "Resume Attached Successfully!" : "Drag & drop your Web2 Identity"}
              </h3>
              <p className="text-zinc-500 font-medium mb-6">
                {resumeFile ? resumeFile.name : "Supports strictly PDF (Resume requirements enforced)"}
              </p>
              
              {!resumeFile && (
                <div className="flex items-center gap-6 text-sm font-bold text-zinc-400">
                  <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-purple-500" /> Web2 Resumes</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
                  <div className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-blue-500" /> Portfolios</div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="relative flex-1 w-full">
                <LinkIcon className={`absolute left-4 top-5 w-5 h-5 ${!isUrlValid ? 'text-red-400' : 'text-zinc-400'}`} />
                <input 
                  type="url" 
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="Paste your LinkedIn URL (Optional)" 
                  aria-label="LinkedIn URL"
                  className={`w-full bg-zinc-50 border ${!isUrlValid ? 'border-red-300 focus:ring-red-500/10 focus:border-red-500' : 'border-zinc-200 focus:ring-purple-500/10 focus:border-purple-500'} rounded-2xl h-14 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-4 font-medium transition-all`}
                />
                {!isUrlValid && linkedinUrl.length > 0 && (
                  <span className="text-xs text-red-500 font-bold mt-2 block pl-2">URL must contain &quot;linkedin.com/&quot;</span>
                )}
              </div>
            </div>

            <div className="relative w-full">
              <Briefcase className="absolute left-4 top-5 w-5 h-5 text-zinc-400" />
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste Target Job Description (Optional but recommended for analysis)"
                aria-label="Job Description"
                rows={4}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 font-medium transition-all resize-y"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!canSubmit}
                aria-label="Start Processing"
                className={`px-10 py-4 rounded-2xl font-bold whitespace-nowrap transition-colors shadow-md ${canSubmit ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-purple-600/20' : 'bg-zinc-200 text-zinc-400 cursor-not-allowed shadow-none'}`}
              >
                Launch Magic & Review
              </button>
            </div>
          </form>
        )}

        {status === "processing" && (
          <div className="py-20 flex flex-col items-center justify-center">
            <div className="w-24 h-24 relative mb-10">
              <div className="absolute inset-0 border-[6px] border-zinc-100 rounded-full" />
              <motion.div 
                className="absolute inset-0 border-[6px] border-transparent border-t-purple-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <Zap className="w-10 h-10 text-purple-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="h-10 flex items-center justify-center overflow-hidden">
              <motion.p
                key={stepData}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="text-2xl font-bold text-zinc-900 tracking-tight"
              >
                {stepData}
              </motion.p>
            </div>

            <div className="w-full max-w-md h-3 bg-zinc-100 rounded-full mt-8 overflow-hidden">
              <motion.div 
                className="h-full bg-purple-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="py-12 text-center text-red-500 font-medium">
            <p>An error occurred while shifting identity. Please try again.</p>
            <button onClick={() => setStatus("idle")} className="mt-4 text-purple-600 font-bold hover:underline">Reset flow</button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
