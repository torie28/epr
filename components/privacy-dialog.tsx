"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Shield, Lock, Eye, Check, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface PrivacyDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAccept?: () => void
  onDecline?: () => void
}

export function PrivacyDialog({ open, onOpenChange, onAccept, onDecline }: PrivacyDialogProps) {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('privacy-content')
      if (element) {
        const scrollTop = element.scrollTop
        const scrollHeight = element.scrollHeight
        const clientHeight = element.clientHeight
        const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100
        setHasScrolled(scrolled > 80)
      }
    }

    const element = document.getElementById('privacy-content')
    if (element) {
      element.addEventListener('scroll', handleScroll)
      return () => element.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('privacy-accepted', 'true')
    localStorage.setItem('privacy-accepted-date', new Date().toISOString())
    onAccept?.()
    onOpenChange(false)
  }

  const handleDecline = () => {
    localStorage.setItem('privacy-declined', 'true')
    onDecline?.()
    onOpenChange(false)
  }

  const privacyHighlights = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Your business data is encrypted and stored securely with industry-standard protection."
    },
    {
      icon: Lock,
      title: "No Data Selling",
      description: "We never sell, rent, or lease your business data to third parties. Your data is yours."
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Complete visibility into what data we collect and how we use it to serve you better."
    }
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
        <DialogHeader className="pb-4">
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Shield className="w-6 h-6 text-foreground" />
            Privacy Policy Agreement
          </DialogTitle>
        </DialogHeader>

        <div
          id="privacy-content"
          className="overflow-y-auto max-h-[60vh] pr-2 space-y-6"
        >
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p className="mb-4">
              At BabaERP, we take your privacy seriously. This privacy policy explains how we collect,
              use, and protect your data when you use our POS/ERP system.
            </p>
            <p className="mb-4">
              Please review the key points below and read our full privacy policy before continuing.
            </p>
          </div>

          <div className="grid gap-4">
            {privacyHighlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex gap-3 p-3 rounded-lg border border-border bg-card">
                  <Icon className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="p-4 bg-muted/50 rounded-lg border border-border">
            <h4 className="font-medium text-sm mb-2">Key Information We Collect:</h4>
            <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
              <li>Business data (products, inventory, sales transactions)</li>
              <li>Customer information for service delivery</li>
              <li>Usage analytics to improve our services</li>
              <li>Account and billing information</li>
            </ul>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg border border-border">
            <h4 className="font-medium text-sm mb-2">Your Rights:</h4>
            <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
              <li>Access and export your data at any time</li>
              <li>Request deletion of your account and data</li>
              <li>Update or correct your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </div>

          <div className="text-xs text-muted-foreground">
            <p>
              By continuing to use BabaERP, you acknowledge that you have read and understood our
              privacy policy. You can review our full privacy policy at any time or contact our
              privacy team at privacy@babaerp.com.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <Link
              href="/privacy"
              target="_blank"
              className="text-sm flex items-center gap-1 hover:bg-transparent hover:text-foreground"
            >
              Read Full Privacy Policy
              <Eye className="w-3 h-3" />
            </Link>

            <div className="text-xs text-muted-foreground">
              {hasScrolled && (
                <span className="text-foreground flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  Reviewed
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleDecline}
              className="flex-1 hover:bg-transparent hover:text-foreground"
            >
              <XCircle className="w-4 h-4 mr-2" />
              Disagree & Close
            </Button>

            <Button
              onClick={handleAccept}
              className="flex-1"
            >
              <Check className="w-4 h-4 mr-2" />
              Agree & Close
            </Button>
          </div>

          {!hasScrolled && (
            <p className="text-xs text-muted-foreground text-center">
              Please scroll through the privacy information before agreeing
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
