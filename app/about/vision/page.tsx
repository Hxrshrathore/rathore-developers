import StubPage from "@/components/StubPage"

export const metadata = {
  title: "Vision & Mission | Rathore Developers",
  description: "Our vision for the future of luxury real estate and the mission that drives us forward.",
}

export default function VisionPage() {
  return (
    <StubPage 
      title="Vision & Mission." 
      subtitle="Redefining luxury living through innovation, sustainability, and uncompromising quality. Coming soon."
      backHref="/about"
      backLabel="About Us"
    />
  )
}
