"use client"

import {
  Hotel,
  Wrench,
  Pill,
  Smartphone,
  ShoppingCart,
  Tv,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/components/scroll-animation-provider"

const services = [
  {
    icon: Hotel,
    title: "Hotel & Restaurant",
    description: "Complete hospitality management with room booking, table reservations, and comprehensive restaurant operations.",
    features: ["Room Management", "Table Reservations", "Menu Engineering", "Guest Services"]
  },
  {
    icon: Wrench,
    title: "Hardware & Autoparts",
    description: "Specialized inventory management for hardware stores and auto parts with serial tracking and compatibility matching.",
    features: ["Serial Number Tracking", "Vehicle Compatibility", "Supplier Management", "Stock Optimization"]
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "Pharmaceutical management with prescription tracking, expiry monitoring, and regulatory compliance.",
    features: ["Prescription Management", "Expiry Tracking", "Drug Interactions", "Compliance Reporting"]
  },
  {
    icon: Smartphone,
    title: "Repair & Phone",
    description: "Service management for repair shops with job tracking, parts inventory, and customer communication.",
    features: ["Job Tracking", "Parts Inventory", "Customer Updates", "Service History"]
  },
  {
    icon: ShoppingCart,
    title: "Supermarkets & Stores",
    description: "Retail management with barcode scanning, loyalty programs, and multi-store operations.",
    features: ["Barcode Scanning", "Loyalty Programs", "Multi-store Support", "Promotions"]
  },
  {
    icon: Tv,
    title: "Electronics",
    description: "Electronics retail with warranty tracking, technical specifications, and after-sales service.",
    features: ["Warranty Management", "Technical Specs", "After-sales Service", "Product Catalogs"]
  }
]

export function Services() {
  const headerRef = useScrollAnimation<HTMLDivElement>({ delay: 0 })
  const servicesGridRef = useScrollAnimation<HTMLDivElement>({ delay: 200 })
  const ctaRef = useScrollAnimation<HTMLDivElement>({ delay: 400 })

  return (
    <section id="services" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm border rounded-full mb-6 bg-card hover-lift">
            Industry Solutions
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-balance">
            Tailored solutions for<br />your industry
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Specialized features and workflows designed to meet the unique needs of your business sector.
          </p>
        </div>

        {/* Services grid */}
        <div ref={servicesGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`bg-card rounded-xl p-6 border hover:shadow-lg transition-all duration-300 hover-lift hover:scale-105 animate-stagger-${(index % 4) + 1}`}>
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-serif text-xl mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div ref={ctaRef} className="text-center">
          <div className="bg-card rounded-xl p-8 border max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl mb-4">
              Find your perfect solution
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you're running a small shop or a multi-location enterprise, 
              Babaerp adapts to your specific industry requirements.
            </p>
            <Button className="rounded-full gap-2">
              Explore your industry <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
