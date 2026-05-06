import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";
import CookieConsent from "@/components/CookieConsent";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Intagleo: Production-Ready Software That Scales",
  description: "We design, build, and scale software products for ambitious startups and enterprises. Custom software development, AI/ML, cloud architecture, and more.",
  metadataBase: new URL("https://intagleo.com"),
  openGraph: {
    siteName: "Intagleo",
    type: "website",
    locale: "en_GB",
  },
  icons: {
    icon: "/logo-static.png",
    shortcut: "/logo-static.png",
    apple: "/logo-static.png",
  },
  alternates: {
    canonical: "https://intagleo.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://intagleo.com/#organization",
      name: "Intagleo",
      url: "https://intagleo.com",
      logo: {
        "@type": "ImageObject",
        url: "https://intagleo.com/logo-static.png",
      },
      description:
        "A 20+ year enterprise software engineering firm building production-ready systems for enterprise teams across 18 countries since 2003.",
      foundingDate: "2003",
      areaServed: "Worldwide",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer enquiries",
        url: "https://intagleo.com/contact",
      },
      sameAs: [
        "https://www.linkedin.com/company/intagleo",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://intagleo.com/#website",
      url: "https://intagleo.com",
      name: "Intagleo",
      publisher: { "@id": "https://intagleo.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://intagleo.com/blog?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <MouseGlow />
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
