import { siteConfig } from "@/lib/config"

export const metadata = {
  title: `Luxury Properties Portfolio | ${siteConfig.name}`,
  description: "Explore our exclusive portfolio of ultra-luxury apartments, villas, and sustainable developments across India."
}

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
