import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

export const metadata: Metadata = {
  title: "Nexus Solutions — E-Commerce Tool Reviews & Comparisons",
  description:
    "Real e-commerce tool comparisons, ratings, and reviews from the Nexus Solutions team in Bellevue, WA. Find the best platforms, apps, and services for your online store — from payment gateways to supply chain solutions.",
  keywords: [
    "e-commerce tools",
    "online store software",
    "shopify alternatives",
    "payment gateway comparison",
    "e-commerce platforms",
    "supply chain tools",
    "nexus solutions",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nexus Solutions",
    title: "Nexus Solutions — E-Commerce Tool Reviews & Comparisons",
    description:
      "Real e-commerce tool comparisons, ratings, and reviews from the Nexus Solutions team in Bellevue, WA.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900 antialiased">
        <Header />

        <main>{children}</main>

        <Footer />

        <CookieBanner />
      </body>
    </html>
  );
}
