import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { PreFooterCta } from "./components/PreFooterCta";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.avssoc.com",
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
      <head>
        <Script id="chunk-error-recovery" strategy="beforeInteractive">
          {`
            window.addEventListener('error', function(e) {
              if (e && e.message && (e.message.indexOf('Loading chunk') !== -1 || e.message.indexOf('ChunkLoadError') !== -1)) {
                window.location.reload();
              }
            });
            window.addEventListener('unhandledrejection', function(e) {
              if (e && e.reason && (e.reason.name === 'ChunkLoadError' || (e.reason.message && String(e.reason.message).indexOf('Loading chunk') !== -1))) {
                window.location.reload();
              }
            });
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18437293351"
          strategy="afterInteractive"
        />
        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());

            gtag('config', 'G-8NGYQPGMD7');
            gtag('config', 'AW-18437293351');
          `}
        </Script>
        {/* Lead Source Attribution Tracking (GCLID, UTMs, Landing & Referrer) */}
        <Script id="lead-source-tracker" strategy="afterInteractive">
          {`
            (function() {
              try {
                if (typeof window === 'undefined' || !window.sessionStorage) return;
                var search = window.location.search;
                if (search) {
                  var params = new URLSearchParams(search);
                  var gclid = params.get('gclid');
                  var utm_source = params.get('utm_source');
                  var utm_medium = params.get('utm_medium');
                  var utm_campaign = params.get('utm_campaign');

                  if (gclid) sessionStorage.setItem('avss_gclid', gclid);
                  if (utm_source) sessionStorage.setItem('avss_utm_source', utm_source);
                  if (utm_medium) sessionStorage.setItem('avss_utm_medium', utm_medium);
                  if (utm_campaign) sessionStorage.setItem('avss_utm_campaign', utm_campaign);
                }

                if (!sessionStorage.getItem('avss_landing_page')) {
                  sessionStorage.setItem('avss_landing_page', window.location.pathname + window.location.search);
                }
                if (!sessionStorage.getItem('avss_referring_page')) {
                  sessionStorage.setItem('avss_referring_page', document.referrer || 'Direct');
                }
              } catch (e) {}
            })();
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased overflow-x-hidden">
        <SiteHeader />
        <script
          type="application/ld+json"
          // JSON-LD for SEO (LocalBusiness / SecuritySystemSupplier style)
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AVSS",
              url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.avssoc.com",
              telephone: "+1-800-299-5964",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1090 North Tustin Ave",
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
        <PreFooterCta />
        <SiteFooter />
      </body>
    </html>
  );
}
