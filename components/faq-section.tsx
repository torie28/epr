"use client"

import { useState } from "react"
import { Plus, Languages, Loader2 } from "lucide-react"

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

// Translation cache to avoid repeated API calls
const translationCache = new Map<string, string>()

// Function to translate text using MyMemory API (free, no API key required)
async function translateText(text: string, targetLang: string = 'sw'): Promise<string> {
  const cacheKey = `${text}-${targetLang}`

  // Check cache first
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!
  }

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
    )

    if (!response.ok) {
      throw new Error('Translation API failed')
    }

    const data = await response.json()
    const translatedText = data.responseData.translatedText

    // Cache the result
    translationCache.set(cacheKey, translatedText)

    return translatedText
  } catch (error) {
    console.error('Translation error:', error)
    return text // Return original text if translation fails
  }
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [translatedQuestions, setTranslatedQuestions] = useState<Set<number>>(new Set())
  const [translations, setTranslations] = useState<{ [key: string]: string }>({})
  const [loadingTranslations, setLoadingTranslations] = useState<Set<number>>(new Set())

  const toggleTranslation = async (index: number) => {
    const faq = faqs[index]
    const questionKey = `q-${index}`
    const answerKey = `a-${index}`

    if (translatedQuestions.has(index)) {
      // Toggle back to English - just remove from translated set
      setTranslatedQuestions(prev => {
        const newSet = new Set(prev)
        newSet.delete(index)
        return newSet
      })
    } else {
      // Translate to Swahili
      setLoadingTranslations(prev => new Set(prev).add(index))

      try {
        // Translate both question and answer in parallel
        const [translatedQuestion, translatedAnswer] = await Promise.all([
          translateText(faq.question),
          translateText(faq.answer)
        ])

        // Store translations
        setTranslations(prev => ({
          ...prev,
          [questionKey]: translatedQuestion,
          [answerKey]: translatedAnswer
        }))

        // Mark as translated
        setTranslatedQuestions(prev => {
          const newSet = new Set(prev)
          newSet.add(index)
          return newSet
        })
      } catch (error) {
        console.error('Translation failed:', error)
      } finally {
        setLoadingTranslations(prev => {
          const newSet = new Set(prev)
          newSet.delete(index)
          return newSet
        })
      }
    }
  }

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
            {faqs.map((faq, index) => {
              const questionKey = `q-${index}`
              const answerKey = `a-${index}`
              const isLoading = loadingTranslations.has(index)
              const isTranslated = translatedQuestions.has(index)

              return (
                <div key={index} className="border-t border-border">
                  <div className="py-5">
                    <div className="flex items-start justify-between">
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="flex-1 text-left pr-4"
                      >
                        <span className="text-sm">
                          {isTranslated && translations[questionKey]
                            ? translations[questionKey]
                            : faq.question
                          }
                        </span>
                      </button>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => toggleTranslation(index)}
                          disabled={isLoading}
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          title={isTranslated ? "Show in English" : "Translate to Swahili"}
                        >
                          {isLoading ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <Languages className="w-3 h-3" />
                          )}
                          {isLoading ? "Translating..." : (isTranslated ? "English" : "Translate")}
                        </button>
                        <Plus
                          className={`w-4 h-4 transition-transform cursor-pointer ${openIndex === index ? "rotate-45" : ""}`}
                          onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                      </div>
                    </div>
                  </div>
                  {openIndex === index && (
                    <div className="pb-5 text-sm text-muted-foreground leading-relaxed">
                      {isTranslated && translations[answerKey]
                        ? translations[answerKey]
                        : faq.answer
                      }
                    </div>
                  )}
                </div>
              )
            })}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
