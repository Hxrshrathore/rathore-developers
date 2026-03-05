'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { 
  Megaphone,
  Plus,
  LayoutDashboard, 
  Building2, 
  FileText, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  TrendingUp,
  Clock,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  CreditCard,
  Download,
  AlertCircle,
  Filter,
  MoreVertical,
  Send,
  User,
  Shield,
  Smartphone
} from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState('overview')
  const [isPaying, setIsPaying] = React.useState<number | null>(null)
  const [announcements, setAnnouncements] = React.useState([
    { id: 1, title: "Quarterly Handover Update", content: "We are pleased to announce that the Quartz Lofts project is ahead of schedule. Handover for Phase 1 will begin in May 2026.", date: "Mar 05, 2026", author: "Project Management" },
    { id: 2, title: "New Amenities at Elysian Heights", content: "The infinity pool and wellness center at Elysian Heights are now fully operational for residents.", date: "Feb 28, 2026", author: "Facilities Team" },
    { id: 3, title: "Annual Maintenance Schedule", content: "Routine maintenance for all properties will be conducted between April 1st and April 15th.", date: "Feb 15, 2026", author: "Operations" }
  ])
  const [newAnnouncement, setNewAnnouncement] = React.useState({ title: '', content: '' })
  const [isPosting, setIsPosting] = React.useState(false)

  const handlePostAnnouncement = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newAnnouncement.title || !newAnnouncement.content) return
    setIsPosting(true)
    setTimeout(() => {
      const announcement = {
        id: announcements.length + 1,
        title: newAnnouncement.title,
        content: newAnnouncement.content,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        author: "Developer Admin"
      }
      setAnnouncements([announcement, ...announcements])
      setNewAnnouncement({ title: '', content: '' })
      setIsPosting(false)
    }, 1000)
  }

  const properties = [
    {
      id: 1,
      name: "The Quartz Lofts",
      unit: "Penthouse A",
      status: "Construction",
      progress: 75,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
      location: "Downtown Dubai",
      value: "₹24.5 Cr"
    },
    {
      id: 2,
      name: "Elysian Heights",
      unit: "Villa 04",
      status: "Handover Pending",
      progress: 98,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
      location: "Palm Jumeirah",
      value: "₹18.2 Cr"
    }
  ]

  const invoices = [
    { id: 101, property: "The Quartz Lofts", amount: "₹4,50,000", date: "Mar 01, 2026", status: "Pending", type: "Installment #5" },
    { id: 102, property: "Elysian Heights", amount: "₹1,25,000", date: "Feb 15, 2026", status: "Paid", type: "Service Charges" },
    { id: 103, property: "The Quartz Lofts", amount: "₹80,000", date: "Jan 10, 2026", status: "Paid", type: "Maintenance" },
    { id: 104, property: "Elysian Heights", amount: "₹25,00,000", date: "Dec 20, 2025", status: "Paid", type: "Installment #4" }
  ]

  const handlePayment = async (id: number) => {
    setIsPaying(id)
    // Simulate payment gateway
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsPaying(null)
    alert("Payment successful! Your receipt has been sent to your email.")
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard title="Total Investment" value="₹42.7 Cr" trend="+12.5%" icon={<TrendingUp className="text-emerald-500" />} />
              <StatCard title="Properties Owned" value="02" trend="Active" icon={<Building2 className="text-blue-500" />} />
              <StatCard title="Next Handover" value="14 Days" trend="On Track" icon={<Clock className="text-amber-500" />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold tracking-tight text-zinc-900">Active Properties</h2>
                  <button onClick={() => setActiveTab('properties')} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {properties.map(prop => (
                    <PropertyCard key={prop.id} property={prop} />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold tracking-tight text-zinc-900">Pending Payments</h2>
                  <button onClick={() => setActiveTab('invoices')} className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">View All</button>
                </div>
                <div className="bg-white rounded-3xl border border-zinc-200 p-6 space-y-4">
                  {invoices.filter(i => i.status === 'Pending').map(inv => (
                    <div key={inv.id} className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs font-black uppercase tracking-widest text-zinc-400">{inv.type}</p>
                          <p className="font-bold text-zinc-900">{inv.property}</p>
                        </div>
                        <p className="font-black text-zinc-900">{inv.amount}</p>
                      </div>
                      <button 
                        onClick={() => handlePayment(inv.id)}
                        disabled={isPaying === inv.id}
                        className="w-full bg-black text-white py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all disabled:opacity-50"
                      >
                        {isPaying === inv.id ? "Processing..." : "Pay Now"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      case 'properties':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">My Property Portfolio</h2>
              <div className="flex gap-2">
                <button className="p-2 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"><Filter size={18} /></button>
                <button className="p-2 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"><Search size={18} /></button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map(prop => (
                <PropertyCard key={prop.id} property={prop} detailed />
              ))}
            </div>
          </div>
        )
      case 'invoices':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Invoices & Payments</h2>
              <button className="bg-black text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                Payment History
              </button>
            </div>
            <div className="bg-white rounded-3xl border border-zinc-200 overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200">
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Invoice</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Property</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Date</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Amount</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Status</th>
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {invoices.map(inv => (
                    <tr key={inv.id} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold text-zinc-900">INV-{inv.id}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{inv.type}</p>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-zinc-600">{inv.property}</td>
                      <td className="px-6 py-4 text-sm font-medium text-zinc-600">{inv.date}</td>
                      <td className="px-6 py-4 text-sm font-bold text-zinc-900">{inv.amount}</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                          inv.status === 'Paid' ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                        )}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 text-zinc-400 hover:text-black transition-colors" title="Download PDF"><Download size={18} /></button>
                          {inv.status === 'Pending' && (
                            <button 
                              onClick={() => handlePayment(inv.id)}
                              disabled={isPaying === inv.id}
                              className="bg-black text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors disabled:opacity-50"
                            >
                              {isPaying === inv.id ? "..." : "Pay"}
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'announcements':
        return (
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Announcements</h2>
                <p className="text-sm text-zinc-500 font-medium">Stay updated with the latest news from Rathore Developers.</p>
              </div>
            </div>

            {/* Post Announcement Form (Developer Role) */}
            <div className="bg-white rounded-3xl border border-zinc-200 p-8 space-y-6">
              <div className="flex items-center gap-3 text-zinc-900">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center">
                  <Plus size={20} />
                </div>
                <h3 className="font-bold">Post New Announcement</h3>
              </div>
              <form onSubmit={handlePostAnnouncement} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Announcement Title</label>
                  <input 
                    type="text" 
                    value={newAnnouncement.title}
                    onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                    placeholder="e.g., Project Milestone Reached" 
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Content</label>
                  <textarea 
                    value={newAnnouncement.content}
                    onChange={(e) => setNewAnnouncement({...newAnnouncement, content: e.target.value})}
                    placeholder="Describe the update in detail..." 
                    rows={4}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black transition-all text-sm font-medium resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isPosting}
                  className="bg-black text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  {isPosting ? "Posting..." : "Publish Announcement"}
                </button>
              </form>
            </div>

            {/* Announcements Feed */}
            <div className="space-y-4">
              {announcements.map(ann => (
                <motion.div 
                  key={ann.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-8 rounded-3xl border border-zinc-200 space-y-4 relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{ann.date} • {ann.author}</p>
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900">{ann.title}</h3>
                    </div>
                    <Megaphone className="text-zinc-100 group-hover:text-zinc-200 transition-colors" size={48} />
                  </div>
                  <p className="text-zinc-600 leading-relaxed font-medium">{ann.content}</p>
                  <div className="pt-4 flex gap-4">
                    <button className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">Read More</button>
                    <button className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors">Share</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      case 'settings':
        return (
          <div className="max-w-4xl space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Account Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-zinc-200 space-y-6">
                  <h3 className="font-bold text-zinc-900">Personal Information</h3>
                  <div className="space-y-4">
                    <SettingsInput label="Full Name" value="Harsh Kumar" />
                    <SettingsInput label="Email Address" value="harsh.k@example.com" />
                    <SettingsInput label="Phone Number" value="+971 50 123 4567" />
                  </div>
                  <button className="w-full bg-black text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">Update Profile</button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-zinc-200 space-y-6">
                  <h3 className="font-bold text-zinc-900">Security</h3>
                  <div className="space-y-4">
                    <SecurityOption icon={<Shield size={20} />} title="Two-Factor Authentication" desc="Add an extra layer of security to your account." active />
                    <SecurityOption icon={<Smartphone size={20} />} title="Login Notifications" desc="Get notified when someone logs into your account." />
                  </div>
                </div>
                <div className="bg-red-50 p-6 rounded-3xl border border-red-100 space-y-4">
                  <h3 className="font-bold text-red-900">Danger Zone</h3>
                  <p className="text-sm text-red-600">Once you delete your account, there is no going back. Please be certain.</p>
                  <button className="text-xs font-bold uppercase tracking-widest text-red-600 hover:text-red-700 underline">Delete Account</button>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-zinc-200 hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-8">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase text-black">
            Rathore<span className="text-black/20">.</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <SidebarLink icon={<LayoutDashboard size={20} />} label="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
          <SidebarLink icon={<Building2 size={20} />} label="My Properties" active={activeTab === 'properties'} onClick={() => setActiveTab('properties')} />
          <SidebarLink icon={<CreditCard size={20} />} label="Invoices" active={activeTab === 'invoices'} onClick={() => setActiveTab('invoices')} />
          <SidebarLink icon={<Megaphone size={20} />} label="Announcements" active={activeTab === 'announcements'} onClick={() => setActiveTab('announcements')} />
          <div className="pt-8 pb-4 px-4">
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-400">Account</p>
          </div>
          <SidebarLink icon={<Settings size={20} />} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
          <Link href="/login" className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all font-bold text-sm">
            <LogOut size={20} />
            Sign Out
          </Link>
        </nav>

        <div className="p-6">
          <div className="bg-zinc-900 rounded-2xl p-6 text-white space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">Concierge</p>
            <p className="text-sm font-medium leading-relaxed">Need assistance with your property?</p>
            <button className="w-full bg-white text-black py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              Contact Agent
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input 
                type="text" 
                placeholder="Search properties, documents..." 
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-black outline-none transition-all text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-zinc-500 hover:text-black transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-8 w-px bg-zinc-200" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-zinc-900">Harsh Kumar</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Premium Member</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden border border-zinc-200">
                <Image src="https://picsum.photos/seed/avatar/100/100" alt="Avatar" width={40} height={40} />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

function SidebarLink({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm",
        active 
          ? "bg-black text-white shadow-lg shadow-black/10" 
          : "text-zinc-500 hover:text-black hover:bg-zinc-100"
      )}
    >
      {icon}
      {label}
    </button>
  )
}

function StatCard({ title, value, trend, icon }: { title: string, value: string, trend: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-zinc-200 space-y-4">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center">
          {icon}
        </div>
        <div className="px-2 py-1 rounded-lg bg-zinc-50 text-[10px] font-black uppercase tracking-widest text-zinc-500">
          {trend}
        </div>
      </div>
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-zinc-400">{title}</p>
        <p className="text-3xl font-bold text-zinc-900 tracking-tight">{value}</p>
      </div>
    </div>
  )
}

function PropertyCard({ property, detailed }: { property: any, detailed?: boolean }) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white rounded-3xl border border-zinc-200 overflow-hidden group cursor-pointer"
    >
      <div className="relative h-48">
        <Image src={property.image} alt={property.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          {property.status}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-bold text-lg text-zinc-900">{property.name}</h3>
          <p className="text-sm text-zinc-500">{property.unit}</p>
          {detailed && <p className="text-xs text-zinc-400 mt-1">{property.location}</p>}
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
            <span className="text-zinc-400">Construction Progress</span>
            <span className="text-black">{property.progress}%</span>
          </div>
          <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${property.progress}%` }}
              className="h-full bg-black rounded-full"
            />
          </div>
        </div>
        {detailed && (
          <div className="pt-4 border-t border-zinc-100 flex justify-between items-center">
            <p className="text-sm font-bold text-zinc-900">{property.value}</p>
            <button className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-black transition-colors flex items-center gap-1">
              Details <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

function ChatThumb({ name, lastMsg, time, active }: { name: string, lastMsg: string, time: string, active?: boolean }) {
  return (
    <div className={cn(
      "p-4 rounded-2xl cursor-pointer transition-all",
      active ? "bg-zinc-100" : "hover:bg-zinc-50"
    )}>
      <div className="flex justify-between items-start mb-1">
        <p className="text-sm font-bold text-zinc-900">{name}</p>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{time}</p>
      </div>
      <p className="text-xs text-zinc-500 truncate">{lastMsg}</p>
    </div>
  )
}

function SettingsInput({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{label}</label>
      <input type="text" defaultValue={value} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-black transition-all text-sm font-medium" />
    </div>
  )
}

function SecurityOption({ icon, title, desc, active }: { icon: React.ReactNode, title: string, desc: string, active?: boolean }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors cursor-pointer group">
      <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-500 group-hover:bg-black group-hover:text-white transition-colors">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <p className="text-sm font-bold text-zinc-900">{title}</p>
          <div className={cn(
            "w-10 h-5 rounded-full relative transition-colors",
            active ? "bg-black" : "bg-zinc-200"
          )}>
            <div className={cn(
              "absolute top-1 w-3 h-3 rounded-full bg-white transition-all",
              active ? "left-6" : "left-1"
            )} />
          </div>
        </div>
        <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
      </div>
    </div>
  )
}
