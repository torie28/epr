"use client"

import { useState } from "react"
import { ChevronDown, FileText, Shield, Users, CreditCard, AlertCircle, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const termsCategories = [
  {
    id: "general",
    title: "General Terms",
    icon: FileText,
    items: [
      {
        title: "Acceptance of Terms",
        content: "By accessing and using BabaERP POS system, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
      },
      {
        title: "Service Description",
        content: "BabaERP is a cloud-based Point of Sale and ERP system that provides inventory management, sales tracking, customer management, and business analytics capabilities for small to medium-sized businesses."
      },
      {
        title: "Account Registration",
        content: "You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
      }
    ]
  },
  {
    id: "privacy",
    title: "Privacy & Data Protection",
    icon: Shield,
    items: [
      {
        title: "Data Collection",
        content: "We collect information necessary to provide and improve our services, including business data, transaction records, and usage analytics. All data is encrypted and stored securely."
      },
      {
        title: "Data Usage",
        content: "Your data is used solely for service delivery, analytics, and system improvements. We never sell your personal business data to third parties. You retain full ownership of your data."
      },
      {
        title: "Data Retention",
        content: "You can export or delete your data at any time. We retain your data only as long as necessary to provide the service or as required by law, with a minimum retention period of 30 days after account termination."
      }
    ]
  },
  {
    id: "payments",
    title: "Payments & Billing",
    icon: CreditCard,
    items: [
      {
        title: "Subscription Fees",
        content: "BabaERP operates on a monthly subscription basis. Fees are charged in advance for the upcoming billing period. Prices are subject to change with 30 days prior notice."
      },
      {
        title: "Payment Methods",
        content: "We accept major credit cards, bank transfers, and mobile payment methods. All payment processing is handled through secure, PCI-compliant payment gateways."
      },
      {
        title: "Refund Policy",
        content: "Refunds are available within 14 days of initial subscription for new customers. Monthly subscriptions are non-refundable after the 14-day trial period, but you can cancel at any time."
      }
    ]
  },
  {
    id: "user",
    title: "User Responsibilities",
    icon: Users,
    items: [
      {
        title: "Data Accuracy",
        content: "You are responsible for ensuring the accuracy of all business data entered into the system, including product information, pricing, inventory levels, and customer details."
      },
      {
        title: "System Security",
        content: "You must implement appropriate security measures, including strong passwords, regular credential updates, and limited access for authorized personnel only."
      },
      {
        title: "Compliance",
        content: "You are responsible for complying with all applicable laws and regulations related to your business operations, including tax obligations, data protection laws, and industry-specific regulations."
      }
    ]
  },
  {
    id: "limitations",
    title: "Limitations & Liability",
    icon: AlertCircle,
    items: [
      {
        title: "Service Availability",
        content: "While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. We are not liable for temporary service interruptions, maintenance periods, or force majeure events."
      },
      {
        title: "Limitation of Liability",
        content: "Our liability is limited to the amount paid for the service in the preceding 3 months. We are not liable for indirect, consequential, or punitive damages."
      },
      {
        title: "Indemnification",
        content: "You agree to indemnify and hold harmless BabaERP from any claims, damages, or expenses arising from your use of the service or violation of these terms."
      }
    ]
  }
]

interface TermsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TermsDialog({ open, onOpenChange }: TermsDialogProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["general"])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <FileText className="w-5 h-5" />
            Terms of Service
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-4">
            Please read these terms carefully before using BabaERP POS system.
            By using our service, you agree to be bound by these terms.
          </p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
            <span>Last updated: {new Date().toLocaleDateString()}</span>
            <span>•</span>
            <span>Version 1.0</span>
          </div>

          <div className="space-y-4">
            {termsCategories.map((category) => {
              const Icon = category.icon
              const isExpanded = expandedCategories.includes(category.id)

              return (
                <div
                  key={category.id}
                  className="border border-border rounded-lg overflow-hidden bg-card"
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-primary" />
                      <h3 className="text-sm font-semibold">{category.title}</h3>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="border-t border-border">
                      <Accordion type="single" collapsible className="border-none">
                        {category.items.map((item, index) => (
                          <AccordionItem
                            key={index}
                            value={`${category.id}-${index}`}
                            className="border-border"
                          >
                            <AccordionTrigger className="px-4 py-2 hover:no-underline hover:bg-accent/30">
                              <span className="text-xs font-medium">{item.title}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-3">
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {item.content}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
            <h3 className="text-sm font-semibold mb-2">Contact Information</h3>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>For questions about these Terms of Service, please contact us:</p>
              <p>Email: social@babaerp.com</p>
              <p>Phone: +255 675 303 030</p>
              <p>Address: Pangani Street, Arusha</p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} BabaERP. All rights reserved.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
