import type { Metadata } from "next";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import AffiliateCTA from "@/components/AffiliateCTA";
import AdSenseSlot from "@/components/AdSenseSlot";

export const metadata: Metadata = {
  title: "About SleepTrade — Built by Traders, For Traders",
  description:
    "SleepTrade was built by active traders who wanted a single hub for live crypto data, AI analysis, broker comparisons, and trading signals. Meet the team behind the bot.",
};

const TRUST_SIGNALS = [
  {
    icon: "📊",
    title: "Live Data",
    desc: "Real-time prices powered by CoinGecko's trusted API. Never stale, never misleading.",
  },
  {
    icon: "🤖",
    title: "Algorithmic Bot",
    desc: "Our trading bot runs 24/7 on 100+ crypto pairs with MTF signals and smart position sizing.",
  },
  {
    icon: "🔒",
    title: "Transparent",
    desc: "We clearly disclose affiliate relationships. Our recommendations are based on research, not payouts.",
  },
  {
    icon: "📚",
    title: "Educational Focus",
    desc: "Every article is written to help you understand the market — not just to rank on Google.",
  },
  {
    icon: "⚡",
    title: "Always Improving",
    desc: "We update our content, signals, and broker rankings regularly as the market evolves.",
  },
  {
    icon: "🌐",
    title: "Community-Driven",
    desc: "Built with feedback from real traders. We cover what matters to actual retail investors.",
  },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-6">
            <span className="text-accent font-black text-3xl">ST</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Built by traders,
            <br />
            <span className="text-accent">for traders.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            SleepTrade was born out of frustration. Too many trading sites are
            cluttered with outdated information, hidden fees, and recommendations
            driven by the biggest affiliate payouts — not the best products.
          </p>
        </div>

        {/* Story */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
          <div className="prose-dark">
            <p className="text-slate-400 leading-relaxed mb-4">
              SleepTrade is run by Max — an active trader building automated
              crypto trading systems. After months of manually monitoring dozens
              of trading pairs across multiple exchanges, the obvious question
              emerged: <em className="text-white">why can&apos;t my money just work
              while I sleep?</em>
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              That question became a mission. We built an algorithmic trading bot
              that monitors 100+ crypto pairs 24/7 using multi-timeframe
              technical analysis, Kelly Criterion position sizing, and trailing
              stops. The bot runs continuously — analyzing markets, generating
              signals, and managing positions automatically.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              SleepTrade.win is the public face of that mission: a trading
              intelligence hub where retail investors can access live data, expert
              analysis, and honest broker comparisons — all in one place.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Everything you see here — the crypto analysis, broker comparisons,
              trading guides — is written by people who actually trade. We test
              the platforms we recommend. We write the analysis we&apos;d want to read.
            </p>
          </div>
        </div>

        {/* AdSense */}
        <AdSenseSlot format="horizontal" className="mb-12" />

        {/* Trust signals */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Why Trust SleepTrade?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRUST_SIGNALS.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-5 card-hover"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Bot */}
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🤖</span>
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                The Trading Bot
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                Our algorithmic trading bot is a real, live system — not
                marketing copy. It currently runs in paper trading mode, tracking
                performance across 100+ cryptocurrency pairs. The strategy uses:
              </p>
              <ul className="space-y-2 text-sm text-slate-400 mb-4">
                {[
                  "Multi-timeframe technical analysis (1h, 4h, 1d)",
                  "Kelly Criterion for optimal position sizing",
                  "Trailing stop-losses to protect profits",
                  "Gem Hunter: scanning for breakout altcoins",
                  "Live signals dashboard at sleeptrade.win/signals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/signals"
                className="inline-flex items-center text-accent text-sm hover:text-cyan-300 transition-colors font-medium"
              >
                View live signals →
              </Link>
            </div>
          </div>
        </div>

        {/* Disclosure */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">
            Affiliate Disclosure
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">
            SleepTrade earns commissions through affiliate partnerships with the
            brokers and exchanges we recommend. This means if you click a link
            and open an account, we may receive a fee — at no extra cost to you.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            These relationships do not influence our editorial rankings. We only
            recommend platforms we believe are genuinely good for retail traders.
            Our comparison methodology is transparent and based on objective
            criteria: fees, security, features, and ease of use.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to start trading smarter?
          </h2>
          <p className="text-slate-400 mb-6">
            Open a free account on one of our top-rated platforms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <AffiliateCTA broker="coinbase" label="Start on Coinbase →" variant="primary" />
            <AffiliateCTA broker="robinhood" label="Start on Robinhood →" variant="secondary" />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
