import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Portraits by Khate | Newborn, Maternity & Family Photography Melbourne",
  description:
    "Newborn, maternity, family, couple and wedding photographer in Melbourne. Timeless, heartfelt photography capturing life's most precious moments with elegance and authenticity.",
  keywords: [
    "newborn photographer Melbourne",
    "maternity photographer Melbourne",
    "family photographer Melbourne",
    "wedding photographer Melbourne",
    "couple photographer Melbourne",
    "portrait photographer Melbourne",
    "newborn photography",
    "maternity photography",
    "family portraits",
  ].join(", "),
  openGraph: {
    title: "Portraits by Khate | Melbourne Photography Studio",
    description: "Newborn, maternity, family, and wedding photography in Melbourne",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://portraitsbykhate.com",
    name: "Portraits by Khate",
    image: "https://portraitsbykhate.com/og-image.jpg",
    description: "Newborn, maternity, family, couple and wedding photographer in Melbourne",
    url: "https://portraitsbykhate.com",
    telephone: "+61-XXXXXXXXX",
    email: "studio@portraitsbykhate.com",
    areaServed: {
      "@type": "City",
      name: "Melbourne",
      "@id": "https://en.wikipedia.org/wiki/Melbourne",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    sameAs: [
      "https://www.instagram.com/portraitsbykhate",
      "https://www.facebook.com/portraitsbykhate",
    ],
    priceRange: "$$",
    serviceType: [
      "Newborn Photography",
      "Maternity Photography",
      "Family Photography",
      "Wedding Photography",
      "Couple Photography",
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
