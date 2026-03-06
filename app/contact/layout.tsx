import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Rathore Developers. Schedule a site visit, inquire about luxury properties, or connect with our sales team in Mumbai, Delhi NCR, and Goa.',
  openGraph: {
    title: 'Contact Us | Rathore Developers',
    description: 'Schedule a site visit or inquire about luxury residences across India.',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
