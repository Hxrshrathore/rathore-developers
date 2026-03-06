'use client'

import { motion } from "motion/react"
import { Award, Trophy, Star, Medal } from "lucide-react"

const awards = [
  {
    year: "2024",
    title: "Best Luxury Developer — India",
    org: "Asia Pacific Property Awards",
    icon: <Trophy size={20} />,
  },
  {
    year: "2023",
    title: "Sustainable Developer of the Year",
    org: "CREDAI National Awards",
    icon: <Star size={20} />,
  },
  {
    year: "2023",
    title: "Best Residential High-Rise — Mumbai",
    org: "Real Estate Excellence Awards",
    icon: <Award size={20} />,
  },
  {
    year: "2022",
    title: "Innovation in Design Award",
    org: "Indian Architecture Forum",
    icon: <Medal size={20} />,
  },
  {
    year: "2022",
    title: "Platinum Green Building Rating",
    org: "Indian Green Building Council",
    icon: <Star size={20} />,
  },
  {
    year: "2021",
    title: "Best Urban Development Project",
    org: "National Real Estate Development Council",
    icon: <Trophy size={20} />,
  },
  {
    year: "2020",
    title: "Customer Excellence Award",
    org: "Times Real Estate Summit",
    icon: <Medal size={20} />,
  },
  {
    year: "2019",
    title: "Emerging Developer of the Year",
    org: "ET Now Leaders of Tomorrow",
    icon: <Award size={20} />,
  },
]

export default function AwardsPage() {
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
            Recognition
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] text-zinc-900"
          >
            Awards & <br />Honours.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-xl max-w-xl leading-relaxed font-medium"
          >
            Industry recognition for our relentless pursuit of design excellence, 
            sustainable construction, and client satisfaction.
          </motion.p>
        </div>
      </section>

      {/* Awards Timeline */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="space-y-4">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group flex items-center gap-6 md:gap-10 p-6 md:p-8 bg-zinc-50 rounded-2xl border border-zinc-100 hover:bg-zinc-100 transition-colors duration-300"
            >
              <div className="text-zinc-300 text-3xl md:text-5xl font-bold tracking-tighter shrink-0 w-20 md:w-24">
                {award.year}
              </div>
              <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-zinc-900 transition-colors">
                {award.icon}
              </div>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-zinc-900 truncate">{award.title}</h3>
                <p className="text-zinc-500 text-sm font-medium mt-1">{award.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
