'use client'

import { motion } from "motion/react"
import Image from "next/image"
import { Shield, Leaf, Award, Users, Eye, Target, Compass, Sparkles, Trophy, Star, Medal } from "lucide-react"
import { siteConfig } from "@/lib/config"
import Link from "next/link"

const stats = [
  { label: "Completed Projects", value: "48+" },
  { label: "Happy Residents", value: "2,400+" },
  { label: "Years of Excellence", value: "15" },
  { label: "Awards Won", value: "12" },
]

const values = [
  {
    icon: <Shield className="text-zinc-900" />,
    title: "Uncompromising Quality",
    desc: "We use only the finest materials and partner with world-renowned architects to ensure every Rathore development is a masterpiece of engineering."
  },
  {
    icon: <Leaf className="text-zinc-900" />,
    title: "Sustainable Future",
    desc: "Our projects integrate renewable energy, water recycling, and carbon-neutral materials to minimize environmental impact while maximizing comfort."
  },
  {
    icon: <Award className="text-zinc-900" />,
    title: "Architectural Innovation",
    desc: "We push the boundaries of design, creating iconic structures that redefine city skylines and offer unique living experiences."
  },
  {
    icon: <Users className="text-zinc-900" />,
    title: "Community Centric",
    desc: "We don't just build homes; we create vibrant communities with shared spaces that foster connection and well-being."
  }
]

const pillars = [
  { icon: <Eye size={20} />, title: "Transparency", desc: "Every transaction, every material choice, every timeline — we share it all." },
  { icon: <Target size={20} />, title: "Precision", desc: "From foundation to finish, we obsess over details that others overlook." },
  { icon: <Compass size={20} />, title: "Innovation", desc: "Smart home technology, sustainable materials, and design thinking in every project." },
  { icon: <Sparkles size={20} />, title: "Legacy", desc: "We build addresses that appreciate over decades — in value, stature, and quality of life." },
]

const leaders = [
  {
    name: "Vikram Rathore",
    role: "Founder & Chairman",
    desc: "A civil engineering graduate from IIT Bombay, Vikram founded Rathore Developers in 2008 with a vision to bring world-class quality to Indian real estate.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Priya Rathore",
    role: "Managing Director",
    desc: "An architect by training and a strategist by nature, Priya leads the design philosophy at Rathore Developers.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Arjun Mehta",
    role: "Chief Operating Officer",
    desc: "With 20+ years in construction management, Arjun oversees project execution with military precision.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
  },
]

const awards = [
  { year: "2024", title: "Best Luxury Developer — India", org: "Asia Pacific Property Awards", icon: <Trophy size={18} /> },
  { year: "2023", title: "Sustainable Developer of the Year", org: "CREDAI National Awards", icon: <Star size={18} /> },
  { year: "2023", title: "Best Residential High-Rise — Mumbai", org: "Real Estate Excellence Awards", icon: <Award size={18} /> },
  { year: "2022", title: "Innovation in Design Award", org: "Indian Architecture Forum", icon: <Medal size={18} /> },
  { year: "2022", title: "Platinum Green Building Rating", org: "Indian Green Building Council", icon: <Star size={18} /> },
  { year: "2021", title: "Best Urban Development Project", org: "National Real Estate Development Council", icon: <Trophy size={18} /> },
]

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24">
      {/* ─── Hero ─── */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600"
            >
              About {siteConfig.name}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900"
            >
              Crafting Legacies, <br />Not Just Buildings.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-700 text-lg max-w-lg leading-relaxed font-medium"
            >
              At {siteConfig.name}, we believe that architecture has the power to transform lives. 
              Since {siteConfig.established}, our mission has been to create spaces that inspire, endure, 
              and harmonize with their surroundings.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl shadow-zinc-200"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              alt="Architectural Vision"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-zinc-900 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-4xl md:text-6xl font-bold text-white tracking-tighter">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Vision & Mission ─── */}
      <section id="vision" className="px-6 max-w-7xl mx-auto mb-32 scroll-mt-32">
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
                responsibility. Every project delivers enduring value — for our residents, 
                our communities, and our cities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
            {pillars.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60">
                  {p.icon}
                </div>
                <h4 className="text-base font-bold text-white">{p.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values / Philosophy ─── */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16 space-y-4">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">Our Philosophy</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">Built on Values.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-50 p-10 rounded-[40px] border border-zinc-100 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-8 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-4">{value.title}</h3>
              <p className="text-zinc-700 leading-relaxed font-medium">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Leadership ─── */}
      <section id="leadership" className="px-6 max-w-7xl mx-auto mb-24 scroll-mt-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">The Minds Behind Rathore</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">Our Leadership.</h2>
          </div>
          <p className="text-zinc-700 max-w-sm text-sm leading-relaxed font-medium">
            A team of architects, engineers, and visionaries dedicated to redefining the urban landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-6 bg-zinc-100">
                <Image
                  src={leader.img}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/60 text-xs leading-relaxed">{leader.desc}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900">{leader.name}</h3>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mt-1">{leader.role}</p>
            </motion.div>
          ))}
        </div>
        {/* Founder Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-zinc-50 rounded-3xl p-12 md:p-16 text-center border border-zinc-100"
        >
          <blockquote className="text-xl md:text-3xl font-bold leading-snug max-w-3xl mx-auto text-zinc-900">
            "We don't just build homes. We build the backdrop to the most important 
            moments of people's lives."
          </blockquote>
          <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold mt-6">
            — Vikram Rathore, Founder
          </p>
        </motion.div>
      </section>

      {/* ─── Awards ─── */}
      <section id="awards" className="px-6 max-w-7xl mx-auto mb-24 scroll-mt-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">Recognition</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">Awards & Honours.</h2>
          </div>
          <p className="text-zinc-700 max-w-sm text-sm leading-relaxed font-medium">
            Industry recognition for our relentless pursuit of design excellence and sustainable construction.
          </p>
        </div>
        <div className="space-y-3">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group flex items-center gap-6 md:gap-10 p-5 md:p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:bg-zinc-100 transition-colors duration-300"
            >
              <div className="text-zinc-200 text-2xl md:text-4xl font-bold tracking-tighter shrink-0 w-16 md:w-20">
                {award.year}
              </div>
              <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-zinc-900 transition-colors">
                {award.icon}
              </div>
              <div className="min-w-0">
                <h3 className="text-base md:text-lg font-bold text-zinc-900 truncate">{award.title}</h3>
                <p className="text-zinc-500 text-xs font-medium mt-0.5">{award.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="bg-zinc-900 rounded-[60px] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
              alt="Background"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-none">
              Ready to find your <br />next legacy home?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/properties" className="bg-white text-black px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all">
                View Properties
              </Link>
              <Link href="/contact" className="bg-transparent border border-white/20 text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
