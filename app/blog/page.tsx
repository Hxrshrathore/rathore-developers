import StubPage from "@/components/StubPage"

export const metadata = {
  title: "Blog | Rathore Developers",
  description: "Insights, updates, and stories from the world of luxury real estate by Rathore Developers.",
}

export default function BlogPage() {
  return (
    <StubPage 
      title="Blog." 
      subtitle="Insights and stories from India's luxury real estate landscape. Coming soon."
      backHref="/"
      backLabel="Home"
    />
  )
}
