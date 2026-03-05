'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { 
  MapPin, 
  Home, 
  Maximize, 
  ArrowLeft, 
  CheckCircle2, 
  Calendar, 
  Share2, 
  Heart,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react"
import { properties } from "@/lib/properties"
import { GlobalConversionModal } from "@/components/GlobalConversionModal"

export default function PropertyDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)
  
  const property = properties.find(p => p.id === id)
  const [isCopied, setIsCopied] = React.useState(false)
  const [modalMode, setModalMode] = React.useState<'schedule' | 'brochure'>('schedule')
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const openModal = (mode: 'schedule' | 'brochure') => {
    setModalMode(mode)
    setIsModalOpen(true)
  }

  const handleShare = async () => {
    const shareData = {
      title: property?.title || "Property Details",
      text: `Check out this property: ${property?.title} in ${property?.location}`,
      url: typeof window !== 'undefined' ? window.location.href : '',
    }

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error("Error sharing:", err)
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      } catch (err) {
        console.error("Error copying to clipboard:", err)
      }
    }
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-bold text-zinc-900">Property not found.</h1>
        <Link href="/properties" className="text-black font-bold uppercase tracking-widest underline">
          Back to Portfolio
        </Link>
      </div>
    )
  }

  return (
    <main className="pt-20 md:pt-24 pb-24 md:pb-24 bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3 md:space-y-4"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <Link 
                href="/properties" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-black transition-all"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <span className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest ${
                property.status === 'Limited Units' 
                  ? 'bg-amber-500 text-white animate-pulse' 
                  : property.status === 'Coming Soon' 
                    ? 'bg-blue-500 text-white'
                    : property.status === 'Pre-Launch'
                      ? 'bg-purple-500 text-white'
                      : 'bg-emerald-500 text-white'
              }`}>
                {property.status}
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-none">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-white/80 font-medium text-sm md:text-base">
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              <span>{property.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10 md:space-y-12">
            <div className="flex flex-wrap gap-6 md:gap-8 py-6 md:py-8 border-y border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-900">
                  <Home className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">Bedrooms</p>
                  <p className="font-bold text-zinc-900 text-sm md:text-base">{property.specs.beds} Units</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-900">
                  <Maximize className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">Total Area</p>
                  <p className="font-bold text-zinc-900 text-sm md:text-base">{property.specs.area}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-900">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">Handover</p>
                  <p className="font-bold text-zinc-900 text-sm md:text-base">Q4 2026</p>
                </div>
              </div>
            </div>

            {/* RERA Compliance */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <p className="text-sm font-bold text-emerald-800">
                RERA Registered — Reg. No. {property.rera || `RERA${String(property.id).padStart(4, '0')}MAHA`}
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">About the Property</h2>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-medium">
                {property.description}
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">Premium Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {property.amenities?.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 md:p-4 bg-zinc-50 rounded-xl md:rounded-2xl border border-zinc-100">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
                    <span className="font-bold text-zinc-900 text-sm md:text-base">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {property.gallery && property.gallery.length > 0 && (
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {property.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden group">
                      <Image
                        src={img}
                        alt={`${property.title} Gallery ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / CTA */}
          <div className="space-y-8 hidden md:block">
            <div className="sticky top-32 space-y-6">
              <div className="bg-zinc-900 rounded-[32px] md:rounded-[40px] p-6 md:p-8 text-white space-y-6 md:space-y-8 shadow-2xl shadow-zinc-900/20">
                <div className="space-y-1 md:space-y-2">
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/50">Investment Starts From</p>
                  <p className="text-3xl md:text-4xl font-bold tracking-tight">{property.price}</p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <button 
                    onClick={() => openModal('brochure')}
                    className="w-full bg-white text-black py-4 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
                  >
                    Download Brochure <ChevronRight size={16} />
                  </button>
                  <button 
                    onClick={() => openModal('schedule')}
                    className="w-full bg-white/10 border border-white/20 text-white py-4 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
                  >
                    Schedule a Visit
                  </button>
                </div>

                <div className="pt-6 md:pt-8 border-t border-white/10 space-y-6">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/50">Contact Sales Advisor</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-800 overflow-hidden">
                      <Image src="https://picsum.photos/seed/advisor/100/100" alt="Advisor" width={48} height={48} />
                    </div>
                    <div>
                      <p className="font-bold text-sm md:text-base">Sarah Jenkins</p>
                      <p className="text-[10px] md:text-xs text-white/50">Senior Portfolio Manager</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:+11234567890" className="flex-1 bg-zinc-800 p-3 rounded-xl flex items-center justify-center hover:bg-zinc-700 transition-colors">
                      <Phone size={18} />
                    </a>
                    <a href="mailto:sarah@rathoredevelopers.com" className="flex-1 bg-zinc-800 p-3 rounded-xl flex items-center justify-center hover:bg-zinc-700 transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <button 
                  onClick={handleShare}
                  className="flex-1 py-4 border border-zinc-200 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-zinc-50 transition-colors relative overflow-hidden"
                >
                  <Share2 size={16} /> {isCopied ? "Link Copied!" : "Share"}
                  <AnimatePresence>
                    {isCopied && (
                      <motion.div 
                        initial={{ y: 40 }}
                        animate={{ y: 0 }}
                        exit={{ y: 40 }}
                        className="absolute inset-0 bg-emerald-500 text-white flex items-center justify-center text-[10px] md:text-xs font-bold"
                      >
                        Copied to Clipboard
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
                <button className="flex-1 py-4 border border-zinc-200 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-zinc-50 transition-colors">
                  <Heart size={16} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="bg-zinc-50 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">
          <div className="flex justify-between items-end">
            <div className="space-y-3 md:space-y-4">
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">Curated Selection</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">Similar Residences.</h2>
            </div>
            <Link href="/properties" className="text-[10px] md:text-xs font-bold uppercase tracking-widest underline text-black">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {properties.filter(p => p.id !== id).slice(0, 3).map((prop) => (
              <Link key={prop.id} href={`/properties/${prop.id}`} className="group">
                <div className="relative aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden mb-4 md:mb-6">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-zinc-900">{prop.title}</h3>
                <p className="text-xs md:text-sm text-zinc-500 font-medium">{prop.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-zinc-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Starting from</p>
          <p className="text-lg font-bold tracking-tight text-zinc-900">{property.price}</p>
        </div>
        <div className="flex gap-2">
          <a href="tel:+11234567890" className="w-11 h-11 rounded-xl border border-zinc-200 flex items-center justify-center text-zinc-700 hover:bg-zinc-50 transition-colors">
            <Phone size={18} />
          </a>
          <button
            onClick={() => openModal('schedule')}
            className="bg-black text-white px-5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
          >
            Schedule Visit
          </button>
        </div>
      </div>

      <GlobalConversionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedProperty={property.title}
        mode={modalMode}
      />
    </main>
  )
}
