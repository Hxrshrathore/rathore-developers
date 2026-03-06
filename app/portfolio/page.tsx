import StubPage from "@/components/StubPage"

export const metadata = {
  title: "Portfolio | Rathore Developers",
  description: "View the complete portfolio of Rathore Developers — completed projects, interiors, and manufacturing capabilities.",
}

export default function PortfolioPage() {
  return (
    <StubPage 
      title="Portfolio." 
      subtitle="A curated showcase of our finest work and capabilities. Coming soon."
      backHref="/"
      backLabel="Home"
    />
  )
}
