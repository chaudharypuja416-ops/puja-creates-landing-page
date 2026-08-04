import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pujacreates.com"),
  title: {
    default: "Free AI Marketing Consultation | Puja Creates",
    template: "%s | Puja Creates"
  },
  description:
    "Book a free AI marketing consultation and receive a customized digital marketing plan for your business.",
  openGraph: {
    title: "Free AI Marketing Consultation | Puja Creates",
    description:
      "Find the marketing gaps holding your business back and learn how AI-powered marketing can help you generate more qualified leads.",
    url: "https://pujacreates.com",
    siteName: "Puja Creates",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Marketing Consultation | Puja Creates",
    description:
      "Receive a customized AI-powered marketing plan for your business."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
