import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
    default: "Vieve Health & Wellness — Culturally Relevant Diabetes Education",
    template: "%s | Vieve Health & Wellness",
  },
  description:
    "Helping African and diaspora communities better understand diabetes, food, weight management, and healthy living through practical, culturally informed education. Led by Dr. Genevieve Ufongene, DNP, FNP-C.",
  keywords: [
    "diabetes education",
    "African diabetes",
    "culturally relevant health",
    "diaspora wellness",
    "Dr. Genevieve Ufongene",
    "Nigerian food diabetes",
    "blood sugar management",
    "African nutrition",
    "Black health education",
    "prediabetes prevention",
  ],
  authors: [{ name: "Dr. Genevieve Ufongene, DNP, FNP-C" }],
  openGraph: {
    type: "website",
    siteName: "Vieve Health & Wellness",
    title: "Vieve Health & Wellness — Where Diabetes Education Meets Empowerment",
    description:
      "Culturally relevant diabetes education for Africans and the diaspora. Practical, empowering health guidance that reflects our foods, our culture, and our lives.",
    url: "https://www.vievehealthwellness.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vieve Health & Wellness",
    description: "Culturally relevant diabetes education for Africans & the diaspora.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
