import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Vision, Leadership & Awards',
  description: 'Discover the story behind Rathore Developers — our vision for luxury real estate, our leadership team, our values, and the awards that recognize our commitment to excellence since 2008.',
  openGraph: {
    title: 'About Rathore Developers',
    description: 'Vision, leadership, and the story behind India\'s premier luxury real estate developer.',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
