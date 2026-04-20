import { 
  Calculator, 
  ShoppingCart, 
  Package, 
  UtensilsCrossed, 
  CreditCard, 
  BarChart3,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"

const modules = [
  {
    icon: Calculator,
    title: "Accounting",
    description: "Complete financial management with general ledger, accounts payable/receivable, and automated reconciliation.",
    features: ["General Ledger", "Bank Reconciliation", "Financial Reports", "Tax Management"]
  },
  {
    icon: ShoppingCart,
    title: "Sales",
    description: "Manage your entire sales pipeline from quotations to invoicing with powerful CRM integration.",
    features: ["Quotations", "Sales Orders", "Invoicing", "Customer Management"]
  },
  {
    icon: Package,
    title: "Purchases",
    description: "Streamline procurement with vendor management, purchase orders, and inventory tracking.",
    features: ["Purchase Orders", "Vendor Portal", "Inventory Control", "Cost Analysis"]
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description: "Full-featured restaurant management with table booking, kitchen display, and menu management.",
    features: ["Table Management", "Kitchen Display", "Menu Builder", "Order Tracking"]
  },
  {
    icon: CreditCard,
    title: "Point of Sale",
    description: "Fast and intuitive POS system with multi-payment support and real-time inventory sync.",
    features: ["Quick Checkout", "Multiple Payments", "Receipt Printing", "Offline Mode"]
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Comprehensive business intelligence with customizable dashboards and real-time insights.",
    features: ["Custom Dashboards", "Real-time Data", "Export Options", "Scheduled Reports"]
  }
]

export function HowItWorks() {
  return (
    <section id="modules" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm border rounded-full mb-6 bg-card">
            Comprehensive Modules
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-balance">
            Everything you need to<br />run your business
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Six powerful modules working together seamlessly to give you complete control over your operations.
          </p>
        </div>

        {/* Modules grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((module, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                <module.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-serif text-xl mb-2">{module.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {module.description}
              </p>
              <ul className="space-y-2">
                {module.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Features section */}
        <div id="features" className="pt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <span className="inline-block px-3 py-1 text-xs border rounded-full mb-4 bg-card">
                Unified Platform
              </span>
              <h3 className="font-serif text-2xl md:text-3xl mb-4">
                All modules work together seamlessly
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When you make a sale, inventory updates automatically. When you receive a purchase, accounting entries are created. Every action in Babaerp triggers the right updates across all modules.
              </p>
              <Button variant="outline" className="rounded-full gap-2">
                Learn more <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="bg-card rounded-xl p-6 border">
              <IntegrationDiagram />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-card rounded-xl p-6 border">
              <AnalyticsDiagram />
            </div>
            <div className="order-1 md:order-2">
              <span className="inline-block px-3 py-1 text-xs border rounded-full mb-4 bg-card">
                Real-time Insights
              </span>
              <h3 className="font-serif text-2xl md:text-3xl mb-4">
                Make data-driven decisions
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Get instant visibility into your business performance. Track KPIs, monitor trends, and identify opportunities with powerful analytics built into every module.
              </p>
              <Button variant="outline" className="rounded-full gap-2">
                Explore analytics <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegrationDiagram() {
  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48">
          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-foreground flex items-center justify-center z-10">
            <span className="text-background font-bold text-lg">B</span>
          </div>
          
          {/* Orbiting modules */}
          {[Calculator, ShoppingCart, Package, UtensilsCrossed, CreditCard, BarChart3].map((Icon, i) => {
            const angle = (i * 60) * (Math.PI / 180)
            const x = Math.cos(angle) * 80
            const y = Math.sin(angle) * 80
            return (
              <div
                key={i}
                className="absolute w-10 h-10 rounded-lg bg-muted flex items-center justify-center"
                style={{
                  left: `calc(50% + ${x}px - 20px)`,
                  top: `calc(50% + ${y}px - 20px)`,
                }}
              >
                <Icon className="w-5 h-5 text-foreground" />
              </div>
            )
          })}
          
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 192">
            <circle cx="96" cy="96" r="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">
        All modules connected through a unified data layer
      </p>
    </div>
  )
}

function AnalyticsDiagram() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Monthly Performance</span>
        <span className="text-xs text-muted-foreground">Last 6 months</span>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-muted-foreground">Sales</span>
            <span className="font-medium">$248,000</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full" style={{ width: "85%" }} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-muted-foreground">Purchases</span>
            <span className="font-medium">$156,000</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-foreground/60 rounded-full" style={{ width: "65%" }} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-muted-foreground">POS Revenue</span>
            <span className="font-medium">$89,500</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent/70 rounded-full" style={{ width: "45%" }} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-muted-foreground">Restaurant</span>
            <span className="font-medium">$67,200</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-foreground/40 rounded-full" style={{ width: "35%" }} />
          </div>
        </div>
      </div>
    </div>
  )
}
