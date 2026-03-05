'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, User, Phone, Mail, Calendar, MessageSquare, CheckCircle2 } from "lucide-react"

interface GlobalConversionModalProps {
  isOpen: boolean
  onClose: () => void
  preSelectedProperty?: string
  mode?: 'schedule' | 'brochure'
}

const propertyOptions = [
  "The Obsidian Tower",
  "Azure Bay Residences",
  "Veridian Grove",
  "The Quartz Lofts",
  "Elysian Heights",
  "Solstice Villas",
]

export function GlobalConversionModal({ isOpen, onClose, preSelectedProperty, mode = 'schedule' }: GlobalConversionModalProps) {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle')
  const [email, setEmail] = React.useState('')

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => {
        setStatus('idle')
        onClose()
      }, 2500)
    }, 1500)
  }

  const isBrochure = mode === 'brochure'
  const title = isBrochure ? 'Download Brochure' : 'Schedule Your Visit'
  const subtitle = isBrochure 
    ? 'Enter your email to receive the detailed project brochure.'
    : 'Book a personalized tour with one of our senior property consultants.'
  const ctaText = isBrochure ? 'Send Brochure' : 'Request Visit'

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-[32px] md:rounded-[40px] w-full max-w-lg p-8 md:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-zinc-100 hover:text-black transition-all"
            >
              <X size={18} />
            </button>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">
                  {isBrochure ? 'Brochure Sent!' : 'Request Received!'}
                </h3>
                <p className="text-zinc-600 font-medium">
                  {isBrochure
                    ? 'Check your email for the brochure download link.'
                    : 'Our team will contact you within 2 hours to confirm your visit.'}
                </p>
              </motion.div>
            ) : (
              <>
                <div className="mb-8 space-y-2 pr-10">
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">
                    {isBrochure ? 'Project Details' : 'Private Viewing'}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
                    {title}
                  </h3>
                  <p className="text-zinc-600 text-sm font-medium">{subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {isBrochure ? (
                    <>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                          <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm text-zinc-900 placeholder:text-zinc-400"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Select Property</label>
                        <select
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 px-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm appearance-none cursor-pointer text-zinc-900"
                          defaultValue={preSelectedProperty || propertyOptions[0]}
                        >
                          {propertyOptions.map(p => (
                            <option key={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                            <input required type="text" placeholder="John Doe" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm text-zinc-900 placeholder:text-zinc-400" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Phone</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                            <input required type="tel" placeholder="+91 98765 43210" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm text-zinc-900 placeholder:text-zinc-400" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Select Property</label>
                        <select
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 px-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm appearance-none cursor-pointer text-zinc-900"
                          defaultValue={preSelectedProperty || propertyOptions[0]}
                        >
                          {propertyOptions.map(p => (
                            <option key={p}>{p}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Preferred Date</label>
                        <input required type="date" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 px-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm text-zinc-900" />
                      </div>
                    </>
                  )}

                  <button
                    disabled={status === 'submitting'}
                    className="w-full bg-black text-white py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all disabled:opacity-50 shadow-lg shadow-black/20 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : ctaText}
                  </button>

                  <p className="text-center text-[10px] text-zinc-400 font-medium">
                    No spam. Your data is secure and will only be used to connect you with our property consultants.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
