import type { Metadata } from "next";
// import "./globals.css";
import "./frostify-cleaned-global.css"
import { BRAND_NAME, SITE_URL } from "@/lib/site";



export const metadata: Metadata = {
  
  icons: {
    icon: [
      {
        url: "images/f_fevicon_icon/favicon.ico",
      },
      {
        url: "images/f_favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "images/f_favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "images/f_favicon_io/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },

  manifest: "images/f_favicon_io/site.webmanifest",



  metadataBase: new URL(SITE_URL),
  themeColor: "#ff6a00",
  title: `${BRAND_NAME} | AC, Washing Machine & Refrigerator Repair in Mumbai`,
  description:
    "Frostify Service Center provides AC repair, washing machine repair and refrigerator repair services in Mumbai, Navi Mumbai and Thane with doorstep support and WhatsApp booking.",
  keywords: [
    "AC Repair Mumbai",
    "Washing Machine Repair Mumbai",
    "Refrigerator Repair Mumbai",
    "Appliance Repair Mumbai",
    "Fridge Repair Mumbai",
    "AC Gas Charging Mumbai",
    "Washing Machine Service Mumbai"
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${BRAND_NAME} | Appliance Repair Service in Mumbai`,
    description:
      "Book AC, washing machine and refrigerator repair service with doorstep support and WhatsApp enquiry.",
    url: SITE_URL,
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | Appliance Repair Service in Mumbai`,
    description: "AC, washing machine and refrigerator repair service in Mumbai."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
