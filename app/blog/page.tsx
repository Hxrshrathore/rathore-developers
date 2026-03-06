'use client'

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

const posts = [
  {
    slug: "luxury-real-estate-trends-2025",
    title: "Luxury Real Estate Trends Reshaping India in 2025",
    excerpt: "From branded residences to wellness-centric design, here are the five trends defining how India's ultra-wealthy are choosing their next home.",
    category: "Market Insights",
    date: "Feb 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "sustainable-construction-mumbai",
    title: "How Sustainable Construction Is Becoming Non-Negotiable in Mumbai",
    excerpt: "Rising sea levels, stricter regulations, and informed buyers are pushing developers toward greener building practices. Here's how Rathore is leading the charge.",
    category: "Sustainability",
    date: "Feb 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "buying-luxury-property-guide",
    title: "The Complete Guide to Buying Luxury Property in India",
    excerpt: "RERA compliance, stamp duty, home loans, and registration — a step-by-step guide for first-time luxury property buyers navigating the Indian market.",
    category: "Buyer's Guide",
    date: "Jan 30, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "interior-design-trends",
    title: "Interior Design Trends for Ultra-Luxury Residences",
    excerpt: "Minimalist maximalism, biophilic design, and artisanal craftsmanship — the trends defining the interiors of India's most exclusive homes.",
    category: "Design",
    date: "Jan 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "goa-villa-market",
    title: "Why Goa's Villa Market Is Booming Among HNI Buyers",
    excerpt: "Goa has evolved from a holiday destination to a primary residence choice for India's affluent. We explore what's driving the shift.",
    category: "Market Insights",
    date: "Dec 20, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "rera-compliance-guide",
    title: "RERA Compliance: What Every Buyer Should Know",
    excerpt: "Understanding RERA registration, carpet area calculations, and your rights as a buyer in India's regulated real estate market.",
    category: "Buyer's Guide",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
  },
]

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500"
          >
            Blog & Insights
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] text-zinc-900"
          >
            Perspectives on <br />Luxury Living.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-xl max-w-xl leading-relaxed font-medium"
          >
            Market insights, design trends, and expert guides for discerning 
            property buyers.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-zinc-950 rounded-[40px] overflow-hidden cursor-pointer"
        >
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col justify-center p-10 md:p-16 text-white">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-4">{posts[0].category}</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug mb-4">{posts[0].title}</h2>
            <p className="text-white/60 text-base leading-relaxed mb-6">{posts[0].excerpt}</p>
            <div className="flex items-center gap-4 text-white/40 text-xs font-medium">
              <span>{posts[0].date}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {posts[0].readTime}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Post Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-zinc-700">
                  {post.category}
                </div>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 leading-snug mb-2 group-hover:text-zinc-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-zinc-400 text-xs font-medium">
                <span>{post.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
