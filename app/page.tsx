"use client";

import { useState, useMemo } from "react";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";
import Link from "next/link";
import { ShoppingCart, Package, Truck, BarChart3, Globe, ShieldCheck, ArrowRight, Star } from "lucide-react";

// ─── Nexus Solutions ◇ 电商工具站首页 ───
// 石灰绿色系 #84cc16，产品展示式布局

const FEATURED_PRODUCTS = [
  {
    name: "Shopify Plus",
    category: "Enterprise E-Commerce",
    rating: 4.8,
    description: "Enterprise-grade e-commerce platform purpose-built for high-growth brands. Unlimited customization, dedicated support, and global infrastructure.",
    price: "From $2,000/mo",
    href: "/tools/shopify-plus",
  },
  {
    name: "Klaviyo",
    category: "Marketing Automation",
    rating: 4.7,
    description: "AI-powered marketing automation platform that unifies customer data across email, SMS, and push notifications. Built for e-commerce growth.",
    price: "From $20/mo",
    href: "/tools/klaviyo",
  },
  {
    name: "ShipStation",
    category: "Shipping & Fulfillment",
    rating: 4.6,
    description: "Multi-carrier shipping software that streamlines order fulfillment, batch label printing, and real-time tracking across 50+ carriers.",
    price: "From $9/mo",
    href: "/tools/shipstation",
  },
  {
    name: "Gorgias",
    category: "Customer Service",
    rating: 4.7,
    description: "Helpdesk built for e-commerce — unify email, live chat, social, and SMS into one dashboard with AI-powered automations.",
    price: "From $60/mo",
    href: "/tools/gorgias",
  },
  {
    name: "Recharge",
    category: "Subscription Management",
    rating: 4.5,
    description: "Subscription billing platform for e-commerce brands. Manage recurring payments, delivery schedules, and customer portals seamlessly.",
    price: "From $99/mo",
    href: "/tools/recharge",
  },
  {
    name: "Google Analytics 4",
    category: "Analytics",
    rating: 4.4,
    description: "Next-generation analytics platform with event-based tracking, predictive insights, and cross-channel attribution for e-commerce data.",
    price: "Free",
    href: "/tools/google-analytics-4",
  },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  // 分类聚合
  const categories = useMemo(() => {
    const map = new Map<string, { count: number }>();
    for (const tool of ALL_TOOLS) {
      const cat = tool.category || "Other";
      if (!map.has(cat)) map.set(cat, { count: 0 });
      const entry = map.get(cat)!;
      entry.count++;
    }
    return Array.from(map.entries())
      .map(([name, data]) => ({ name, count: data.count }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return ALL_TOOLS;
    const q = searchQuery.toLowerCase();
    return ALL_TOOLS.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        (t.category && t.category.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const latestPosts = useMemo(
    () =>
      [...BLOG_POSTS]
        .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3),
    []
  );

  return (
    <div className="min-h-screen bg-white">
      {/* ═══ HERO — 石灰绿色系产品展示 ═══ */}
      <section className="relative bg-gradient-to-br from-lime-50 via-white to-lime-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-lime-600 bg-lime-100 px-4 py-1.5 rounded-full mb-6">
              Curated by Nexus Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-[1.05] mb-6">
              E-Commerce Tools That{" "}
              <span className="text-[#84cc16]">Drive Revenue</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
              We research, compare, and rank the platforms, apps, and services
              that power successful online stores — from payment gateways to
              supply chain automation.
            </p>
            {/* 搜索 */}
            <div className="w-full max-w-lg">
              <div className="flex items-center bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:border-lime-300 focus-within:border-lime-400 transition-colors overflow-hidden">
                <svg
                  className="ml-5 w-5 h-5 text-gray-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 0 000 16z" />
                </svg>
                <input
                  type="search"
                  placeholder="Search tools by name or category…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 py-4 px-3 bg-transparent text-gray-900 placeholder-gray-400 outline-none text-base"
                />
                <Link
                  href={
                    filteredTools.length > 0
                      ? `/tools/${filteredTools[0].id}`
                      : "/"
                  }
                  className="mr-2 px-5 py-2.5 bg-[#84cc16] hover:bg-[#65a30d] text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 装饰 */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-lime-100/20 rounded-full blur-3xl" />
      </section>

      {/* ═══ 精选产品 — 产品展示式布局 ═══ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-500 mb-8">Hand-picked tools that top e-commerce brands trust</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-lime-300 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#84cc16] bg-lime-50 px-2.5 py-1 rounded-md">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#84cc16] transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-gray-700">{product.price}</span>
                    <span className="text-sm font-medium text-[#84cc16] group-hover:text-[#65a30d] transition-colors">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 分类导航 ═══ */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse by Category</h2>
          <p className="text-gray-500 mb-8">
            {ALL_TOOLS.length} tools across {categories.length} categories
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.name}
                href={`/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-lime-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-[#84cc16] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{cat.count} tools</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 全部工具 ═══ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {searchQuery ? `Results for "${searchQuery}"` : "All Tools"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTools.slice(0, 30).map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-lime-300 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-lime-100 to-lime-50 flex items-center justify-center text-[#84cc16] font-bold text-sm">
                    {tool.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#84cc16] transition-colors truncate">
                      {tool.name}
                    </h3>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      {tool.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md">
                    <span className="text-yellow-500 text-xs">★</span>
                    <span className="text-xs font-bold text-gray-700">
                      {tool.rating}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">
                  {tool.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs font-medium text-[#84cc16] group-hover:text-[#65a30d] transition-colors">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 最新博客 ═══ */}
      {latestPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                From the Journal
              </h2>
              <Link
                href="/blog"
                className="text-sm font-medium text-[#84cc16] hover:text-[#65a30d]"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestPosts.map((post: any) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-white border border-gray-200 rounded-xl p-6 hover:border-lime-200 hover:shadow-md transition-all h-full flex flex-col">
                    <span className="text-xs font-semibold text-[#84cc16] uppercase tracking-wider mb-2">
                      {post.category || "Article"}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#84cc16] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400">
                      {post.date} · {post.readTime} min read
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ CTA ═══ */}
      <section className="py-16 bg-gradient-to-r from-[#84cc16] to-[#65a30d]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t Guess. Compare.
          </h2>
          <p className="text-white/80 mb-8">
            See how {ALL_TOOLS.length} e-commerce tools stack up against each
            other — with real data, not hype.
          </p>
          <Link
            href="/all-tools"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#65a30d] font-bold rounded-xl hover:bg-lime-50 transition-colors shadow-lg"
          >
            Browse All Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
