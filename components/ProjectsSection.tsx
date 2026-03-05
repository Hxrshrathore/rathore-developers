'use client'

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { properties } from "@/lib/properties"
import Link from "next/link"

export function ProjectsSection() {
  const [current, setCurrent] = React.useState(0)
  const projects = properties.slice(0, 2)

  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-12 md:mb-16 space-y-4">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">Recently Completed Homes</div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">A selection of newly built modular and tiny homes</h2>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">{projects[current].title}</h3>
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-zinc-400 font-medium uppercase tracking-widest">
                <span>{projects[current].location}</span>
                <div className="w-1 h-1 rounded-full bg-zinc-300" />
                <span>2024</span>
              </div>
            </div>
            <p className="text-zinc-600 leading-relaxed line-clamp-3 md:line-clamp-4 text-sm md:text-base">
              {projects[current].description}
            </p>
            <Link 
              href={`/properties/${projects[current].id}`}
              className="group flex items-center gap-3 bg-zinc-100 text-black px-8 py-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 w-full md:w-auto justify-center md:justify-start"
            >
              <div className="w-2 h-2 rounded-full bg-black group-hover:bg-white transition-colors" />
              Learn More
            </Link>

            <div className="flex gap-4 pt-4 md:pt-8 justify-center md:justify-start">
              <button 
                onClick={() => setCurrent((prev) => (prev - 1 + projects.length) % projects.length)}
                className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-all"
              >
                <ArrowLeft size={18} />
              </button>
              <button 
                onClick={() => setCurrent((prev) => (prev + 1) % projects.length)}
                className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-all"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              <div className="col-span-12 sm:col-span-5 relative aspect-video sm:aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={projects[current].image}
                  alt="Project View"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="col-span-12 sm:col-span-7 relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden sm:mt-12">
                <Image
                  src={projects[current].gallery?.[0] || projects[current].image}
                  alt="Project View"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Large Text Break */}
      <div className="mt-24 md:mt-32 border-t border-zinc-100 pt-16 md:pt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="text-4xl sm:text-6xl md:text-9xl font-bold tracking-tighter leading-[0.8] uppercase max-w-4xl">
            Scalable <br /> Homes <br /> Created <br /> For Living.
          </h2>
          <Link 
            href="/properties"
            className="group flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all duration-300 w-full md:w-auto justify-center md:justify-start"
          >
            <div className="w-2 h-2 rounded-full bg-white transition-colors" />
            Explore All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
