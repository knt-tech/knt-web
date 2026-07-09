import { company, siteUrl } from "@/lib/company";
import type { Locale } from "@/app/[lang]/dictionaries";

// Emits Organization + LocalBusiness structured data so search engines can
// build a rich knowledge panel (name, logo, contact, address, area served).
export default function JsonLd({ lang }: { lang: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": `${siteUrl}/#organization`,
    name: company.legalName,
    legalName: company.legalName,
    url: `${siteUrl}/${lang}`,
    logo: `${siteUrl}/logo/icon.png`,
    image: `${siteUrl}/logo/full-logo.png`,
    email: company.email,
    telephone: company.phoneRaw,
    description:
      "Enterprise software partner specializing in custom ERP, warehouse management (WMS), HR management (HRMS), system integration and business process automation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.postalAddress.streetAddress,
      addressLocality: company.postalAddress.addressLocality,
      addressRegion: company.postalAddress.addressRegion,
      postalCode: company.postalAddress.postalCode,
      addressCountry: company.postalAddress.addressCountry,
    },
    areaServed: [
      { "@type": "Country", name: "Thailand" },
      { "@type": "Place", name: "Southeast Asia" },
    ],
    knowsAbout: [
      "Enterprise Software Development",
      "ERP Systems",
      "Warehouse Management Systems",
      "HR Management Systems",
      "Manufacturing Systems",
      "Business Process Automation",
      "System Integration",
      "Digital Transformation",
    ],
    sameAs: [company.github],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: company.email,
      telephone: company.phoneRaw,
      availableLanguage: ["Thai", "English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      // Structured data is static and trusted (built from our own constants).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
