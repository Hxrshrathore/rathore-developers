'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, User, ChevronDown, ChevronRight } from "lucide-react"
import { GlobalConversionModal } from "./GlobalConversionModal"
import { siteConfig } from "@/lib/config"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null)
  const pathname = usePathname()
  const dropdownTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile nav on route change
  React.useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  if (pathname === '/login' || pathname === '/dashboard') return null

  const isLightMode = !isScrolled && pathname !== '/'

  const navClasses = isScrolled
    ? "bg-zinc-950/95 backdrop-blur-2xl border-b border-white/5 shadow-md"
    : "bg-transparent border-b border-transparent"

  const textColor = isLightMode ? 'text-zinc-900' : 'text-white'
  const textMuted = isLightMode ? 'text-zinc-500' : 'text-white/60'
  const hoverText = isLightMode ? 'hover:text-zinc-900' : 'hover:text-white'

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <>
      {/* Secondary Nav Bar — top utility strip */}
      <div className={`fixed top-0 left-0 right-0 z-[51] transition-all duration-500 ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2 hidden lg:flex items-center justify-end gap-6">
          {siteConfig.secondaryNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${textMuted} ${hoverText}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${navClasses} ${isScrolled ? 'top-0 py-3' : 'top-7 py-4'}`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className={`text-xl font-bold tracking-tighter transition-colors duration-300 ${textColor}`}>
              {siteConfig.name.split(' ')[0]}
              <span className="text-white/0 group-hover:text-zinc-400 italic transition-colors duration-300">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {siteConfig.navigation.map((item) => {
              const hasSections = item.sections && item.sections.length > 0
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasSections ? handleMouseEnter(item.label) : setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 text-[10px] font-bold tracking-[0.2em] uppercase py-2 transition-colors duration-300 group ${
                      isActive ? textColor : `${textMuted} ${hoverText}`
                    }`}
                  >
                    {item.label}
                    {hasSections && <ChevronDown size={10} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                    <span className={`absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ${isLightMode ? 'bg-zinc-900' : 'bg-white'} ${isActive ? 'scale-x-100' : ''}`} />
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/login"
              className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${textMuted} ${hoverText}`}
            >
              <User size={14} />
              Portal
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

        {/* ─── Desktop Mega Dropdown ─── */}
        <AnimatePresence>
          {activeDropdown && (() => {
            const item = siteConfig.navigation.find(n => n.label === activeDropdown)
            if (!item || !item.sections || item.sections.length === 0) return null
            return (
              <motion.div
                key={activeDropdown}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-0 right-0 z-40 hidden lg:block"
                onMouseEnter={() => handleMouseEnter(activeDropdown)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-zinc-950/98 backdrop-blur-2xl border-b border-white/5 shadow-2xl">
                  <div className="max-w-7xl mx-auto px-12 py-10">
                    <div className="flex gap-16">
                      {item.sections.map((section) => (
                        <div key={section.title} className="space-y-4 min-w-[180px]">
                          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                            {section.title}
                          </p>
                          <div className="space-y-2.5">
                            {section.links.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="block text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 group"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="w-0 group-hover:w-3 h-[1px] bg-white transition-all duration-300" />
                                  {link.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })()}
        </AnimatePresence>
      </nav>

      {/* ─── Mobile Fullscreen Menu ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-zinc-950 flex flex-col pt-20 pb-6 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-1 mt-4">
              {siteConfig.navigation.map((item, idx) => {
                const hasSections = item.sections && item.sections.length > 0
                const isExpanded = mobileExpanded === item.label
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + idx * 0.05 }}
                  >
                    {/* Top-level link */}
                    <div className="border-b border-white/5 py-4 flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="text-2xl font-bold tracking-tighter text-white/80 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {hasSections && (
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                          className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50"
                        >
                          <ChevronDown size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {/* Accordion Sub-sections */}
                    <AnimatePresence>
                      {isExpanded && hasSections && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-4 space-y-5 pt-2">
                            {item.sections.map((section) => (
                              <div key={section.title} className="space-y-2">
                                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25">
                                  {section.title}
                                </p>
                                {section.links.map((link) => (
                                  <Link
                                    key={link.label}
                                    href={link.href}
                                    className="block text-sm text-white/50 hover:text-white transition-colors py-1 pl-3 border-l border-white/10"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}

              {/* Secondary nav on mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-6 border-t border-white/5 mt-4 space-y-3"
              >
                {siteConfig.secondaryNav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-auto pt-6 space-y-4">
              <button
                onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                className="w-full bg-white text-black py-4 rounded-xl text-center text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
              >
                Schedule a Visit
              </button>
              <div className="flex justify-between items-center px-2 text-white/30 text-[9px] font-bold uppercase tracking-widest">
                <a href={siteConfig.socials.instagram} className="hover:text-white transition-colors">Instagram</a>
                <a href={siteConfig.socials.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
                <a href={siteConfig.socials.twitter} className="hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <GlobalConversionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="schedule"
      />
    </>
  )
}
