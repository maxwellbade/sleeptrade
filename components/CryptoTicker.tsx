"use client";

import { useEffect, useState } from "react";

interface CoinPrice {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const FALLBACK_DATA: CoinPrice[] = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin", current_price: 67420, price_change_percentage_24h: 2.34 },
  { id: "ethereum", symbol: "ETH", name: "Ethereum", current_price: 3521, price_change_percentage_24h: 1.89 },
  { id: "solana", symbol: "SOL", name: "Solana", current_price: 178, price_change_percentage_24h: 4.21 },
  { id: "ripple", symbol: "XRP", name: "XRP", current_price: 0.58, price_change_percentage_24h: -1.12 },
  { id: "dogecoin", symbol: "DOGE", name: "Dogecoin", current_price: 0.142, price_change_percentage_24h: 3.45 },
  { id: "cardano", symbol: "ADA", name: "Cardano", current_price: 0.48, price_change_percentage_24h: 0.89 },
  { id: "avalanche-2", symbol: "AVAX", name: "Avalanche", current_price: 37.2, price_change_percentage_24h: 2.11 },
  { id: "chainlink", symbol: "LINK", name: "Chainlink", current_price: 14.5, price_change_percentage_24h: 1.67 },
  { id: "polkadot", symbol: "DOT", name: "Polkadot", current_price: 7.8, price_change_percentage_24h: -0.54 },
  { id: "near", symbol: "NEAR", name: "NEAR", current_price: 6.12, price_change_percentage_24h: 3.22 },
];

function formatPrice(price: number): string {
  if (price >= 1000) return `$${price.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  if (price >= 1) return `$${price.toFixed(2)}`;
  return `$${price.toFixed(4)}`;
}

export default function CryptoTicker() {
  const [coins, setCoins] = useState<CoinPrice[]>(FALLBACK_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const ids = "bitcoin,ethereum,solana,ripple,dogecoin,cardano,avalanche-2,chainlink,polkadot,near";
        const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h${apiKey ? `&x_cg_demo_api_key=${apiKey}` : ""}`;
        
        const res = await fetch(url, { next: { revalidate: 60 } });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setCoins(data);
          }
        }
      } catch {
        // Use fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const tickerItems = [...coins, ...coins]; // duplicate for seamless loop

  return (
    <div className="bg-card border-b border-border overflow-hidden">
      <div className="flex items-center">
        {/* Label */}
        <div className="flex-shrink-0 px-4 py-2.5 bg-accent text-bg text-xs font-bold uppercase tracking-wider">
          LIVE
        </div>

        {/* Ticker */}
        <div className="flex-1 overflow-hidden">
          <div className="ticker-track py-2.5">
            {tickerItems.map((coin, i) => {
              const isPositive = coin.price_change_percentage_24h >= 0;
              return (
                <span key={`${coin.id}-${i}`} className="flex items-center px-6 gap-2 whitespace-nowrap">
                  <span className="text-white font-semibold text-sm">{coin.symbol.toUpperCase()}</span>
                  <span className="text-slate-300 text-sm">{formatPrice(coin.current_price)}</span>
                  <span
                    className={`text-xs font-medium ${isPositive ? "text-green" : "text-red"}`}
                  >
                    {isPositive ? "▲" : "▼"} {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                  </span>
                  <span className="text-slate-700">|</span>
                </span>
              );
            })}
          </div>
        </div>

        {loading && (
          <div className="flex-shrink-0 px-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
