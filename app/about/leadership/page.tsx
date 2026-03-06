'use client'

import { motion } from "motion/react"
import Image from "next/image"
import { siteConfig } from "@/lib/config"

const leaders = [
  {
    name: "Vikram Rathore",
    title: "Founder & Chairman",
    desc: "A civil engineering graduate from IIT Bombay, Vikram founded Rathore Developers in 2008 with a vision to bring world-class quality to Indian real estate. Under his leadership, the company has delivered 48+ landmark projects.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Priya Rathore",
    title: "Managing Director",
    desc: "An architect by training and a strategist by nature, Priya leads the design philosophy at Rathore Developers. She ensures every project balances aesthetic innovation with functional excellence.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Arjun Mehta",
    title: "Chief Operating Officer",
    desc: "With 20+ years in construction management, Arjun oversees project execution with military precision. His commitment to on-time delivery has set Rathore apart in an industry known for delays.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sneha Kapoor",
    title: "VP — Sales & Marketing",
    desc: "Sneha brings a decade of luxury brand experience to Rathore Developers. She leads the company's go-to-market strategy, building lasting relationships with ultra-high-net-worth clients.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
]

export default function LeadershipPage() {
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
            Leadership
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] text-zinc-900"
          >
            The People <br />Behind the Vision.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-xl max-w-xl leading-relaxed font-medium"
          >
            A team of architects, engineers, and visionaries who share one belief: 
            that every home should be a masterpiece.
          </motion.p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-2xl font-bold">{leader.name}</p>
                  <p className="text-white/70 text-xs uppercase tracking-widest font-bold mt-1">{leader.title}</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-zinc-600 leading-relaxed">{leader.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder Quote */}
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-950 text-white rounded-[40px] p-12 md:p-20 text-center"
        >
          <blockquote className="text-2xl md:text-4xl font-bold leading-snug max-w-3xl mx-auto">
            "We don't just build homes. We build the backdrop to the most important 
            moments of people's lives."
          </blockquote>
          <p className="text-white/40 text-sm uppercase tracking-widest font-bold mt-8">
            — Vikram Rathore, Founder
          </p>
        </motion.div>
      </section>
    </main>
  )
}
