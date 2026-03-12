"""
SleepTrade Content Expansion Engine
Generates new coin + topic pages and pushes to GitHub automatically.
Run via cron every few hours.
"""

import json
import subprocess
import time
import requests
from pathlib import Path
from datetime import datetime, timezone

BASE_DIR = Path(__file__).parent.parent
COINS_FILE = BASE_DIR / "lib" / "coins.ts"
STOCKS_FILE = BASE_DIR / "lib" / "stocks.ts"

# ── All coins to eventually have pages for ────────────────────────────────────
ALL_COINS = [
    # Tier 1 — already built
    "bitcoin", "ethereum", "solana", "xrp", "dogecoin",
    "cardano", "avalanche-2", "chainlink", "polkadot", "near",
    # Tier 2 — add next
    "litecoin", "stellar", "uniswap", "aave", "cosmos",
    "algorand", "vechain", "tron", "filecoin", "hedera-hashgraph",
    "internet-computer", "theta-token", "elrond-erd-2", "flow",
    "axie-infinity", "the-sandbox", "decentraland", "enjincoin",
    "gala", "immutable-x",
    # Tier 3 — meme/gems
    "shiba-inu", "pepe", "bonk", "dogwifcoin", "floki",
    "brett", "popcat", "neiro", "turbo", "mog-coin",
    # Tier 4 — DeFi
    "maker", "compound-governance-token", "curve-dao-token",
    "yearn-finance", "synthetix-network-token", "1inch",
    "balancer", "sushi", "pancakeswap-token",
    # Tier 5 — L2s
    "matic-network", "arbitrum", "optimism", "starknet",
    "base", "zksync",
]

ALL_STOCK_TOPICS = [
    # Already built
    "best-online-brokers", "how-to-buy-stocks", "day-trading-guide",
    "stock-market-beginners", "options-trading-basics",
    # Add next
    "best-dividend-stocks", "how-to-invest-1000-dollars",
    "index-fund-investing", "etf-guide-beginners",
    "dollar-cost-averaging", "how-to-read-stock-charts",
    "swing-trading-strategies", "growth-vs-value-stocks",
    "how-to-short-stocks", "best-penny-stocks-2026",
    "stock-market-hours", "pre-market-trading-guide",
    "roth-ira-vs-401k", "tax-loss-harvesting",
    "margin-trading-explained", "how-to-buy-etfs",
    "best-growth-stocks-2026", "ai-stocks-to-watch",
    "semiconductor-stocks-guide", "how-to-invest-in-sp500",
    "robinhood-vs-webull", "coinbase-vs-kraken",
    "best-crypto-wallets-2026", "how-to-buy-xrp",
    "how-to-buy-solana", "how-to-buy-dogecoin",
    "xrp-price-prediction-2026", "solana-price-prediction",
    "ethereum-price-prediction", "bitcoin-price-prediction",
    "is-xrp-a-good-investment", "is-solana-a-good-investment",
    "crypto-tax-guide-us", "best-crypto-exchanges-us",
]

def get_current_coins() -> list:
    """Read which coins already have pages."""
    try:
        content = COINS_FILE.read_text()
        import re
        return re.findall(r'"([a-z0-9-]+)"', content)
    except:
        return []

def get_current_topics() -> list:
    """Read which stock topics already have pages."""
    try:
        content = STOCKS_FILE.read_text()
        import re
        return re.findall(r'"([a-z0-9-]+)"', content)
    except:
        return []

def get_coin_data(coin_id: str) -> dict:
    """Fetch live data for a coin from CoinGecko."""
    try:
        r = requests.get(
            f"https://api.coingecko.com/api/v3/coins/{coin_id}",
            params={"localization": "false", "tickers": "false", "market_data": "true"},
            headers={"x-cg-demo-api-key": "CG-PrTf9imPQL1DTL3pSYvtUPWt"},
            timeout=10
        )
        if r.status_code == 200:
            return r.json()
    except:
        pass
    return {}

def add_coin(coin_id: str) -> bool:
    """Add a new coin to the coins.ts file."""
    content = COINS_FILE.read_text()
    # Find the end of the COINS array
    if coin_id in content:
        print(f"  {coin_id} already exists, skipping")
        return False

    # Get coin data to enrich the entry
    data = get_coin_data(coin_id)
    name = data.get("name", coin_id.replace("-", " ").title())
    symbol = data.get("symbol", "???").upper()
    price = data.get("market_data", {}).get("current_price", {}).get("usd", 0)
    chg = data.get("market_data", {}).get("price_change_percentage_24h", 0)
    mcap = data.get("market_data", {}).get("market_cap", {}).get("usd", 0)
    desc = (data.get("description", {}).get("en", "") or "")[:200]

    new_entry = f'''  {{
    id: "{coin_id}",
    name: "{name}",
    symbol: "{symbol}",
    description: "{desc.replace('"', "'").replace(chr(10), ' ')[:150]}",
  }},'''

    # Insert before the closing bracket
    updated = content.replace("];\n", f"{new_entry}\n];\n")
    COINS_FILE.write_text(updated)
    print(f"  ✅ Added coin: {name} ({symbol})")
    return True

def add_stock_topic(topic: str) -> bool:
    """Add a new stock topic to stocks.ts."""
    content = STOCKS_FILE.read_text()
    if topic in content:
        print(f"  {topic} already exists, skipping")
        return False

    title = topic.replace("-", " ").title()
    desc = f"Complete guide to {title.lower()} for US investors in 2026."

    new_entry = f'''  {{
    slug: "{topic}",
    title: "{title}",
    description: "{desc}",
    category: "guide",
  }},'''

    updated = content.replace("];\n", f"{new_entry}\n];\n")
    STOCKS_FILE.write_text(updated)
    print(f"  ✅ Added topic: {title}")
    return True

def git_push(message: str):
    """Commit and push to GitHub."""
    try:
        subprocess.run(["git", "add", "-A"], cwd=BASE_DIR, check=True, capture_output=True)
        result = subprocess.run(
            ["git", "diff", "--cached", "--name-only"],
            cwd=BASE_DIR, capture_output=True, text=True
        )
        if not result.stdout.strip():
            print("  Nothing to commit")
            return False
        subprocess.run(["git", "commit", "-m", message], cwd=BASE_DIR, check=True, capture_output=True)
        subprocess.run(["git", "push", "origin", "main"], cwd=BASE_DIR, check=True, capture_output=True)
        print(f"  🚀 Pushed: {message}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"  Git error: {e}")
        return False

def run(batch_size: int = 5):
    """Add a batch of new coins and topics, then push."""
    print(f"\n{'='*55}")
    print(f"  Content Expansion — {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}")
    print(f"{'='*55}\n")

    current_coins  = get_current_coins()
    current_topics = get_current_topics()

    new_coins  = [c for c in ALL_COINS if c not in current_coins]
    new_topics = [t for t in ALL_STOCK_TOPICS if t not in current_topics]

    print(f"  Coins remaining to add: {len(new_coins)}")
    print(f"  Topics remaining to add: {len(new_topics)}")

    added_coins  = []
    added_topics = []

    # Add batch of coins
    for coin_id in new_coins[:batch_size]:
        if add_coin(coin_id):
            added_coins.append(coin_id)
        time.sleep(1.5)  # Rate limit CoinGecko

    # Add batch of topics
    for topic in new_topics[:batch_size]:
        if add_stock_topic(topic):
            added_topics.append(topic)

    if added_coins or added_topics:
        msg = f"Add {len(added_coins)} coins + {len(added_topics)} topics: {', '.join(added_coins[:3])}"
        git_push(msg)
        print(f"\n  Done. Added {len(added_coins)} coins, {len(added_topics)} topics.")
        print(f"  Vercel will auto-deploy. New pages live in ~90 seconds.")
    else:
        print("\n  All content already added — nothing to do.")

    remaining = len(new_coins) - len(added_coins) + len(new_topics) - len(added_topics)
    print(f"  Remaining to add in future runs: {remaining}")
    print(f"{'='*55}\n")

if __name__ == "__main__":
    run(batch_size=5)
