import StubPage from "@/components/StubPage"

export const metadata = {
  title: "Our Philosophy | Rathore Developers",
  description: "Discover the philosophy behind Rathore Developers — our passion, principles, and the Rathore Way.",
}

export default function PhilosophyPage() {
  return (
    <StubPage 
      title="Our Philosophy." 
      subtitle="A deeper look at the principles that guide every structure we create. Coming soon."
      backHref="/about"
      backLabel="About Us"
    />
  )
}
