import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, Clock, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="py-12 px-4 bg-foreground text-background border-t border-background/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-xl font-bold">
              Babaerp
            </Link>
            <p className="mt-3 text-sm text-background/70 leading-normal">
              Complete ERP solution for businesses. Manage accounting, sales, purchases, restaurants, POS, and analytics in one platform.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Modules</h4>
            <nav className="space-y-1">
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
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-background/70 flex-shrink-0" />
                <span className="text-background/70">Pangani Street,P.O.Box 14187 Arusha ,</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-background/70 flex-shrink-0" />
                <span className="text-background/70">+255 675 303 030</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-background/70 flex-shrink-0" />
                <a
                  href="mailto:social@babaerp.com?subject=Inquiry from BabaERP Website"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  social@babaerp.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-background/70 flex-shrink-0" />
                <span className="text-background/70">Mon-Fri: 8am-18hr, Sat: 8am-18hr</span>
              </div>
            </div>
          </div>
          {/* <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">Support</h4>
            <nav className="space-y-1">
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
          </div> */}
        </div>

        <div className="border-t border-background/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-sm text-background/70">
                2026 Babaerp. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-background/70 font-medium">Follow Us:</span>
              <div className="flex gap-2">
                <Link
                  href="https://facebook.com/babaerp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="https://instagram.com/babaerp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="https://twitter.com/babaerp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="https://linkedin.com/company/babaerp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
