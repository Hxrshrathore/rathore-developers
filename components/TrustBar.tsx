'use client'

import { motion } from "motion/react"
import { ShieldCheck, Trophy, Users, History, TrendingUp } from "lucide-react"

export function TrustBar() {
  const trustSignals = [
    {
      icon: <ShieldCheck size={20} className="text-emerald-600" />,
      label: "100% RERA Registered",
      value: "Transparent Practices"
    },
    {
      icon: <Trophy size={20} className="text-amber-500" />,
      label: "48+ Projects",
      value: "Award Winning"
    },
    {
      icon: <Users size={20} className="text-blue-500" />,
      label: "2,400+ Residents",
      value: "Happy Families"
    },
    {
      icon: <History size={20} className="text-zinc-600" />,
      label: "15 Years",
      value: "Of Excellence"
    },
    {
      icon: <TrendingUp size={20} className="text-purple-500" />,
      label: "₹1,200Cr+ AUM",
      value: "Proven ROI"
    }
  ]

  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-6 md:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 whitespace-nowrap hidden lg:block">
            Trusted By The Elite
          </div>

          <div className="w-full flex overflow-x-auto scrollbar-hide snap-x md:justify-around gap-8 md:gap-4 pb-4 md:pb-0">
            {trustSignals.map((signal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 shrink-0 snap-center"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100 shrink-0">
                  {signal.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 leading-tight">{signal.label}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{signal.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
