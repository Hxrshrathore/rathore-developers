import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Rathore Developers — India\'s leading luxury real estate firm. Explore career opportunities in architecture, engineering, marketing, and project management.',
  openGraph: {
    title: 'Careers | Rathore Developers',
    description: 'Build the future of luxury real estate. Explore open positions at Rathore Developers.',
  },
  alternates: {
    canonical: '/careers',
  },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}
