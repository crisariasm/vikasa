import { Navbar } from "@/components/navbar"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <TeamSection />
      </div>
      <Footer />
    </main>
  )
}
