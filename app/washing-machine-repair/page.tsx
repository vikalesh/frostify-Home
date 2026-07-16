
import WashingMachineRepairPage from "@/components/WashingMachineRepairPage";
import type { Metadata } from "next";
import { BRAND_NAME, PHONE, SITE_URL } from "@/lib/site";
// import './globalWm.css'

export const metadata: Metadata = {
  title:
    "Washing Machine Repair Service in Mumbai | Frostify Service Center",

  description:
    "Expert washing machine repair service in Mumbai. Front load, top load, fully automatic washing machine repair, spin issue, water leakage, drainage problem, PCB repair and installation service.",

  keywords: [
    "Washing Machine Repair Mumbai",
    "Washing Machine Service Mumbai",
    "Front Load Washing Machine Repair",
    "Top Load Washing Machine Repair",
    "Fully Automatic Washing Machine Repair",
    "Washing Machine Water Leakage Repair",
    "Washing Machine PCB Repair",
    "Washing Machine Installation Mumbai",
    "Washing Machine Maintenance Mumbai",
    "Frostify Service Center"
  ],

  alternates: {
    canonical:
      "https://frostifyservicecenter.com/washing-machine-repair",
  },

  openGraph: {
    title:
      "Washing Machine Repair Service in Mumbai | Frostify Service Center",

    description:
      "Professional washing machine repair service in Mumbai with doorstep support. Repair for front load, top load, drainage, spin and leakage issues.",

    url:
      "https://frostifyservicecenter.com/washing-machine-repair",

    siteName: "Frostify Service Center",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Washing Machine Repair Service in Mumbai",

    description:
      "Front load, top load and fully automatic washing machine repair service in Mumbai.",
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
                "@id": `${SITE_URL}/washing-machine-repair/#webpage`,
                url: `${SITE_URL}/washing-machine-repair`,
                name: "Washing Machine Repair Service Mumbai",
                about: {
                    "@id": `${SITE_URL}/#business`
                },
                makesOffer: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Washing Machine Repair Service"
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

      <WashingMachineRepairPage />
    </>
  );
}