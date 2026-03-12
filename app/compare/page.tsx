import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import AffiliateCTA from "@/components/AffiliateCTA";
import AdSenseSlot from "@/components/AdSenseSlot";
import { AffiliateKey } from "@/lib/affiliates";

export const metadata: Metadata = {
  title: "Best Crypto Exchanges & Stock Brokers — Compare 2025",
  description:
    "Compare Coinbase vs Kraken vs Robinhood vs moomoo vs Interactive Brokers. Side-by-side fees, features, and ratings to find the best broker for you.",
  keywords: [
    "best crypto exchange comparison",
    "coinbase vs kraken",
    "best stock broker 2025",
    "robinhood vs moomoo",
    "cheapest crypto exchange USA",
  ],
};

interface Broker {
  name: string;
  type: string;
  affiliateKey: AffiliateKey;
  fees: string;
  assets: string;
  minDeposit: string;
  rating: number;
  pros: string[];
  cons: string[];
  badge?: string;
}

const BROKERS: Broker[] = [
  {
    name: "Coinbase",
    type: "Crypto Exchange",
    affiliateKey: "coinbase",
    fees: "0.5–1.5% (Advanced: 0.05–0.6%)",
    assets: "300+ cryptocurrencies",
    minDeposit: "$2",
    rating: 4.7,
    pros: [
      "Most trusted US crypto exchange",
      "FDIC-insured USD holdings",
      "Coinbase Advanced for low fees",
      "Earn crypto rewards",
      "Institutional-grade security",
    ],
    cons: [
      "Higher fees on basic interface",
      "Crypto only (no stocks)",
      "Customer support slow at times",
    ],
    badge: "Most Trusted",
  },
  {
    name: "Kraken",
    type: "Crypto Exchange",
    affiliateKey: "kraken",
    fees: "0.16–0.26% (maker/taker)",
    assets: "200+ cryptocurrencies",
    minDeposit: "$10",
    rating: 4.5,
    pros: [
      "Lowest fees among major exchanges",
      "Staking available (up to 20% APY)",
      "Futures and margin trading",
      "Strong security track record",
      "Pro interface (Kraken Pro)",
    ],
    cons: [
      "Interface less beginner-friendly",
      "No fractional share trading",
      "Fewer coins than Coinbase",
    ],
  },
  {
    name: "Robinhood",
    type: "Stocks & Crypto",
    affiliateKey: "robinhood",
    fees: "$0 commissions",
    assets: "Stocks, ETFs, Options, Crypto",
    minDeposit: "$0",
    rating: 4.6,
    pros: [
      "Commission-free stocks, ETFs, options & crypto",
      "24-hour market trading",
      "Fractional shares from $1",
      "Clean beginner-friendly interface",
      "Instant deposit up to $1,000",
    ],
    cons: [
      "Limited research tools vs competitors",
      "No mutual funds or bonds",
      "PFOF business model",
    ],
    badge: "Best for Beginners",
  },
  {
    name: "moomoo",
    type: "Stocks & Options",
    affiliateKey: "moomoo",
    fees: "$0 commissions",
    assets: "Stocks, ETFs, Options",
    minDeposit: "$0",
    rating: 4.5,
    pros: [
      "Free Level 2 market data",
      "Institutional-grade research tools",
      "24/7 customer support",
      "Strong fundamentals data",
      "IPO access",
    ],
    cons: [
      "No cryptocurrency trading",
      "Interface can be complex",
      "Fewer educational resources",
    ],
  },
  {
    name: "Interactive Brokers",
    type: "Stocks, Options, Futures, Crypto",
    affiliateKey: "interactiveBrokers",
    fees: "$0 (Lite) / $0.005/share (Pro)",
    assets: "Stocks, bonds, options, futures, forex, crypto",
    minDeposit: "$0",
    rating: 4.8,
    pros: [
      "Access to 150+ global markets",
      "Lowest margin rates in industry",
      "API/algorithmic trading",
      "Most assets & instruments",
      "Professional-grade tools",
    ],
    cons: [
      "Steep learning curve",
      "Complex interface for beginners",
      "Inactivity fees on some accounts",
    ],
    badge: "Best for Pros",
  },
];

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Crypto Exchanges & Stock Brokers 2025",
  description: "Comparison of top cryptocurrency exchanges and stock brokers",
  numberOfItems: BROKERS.length,
  itemListElement: BROKERS.map((broker, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: broker.name,
    description: `${broker.type} · Fees: ${broker.fees} · Rating: ${broker.rating}/5`,
  })),
};

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`text-sm ${
            i <= full
              ? "text-yellow-400"
              : i === full + 1 && half
              ? "text-yellow-400/50"
              : "text-slate-700"
          }`}
        >
          ★
        </span>
      ))}
      <span className="text-white font-semibold text-sm ml-1">{rating}</span>
    </div>
  );
}

export default function ComparePage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Best Brokers &{" "}
            <span className="text-accent">Exchanges 2025</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We compare the top crypto exchanges and stock brokers side-by-side
            so you can find the best platform for your trading style.
          </p>
        </div>

        {/* AdSense */}
        <AdSenseSlot format="horizontal" className="mb-12" />

        {/* Broker Cards */}
        <div className="space-y-6 mb-12">
          {BROKERS.map((broker, i) => (
            <div
              key={broker.name}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-colors"
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Rank + Name */}
                  <div className="flex items-start gap-4 lg:w-48 flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-black">
                      #{i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-white font-bold text-lg">
                          {broker.name}
                        </h2>
                        {broker.badge && (
                          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full font-medium">
                            {broker.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-500 text-xs">{broker.type}</p>
                      <div className="mt-1">
                        <StarRating rating={broker.rating} />
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
                    <div>
                      <div className="text-xs text-slate-600 uppercase tracking-wider mb-1">
                        Fees
                      </div>
                      <div className="text-white font-medium text-sm">
                        {broker.fees}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 uppercase tracking-wider mb-1">
                        Assets
                      </div>
                      <div className="text-white font-medium text-sm">
                        {broker.assets}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 uppercase tracking-wider mb-1">
                        Min. Deposit
                      </div>
                      <div className="text-green font-bold text-sm">
                        {broker.minDeposit}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="lg:w-48 flex-shrink-0 flex flex-col gap-2">
                    <AffiliateCTA
                      broker={broker.affiliateKey}
                      label={`Open ${broker.name} →`}
                      variant="primary"
                      className="w-full justify-center text-center"
                    />
                    <p className="text-xs text-slate-600 text-center">
                      Free account · No minimum
                    </p>
                  </div>
                </div>

                {/* Pros/Cons */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <h3 className="text-green text-xs font-semibold uppercase tracking-wider mb-2">
                      ✓ Pros
                    </h3>
                    <ul className="space-y-1">
                      {broker.pros.map((pro) => (
                        <li
                          key={pro}
                          className="text-slate-400 text-sm flex items-start gap-2"
                        >
                          <span className="text-green mt-0.5">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      ✗ Cons
                    </h3>
                    <ul className="space-y-1">
                      {broker.cons.map((con) => (
                        <li
                          key={con}
                          className="text-slate-400 text-sm flex items-start gap-2"
                        >
                          <span className="text-red-400 mt-0.5">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-12">
          <h2 className="text-white font-bold text-xl mb-4">
            How We Rank Brokers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-400">
            <div>
              <h3 className="text-white font-semibold mb-2">💰 Fees & Costs</h3>
              <p>
                We analyze trading commissions, spread markups, withdrawal fees,
                inactivity fees, and any hidden costs.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">🛡️ Safety & Regulation</h3>
              <p>
                US-regulated brokers only. We check FDIC/SIPC coverage,
                regulatory history, and security track records.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">🎯 Features & UX</h3>
              <p>
                Platform usability, available assets, research tools, mobile
                apps, and customer support quality.
              </p>
            </div>
          </div>
        </div>

        {/* AdSense */}
        <AdSenseSlot format="horizontal" />
      </div>
    </SiteLayout>
  );
}
