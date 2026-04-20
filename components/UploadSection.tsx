"use client";

import { motion } from "framer-motion";
import { UploadCloud, FileText, Link as LinkIcon, BadgeCheck, Zap } from "lucide-react";
import { useState, useRef } from "react";
import { generateIdentity, type IdentityData } from "@/lib/mockGemini";

export default function UploadSection({ onComplete }: { onComplete: (data: IdentityData) => void }) {
  const [status, setStatus] = useState<"idle" | "processing" | "error">("idle");
  const [stepData, setStepData] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processingSteps = [
    "Extracting skills using AI...",
    "Verifying certificates...",
    "Calculating credibility...",
    "Creating decentralized identity...",
  ];

  const handleSimulateUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("processing");

    for (let i = 0; i < processingSteps.length; i++) {
      setStepData(processingSteps[i]);
      await new Promise(r => setTimeout(r, 800));
    }

    try {
      const result = await generateIdentity();
      onComplete(result);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto w-full" id="upload-section">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-zinc-900 tracking-tight">Initialize Your Transformation</h2>
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto">Securely upload your traditional documents. Our AI handles the extraction and formatting instantly without saving your data.</p>
      </div>

      <motion.div 
        className="bg-white border border-black/[0.04] rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {status === "idle" && (
          <form onSubmit={handleSimulateUpload} className="flex flex-col gap-10">
            <div 
              className="border-2 border-dashed border-zinc-200 bg-zinc-50/50 rounded-2xl p-16 flex flex-col items-center justify-center text-center hover:bg-zinc-50 hover:border-purple-300 transition-colors cursor-pointer group"
              onClick={() => fileInputRef.current?.click()}
            >
              <input type="file" className="hidden" ref={fileInputRef} aria-label="Upload Resume" />
              <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <UploadCloud className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3 tracking-tight">Drag & drop your Web2 Identity</h3>
              <p className="text-zinc-500 font-medium mb-8">Supports PDF (Resume), PNG/JPG (Certificate)</p>
              
              <div className="flex items-center gap-6 text-sm font-bold text-zinc-400">
                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-purple-500" /> Resume</div>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
                <div className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-blue-500" /> Certificate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
              <div className="relative flex-1 w-full">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input 
                  type="url" 
                  placeholder="Or paste your LinkedIn URL" 
                  aria-label="LinkedIn URL"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 font-medium transition-all"
                />
              </div>
              <button
                type="submit"
                aria-label="Start Processing"
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-purple-600 text-white font-bold hover:bg-purple-700 transition-colors whitespace-nowrap shadow-md shadow-purple-600/20"
              >
                Launch Magic
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
