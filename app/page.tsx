"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import UploadSection from "@/components/UploadSection";
import Comparison from "@/components/Comparison";
import IdentityCard from "@/components/IdentityCard";
import { type IdentityData } from "@/lib/mockGemini";

export default function Home() {
  const [identityData, setIdentityData] = useState<IdentityData | null>(null);

  const scrollToUpload = () => {
    document.getElementById("upload-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleUploadComplete = (data: IdentityData) => {
    setIdentityData(data);
    setTimeout(() => {
      document.getElementById("identity-card")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-[#ffffff] text-zinc-900 selection:bg-purple-500/20 font-sans">
      <Hero onGetStarted={scrollToUpload} />
      
      <div className="relative">
        <Comparison />
        
        <div className="pb-32 relative z-10">
          <UploadSection onComplete={handleUploadComplete} />
          
          {identityData && (
            <div className="mt-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
              <IdentityCard data={identityData} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
