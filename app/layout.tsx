
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: site.title,
    template: "%s | ALEN GO"
  },
  description: site.description,
  applicationName: "ALEN GO",
  manifest: "/manifest.webmanifest",
  keywords: [
    "ALEN GO",
    "transporte Ecuador",
    "transporte puerta a puerta",
    "encomiendas Ecuador",
    "traslados aeropuerto",
    "Santo Domingo Quito"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.domain,
    siteName: "ALEN GO",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "/assets/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "ALEN GO - Transporte puerta a puerta en Ecuador"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/assets/social-preview.jpg"]
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F1E3C"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-EC">
      <html lang="es-EC">

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-FSPZN915CB"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FSPZN915CB');
    `}
  </Script>

  <body className={`${inter.variable} min-h-screen antialiased`}>
    <Navbar />
    {children}
    <Footer />
  </body>

</html>
      <body className={`${inter.variable} min-h-screen antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
