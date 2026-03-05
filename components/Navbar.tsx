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

  // Improved sticky nav styling
  const navClasses = isScrolled 
    ? "bg-zinc-950/80 backdrop-blur-2xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
    : "bg-transparent border-b border-transparent py-6"

  const buttonClasses = isScrolled
    ? "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20"
    : "bg-white text-black hover:bg-zinc-200"

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Developments", href: "/developments" },
    { name: "Our Vision", href: "/about" },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClasses}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold tracking-tighter text-white">
              {siteConfig.name.split(' ')[0]}
              <span className="text-primary italic group-hover:text-white transition-colors">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="relative text-[10px] font-black tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors group py-2"
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ${isActive ? 'scale-x-100' : ''}`} />
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link 
              href="/login" 
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              <User size={14} />
              Client Portal
            </Link>
            <div className="w-px h-4 bg-white/20" />
            <button 
              onClick={() => setIsModalOpen(true)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${buttonClasses}`}
            >
              Schedule a Visit
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed inset-0 z-40 bg-zinc-950 flex flex-col pt-24 pb-8 px-6 lg:hidden"
            >
              <div className="flex flex-col gap-6 mt-8">
                {[...navLinks, { name: "Client Portal", href: "/login" }].map((link, idx) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                      className="border-b border-white/10 pb-4"
                    >
                      <Link 
                        href={link.href} 
                        className={`text-4xl font-bold tracking-tighter transition-colors flex items-center justify-between ${isActive ? 'text-white' : 'text-white/50'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                        {isActive && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-auto pt-8 space-y-6">
                <button 
                  onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                  className="w-full bg-primary text-white py-5 rounded-2xl text-center text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20"
                >
                  Schedule a Visit
                </button>
                
                <div className="flex justify-between items-center px-4 text-white/40 text-[10px] font-black uppercase tracking-widest">
                  <a href={siteConfig.socials.instagram} className="hover:text-white transition-colors">Instagram</a>
                  <a href={siteConfig.socials.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
                  <a href={siteConfig.socials.twitter} className="hover:text-white transition-colors">Twitter</a>
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
