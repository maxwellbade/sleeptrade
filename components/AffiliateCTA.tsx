import { AFFILIATES, AffiliateKey } from "@/lib/affiliates";

interface AffiliateCTAProps {
  broker: AffiliateKey;
  label?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const variantClasses = {
  primary: "bg-accent text-bg hover:bg-cyan-400 font-semibold",
  secondary: "bg-green/20 text-green border border-green/30 hover:bg-green/30 font-semibold",
  outline: "bg-transparent text-accent border border-accent/40 hover:bg-accent/10 font-medium",
};

const defaultLabels: Record<AffiliateKey, string> = {
  coinbase: "Open Coinbase Account →",
  webull: "Open Webull Account →",
  robinhood: "Open Robinhood Account →",
  kraken: "Open Kraken Account →",
  moomoo: "Open moomoo Account →",
  interactiveBrokers: "Open IBKR Account →",
};

export default function AffiliateCTA({
  broker,
  label,
  variant = "primary",
  className = "",
}: AffiliateCTAProps) {
  const href = AFFILIATES[broker];
  const text = label || defaultLabels[broker];

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer sponsored" : undefined}
      className={`inline-flex items-center px-5 py-2.5 rounded-lg text-sm transition-all ${variantClasses[variant]} ${className}`}
    >
      {text}
    </a>
  );
}
