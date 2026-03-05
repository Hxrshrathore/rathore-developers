'use client'

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowRight, MapPin, Home, Maximize } from "lucide-react"
import { properties } from "@/lib/properties"
import Link from "next/link"

export function PropertyGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="space-y-4">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">Featured Developments</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">Iconic Properties.</h2>
        </div>
        <p className="text-zinc-700 max-w-sm text-sm leading-relaxed font-medium">
          Discover our curated collection of luxury residences, each designed to redefine the standards of modern living.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.slice(0, 3).map((prop, idx) => (
          <motion.div
            key={prop.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <Link href={`/properties/${prop.id}`}>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border ${
                    prop.status === 'Limited Units' 
                      ? 'bg-amber-500/90 text-white border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.5)] animate-[pulse_2s_ease-in-out_infinite]' 
                      : prop.status === 'Coming Soon' 
                        ? 'bg-blue-500/90 text-white border-blue-400/50'
                        : prop.status === 'Pre-Launch'
                          ? 'bg-purple-500/90 text-white border-purple-400/50'
                          : 'bg-black/50 text-white border-white/20'
                  }`}>
                    {prop.status}
                  </span>
                  
                  {/* Social Proof / FOMO Badge */}
                  {(idx === 0 || idx === 2) && (
                    <span className="px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest bg-white/90 text-red-600 backdrop-blur-md shadow-lg flex items-center gap-1.5 w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse relative">
                        <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></span>
                      </span>
                      {idx === 0 ? "2 Units Left" : "High Demand"}
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900">{prop.title}</h3>
                    <div className="flex items-center gap-1 text-zinc-600 text-xs mt-1 font-bold">
                      <MapPin size={12} />
                      <span>{prop.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-black">{prop.price}</div>
                  </div>
                </div>

                <div className="flex gap-6 border-y border-zinc-200 py-4">
                  <div className="flex items-center gap-2 text-zinc-700 font-bold">
                    <Home size={14} />
                    <span className="text-xs">{prop.specs.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 font-bold">
                    <Maximize size={14} />
                    <span className="text-xs">{prop.specs.area}</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-700 line-clamp-2 font-medium">
                  {prop.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all text-black">
                  View Details <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
