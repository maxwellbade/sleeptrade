"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/compare", label: "Compare Brokers" },
  { href: "/crypto/bitcoin", label: "Crypto" },
  { href: "/stocks/best-online-brokers", label: "Stocks" },
  { href: "/signals", label: "Signals" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
              <span className="text-accent font-black text-sm">ST</span>
            </div>
            <span className="text-white font-bold text-lg">
              Sleep<span className="text-accent">Trade</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-card rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:block">
            <a
              href="#coinbase-affiliate"
              className="px-4 py-2 bg-accent text-bg font-semibold text-sm rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Start Trading
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm text-slate-400 hover:text-white hover:bg-card rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#coinbase-affiliate"
              className="block mt-2 mx-4 px-4 py-2 bg-accent text-bg font-semibold text-sm rounded-lg text-center"
            >
              Start Trading
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
