import { ThemeProvider } from "next-themes";
import { Metadata, Viewport } from 'next';
import Script from 'next/script';
import "./globals.css";

// 1. VIEWPORT EXPORT
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

// 2. SEO METADATA
export const metadata: Metadata = {
  title: {
    default: "VIWEB SYNC | Mission-Critical LabVIEW & Aerospace Integration",
    template: "%s | VIWEB SYNC"
  },
  description: "High-reliability engineering for NI PXI, FPGA, and automated test systems.",
  keywords: ["LabVIEW Integration", "Aerospace Engineering Coimbatore", "NI PXI Systems"],
  authors: [{ name: "VIWEB SYNC" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viwebsync.com/",
    siteName: "VIWEB SYNC",
    images: [{ url: "/AboutViweb1.png", width: 1200, height: 630, alt: "VIWEB SYNC" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "VIWEB SYNC",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "TN",
      "postalCode": "641001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.0168,
      "longitude": 76.9558
    },
    "url": "https://viwebsync.com",
    "image": "https://viwebsync.com/AboutViweb1.png",
    "priceRange": "$$$",
    "description": "Expert NI LabVIEW and Aerospace Hardware Synchronization."
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Removed ConfigProvider because the file/folder was deleted */}
        <ThemeProvider attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}