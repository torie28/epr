"use client"

import dynamic from 'next/dynamic'

// Dynamically import animated content to prevent SSR issues
const AnimatedContent = dynamic(() => import("@/components/animated-content").then(mod => ({ default: mod.AnimatedContent })), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-background" />
})

export function ClientAnimatedContent() {
  return <AnimatedContent />
}
