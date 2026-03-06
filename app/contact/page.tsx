'use client'

import * as React from 'react'
import { motion } from "motion/react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { siteConfig } from "@/lib/config"

export default function ContactPage() {
  const [formState, setFormState] = React.useState({ name: '', email: '', phone: '', message: '', interest: 'residential' })
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
            Get in Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] text-zinc-900"
          >
            Let's Build <br />Something Together.
          </motion.h1>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-zinc-600" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Head Office</p>
                  <p className="text-zinc-900 font-medium">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-zinc-600" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Phone</p>
                  <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-zinc-900 font-medium hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-zinc-600" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Email</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-zinc-900 font-medium hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-zinc-600" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-1">Office Hours</p>
                  <p className="text-zinc-900 font-medium">Mon — Sat, 10:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-2xl p-8 text-white">
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-3">Prefer WhatsApp?</p>
              <p className="text-white/70 text-sm mb-4">
                Chat with our team directly for faster responses on property inquiries.
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-green-700 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-50 rounded-3xl p-12 border border-zinc-100 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center mb-6">
                  <Send size={24} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Message Sent</h3>
                <p className="text-zinc-500 max-w-sm">
                  Thank you for your interest. Our team will respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-100 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Phone</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Interest</label>
                    <select
                      value={formState.interest}
                      onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                    >
                      <option value="residential">Residential Property</option>
                      <option value="investment">Investment Inquiry</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-zinc-900 text-white py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
