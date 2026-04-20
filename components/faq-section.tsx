"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "What is Babaerp and who is it for?",
    answer:
      "Babaerp is a comprehensive ERP solution designed for small to medium businesses. It&apos;s ideal for retail stores, restaurants, wholesale distributors, and any business that needs integrated accounting, sales, purchasing, and POS capabilities.",
  },
  {
    question: "Can I use only specific modules or do I need all of them?",
    answer:
      "Babaerp is fully modular. You can start with just the modules you need and add more as your business grows. Each module is priced separately, so you only pay for what you use.",
  },
  {
    question: "How does the restaurant module integrate with POS?",
    answer:
      "The restaurant and POS modules are deeply integrated. Table orders flow directly to the kitchen display, payments are processed through POS, and all transactions are automatically recorded in accounting. Staff can manage tables, split bills, and handle multiple payment methods seamlessly.",
  },
  {
    question: "Is my data secure and can I access it from anywhere?",
    answer:
      "Yes, Babaerp is cloud-based with enterprise-grade security including encryption at rest and in transit, regular backups, and SOC 2 compliance. You can access your data from any device with an internet connection, and the POS module even works offline.",
  },
  {
    question: "What kind of reports and analytics are available?",
    answer:
      "The Reports & Analytics module provides comprehensive insights including profit and loss statements, balance sheets, sales trends, inventory valuation, customer analytics, and custom reports. You can schedule automated reports and export data in multiple formats.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most businesses are up and running within 1-2 weeks. Our implementation team helps with data migration, initial configuration, and staff training. We also offer ongoing support to ensure your success.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Frequently asked<br />questions
            </h2>
            <p className="mt-4 text-muted-foreground">
              {"Can't find what you're looking for? Contact our support team."}
            </p>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-border">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-sm pr-4">{faq.question}</span>
                  <Plus
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-45" : ""}`}
                  />
                </button>
                {openIndex === index && <div className="pb-5 text-sm text-muted-foreground leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
