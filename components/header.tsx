"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)

      // Always visible in hero section (top 200px of page) and when scrolling
      if (scrollY < 200) {
        setVisible(true)
        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
          setScrollTimeout(null)
        }
      } else {
        // Show on scroll, keep visible when scrolling
        setVisible(true)

        // Clear existing timeout
        if (scrollTimeout) {
          clearTimeout(scrollTimeout)
        }

        // Set new timeout to hide header after scrolling stops (only when not in hero section)
        const timeout = setTimeout(() => {
          setVisible(false)
        }, 1500) // Hide after 1.5 seconds of no scrolling

        setScrollTimeout(timeout)
      }
    }

    // Initialize visibility on mount - always visible on home page
    setVisible(true)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [scrollTimeout])

  return (
    <header className={`sticky top-4 z-50 mx-auto max-w-2xl py-3 px-6 flex items-center justify-between bg-background/80 backdrop-blur-md border rounded-full shadow-lg transition-all duration-300 ${scrolled ? 'shadow-xl bg-background/90' : ''} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
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
        className="md:hidden transition-transform duration-200 hover:scale-110"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6 animate-scale-in" /> : <Menu className="w-6 h-6" />}
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-background/90 backdrop-blur-md border rounded-2xl p-4 md:hidden z-50 shadow-lg animate-scale-in">
          <nav className="flex flex-col gap-4">
            <Link
              href="#modules"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Modules
            </Link>
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            {/* <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link> */}
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
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
