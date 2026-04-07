import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://pciavss.com",
  ),
  title: {
    default: "PCI AVSS | Audio-Video Security Solutions",
    template: "%s | PCI AVSS",
  },
  description:
    "Trusted since 2003 for security cameras, alarms, access control, and mobile monitoring solutions across Southern California.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "PCI AVSS | Audio-Video Security Solutions",
    description:
      "Security cameras, alarm systems, video monitoring, access control, and mobile surveillance trailers.",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased overflow-x-hidden">
        <SiteHeader />
        <script
          type="application/ld+json"
          // JSON-LD for SEO (LocalBusiness / SecuritySystemSupplier style)
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PCI AVSS",
              url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pciavss.com",
              telephone: "+1-800-299-5964",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1034 N. Tustin Ave",
                addressLocality: "Anaheim",
                addressRegion: "CA",
                postalCode: "92807",
                addressCountry: "US",
              },
              areaServed: "Southern California",
              sameAs: [],
            }),
          }}
        />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
