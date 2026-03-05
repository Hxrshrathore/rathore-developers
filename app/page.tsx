import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PropertyGrid } from "@/components/PropertyGrid";
import { InteractiveSection } from "@/components/InteractiveSection";
import { AmenitiesBento } from "@/components/AmenitiesBento";
import { BookingSection } from "@/components/BookingSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <PropertyGrid />
      <InteractiveSection />
      <AmenitiesBento />
      <BookingSection />
      <ServicesSection />
      <Testimonials />
    </main>
  );
}
