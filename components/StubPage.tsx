import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function StubPage({ 
  title, 
  subtitle, 
  backHref = "/",
  backLabel = "Home" 
}: { 
  title: string
  subtitle?: string
  backHref?: string
  backLabel?: string
}) {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-lg space-y-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
          {siteConfig.name}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 leading-none">
          {title}
        </h1>
        {subtitle && (
          <p className="text-zinc-500 text-base md:text-lg font-medium">
            {subtitle}
          </p>
        )}
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link 
            href={backHref} 
            className="px-6 py-3 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
          >
            ← {backLabel}
          </Link>
          <Link 
            href="/properties" 
            className="px-6 py-3 rounded-full border border-zinc-200 text-zinc-900 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-colors"
          >
            Browse Properties
          </Link>
        </div>
      </div>
    </main>
  )
}
