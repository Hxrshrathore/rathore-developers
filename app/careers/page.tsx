'use client'

import { motion } from "motion/react"
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/config"

const openings = [
  {
    title: "Senior Architect",
    department: "Design Studio",
    location: "Mumbai",
    type: "Full-time",
    desc: "Lead the design vision for marquee residential projects. 8+ years experience in luxury architecture required.",
  },
  {
    title: "Project Manager — Construction",
    department: "Execution",
    location: "Delhi NCR",
    type: "Full-time",
    desc: "Oversee end-to-end delivery of high-rise developments. PMP certification and 10+ years experience preferred.",
  },
  {
    title: "Digital Marketing Lead",
    department: "Marketing",
    location: "Mumbai",
    type: "Full-time",
    desc: "Drive digital campaigns for luxury properties. Experience in luxury/real estate digital marketing required.",
  },
  {
    title: "Interior Design Consultant",
    department: "Design Studio",
    location: "Goa",
    type: "Full-time",
    desc: "Create bespoke interior solutions for our premium villa projects. Portfolio of luxury residential work required.",
  },
]

const perks = [
  "Competitive compensation with performance bonuses",
  "Health insurance for you and your family",
  "Learning & development budget",
  "Flexible work arrangements",
  "Annual company retreats",
  "Employee home purchase program",
]

export default function CareersPage() {
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
            Careers
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] text-zinc-900"
          >
            Build the Future <br />With Us.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-xl max-w-xl leading-relaxed font-medium"
          >
            Join a team of architects, engineers, and dreamers shaping India's 
            most iconic addresses.
          </motion.p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="bg-zinc-950 text-white rounded-[40px] p-12 md:p-16">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-10">Why {siteConfig.name.split(' ')[0]}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                <p className="text-white/70 text-sm font-medium">{perk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4"
        >
          Open Positions
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-12"
        >
          Current Openings.
        </motion.h2>
        <div className="space-y-4">
          {openings.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:bg-zinc-100 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-zinc-900">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-zinc-500 text-xs">
                    <span className="flex items-center gap-1"><Briefcase size={12} /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                  </div>
                  <p className="text-zinc-500 text-sm mt-2">{job.desc}</p>
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Application: ${job.title}`}
                  className="shrink-0 flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                >
                  Apply <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
