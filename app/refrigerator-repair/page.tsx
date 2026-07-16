import RefrigeratorRepairPage from "@/components/RefrigeratorRepairPage";
import { BRAND_NAME, PHONE, SITE_URL } from "@/lib/site";
import './gloablFri.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Refrigerator Repair Service in Mumbai | Fridge Cooling, Gas Charging & Compressor Repair | Frostify Service Center",

  description:
    "Expert refrigerator repair service in Mumbai. Same-day fridge repair for cooling problems, gas charging, compressor repair, water leakage, PCB faults and maintenance for all major brands.",

  keywords: [
    "Refrigerator Repair Mumbai",
    "Fridge Repair Mumbai",
    "Fridge Service Mumbai",
    "Refrigerator Service Mumbai",
    "Fridge Not Cooling Repair",
    "Refrigerator Cooling Problem",
    "Refrigerator Gas Charging Mumbai",
    "Fridge Gas Refill Mumbai",
    "Refrigerator Compressor Repair",
    "Fridge Compressor Repair Mumbai",
    "Refrigerator PCB Repair",
    "Fridge Water Leakage Repair",
    "Deep Freezer Repair Mumbai",
    "Samsung Fridge Repair",
    "LG Refrigerator Repair",
    "Whirlpool Fridge Repair",
    "Haier Refrigerator Repair",
    "Frostify Service Center"
  ],

  alternates: {
    canonical:
      "https://frostifyservicecenter.com/refrigerator-repair",
  },

  openGraph: {
    title:
      "Refrigerator Repair Service in Mumbai | Frostify Service Center",

    description:
      "Professional refrigerator repair service including cooling issue repair, gas charging, compressor repair, PCB repair and maintenance across Mumbai.",

    url:
      "https://frostifyservicecenter.com/refrigerator-repair",

    siteName: "Frostify Service Center",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Refrigerator Repair Service in Mumbai",

    description:
      "Expert fridge repair service for cooling problems, gas charging, compressor repair and maintenance.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/refrigerator-repair/#webpage`,
        url: `${SITE_URL}/refrigerator-repair`,
        name: "Refrigerator Repair Service Mumbai",
        about: {
          "@id": `${SITE_URL}/#business`
        },
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Refrigerator Repair Service"
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <RefrigeratorRepairPage />
    </>
  );
}