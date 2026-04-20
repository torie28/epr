import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import StructuredData from "@/components/structured-data"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { ClientAnimationWrapper } from "@/components/client-animation-wrapper"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Babaerp - Complete ERP Solution for Your Business",
    template: "%s | Babaerp"
  },
  description: "Streamline your business operations with Babaerp. Comprehensive modules for accounting, sales, purchases, restaurant management, POS, and analytics.",
  keywords: ["ERP", "Business Management", "Accounting Software", "POS System", "Restaurant Management", "Sales Management", "Inventory Management", "Analytics", "Babaerp"],
  authors: [{ name: "Babaerp Team" }],
  creator: "Babaerp",
  publisher: "Babaerp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://babaerp.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://babaerp.com",
    title: "Babaerp - Complete ERP Solution for Your Business",
    description: "Streamline your business operations with Babaerp. Comprehensive modules for accounting, sales, purchases, restaurant management, POS, and analytics.",
    siteName: "Babaerp",
    images: [
      {
        url: "/images/BabaERP.png",
        width: 1200,
        height: 630,
        alt: "Babaerp - Complete ERP Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babaerp - Complete ERP Solution for Your Business",
    description: "Streamline your business operations with Babaerp. Comprehensive modules for accounting, sales, purchases, restaurant management, POS, and analytics.",
    images: ["/images/BabaERP.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="hsl(var(--background))" />
        <StructuredData />
      </head>
      <body className={`font-sans antialiased`}>
        <ClientAnimationWrapper>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ClientAnimationWrapper>
        <Analytics />
      </body>
    </html>
  )
}
