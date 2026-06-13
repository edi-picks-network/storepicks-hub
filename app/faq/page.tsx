"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a product research tool and how can it help my ecommerce business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A product research tool helps you find profitable products to sell by analyzing sales data, trends, competition, and market demand across platforms like Amazon, Shopify, and AliExpress. These tools save hours of manual research, uncover winning products before they become saturated, and provide data-driven insights on pricing, seasonality, and profit margins. Popular examples include Jungle Scout, Helium 10, and Sell The Trend.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a dropshipping tool and a traditional sourcing tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dropshipping tools like Oberlo, Spocket, and DSers connect you directly with suppliers who ship products to your customers — you don't hold inventory. Traditional sourcing tools help you find manufacturers or wholesalers for bulk ordering and storing products yourself. Dropshipping lowers upfront costs and risk but reduces profit margins, while bulk sourcing gives you better per-unit pricing and quality control but requires inventory management and higher capital.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the right ecommerce platform for my online store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key factors include: (1) Product type — digital products, physical goods, or services. (2) Budget — monthly fees, transaction fees, and add-on costs. (3) Features — inventory management, payment gateways, shipping integrations. (4) Scalability — can the platform grow with your business? (5) Marketing tools — SEO, email, social media integrations. Top platforms include Shopify for ease of use, WooCommerce for flexibility, and BigCommerce for built-in features. Compare them on StorePicks to find your best fit.",
      },
    },
    {
      "@type": "Question",
      name: "How much do ecommerce marketing tools typically cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marketing tool pricing varies widely: email marketing tools like Mailchimp start at $13/month, social media schedulers like Buffer at $6/month, SEO tools like Ahrefs at $99/month, and all-in-one marketing platforms at $50–$300/month. Many offer free tiers for small stores. For a complete stack, small stores typically spend $100–$400/month on marketing tools. Always check for startup discounts and annual billing savings.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between an all-in-one ecommerce tool and specialized tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All-in-one platforms like Zoho or SalesForce combine product management, marketing, analytics, and customer support in one system — offering convenience and unified data but often at a higher price with less depth per feature. Specialized tools (dedicated email platforms, standalone SEO tools, niche product research apps) excel at their specific function and are usually more affordable individually. Most growing stores start with specialized tools and consolidate as their team and budget expand.",
      },
    },
    {
      "@type": "Question",
      name: "Which ecommerce analytics tools are essential for tracking store performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Essential analytics tools include: Google Analytics (free — tracks traffic and conversions), your platform's native analytics (Shopify Analytics, WooCommerce Analytics), heatmap tools like Hotjar (understand user behavior), and dedicated ecommerce analytics tools like Triple Whale or Gorgias. For product-level insights, tools like Keepa or CamelCamelCamel track historical pricing and demand. Good analytics reveal your best-selling products, customer acquisition channels, and abandonment points in your sales funnel.",
      },
    },
    {
      "@type": "Question",
      name: "How do product review and rating tools help boost sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Review tools like Yotpo, Judge.me, and Loox help you collect, display, and manage customer reviews and ratings. They improve social proof, increase conversion rates (products with reviews convert 58%+ better), boost SEO with user-generated content, and provide feedback for product improvement. Key features include photo/video reviews, review request automation, Google Shopping integration, and moderation tools. Most offer free tiers for stores with under 50 orders per month.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best tools for跨境电商 (cross-border ecommerce) sellers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cross-border ecommerce sellers benefit from: product research tools like Zonbase and JS for international markets, translation tools like DeepL or Weglot for store localization, currency conversion tools, international shipping solutions like ShipStation or Easyship, and compliance tools that handle VAT/tax regulations across different countries. Payment processors like Payoneer and WorldFirst are also essential for receiving payments from global marketplaces.",
      },
    },
    {
      "@type": "Question",
      name: "How do I evaluate whether an ecommerce tool integrates with my existing stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check the tool's integration directory or marketplace — most popular tools have native integrations with Shopify, WooCommerce, BigCommerce, and Magento. Look for: API availability (REST/GraphQL) for custom connections, Zapier or Make (Integromat) support for no-code automation, webhooks for real-time data sync, and pre-built connectors for common platforms. Always test integrations with a free trial before committing to a paid plan. StorePicks lists integration details for every tool in our directory.",
      },
    },
    {
      "@type": "Question",
      name: "Are free ecommerce tools reliable enough for a growing online store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many free tools are excellent for starting out — Google Analytics, Mailchimp's free tier (up to 500 contacts), Canva for design, and your ecommerce platform's built-in features cover basic needs. However, free tiers come with limitations: capped features, lower usage limits, branded output, and minimal support. As your store grows, upgrading to paid versions unlocks automation, detailed analytics, and priority support. A hybrid approach — free core tools with paid specialized tools — works well for most small to mid-sized stores.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I review and update my ecommerce tool stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Review your tool stack every 3–6 months. Signs it's time to audit: overlapping features (paying for duplicate functionality), unused tools still on your bill, performance bottlenecks from poor integrations, or missing capabilities that hurt conversion rates. Quarterly reviews help you eliminate redundant subscriptions, upgrade plans as your order volume grows, and discover newer tools that offer better value. Set calendar reminders and check StorePicks for the latest tool comparisons before making changes.",
      },
    },
    {
      "@type": "Question",
      name: "What is the future of ecommerce tools and technology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ecommerce tool landscape is evolving rapidly with AI-powered product recommendations, automated ad optimization, computer vision for visual search, AR/VR try-on experiences, headless commerce architectures, and AI-driven customer service chatbots. Personalization engines are becoming smarter, predictive analytics help forecast inventory needs, and no-code tools empower non-technical store owners. The global ecommerce software market is projected to grow past $16 billion by 2030, driven by these innovations.",
      },
    },
  ],
};

const FAQ_ITEMS = FAQ_SCHEMA.mainEntity.map((item) => ({
  question: item.name,
  answer: item.acceptedAnswer.text,
}));

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative pt-32 pb-20 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#84CC16] bg-[#162540] px-3 py-1.5 rounded-md mb-4">
            FAQ
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#F0F2FE] tracking-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-[#839BBE] text-lg">
            Everything you need to know about ecommerce tools, product research, and online selling.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-[#0F1F2D] border border-[#1E3A5F] rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-[#F0F2FE] font-semibold text-sm pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#839BBE] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-[#839BBE] text-sm leading-relaxed border-t border-[#1E3A5F] pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
