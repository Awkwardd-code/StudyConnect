import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
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
  title: "Study Connect - Your Trusted Study Abroad Partner",
  description: "Study Connect offers comprehensive overseas education services including university admissions, visa processing, scholarship guidance, and IELTS preparation. Start your study abroad journey with our expert consultants across 15+ countries.",
  keywords: "study abroad, overseas education, university admissions, visa processing, IELTS preparation, scholarships, Study Connect, international education consultants",
  authors: [{ name: "Study Connect Team" }],
  creator: "Study Connect",
  publisher: "Study Connect Overseas Education",
  openGraph: {
    title: "Study Connect - Your Gateway to Global Education",
    description: "Transform your dreams into reality with Study Connect. Expert guidance for studying in USA, UK, Canada, Australia and 15+ countries. Free consultation available.",
    url: "https://studyconnect.com",
    siteName: "Study Connect",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Study Connect - Overseas Education Consultants",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Connect - Your Trusted Study Abroad Partner",
    description: "Expert guidance for studying abroad in 15+ countries. Free consultation with certified education consultants.",
    images: ["/twitter-image.jpg"],
    creator: "@studyconnect",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f4f7ff] antialiased`}
      >
        <Header />
        <main>{children}</main>
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
