'use client'

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { Plus } from "lucide-react"

const tabs = [
  {
    id: 'exterior',
    label: 'Architecture',
    image: 'https://picsum.photos/seed/architecture/1920/1080',
    hotspots: [
      { top: '40%', left: '30%', label: 'Sustainable Facade' },
      { top: '70%', left: '60%', label: 'Smart Entrance' },
      { top: '20%', left: '80%', label: 'Sky Garden' }
    ]
  },
  {
    id: 'interior',
    label: 'Living Spaces',
    image: 'https://picsum.photos/seed/interior-luxury/1920/1080',
    hotspots: [
      { top: '50%', left: '50%', label: 'Smart Home Integration' },
      { top: '30%', left: '20%', label: 'Floor-to-Ceiling Glass' }
    ]
  },
  {
    id: 'amenities',
    label: 'Amenities',
    image: 'https://picsum.photos/seed/amenities/1920/1080',
    hotspots: [
      { top: '45%', left: '45%', label: 'Infinity Pool' }
    ]
  }
]

export function InteractiveSection() {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id)

  return (
    <section className="relative min-h-screen bg-zinc-900 flex flex-col">
      <div className="absolute top-12 left-6 right-6 z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 max-w-7xl mx-auto w-full">
        <div className="space-y-4">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80">The Rathore Standard</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Uncompromising <br /> Quality & Design.</h2>
        </div>
        
        <div className="flex bg-black/40 backdrop-blur-md p-1 rounded-full border border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeTab === tab.id ? 'bg-white text-black' : 'text-white hover:text-white/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
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

            {/* Hotspots */}
            {tabs.find(t => t.id === activeTab)?.hotspots.map((spot, idx) => (
              <div 
                key={idx}
                className="absolute group"
                style={{ top: spot.top, left: spot.left }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="relative flex items-center justify-center"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 animate-pulse" />
                  <div className="absolute w-2 h-2 rounded-full bg-white" />
                  
                  <div className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    <div className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg border border-white/10">
                      {spot.label}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 left-6 z-20">
        <button className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          <div className="w-2 h-2 rounded-full bg-white group-hover:bg-black transition-colors" />
          Explore Our Homes
        </button>
      </div>
    </section>
  )
}
