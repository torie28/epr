"use client"

import { useState } from "react"
import { ChevronDown, Shield, Database, Users, Eye, Lock, AlertTriangle, FileText, Globe } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const privacyCategories = [
  {
    id: "information",
    title: "Information We Collect",
    icon: Database,
    items: [
      {
        title: "Business Data",
        content: "We collect information necessary to operate your POS/ERP system, including product details, inventory levels, sales transactions, customer information, employee data, and financial records. This data is essential for providing core business management functionality."
      },
      {
        title: "Usage Analytics",
        content: "We collect anonymous usage data about how you interact with our system, including feature usage patterns, performance metrics, and system access logs. This helps us improve service quality and user experience."
      },
      {
        title: "Account Information",
        content: "When you register, we collect your business name, contact information, payment details, and user credentials. This information is used for account management, billing, and service communication."
      },
      {
        title: "Technical Data",
        content: "We automatically collect device information, IP addresses, browser type, and system performance data. This helps us troubleshoot issues, optimize performance, and ensure system security."
      }
    ]
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    icon: Eye,
    items: [
      {
        title: "Service Provision",
        content: "Your data is used to provide and maintain the POS/ERP services, including processing transactions, managing inventory, generating reports, and enabling business analytics."
      },
      {
        title: "System Improvements",
        content: "We analyze usage patterns and performance data to improve our services, develop new features, and enhance system reliability and user experience."
      },
      {
        title: "Communication",
        content: "We use your contact information to send service updates, security alerts, billing notifications, and important system announcements. You can opt out of marketing communications."
      },
      {
        title: "Legal Compliance",
        content: "We may use your information to comply with legal obligations, enforce our terms of service, prevent fraud, and protect our rights and the rights of our users."
      }
    ]
  },
  {
    id: "sharing",
    title: "Information Sharing",
    icon: Users,
    items: [
      {
        title: "No Third-Party Data Sales",
        content: "We never sell, rent, or lease your business data to third parties. Your data is your property, and we maintain strict confidentiality agreements with all service providers."
      },
      {
        title: "Service Providers",
        content: "We share data only with essential service providers who help operate our system (payment processors, cloud infrastructure, security services). All providers undergo rigorous security vetting."
      },
      {
        title: "Legal Requirements",
        content: "We may disclose information if required by law, court order, or government request, or to protect our rights, property, or safety, or that of our users or the public."
      },
      {
        title: "Business Transfers",
        content: "In the event of a merger, acquisition, or sale of assets, user data may be transferred as part of the business transaction. We will notify you of any such changes."
      }
    ]
  },
  {
    id: "security",
    title: "Data Security & Protection",
    icon: Lock,
    items: [
      {
        title: "Encryption Standards",
        content: "All data is encrypted using industry-standard AES-256 encryption both in transit and at rest. We use TLS 1.3 for all web communications and secure database encryption for stored data."
      },
      {
        title: "Access Controls",
        content: "We implement strict access controls, multi-factor authentication, role-based permissions, and regular security audits to protect your data from unauthorized access."
      },
      {
        title: "Security Monitoring",
        content: "Our systems are monitored 24/7 for security threats, unusual activity, and potential vulnerabilities. We maintain comprehensive incident response procedures."
      },
      {
        title: "Compliance Standards",
        content: "We comply with GDPR, CCPA, and other data protection regulations. Our security practices are regularly reviewed and updated to meet industry standards."
      }
    ]
  },
  {
    id: "rights",
    title: "Your Data Rights",
    icon: Shield,
    items: [
      {
        title: "Data Access",
        content: "You have the right to access all your data stored in our system at any time through our export tools or by contacting our support team."
      },
      {
        title: "Data Portability",
        content: "You can export your data in common formats (CSV, JSON, PDF) at any time. We provide tools for easy data migration to other systems."
      },
      {
        title: "Data Correction",
        content: "You can update or correct inaccurate information in your account at any time. We provide audit trails to track all changes to your data."
      },
      {
        title: "Account Deletion",
        content: "You can request deletion of your account and all associated data. We will permanently delete your information within 30 days, except as required by law."
      }
    ]
  },
  {
    id: "retention",
    title: "Data Retention",
    icon: FileText,
    items: [
      {
        title: "Active Accounts",
        content: "We retain your data while your account is active to provide continuous service. You can export or delete your data at any time during your subscription."
      },
      {
        title: "Account Closure",
        content: "After account closure, we retain data for 30 days to allow for recovery requests. After this period, data is permanently deleted unless legal requirements dictate otherwise."
      },
      {
        title: "Legal Requirements",
        content: "Some data may be retained longer to comply with legal obligations, tax requirements, or for fraud prevention and security purposes."
      },
      {
        title: "Analytics Data",
        content: "Anonymous usage analytics and performance data may be retained indefinitely for service improvement purposes, as this data cannot be linked to individual accounts."
      }
    ]
  },
  {
    id: "international",
    title: "International Data Transfers",
    icon: Globe,
    items: [
      {
        title: "Data Storage Locations",
        content: "Your data is stored in secure data centers located in [Specify regions/countries]. We ensure all storage locations meet our security and compliance standards."
      },
      {
        title: "Cross-Border Transfers",
        content: "Data may be transferred between our secure data centers for backup, maintenance, and performance optimization. All transfers comply with applicable data protection laws."
      },
      {
        title: "Adequacy Measures",
        content: "When transferring data internationally, we use appropriate safeguards including standard contractual clauses and ensure equivalent protection to your home jurisdiction."
      }
    ]
  },
  {
    id: "children",
    title: "Children's Privacy",
    icon: AlertTriangle,
    items: [
      {
        title: "Age Restrictions",
        content: "Our services are intended for business use by adults. We do not knowingly collect information from children under 16 years of age."
      },
      {
        title: "Parental Consent",
        content: "If we become aware that we have collected information from a child without parental consent, we will take steps to delete such information immediately."
      },
      {
        title: "Educational Use",
        content: "For educational institutions using our services, we require appropriate consent from parents/guardians for student data collection and processing."
      }
    ]
  }
]

export function PrivacySection() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["information"])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is fundamental to our business. This policy explains how we collect,
            use, and protect your data when you use BabaERP POS system.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Last updated: {new Date().toLocaleDateString()}</span>
            <span>•</span>
            <span>Version 1.0</span>
            <span>•</span>
            <span>Effective Date: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mb-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-lg font-semibold mb-3 text-primary">Our Privacy Commitment</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            At BabaERP, we believe your data belongs to you. We are committed to protecting your privacy
            and maintaining the highest standards of data security. We collect only what's necessary to
            provide excellent service, never sell your business data, and always maintain full transparency
            about our data practices.
          </p>
        </div>

        <div className="space-y-6">
          {privacyCategories.map((category) => {
            const Icon = category.icon
            const isExpanded = expandedCategories.includes(category.id)

            return (
              <div
                key={category.id}
                className="border border-border rounded-lg overflow-hidden bg-card"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""
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
                          <AccordionTrigger className="px-6 py-3 hover:no-underline">
                            <span className="text-sm font-medium">{item.title}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
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

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-muted/50 rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>For privacy-related questions or data requests:</p>
              <p>Email: privacy@babaerp.com</p>
              <p>Phone: +255 675 303 030</p>
              <p>Address: Pangani Street, Arusha, Tanzania</p>
            </div>
          </div>

          <div className="p-6 bg-muted/50 rounded-lg border border-border">
            <h3 className="text-lg font-semibold mb-3">Data Protection Officer</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Our Data Protection Officer oversees:</p>
              <p>• Privacy compliance and audits</p>
              <p>• Data protection impact assessments</p>
              <p>• Staff training on privacy matters</p>
              <p>• Incident response coordination</p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-lg font-semibold mb-3 text-primary">Policy Updates</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            We may update this privacy policy to reflect changes in our practices, legal requirements,
            or service offerings. We will notify you of significant changes via email and post the
            updated policy on our website.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Review Frequency:</strong> This policy is reviewed annually and updated as needed.
            Your continued use of our services after any changes constitutes acceptance of the updated policy.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BabaERP. All rights reserved. This privacy policy is part of our
            commitment to transparent and responsible data management.
          </p>
        </div>
      </div>
    </section>
  )
}
