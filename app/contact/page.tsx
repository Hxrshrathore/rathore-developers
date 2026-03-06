import StubPage from "@/components/StubPage"

export const metadata = {
  title: "Contact Us | Rathore Developers",
  description: "Get in touch with Rathore Developers for property inquiries, site visits, and partnership opportunities.",
}

export default function ContactPage() {
  return (
    <StubPage 
      title="Contact Us." 
      subtitle="We'd love to hear from you. Our team is ready to assist with any inquiry. Coming soon."
      backHref="/"
      backLabel="Home"
    />
  )
}
