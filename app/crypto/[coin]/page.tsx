import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteLayout from "@/components/SiteLayout";
import AffiliateCTA from "@/components/AffiliateCTA";
import AdSenseSlot from "@/components/AdSenseSlot";
import {
  SUPPORTED_COINS,
  COIN_METADATA,
  COIN_ANALYSIS,
  CoinSlug,
} from "@/lib/coins";

interface PageProps {
  params: { coin: string };
}

export async function generateStaticParams() {
  return SUPPORTED_COINS.map((coin) => ({ coin }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const coin = params.coin as CoinSlug;
  if (!SUPPORTED_COINS.includes(coin)) {
    return { title: "Coin Not Found | SleepTrade" };
  }
  const meta = COIN_METADATA[coin];
  const analysis = COIN_ANALYSIS[coin];
  return {
    title: `${meta.name} (${meta.symbol}) Price, Analysis & Where to Buy — SleepTrade`,
    description: `Live ${meta.name} price, 24h stats, and expert analysis. ${analysis.tagline} Find the best exchange to buy ${meta.symbol} with low fees.`,
    keywords: [
      `buy ${meta.name.toLowerCase()}`,
      `${meta.symbol} price`,
      `${meta.name.toLowerCase()} analysis`,
      `is ${meta.name.toLowerCase()} a good investment`,
      `best exchange to buy ${meta.symbol}`,
    ],
    openGraph: {
      title: `${meta.name} (${meta.symbol}) Analysis & Price — SleepTrade`,
      description: `Is ${meta.name} a good investment? Live price, analysis, and where to buy with the lowest fees.`,
    },
  };
}

interface CoinData {
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  circulating_supply: number;
  market_cap_rank: number;
}

async function getCoinData(cgId: string): Promise<CoinData | null> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cgId}&order=market_cap_desc&per_page=1&page=1&sparkline=false${apiKey ? `&x_cg_demo_api_key=${apiKey}` : ""}`;
    const res = await fetch(url, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data[0] : null;
  } catch {
    return null;
  }
}

function formatPrice(price: number): string {
  if (price >= 1000) return `$${price.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  if (price >= 1) return `$${price.toFixed(2)}`;
  return `$${price.toFixed(4)}`;
}

function formatLargeNumber(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  return `$${n.toLocaleString()}`;
}

function renderContent(text: string): React.ReactNode {
  return text.split("\n\n").map((para, i) => (
    <p key={i} className="text-slate-400 leading-relaxed mb-4">
      {para}
    </p>
  ));
}

export default async function CoinPage({ params }: PageProps) {
  const coin = params.coin as CoinSlug;

  if (!SUPPORTED_COINS.includes(coin)) {
    notFound();
  }

  const meta = COIN_METADATA[coin];
  const analysis = COIN_ANALYSIS[coin];
  const liveData = await getCoinData(meta.cgId);

  // Fallback prices if API fails
  const fallbackPrices: Record<CoinSlug, number> = {
    bitcoin: 67420,
    ethereum: 3521,
    solana: 178,
    xrp: 0.58,
    dogecoin: 0.142,
    cardano: 0.48,
    avalanche: 37.2,
    chainlink: 14.5,
    polkadot: 7.8,
    near: 6.12,
  };

  const price = liveData?.current_price ?? fallbackPrices[coin];
  const change24h = liveData?.price_change_percentage_24h ?? 0;
  const isPositive = change24h >= 0;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${meta.name} (${meta.symbol}) Price Analysis — Is it a Good Investment?`,
    description: analysis.tagline,
    author: { "@type": "Organization", name: "SleepTrade" },
    publisher: { "@type": "Organization", name: "SleepTrade" },
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
              <a href="/" className="hover:text-accent">Home</a>
              <span className="mx-2">/</span>
              <a href="/crypto/bitcoin" className="hover:text-accent">Crypto</a>
              <span className="mx-2">/</span>
              <span className="text-slate-400">{meta.name}</span>
            </div>

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl font-black text-white mb-1">
                  {meta.name}{" "}
                  <span className="text-slate-500 font-normal text-2xl">
                    ({meta.symbol})
                  </span>
                </h1>
                <p className="text-slate-400">{analysis.tagline}</p>
              </div>
            </div>

            {/* Price Card */}
            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <div className="flex flex-wrap items-end gap-4">
                <div>
                  <div className="text-slate-500 text-sm mb-1">Current Price</div>
                  <div className="text-4xl font-black text-white">
                    {formatPrice(price)}
                  </div>
                </div>
                <div
                  className={`text-2xl font-bold ${
                    isPositive ? "text-green" : "text-red-400"
                  }`}
                >
                  {isPositive ? "▲" : "▼"} {Math.abs(change24h).toFixed(2)}%{" "}
                  <span className="text-sm font-normal text-slate-500">24h</span>
                </div>
              </div>

              {liveData && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
                  <div>
                    <div className="text-slate-600 text-xs uppercase tracking-wider mb-1">
                      Market Cap
                    </div>
                    <div className="text-white font-semibold text-sm">
                      {formatLargeNumber(liveData.market_cap)}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600 text-xs uppercase tracking-wider mb-1">
                      24h Volume
                    </div>
                    <div className="text-white font-semibold text-sm">
                      {formatLargeNumber(liveData.total_volume)}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600 text-xs uppercase tracking-wider mb-1">
                      24h High
                    </div>
                    <div className="text-green font-semibold text-sm">
                      {formatPrice(liveData.high_24h)}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-600 text-xs uppercase tracking-wider mb-1">
                      24h Low
                    </div>
                    <div className="text-red-400 font-semibold text-sm">
                      {formatPrice(liveData.low_24h)}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 text-xs text-slate-600">
                {liveData
                  ? "Live data from CoinGecko · Updated every 5 min"
                  : "Prices are approximate — connect API for live data"}
              </div>
            </div>

            {/* AdSense */}
            <AdSenseSlot format="horizontal" className="mb-8" />

            {/* Analysis */}
            <div className="bg-card border border-border rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Is {meta.name} a Good Investment?
              </h2>
              <div className="prose-dark">
                {renderContent(analysis.analysis)}
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="text-green font-bold mb-4">✓ Pros</h3>
                <ul className="space-y-2">
                  {analysis.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="text-green mt-0.5">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="text-red-400 font-bold mb-4">✗ Cons</h3>
                <ul className="space-y-2">
                  {analysis.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="text-red-400 mt-0.5">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Where to Buy */}
            <div className="bg-card border border-border rounded-2xl p-5 sticky top-24">
              <h2 className="text-white font-bold text-lg mb-4">
                Where to Buy {meta.name}
              </h2>
              <p className="text-slate-500 text-sm mb-4">
                These are our top picks for buying {meta.symbol} with low fees and strong security.
              </p>

              <div className="space-y-3">
                <div className="border border-border rounded-xl p-4 hover:border-accent/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold text-sm">Coinbase</span>
                    <span className="text-yellow-400 text-xs">★ 4.7</span>
                  </div>
                  <div className="text-slate-500 text-xs mb-3">Most trusted US exchange</div>
                  <AffiliateCTA broker="coinbase" label="Buy on Coinbase →" variant="primary" className="w-full justify-center" />
                </div>

                <div className="border border-border rounded-xl p-4 hover:border-accent/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold text-sm">Kraken</span>
                    <span className="text-yellow-400 text-xs">★ 4.5</span>
                  </div>
                  <div className="text-slate-500 text-xs mb-3">Lowest fees (0.16%)</div>
                  <AffiliateCTA broker="kraken" label="Buy on Kraken →" variant="outline" className="w-full justify-center" />
                </div>
              </div>

              {/* AdSense sidebar */}
              <div className="mt-6">
                <AdSenseSlot format="rectangle" />
              </div>
            </div>

            {/* Other coins */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                More Crypto Analysis
              </h3>
              <ul className="space-y-2">
                {SUPPORTED_COINS.filter((c) => c !== coin)
                  .slice(0, 6)
                  .map((c) => (
                    <li key={c}>
                      <a
                        href={`/crypto/${c}`}
                        className="flex items-center justify-between text-slate-400 hover:text-accent text-sm py-1 transition-colors"
                      >
                        <span>{COIN_METADATA[c].name}</span>
                        <span className="text-slate-600">{COIN_METADATA[c].symbol} →</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
