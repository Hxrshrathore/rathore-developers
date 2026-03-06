'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { MessageCircle, Phone, Mail, X } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function FloatingCTA() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  const actions = [
    {
      icon: <Phone size={20} />,
      label: "Call Us",
      href: `tel:${siteConfig.contact.phoneRaw}`,
      color: "bg-zinc-800 hover:bg-zinc-700",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      href: `mailto:${siteConfig.contact.email}`,
      color: "bg-zinc-800 hover:bg-zinc-700",
    },
    {
      icon: <MessageCircle size={20} />,
      label: "WhatsApp",
      href: `https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(siteConfig.name)}%20properties.`,
      color: "bg-[#25D366] text-white hover:bg-[#128C7E]",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <>
            {actions.map((action, idx) => (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.label === "WhatsApp" ? "_blank" : undefined}
                rel={action.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ delay: idx * 0.05, type: "spring", damping: 20, stiffness: 300 }}
                className={`flex items-center gap-3 text-white px-5 py-3 rounded-full shadow-lg shadow-black/20 transition-colors ${action.color}`}
              >
                {action.icon}
                <span className="text-xs font-bold uppercase tracking-widest">{action.label}</span>
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          isExpanded
            ? 'bg-zinc-900 text-white shadow-zinc-900/30'
            : 'bg-white text-zinc-950 shadow-black/10 hover:bg-zinc-100'
        }`}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isExpanded ? <X size={22} /> : <MessageCircle size={22} />}
        </motion.div>
      </motion.button>
    </div>
  )
}
