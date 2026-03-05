'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, Lock, Mail, Eye, EyeOff, ShieldCheck, User } from "lucide-react"

export default function LoginPage() {
  const [view, setView] = React.useState<'login' | 'signup' | 'forgot-password'>('login')
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate process
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    if (view === 'forgot-password') {
      alert("Password reset link sent to your email.")
      setView('login')
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side: Visual/Branding */}
      <section className="relative hidden lg:flex flex-col justify-between p-16 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Interior"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        <div className="relative z-10">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase">
            Rathore<span className="text-white/50">.</span>
          </Link>
        </div>

        <div className="relative z-10 space-y-6 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60"
          >
            Exclusive Access
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold tracking-tight leading-[1.1]"
          >
            Your Gateway to <br /> Iconic Living.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg font-medium leading-relaxed"
          >
            Access your property documents, track construction progress, and manage your luxury investments in one secure place.
          </motion.p>
        </div>

        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <ShieldCheck size={24} className="text-white" />
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-white/60">
            Secure Client Portal
          </div>
        </div>
      </section>

      {/* Right Side: Form */}
      <section className="flex items-center justify-center p-8 md:p-16 bg-white">
        <div className="w-full max-w-md space-y-12">
          <div className="space-y-4">
            <div className="lg:hidden mb-8">
              <Link href="/" className="text-2xl font-black tracking-tighter uppercase text-black">
                Rathore<span className="text-black/20">.</span>
              </Link>
            </div>
            
            <AnimatePresence mode="wait">
              {view === 'login' && (
                <motion.div
                  key="login-header"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <h2 className="text-4xl font-bold tracking-tight text-zinc-900">Welcome Back.</h2>
                  <p className="text-zinc-500 font-medium">Please enter your credentials to access the portal.</p>
                </motion.div>
              )}
              {view === 'signup' && (
                <motion.div
                  key="signup-header"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <h2 className="text-4xl font-bold tracking-tight text-zinc-900">Join the Elite.</h2>
                  <p className="text-zinc-500 font-medium">Create your account to start your journey with Rathore.</p>
                </motion.div>
              )}
              {view === 'forgot-password' && (
                <motion.div
                  key="forgot-header"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <h2 className="text-4xl font-bold tracking-tight text-zinc-900">Reset Password.</h2>
                  <p className="text-zinc-500 font-medium">Enter your email to receive a reset link.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {view === 'signup' && (
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-black outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-400"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400 ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input
                  required
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-black outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-400"
                />
              </div>
            </div>

            {view !== 'forgot-password' && (
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] uppercase tracking-widest font-black text-zinc-400">
                    Password
                  </label>
                  {view === 'login' && (
                    <button 
                      type="button"
                      onClick={() => setView('forgot-password')}
                      className="text-[10px] uppercase tracking-widest font-black text-black hover:underline"
                    >
                      Forgot Password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl py-4 pl-12 pr-12 focus:ring-2 focus:ring-black outline-none transition-all text-zinc-900 font-medium placeholder:text-zinc-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            )}

            {view === 'login' && (
              <div className="flex items-center gap-3 px-1">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-zinc-300 text-black focus:ring-black cursor-pointer"
                />
                <label htmlFor="remember" className="text-sm text-zinc-600 font-medium cursor-pointer">
                  Remember me for 30 days
                </label>
              </div>
            )}

            <button
              disabled={isLoading}
              className="w-full bg-black text-white py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {view === 'login' ? 'Sign In to Portal' : view === 'signup' ? 'Create Account' : 'Send Reset Link'} 
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="text-center space-y-4">
            <p className="text-sm text-zinc-500 font-medium">
              {view === 'login' ? (
                <>
                  Don&apos;t have an account?{" "}
                  <button onClick={() => setView('signup')} className="text-black font-bold hover:underline">
                    Sign up now
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button onClick={() => setView('login')} className="text-black font-bold hover:underline">
                    Sign in
                  </button>
                </>
              )}
            </p>
            <div className="pt-8 border-t border-zinc-100">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                Protected by Rathore Security Systems
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
