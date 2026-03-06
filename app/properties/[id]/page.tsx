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
  ChevronRight,
  Calculator,
  TrendingUp,
  IndianRupee,
  Info
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
  const [loanPercent, setLoanPercent] = React.useState(70)
  const [loanYears, setLoanYears] = React.useState(20)
  const [interestRate, setInterestRate] = React.useState(8.5)

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

            {/* ─── Financial Decision Support ─── */}
            {(() => {
              // Parse price like "From ₹12.4 Cr" → 12.4
              const priceMatch = property.price.match(/([\d.]+)/)
              const basePriceCr = priceMatch ? parseFloat(priceMatch[1]) : 10
              const basePriceLakh = basePriceCr * 100 // 1 Cr = 100 Lakh
              const basePriceRs = basePriceCr * 1_00_00_000

              // EMI Calculation
              const loanAmount = basePriceRs * (loanPercent / 100)
              const downPayment = basePriceRs - loanAmount
              const monthlyRate = interestRate / 100 / 12
              const totalMonths = loanYears * 12
              const emi = monthlyRate > 0
                ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
                : loanAmount / totalMonths

              // Capital Appreciation (estimated 12% CAGR for luxury)
              const cagr = 12
              const projections = [3, 5, 7, 10]
              const futureValues = projections.map(yr => ({
                year: yr,
                value: basePriceCr * Math.pow(1 + cagr / 100, yr),
                gain: basePriceCr * Math.pow(1 + cagr / 100, yr) - basePriceCr,
              }))

              // Rental Yield
              const annualRentalYield = 3.2 // percent
              const monthlyRental = (basePriceRs * annualRentalYield / 100) / 12

              const formatCurrency = (val: number) => {
                if (val >= 1_00_00_000) return `₹${(val / 1_00_00_000).toFixed(1)} Cr`
                if (val >= 1_00_000) return `₹${(val / 1_00_000).toFixed(1)} L`
                return `₹${Math.round(val).toLocaleString('en-IN')}`
              }

              return (
                <div className="space-y-8 md:space-y-12 pt-4">
                  <div className="space-y-3">
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">Investment Intelligence</p>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">Financial Overview</h2>
                  </div>

                  {/* EMI Calculator */}
                  <div className="bg-zinc-50 border border-zinc-100 rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center">
                          <Calculator size={18} />
                        </div>
                        <div>
                          <h3 className="font-bold text-zinc-900 text-base md:text-lg">EMI Calculator</h3>
                          <p className="text-[10px] text-zinc-500 font-medium">Adjust the sliders to fit your investment plan</p>
                        </div>
                      </div>
                      <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest hidden md:block">Property Value: {property.price}</div>
                    </div>

                    {/* 2x2 Slider Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Loan % Slider */}
                      <div className="space-y-3 bg-white rounded-xl p-4 border border-zinc-100">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Loan Amount</p>
                            <div className="group relative">
                              <Info size={12} className="text-zinc-300 cursor-help" />
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-zinc-900 text-white text-[10px] font-medium p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-xl">
                                Percentage of the property value you want to finance through a home loan. Most banks offer up to 80–90%.
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 rotate-45 -mt-1" />
                              </div>
                            </div>
                          </div>
                          <p className="text-sm font-bold text-zinc-900">{loanPercent}% <span className="text-zinc-400 font-medium">({formatCurrency(basePriceRs * loanPercent / 100)})</span></p>
                        </div>
                        <input
                          type="range"
                          min={30}
                          max={90}
                          step={5}
                          value={loanPercent}
                          onChange={(e) => setLoanPercent(Number(e.target.value))}
                          className="w-full premium-slider"
                        />
                        <div className="flex justify-between text-[9px] text-zinc-300 font-bold">
                          <span>30%</span>
                          <span>90%</span>
                        </div>
                      </div>

                      {/* Tenure Slider */}
                      <div className="space-y-3 bg-white rounded-xl p-4 border border-zinc-100">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Loan Tenure</p>
                            <div className="group relative">
                              <Info size={12} className="text-zinc-300 cursor-help" />
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-zinc-900 text-white text-[10px] font-medium p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-xl">
                                Duration of the home loan in years. Longer tenure means lower EMI but higher total interest paid.
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 rotate-45 -mt-1" />
                              </div>
                            </div>
                          </div>
                          <p className="text-sm font-bold text-zinc-900">{loanYears} years</p>
                        </div>
                        <input
                          type="range"
                          min={5}
                          max={30}
                          step={1}
                          value={loanYears}
                          onChange={(e) => setLoanYears(Number(e.target.value))}
                          className="w-full premium-slider"
                        />
                        <div className="flex justify-between text-[9px] text-zinc-300 font-bold">
                          <span>5 yrs</span>
                          <span>30 yrs</span>
                        </div>
                      </div>

                      {/* Interest Rate Slider */}
                      <div className="space-y-3 bg-white rounded-xl p-4 border border-zinc-100">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Interest Rate</p>
                            <div className="group relative">
                              <Info size={12} className="text-zinc-300 cursor-help" />
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-zinc-900 text-white text-[10px] font-medium p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-xl">
                                Annual interest rate offered by your bank. Current home loan rates in India range from 8.25% to 9.5% for luxury properties.
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 rotate-45 -mt-1" />
                              </div>
                            </div>
                          </div>
                          <p className="text-sm font-bold text-zinc-900">{interestRate}% <span className="text-zinc-400 font-medium">p.a.</span></p>
                        </div>
                        <input
                          type="range"
                          min={6}
                          max={12}
                          step={0.25}
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full premium-slider"
                        />
                        <div className="flex justify-between text-[9px] text-zinc-300 font-bold">
                          <span>6%</span>
                          <span>12%</span>
                        </div>
                      </div>

                      {/* Down Payment Slider */}
                      <div className="space-y-3 bg-white rounded-xl p-4 border border-zinc-100">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1.5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Down Payment</p>
                            <div className="group relative">
                              <Info size={12} className="text-zinc-300 cursor-help" />
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-zinc-900 text-white text-[10px] font-medium p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-xl">
                                The upfront amount you pay from your own funds. Adjusting this will update the loan percentage accordingly.
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 rotate-45 -mt-1" />
                              </div>
                            </div>
                          </div>
                          <p className="text-sm font-bold text-zinc-900">{100 - loanPercent}% <span className="text-zinc-400 font-medium">({formatCurrency(downPayment)})</span></p>
                        </div>
                        <input
                          type="range"
                          min={10}
                          max={70}
                          step={5}
                          value={100 - loanPercent}
                          onChange={(e) => setLoanPercent(100 - Number(e.target.value))}
                          className="w-full premium-slider"
                        />
                        <div className="flex justify-between text-[9px] text-zinc-300 font-bold">
                          <span>10%</span>
                          <span>70%</span>
                        </div>
                      </div>
                    </div>

                    {/* EMI Result — Full Width */}
                    <div className="bg-zinc-900 text-white rounded-xl md:rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-white/50 mb-1">Your Estimated EMI</p>
                        <p className="text-3xl md:text-4xl font-bold tracking-tight">{formatCurrency(emi)}<span className="text-sm font-medium text-white/40 ml-1">/month</span></p>
                      </div>
                      <div className="flex gap-6 text-[10px] text-white/50 font-medium">
                        <div>
                          <p className="text-white/30 mb-0.5">Total Payable</p>
                          <p className="text-white font-bold text-sm">{formatCurrency(emi * totalMonths)}</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div>
                          <p className="text-white/30 mb-0.5">Total Interest</p>
                          <p className="text-white font-bold text-sm">{formatCurrency(emi * totalMonths - loanAmount)}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Capital Appreciation + Rental Yield side-by-side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Capital Appreciation */}
                    <div className="bg-zinc-50 border border-zinc-100 rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center">
                          <TrendingUp size={18} />
                        </div>
                        <div>
                          <h3 className="font-bold text-zinc-900">Capital Appreciation</h3>
                          <p className="text-[10px] text-zinc-500 font-medium">Projected growth at {cagr}% CAGR</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {futureValues.map((fv) => {
                          const growthPercent = ((fv.value - basePriceCr) / basePriceCr) * 100
                          const barWidth = Math.min(100, (fv.value / futureValues[futureValues.length - 1].value) * 100)
                          return (
                            <div key={fv.year} className="space-y-1.5">
                              <div className="flex justify-between items-baseline">
                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{fv.year} Years</p>
                                <div className="text-right">
                                  <span className="text-sm font-bold text-zinc-900">₹{fv.value.toFixed(1)} Cr</span>
                                  <span className="text-[10px] text-zinc-400 ml-2">+{growthPercent.toFixed(0)}%</span>
                                </div>
                              </div>
                              <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${barWidth}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                  className="h-full bg-zinc-900 rounded-full"
                                />
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      <p className="text-[9px] text-zinc-400 font-medium italic">* Based on historical luxury real estate CAGR. Actual returns may vary.</p>
                    </div>

                    {/* Rental Yield */}
                    <div className="bg-zinc-900 text-white rounded-2xl md:rounded-3xl p-6 md:p-8 space-y-6 flex flex-col">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <IndianRupee size={18} />
                        </div>
                        <div>
                          <h3 className="font-bold">Rental Income Potential</h3>
                          <p className="text-[10px] text-white/50 font-medium">Estimated at {annualRentalYield}% gross yield</p>
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col justify-center space-y-6">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Monthly Rental Income</p>
                          <p className="text-3xl md:text-4xl font-bold tracking-tight">{formatCurrency(monthlyRental)}<span className="text-sm font-medium text-white/40">/mo</span></p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Annual Income</p>
                            <p className="text-lg font-bold">{formatCurrency(monthlyRental * 12)}</p>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Gross Yield</p>
                            <p className="text-lg font-bold">{annualRentalYield}%</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <p className="text-[10px] text-white/40 font-medium">
                          Combined ROI (Rental + Appreciation) ≈ <span className="text-white font-bold">{(annualRentalYield + cagr).toFixed(1)}% p.a.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}
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
