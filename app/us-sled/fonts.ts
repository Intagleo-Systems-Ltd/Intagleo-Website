import { Hanken_Grotesk, Plus_Jakarta_Sans, Spline_Sans_Mono } from "next/font/google";

// Display / headings — the dominant typeface in the new SLED design.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Body / UI copy.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Mono — labels, procurement codes, kickers.
const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

// Applied to the .sled-root wrapper so sled.css var(--font-*) references resolve.
export const sledFontClass = `${hanken.variable} ${jakarta.variable} ${splineMono.variable}`;
