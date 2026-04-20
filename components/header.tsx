"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-2xl py-3 px-6 flex items-center justify-between bg-background/80 backdrop-blur-md border rounded-full shadow-lg">
      <Link href="/" className="font-serif text-2xl font-medium tracking-tight">
        Babaerp
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link href="#modules" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Modules
        </Link>
        <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Features
        </Link>
        {/* <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Pricing
        </Link> */}
        <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Contact
        </Link>
      </nav>
      <div className="hidden md:flex items-center gap-3">
        {/* <Button variant="ghost" size="sm">
          Login
        </Button> */}
        {/* <Button size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
          Request Demo
        </Button> */}
      </div>
      <button
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-background/90 backdrop-blur-md border rounded-2xl p-4 md:hidden z-50 shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link href="#modules" className="text-sm text-muted-foreground hover:text-foreground">
              Modules
            </Link>
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
              Features
            </Link>
            {/* <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </Link> */}
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <div className="flex gap-3 pt-2">
              {/* <Button variant="ghost" size="sm" className="flex-1">
                Login
              </Button>
              <Button size="sm" className="flex-1 rounded-full bg-foreground text-background">
                Request Demo
              </Button> */}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
