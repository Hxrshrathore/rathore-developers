import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Future Developments',
  description: 'Explore upcoming luxury developments by Rathore Developers — large-scale masterplans, resort living, and sustainable districts transforming India\'s urban landscape.',
  openGraph: {
    title: 'Future Developments | Rathore Developers',
    description: 'Discover upcoming luxury real estate projects across India.',
  },
  alternates: {
    canonical: '/developments',
  },
}

export default function DevelopmentsLayout({ children }: { children: React.ReactNode }) {
  return children
}
