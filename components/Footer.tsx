"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/dashboard") return null;

  return (
    <footer className="bg-black text-white pt-16 md:pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16 md:mb-24">
          <div className="space-y-10 md:space-y-12">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] uppercase">
              {siteConfig.slogan.split(' ').map((word, i) => (
                <span key={i}>
                  {word}{i === 0 ? '. ' : '.'}<br />
                </span>
              ))}
            </h2>

            <div className="space-y-4">
              <span className="text-3xl font-bold tracking-tighter italic text-white">{siteConfig.name}</span>
              <p className="text-white/60 text-sm font-medium max-w-sm">
                {siteConfig.description}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-white/80 text-[10px] md:text-sm uppercase tracking-widest font-bold">
                Contact Us
              </p>
              <div className="space-y-4 text-white/60 text-sm font-medium">
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={16} /> {siteConfig.contact.phone}
                </a>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={16} /> {siteConfig.contact.email}
                </a>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="shrink-0" />
                  <span>{siteConfig.address}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12">
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors font-bold">
                  Home
                </Link>
                <Link href="/about" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors font-bold">
                  Our Vision
                </Link>
                <Link href="/properties" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors font-bold">
                  Properties
                </Link>
                <Link href="/faq" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors font-bold">
                  FAQ
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <a href={siteConfig.socials.instagram} target="_blank" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors flex items-center gap-2">
                  <Instagram size={14} /> Instagram
                </a>
                <a href={siteConfig.socials.twitter} target="_blank" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors flex items-center gap-2">
                  <Twitter size={14} /> Twitter
                </a>
                <a href={siteConfig.socials.linkedin} target="_blank" className="text-[10px] md:text-sm uppercase tracking-widest hover:text-white/60 transition-colors flex items-center gap-2">
                  <Linkedin size={14} /> Linkedin
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-6 md:p-12 rounded-[32px] md:rounded-3xl border border-white/10 h-fit">
            <div className="mb-8 space-y-3">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Get in Touch
              </h3>
              <p className="text-white/60 text-sm font-medium">
                Request a callback from our property consultants. We respond
                within 2 hours.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-sm w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-sm w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-sm w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-sm w-full"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-4 focus:border-white outline-none transition-colors text-sm resize-none"
              />
              <button className="w-full bg-white hover:bg-zinc-200 text-black py-5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-white/10">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All Rights
            Reserved.
          </p>
          <div className="flex gap-6 md:gap-8">
            <a href="/faq" className="hover:text-white/60 transition-colors">
              FAQ
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
