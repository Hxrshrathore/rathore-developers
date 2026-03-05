'use client'

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { properties } from "@/lib/properties"
import Link from "next/link"

export function Hero() {
  const [current, setCurrent] = React.useState(0)
  const slides = properties.slice(0, 3)

  const [isHovered, setIsHovered] = React.useState(false)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  React.useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [current, isHovered, slides.length])

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-zinc-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8 uppercase">
            Crafting <br /> Iconic <br /> Spaces.
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <Link 
              href={`/properties/${slides[current].id}`}
              className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto justify-center md:justify-start"
            >
              <div className="w-2 h-2 rounded-full bg-white group-hover:bg-black transition-colors" />
              View Details
            </Link>
            <p className="text-white/80 text-base md:text-lg max-w-xs leading-tight">
              Luxury residential developments designed for the future of urban living.
            </p>
          </div>
        </motion.div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 md:bottom-12 left-6 right-6 flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8">
          <div className="flex gap-6 md:gap-12 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {slides.map((slide, idx) => (
              <button 
                key={slide.id}
                onClick={() => setCurrent(idx)}
                className={`text-left transition-opacity duration-300 flex-shrink-0 ${current === idx ? 'opacity-100' : 'opacity-40'}`}
              >
                <div className="text-white font-mono text-[10px] md:text-xs mb-1 md:mb-2">0{idx + 1}</div>
                <div className="text-white text-[9px] md:text-[10px] uppercase tracking-widest max-w-[100px] md:max-w-[150px] leading-tight hidden sm:block">
                  {slide.title}
                </div>
                <div className="h-[1px] bg-white mt-1 md:mt-2 w-8 md:w-full relative overflow-hidden">
                   {current === idx && (
                     <motion.div 
                       initial={{ x: '-100%' }}
                       animate={{ x: '0%' }}
                       transition={{ duration: 5, ease: "linear" }}
                       className="absolute inset-0 bg-white"
                     />
                   )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <ArrowLeft size={18} />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
