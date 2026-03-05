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
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.slogan}`,
  description: siteConfig.description,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${geist.variable}`}>
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
