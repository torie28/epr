"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section id="pricing" className="relative py-32 px-6 overflow-hidden">
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">
          Ready to transform your business?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
          Join thousands of businesses that trust Babaerp to manage their operations. Start your free trial today. feel free to contact us for more information, and tell us about your wish module and future request.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 gap-2">
            Request Access
            <ArrowRight className="w-4 h-4" />
          </Button> */}
          <Button
            variant="outline"
            className="rounded-full px-6"
            onClick={() => window.open('tel:0675303030')}
          >
            Contact Sales
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}
