import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "Terms of Service — SleepTrade",
  description:
    "Read SleepTrade's Terms of Service. By using sleeptrade.win, you agree to these terms covering acceptable use, disclaimers, affiliate relationships, and limitations of liability.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "March 13, 2025";

export default function TermsPage() {
  return (
    <SiteLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-accent text-sm font-medium mb-6">
            📄 Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Intro box */}
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 mb-10">
          <p className="text-slate-300 text-sm leading-relaxed">
            Welcome to <strong className="text-white">SleepTrade</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operated at{" "}
            <span className="text-accent">sleeptrade.win</span>. By accessing or using this website, you agree
            to be bound by these Terms of Service. If you do not agree with any part of these terms,
            please do not use our site.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">

          {/* 1. Acceptance */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">1</span>
              Acceptance of Terms
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                By accessing <span className="text-slate-300">sleeptrade.win</span>, you confirm that you are at least 18 years old
                (or the age of majority in your jurisdiction), have read and understood these Terms,
                and agree to be legally bound by them.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Changes take effect immediately
                upon posting. Your continued use of the site after any modification constitutes your
                acceptance of the updated Terms.
              </p>
            </div>
          </section>

          {/* 2. Use of Service */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">2</span>
              Use of Service
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                SleepTrade provides a trading intelligence platform featuring live market data,
                educational content, broker comparisons, affiliate product recommendations, and
                automated trading signals. The service is provided for informational and
                educational purposes only.
              </p>
              <p>You agree <strong className="text-white">not</strong> to:</p>
              <ul className="space-y-1.5 pl-4">
                {[
                  "Use the site for any unlawful purpose or in violation of applicable regulations",
                  "Attempt to scrape, crawl, or harvest data from the site without written permission",
                  "Interfere with or disrupt the site's infrastructure or security mechanisms",
                  "Reproduce, distribute, or republish content without prior written consent",
                  "Impersonate SleepTrade or any person associated with the site",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                We reserve the right to suspend or terminate access to the site for any user who
                violates these Terms, at our sole discretion.
              </p>
            </div>
          </section>

          {/* 3. Not Financial Advice */}
          <section className="bg-red-950/30 border border-red-800/40 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-red-500/20 text-red-400 text-sm font-bold flex items-center justify-center flex-shrink-0">3</span>
              Not Financial Advice — Important Disclaimer
            </h2>
            <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
              <p className="font-semibold text-red-300 uppercase tracking-wide text-xs">
                ⚠️ Please read this section carefully
              </p>
              <p>
                <strong className="text-white">SleepTrade is not a registered investment advisor, broker-dealer,
                financial planner, or licensed financial professional.</strong> Nothing on this website
                constitutes financial, investment, legal, or tax advice. All content — including articles,
                broker comparisons, trading signals, market analysis, and any other material — is
                provided for <strong className="text-white">informational and educational purposes only</strong>.
              </p>
              <p>
                Trading and investing in financial markets, including cryptocurrencies and stocks,
                carries <strong className="text-white">substantial risk of loss</strong>. Past performance of any
                strategy, signal, or recommendation shown on this site does not guarantee future results.
                You may lose some or all of your invested capital.
              </p>
              <p>
                Always conduct your own due diligence and consult a qualified financial professional
                before making any investment decisions. SleepTrade is not responsible for any financial
                losses incurred as a result of using or relying on content from this site.
              </p>
            </div>
          </section>

          {/* 4. Affiliate Disclosure */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">4</span>
              Affiliate Disclosure
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                SleepTrade participates in affiliate marketing programs. This means we may earn a
                commission when you click on certain links on our site and complete a qualifying
                action (such as opening a brokerage account or making a purchase) — <strong className="text-white">at no
                additional cost to you</strong>.
              </p>
              <p>Our current affiliate relationships include, but may not be limited to:</p>
              <ul className="space-y-1.5 pl-4">
                {[
                  "Amazon Associates Program (for hardware wallets and trading peripherals)",
                  "Coinbase affiliate program",
                  "Robinhood affiliate program",
                  "Shopify affiliate program",
                  "Kraken and other cryptocurrency exchange programs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Affiliate relationships do not influence our editorial rankings, recommendations, or
                content. We only recommend platforms and products we believe provide genuine value
                to retail traders. All affiliate links are disclosed in accordance with the FTC&apos;s
                guidelines on endorsements and testimonials.
              </p>
              <p>
                SleepTrade is a participant in the Amazon Services LLC Associates Program, an
                affiliate advertising program designed to provide a means for sites to earn
                advertising fees by advertising and linking to Amazon.com. Our Amazon tag is{" "}
                <span className="text-accent font-mono">sleeptradewin-20</span>.
              </p>
            </div>
          </section>

          {/* 5. Intellectual Property */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">5</span>
              Intellectual Property
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                All content on sleeptrade.win — including text, graphics, logos, icons, images,
                and software — is the property of SleepTrade or its content suppliers and is
                protected by applicable intellectual property laws.
              </p>
              <p>
                You may view and print content from this site for personal, non-commercial use only.
                You may not reproduce, modify, distribute, transmit, republish, or create derivative
                works from any content without our express written permission.
              </p>
            </div>
          </section>

          {/* 6. Third-Party Links */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">6</span>
              Third-Party Links &amp; Services
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                Our site contains links to third-party websites and services, including brokerages,
                exchanges, and product retailers. These links are provided for your convenience.
                SleepTrade has no control over the content, policies, or practices of third-party
                sites and accepts no responsibility for them.
              </p>
              <p>
                Visiting a third-party site through a link on sleeptrade.win is at your own risk.
                We encourage you to review the privacy policy and terms of service of any third-party
                site you visit.
              </p>
            </div>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">7</span>
              Limitation of Liability
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                To the fullest extent permitted by applicable law, SleepTrade, its operators,
                affiliates, directors, employees, and agents shall not be liable for any direct,
                indirect, incidental, special, consequential, punitive, or exemplary damages,
                including but not limited to:
              </p>
              <ul className="space-y-1.5 pl-4">
                {[
                  "Financial losses from trading decisions made in reliance on our content",
                  "Loss of data, profits, goodwill, or business opportunities",
                  "Damages resulting from unauthorized access to or alteration of your data",
                  "Damages resulting from interruptions or cessation of the service",
                  "Any errors, inaccuracies, or omissions in content on the site",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-slate-500 mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties
                of any kind, either express or implied, including but not limited to merchantability,
                fitness for a particular purpose, or non-infringement.
              </p>
              <p>
                In jurisdictions that do not allow the exclusion or limitation of incidental or
                consequential damages, our liability is limited to the maximum extent permitted by law.
              </p>
            </div>
          </section>

          {/* 8. Governing Law */}
          <section className="bg-card border border-border rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">8</span>
              Governing Law
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                United States, without regard to its conflict of law provisions. Any disputes arising
                under these Terms shall be subject to the exclusive jurisdiction of the courts located
                in the United States.
              </p>
            </div>
          </section>

          {/* 9. Contact */}
          <section className="bg-accent/5 border border-accent/20 rounded-2xl p-7">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-accent/20 text-accent text-sm font-bold flex items-center justify-center flex-shrink-0">9</span>
              Contact Us
            </h2>
            <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
              <p>
                If you have any questions about these Terms of Service, please contact us:
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
          These Terms of Service were last updated on {LAST_UPDATED}. Please check this page
          periodically for updates.
        </p>

      </div>
    </SiteLayout>
  );
}
