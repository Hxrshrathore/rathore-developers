export interface Property {
  id: number;
  title: string;
  location: string;
  status: string;
  price: string;
  specs: {
    beds: number | string;
    area: string;
  };
  image: string;
  category: string;
  description?: string;
  amenities?: string[];
  gallery?: string[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "The Obsidian Tower",
    location: "Worli, Mumbai",
    status: "Selling Now",
    price: "From ₹12.4 Cr",
    specs: { beds: 3, area: "2,400 sqft" },
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935&auto=format&fit=crop",
    category: "High-Rise",
    description: "The Obsidian Tower is a masterpiece of modern architecture, soaring above the Mumbai skyline. Each residence offers panoramic views of the Arabian Sea and the city's vibrant landscape. Designed for the discerning few, it features bespoke interiors and world-class amenities.",
    amenities: ["Infinity Pool", "Private Cinema", "Sky Lounge", "24/7 Concierge", "State-of-the-art Gym"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Azure Bay Residences",
    location: "Marine Drive, Mumbai",
    status: "Limited Units",
    price: "From ₹24.8 Cr",
    specs: { beds: 5, area: "5,200 sqft" },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    category: "Waterfront",
    description: "Azure Bay Residences redefine luxury waterfront living. Located on the iconic Marine Drive, these homes offer an unparalleled connection to the sea. With expansive terraces and floor-to-ceiling windows, every day feels like a vacation.",
    amenities: ["Private Dock", "Wine Cellar", "Spa & Wellness Center", "Valet Parking", "Smart Home Integration"],
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Veridian Grove",
    location: "Lutyens' Delhi",
    status: "Coming Soon",
    price: "From ₹48.5 Cr",
    specs: { beds: 6, area: "8,500 sqft" },
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    category: "Sustainable",
    description: "Nestled in the heart of Lutyens' Delhi, Veridian Grove is a sanctuary of peace and sustainability. These expansive villas are built with eco-friendly materials and feature lush private gardens, blending heritage with modern green living.",
    amenities: ["Solar Power", "Rainwater Harvesting", "Organic Garden", "Yoga Pavilion", "Library"],
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    title: "The Quartz Lofts",
    location: "Bandra West, Mumbai",
    status: "Selling Now",
    price: "From ₹8.2 Cr",
    specs: { beds: 2, area: "1,400 sqft" },
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop",
    category: "Lofts",
    description: "The Quartz Lofts offer a unique industrial-chic living experience in the heart of Bandra. With double-height ceilings and open-plan layouts, these lofts are perfect for the creative urbanite.",
    amenities: ["Rooftop Barbecue", "Art Studio", "Pet Park", "Co-working Space", "High-speed Internet"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Elysian Heights",
    location: "Golf Course Road, Gurgaon",
    status: "Pre-Launch",
    price: "From ₹15.5 Cr",
    specs: { beds: 4, area: "3,800 sqft" },
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    category: "High-Rise",
    description: "Elysian Heights is the pinnacle of luxury in Gurgaon. Located on the prestigious Golf Course Road, it offers residents exclusive access to a world of luxury, including a private golf simulator and a temperature-controlled pool.",
    amenities: ["Golf Simulator", "Heated Pool", "Business Center", "Kids Play Area", "Tennis Court"],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Solstice Villas",
    location: "Candolim, Goa",
    status: "Selling Now",
    price: "From ₹12.2 Cr",
    specs: { beds: 4, area: "4,500 sqft" },
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    category: "Waterfront",
    description: "Experience the ultimate beachside lifestyle at Solstice Villas. These Mediterranean-inspired villas in Candolim offer direct beach access and private pools, making every moment a celebration of the sun and sea.",
    amenities: ["Direct Beach Access", "Private Pool", "Outdoor Kitchen", "Sun Deck", "Security"],
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];
