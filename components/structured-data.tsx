export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Babaerp",
    "description": "Complete ERP Solution for Your Business",
    "url": "https://babaerp.com",
    "logo": "https://babaerp.com/images/BabaERP.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-8900",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/babaerp",
      "https://facebook.com/babaerp",
      "https://linkedin.com/company/babaerp"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Complete ERP solution with accounting, sales, purchases, restaurant management, POS, and analytics modules",
      "priceCurrency": "USD",
      "price": "99",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
