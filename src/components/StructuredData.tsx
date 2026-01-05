import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: "home" | "service" | "city" | "about" | "contact" | "calculator" | "legal";
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  faqs?: FAQItem[];
  serviceName?: string;
  cityName?: string;
}

const baseBusinessInfo = {
  "@type": "LocalBusiness",
  "@id": "https://befiller.pk/#business",
  name: "Befiller - Tax & Accounting Services",
  alternateName: "Befiller Pakistan",
  description: "Pakistan's #1 tax filing and accounting service for overseas Pakistanis. Expert tax consultation, NTN registration, and business registration services.",
  url: "https://befiller.pk",
  telephone: "+92-300-1234567",
  email: "info@befiller.pk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 123, Business Center",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    postalCode: "75500",
    addressCountry: "PK"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "24.8607",
    longitude: "67.0011"
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59"
  },
  priceRange: "$$",
  paymentAccepted: "Cash, Bank Transfer, Online Payment",
  currenciesAccepted: "PKR, USD, GBP, EUR, AED",
  areaServed: [
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" }
  ],
  founder: [
    { "@type": "Person", name: "Hamza", jobTitle: "Tax Consultant" },
    { "@type": "Person", name: "Abdul Hadi", jobTitle: "Accountant" }
  ],
  sameAs: [
    "https://www.facebook.com/befiller",
    "https://www.linkedin.com/company/befiller",
    "https://twitter.com/befiller"
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://befiller.pk/#organization",
  name: "Befiller",
  legalName: "Befiller Tax & Accounting Services",
  url: "https://befiller.pk",
  logo: "https://befiller.pk/logo.png",
  foundingDate: "2020",
  founders: [
    { "@type": "Person", name: "Hamza" },
    { "@type": "Person", name: "Abdul Hadi" }
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-300-1234567",
    contactType: "customer service",
    availableLanguage: ["English", "Urdu"],
    areaServed: "Worldwide"
  },
  ...baseBusinessInfo
};

export const StructuredData = ({ 
  type, 
  pageTitle, 
  pageDescription, 
  pageUrl,
  faqs,
  serviceName,
  cityName 
}: StructuredDataProps) => {
  const schemas: object[] = [];

  // Local Business Schema (on all pages)
  schemas.push({
    "@context": "https://schema.org",
    ...baseBusinessInfo
  });

  // Organization Schema
  schemas.push(organizationSchema);

  // Breadcrumb Schema
  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://befiller.pk" }
  ];

  if (type === "service" && serviceName) {
    breadcrumbItems.push({ 
      "@type": "ListItem", 
      position: 2, 
      name: serviceName, 
      item: `https://befiller.pk/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}` 
    });
  }

  if (type === "city" && cityName) {
    breadcrumbItems.push({ 
      "@type": "ListItem", 
      position: 2, 
      name: `Tax Services in ${cityName}`, 
      item: `https://befiller.pk/cities/${cityName.toLowerCase()}` 
    });
  }

  if (type === "about") {
    breadcrumbItems.push({ "@type": "ListItem", position: 2, name: "About Us", item: "https://befiller.pk/about" });
  }

  if (type === "contact") {
    breadcrumbItems.push({ "@type": "ListItem", position: 2, name: "Contact", item: "https://befiller.pk/contact" });
  }

  if (type === "calculator") {
    breadcrumbItems.push({ "@type": "ListItem", position: 2, name: "Tax Calculator", item: "https://befiller.pk/tax-calculator" });
  }

  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems
  });

  // WebPage Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl || "https://befiller.pk",
    name: pageTitle || "Befiller - Tax & Accounting Services",
    description: pageDescription || "Expert tax filing and accounting services for overseas Pakistanis",
    url: pageUrl || "https://befiller.pk",
    isPartOf: { "@id": "https://befiller.pk/#website" },
    about: { "@id": "https://befiller.pk/#business" },
    publisher: { "@id": "https://befiller.pk/#organization" }
  });

  // Website Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://befiller.pk/#website",
    url: "https://befiller.pk",
    name: "Befiller",
    description: "Pakistan's #1 tax filing service for overseas Pakistanis",
    publisher: { "@id": "https://befiller.pk/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://befiller.pk/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  });

  // FAQ Schema
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    });
  }

  // Service Schema
  if (type === "service" && serviceName) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      provider: { "@id": "https://befiller.pk/#business" },
      areaServed: { "@type": "Country", name: "Pakistan" },
      description: pageDescription,
      serviceType: "Tax & Accounting Services"
    });
  }

  // Professional Service Schema for calculator
  if (type === "calculator") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Befiller Tax Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "PKR"
      },
      description: "Free Pakistani income tax calculator for salaried and non-salaried individuals based on 2024-25 tax slabs."
    });
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
