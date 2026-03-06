import StubPage from "@/components/StubPage"

export const metadata = {
  title: "Leadership Team | Rathore Developers",
  description: "Meet the leadership team behind Rathore Developers — visionaries shaping India's luxury real estate landscape.",
}

export default function LeadershipPage() {
  return (
    <StubPage 
      title="Leadership." 
      subtitle="The team of visionaries who craft every Rathore experience. Coming soon."
      backHref="/about"
      backLabel="About Us"
    />
  )
}
