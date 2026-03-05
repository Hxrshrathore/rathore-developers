'use client'

import { motion } from "motion/react"
import Image from "next/image"
import { ArrowRight, Award, Shield, Leaf, Users } from "lucide-react"

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

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600"
            >
              Our Vision
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900"
            >
              Crafting Legacies, <br /> Not Just Buildings.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-700 text-lg max-w-lg leading-relaxed font-medium"
            >
              At Rathore Developers, we believe that architecture has the power to transform lives. Our mission is to create spaces that inspire, endure, and harmonize with their surroundings.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl shadow-zinc-200"
          >
            <Image
              src="https://picsum.photos/seed/about-hero/1200/1200"
              alt="Architectural Vision"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Values Section */}
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

      {/* Team Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">The Minds Behind Rathore</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">Our Leadership.</h2>
          </div>
          <p className="text-zinc-700 max-w-sm text-sm leading-relaxed font-medium">
            A diverse team of architects, engineers, and visionaries dedicated to redefining the urban landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-6">
                <Image
                  src={`https://picsum.photos/seed/leader-${i}/800/1000`}
                  alt="Leader"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Alexander Rathore</h3>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mt-1">Founder & Chief Architect</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="bg-zinc-900 rounded-[60px] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://picsum.photos/seed/cta-bg/1920/1080"
              alt="Background"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-none">
              Ready to find your <br /> next legacy home?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-black px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all">
                View Properties
              </button>
              <button className="bg-transparent border border-white/20 text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
