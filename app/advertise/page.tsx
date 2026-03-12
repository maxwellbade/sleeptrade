import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import AdSenseSlot from "@/components/AdSenseSlot";

export const metadata: Metadata = {
  title: "Advertise on SleepTrade — Reach Active Traders",
  description:
    "Advertise your crypto project, trading platform, or financial product to a growing audience of active traders and investors.",
};

export default function AdvertisePage() {
  return (
    <SiteLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-4">
            Advertise on <span className="text-accent">SleepTrade</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Reach a growing audience of active crypto and stock traders.
            Promote your brand with targeted advertising opportunities.
          </p>
        </div>

        {/* AdSense */}
        <AdSenseSlot format="horizontal" className="mb-12" />

        {/* Opportunities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Advertising Opportunities</h2>
          <ul className="space-y-4">
            <li className="bg-card border border-border rounded-2xl p-5">
              <h3 className="text-xl font-semibold text-white mb-2">Display Ads</h3>
              <p className="text-slate-400 leading-relaxed mb-3">
                Banner ads and native placements throughout the site. Target specific
                sections (crypto, stocks, signals) to reach your ideal audience.
              </p>
              <p className="text-sm text-slate-600">
                <strong className="text-white">Formats:</strong> 300x250, 728x90, 160x600
              </p>
            </li>

            <li className="bg-card border border-border rounded-2xl p-5">
              <h3 className="text-xl font-semibold text-white mb-2">Sponsored Content</h3>
              <p className="text-slate-400 leading-relaxed mb-3">
                Dedicated articles or sponsored sections covering your product or service.
                Written by our editorial team to maintain credibility and engagement.
              </p>
              <p className="text-sm text-slate-600">
                <strong className="text-white">Example:</strong> "5 Ways to Improve Your Trading with [Your Tool]"
              </p>
            </li>

            <li className="bg-card border border-border rounded-2xl p-5">
              <h3 className="text-xl font-semibold text-white mb-2">Newsletter Sponsorships</h3>
              <p className="text-slate-400 leading-relaxed mb-3">
                Exclusive sponsorships of our weekly newsletter, delivered to thousands
                of engaged traders and investors.
              </p>
              <p className="text-sm text-slate-600">
                <strong className="text-white">Includes:</strong> Banner ad, sponsored snippet, and featured promotion
              </p>
            </li>
          </ul>
        </div>

        {/* Audience */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Our Audience</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-4">
            SleepTrade attracts a highly engaged audience of:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-400 text-lg">
            <li>Active crypto traders (day traders, swing traders, algo traders)</li>
            <li>Stock market investors (beginners to advanced)</li>
            <li>Financial professionals and analysts</li>
            <li>Tech-savvy consumers interested in blockchain and fintech</li>
          </ul>
        </div>

        {/* Stats */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Key Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400">
            <div>
              <strong className="text-white">Monthly Pageviews:</strong> 50,000+
            </div>
            <div>
              <strong className="text-white">Email Subscribers:</strong> 5,000+
            </div>
            <div>
              <strong className="text-white">Average Session Duration:</strong> 3:45
            </div>
            <div>
              <strong className="text-white">Social Media Followers:</strong> 10,000+
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in Advertising?
          </h2>
          <p className="text-slate-400 mb-6">
            Contact us to discuss your advertising goals and receive a custom
            proposal.
          </p>
          <a
            href="mailto:advertise@sleeptrade.win"
            className="inline-flex items-center px-6 py-3 bg-accent text-bg font-bold rounded-xl hover:bg-cyan-400 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </SiteLayout>
  );
}
