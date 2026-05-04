"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Shield, Cookie, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PrivacyDialog } from "@/components/privacy-dialog"

export function PrivacyConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false)

  useEffect(() => {
    const privacyAccepted = localStorage.getItem('privacy-accepted')
    const privacyDeclined = localStorage.getItem('privacy-declined')
    const hasSeenConsent = sessionStorage.getItem('privacy-consent-shown')

    if (!privacyAccepted && !privacyDeclined && !hasSeenConsent) {
      // Show consent after a short delay to let page load
      const timer = setTimeout(() => {
        setShowConsent(true)
        sessionStorage.setItem('privacy-consent-shown', 'true')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    setShowConsent(false)
  }

  const handleDecline = () => {
    setShowConsent(false)
  }

  const handleLearnMore = () => {
    setShowPrivacyDialog(true)
  }


  if (!showConsent) {
    return null
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex items-start gap-4">
            <div className="shrink-0 mt-1">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="mb-4">
                <h3 className="font-semibold text-sm mb-1">Privacy & Cookie Notice</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  We use cookies and similar technologies to enhance your experience, analyze usage,
                  and provide personalized features. Your data is encrypted and never sold to third parties.
                  By using BabaERP, you agree to our privacy practices.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    onClick={handleAccept}
                    size="sm"
                    className="text-xs"
                  >
                    Accept All
                  </Button>

                  <Button
                    onClick={handleDecline}
                    variant="ghost"
                    size="sm"
                    className="text-xs hover:bg-transparent! hover:text-foreground! hover:shadow-none!"
                  >
                    Decline
                  </Button>

                  <Button
                    onClick={handleLearnMore}
                    variant="ghost"
                    size="sm"
                    className="text-xs hover:bg-transparent! hover:text-foreground! hover:shadow-none!"
                  >
                    Learn More
                  </Button>

                  <Link
                    href="/privacy"
                    target="_blank"
                    className="text-xs flex items-center gap-1 hover:bg-transparent hover:text-foreground"
                  >
                    Full Policy
                    <Lock className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PrivacyDialog
        open={showPrivacyDialog}
        onOpenChange={setShowPrivacyDialog}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </>
  )
}
