export const AFFILIATES = {
  coinbase: "#coinbase-affiliate",        // ← Max: update with Impact link when approved
  // webull removed — not available in US
  robinhood: "#robinhood-affiliate",      // ← Max: update with Impact link when approved
  kraken: "https://www.kraken.com/sign-up?referral=affiliate", // ← Max: update with Impact link when approved
  moomoo: "https://j.moomoo.com/00f6bZ",
  interactiveBrokers: "https://www.interactivebrokers.com/referral",
  shopify: "https://shopify.pxf.io/WOqBLO",
} as const;

export type AffiliateKey = keyof typeof AFFILIATES;

export const AFFILIATE_LABELS: Record<AffiliateKey, string> = {
  coinbase: "Open Coinbase Account →",
  
  robinhood: "Open Robinhood Account →",
  kraken: "Open Kraken Account →",
  moomoo: "Open moomoo Account →",
  interactiveBrokers: "Open IBKR Account →",
  shopify: "Start Free Trial →",
};

// Commission reference (for internal tracking)
// coinbase:  50% of trading fees, first 3 months (Impact)
// robinhood: $20 per funded account (Impact)
// robinhood: $20 per funded account, $5 per lead (Impact)
// kraken:    20% lifetime fees, up to $1,000/referral (Impact)
// moomoo:    varies by promotion
