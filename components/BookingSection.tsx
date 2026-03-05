'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { Calendar, Clock, User, Phone, Mail, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react"
import { properties } from "@/lib/properties"

export function BookingSection() {
  const [step, setStep] = React.useState<1 | 2 | 3>(1)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(3)
    }, 1500)
  }

  return (
    <section id="book-visit" className="py-24 px-6 bg-zinc-50 relative overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-100 rounded-l-[100px] opacity-50 transform translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">Experience Excellence</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-zinc-900">
              Interested? <br /> Let's Talk.
            </h2>
            <p className="text-zinc-700 text-lg max-w-md font-medium">
              Book a personalized tour of our developments. Leave your number and our senior consultants will call you within 30 minutes.
            </p>

            <div className="space-y-6 pt-8 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100">
                  <Clock className="text-zinc-600" size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900">Priority Response</div>
                  <div className="text-xs text-zinc-600 font-medium">Callback within 30 minutes during business hours</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100">
                  <User className="text-zinc-600" size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900">Expert Guidance</div>
                  <div className="text-xs text-zinc-600 font-medium">Direct line to a dedicated portfolio manager</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-zinc-300/50 border border-zinc-200 relative overflow-hidden"
          >
            {/* Progress Bar */}
            {step < 3 && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-100">
                <div 
                  className="h-full bg-black transition-all duration-500 ease-out"
                  style={{ width: step === 1 ? '50%' : '100%' }}
                />
              </div>
            )}

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.form 
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleNextStep} 
                  className="space-y-6 pt-4"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-zinc-900 hidden sm:block">Quick Inquiry</h3>
                    <p className="text-sm text-zinc-500 font-medium hidden sm:block">No commitment required. We respect your privacy.</p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                        <input required type="tel" placeholder="+91 98765 43210" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-5 pl-12 pr-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm text-zinc-900 placeholder:text-zinc-400 font-medium" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Property Interest</label>
                      <select className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-5 px-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm appearance-none cursor-pointer text-zinc-900 font-medium">
                        <option value="">I'm exploring my options</option>
                        {properties.map(p => (
                          <option key={p.id} value={p.title}>{p.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full bg-black text-white py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-black/20">
                      Request Callback <ArrowRight size={16} />
                    </button>
                    <p className="text-center text-[10px] text-zinc-400 mt-4 font-medium uppercase tracking-widest">Takes 30 seconds</p>
                  </div>
                </motion.form>
              )}

              {step === 2 && (
                <motion.form 
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleFinalSubmit} 
                  className="space-y-5 pt-4"
                >
                  <div className="space-y-2 mb-6">
                    <h3 className="text-2xl font-bold text-zinc-900">Provide More Context</h3>
                    <p className="text-sm text-zinc-500 font-medium">Help us prepare for our conversation (Optional)</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                      <input type="text" placeholder="John Doe" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm text-zinc-900 placeholder:text-zinc-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                        <input type="email" placeholder="john@example.com" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm text-zinc-900 placeholder:text-zinc-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Preferred Date</label>
                      <input type="date" className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 px-4 focus:ring-2 focus:ring-black focus:bg-white transition-all text-sm text-zinc-900" />
                    </div>
                  </div>

                  <div className="pt-6 flex gap-4">
                    <button 
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-5 rounded-2xl text-xs font-bold uppercase tracking-widest text-zinc-500 bg-zinc-100 hover:bg-zinc-200 transition-all basis-1/3"
                    >
                      Back
                    </button>
                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className="bg-black text-white py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-lg shadow-black/20 basis-2/3 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        'Confirm Details'
                      )}
                    </button>
                  </div>
                  <div className="text-center pt-2">
                    <button 
                      type="button"
                      onClick={handleFinalSubmit}
                      className="text-[10px] text-zinc-400 hover:text-black font-bold uppercase tracking-widest underline transition-colors"
                    >
                      Skip this step
                    </button>
                  </div>
                </motion.form>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">Request Received</h3>
                  <p className="text-zinc-700 font-medium">Our senior consultant will contact you shortly to arrange your viewing experience.</p>
                  <button 
                    onClick={() => setStep(1)}
                    className="text-xs font-bold uppercase tracking-widest underline pt-4 text-black"
                  >
                    Submit another request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

