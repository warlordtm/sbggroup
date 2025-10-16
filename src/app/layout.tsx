import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jamie White Consulting | Business Growth & Strategy Experts",
  description:
    "Unlock breakthrough growth with Jamie White Consulting. We help professional service businesses scale effectively with proven SANDOR strategies, strategic clarity, and performance systems that drive measurable results.",
  keywords: [
    "Jamie White Consulting",
    "business consulting",
    "scaling professional services",
    "SANDOR consultant",
    "business growth strategy",
    "performance systems",
    "business breakthrough session",
  ],
  authors: [{ name: "Jamie White" }],
  openGraph: {
    title: "Jamie White Consulting | Business Growth & Strategy Experts",
    description:
      "Work with Jamie White Consulting to scale your business sustainably and achieve exponential results through clarity, systems, and strategic growth.",
    url: "https://jamiewhiteconsulting.com",
    siteName: "Jamie White Consulting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamie White Consulting | Business Growth & Strategy Experts",
    description:
      "Helping professional service businesses achieve breakthrough results through proven strategies and performance frameworks.",
    creator: "@jamiewhite",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://jamiewhiteconsulting.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
