'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { Plus } from "lucide-react"

const tabs = [
  {
    id: 'exterior',
    label: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    hotspots: [
      { top: '40%', left: '30%', label: 'Sustainable Facade' },
      { top: '70%', left: '60%', label: 'Smart Entrance' },
      { top: '20%', left: '80%', label: 'Sky Garden' }
    ]
  },
  {
    id: 'interior',
    label: 'Living Spaces',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    hotspots: [
      { top: '50%', left: '50%', label: 'Smart Home Integration' },
      { top: '30%', left: '20%', label: 'Floor-to-Ceiling Glass' }
    ]
  },
  {
    id: 'amenities',
    label: 'Amenities',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    hotspots: [
      { top: '45%', left: '45%', label: 'Infinity Pool' }
    ]
  }
]

export function InteractiveSection() {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id)

  return (
    <section className="relative min-h-screen bg-zinc-950 flex flex-col group overflow-hidden">
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-zinc-950/80 via-zinc-950/20 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10 pointer-events-none" />

      <div className="absolute top-16 left-6 right-6 z-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 max-w-7xl mx-auto w-full">
        <div className="space-y-6 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] font-black text-white/50 flex items-center gap-4"
          >
            <div className="w-12 h-px bg-white/20" />
            The Rathore Standard
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]"
          >
            Uncompromising <br className="hidden sm:block" /> 
            <span className="text-white/40 italic font-light tracking-tight">Quality &</span> Design.
          </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex bg-white/5 backdrop-blur-xl p-1.5 rounded-full border border-white/10 shadow-2xl"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-2 ${
                activeTab === tab.id 
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(var(--brand-primary-rgb),0.3)]' 
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              {activeTab === tab.id && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
              {tab.label}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={tabs.find(t => t.id === activeTab)?.image || ''}
              alt="Interactive View"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20" />

        {/* Interactive Hotspots */}
        {tabs.find(t => t.id === activeTab)?.hotspots.map((spot, idx) => (
          <div 
            key={idx}
            className="absolute group z-20"
            style={{ top: spot.top, left: spot.left }}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + (idx * 0.1), type: "spring" }}
              className="relative flex items-center justify-center cursor-crosshair"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 sm:group-hover:scale-150 transition-transform duration-700 ease-out" />
              <div className="absolute w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] sm:group-hover:scale-50 transition-transform duration-500" />
              
              <div className="absolute left-14 opacity-0 group-hover:opacity-100 transition-all duration-500 sm:-translate-x-4 sm:group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-30">
                <div className="bg-black/90 backdrop-blur-xl text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3">
                  <div className="w-1 h-4 bg-primary rounded-full" />
                  {spot.label}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 left-6 right-6 z-20 max-w-7xl mx-auto flex justify-between items-end w-full">
        <div className="hidden md:block">
          <p className="text-[10px] uppercase tracking-widest font-black text-white/40 max-w-xs leading-relaxed">
            Hover over the <span className="text-white">pulsing markers</span> to discover the intricate details of our architectural philosophy.
          </p>
        </div>
        <Link href="/properties" className="group flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary-hover transition-all duration-500 shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1">
          Explore Our Homes
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
            <Plus size={14} className="group-hover:rotate-90 transition-transform duration-500" />
          </div>
        </Link>
      </div>
    </section>
  )
}
