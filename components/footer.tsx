import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-2xl font-medium">
              Babaerp
            </Link>
            <p className="mt-4 text-sm text-background/70 leading-relaxed">
              Complete ERP solution for modern businesses. Manage accounting, sales, purchases, restaurants, POS, and analytics in one platform.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Modules</h4>
            <nav className="space-y-2">
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                Accounting
              </Link>
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                Sales
              </Link>
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                Purchases
              </Link>
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                Restaurant
              </Link>
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                Point of Sale
              </Link>
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                Reports
              </Link>
            </nav>
          </div>
          {/* <div>
            <h4 className="font-medium mb-4">Company</h4>
            <nav className="space-y-2">
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                About Us
              </Link>
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                Careers
              </Link>
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                Blog
              </Link>
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                Partners
              </Link>
            </nav>
          </div> */}
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <nav className="space-y-2">
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                Help Center
              </Link>
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                Documentation
              </Link>
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                API Reference
              </Link>
              <Link href="#" className="block text-sm text-background/70 hover:text-background transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/70">
              2026 Babaerp. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
