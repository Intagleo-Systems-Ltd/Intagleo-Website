import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";
import CookieConsent from "@/components/CookieConsent";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MouseGlow />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
