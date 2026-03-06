import StubPage from "@/components/StubPage"

export const metadata = {
  title: "Commercial Projects | Rathore Developers",
  description: "Explore Rathore Developers' commercial real estate portfolio including Rathore City Mall and 1 Rathore.",
}

export default function CommercialPage() {
  return (
    <StubPage 
      title="Commercial." 
      subtitle="Premium commercial spaces designed for the modern enterprise. Coming soon."
      backHref="/"
      backLabel="Home"
    />
  )
}
