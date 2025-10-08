import { Navbar } from "@/components/navbar"
import { ActivitiesSection } from "@/components/activities-section"
import { Footer } from "@/components/footer"

export default function ActivitiesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <ActivitiesSection />
      </div>
      <Footer />
    </main>
  )
}
