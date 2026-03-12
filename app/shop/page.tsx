import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import { AMAZON_PRODUCTS, buildAmazonUrl, PRODUCT_CATEGORIES, getProductsByCategory } from "@/lib/amazon-products";

export const metadata: Metadata = {
  title: "Best Crypto Hardware & Trading Gear — SleepTrade Shop",
  description: "Top-rated crypto hardware wallets, trading books, and tech gear. Ledger, Trezor, and more — hand-picked by our trading team.",
  keywords: ["ledger nano x","trezor hardware wallet","best crypto wallet","crypto hardware","trading books"],
};

function ProductCard({ product }: { product: typeof AMAZON_PRODUCTS[number] }) {
  const url = buildAmazonUrl(product.asin);
  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex flex-col hover:border-accent/40 transition-all hover:-translate-y-0.5 group">
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{product.emoji}</span>
        {product.badge && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">{product.badge}</span>
        )}
      </div>
      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{product.category}</div>
      <h3 className="text-white font-bold text-base mb-2 group-hover:text-accent transition-colors leading-snug">{product.name}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>
      <div className="flex items-center gap-1 mb-4">
        {[1,2,3,4,5].map(s => (
          <svg key={s} className={`w-3 h-3 ${s <= Math.round(product.rating) ? "text-yellow-400" : "text-slate-700"}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
        <span className="text-slate-500 text-xs ml-1">{product.rating} · {product.reviews} reviews</span>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-white font-bold text-lg">{product.price}</span>
        <a href={url} target="_blank" rel="noopener noreferrer sponsored"
          className="px-4 py-2 bg-yellow-400 text-slate-900 font-bold text-sm rounded-lg hover:bg-yellow-300 transition-all">
          View on Amazon →
        </a>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-white mb-3">Crypto <span className="text-accent">Gear & Resources</span></h1>
          <p className="text-slate-400 max-w-2xl">Hand-picked hardware wallets, trading books, and tech gear. Everything a serious crypto trader needs.</p>
          <p className="text-xs text-slate-600 mt-2">As an Amazon Associate, SleepTrade earns from qualifying purchases. Prices subject to change.</p>
        </div>

        {PRODUCT_CATEGORIES.map(category => {
          const products = getProductsByCategory(category);
          if (!products.length) return null;
          return (
            <section key={category} className="mb-14">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full inline-block" />
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {products.map(product => <ProductCard key={product.asin} product={product} />)}
              </div>
            </section>
          );
        })}

        <div className="mt-8 p-4 bg-card border border-border rounded-xl text-xs text-slate-600">
          <strong className="text-slate-500">Amazon Affiliate Disclosure:</strong> SleepTrade participates in the Amazon Services LLC Associates Program. As an Amazon Associate we earn from qualifying purchases at no extra cost to you.
        </div>
      </div>
    </SiteLayout>
  );
}
