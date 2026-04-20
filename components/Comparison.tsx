"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, Key, FileText, LayoutDashboard, EyeOff, Eye, Database, Wallet } from "lucide-react";

export default function Comparison() {
  const comparisonData = [
    {
      web2: "Resume PDF",
      web3: "Proof Card",
      icon1: <FileText className="w-5 h-5 text-zinc-400" />,
      icon2: <LayoutDashboard className="w-5 h-5 text-purple-200" />
    },
    {
      web2: "Manual trust",
      web3: "Verified credentials",
      icon1: <Lock className="w-5 h-5 text-zinc-400" />,
      icon2: <Key className="w-5 h-5 text-purple-200" />
    },
    {
      web2: "Static profile",
      web3: "Dynamic identity",
      icon1: <FileText className="w-5 h-5 text-zinc-400" />,
      icon2: <ZapIcon className="w-5 h-5 text-purple-200" />
    },
    {
      web2: "Hidden achievements",
      web3: "Public proof badges",
      icon1: <EyeOff className="w-5 h-5 text-zinc-400" />,
      icon2: <Eye className="w-5 h-5 text-purple-200" />
    },
    {
      web2: "Platform-owned data",
      web3: "User-owned identity",
      icon1: <Database className="w-5 h-5 text-zinc-400" />,
      icon2: <Wallet className="w-5 h-5 text-purple-200" />
    }
  ];

  return (
    <section className="py-24 px-4 relative bg-white border-y border-zinc-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 tracking-tight">The Identity Evolution</h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto font-medium">Shift from static, verifiable trust to programmable, decentralized credentials.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] gap-6 items-center">
          
          {/* Web2 Column */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-[2rem] p-10 flex flex-col gap-6 shadow-sm">
            <h3 className="text-2xl font-bold text-zinc-900 mb-2 border-b border-zinc-200 pb-4">Web2</h3>
            {comparisonData.map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-zinc-600 font-medium">
                {item.icon1}
                <span className="text-lg">{item.web2}</span>
              </div>
            ))}
          </div>

          {/* Transformation Arrows */}
          <div className="hidden md:flex flex-col items-center justify-center gap-10">
            {comparisonData.map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ArrowRight className="text-zinc-300 w-8 h-8" />
              </motion.div>
            ))}
          </div>

          {/* Web3 Column */}
          <div className="bg-purple-600 rounded-[2rem] p-10 flex flex-col gap-6 shadow-xl shadow-purple-600/20 relative overflow-hidden">
            <div className="absolute inset-x-0 -top-px h-px bg-white/20" />
            
            <h3 className="text-2xl font-bold text-white mb-2 border-b border-white/10 pb-4">Web3</h3>
            {comparisonData.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-white font-semibold"
              >
                {item.icon2}
                <span className="text-lg">{item.web3}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}
