import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Free AI Marketing Consultation | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Book a free AI marketing consultation and receive a customized digital marketing plan for your business.",
  applicationName: siteConfig.name,
  keywords: [
    "AI marketing consultation",
    "digital marketing plan",
    "small business marketing",
    "lead generation",
    "Puja Creates"
  ],
  openGraph: {
    title: `Free AI Marketing Consultation | ${siteConfig.name}`,
    description:
      "Find the marketing gaps holding your business back and learn how AI-powered marketing can help you generate more qualified leads.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `Free AI Marketing Consultation | ${siteConfig.name}`,
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
      <body className={`${inter.variable} antialiased`}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2146602486235214');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2146602486235214&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
