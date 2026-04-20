"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Mail, MapPin } from "lucide-react";

export default function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24 px-4 bg-white">
      {/* Background soft purple glow from the top exactly matching the image */}
      <div className="absolute top-0 left-0 right-0 h-[600px] hero-glow pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 text-center lg:text-left pt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/5 shadow-sm w-fit mx-auto lg:mx-0">
            <span className="text-sm font-semibold text-zinc-600 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
              ProofShift Beta Live
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.05]">
            Turn Your <span className="text-purple-600 block sm:inline">Web2 Identity</span> into a Web3 Proof Card
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Upload your resume, portfolio, or certificate and instantly generate a blockchain-inspired identity profile that you actually own.
          </p>

          <div className="flex items-center gap-3 text-sm font-semibold text-zinc-600 justify-center lg:justify-start">
            <div className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-zinc-400"/> No code required</div>
            <div className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-zinc-400"/> Free forever plan</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={onGetStarted}
              aria-label="Generate Proof Card"
              className="px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors shadow-lg shadow-black/10"
            >
              Generate Proof Card <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              aria-label="View Demo"
              className="px-8 py-4 rounded-full bg-white border border-zinc-200 text-zinc-700 font-semibold flex items-center justify-center gap-2 hover:bg-zinc-50 transition-colors shadow-sm"
            >
              <Play className="w-4 h-4" /> View Demo
            </button>
          </div>
        </motion.div>

        {/* Right: Floating Light Cards matching reference */}
        <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
          
          {/* Main big candidate card */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-20 right-0 w-[500px] bg-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-black/[0.04] z-20"
          >
            <div className="flex justify-between items-start mb-6 border-b border-zinc-100 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-100 to-purple-50 flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-600">AJ</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">Alex Johnson</h3>
                  <p className="text-zinc-500 font-medium">Software Engineer</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-bold">Verified ID</span>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1"><Mail className="w-3 h-3"/> Email</span>
                <span className="text-sm font-semibold text-zinc-900">alex@proofshift.io</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1"><MapPin className="w-3 h-3"/> Location</span>
                <span className="text-sm font-semibold text-zinc-900">San Francisco, CA</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-zinc-100 pt-6">
              <div className="flex -space-x-2">
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100"></div>
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-100"></div>
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-green-100"></div>
              </div>
              <span className="text-purple-600 font-semibold text-sm">3 Endorsements</span>
            </div>
          </motion.div>

          {/* Background blurred card */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 80 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute top-48 right-32 w-[420px] h-[360px] bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-[0_20px_50px_-20px_rgba(138,92,255,0.2)] flex flex-col gap-6 z-10"
          >
             <div className="h-6 w-48 bg-zinc-100/80 rounded" />
             <div className="space-y-3">
               <div className="h-4 w-full bg-zinc-100/80 rounded" />
               <div className="h-4 w-full bg-zinc-100/80 rounded" />
               <div className="h-4 w-3/4 bg-zinc-100/80 rounded" />
             </div>
             <div className="space-y-3 mt-4">
               <div className="h-4 w-full bg-zinc-100/80 rounded" />
               <div className="h-4 w-5/6 bg-zinc-100/80 rounded" />
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
