"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import UploadSection from "@/components/UploadSection";
import Comparison from "@/components/Comparison";
import IdentityCard from "@/components/IdentityCard";
import JobFitAnalyzer from "@/components/JobFitAnalyzer";
import { type AdvancedIdentityData } from "@/lib/mockGemini";

export default function Home() {
  const [sessionData, setSessionData] = useState<AdvancedIdentityData | null>(null);

  const scrollToUpload = () => {
    document.getElementById("upload-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleUploadComplete = (data: AdvancedIdentityData) => {
    setSessionData(data);
    setTimeout(() => {
      document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-[#ffffff] text-zinc-900 selection:bg-purple-500/20 font-sans">
      <Hero onGetStarted={scrollToUpload} />
      
      <div className="relative">
        <Comparison />
        
        <div className="pb-32 relative z-10">
          <UploadSection onComplete={handleUploadComplete} />
          
          {sessionData && (
            <div id="results-section" className="mt-12 animate-in fade-in slide-in-from-bottom-10 duration-700 space-y-8">
              <JobFitAnalyzer review={sessionData.review} />
              <div className="text-center mt-12 mb-4">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-400">Generated Proof Profile</h3>
              </div>
              <IdentityCard data={sessionData.profile} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
