"use client";

import { motion } from "framer-motion";
import { Copy, Share2, CheckCircle2, ShieldCheck, Hexagon } from "lucide-react";
import { useState } from "react";
import { type IdentityProfile } from "@/lib/mockGemini";

export default function IdentityCard({ data }: { data: IdentityProfile }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(data.walletStyleId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!data) return null;

  return (
    <section className="py-20 px-4 flex justify-center items-center relative" id="identity-card">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white border border-zinc-200 rounded-[2.5rem] p-8 relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] group transition-all"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-full -z-0 opacity-50 pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-8">
          
          {/* Header: Avatar and Trust Score */}
          <div className="flex justify-between items-start border-b border-zinc-100 pb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-0.5 shadow-md shadow-purple-500/20">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xl font-bold text-zinc-900 tracking-tight">
                    {data.name.split(" ").map((n: string) => n[0]).join("")}
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">{data.name}</h2>
                <div className="flex items-center gap-1 mt-0.5">
                  <Hexagon className="w-3 h-3 text-purple-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Verified Identity</span>
                </div>
              </div>
            </div>

            {/* Credibility Score */}
            <div className="flex flex-col items-center justify-center relative w-16 h-16">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-zinc-100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="text-purple-600 text-[100]"
                  strokeDasharray={`${data.credibility}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ transition: "stroke-dasharray 1s ease-in-out" }}
                />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-lg font-bold text-zinc-900">{data.credibility}</span>
              </div>
            </div>
          </div>

          {/* Wallet ID */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 flex justify-between items-center group/wallet">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Identity Node</span>
              <span className="font-mono text-sm font-semibold text-zinc-800">{data.walletStyleId}</span>
            </div>
            <button 
              onClick={handleCopy}
              className="p-2 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-purple-300 text-zinc-600 transition-all shadow-sm"
              aria-label="Copy Wallet ID"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" /> }
            </button>
          </div>

          {/* Skills */}
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 block">Extracted Capabilities</span>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill: string, i: number) => (
                <span key={i} className="px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-zinc-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Proof Badges */}
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 block">Verification Badges</span>
            <div className="flex flex-col gap-3">
              {data.proofBadges.map((badge: string, i: number) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-zinc-200 shadow-sm rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm font-bold text-zinc-800">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <button className="w-full py-4 mt-4 rounded-2xl bg-zinc-900 text-white font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors shadow-lg shadow-black/10">
            <Share2 className="w-4 h-4" /> Share Public Proof
          </button>
        </div>
      </motion.div>
    </section>
  );
}
