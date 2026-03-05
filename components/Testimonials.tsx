'use client'

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Star, ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
  {
    text: "Rathore Developers redefined our expectations of luxury. The attention to detail in the Obsidian Tower is simply unparalleled.",
    author: "Emma R.",
    role: "Resident, Obsidian Tower"
  },
  {
    text: "Investing in Azure Bay was the best decision for our family. The integration of smart technology and sustainable design is world-class.",
    author: "Daniel M.",
    role: "Owner, Azure Bay Villa"
  }
]

export function Testimonials() {
  const [current, setCurrent] = React.useState(0)

  return (
    <section className="relative py-24 bg-zinc-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-50">
        <Image 
          src="https://picsum.photos/seed/testi-bg-luxury/1920/1080" 
          alt="Background" 
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-xl bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-[32px] md:rounded-[40px] border border-white/10">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80 mb-6 md:mb-8">Trusted by Residents</div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-white text-white md:size-[16px]" />
              ))}
            </div>

            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-tight italic"
            >
              “{testimonials[current].text}”
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
              <div>
                <div className="text-white font-bold text-base md:text-lg">{testimonials[current].author}</div>
                <div className="text-white/80 text-xs md:text-sm font-medium">{testimonials[current].role}</div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                  <ArrowLeft size={16} />
                </button>
                <button 
                  onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
