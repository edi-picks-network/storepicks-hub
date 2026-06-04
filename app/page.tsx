"use client";

import { useMemo } from "react";
import {
  CheckCircle2, ArrowRight, Star, Users, MessageSquare,
  Shield, Zap, Globe, BarChart3, BookOpen, Layers,
  ChevronRight, Quote, Sparkles, Clock, Mail, ShoppingCart,
  TrendingUp, Package, CreditCard
} from "lucide-react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

// ============================================================
// 模板E：SaaS产品式首页 — StorePicks 适配版
// 适用于：storepicks.net, 电商工具导航站
// 布局：产品着陆页风格 — Hero大图 + 功能亮点 + 精选工具 + 证言
// ============================================================

export default function HomePage() {
  // 精选工具
  const topTools = useMemo(
    () => [...ALL_TOOLS].sort((a: any, b: any) => b.rating - a.rating).slice(0, 4),
    [ALL_TOOLS]
  );

  // 最新博客
  const recentPosts = useMemo(
    () => [...BLOG_POSTS]
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3),
    [BLOG_POSTS]
  );

  // 功能亮点
  const features = [
    { icon: Zap, title: "Smart Matching", desc: "AI matches tools to your business type, size, and budget." },
    { icon: Users, title: "Real Merchant Reviews", desc: "Authentic feedback from thousands of verified e-commerce users." },
    { icon: BarChart3, title: "Side-by-Side Compare", desc: "Compare tools by features, pricing, and customer ratings." },
    { icon: Shield, title: "Unbiased Rankings", desc: "No sponsored placements — just honest, data-driven reviews." },
  ];

  // 证言
  const testimonials = [
    { quote: "I tried 5 e-commerce platforms before finding the right one here. The comparison tool saved me hours of research.", name: "Sarah K.", role: "Online Store Owner" },
    { quote: "The detailed feature breakdown helped me choose a platform that actually fits my business needs.", name: "Marcus J.", role: "E-commerce Manager" },
    { quote: "I recommended this site to my entire entrepreneur network. The reviews are spot-on.", name: "Yuki T.", role: "Digital Marketing Lead" },
  ];

  // 统计
  const stats = [
    { label: "Tools Reviewed", value: ALL_TOOLS.length },
    { label: "Active Users", value: "12K+" },
    { label: "Expert Reviews", value: BLOG_POSTS.length },
  ];

  const accentColor = "#84CC16";

  return (
    <div className="min-h-screen bg-white">
      {/* ======== HERO（SaaS风格） ======== */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${accentColor}08, #0EA5E910, ${accentColor}05)` }} />
        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
              style={{ borderColor: `${accentColor}30`, color: accentColor, backgroundColor: `${accentColor}08` }}>
              <Sparkles className="w-3.5 h-3.5" />
              Trusted by 12,000+ online merchants
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
              Find the Perfect E-commerce Tools for Your Store
            </h1>
            <p className="text-lg text-gray-500 max-w-lg mx-auto mb-8 leading-relaxed">
              Unbiased reviews, detailed comparisons, and expert recommendations
              to help you find the best e-commerce platforms and tools.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: accentColor }}
              >
                Explore Top Tools <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all border border-gray-200 text-gray-700 hover:border-gray-300"
              >
                Read Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======== 数据指标 ======== */}
      <section className="px-6 py-12 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== 精选工具 ======== */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Top-Rated E-commerce Tools
            </h2>
            <p className="text-gray-500">
              Curated and ranked by our expert review team
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {topTools.map((tool, i) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-gray-200 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  {i === 0 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium text-white"
                      style={{ backgroundColor: accentColor }}>
                      #1 Pick
                    </span>
                  )}
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:underline mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-gray-900">{tool.rating}</span>
                    <span className="text-xs text-gray-400">({tool.reviewCount || 0})</span>
                  </div>
                  <span className="text-xs text-gray-500">{tool.pricing || "Free"}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======== 功能亮点 ======== */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Why StorePicks?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${accentColor}10` }}>
                  <feat.icon className="w-5 h-5" style={{ color: accentColor }} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== 证言 ======== */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6">
                <Quote className="w-6 h-6 mb-2" style={{ color: `${accentColor}40` }} />
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== 最新文章 ======== */}
      {recentPosts.length > 0 && (
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-900">Latest from Our Blog</h2>
              <Link href="/blog" className="text-sm flex items-center gap-1 font-medium"
                style={{ color: accentColor }}>
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {recentPosts.map((post: any, i: number) => (
                <Link
                  key={post.slug || i}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all"
                >
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                    {post.category || "Article"}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 mt-2 mb-2 group-hover:underline line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-3 text-[10px] text-gray-500">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime || "3 min"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======== Newsletter CTA ======== */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Stay Updated
          </h2>
          <p className="text-gray-500 mb-6">
            Get the latest e-commerce tool reviews and guides delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-xl border border-gray-200 text-sm outline-none focus:border-gray-400"
            />
            <button
              className="px-5 py-3 rounded-r-xl text-white text-sm font-semibold"
              style={{ backgroundColor: accentColor }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ======== Footer（轻量） ======== */}
      <footer className="border-t border-gray-100 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" style={{ color: accentColor }} />
            <span className="text-sm font-semibold text-gray-900">StorePicks</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <p className="text-xs text-gray-400">&copy; 2026 StorePicks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
