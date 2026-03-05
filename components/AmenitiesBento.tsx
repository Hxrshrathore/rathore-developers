'use client'

import { motion } from "motion/react"
import { Shield, Zap, Droplets, Wind, Sun, Wifi } from "lucide-react"

const amenities = [
  {
    icon: <Shield size={24} />,
    title: "24/7 Security",
    desc: "Advanced biometric access and round-the-clock surveillance.",
    size: "md"
  },
  {
    icon: <Zap size={24} />,
    title: "Smart Home",
    desc: "Fully integrated automation for lighting, climate, and entertainment.",
    size: "lg"
  },
  {
    icon: <Droplets size={24} />,
    title: "Infinity Pool",
    desc: "Temperature-controlled rooftop pool with city views.",
    size: "sm"
  },
  {
    icon: <Wind size={24} />,
    title: "Air Purification",
    desc: "Hospital-grade HEPA filtration in every unit.",
    size: "sm"
  },
  {
    icon: <Sun size={24} />,
    title: "Solar Ready",
    desc: "Sustainable energy solutions integrated into the architecture.",
    size: "md"
  },
  {
    icon: <Wifi size={24} />,
    title: "High-Speed Connectivity",
    desc: "Dedicated fiber-optic lines for seamless remote work.",
    size: "lg"
  }
]

export function AmenitiesBento() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">The Experience</div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">Luxury Amenities.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
        {amenities.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className={`bg-zinc-100 rounded-[32px] p-8 flex flex-col justify-between border border-zinc-200 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 group ${
              item.size === 'lg' ? 'md:col-span-2' : ''
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-500 text-zinc-900">
              {item.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900">{item.title}</h3>
              <p className="text-sm text-zinc-700 leading-relaxed max-w-[240px] font-medium">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
