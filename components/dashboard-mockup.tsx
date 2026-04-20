import { 
  Calculator, 
  ShoppingCart, 
  Package, 
  UtensilsCrossed, 
  CreditCard, 
  BarChart3,
  TrendingUp,
  DollarSign,
  Users,
  FileText
} from "lucide-react"

export function DashboardMockup() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-card rounded-xl shadow-2xl border overflow-hidden">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-md text-xs text-muted-foreground">
            app.babaerp.com/dashboard
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-56 border-r bg-muted/20 p-4 hidden md:block">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-sm">B</span>
            </div>
            <span className="font-serif font-medium">Babaerp</span>
          </div>
          <nav className="space-y-1">
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm bg-muted rounded">
              <BarChart3 className="w-4 h-4" /> Dashboard
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground">
              <Calculator className="w-4 h-4" /> Accounting
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground">
              <ShoppingCart className="w-4 h-4" /> Sales
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground">
              <Package className="w-4 h-4" /> Purchases
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground">
              <UtensilsCrossed className="w-4 h-4" /> Restaurant
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground">
              <CreditCard className="w-4 h-4" /> POS
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground">
              <FileText className="w-4 h-4" /> Reports
            </div>
          </nav>
          <div className="mt-auto pt-8 border-t mt-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground text-xs font-medium">TJ</span>
              </div>
              <div>
                <div className="text-sm font-medium">Torie Joe</div>
                <div className="text-xs text-muted-foreground">Admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-medium">Dashboard Overview</h2>
              <p className="text-sm text-muted-foreground">Welcome back, John</p>
            </div>
            <div className="text-sm text-muted-foreground">April 2026</div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Revenue</span>
                <DollarSign className="w-4 h-4 text-accent" />
              </div>
              <div className="text-2xl font-semibold">Tsh 124,500</div>
              <div className="flex items-center gap-1 text-xs text-accent mt-1">
                <TrendingUp className="w-3 h-3" />
                +12.5%
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Orders</span>
                <ShoppingCart className="w-4 h-4 text-accent" />
              </div>
              <div className="text-2xl font-semibold">1,248</div>
              <div className="flex items-center gap-1 text-xs text-accent mt-1">
                <TrendingUp className="w-3 h-3" />
                +8.2%
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Customers</span>
                <Users className="w-4 h-4 text-accent" />
              </div>
              <div className="text-2xl font-semibold">3,842</div>
              <div className="flex items-center gap-1 text-xs text-accent mt-1">
                <TrendingUp className="w-3 h-3" />
                +15.3%
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Expenses</span>
                <Calculator className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-semibold">Tsh 45,200</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                -3.1%
              </div>
            </div>
          </div>

          {/* Chart placeholder */}
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="text-sm font-medium mb-4">Revenue Overview</h3>
            <div className="flex items-end gap-2 h-32">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-accent/20 rounded-t"
                  style={{ height: `${height}%` }}
                >
                  <div
                    className="w-full bg-accent rounded-t"
                    style={{ height: `${height * 0.7}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
