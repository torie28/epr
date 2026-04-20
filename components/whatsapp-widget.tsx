"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const modules = [
  { id: "accounting", name: "Accounting", description: "Financial management & bookkeeping" },
  { id: "sales", name: "Sales", description: "Sales pipeline & customer management" },
  { id: "purchases", name: "Purchases", description: "Procurement & vendor management" },
  { id: "restaurant", name: "Restaurant", description: "Table & kitchen management" },
  { id: "pos", name: "POS", description: "Point of sale & transactions" },
  { id: "reports", name: "Reports & Analytics", description: "Business intelligence & insights" },
]

// Customer service WhatsApp number (without + or spaces)
const WHATSAPP_NUMBER = "+255675303030"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedModules, setSelectedModules] = useState<string[]>([])
  const [customMessage, setCustomMessage] = useState("")
  const [step, setStep] = useState<"modules" | "message">("modules")

  const toggleModule = (moduleId: string) => {
    setSelectedModules((prev) =>
      prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]
    )
  }

  const generateWhatsAppMessage = () => {
    const selectedModuleNames = modules
      .filter((m) => selectedModules.includes(m.id))
      .map((m) => m.name)
      .join(", ")

    let message = "Hello Babaerp Support Team!\n\n"

    if (selectedModuleNames) {
      message += `I'm interested in the following modules: ${selectedModuleNames}\n\n`
    }

    if (customMessage.trim()) {
      message += `My message: ${customMessage.trim()}\n\n`
    }

    if (!selectedModuleNames && !customMessage.trim()) {
      message += "I would like to learn more about Babaerp ERP system.\n\n"
    }

    message += "Please get back to me at your earliest convenience. Thank you!"

    return encodeURIComponent(message)
  }

  const openWhatsApp = () => {
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleClose = () => {
    setIsOpen(false)
    setStep("modules")
    setSelectedModules([])
    setCustomMessage("")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[#25D366] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Babaerp Support</h3>
                  <p className="text-xs text-white/80">Typically replies within an hour</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {step === "modules" ? (
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm text-foreground">
                    Welcome to Babaerp! Select the modules you&apos;re interested in, or skip to chat directly with our support team.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Select interested modules:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {modules.map((module) => (
                      <button
                        key={module.id}
                        onClick={() => toggleModule(module.id)}
                        className={`flex items-center justify-between p-3 rounded-lg border transition-all text-left ${selectedModules.includes(module.id)
                          ? "border-[#25D366] bg-[#25D366]/10"
                          : "border-border hover:border-[#25D366]/50 hover:bg-muted/50"
                          }`}
                      >
                        <div>
                          <p className="font-medium text-sm text-foreground">{module.name}</p>
                          <p className="text-xs text-muted-foreground">{module.description}</p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedModules.includes(module.id)
                            ? "border-[#25D366] bg-[#25D366]"
                            : "border-muted-foreground/30"
                            }`}
                        >
                          {selectedModules.includes(module.id) && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => setStep("message")}
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
                >
                  {selectedModules.length > 0
                    ? `Continue with ${selectedModules.length} module${selectedModules.length > 1 ? "s" : ""}`
                    : "Skip to chat"}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-3">
                  {selectedModules.length > 0 ? (
                    <div>
                      <p className="text-sm text-foreground mb-2">Selected modules:</p>
                      <div className="flex flex-wrap gap-1">
                        {modules
                          .filter((m) => selectedModules.includes(m.id))
                          .map((m) => (
                            <span
                              key={m.id}
                              className="text-xs bg-[#25D366]/20 text-[#25D366] px-2 py-1 rounded-full"
                            >
                              {m.name}
                            </span>
                          ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-foreground">
                      Add a message for our support team (optional).
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Your message (optional):
                  </label>
                  <textarea
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Tell us about your business needs, ask questions, or request a demo..."
                    className="w-full p-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 text-sm"
                    rows={4}
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setStep("modules")}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={openWhatsApp}
                    className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Start Chat
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? "rotate-0" : ""
          }`}
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
      )}
    </div>
  )
}
