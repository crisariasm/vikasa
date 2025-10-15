import { Navbar } from "@/components/navbar"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function GaleriaPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <GallerySection />
      </div>
      <Footer />
    </main>
  )
}