import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import AffiliateCTA from "@/components/AffiliateCTA";
import AdSenseSlot from "@/components/AdSenseSlot";
import { STOCK_TOPICS, STOCK_ARTICLES, StockTopic } from "@/lib/stocks";

interface PageProps {
  params: { topic: string };
}

export async function generateStaticParams() {
  return STOCK_TOPICS.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const topic = params.topic as StockTopic;
  if (!STOCK_TOPICS.includes(topic)) {
    return { title: "Article Not Found | SleepTrade" };
  }
  const article = STOCK_ARTICLES[topic];
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
    },
  };
}

function renderContent(lines: string[]): React.ReactNode {
  return lines.map((line, i) => {
    if (line.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold text-accent mt-8 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    }
    if (line.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-bold text-white mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    }
    // Handle bold inline
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const renderedLine = parts.map((part, j) =>
      j % 2 === 1 ? (
        <strong key={j} className="text-white">
          {part}
        </strong>
      ) : (
        part
      )
    );
    return (
      <p key={i} className="text-slate-400 leading-relaxed mb-4">
        {renderedLine}
      </p>
    );
  });
}

export default function StockTopicPage({ params }: PageProps) {
  const topic = params.topic as StockTopic;

  if (!STOCK_TOPICS.includes(topic)) {
    notFound();
  }

  const article = STOCK_ARTICLES[topic];
  const otherTopics = STOCK_TOPICS.filter((t) => t !== topic);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    keywords: article.keywords.join(", "),
    author: { "@type": "Organization", name: "SleepTrade" },
    publisher: { "@type": "Organization", name: "SleepTrade", url: "https://sleeptrade.win" },
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Breadcrumb */}
            <div className="text-sm text-slate-600 mb-6">
              <Link href="/" className="hover:text-accent">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/stocks/best-online-brokers" className="hover:text-accent">Stocks</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-400">
                {article.title.split("—")[0].trim()}
              </span>
            </div>

            {/* Article header */}
            <div className="mb-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                Stock Trading Guide
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                {article.title}
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                {article.description}
              </p>
              <div className="mt-4 text-xs text-slate-600">
                Updated 2025 · {Math.ceil(article.content.join(" ").split(" ").length / 200)} min read · SleepTrade Editorial Team
              </div>
            </div>

            {/* AdSense */}
            <AdSenseSlot format="horizontal" className="mb-8" />

            {/* Article content */}
            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <div className="prose-dark">
                {renderContent(article.content)}
              </div>
            </div>

            {/* CTA box */}
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mb-8">
              <h3 className="text-white font-bold text-lg mb-2">
                Ready to Start Trading?
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Open a free account on one of our top-rated platforms and start
                investing in minutes. No minimum deposit required.
              </p>
              <div className="flex flex-wrap gap-3">
                <AffiliateCTA broker="robinhood" label="Open Robinhood (Free) →" variant="primary" />
                <AffiliateCTA broker="moomoo" label="Open moomoo →" variant="outline" />
              </div>
            </div>

            {/* AdSense */}
            <AdSenseSlot format="horizontal" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick CTA */}
            <div className="bg-card border border-border rounded-2xl p-5 sticky top-24">
              <h3 className="text-white font-bold mb-4">Top Brokers for You</h3>

              <div className="space-y-3">
                <div className="border border-border rounded-xl p-4">
                  <div className="text-white font-semibold text-sm mb-1">Robinhood</div>
                  <div className="text-slate-500 text-xs mb-3">$0 commissions · Advanced charts · Free</div>
                  <AffiliateCTA broker="robinhood" label="Open Free Account →" variant="primary" className="w-full justify-center" />
                </div>

                <div className="border border-border rounded-xl p-4">
                  <div className="text-white font-semibold text-sm mb-1">moomoo</div>
                  <div className="text-slate-500 text-xs mb-3">Free Level 2 data · Research tools</div>
                  <AffiliateCTA broker="moomoo" label="Open Free Account →" variant="outline" className="w-full justify-center" />
                </div>

                <div className="border border-border rounded-xl p-4">
                  <div className="text-white font-semibold text-sm mb-1">Interactive Brokers</div>
                  <div className="text-slate-500 text-xs mb-3">Best for active traders · Global markets</div>
                  <AffiliateCTA broker="interactiveBrokers" label="Open IBKR Account →" variant="outline" className="w-full justify-center" />
                </div>
              </div>

              <Link href="/compare" className="block mt-4 text-center text-accent text-sm hover:text-cyan-300">
                Compare all brokers →
              </Link>
            </div>

            {/* Other articles */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                More Stock Guides
              </h3>
              <ul className="space-y-2">
                {otherTopics.map((t) => (
                  <li key={t}>
                    <Link
                      href={`/stocks/${t}`}
                      className="text-slate-400 hover:text-accent text-sm py-1 block transition-colors"
                    >
                      {STOCK_ARTICLES[t].title.split("—")[0].trim()} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* AdSense */}
            <AdSenseSlot format="rectangle" />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
