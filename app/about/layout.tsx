import { siteConfig } from "@/lib/config"

export const metadata = {
  title: `Our Vision | ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}' mission, vision, and leadership in the luxury real estate market.`
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
