export const AFFILIATES = {
  coinbase: "#coinbase-affiliate",        // Max will update
  webull: "#webull-affiliate",            // Max will update
  kraken: "https://www.kraken.com/sign-up",
  moomoo: "https://j.moomoo.com/00f6bZ",
  interactiveBrokers: "https://www.interactivebrokers.com/referral",
} as const;

export type AffiliateKey = keyof typeof AFFILIATES;

export const AFFILIATE_LABELS: Record<AffiliateKey, string> = {
  coinbase: "Open Coinbase Account →",
  webull: "Open Webull Account →",
  kraken: "Open Kraken Account →",
  moomoo: "Open moomoo Account →",
  interactiveBrokers: "Open IBKR Account →",
};
