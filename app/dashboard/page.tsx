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
  Settings, 
  LogOut, 
  Bell, 
  Search,
  TrendingUp,
  Clock,
  ChevronRight,
  CreditCard,
  Download,
  Filter,
  User,
  CheckCircle2,
  Shield,
  Smartphone,
  Lock,
  X,
  ShieldCheck,
  ArrowRight
} from "lucide-react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState('overview')
  const [isPaying, setIsPaying] = React.useState<number | null>(null)
  const [checkoutInvoice, setCheckoutInvoice] = React.useState<any | null>(null)
  
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
      milestones: [
        { name: "Foundation", status: "completed" },
        { name: "Superstructure", status: "completed" },
        { name: "MEP Works", status: "completed" },
        { name: "Interior Fit-out", status: "current" },
        { name: "Handover", status: "pending" }
      ],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
      location: "BKC, Mumbai",
      value: "₹24.5 Cr",
      invested: "₹18.0 Cr"
    },
    {
      id: 2,
      name: "Elysian Heights",
      unit: "Villa 04",
      status: "Handover Pending",
      progress: 98,
      milestones: [
        { name: "Foundation", status: "completed" },
        { name: "Superstructure", status: "completed" },
        { name: "MEP Works", status: "completed" },
        { name: "Interior Fit-out", status: "completed" },
        { name: "Handover", status: "current" }
      ],
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
      location: "Gurgaon Sector 54",
      value: "₹18.2 Cr",
      invested: "₹18.2 Cr"
    }
  ]

  const invoices = [
    { id: 101, property: "The Quartz Lofts", propertyId: 1, baseAmount: 420000, tax: 30000, total: "₹4,50,000", date: "Mar 01, 2026", status: "Pending", type: "Installment #5", endowedProgress: "Unlock Interior Fit-out Phase" },
    { id: 102, property: "Elysian Heights", propertyId: 2, baseAmount: 110000, tax: 15000, total: "₹1,25,000", date: "Feb 15, 2026", status: "Paid", type: "Service Charges", endowedProgress: "Annual Maintenance 2026" },
    { id: 103, property: "The Quartz Lofts", propertyId: 1, baseAmount: 70000, tax: 10000, total: "₹80,000", date: "Jan 10, 2026", status: "Paid", type: "Maintenance", endowedProgress: "Quarterly Upkeep" },
    { id: 104, property: "Elysian Heights", propertyId: 2, baseAmount: 2300000, tax: 200000, total: "₹25,00,000", date: "Dec 20, 2025", status: "Paid", type: "Installment #4", endowedProgress: "Final Handover Clearance" }
  ]

  const initiatePayment = (invoice: any) => {
    // Inject the property investment data to leverage the sunk cost fallacy
    const propertyData = properties.find(p => p.id === invoice.propertyId)
    setCheckoutInvoice({ ...invoice, propertyData })
  }

  const handleProcessPayment = async () => {
    if (!checkoutInvoice) return
    setIsPaying(checkoutInvoice.id)
    // Simulate payment gateway
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsPaying(null)
    setCheckoutInvoice(null)
    // In a real app we would update the status locally or re-fetch
    alert("Payment successful! Your securely encrypted receipt has been emailed.")
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
                <div className="bg-white rounded-3xl border border-zinc-200 p-6 space-y-4 shadow-sm">
                  {invoices.filter(i => i.status === 'Pending').map(inv => (
                    <div key={inv.id} className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-4 hover:border-black/20 transition-colors">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600">{inv.endowedProgress}</p>
                        <p className="font-bold text-zinc-900">{inv.property}</p>
                        <p className="text-xs text-zinc-500 font-medium">Due: {inv.date}</p>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-zinc-200/60">
                         <p className="font-black text-xl text-zinc-900">{inv.total}</p>
                         <button 
                          onClick={() => initiatePayment(inv)}
                          className="bg-black text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center gap-2"
                        >
                          Checkout <ArrowRight size={14} />
                        </button>
                      </div>
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
            <div className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200">
                    <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Milestone</th>
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
                        <p className="text-sm font-bold text-zinc-900">{inv.endowedProgress}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">INV-{inv.id}</p>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-zinc-600">{inv.property}</td>
                      <td className="px-6 py-4 text-sm font-medium text-zinc-600">{inv.date}</td>
                      <td className="px-6 py-4 text-sm font-bold text-zinc-900">{inv.total}</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                          inv.status === 'Paid' ? "bg-emerald-100 text-emerald-700" : "bg-primary text-white"
                        )}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2 items-center">
                          <button className="p-2 text-zinc-400 hover:text-black transition-colors" title="Download PDF"><Download size={18} /></button>
                          {inv.status === 'Pending' && (
                            <button 
                              onClick={() => initiatePayment(inv)}
                              className="bg-black text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors shadow-md"
                            >
                              Pay Now
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
                  className="bg-white p-8 rounded-3xl border border-zinc-200 space-y-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
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
                <div className="bg-white p-6 rounded-3xl border border-zinc-200 space-y-6 shadow-sm">
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
                <div className="bg-white p-6 rounded-3xl border border-zinc-200 space-y-6 shadow-sm">
                  <h3 className="font-bold text-zinc-900">Security</h3>
                  <div className="space-y-4">
                    <SecurityOption icon={<Shield size={20} />} title="Two-Factor Authentication" desc="Add an extra layer of security to your account." active />
                    <SecurityOption icon={<Smartphone size={20} />} title="Login Notifications" desc="Get notified when someone logs into your account." />
                  </div>
                </div>
                <div className="bg-red-50 p-6 rounded-3xl border border-red-100 space-y-4 shadow-sm">
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
    <div className="min-h-screen bg-zinc-50 flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-zinc-200 hidden lg:flex flex-col sticky top-0 h-screen z-20">
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
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto relative">
        {/* Header */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-zinc-200 flex items-center justify-between px-8 py-2 sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input 
                type="text" 
                placeholder="Search properties, documents..." 
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-black outline-none transition-all text-sm font-medium"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-zinc-500 hover:text-black transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border-2 border-white" />
            </button>
            <div className="h-8 w-px bg-zinc-200" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-zinc-900">Harsh Kumar</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Premium Member</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden border border-zinc-200">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Avatar" width={40} height={40} />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 pb-32">
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

        {/* Trust Checkout Drawer Overlay */}
        <AnimatePresence>
          {checkoutInvoice && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setCheckoutInvoice(null)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              />
              
              {/* Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto flex flex-col"
              >
                {/* Drawer Header */}
                <div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-zinc-900 text-white sticky top-0 z-10">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-emerald-400" size={24} />
                    <h3 className="font-bold text-lg tracking-tight">Secure Payment Checkout</h3>
                  </div>
                  <button 
                    onClick={() => setCheckoutInvoice(null)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Drawer Body */}
                <div className="p-6 flex-1 space-y-8">
                  {/* Sunk Cost / Investment Framing */}
                  <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800 mb-1">Your Investment</p>
                    <p className="text-sm font-medium text-emerald-900 mb-3 text-balance">
                      You have successfully secured <strong>{checkoutInvoice.propertyData.invested}</strong> in {checkoutInvoice.property}. Let's fulfill the next milestone.
                    </p>
                    <div className="w-full bg-emerald-200/50 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[75%]" />
                    </div>
                  </div>

                  {/* Endowed Progress Framing */}
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 mb-1">{checkoutInvoice.endowedProgress}</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">INV-{checkoutInvoice.id} • {checkoutInvoice.date}</p>
                  </div>

                  {/* Itemized Breakdown */}
                  <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200 space-y-4">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-2">Itemized Breakdown</h5>
                    <div className="flex justify-between items-center text-sm font-medium text-zinc-600">
                      <span>Milestone Base Cost</span>
                      <span>₹{checkoutInvoice.baseAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-medium text-zinc-600">
                      <span>Development Taxes (GST 5%)</span>
                      <span>₹{checkoutInvoice.tax.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-medium text-emerald-600">
                      <span>Early Payment Discount</span>
                      <span>-₹{(10000).toLocaleString('en-IN')}</span>
                    </div>
                    
                    <div className="pt-4 border-t border-zinc-200/60 flex justify-between items-end">
                      <span className="text-sm font-bold text-zinc-900">Total Due</span>
                      <span className="text-2xl font-black text-zinc-900 tracking-tight">{checkoutInvoice.total}</span>
                    </div>
                  </div>

                  {/* Payment Method Selector (Visual Only) */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-900">Select Payment Method</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex flex-col items-center justify-center p-4 border-2 border-black bg-zinc-50 rounded-xl gap-2 font-bold text-sm">
                        <CreditCard size={20} />
                        Wire / CC
                      </button>
                      <button className="flex flex-col items-center justify-center p-4 border border-zinc-200 rounded-xl gap-2 font-bold text-sm text-zinc-400 hover:border-zinc-300 transition-colors">
                        <Building2 size={20} />
                        Bank Transfer
                      </button>
                    </div>
                  </div>

                  {/* Trust Seals */}
                  <div className="flex items-center justify-center gap-6 pt-6 border-t border-zinc-100 opacity-60">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                      <Lock size={12} /> 256-bit SSL
                    </div>
                    <div className="w-1 h-1 rounded-full bg-zinc-300" />
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                      <ShieldCheck size={12} /> Bank Grade Security
                    </div>
                  </div>
                </div>

                {/* Sticky Footer */}
                <div className="p-6 border-t border-zinc-100 bg-white sticky bottom-0">
                  <button 
                    onClick={handleProcessPayment}
                    disabled={isPaying !== null}
                    className="w-full bg-black text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl shadow-black/10 disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isPaying === checkoutInvoice.id ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Encrypting...
                      </>
                    ) : (
                      <>
                        Pay {checkoutInvoice.total} Securely <Lock size={14} />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

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
          ? "bg-zinc-900 text-white shadow-lg shadow-zinc-900/10" 
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
    <div className="bg-white p-6 rounded-3xl border border-zinc-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
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
      className="bg-white rounded-3xl border border-zinc-200 overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 shrink-0">
        <Image src={property.image} alt={property.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
          {property.status}
        </div>
      </div>
      <div className="p-6 space-y-6 flex-1 flex flex-col">
        <div>
          <h3 className="font-bold text-lg text-zinc-900 leading-tight">{property.name}</h3>
          <p className="text-sm font-medium text-zinc-500">{property.unit}</p>
          {detailed && <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mt-2">{property.location}</p>}
        </div>
        
        {/* Zeigarnik Effect: Granular Construction Progress */}
        <div className="space-y-4 flex-1">
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest border-b border-zinc-100 pb-2">
            <span className="text-zinc-400">Construction Track</span>
            <span className="text-emerald-600">{property.progress}%</span>
          </div>
          <div className="space-y-3">
            {property.milestones.map((ms: any, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <div className={cn(
                  "w-4 h-4 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors",
                  ms.status === 'completed' ? "bg-emerald-500 border-emerald-500 text-white" : 
                  ms.status === 'current' ? "border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)] bg-amber-50" : 
                  "border-zinc-200 bg-zinc-50"
                )}>
                  {ms.status === 'completed' && <CheckCircle2 size={10} strokeWidth={4} />}
                  {ms.status === 'current' && <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />}
                </div>
                <span className={cn(
                  "text-xs font-medium tracking-wide",
                  ms.status === 'completed' ? "text-zinc-500 line-through" :
                  ms.status === 'current' ? "text-zinc-900 font-bold" :
                  "text-zinc-300"
                )}>
                  {ms.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {detailed && (
          <div className="pt-4 border-t border-zinc-100 flex justify-between items-center shrink-0">
            <p className="text-sm font-black text-zinc-900">{property.value}</p>
            <button className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-black transition-colors flex items-center gap-1 bg-zinc-50 px-3 py-1.5 rounded-lg group-hover:bg-zinc-100">
              Details <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
    </motion.div>
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
    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors cursor-pointer group border border-transparent hover:border-zinc-200">
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
        <p className="text-xs text-zinc-500 mt-0.5 font-medium">{desc}</p>
      </div>
    </div>
  )
}
