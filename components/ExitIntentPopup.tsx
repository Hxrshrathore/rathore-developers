'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, ArrowRight, EyeOff } from "lucide-react"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hasTriggered, setHasTriggered] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle')
  const [isEngaged, setIsEngaged] = React.useState(false)

  React.useEffect(() => {
    // Wait for user to be engaged (9 seconds) before allowing exit intent
    const timer = setTimeout(() => {
      setIsEngaged(true)
    }, 9000)

    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    // Only trigger once per session and only if they've been on site for 9s
    if (hasTriggered || !isEngaged) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse leaves top of viewport (desktop)
      if (e.clientY <= 0) {
        setIsOpen(true)
        setHasTriggered(true)
      }
    }

    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    return () => document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasTriggered, isEngaged])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-zinc-900 rounded-[32px] md:rounded-[40px] w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
            >
              <X size={16} />
            </button>

            {/* Left Image Side */}
            <div className="md:w-5/12 relative h-48 md:h-auto hidden sm:block">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop")' }}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Side */}
            <div className="md:w-7/12 p-8 md:p-10 space-y-6">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8"
                >
                  <div className="w-16 h-16 bg-emerald-900/50 rounded-full flex items-center justify-center text-emerald-400">
                    <ArrowRight size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Access Granted</h3>
                  <p className="text-zinc-400 font-medium">Check your inbox for exclusive off-market listings.</p>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-400">Before You Go</div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                      Unlock Off-Market Properties
                    </h2>
                    <p className="text-sm text-zinc-400 font-medium">
                      Join our private circle to receive early access to premium developments before they are publicly listed.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 flex-1 px-4 focus:ring-2 focus:ring-emerald-500 focus:bg-white/10 transition-all text-sm text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <button
                      disabled={status === 'submitting'}
                      type="submit"
                      className="w-full bg-white text-black py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                         <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>Get Exclusive Access <ArrowRight size={16} /></>
                      )}
                    </button>
                  </form>
                  
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center text-xs text-zinc-500 hover:text-white transition-colors underline pt-2 font-medium"
                  >
                    No thanks, I'll browse standard listings
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
