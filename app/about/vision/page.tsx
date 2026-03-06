'use client'

import { motion } from "motion/react"
import { Eye, Target, Compass, Sparkles } from "lucide-react"
import { siteConfig } from "@/lib/config"

const pillars = [
  {
    icon: <Eye className="text-zinc-900" />,
    title: "Transparency",
    desc: "Every transaction, every material choice, every timeline — we share it all. Our clients are partners, not customers.",
  },
  {
    icon: <Target className="text-zinc-900" />,
    title: "Precision",
    desc: "From foundation to finish, we obsess over details that others overlook. A Rathore home is built to last generations.",
  },
  {
    icon: <Compass className="text-zinc-900" />,
    title: "Innovation",
    desc: "We integrate smart home technology, sustainable materials, and design thinking into every project we undertake.",
  },
  {
    icon: <Sparkles className="text-zinc-900" />,
    title: "Legacy",
    desc: "We don't build properties. We build addresses that appreciate over decades — in value, in stature, in quality of life.",
  },
]

export default function VisionPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500"
          >
            Vision & Mission
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] text-zinc-900"
          >
            Building What <br />Lasts Forever.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-xl max-w-xl leading-relaxed font-medium"
          >
            Since {siteConfig.established}, our vision has been singular: to create residences 
            that transcend trends and become timeless landmarks. Our mission is to deliver 
            architectural excellence with unwavering integrity.
          </motion.p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="bg-zinc-950 text-white rounded-[40px] p-12 md:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Our Vision</div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                To be India's most trusted name in luxury real estate.
              </h2>
            </div>
            <div className="space-y-6">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Our Mission</div>
              <p className="text-white/70 text-lg leading-relaxed">
                To craft residences that combine architectural innovation with environmental 
                responsibility. Every {siteConfig.name} project delivers enduring value — for 
                our residents, our communities, and our cities.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-1">
                  <div className="text-3xl font-bold">48+</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Projects Delivered</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold">2,400+</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Happy Families</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4"
        >
          Our Pillars
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-16"
        >
          What We Stand For.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-50 rounded-3xl p-10 border border-zinc-100 hover:bg-zinc-100 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{pillar.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
