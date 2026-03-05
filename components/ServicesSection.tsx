'use client'

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Urban Development",
    description: "Creating sustainable high-density residential complexes in prime city locations."
  },
  {
    title: "Luxury Estate Curation",
    description: "Bespoke architectural design and construction for exclusive private residences."
  },
  {
    title: "Sustainable Engineering",
    description: "Integrating renewable energy and hospital-grade air filtration in every project."
  },
  {
    title: "Property Management",
    description: "Comprehensive post-construction services to maintain the Rathore legacy."
  },
  {
    title: "Investment Advisory",
    description: "Strategic guidance for high-yield real estate portfolio diversification."
  }
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="space-y-4 mb-12 md:mb-16">
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">Our Services</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="relative aspect-video lg:aspect-[4/5] rounded-[32px] md:rounded-[40px] overflow-hidden">
          <Image
            src="https://picsum.photos/seed/services-luxury/800/1000"
            alt="Service visual"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-0">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-b border-zinc-200 py-6 md:py-8 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors px-4 -mx-4 rounded-2xl"
            >
              <div className="space-y-1 pr-4">
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-zinc-900 group-hover:text-black transition-colors">{service.title}</h3>
                <p className="text-xs md:text-sm text-zinc-700 font-medium">{service.description}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-zinc-300 flex-shrink-0 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all text-zinc-900">
                <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
          
          <div className="pt-10 md:pt-12">
            <button className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all duration-300 w-full md:w-auto justify-center md:justify-start">
              <div className="w-2 h-2 rounded-full bg-white transition-colors" />
              All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
