import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import content from "@/data/content";
import images from "@/data/images";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// TODO: update if the live domain ever changes.
const SITE_URL = "https://rs-outdoors-ten.vercel.app";

const { title, description } = content.seo.home;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  icons: {
    icon: images.favicon,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: content.site.businessName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: images.og.src,
        width: 1200,
        height: 630,
        alt: images.og.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images.og.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}