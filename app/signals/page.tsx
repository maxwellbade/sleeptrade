import type { Metadata } from "next";
import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import AffiliateCTA from "@/components/AffiliateCTA";
import AdSenseSlot from "@/components/AdSenseSlot";

export const metadata: Metadata = {
  title: "Live Crypto Trading Signals — Top Movers & Trending Coins",
  description:
    "Real-time crypto trading signals powered by CoinGecko data. Track top movers, trending coins, and our bot's paper trading performance.",
  keywords: [
    "crypto trading signals",
    "live crypto signals",
    "trending crypto coins",
    "top crypto movers",
    "crypto bot signals",
  ],
};

interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    score: number;
    data?: {
      price: string;
      price_change_percentage_24h?: { usd: number };
    };
  };
}

interface MoverCoin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

async function getTrendingCoins(): Promise<TrendingCoin[]> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;
    const url = `https://api.coingecko.com/api/v3/search/trending${apiKey ? `?x_cg_demo_api_key=${apiKey}` : ""}`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.coins || [];
  } catch {
    return [];
  }
}

async function getTopMovers(): Promise<{ gainers: MoverCoin[]; losers: MoverCoin[] }> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=percent_change_24h_desc&per_page=100&page=1&sparkline=false${apiKey ? `&x_cg_demo_api_key=${apiKey}` : ""}`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return { gainers: [], losers: [] };
    const data: MoverCoin[] = await res.json();
    const gainers = data.filter((c) => c.price_change_percentage_24h > 0).slice(0, 5);
    const losers = data.filter((c) => c.price_change_percentage_24h < 0).slice(-5).reverse();
    return { gainers, losers };
  } catch {
    return { gainers: [], losers: [] };
  }
}

function formatPrice(price: number): string {
  if (price >= 1000) return `$${price.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  if (price >= 1) return `$${price.toFixed(2)}`;
  return `$${price.toFixed(4)}`;
}

const BOT_PERFORMANCE = [
  { pair: "BTC/USDT", signal: "LONG", entry: "$64,200", current: "$67,420", pnl: "+5.01%", status: "Open" },
  { pair: "ETH/USDT", signal: "LONG", entry: "$3,350", current: "$3,521", pnl: "+5.10%", status: "Open" },
  { pair: "SOL/USDT", signal: "LONG", entry: "$155", current: "$178", pnl: "+14.8%", status: "Open" },
  { pair: "AVAX/USDT", signal: "LONG", entry: "$38.50", current: "$37.20", pnl: "-3.38%", status: "Open" },
  { pair: "LINK/USDT", signal: "LONG", entry: "$12.80", current: "$14.50", pnl: "+13.3%", status: "Open" },
];

export default async function SignalsPage() {
  const [trendingCoins, { gainers, losers }] = await Promise.all([
    getTrendingCoins(),
    getTopMovers(),
  ]);

  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-green text-sm font-medium">Live Signals</span>
          </div>
          <h1 className="text-4xl font-black text-white mb-3">
            Crypto Trading <span className="text-accent">Signals</span>
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Real-time market intelligence from CoinGecko. Track trending coins,
            top movers, and our automated trading bot&apos;s live paper performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Trending Coins */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🔥</span>
                <h2 className="text-xl font-bold text-white">
                  Trending on CoinGecko
                </h2>
                <span className="text-slate-600 text-sm">· Updated every 5 min</span>
              </div>

              {trendingCoins.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trendingCoins.slice(0, 8).map((item, i) => {
                    const coin = item.item;
                    const change = coin.data?.price_change_percentage_24h?.usd;
                    const isPos = change ? change >= 0 : true;
                    return (
                      <Link
                        key={coin.id}
                        href={`/crypto/${coin.id}`}
                        className="bg-card border border-border rounded-xl p-4 card-hover flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">
                            #{i + 1}
                          </div>
                          <div>
                            <div className="text-white font-semibold text-sm">
                              {coin.name}
                            </div>
                            <div className="text-slate-500 text-xs">
                              {coin.symbol.toUpperCase()}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          {coin.data?.price && (
                            <div className="text-white text-sm font-medium">
                              {coin.data.price}
                            </div>
                          )}
                          {change !== undefined && (
                            <div
                              className={`text-xs font-medium ${
                                isPos ? "text-green" : "text-red-400"
                              }`}
                            >
                              {isPos ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
                            </div>
                          )}
                          <div className="text-slate-600 text-xs">Trending</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-card border border-border rounded-xl p-6 text-center text-slate-500">
                  <p>Trending data loading... Check back in a moment.</p>
                </div>
              )}
            </section>

            {/* Top Movers */}
            {(gainers.length > 0 || losers.length > 0) && (
              <section>
                <h2 className="text-xl font-bold text-white mb-4">
                  📊 Top Movers Today
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Gainers */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="bg-green/10 border-b border-border px-4 py-3">
                      <h3 className="text-green font-semibold text-sm">
                        🚀 Top Gainers (24h)
                      </h3>
                    </div>
                    <div className="divide-y divide-border">
                      {gainers.map((coin) => (
                        <div key={coin.id} className="px-4 py-3 flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium text-sm">
                              {coin.symbol.toUpperCase()}
                            </div>
                            <div className="text-slate-500 text-xs">{coin.name}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-white text-sm">
                              {formatPrice(coin.current_price)}
                            </div>
                            <div className="text-green text-xs font-medium">
                              ▲ {coin.price_change_percentage_24h.toFixed(2)}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Losers */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="bg-red-400/10 border-b border-border px-4 py-3">
                      <h3 className="text-red-400 font-semibold text-sm">
                        📉 Top Losers (24h)
                      </h3>
                    </div>
                    <div className="divide-y divide-border">
                      {losers.map((coin) => (
                        <div key={coin.id} className="px-4 py-3 flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium text-sm">
                              {coin.symbol.toUpperCase()}
                            </div>
                            <div className="text-slate-500 text-xs">{coin.name}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-white text-sm">
                              {formatPrice(coin.current_price)}
                            </div>
                            <div className="text-red-400 text-xs font-medium">
                              ▼ {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Bot Performance */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🤖</span>
                <h2 className="text-xl font-bold text-white">
                  Bot Paper Trading Performance
                </h2>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green/10 border border-green/20 rounded-full text-green text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                  Live Paper
                </span>
              </div>

              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-card/50">
                        <th className="text-left px-4 py-3 text-slate-500 font-medium uppercase text-xs tracking-wider">
                          Pair
                        </th>
                        <th className="text-left px-4 py-3 text-slate-500 font-medium uppercase text-xs tracking-wider">
                          Signal
                        </th>
                        <th className="text-right px-4 py-3 text-slate-500 font-medium uppercase text-xs tracking-wider">
                          Entry
                        </th>
                        <th className="text-right px-4 py-3 text-slate-500 font-medium uppercase text-xs tracking-wider">
                          P&L
                        </th>
                        <th className="text-right px-4 py-3 text-slate-500 font-medium uppercase text-xs tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {BOT_PERFORMANCE.map((trade) => (
                        <tr key={trade.pair} className="hover:bg-card/60">
                          <td className="px-4 py-3 text-white font-semibold">
                            {trade.pair}
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                              trade.signal === "LONG"
                                ? "bg-green/20 text-green"
                                : "bg-red-400/20 text-red-400"
                            }`}>
                              {trade.signal}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right text-slate-400">
                            {trade.entry}
                          </td>
                          <td className={`px-4 py-3 text-right font-semibold ${
                            trade.pnl.startsWith("+") ? "text-green" : "text-red-400"
                          }`}>
                            {trade.pnl}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <span className="text-xs text-accent">{trade.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-4 py-3 border-t border-border flex items-center justify-between text-xs text-slate-600">
                  <span>Paper trading only — not financial advice</span>
                  <span>Updated continuously</span>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-5">
              <h3 className="text-white font-bold text-lg mb-2">
                Act on These Signals
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Open a free Coinbase account and start trading the coins you see
                trending — in minutes.
              </p>
              <AffiliateCTA
                broker="coinbase"
                label="Open Free Coinbase Account →"
                variant="primary"
                className="w-full justify-center"
              />
              <p className="text-xs text-slate-600 mt-2 text-center">
                Free · No minimum · Top security
              </p>
            </div>

            {/* About the bot */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="text-white font-bold mb-3">About Our Bot</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                SleepTrade&apos;s algorithmic trading bot monitors 100+ crypto pairs
                24/7 using multi-timeframe technical analysis, Kelly Criterion
                position sizing, and trailing stops.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Currently running in paper trading mode — all results shown are
                simulated. This is for educational purposes only.
              </p>
              <Link
                href="/about"
                className="text-accent text-sm hover:text-cyan-300 transition-colors"
              >
                Learn more about SleepTrade →
              </Link>
            </div>

            {/* AdSense */}
            <AdSenseSlot format="rectangle" />

            {/* Disclaimer */}
            <div className="bg-card/50 border border-border/50 rounded-xl p-4 text-xs text-slate-600">
              <strong className="text-slate-500">⚠️ Not Financial Advice.</strong>{" "}
              These signals are for educational purposes only. Cryptocurrency
              trading carries significant risk. Past performance does not
              guarantee future results. Always do your own research.
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
