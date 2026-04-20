'use client'

import { useEffect, useRef } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  animationClass?: string
  delay?: number
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationClass = 'animate-fade-in',
    delay = 0
  } = options

  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Add initial animation class
    element.classList.add('scroll-animate-initial')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.remove('scroll-animate-initial')
            element.classList.add('scroll-animate-active', animationClass)
            observer.unobserve(element)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, animationClass, delay])

  return elementRef
}

export function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add smooth page load animation only after mount
    document.body.classList.add('page-load')

    const timer = setTimeout(() => {
      document.body.classList.add('page-loaded')
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Parallax effect for hero elements
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax')

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5'
        const yPos = -(scrolled * parseFloat(speed))
          ; (element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <>{children}</>
}
