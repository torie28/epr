import { PrivacySection } from "@/components/privacy-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PrivacySection />
      <Footer />
    </main>
  )
}
