import StubPage from "@/components/StubPage"

export const metadata = {
  title: "The Rathore Journey | Rathore Developers",
  description: "Explore the milestones and legacy of Rathore Developers since 2008.",
}

export default function JourneyPage() {
  return (
    <StubPage 
      title="The Rathore Journey." 
      subtitle="From our founding in 2008 to becoming one of India's most prestigious developers. Coming soon."
      backHref="/about"
      backLabel="About Us"
    />
  )
}
