'use client'

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Star, ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
  {
    quote: "The attention to detail is unprecedented. Rathore doesn't just build homes; they craft legacies. The concierge service at The Obsidian is exactly what I needed.",
    author: "Vivek T.",
    role: "Tech Founder",
    property: "The Obsidian Tower"
  },
  {
    quote: "As an NRI investor, transparency is my top priority. The entire purchasing process, from virtual tours to RERA documentation, was absolutely flawless and secure.",
    author: "Dr. Ananya P.",
    role: "NRI Investor, London",
    property: "Azure Bay Residences"
  },
  {
    quote: "Sustainable luxury isn't just a buzzword here. The solar integration and rainwater harvesting at Veridian Grove run seamlessly without compromising the 5-star lifestyle.",
    author: "Rajeev M.",
    role: "Corporate CEO",
    property: "Veridian Grove"
  },
  {
    quote: "The double-height ceilings and raw material finishes in The Quartz Lofts perfectly capture that New York industrial vibe I was looking for right here in Mumbai.",
    author: "Priya S.",
    role: "Creative Director",
    property: "The Quartz Lofts"
  },
  {
    quote: "From the private golf simulator to the smart-home integration, Elysian Heights is lightyears ahead of anything else available in Gurgaon right now.",
    author: "Amit K.",
    role: "Hedge Fund Manager",
    property: "Elysian Heights"
  },
  {
    quote: "Moving our family into Solstice Villas was the best decision. The private beach access and the tight security give us complete peace of mind.",
    author: "Neha R.",
    role: "Fashion Entrepreneur",
    property: "Solstice Villas"
  }
]

export function Testimonials() {
  const [current, setCurrent] = React.useState(0)

  return (
    <section className="relative py-24 bg-zinc-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-50">
        <Image 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" 
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
              “{testimonials[current].quote}”
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
