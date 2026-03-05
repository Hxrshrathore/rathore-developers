import type {Metadata} from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Rathore Developers - Iconic Living',
  description: 'Premium real estate developer specializing in modern, sustainable, and luxury residential projects.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased bg-white text-zinc-900" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
