"use client"

import { Button } from "@/components/ui/button"
import { DashboardMockup } from "@/components/dashboard-mockup"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/components/scroll-animation-provider"

export function HeroSection() {
  const badgeRef = useScrollAnimation<HTMLDivElement>({ delay: 0 })
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ delay: 200 })
  const descriptionRef = useScrollAnimation<HTMLParagraphElement>({ delay: 400 })
  const buttonsRef = useScrollAnimation<HTMLDivElement>({ delay: 600 })
  const mockupRef = useScrollAnimation<HTMLDivElement>({ delay: 800 })

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="text-center max-w-4xl mx-auto">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm border rounded-full mb-6 bg-card hover-lift"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-float" />
            All-in-one ERP Solution
          </div>
          <h1
            ref={titleRef}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance"
          >
            Streamline your entire business operations
          </h1>
          <p
            ref={descriptionRef}
            className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From accounting to restaurant management, Babaerp provides comprehensive modules to manage every aspect of your business in one unified platform.
          </p>
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            {/* <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 gap-2 hover-lift">
              Request Access
              <ArrowRight className="w-4 h-4" />
            </Button> */}
            <Button variant="outline" className="rounded-full px-6 hover-lift">
              Watch Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div ref={mockupRef} className="mt-16 parallax" data-speed="0.3">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
