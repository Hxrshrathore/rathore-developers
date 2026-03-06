export const siteConfig = {
  name: "Rathore Developers",
  slogan: "Iconic Living",
  description: "Premium real estate developer specializing in modern, sustainable, and luxury residential projects.",
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
  navigation: [
    {
      label: "Who We Are",
      href: "/about",
      sections: [
        {
          title: "Philosophy",
          links: [
            { label: "Our Philosophy", href: "/about/philosophy" },
            { label: "Passion at Work", href: "/about/philosophy#passion" },
            { label: "The Rathore Way", href: "/about/philosophy#the-way" },
            { label: "Vision & Mission", href: "/about/vision" },
          ],
        },
        {
          title: "Leadership",
          links: [
            { label: "About our Founder", href: "/about/leadership#founder" },
            { label: "Chairman's Message", href: "/about/leadership#chairman" },
            { label: "Board of Directors", href: "/about/leadership#board" },
            { label: "Leadership Team", href: "/about/leadership" },
          ],
        },
        {
          title: "Showcase",
          links: [
            { label: "The Rathore Journey", href: "/about/journey" },
            { label: "Awards & Honours", href: "/about/awards" },
          ],
        },
      ],
    },
    {
      label: "What We Do",
      href: "/properties",
      sections: [
        {
          title: "Residential",
          links: [
            { label: "Mumbai", href: "/properties?city=mumbai" },
            { label: "Delhi NCR", href: "/properties?city=delhi" },
            { label: "Goa", href: "/properties?city=goa" },
            { label: "Gurgaon", href: "/properties?city=gurgaon" },
            { label: "View All Properties", href: "/properties" },
          ],
        },
        {
          title: "Commercial",
          links: [
            { label: "Rathore City Mall", href: "/commercial" },
            { label: "1 Rathore", href: "/commercial#1-rathore" },
          ],
        },
        {
          title: "Services",
          links: [
            { label: "Contracting", href: "/developments" },
            { label: "Business Services", href: "/developments#services" },
          ],
        },
      ],
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      sections: [
        {
          title: "Projects",
          links: [
            { label: "Client Testimonials", href: "/portfolio#testimonials" },
            { label: "Completed Projects", href: "/portfolio#completed" },
            { label: "Ongoing Developments", href: "/developments" },
          ],
        },
        {
          title: "Rathore Interiors",
          links: [
            { label: "Interior Design", href: "/portfolio#interiors" },
            { label: "Glazing & Metal Works", href: "/portfolio#glazing" },
            { label: "Concrete Products", href: "/portfolio#concrete" },
          ],
        },
      ],
    },
    {
      label: "Contact Us",
      href: "/contact",
      sections: [],
    },
    {
      label: "Blog",
      href: "/blog",
      sections: [],
    },
  ],

  // ─── Secondary Navigation (top-right utility links) ───
  secondaryNav: [
    { label: "Careers", href: "/careers" },
    { label: "Media Centre", href: "/blog" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Investor Relations", href: "/about#investors" },
    { label: "Rathore Privilege", href: "/login" },
  ],
}
