import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StorePicks — Honest E-commerce Tool Reviews",
  description:
    "Real e-commerce tool comparisons, ratings, and reviews. Find the best platforms, apps, and services for your online store — from payment gateways to shipping solutions.",
  keywords: [
    "e-commerce tools",
    "online store software",
    "shopify alternatives",
    "payment gateway comparison",
    "e-commerce platforms",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "StorePicks",
    title: "StorePicks — Honest E-commerce Tool Reviews",
    description:
      "Real e-commerce tool comparisons, ratings, and reviews from merchants who actually use them.",
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
        {/* 简单导航 */}
        <header className="border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link href="/" className="font-bold text-gray-900 text-lg">
              StorePicks
            </Link>
            <nav className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/all-tools" className="hover:text-orange-600 transition-colors">Tools</Link>
              <Link href="/blog" className="hover:text-orange-600 transition-colors">Articles</Link>
              <Link href="/about" className="hover:text-orange-600 transition-colors">About</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* 页脚 */}
        <footer className="bg-gray-900 text-gray-400 py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-white font-semibold mb-3">StorePicks</h4>
                <p className="text-sm leading-relaxed">Honest e-commerce tool comparisons for online merchants.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Explore</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/all-tools" className="hover:text-white transition-colors">All Tools</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Articles</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Categories</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-white transition-colors">Browse All</Link></li>
                  <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                  <li><Link href="/disclosure" className="hover:text-white transition-colors">Disclosure</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-800 text-center text-sm">
              © {new Date().getFullYear()} StorePicks. All rights reserved.
            </div>
          </div>
        </footer>

        <CookieBanner />
      </body>
    </html>
  );
}
