import HomePage from "@/components/HomePage";
import { BRAND_NAME, PHONE, SITE_URL } from "@/lib/site";
import { services } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Frostify Service Center | AC, Washing Machine & Refrigerator Repair in Mumbai",

  description:
    "Frostify Service Center provides professional AC repair, washing machine repair and refrigerator repair services in Mumbai, Navi Mumbai and Thane. Same-day doorstep service, WhatsApp booking and expert technicians.",

  keywords: [
    "Appliance Repair Mumbai",
    "AC Repair Mumbai",
    "Washing Machine Repair Mumbai",
    "Refrigerator Repair Mumbai",
    "Fridge Repair Mumbai",
    "AC Service Mumbai",
    "AC Gas Charging Mumbai",
    "Washing Machine Service Mumbai",
    "Refrigerator Service Mumbai",
    "Appliance Service Center Mumbai",
    "Doorstep Repair Service Mumbai",
    "Home Appliance Repair Mumbai",
    "Frostify Service Center"
  ],

  alternates: {
    canonical: "https://frostifyservicecenter.com",
  },

  openGraph: {
    title:
      "Frostify Service Center | Appliance Repair Services in Mumbai",

    description:
      "Book AC, Washing Machine and Refrigerator repair services with same-day doorstep support in Mumbai, Navi Mumbai and Thane.",

    url: "https://frostifyservicecenter.com",

    siteName: "Frostify Service Center",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Frostify Service Center | AC, Washing Machine & Refrigerator Repair",

    description:
      "Professional appliance repair service for AC, washing machine and refrigerator in Mumbai.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Home Appliance Repair",
};

export default function Page() {
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: BRAND_NAME,
      url: SITE_URL,
      telephone: PHONE,
      priceRange: "₹₹",
      areaServed: [
        "Mumbai",
        "Navi Mumbai",
        "Thane",
        "Mira Road"
      ],

      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN"
      },

      // ADD HERE 👇
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AC Repair Service"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Washing Machine Repair Service"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Refrigerator Repair Service"
          }
        }
      ]
    },

    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${BRAND_NAME} Appliance Repair Home Page`,
      about: {
        "@id": `${SITE_URL}/#business`
      }
    }
  ]
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomePage />
    </>
  );
}
