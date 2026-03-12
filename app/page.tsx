import type { Metadata } from "next";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import AffiliateCTA from "@/components/AffiliateCTA";
import AdSenseSlot from "@/components/AdSenseSlot";
import { AFFILIATES } from "@/lib/affiliates";

export const metadata: Metadata = {
  title: "SleepTrade — Your Money Works While You Sleep",
  description:
    "Live crypto prices, AI trading analysis, broker comparisons, and signals. Your money works while you sleep with SleepTrade.",
};

const WHY_CARDS = [
  {
    icon: "📡",
    title: "Live Signals",
    desc: "Real-time crypto market signals powered by CoinGecko data. Track top movers, trending coins, and momentum before the crowd.",
  },
  {
    icon: "🧠",
    title: "Expert Analysis",
    desc: "Deep-dive AI-written analysis on every major cryptocurrency. Is it a buy, hold, or pass? We give you the context to decide.",
  },
  {
    icon: "💼",
    title: "Best Brokers",
    desc: "Side-by-side comparison of the top crypto exchanges and stock brokers — ranked by fees, features, and beginner-friendliness.",
  },
];

const FEATURED_BROKERS = [
  {
    name: "Coinbase",
    type: "Crypto",
    rating: 4.7,
    fee: "0.5–1.5%",
    minDeposit: "$2",
    affiliateKey: "coinbase" as const,
    highlight: "Most trusted US crypto exchange",
  },
  {
    name: "Webull",
    type: "Stocks & Crypto",
    rating: 4.6,
    fee: "$0",
    minDeposit: "$0",
    affiliateKey: "webull" as const,
    highlight: "Best free trading platform",
  },
  {
    name: "Kraken",
    type: "Crypto",
    rating: 4.5,
    fee: "0.16–0.26%",
    minDeposit: "$10",
    affiliateKey: "kraken" as const,
    highlight: "Lowest crypto exchange fees",
  },
  {
    name: "Robinhood",
    type: "Stocks & Crypto",
    rating: 4.4,
    fee: "$0",
    minDeposit: "$0",
    affiliateKey: "robinhood" as const,
    highlight: "Best for beginners — $0 commissions",
  },
];

const LATEST_ARTICLES = [
  {
    href: "/crypto/bitcoin",
    tag: "Crypto",
    title: "Is Bitcoin a Good Investment in 2025?",
    desc: "BTC analysis, price targets, and where to buy with the lowest fees.",
    color: "text-orange-400",
  },
  {
    href: "/crypto/ethereum",
    tag: "Crypto",
    title: "Ethereum Deep Dive: ETH Price Analysis & Outlook",
    desc: "Smart contracts, staking yields, and ETH's role in the next bull run.",
    color: "text-purple-400",
  },
  {
    href: "/stocks/best-online-brokers",
    tag: "Stocks",
    title: "Best Online Brokers in 2025 — Ranked & Reviewed",
    desc: "We compared every major broker so you don't have to.",
    color: "text-accent",
  },
  {
    href: "/stocks/day-trading-guide",
    tag: "Stocks",
    title: "Day Trading Guide: Strategies & Risk Management",
    desc: "Everything beginners need to know before making their first trade.",
    color: "text-green",
  },
  {
    href: "/crypto/solana",
    tag: "Crypto",
    title: "Solana vs Ethereum: Which L1 Wins in 2025?",
    desc: "Speed, fees, ecosystem size — the ultimate comparison.",
    color: "text-violet-400",
  },
  {
    href: "/signals",
    tag: "Signals",
    title: "Live Crypto Trading Signals — Top Movers Today",
    desc: "Real-time signals from CoinGecko's trending data.",
    color: "text-cyan-400",
  },
];

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-24 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Live market data · Updated every minute
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Your money works
              <br />
              <span className="text-accent">while you sleep.</span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Live crypto prices, AI-powered analysis, broker comparisons, and
              real-time trading signals — everything you need to trade smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={AFFILIATES.coinbase}
                className="px-8 py-4 bg-accent text-bg font-bold text-base rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                🚀 Start Trading Crypto
              </a>
              <a
                href={AFFILIATES.webull}
                className="px-8 py-4 bg-green/20 text-green border border-green/30 font-bold text-base rounded-xl hover:bg-green/30 transition-all hover:-translate-y-0.5"
              >
                📈 Start Trading Stocks
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-600">
              Free to open · No minimum deposit on most platforms · Affiliate disclosure
            </p>
          </div>
        </section>

        {/* AdSense */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <AdSenseSlot format="horizontal" />
        </div>

        {/* Why SleepTrade */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">
              Why <span className="text-accent">SleepTrade</span>?
            </h2>
            <p className="text-slate-400">
              Built by traders, for traders. Everything you need in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-2xl p-6 card-hover"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Brokers */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">
                Top Brokers & Exchanges
              </h2>
              <p className="text-slate-400 text-sm">
                Ranked by fees, features, and reliability
              </p>
            </div>
            <Link
              href="/compare"
              className="hidden md:inline-flex items-center text-accent text-sm hover:text-cyan-300 transition-colors"
            >
              Full comparison →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED_BROKERS.map((broker) => (
              <div
                key={broker.name}
                className="bg-card border border-border rounded-2xl p-5 card-hover flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold">{broker.name}</h3>
                    <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      {broker.type}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-green font-bold">{broker.rating}</div>
                    <div className="text-xs text-slate-500">/ 5.0</div>
                  </div>
                </div>

                <p className="text-slate-500 text-xs mb-3">{broker.highlight}</p>

                <div className="flex gap-4 mb-4 text-xs">
                  <div>
                    <div className="text-slate-600">Fee</div>
                    <div className="text-white font-medium">{broker.fee}</div>
                  </div>
                  <div>
                    <div className="text-slate-600">Min.</div>
                    <div className="text-white font-medium">{broker.minDeposit}</div>
                  </div>
                </div>

                <div className="mt-auto">
                  <AffiliateCTA
                    broker={broker.affiliateKey}
                    label={`Open ${broker.name} →`}
                    variant="outline"
                    className="w-full text-center justify-center"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/compare"
              className="md:hidden inline-flex items-center text-accent text-sm hover:text-cyan-300"
            >
              See full comparison table →
            </Link>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">
                Latest Articles
              </h2>
              <p className="text-slate-400 text-sm">
                Crypto analysis, trading guides, and market insights
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {LATEST_ARTICLES.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="bg-card border border-border rounded-2xl p-5 card-hover block group"
              >
                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-wider mb-3 ${article.color}`}
                >
                  {article.tag}
                </span>
                <h3 className="text-white font-semibold mb-2 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {article.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* AdSense */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <AdSenseSlot format="horizontal" />
        </div>
      </div>
    </SiteLayout>
  );
}
