'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, User } from "lucide-react"
import { GlobalConversionModal } from "./GlobalConversionModal"
import { siteConfig } from "@/lib/config"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (pathname === '/login' || pathname === '/dashboard') return null

  const navClasses = isScrolled 
    ? "bg-white/80 backdrop-blur-xl border-b border-zinc-200 text-black shadow-sm"
    : "bg-black/10 backdrop-blur-md border-b border-white/10 text-white"

  const linkClasses = isScrolled
    ? "text-black hover:text-zinc-600"
    : "text-white hover:text-white/70"

  const buttonClasses = isScrolled
    ? "bg-black text-white hover:bg-zinc-800"
    : "bg-white text-black hover:bg-zinc-200"

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold tracking-tighter italic transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>{siteConfig.name.split(' ')[0]}</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-xs font-bold tracking-widest transition-colors uppercase ${linkClasses}`}>Home</Link>
            <Link href="/properties" className={`text-xs font-bold tracking-widest transition-colors uppercase ${linkClasses}`}>Properties</Link>
            <Link href="/developments" className={`text-xs font-bold tracking-widest transition-colors uppercase ${linkClasses}`}>Developments</Link>
            <Link href="/about" className={`text-xs font-bold tracking-widest transition-colors uppercase ${linkClasses}`}>Our Vision</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/login" 
              className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${linkClasses}`}
            >
              <User size={14} />
              Client Portal
            </Link>
            <button 
              onClick={() => setIsModalOpen(true)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${buttonClasses}`}
            >
              Schedule a Visit
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className={`md:hidden transition-colors ${isScrolled ? 'text-black' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-50 bg-black flex flex-col p-8 md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-bold tracking-tighter italic text-white">{siteConfig.name.split(' ')[0]}</span>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {[
                  { name: "Home", href: "/" },
                  { name: "Properties", href: "/properties" },
                  { name: "Developments", href: "/developments" },
                  { name: "Our Vision", href: "/about" },
                  { name: "Client Portal", href: "/login" },
                ].map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-4xl font-bold tracking-tighter text-white hover:text-white/60 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-8">
                <button 
                  onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                  className="block w-full bg-white text-black py-5 rounded-2xl text-center font-bold uppercase tracking-widest"
                >
                  Schedule a Visit
                </button>
                
                <div className="flex gap-6 text-white/40 text-xs font-bold uppercase tracking-widest">
                  <span>Instagram</span>
                  <span>LinkedIn</span>
                  <span>Twitter</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <GlobalConversionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        mode="schedule"
      />
    </>
  )
}
