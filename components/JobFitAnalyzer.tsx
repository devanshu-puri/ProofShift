"use client";

import { motion } from "framer-motion";
import { AlertCircle, Target, BookOpen, Clock, AlertTriangle, ArrowRight } from "lucide-react";
import { type ReviewData } from "@/lib/mockGemini";

export default function JobFitAnalyzer({ review }: { review: ReviewData }) {
  
  const getScoreColor = (score: number) => {
    if (score < 50) return "text-red-500 stroke-red-500";
    if (score < 75) return "text-yellow-500 stroke-yellow-500";
    return "text-green-500 stroke-green-500";
  };

  const getScoreBg = (score: number) => {
    if (score < 50) return "bg-red-50 border-red-200 text-red-700";
    if (score < 75) return "bg-yellow-50 border-yellow-200 text-yellow-700";
    return "bg-green-50 border-green-200 text-green-700";
  };

  const colorClass = getScoreColor(review.jobMatch);

  return (
    <section className="py-20 px-4 flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white border border-zinc-200 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-zinc-100 pb-8 mb-8">
          
          {/* Circular Score */}
          <div className="relative w-32 h-32 shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-zinc-100 stroke-current"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeWidth="3"
              />
              <path
                className={`${colorClass}`}
                strokeDasharray={`${review.jobMatch}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ transition: "stroke-dasharray 1.5s ease-out" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-4xl font-bold tracking-tight ${getScoreColor(review.jobMatch).split(' ')[0]}`}>{review.jobMatch}%</span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Match</span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-3">Job Fit Analysis</h2>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-semibold ${getScoreBg(review.jobMatch)}`}>
              <AlertCircle className="w-4 h-4" />
              {review.jobMatch < 50 ? "Low Match" : review.jobMatch < 75 ? "Moderate Match" : "Strong Match"}
            </div>
            <p className="text-zinc-500 mt-4 leading-relaxed font-medium">{review.note}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Missing Skills */}
          <div>
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Target className="w-4 h-4" /> Missing Capabilities
            </h3>
            <div className="flex flex-wrap gap-2">
              {review.missingSkills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 bg-red-50 text-red-600 border border-red-100 rounded-full text-sm font-bold shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Weak Areas */}
          <div>
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Portfolio Weaknesses
            </h3>
            <ul className="space-y-3">
              {review.weakAreas.map((weak, i) => (
                <li key={i} className="text-sm text-zinc-700 font-medium flex items-start gap-2 bg-zinc-50 p-3 rounded-xl border border-zinc-100 shadow-sm">
                  <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  {weak}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Roadmap */}
        {review.roadmap && (
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 shadow-inner">
            <h3 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-6 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Recommended Roadmap
            </h3>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-purple-200">
                <div className="absolute -left-2.5 top-0 bg-white border-2 border-purple-300 rounded-full p-1">
                  <Clock className="w-3 h-3 text-purple-600" />
                </div>
                <h4 className="font-bold text-zinc-900 mb-3">7-Day Action Plan</h4>
                <ul className="space-y-2">
                  {review.roadmap["7days"].map((item, i) => (
                    <li key={i} className="text-sm text-purple-900 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative pl-6 border-l-2 border-purple-200">
                <div className="absolute -left-2.5 top-0 bg-white border-2 border-purple-300 rounded-full p-1">
                  <Target className="w-3 h-3 text-purple-600" />
                </div>
                <h4 className="font-bold text-zinc-900 mb-3">30-Day Objective</h4>
                <ul className="space-y-2">
                  {review.roadmap["30days"].map((item, i) => (
                    <li key={i} className="text-sm text-purple-900 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

      </motion.div>
    </section>
  );
}
