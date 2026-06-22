import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Users, Package, TrendingUp, Truck, Globe } from "lucide-react";
import { ALL_TOOLS } from "@/data/tools";

export const metadata: Metadata = {
  title: "About — StorePicks",
  description:
    "StorePicks is a Bellevue, WA-based e-commerce and supply chain consultancy. Our 6-person team helps online merchants discover, compare, and deploy the right tools for their business.",
};

const TEAM_MEMBERS = [
  {
    name: "Marcus Chen",
    role: "Founder & Lead Strategist",
    bio: "Former Amazon supply chain engineer with 12+ years in e-commerce operations. Marcus founded StorePicks to help merchants navigate the increasingly complex landscape of e-commerce tools.",
  },
  {
    name: "Sarah Okafor",
    role: "Senior E-Commerce Analyst",
    bio: "Specializes in platform comparison and migration strategy. Sarah has helped 40+ brands transition between e-commerce platforms with zero downtime.",
  },
  {
    name: "David Kim",
    role: "Supply Chain Specialist",
    bio: "Former logistics manager at a top-100 Shopify store. David evaluates fulfillment networks, shipping integrations, and inventory management systems.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Automation Lead",
    bio: "Expert in email/SMS marketing stacks and customer data platforms. Priya runs our hands-on testing of marketing automation tools.",
  },
  {
    name: "James Torres",
    role: "Technical Architect",
    bio: "Full-stack developer who evaluates API quality, integration depth, and headless commerce capabilities of every platform we review.",
  },
  {
    name: "Aiko Tanaka",
    role: "Research & Content Lead",
    bio: "Compiles our tool comparisons, pricing analyses, and buyer's guides. Aiko ensures every review is accurate, unbiased, and actionable.",
  },
];

const VALUES = [
  {
    icon: Package,
    title: "Rigorous Tool Evaluation",
    desc: "We test every tool against 50+ criteria — from API reliability and integration depth to real-world pricing and support quality. No sponsored placements, no hidden bias.",
  },
  {
    icon: TrendingUp,
    title: "Supply Chain Focus",
    desc: "Our Bellevue team brings deep supply chain expertise. We evaluate tools not just on features, but on how they impact your fulfillment operations and bottom line.",
  },
  {
    icon: Truck,
    title: "Merchant-First Research",
    desc: "Every comparison starts with the merchant's perspective. We ask: does this tool solve a real operational problem? Does it deliver measurable ROI?",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    desc: "E-commerce is borderless. Our team analyzes tools across multiple currencies, shipping regions, and regulatory environments to serve merchants worldwide.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#84CC16] bg-lime-50 px-3 py-1.5 rounded-md mb-4">
            About Us
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            We Help Merchants Find Tools That{' '}
            <span className="text-[#84CC16]">Actually Work</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            StorePicks is a Bellevue, Washington-based team of six
            e-commerce and supply chain specialists. We research, compare, and
            recommend tools that help online merchants operate more efficiently
            and grow faster.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              StorePicks was founded in 2022 by Marcus Chen, a former
              Amazon supply chain engineer who saw firsthand how difficult it is
              for merchants to find reliable, unbiased information about
              e-commerce tools.
            </p>
            <p>
              Review sites are often driven by affiliate commissions. Pricing
              information is buried behind sales calls. And feature comparisons
              go out of date the moment a platform pushes an update. Marcus
              believed merchants deserved better.
            </p>
            <p>
              He assembled a team of five specialists — each with deep
              operational experience in e-commerce, supply chain, marketing
              automation, and technical architecture — and founded Nexus
              Solutions in Bellevue, Washington. Our mission: to be the most
              trusted source of e-commerce tool intelligence on the web.
            </p>
            <p>
              Today, our team of six evaluates {ALL_TOOLS.length} tools across 15+ categories.
              Every review, comparison, and recommendation on this site is the
              result of hands-on testing, public data analysis, and real-world
              merchant feedback.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Meet the Team
          </h2>
          <div className="flex items-center justify-center gap-2 mb-10">
            <MapPin className="w-5 h-5 text-[#84CC16]" />
            <span className="text-gray-600 font-medium">Bellevue, Washington · 6 Specialists</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-lime-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-lime-50 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-[#84CC16]">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-[#84CC16] mb-3">{member.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How We Evaluate Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-lime-200 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-lime-50 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#84CC16]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white border border-gray-200 rounded-xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Have questions or feedback?
          </h2>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto">
            Our team is always happy to help. Whether you need tool recommendations or
            have suggestions for tools we should review, reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#84CC16] hover:bg-[#65A30D] text-white font-medium rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="mailto:sell@storepicks.net"
              className="px-6 py-3 border border-gray-200 hover:border-[#84CC16] text-gray-600 hover:text-[#84CC16] font-medium rounded-lg transition-all"
            >
              sell@storepicks.net
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
