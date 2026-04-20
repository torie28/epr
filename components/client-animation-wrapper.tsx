"use client"

import dynamic from 'next/dynamic'

// Dynamically import ScrollAnimationProvider to prevent SSR issues
const ScrollAnimationProvider = dynamic(() => import("@/components/scroll-animation-provider").then(mod => ({ default: mod.ScrollAnimationProvider })), {
  ssr: false
})

export function ClientAnimationWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ScrollAnimationProvider>
      {children}
    </ScrollAnimationProvider>
  )
}
