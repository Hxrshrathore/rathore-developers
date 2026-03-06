'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { User } from "lucide-react"
import CardNav from "./CardNav"
import { GlobalConversionModal } from "./GlobalConversionModal"
import { siteConfig } from "@/lib/config"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (pathname === '/login' || pathname === '/dashboard') return null

  // ─── Dynamic Color Logic ───
  const isHomepage = pathname === '/'

  let baseColor: string
  let menuColor: string
  let buttonBgColor: string
  let buttonTextColor: string

  if (isScrolled) {
    baseColor = 'rgba(9, 9, 11, 0.95)'
    menuColor = '#ffffff'
    buttonBgColor = '#ffffff'
    buttonTextColor = '#09090b'
  } else if (isHomepage) {
    baseColor = 'rgba(255, 255, 255, 0.95)'
    menuColor = '#09090b'
    buttonBgColor = '#09090b'
    buttonTextColor = '#ffffff'
  } else {
    baseColor = 'rgba(255, 255, 255, 0.95)'
    menuColor = '#09090b'
    buttonBgColor = '#09090b'
    buttonTextColor = '#ffffff'
  }

  // Build CardNav items from siteConfig — 3 clean cards
  const cardItems = siteConfig.navigation.map((item, idx) => {
    const darkShades = ['#0a0a0a', '#111111', '#1a1a1a']
    return {
      label: item.label,
      bgColor: darkShades[idx % darkShades.length],
      textColor: '#ffffff',
      links: item.sections.flatMap(section =>
        section.links.map(link => ({
          label: link.label,
          href: link.href,
          ariaLabel: link.label,
        }))
      )
    }
  })

  const portalLink = (
    <Link
      href="/login"
      className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 no-underline"
      style={{ color: menuColor === '#ffffff' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)' }}
    >
      <User size={13} />
      Portal
    </Link>
  )

  return (
    <>
      <CardNav
        logoText={siteConfig.name.split(' ')[0]}
        logoHref="/"
        items={cardItems}
        baseColor={baseColor}
        menuColor={menuColor}
        buttonBgColor={buttonBgColor}
        buttonTextColor={buttonTextColor}
        buttonLabel="Schedule a Visit"
        onButtonClick={() => setIsModalOpen(true)}
        rightContent={portalLink}
        ease="circ.out"
        className={`transition-all duration-500 ${isScrolled ? '!top-[0.5em]' : ''}`}
      />

      <GlobalConversionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="schedule"
      />
    </>
  )
}
