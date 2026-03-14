import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                <span className="text-accent font-black text-sm">ST</span>
              </div>
              <span className="text-white font-bold text-lg">
                Sleep<span className="text-accent">Trade</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Your trading intelligence hub. Live crypto prices, AI analysis, broker comparisons, and trading signals — all in one place.
            </p>
            <p className="mt-4 text-xs text-slate-600">
              © {new Date().getFullYear()} SleepTrade. All rights reserved.
            </p>
          </div>

          {/* Crypto */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Crypto
            </h3>
            <ul className="space-y-2">
              {["bitcoin", "ethereum", "solana", "xrp", "dogecoin"].map((coin) => (
                <li key={coin}>
                  <Link
                    href={`/crypto/${coin}`}
                    className="text-slate-500 hover:text-accent text-sm transition-colors capitalize"
                  >
                    {coin === "xrp" ? "XRP" : coin.charAt(0).toUpperCase() + coin.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/compare" className="text-slate-500 hover:text-accent text-sm transition-colors">
                  Compare Brokers
                </Link>
              </li>
              <li>
                <Link href="/signals" className="text-slate-500 hover:text-accent text-sm transition-colors">
                  Trading Signals
                </Link>
              </li>
              <li>
                <Link href="/stocks/best-online-brokers" className="text-slate-500 hover:text-accent text-sm transition-colors">
                  Stock Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-500 hover:text-accent text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="text-slate-500 hover:text-accent text-sm transition-colors">
                  Advertise
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-500 hover:text-accent text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-500 hover:text-accent text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-500">Disclaimer:</strong> The information on SleepTrade is for educational and informational purposes only and should not be construed as financial, investment, or trading advice. Cryptocurrency and stock investments carry significant risk including the possible loss of principal. Past performance is not indicative of future results. Always do your own research and consult with a qualified financial advisor before making investment decisions. SleepTrade may earn commissions from affiliate links on this site.
          </p>
        </div>
      </div>
    </footer>
  );
}
