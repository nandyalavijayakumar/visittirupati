import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Explore Tirupati - Temples, Waterfalls & Travel Guide",
    template: "%s | Explore Tirupati",
  },
  description: "Discover the best places to visit in Tirupati - temples, waterfalls, nature spots, and travel guides. Your complete travel companion for Tirupati tourism.",
  keywords: ["Tirupati tourism", "Tirupati temples", "Tirumala temple", "Tirupati places to visit", "Talakona waterfall", "Tirupati travel guide", "Andhra Pradesh tourism"],
  authors: [{ name: "Explore Tirupati" }],
  creator: "Explore Tirupati",
  publisher: "Explore Tirupati",
  metadataBase: new URL("https://visittirupati.online"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visittirupati.online",
    siteName: "Explore Tirupati",
    title: "Explore Tirupati - Temples, Waterfalls & Travel Guide",
    description: "Discover the best places to visit in Tirupati - temples, waterfalls, nature spots, and travel guides.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Explore Tirupati - Tourism Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Tirupati - Temples, Waterfalls & Travel Guide",
    description: "Discover the best places to visit in Tirupati - temples, waterfalls, nature spots, and travel guides.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      en: "https://visittirupati.online",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-adsense-account" content="ca-pub-2008367184647190" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristInformationCenter",
              name: "Explore Tirupati",
              description: "Your ultimate guide to discovering Tirupati's temples, waterfalls, and natural beauty",
              url: "https://visittirupati.online",
              areaServed: {
                "@type": "City",
                name: "Tirupati",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tirupati",
                addressRegion: "Andhra Pradesh",
                addressCountry: "IN",
              },
              sameAs: [],
              potentialAction: {
                "@type": "SearchAction",
                target: "https://visittirupati.online/places?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2008367184647190"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFF8E1]">
        {children}
        <Footer />
      </body>
    </html>
  );
}