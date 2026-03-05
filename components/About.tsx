'use client'

import Image from "next/image"
import { motion } from "motion/react"

export function About() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600"
          >
            Our Vision
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-zinc-900"
          >
            Redefining the horizon through architectural excellence.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video sm:aspect-[4/3] rounded-[32px] md:rounded-[40px] overflow-hidden"
        >
          <Image
            src="https://picsum.photos/seed/developer-vision/1200/900"
            alt="Luxury development vision"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12 md:mt-16">
        <div className="hidden lg:block" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-700 leading-relaxed font-medium text-sm md:text-base"
          >
            Rathore Developers is a premier real estate firm dedicated to creating iconic residential landmarks. Our philosophy merges avant-garde architecture with sustainable engineering to deliver spaces that are not just homes, but legacies.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-700 leading-relaxed font-medium text-sm md:text-base"
          >
            With a focus on prime urban locations and coastal retreats, we curate environments that offer an unparalleled lifestyle. Every project is a testament to our commitment to quality, innovation, and the art of living well.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
