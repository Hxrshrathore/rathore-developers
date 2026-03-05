'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, Minus, Search, MessageSquare, Phone, Mail } from "lucide-react"

const faqs = [
  {
    category: "Buying & Investment",
    questions: [
      {
        q: "What is the typical process for purchasing a Rathore property?",
        a: "The process begins with a private viewing and consultation. Once you've selected a property, a reservation agreement is signed, followed by a formal contract and deposit. Our legal and financial teams will guide you through every step of the closing process."
      },
      {
        q: "Do you offer financing options for international buyers?",
        a: "Yes, we partner with several global financial institutions that offer competitive mortgage rates and financing solutions for both domestic and international investors."
      },
      {
        q: "What are the expected rental yields for your urban developments?",
        a: "While yields vary by location and property type, our urban developments typically see rental yields between 4% and 7% per annum, driven by high demand for luxury residences in prime city centers."
      }
    ]
  },
  {
    category: "Construction & Design",
    questions: [
      {
        q: "How does Rathore ensure the quality of its developments?",
        a: "We maintain a rigorous quality control process, from the selection of premium materials to the final architectural inspection. Every project is overseen by a dedicated team of senior engineers and architects."
      },
      {
        q: "Can I customize the interior of my residence?",
        a: "Yes, for pre-launch and under-construction properties, we offer a range of curated interior design packages and customization options for finishes, layouts, and smart home integrations."
      },
      {
        q: "What sustainability standards do your projects follow?",
        a: "All Rathore developments aim for LEED Gold or Platinum certification. We integrate renewable energy, high-efficiency insulation, and advanced water management systems as standard."
      }
    ]
  },
  {
    category: "After-Sales & Management",
    questions: [
      {
        q: "What property management services do you provide?",
        a: "Our comprehensive property management includes 24/7 concierge services, maintenance, security, and optional rental management for investors."
      },
      {
        q: "Is there a warranty on the construction?",
        a: "Yes, we provide a 10-year structural warranty and a 2-year warranty on all fixtures and fittings for every Rathore residence."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [openIndex, setOpenIndex] = React.useState<string | null>("0-0")

  const filteredFaqs = faqs.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0)

  return (
    <main className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600"
          >
            Support Center
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] text-zinc-900"
          >
            Frequently Asked <br /> Questions.
          </motion.h1>
          
          <div className="relative w-full max-w-xl pt-8">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for questions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-full py-5 pl-16 pr-8 focus:ring-2 focus:ring-black outline-none transition-all text-lg font-medium text-zinc-900 placeholder:text-zinc-400"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            {filteredFaqs.map((cat, catIdx) => (
              <div key={catIdx} className="space-y-8">
                <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-4">
                  {cat.category}
                </h2>
                <div className="space-y-4">
                  {cat.questions.map((item, qIdx) => {
                    const id = `${catIdx}-${qIdx}`
                    const isOpen = openIndex === id
                    return (
                      <div key={id} className="border-b border-zinc-100 last:border-none">
                        <button 
                          onClick={() => setOpenIndex(isOpen ? null : id)}
                          className="w-full py-6 flex items-center justify-between text-left group"
                        >
                          <span className={`text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-black' : 'text-zinc-700 group-hover:text-black'}`}>
                            {item.q}
                          </span>
                          <div className={`w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center transition-all ${isOpen ? 'bg-black text-white border-black' : 'group-hover:border-black'}`}>
                            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                          </div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="pb-8 text-zinc-700 leading-relaxed font-medium text-lg max-w-2xl">
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-24 space-y-4">
                <div className="text-4xl font-bold text-zinc-300">No results found.</div>
                <p className="text-zinc-500 font-medium">Try searching for different keywords.</p>
              </div>
            )}
          </div>

          {/* Sidebar Contact */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-zinc-900 rounded-[40px] p-10 text-white space-y-8">
                <h3 className="text-2xl font-bold tracking-tight">Still have questions?</h3>
                <p className="text-white/70 font-medium">Our dedicated support team is here to help you with any inquiries regarding our properties and services.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/40">Call Us</div>
                      <div className="text-sm font-bold">+1 (123) 456 789</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/40">Email Us</div>
                      <div className="text-sm font-bold">support@rathoredevelopers.com</div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-white text-black py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all">
                  Contact Support
                </button>
              </div>

              <div className="bg-zinc-50 rounded-[40px] p-10 border border-zinc-100 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                  <MessageSquare className="text-zinc-900" size={24} />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-zinc-900">Live Consultation</h3>
                <p className="text-zinc-700 text-sm font-medium">Chat with one of our property experts in real-time for immediate assistance.</p>
                <button className="text-xs font-bold uppercase tracking-widest underline text-black">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
