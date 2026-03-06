'use client'

import * as React from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { MapPin, Home, Maximize, ArrowRight, Filter, Search, ChevronDown } from "lucide-react"
import { properties } from "@/lib/properties"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const categories = ["All", "High-Rise", "Waterfront", "Sustainable", "Lofts"]

export default function PropertiesPage() {
  const searchParams = useSearchParams()
  const cityParam = searchParams.get('city') || ''
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState(cityParam)

  // Sync with URL city param
  React.useEffect(() => {
    if (cityParam) setSearchQuery(cityParam)
  }, [cityParam])

  const filteredProperties = properties.filter(prop => {
    const matchesCategory = activeCategory === "All" || prop.category === activeCategory
    const matchesSearch = prop.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prop.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600"
            >
              Our Portfolio
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900"
            >
              Iconic Residences.
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-700 max-w-sm text-lg leading-relaxed font-medium"
          >
            Explore our curated collection of luxury developments across the globe.
          </motion.p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between bg-zinc-50 p-6 rounded-[32px] border border-zinc-100 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-black text-white shadow-lg shadow-black/20' 
                    : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or location..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-zinc-200 rounded-full py-3.5 pl-12 pr-6 focus:ring-2 focus:ring-black outline-none transition-all text-sm font-medium text-zinc-900 placeholder:text-zinc-400"
            />
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProperties.map((prop, idx) => (
            <motion.div
              key={prop.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group cursor-pointer"
            >
              <Link href={`/properties/${prop.id}`}>
                <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden mb-6 shadow-xl shadow-zinc-200/50">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-black text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {prop.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="space-y-4 px-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-zinc-900">{prop.title}</h3>
                      <div className="flex items-center gap-1 text-zinc-600 text-xs mt-1 font-bold">
                        <MapPin size={12} />
                        <span>{prop.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-black">{prop.price}</div>
                    </div>
                  </div>

                  <div className="flex gap-6 border-y border-zinc-200 py-4">
                    <div className="flex items-center gap-2 text-zinc-700 font-bold">
                      <Home size={14} />
                      <span className="text-xs">{prop.specs.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-700 font-bold">
                      <Maximize size={14} />
                      <span className="text-xs">{prop.specs.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all text-black">
                    View Details <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-24 space-y-4">
            <div className="text-4xl font-bold text-zinc-300">No properties found.</div>
            <p className="text-zinc-500 font-medium">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="text-xs font-bold uppercase tracking-widest underline text-black"
            >
              Reset all filters
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
