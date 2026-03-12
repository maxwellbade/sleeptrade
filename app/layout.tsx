import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SleepTrade — Your Money Works While You Sleep",
    template: "%s | SleepTrade",
  },
  description:
    "SleepTrade is your trading intelligence hub — live crypto prices, AI analysis, broker comparisons, and trading signals. Start trading smarter today.",
  keywords: [
    "crypto trading",
    "stock trading",
    "best crypto exchange",
    "buy bitcoin USA",
    "best stock broker beginners",
    "crypto trading signals",
    "trading intelligence",
  ],
  authors: [{ name: "SleepTrade" }],
  creator: "SleepTrade",
  publisher: "SleepTrade",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sleeptrade.win"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sleeptrade.win",
    siteName: "SleepTrade",
    title: "SleepTrade — Your Money Works While You Sleep",
    description:
      "Live crypto prices, AI trading analysis, broker comparisons, and signals. Your trading intelligence hub.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SleepTrade — Trading Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SleepTrade — Your Money Works While You Sleep",
    description: "Live crypto prices, AI analysis, broker comparisons, and trading signals.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "_0VNNf7WNsI6oZc-HPO2DOO2fqs9aRGsq1xewVRcK_E",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-slate-200 font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
