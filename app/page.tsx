import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* Mobile spacer to prevent cards from looking cut off */}
      <div className="h-16 md:h-0" />
      <Footer />
    </main>
  )
}
