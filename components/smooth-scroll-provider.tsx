'use client'

import { useEffect } from 'react'

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Enhanced smooth scrolling for mobile devices
    const handleTouchStart = () => {
      document.body.style.overflow = 'hidden'
    }

    const handleTouchEnd = () => {
      document.body.style.overflow = ''
    }

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      
      if (anchor?.hash) {
        e.preventDefault()
        const targetElement = document.querySelector(anchor.hash)
        if (targetElement) {
          const headerOffset = 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    // Add event listeners
    document.addEventListener('click', handleAnchorClick)
    
    // Mobile touch optimizations
    if ('ontouchstart' in window) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true })
      document.addEventListener('touchend', handleTouchEnd, { passive: true })
    }

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick)
      if ('ontouchstart' in window) {
        document.removeEventListener('touchstart', handleTouchStart)
        document.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [])

  return <>{children}</>
}
