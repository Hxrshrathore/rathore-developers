'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"

export function Footer() {
  const pathname = usePathname()
  if (pathname === '/login' || pathname === '/dashboard') return null

  return (
    <footer className="bg-black text-white pt-16 md:pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16 md:mb-24">
          <div className="space-y-10 md:space-y-12">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] uppercase">
              Iconic Living. <br /> Timeless Design.
            </h2>
            
            <div className="space-y-4">
              <p className="text-white/80 text-[10px] md:text-sm uppercase tracking-widest font-bold">Contact Us</p>
              <div className="space-y-2">
                <p className="text-base md:text-lg text-white/90">30 Charlyn Ave, Renovo, PA 17764, USA</p>
                <p className="text-base md:text-lg text-white/90">+1 (123) 456 789</p>
                <p className="text-base md:text-lg text-white/90">information@rathoredevelopers.com</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12">
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors font-bold">Home</Link>
                <Link href="/about" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors font-bold">Our Vision</Link>
                <Link href="/properties" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors font-bold">Properties</Link>
                <Link href="/developments" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors font-bold">Developments</Link>
                <Link href="/faq" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors font-bold">FAQ</Link>
              </div>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors">Facebook</a>
                <a href="#" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors">Instagram</a>
                <a href="#" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors">Linkedin</a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-6 md:p-12 rounded-[32px] md:rounded-3xl border border-white/10 h-fit">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-sm w-full"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-sm w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-sm w-full"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-sm w-full"
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-sm resize-none"
              />
              <button className="w-full bg-white text-black py-5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 text-center md:text-left">
          <p>© Rathore. All Rights Reserved. Licensing</p>
          <div className="flex gap-6 md:gap-8">
            <p>Template by wCopilot</p>
            <p>Powered by Webflow</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
