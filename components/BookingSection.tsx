'use client'

import * as React from "react"
import { motion } from "motion/react"
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react"

export function BookingSection() {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <section id="book-visit" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">Experience Excellence</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-zinc-900">
              Schedule Your <br /> Private Viewing.
            </h2>
            <p className="text-zinc-700 text-lg max-w-md font-medium">
              Book a personalized tour of our developments and experience the craftsmanship firsthand with our property consultants.
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100">
                  <Calendar className="text-zinc-600" size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900">Flexible Scheduling</div>
                  <div className="text-xs text-zinc-600 font-medium">Monday - Sunday, 9AM - 8PM</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100">
                  <User className="text-zinc-600" size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900">Expert Guidance</div>
                  <div className="text-xs text-zinc-600 font-medium">Personalized tour with a senior consultant</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-zinc-300/50 border border-zinc-200"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock size={40} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Request Received</h3>
                <p className="text-zinc-700 font-medium">Our team will contact you within 24 hours to confirm your visit.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-xs font-bold uppercase tracking-widest underline pt-4 text-black"
                >
                  Schedule another visit
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                      <input required type="text" placeholder="John Doe" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm text-zinc-900 placeholder:text-zinc-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                      <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm text-zinc-900 placeholder:text-zinc-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                    <input required type="email" placeholder="john@example.com" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm text-zinc-900 placeholder:text-zinc-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Select Property</label>
                  <select className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 px-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm appearance-none cursor-pointer text-zinc-900">
                    <option>The Obsidian Tower</option>
                    <option>Azure Bay Residences</option>
                    <option>Veridian Grove</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Preferred Date</label>
                  <input required type="date" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 px-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm text-zinc-900" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Additional Notes</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-zinc-500" size={16} />
                    <textarea rows={3} placeholder="Tell us about your requirements..." className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm resize-none text-zinc-900 placeholder:text-zinc-400" />
                  </div>
                </div>

                <button 
                  disabled={status === 'submitting'}
                  className="w-full bg-black text-white py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all disabled:opacity-50 shadow-lg shadow-black/20"
                >
                  {status === 'submitting' ? 'Processing...' : 'Request Visit'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
