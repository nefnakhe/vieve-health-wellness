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
    default: "Vieve Health and Wellness — Culturally Relevant Diabetes Education",
    template: "%s | Vieve Health and Wellness",
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
  metadataBase: new URL("https://www.vievehealthwellness.com"),
  authors: [{ name: "Dr. Genevieve Ufongene, DNP, FNP-C" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-180.png", sizes: "180x180" },
      { url: "/apple-touch-icon.png", sizes: "512x512" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.svg", color: "#0f766e" },
    ],
  },
  openGraph: {
    type: "website",
    siteName: "Vieve Health and Wellness",
    title: "Vieve Health and Wellness — Culturally Relevant Diabetes Education",
    description:
      "Culturally relevant diabetes education for Africans and the diaspora. Practical, empowering health guidance that reflects our foods, our culture, and our lives.",
    url: "https://www.vievehealthwellness.com",
    images: [{ url: "/apple-touch-icon.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vieve Health and Wellness",
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
