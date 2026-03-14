import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — SleepTrade",
  description:
    "SleepTrade's Privacy Policy explains what data we collect (minimal analytics only), how we use cookies, and your rights as a visitor.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "March 13, 2025";

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-accent text-sm font-medium mb-6">
            🔒 Privacy
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Intro box */}
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 mb-10">
          <p className="text-slate-300 text-sm leading-relaxed">
            At <strong className="text-white">SleepTrade</strong>, we take your privacy seriously. This Privacy Policy explains
            how we collect, use, and protect your information when you visit{" "}
            <span className="text-accent">sleeptrade.win</span>. We keep it simple: we collect minimal data,
            we don&apos;t sell it, and we&apos;re transparent about how it&apos;s used.
          </p>
        </div>

        {/* Quick summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "📊", title: "Minimal Data", desc: "We only collect anonymous analytics — no accounts, no personal profiles." },
            { icon: "🚫", title: "Never Sold", desc: "Your data is never sold or traded to third parties. Period." },
            { icon: "✉️", title: "You're in Control", desc: "You can opt out of analytics at any time via your browser settings." },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-8">

          {/* 1. Who We Are */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              Who We Are
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                SleepTrade is a trading intelligence website operated at{" "}
                <span className="text-slate-300">sleeptrade.win</span>. We are an independent media
                site — not a brokerage, exchange, or financial services firm. If you have any
                privacy-related questions, contact us at{" "}
                <a
                  href="mailto:sleeptradewin@gmail.com"
                  className="text-accent hover:text-cyan-300 transition-colors"
                >
                  sleeptradewin@gmail.com
                </a>.
              </p>
            </div>
          </section>

          {/* 2. What Data We Collect */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              What Data We Collect
            </h2>
            <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
              <div>
                <h3 className="text-white font-semibold mb-2">Analytics Data (Automatic)</h3>
                <p className="mb-2">
                  We use analytics tools to understand how visitors use our site. This data is
                  <strong className="text-white"> anonymized and aggregated</strong> — it cannot be used to
                  identify you personally. It may include:
                </p>
                <ul className="space-y-1.5 pl-4">
                  {[
                    "Pages visited and time spent on each page",
                    "Referring website or search engine",
                    "General geographic region (country/region level only, not precise location)",
                    "Browser type and operating system",
                    "Device type (desktop, mobile, tablet)",
                    "Whether you clicked an outbound link",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Data We Do NOT Collect</h3>
                <ul className="space-y-1.5 pl-4">
                  {[
                    "Your name, email address, or contact information (we have no user accounts)",
                    "Financial information or payment data",
                    "Precise location or GPS coordinates",
                    "Social security numbers or government IDs",
                    "Any biometric or sensitive personal data",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Voluntarily Provided Data</h3>
                <p>
                  If you choose to contact us via email at{" "}
                  <a
                    href="mailto:sleeptradewin@gmail.com"
                    className="text-accent hover:text-cyan-300 transition-colors"
                  >
                    sleeptradewin@gmail.com
                  </a>
                  , we will receive any information you include in your message (such as your name
                  and email address). We use this solely to respond to your inquiry and do not add
                  you to any mailing lists or databases.
                </p>
              </div>
            </div>
          </section>

          {/* 3. How We Use Data */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              How We Use Your Data
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>We use the data we collect solely to:</p>
              <ul className="space-y-1.5 pl-4">
                {[
                  "Understand which pages and content are most valuable to our visitors",
                  "Improve site navigation, performance, and content quality",
                  "Identify and fix technical issues",
                  "Measure the effectiveness of our content and affiliate partnerships",
                  "Respond to contact inquiries",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                We do not use your data for advertising targeting, behavioral profiling, or any
                purpose beyond operating and improving the site.
              </p>
            </div>
          </section>

          {/* 4. Cookies */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
              Cookies &amp; Tracking Technologies
            </h2>
            <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
              <p>
                We use cookies and similar technologies to operate the site and collect analytics.
                Here&apos;s a plain-language breakdown of what&apos;s used:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left text-slate-300 pb-3 pr-4 font-semibold">Type</th>
                      <th className="text-left text-slate-300 pb-3 pr-4 font-semibold">Purpose</th>
                      <th className="text-left text-slate-300 pb-3 font-semibold">Can Opt Out?</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 text-white font-medium">Analytics cookies</td>
                      <td className="py-3 pr-4">Track anonymized page visits and behavior</td>
                      <td className="py-3 text-green-400">Yes — browser settings</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4 text-white font-medium">Affiliate cookies</td>
                      <td className="py-3 pr-4">Track referral clicks to broker/exchange partners</td>
                      <td className="py-3 text-green-400">Yes — browser settings</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-white font-medium">Ad cookies</td>
                      <td className="py-3 pr-4">Served by Google AdSense (if applicable)</td>
                      <td className="py-3 text-green-400">Yes — Google opt-out</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                You can control or disable cookies through your browser settings at any time.
                Note that disabling cookies may affect some site functionality. You can also opt
                out of Google Analytics tracking by using the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-cyan-300 transition-colors"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </div>
          </section>

          {/* 5. Third-Party Services */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
              Third-Party Services
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                Our site uses a small number of trusted third-party services. Each has its own
                privacy policy governing how data is handled:
              </p>
              <ul className="space-y-3 pl-4">
                {[
                  {
                    name: "Vercel",
                    desc: "Our hosting provider. May log request metadata (IP, user agent) for security and performance. See: vercel.com/legal/privacy-policy",
                  },
                  {
                    name: "Google Analytics",
                    desc: "Analytics platform. Anonymized usage statistics. See: policies.google.com/privacy",
                  },
                  {
                    name: "Google AdSense",
                    desc: "Advertising partner (if active). May use cookies for ad delivery. See: policies.google.com/privacy",
                  },
                  {
                    name: "CoinGecko API",
                    desc: "Live crypto price data. Requests are server-side — no visitor data is shared. See: coingecko.com/en/privacy",
                  },
                  {
                    name: "Amazon Associates",
                    desc: "Affiliate program for product links. May set cookies to track referrals. See: amazon.com/privacy",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="text-accent mt-0.5 flex-shrink-0 font-mono">→</span>
                    <span>
                      <strong className="text-white">{item.name}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                When you click an affiliate link and visit a third-party site, that site&apos;s
                own privacy policy applies. SleepTrade is not responsible for the privacy
                practices of external websites.
              </p>
            </div>
          </section>

          {/* 6. Affiliate Disclosure */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">6</span>
              Affiliate Disclosure &amp; Data Sharing
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                SleepTrade participates in affiliate programs. When you click an affiliate link,
                a tracking cookie may be set by the affiliate partner (such as Amazon, Coinbase,
                or Robinhood) to attribute any resulting purchase or sign-up to us.
              </p>
              <p>
                <strong className="text-white">We do not share any personally identifiable information with our
                affiliate partners.</strong> The affiliate tracking is handled entirely by the
                partner&apos;s system using anonymous referral IDs. We receive only aggregate
                commission reports (e.g., &quot;3 sign-ups this week&quot;) — never your personal data.
              </p>
              <p>
                We are transparent about these relationships. All affiliate links are disclosed
                per FTC guidelines. Our editorial recommendations are independent of our affiliate
                arrangements.
              </p>
            </div>
          </section>

          {/* 7. Data Retention */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">7</span>
              Data Retention &amp; Security
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                Since we collect no personal accounts or user profiles, there is no personal data
                stored on SleepTrade&apos;s servers. Anonymized analytics data is retained in accordance
                with our analytics provider&apos;s standard retention periods (typically 14–26 months,
                then automatically deleted).
              </p>
              <p>
                If you contact us via email, we retain that correspondence only as long as necessary
                to respond to your inquiry, and no longer.
              </p>
              <p>
                We implement reasonable technical measures to protect data in transit (HTTPS/TLS
                encryption) and use reputable, security-audited hosting infrastructure via Vercel.
              </p>
            </div>
          </section>

          {/* 8. Your Rights */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">8</span>
              Your Rights
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                Depending on your location, you may have certain rights regarding your data under
                laws such as GDPR (EU/UK), CCPA (California), or similar regulations. Since we
                do not collect personal data beyond anonymized analytics, most of these rights
                are automatically satisfied — but you may:
              </p>
              <ul className="space-y-1.5 pl-4">
                {[
                  "Opt out of analytics by disabling cookies in your browser",
                  "Request access to any personal data we hold about you",
                  "Request deletion of any personal data you submitted (e.g., via email contact)",
                  "Lodge a complaint with your local data protection authority",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:sleeptradewin@gmail.com"
                  className="text-accent hover:text-cyan-300 transition-colors"
                >
                  sleeptradewin@gmail.com
                </a>
                . We will respond within 30 days.
              </p>
            </div>
          </section>

          {/* 9. Children's Privacy */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">9</span>
              Children&apos;s Privacy
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                SleepTrade is not intended for children under 13 years of age. We do not knowingly
                collect any personal information from children. If you believe a child has provided
                us with personal information, please contact us immediately at{" "}
                <a
                  href="mailto:sleeptradewin@gmail.com"
                  className="text-accent hover:text-cyan-300 transition-colors"
                >
                  sleeptradewin@gmail.com
                </a>
                .
              </p>
            </div>
          </section>

          {/* 10. Changes */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">10</span>
              Changes to This Policy
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, technology, legal requirements, or for other operational reasons.
                When we update it, we&apos;ll change the &quot;Last updated&quot; date at the top of this page.
                We encourage you to review this policy periodically.
              </p>
            </div>
          </section>

          {/* 11. Contact */}
          <section className="bg-accent/5 border border-accent/20 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">11</span>
              Contact Us
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                Questions or concerns about this Privacy Policy? We&apos;re happy to help.
              </p>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-white font-medium mb-1">SleepTrade</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:sleeptradewin@gmail.com"
                    className="text-accent hover:text-cyan-300 transition-colors"
                  >
                    sleeptradewin@gmail.com
                  </a>
                </p>
                <p className="mt-1">
                  Website:{" "}
                  <a
                    href="https://sleeptrade.win"
                    className="text-accent hover:text-cyan-300 transition-colors"
                  >
                    sleeptrade.win
                  </a>
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer note */}
        <p className="text-slate-600 text-xs text-center mt-10">
          This Privacy Policy was last updated on {LAST_UPDATED}. Please check this page
          periodically for updates.
        </p>

      </div>
    </SiteLayout>
  );
}
