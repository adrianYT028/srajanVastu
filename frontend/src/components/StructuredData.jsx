import React, { useEffect } from 'react';

const StructuredData = ({ type = 'home', customData = {} }) => {
  // LocalBusiness Schema for all pages
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Srajan Vastu",
    "image": "https://www.srajanvastu.com/logo.png",
    "description": "Professional Vastu Shastra consultation, Numerology, and Astrology services by certified expert Seema Sharma. Transform your space into a hub of positivity and prosperity.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "url": "https://www.srajanvastu.com",
    "telephone": "+91-9650786531",
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/srajanvastu",
      "https://www.instagram.com/srajanvastu",
      "https://www.youtube.com/@srajanvastu"
    ],
    "founder": {
      "@type": "Person",
      "name": "Seema Sharma",
      "jobTitle": "Certified Vastu Consultant, Numerologist and Astrologer",
      "description": "Renowned Vastu professional and researcher with many years of experience in Vastu Shastra, Numerology, and Astrology"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vastu and Spiritual Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Vastu Consultation",
            "description": "Complete Vastu analysis and remedies for homes and apartments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Vastu Consultation",
            "description": "Vastu solutions for offices, shops, and business premises"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Numerology Consultation",
            "description": "Personal numerology analysis, name correction, and mobile number consultation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Astrology Consultation",
            "description": "Horoscope analysis, career guidance, and marriage compatibility"
          }
        }
      ]
    }
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Srajan Vastu",
    "url": "https://www.srajanvastu.com",
    "logo": "https://www.srajanvastu.com/logo.png",
    "description": "Expert Vastu Shastra consultation, Numerology, and Astrology services",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Seema Sharma"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9650786531",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Srajan Vastu",
    "url": "https://www.srajanvastu.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.srajanvastu.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = customData.breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": customData.breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  // Service Schema for service pages
  const serviceSchema = type === 'service' && customData.service ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": customData.service.name,
    "provider": {
      "@type": "ProfessionalService",
      "name": "Srajan Vastu"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": customData.service.description,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": customData.service.price || "Contact for pricing",
      "priceCurrency": "INR"
    }
  } : null;

  // Product Schema for products
  const productSchema = type === 'product' && customData.product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": customData.product.name,
    "image": customData.product.image,
    "description": customData.product.description,
    "brand": {
      "@type": "Brand",
      "name": "Srajan Vastu"
    },
    "offers": {
      "@type": "Offer",
      "url": customData.product.url,
      "priceCurrency": "INR",
      "price": customData.product.price,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Srajan Vastu"
      }
    }
  } : null;

  // FAQ Schema
  const faqSchema = customData.faqs && customData.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": customData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const schemas = [
    localBusinessSchema,
    organizationSchema,
    websiteSchema,
    breadcrumbSchema,
    serviceSchema,
    productSchema,
    faqSchema
  ].filter(Boolean);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default StructuredData;
