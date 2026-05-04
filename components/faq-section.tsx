"use client"

import { useState } from "react"
import { Plus, Languages } from "lucide-react"

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

const swahiliTranslations: { [key: string]: string } = {
  "What is Babaerp and who is it for?": "Babaerp ni nini na ni kwa nani?",
  "Can I use only specific modules or do I need all of them?": "Je, ninaweza kutumia moduli maalum tu au nihitaji zote?",
  "How does the restaurant module integrate with POS?": "Moduli ya mgahawa inavyounganishwa na POS vipi?",
  "Is my data secure and can I access it from anywhere?": "Je, data yangu ni salama na ninaweza kuiifikia popote?",
  "What kind of reports and analytics are available?": "Aina gani za ripoti na uchambuzi zinapatikana?",
  "How long does implementation take?": "Utekelezaji huchukua muda gani?",
  "Babaerp is a comprehensive ERP solution designed for small to medium businesses. It&apos;s ideal for retail stores, restaurants, wholesale distributors, and any business that needs integrated accounting, sales, purchasing, and POS capabilities.": "Babaerp ni suluhishu kamili la ERP linaloundwa kwa biashara ndogo hadi za kati. Ni bora kwa maduka ya rejareja, migahawa, wasambazaji wa jumla, na biashara yoyote inayohitaji uwezo wa kujumlisha wa uhasibu, mauzo, ununuzi, na POS.",
  "Babaerp is fully modular. You can start with just the modules you need and add more as your business grows. Each module is priced separately, so you only pay for what you use.": "Babaerp ni ya moduli kamili. Unaweza kuanza na moduli unazohitaji tu na kuongeza zaidi kadiri biashara yako inavyokua. Kila moduli inauzwa kwa bei tofauti, kwa hivyo unalipa kwa unachotumia tu.",
  "The restaurant and POS modules are deeply integrated. Table orders flow directly to the kitchen display, payments are processed through POS, and all transactions are automatically recorded in accounting. Staff can manage tables, split bills, and handle multiple payment methods seamlessly.": "Moduli za mgahawa na POS zinaunganishwa kwa kina. Maagizo ya meza huingia moja kwa moja kwenye onyesho la jikoni, malipo hushughulikiwa kupitia POS, na shughuli zote hurekodiwa otomatiki katika uhasibu. Wafanyakazi wanaweza kudhibiti meza, kugawanya bili, na kushughulikia njia nyingi za malipo bila tatizo.",
  "Yes, Babaerp is cloud-based with enterprise-grade security including encryption at rest and in transit, regular backups, and SOC 2 compliance. You can access your data from any device with an internet connection, and the POS module even works offline.": "Ndio, Babaerp inatokana na wingu na usalama wa kiwango cha biashara ikiwa ni pamoja na usimbaji fiche wakati wa kupumzika na wakati wa usafiri, nakala za mara kwa mara, na ulya wa SOC 2. Unaweza kufikia data yako kutoka kifaa chochote cha mtandao, na moduli ya POS hufanya kazi hata nje ya mtandao.",
  "The Reports & Analytics module provides comprehensive insights including profit and loss statements, balance sheets, sales trends, inventory valuation, customer analytics, and custom reports. You can schedule automated reports and export data in multiple formats.": "Moduli ya Ripoti na Uchambuzi hutoa ufahamu kamili ikiwa ni pamoja na taarifa ya faida na hasara, miraba ya usawa, mwelekeo wa mauzo, thamani ya hesabu, uchambuzi wa wateja, na ripoti maalum. Unaweza kupanga ripoti otomatiki na kutoa data katika muundo mbalimbali.",
  "Most businesses are up and running within 1-2 weeks. Our implementation team helps with data migration, initial configuration, and staff training. We also offer ongoing support to ensure your success.": "Biashara nyingi huanza kufanya kazi ndani ya wiki 1-2. Timu yetu ya utekelezaji inasaidia uhamisho wa data, usanidi wa awali, na mafunzo ya wafanyakazi. Tunatoa pia msaada endelevu kuhakikisha mafanikio yako.",
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [translatedQuestions, setTranslatedQuestions] = useState<Set<number>>(new Set())

  const toggleTranslation = (index: number) => {
    setTranslatedQuestions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
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
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-border">
                <div className="py-5">
                  <div className="flex items-start justify-between">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="flex-1 text-left pr-4"
                    >
                      <span className="text-sm">
                        {translatedQuestions.has(index)
                          ? swahiliTranslations[faq.question] || faq.question
                          : faq.question
                        }
                      </span>
                    </button>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => toggleTranslation(index)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        title={translatedQuestions.has(index) ? "Show in English" : "Translate to Swahili"}
                      >
                        <Languages className="w-3 h-3" />
                        {translatedQuestions.has(index) ? "English" : "Translate"}
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
                    {translatedQuestions.has(index)
                      ? swahiliTranslations[faq.answer] || faq.answer
                      : faq.answer
                    }
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
