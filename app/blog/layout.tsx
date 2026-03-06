import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Expert insights on luxury real estate trends, sustainable construction, investment strategies, and interior design from Rathore Developers.',
  openGraph: {
    title: 'Blog & Insights | Rathore Developers',
    description: 'Market insights, design trends, and buyer guides for luxury real estate in India.',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
