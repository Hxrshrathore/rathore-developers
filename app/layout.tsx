import type {Metadata} from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';
import { SmoothScroll } from '@/components/SmoothScroll';
import { siteConfig } from '@/lib/config';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'luxury real estate',
    'premium properties India',
    'luxury apartments Mumbai',
    'luxury villas Goa',
    'Delhi NCR real estate',
    'Rathore Developers',
    'high-rise apartments',
    'waterfront residences',
    'sustainable homes India',
    'RERA approved projects',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Luxury Real Estate`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: ['/og-image.png'],
    creator: '@rathoredevs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone,
    contactType: 'sales',
    email: siteConfig.contact.email,
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    siteConfig.socials.instagram,
    siteConfig.socials.linkedin,
    siteConfig.socials.twitter,
  ],
  foundingDate: String(siteConfig.established),
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Gurgaon' },
    { '@type': 'City', name: 'Goa' },
  ],
  priceRange: '₹₹₹₹',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="font-sans antialiased bg-white text-zinc-900" suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <FloatingCTA />
          <ExitIntentPopup />
        </SmoothScroll>
      </body>
    </html>
  );
}
