'use client'

import { motion } from "motion/react"
import Image from "next/image"
import { ArrowRight, Globe, Building2, Zap, Trees } from "lucide-react"

const developments = [
  {
    title: "Metropolis Masterplan",
    type: "Urban Renewal",
    desc: "A 50-acre mixed-use development transforming the heart of the city into a sustainable tech hub with 5,000+ luxury residences.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    features: ["Smart Grid", "Public Transit Link", "20% Green Space"]
  },
  {
    title: "Azure Coastline",
    type: "Resort Living",
    desc: "An exclusive collection of waterfront estates and a private marina, designed to harmonize with the natural coastal ecosystem.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    features: ["Private Marina", "Coral Restoration", "Eco-Villas"]
  },
  {
    title: "The Veridian District",
    type: "Sustainable Living",
    desc: "The world's first carbon-negative residential district, featuring vertical forests and 100% renewable energy integration.",
    image: "https://images.unsplash.com/photo-1449156001935-d28730b967b0?q=80&w=2070&auto=format&fit=crop",
    features: ["Vertical Forests", "Zero Waste", "Renewable Energy"]
  }
]

export default function DevelopmentsPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600"
          >
            Future Developments
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] text-zinc-900"
          >
            Shaping the <br /> Cities of Tomorrow.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-700 text-xl max-w-xl leading-relaxed font-medium"
          >
            Our large-scale developments are more than just buildings; they are ecosystems designed for sustainable growth and human connection.
          </motion.p>
        </div>
      </section>

      {/* Development List */}
      <section className="px-6 max-w-7xl mx-auto space-y-32">
        {developments.map((dev, idx) => (
          <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`space-y-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
            >
              <div className="space-y-4">
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">{dev.type}</div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">{dev.title}</h2>
              </div>
              <p className="text-zinc-700 text-lg leading-relaxed font-medium">
                {dev.desc}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {dev.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-zinc-900 font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span className="text-xs uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all duration-300">
                Explore Masterplan <ArrowRight size={16} />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative aspect-[3/2] rounded-[40px] overflow-hidden shadow-2xl shadow-zinc-200 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
            >
              <Image
                src={dev.image}
                alt={dev.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        ))}
      </section>

      {/* Global Presence */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="bg-zinc-50 rounded-[60px] p-12 md:p-24 border border-zinc-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">Global Presence</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">Expanding Horizons.</h2>
              <p className="text-zinc-700 text-lg leading-relaxed font-medium">
                With active projects in 12 major cities across 4 continents, Rathore Developers is a truly global firm. We adapt our luxury standards to local cultures and environments.
              </p>
              <div className="flex gap-12 pt-4">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-zinc-900">12</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Cities</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-zinc-900">4</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Continents</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-zinc-900">150+</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Architects</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px]">
              <Globe className="absolute inset-0 m-auto text-zinc-200 w-full h-full animate-pulse" strokeWidth={0.5} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      className="w-3 h-3 rounded-full bg-black shadow-lg shadow-black/20"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
