import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <h2 className="text-4xl font-bold text-zinc-900 mb-4">404 - Page Not Found</h2>
      <p className="text-zinc-600 mb-8">Could not find the requested resource.</p>
      <Link 
        href="/"
        className="bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
