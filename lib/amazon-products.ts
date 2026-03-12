// Amazon affiliate products — crypto & trading hardware
// Update AMAZON_TAG with your Associates tracking ID (e.g. "sleeptrade-20")
// All links auto-inject the tag via buildAmazonUrl()

export const AMAZON_TAG = "sleeptrade-20"; // ← UPDATE with your real tag

export function buildAmazonUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}&linkCode=ogi&th=1&psc=1`;
}

export interface AmazonProduct {
  asin: string;
  name: string;
  category: string;
  description: string;
  price: string;       // display price — update periodically
  rating: number;      // out of 5
  reviews: string;     // e.g. "12,400+"
  badge?: string;      // e.g. "Best Seller", "Editor's Pick"
  emoji: string;
}

export const AMAZON_PRODUCTS: AmazonProduct[] = [
  // ── Hardware Wallets ──────────────────────────────────────────
  {
    asin: "B09MWRM5BR",
    name: "Ledger Nano X",
    category: "Hardware Wallet",
    description: "The gold standard in crypto cold storage. Bluetooth-enabled, supports 5,500+ coins, mobile app. Best for serious holders.",
    price: "$149.99",
    rating: 4.7,
    reviews: "24,000+",
    badge: "Best Seller",
    emoji: "🔐",
  },
  {
    asin: "B09MWRM5CD",
    name: "Ledger Nano S Plus",
    category: "Hardware Wallet",
    description: "Ledger's affordable cold wallet. Supports 5,500+ coins and NFTs. Perfect for beginners who want real security.",
    price: "$79.99",
    rating: 4.6,
    reviews: "18,500+",
    badge: "Editor's Pick",
    emoji: "🔒",
  },
  {
    asin: "B0CRSTBJN8",
    name: "Trezor Model T",
    category: "Hardware Wallet",
    description: "Open-source hardware wallet with touchscreen. The most trusted name in cold storage alongside Ledger.",
    price: "$219.00",
    rating: 4.5,
    reviews: "8,200+",
    emoji: "🛡️",
  },
  {
    asin: "B07K3BHGL3",
    name: "Trezor Model One",
    category: "Hardware Wallet",
    description: "The original hardware wallet. Simple, battle-tested, open source. Supports BTC, ETH, LTC, XRP and 1,000+ more.",
    price: "$49.00",
    rating: 4.4,
    reviews: "15,600+",
    emoji: "🗝️",
  },
  // ── Crypto Mining / Network Devices ──────────────────────────
  {
    asin: "B08X18XFPQ",
    name: "Helium HNT Hotspot Miner",
    category: "Crypto Hardware",
    description: "Mine HNT tokens by providing wireless network coverage. Plug in, earn crypto passively. No technical skills needed.",
    price: "$299.00",
    rating: 4.0,
    reviews: "3,400+",
    badge: "Passive Income",
    emoji: "📡",
  },
  // ── Books ─────────────────────────────────────────────────────
  {
    asin: "1119606179",
    name: "Cryptoassets: The Innovative Investor's Guide",
    category: "Books",
    description: "Chris Burniske & Jack Tatar's definitive guide to investing in crypto. Covers valuation frameworks, portfolio construction, and risk management.",
    price: "$24.99",
    rating: 4.5,
    reviews: "2,100+",
    badge: "Must Read",
    emoji: "📚",
  },
  {
    asin: "0593330447",
    name: "The Bitcoin Standard",
    category: "Books",
    description: "Saifedean Ammous makes the case for Bitcoin as the future of sound money. Essential reading for understanding the macro thesis.",
    price: "$18.99",
    rating: 4.7,
    reviews: "8,900+",
    emoji: "₿",
  },
  {
    asin: "1119552699",
    name: "Technical Analysis of the Financial Markets",
    category: "Books",
    description: "John Murphy's classic — the bible of technical analysis. Candlesticks, chart patterns, indicators. Required reading for any serious trader.",
    price: "$49.99",
    rating: 4.7,
    reviews: "5,300+",
    badge: "Trading Bible",
    emoji: "📊",
  },
  // ── Trading Tech ──────────────────────────────────────────────
  {
    asin: "B09V3KXJPB",
    name: "ASUS 27\" 4K Monitor — Trading Setup",
    category: "Trading Tech",
    description: "Ultra-sharp 4K display for multi-chart trading setups. IPS panel, 144Hz, USB-C. See more of your charts without squinting.",
    price: "$399.99",
    rating: 4.6,
    reviews: "11,200+",
    emoji: "🖥️",
  },
  {
    asin: "B07FZ8S74R",
    name: "Raspberry Pi 4 — Run a Crypto Node",
    category: "Crypto Hardware",
    description: "Run a Bitcoin or Ethereum node at home. Validate transactions, increase network security, and deepen your understanding of how crypto actually works.",
    price: "$89.99",
    rating: 4.6,
    reviews: "22,000+",
    badge: "Tech Pick",
    emoji: "🤖",
  },
  // ── Accessories ───────────────────────────────────────────────
  {
    asin: "B08N5WRWNW",
    name: "Cryptosteel Capsule — Seed Phrase Backup",
    category: "Security",
    description: "Store your wallet seed phrase on fireproof, waterproof stainless steel. Survives fires up to 1400°C. Never lose your crypto keys.",
    price: "$89.00",
    rating: 4.5,
    reviews: "1,800+",
    badge: "Essential Security",
    emoji: "🔥",
  },
  {
    asin: "B00A17B1JO",
    name: "Faraday Bag — Signal Blocking Wallet Pouch",
    category: "Security",
    description: "Block RFID/NFC signals from your hardware wallet and cards. Prevents wireless theft and unauthorized scanning.",
    price: "$19.99",
    rating: 4.4,
    reviews: "6,700+",
    emoji: "🛡️",
  },
];

// Group products by category for display
export const PRODUCT_CATEGORIES = [
  "Hardware Wallet",
  "Crypto Hardware",
  "Books",
  "Trading Tech",
  "Security",
] as const;

export type ProductCategory = typeof PRODUCT_CATEGORIES[number];

export function getProductsByCategory(category: ProductCategory): AmazonProduct[] {
  return AMAZON_PRODUCTS.filter(p => p.category === category);
}
