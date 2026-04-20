import { Button } from "@/components/ui/button"
import { DashboardMockup } from "@/components/dashboard-mockup"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm border rounded-full mb-6 bg-card">
            <span className="w-2 h-2 rounded-full bg-accent" />
            All-in-one ERP Solution
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
            Streamline your entire business operations
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From accounting to restaurant management, Babaerp provides comprehensive modules to manage every aspect of your business in one unified platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 gap-2">
              Request Access
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="rounded-full px-6">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
