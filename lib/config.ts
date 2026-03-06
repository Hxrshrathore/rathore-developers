export const siteConfig = {
  name: "Rathore Developers",
  slogan: "Iconic Living",
  url: "https://rathoredevelopers.com",
  description: "Premium real estate developer specializing in modern, sustainable, and luxury residential projects across Mumbai, Delhi NCR, and Goa. Discover iconic residences starting from ₹8.2 Cr.",
  contact: {
    email: "information@rathoredevelopers.com",
    phone: "+91 98765 43210",
    phoneRaw: "+919876543210",
    whatsapp: "+911234567890",
  },
  socials: {
    instagram: "https://instagram.com/rathoredevelopers",
    linkedin: "https://linkedin.com/company/rathoredevelopers",
    twitter: "https://twitter.com/rathoredevs",
  },
  logo: {
    url: "/logo.png",
  },
  address: "Mumbai, Maharashtra, India",
  established: 2008,

  // ─── Mega Navigation ───
  // 3 cards aligned to buyer journey: Discover → Trust → Convert
  navigation: [
    {
      label: "Residences",
      href: "/properties",
      sections: [
        {
          title: "Explore",
          links: [
            { label: "All Properties", href: "/properties" },
            { label: "Mumbai", href: "/properties?city=mumbai" },
            { label: "Delhi NCR", href: "/properties?city=delhi" },
            { label: "Goa", href: "/properties?city=goa" },
          ],
        },
      ],
    },
    {
      label: "Our Story",
      href: "/about",
      sections: [
        {
          title: "Know Us",
          links: [
            { label: "About Rathore", href: "/about" },
            { label: "Vision & Mission", href: "/about#vision" },
            { label: "Leadership", href: "/about#leadership" },
            { label: "Awards", href: "/about#awards" },
          ],
        },
      ],
    },
    {
      label: "Connect",
      href: "/contact",
      sections: [
        {
          title: "Get in Touch",
          links: [
            { label: "Contact Us", href: "/contact" },
            { label: "Ongoing Developments", href: "/developments" },
            { label: "Careers", href: "/careers" },
            { label: "Blog & Insights", href: "/blog" },
          ],
        },
      ],
    },
  ],

  // ─── Secondary Navigation (minimal — rest goes to footer) ───
  secondaryNav: [
    { label: "Careers", href: "/careers" },
    { label: "Client Portal", href: "/login" },
  ],
}

