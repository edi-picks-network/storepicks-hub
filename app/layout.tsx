import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import CookieBanner from "./components/CookieBanner";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "StorePicks — Best E-commerce Tools & Platforms",
  description:
    "Compare top e-commerce tools, platforms, and software with verified reviews, pricing breakdowns, and expert comparisons. Find the perfect e-commerce solution for your online store. Trusted by merchants worldwide.",
  keywords: [
    "e-commerce tools",
    "e-commerce platforms",
    "online store software",
    "shopping cart",
    "e-commerce comparison",
    "e-commerce software",
    "online selling tools",
    "e-commerce solutions",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "StorePicks",
    title: "StorePicks — Best E-commerce Tools & Platforms",
    description:
      "Compare top e-commerce tools and platforms with verified reviews, pricing breakdowns, and expert comparisons.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className={`${nunito.className} min-h-screen antialiased`}>
        {/* Background Effects */}
        <div className="aurora-bg" />
        <div className="grid-pattern" />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Cookie Consent Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}
