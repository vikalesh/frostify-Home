import AcRepairPage from "@/components/AcRepairPage";
import { BRAND_NAME, PHONE, SITE_URL } from "@/lib/site";
// import './globalAc.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AC Repair Service in Mumbai | AC Installation, Gas Charging & Maintenance | Frostify Service Center",

  description:
    "Expert AC repair service in Mumbai. Same-day AC servicing, gas charging, AC installation, water leakage repair, compressor repair, PCB repair and maintenance for all major AC brands.",

  keywords: [
    "AC Repair Mumbai",
    "AC Service Mumbai",
    "AC Installation Mumbai",
    "AC Gas Charging Mumbai",
    "AC Maintenance Mumbai",
    "Split AC Repair Mumbai",
    "Window AC Repair Mumbai",
    "AC Not Cooling Repair",
    "AC Water Leakage Repair",
    "AC Compressor Repair",
    "AC PCB Repair",
    "Daikin AC Repair",
    "Voltas AC Repair",
    "LG AC Repair",
    "Samsung AC Repair",
    "Frostify Service Center"
  ],

  alternates: {
    canonical:
      "https://frostifyservicecenter.com/ac-repair",
  },

  openGraph: {
    title:
      "AC Repair Service in Mumbai | Frostify Service Center",

    description:
      "Professional AC repair service with gas charging, installation, cooling issue repair and annual maintenance across Mumbai.",

    url:
      "https://frostifyservicecenter.com/ac-repair",

    siteName: "Frostify Service Center",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AC Repair Service in Mumbai",

    description:
      "Same-day AC repair, gas charging, installation and maintenance service in Mumbai.",
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
        "@id": `${SITE_URL}/ac-repair/#webpage`,
        url: `${SITE_URL}/ac-repair`,
        name: "AC Repair Service Mumbai",
        about: {
          "@id": `${SITE_URL}/#business`
        },

        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AC Repair Service"
            }
          }
        ]

              },
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

      <AcRepairPage />
    </>
  );
}