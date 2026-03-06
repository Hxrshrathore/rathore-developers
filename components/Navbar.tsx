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

  // Determine if the navbar needs dark text based on the route and scroll position
  // The homepage relies on white text early on, whereas other pages start with a white bg.
  const isLightMode = !isScrolled && pathname !== '/'

  // Minimal and clean sticky nav styling
  const navClasses = isScrolled 
    ? "bg-zinc-950/95 backdrop-blur-2xl border-b border-white/5 py-3 shadow-md"
    : "bg-transparent border-b border-transparent py-5"

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
            <span className={`text-xl font-bold tracking-tighter transition-colors duration-300 ${isLightMode ? 'text-zinc-950' : 'text-white'}`}>
              {siteConfig.name.split(' ')[0]}
              <span className="text-primary italic opacity-0 group-hover:opacity-100 transition-opacity">.</span>
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
                  className={`relative text-[10px] font-bold tracking-[0.2em] uppercase py-2 transition-colors duration-300 group ${
                    isLightMode 
                      ? (isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900')
                      : (isActive ? 'text-white' : 'text-white/60 hover:text-white')
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ${isLightMode ? 'bg-zinc-900' : 'bg-white'} ${isActive ? 'scale-x-100' : ''}`} />
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link 
              href="/login" 
              className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isLightMode ? 'text-zinc-500 hover:text-zinc-900' : 'text-white/60 hover:text-white'}`}
            >
              <User size={14} />
              Client Portal
            </Link>
            <div className={`w-px h-3 transition-colors duration-300 ${isLightMode ? 'bg-zinc-300' : 'bg-white/20'}`} />
            <button 
              onClick={() => setIsModalOpen(true)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                isLightMode 
                  ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                  : (isScrolled ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md')
              }`}
            >
              Schedule a Visit
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 border ${
              isLightMode 
                ? 'bg-zinc-100 text-zinc-900 border-zinc-200' 
                : 'bg-white/10 backdrop-blur-md text-white border-white/10'
            }`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
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
