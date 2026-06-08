"use client";

import { useState, useMemo } from "react";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";
import Link from "next/link";

// ─── StorePicks ◇ 极简零售风格首页 ───
// 白底 + 商品陈列式布局 + 暖色点缀
// 视觉完全不同于其他站

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  // 分类聚合
  const categories = useMemo(() => {
    const map = new Map<string, { count: number; tools: typeof ALL_TOOLS }>();
    for (const tool of ALL_TOOLS) {
      const cat = tool.category || "Other";
      if (!map.has(cat)) map.set(cat, { count: 0, tools: [] });
      const entry = map.get(cat)!;
      entry.count++;
      entry.tools.push(tool);
    }
    return Array.from(map.entries())
      .map(([name, data]) => ({ name, count: data.count, tools: data.tools }))
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
      {/* ═══ HERO — 大胆的色彩区块 ═══ */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-orange-600 bg-orange-100 px-4 py-1.5 rounded-full mb-6">
              Curated for online merchants
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-[1.05] mb-6">
              Tools That{" "}
              <span className="text-orange-500">Actually Sell</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
              No fluff. Just the platforms, apps, and services that real
              e-commerce operators use to build, grow, and scale their online
              stores.
            </p>
            {/* 搜索 */}
            <div className="w-full max-w-lg">
              <div className="flex items-center bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:border-orange-300 focus-within:border-orange-400 transition-colors overflow-hidden">
                <svg
                  className="ml-5 w-5 h-5 text-gray-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
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
                  className="mr-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 装饰 */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl" />
      </section>

      {/* ═══ 分类导航 — 瓷片网格 ═══ */}
      <section className="py-12 bg-gray-50">
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
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{cat.count} tools</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 全部工具 ═══ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {searchQuery ? `Results for "${searchQuery}"` : "All Tools"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTools.slice(0, 30).map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                    {tool.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors truncate">
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
                  <span className="text-xs font-medium text-orange-600 group-hover:text-orange-700 transition-colors">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 推荐精选 ═══ */}
      {ALL_TOOLS.filter((t) => t.rating >= 4.7)
        .slice(0, 3)
        .length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              ★ Top Rated
            </h2>
            <p className="text-gray-500 mb-8">
              Highest-rated tools by the merchant community
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ALL_TOOLS.filter((t) => t.rating >= 4.7)
                .slice(0, 3)
                .map((tool) => (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.id}`}
                    className="group bg-white border-2 border-amber-100 rounded-xl p-6 hover:border-amber-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-1 text-amber-400 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {tool.description}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

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
                className="text-sm font-medium text-orange-600 hover:text-orange-700"
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
                  <article className="bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-200 hover:shadow-md transition-all h-full flex flex-col">
                    <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2">
                      {post.category || "Article"}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
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
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t guess. Compare.
          </h2>
          <p className="text-white/80 mb-8">
            See how {ALL_TOOLS.length} e-commerce tools stack up against each
            other — with real data, not hype.
          </p>
          <Link
            href="/all-tools"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors shadow-lg"
          >
            Browse All Tools →
          </Link>
        </div>
      </section>
    </div>
  );
}
