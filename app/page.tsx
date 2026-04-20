import { Header } from "@/components/header"
import { ClientAnimatedContent } from "@/components/client-animated-content"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ClientAnimatedContent />
      <FaqSection />
      <CtaSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
