import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Properties Portfolio',
  description: 'Explore our exclusive portfolio of ultra-luxury apartments, villas, and sustainable developments across Mumbai, Delhi NCR, Gurgaon, and Goa. Starting from ₹8.2 Cr.',
  openGraph: {
    title: 'Luxury Properties | Rathore Developers',
    description: 'Browse iconic residences across India — apartments, villas, and waterfront homes.',
  },
  alternates: {
    canonical: '/properties',
  },
}

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
