"""
SleepTrade Content Expansion Engine v2
Safely adds new coins and topics by only editing the array,
not the type definitions or metadata below it.
"""

import json, subprocess, time, requests, re
from pathlib import Path
from datetime import datetime, timezone

BASE_DIR   = Path(__file__).parent.parent
COINS_FILE = BASE_DIR / "lib" / "coins.ts"
STOCKS_FILE= BASE_DIR / "lib" / "stocks.ts"

NEW_COINS = [
    # Batch 1 (done)
    "litecoin","stellar","uniswap","aave","cosmos",
    "algorand","vechain","tron","filecoin","hedera-hashgraph",
    "shiba-inu","pepe","bonk","dogwifcoin","floki",
    "matic-network","arbitrum","optimism","starknet",
    "maker","curve-dao-token","yearn-finance","1inch","pancakeswap-token",
    # Batch 2
    "injective-protocol","sei-network","sui","aptos","celestia",
    "fetch-ai","render-token","the-graph","lido-dao","rocket-pool",
    "thorchain","osmosis","akash-network","kava","band-protocol",
    "blur","dydx","gmx","synthetix","compound-governance-token",
    "frax-share","convex-finance","balancer","loopring","zcash",
    # Batch 3
    "monero","dash","neo","iota","waves",
    "qtum","icon","ontology","zilliqa","decred",
    "ravencoin","horizen","komodo","stratis","syscoin",
    "wax","ankr","celer-network","ocean-protocol","numeraire",
    "ampleforth","reserve-rights-token","uma","barnbridge","badger-dao",
    "alchemix","origin-protocol","liquity","paladin","angle-protocol",
    "astar","metis-token","moonbeam","moonriver","karura",
    "clover-finance","bifrost","phala-network","khala-network","ternoa",
    "ergo","flux","hive","steem","blurt",
]

NEW_TOPICS = [
    # Batch 1 (done)
    "best-dividend-stocks","how-to-invest-1000-dollars","index-fund-investing",
    "etf-guide-beginners","dollar-cost-averaging","how-to-read-stock-charts",
    "swing-trading-strategies","growth-vs-value-stocks","best-penny-stocks-2026",
    "how-to-buy-xrp","how-to-buy-solana","how-to-buy-dogecoin",
    "xrp-price-prediction-2026","solana-price-prediction","bitcoin-price-prediction",
    "is-xrp-a-good-investment","crypto-tax-guide-us","best-crypto-exchanges-us",
    "robinhood-vs-webull","coinbase-vs-kraken","best-crypto-wallets-2026",
    "ethereum-price-prediction","is-solana-a-good-investment",
    # Batch 2
    "cardano-price-prediction","dogecoin-price-prediction","shiba-inu-price-prediction",
    "best-crypto-to-buy-2026","passive-income-crypto","staking-crypto-guide",
    "defi-explained","nft-investing-guide","web3-for-beginners","layer2-crypto-explained",
    "how-to-use-metamask","hardware-wallet-guide","cold-storage-crypto",
    "crypto-vs-stocks","best-altcoins-2026","undervalued-crypto-2026",
    "ai-crypto-coins","gaming-crypto-tokens","real-world-asset-crypto",
    "how-to-short-crypto","futures-trading-crypto","leverage-trading-guide",
    "bitcoin-etf-guide","spot-vs-futures-bitcoin","crypto-portfolio-strategy",
    # Batch 3
    "best-stocks-to-buy-2026","how-to-invest-in-sp500","roth-ira-vs-401k",
    "how-to-start-investing-at-18","compound-interest-explained","stock-market-for-beginners",
    "how-to-read-balance-sheet","price-earnings-ratio-explained","what-is-market-cap",
    "best-broker-for-beginners","how-to-buy-index-funds","vanguard-vs-fidelity",
    "how-to-invest-in-real-estate","reits-explained","passive-income-ideas-2026",
    "how-to-make-money-online","side-hustles-2026","financial-independence-guide",
    "how-to-save-money-fast","emergency-fund-guide","debt-payoff-strategies",
    "budgeting-for-beginners","how-to-increase-credit-score","best-high-yield-savings",
    "cd-vs-high-yield-savings","money-market-account-explained","treasury-bonds-guide",
    "inflation-hedge-investments","gold-vs-bitcoin","commodities-investing-guide",
    "options-trading-for-beginners","covered-calls-strategy","puts-vs-calls-explained",
    "technical-analysis-guide","candlestick-patterns-explained","moving-averages-guide",
    "rsi-indicator-explained","macd-trading-strategy","bollinger-bands-guide",
    "fibonacci-retracement-crypto","volume-analysis-trading","support-resistance-levels",
    "day-trading-guide","scalping-strategy","position-trading-explained",
    "crypto-arbitrage-guide","grid-trading-bots","copy-trading-platforms",
    "best-crypto-tax-software","how-to-report-crypto-taxes","capital-gains-tax-crypto",
    "crypto-lending-platforms","yield-farming-guide","liquidity-mining-explained",
]

def get_array_items(filepath: Path, array_name: str) -> list[str]:
    """Safely extract string items from a TypeScript const array."""
    content = filepath.read_text()
    m = re.search(rf'export const {array_name} = \[(.*?)\] as const', content, re.DOTALL)
    if not m:
        return []
    return re.findall(r'"([^"]+)"', m.group(1))

def set_array_items(filepath: Path, array_name: str, items: list[str]):
    """Safely replace only the array contents, leaving the rest of the file intact."""
    content = filepath.read_text()
    new_array = f'export const {array_name} = [\n'
    for item in items:
        new_array += f'  "{item}",\n'
    new_array += '] as const'
    updated = re.sub(
        rf'export const {array_name} = \[.*?\] as const',
        new_array, content, flags=re.DOTALL
    )
    if updated == content:
        print(f"  ⚠️  Could not find {array_name} in {filepath.name}")
        return False
    filepath.write_text(updated)
    return True

def git_push(message: str) -> bool:
    try:
        subprocess.run(["git","add","-A"], cwd=BASE_DIR, check=True, capture_output=True)
        result = subprocess.run(["git","diff","--cached","--name-only"],
                                cwd=BASE_DIR, capture_output=True, text=True)
        if not result.stdout.strip():
            print("  Nothing to commit"); return False
        subprocess.run(["git","commit","-m",message], cwd=BASE_DIR, check=True, capture_output=True)
        subprocess.run(["git","push","origin","main"], cwd=BASE_DIR, check=True, capture_output=True)
        print(f"  🚀 Pushed: {message}"); return True
    except subprocess.CalledProcessError as e:
        print(f"  Git error: {e}"); return False

def run(batch_size: int = 5):
    print(f"\n{'='*55}")
    print(f"  Content Expansion v2 — {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}")
    print(f"{'='*55}\n")

    current_coins  = get_array_items(COINS_FILE, "SUPPORTED_COINS")
    current_topics = get_array_items(STOCKS_FILE, "STOCK_TOPICS")

    to_add_coins  = [c for c in NEW_COINS  if c not in current_coins][:batch_size]
    to_add_topics = [t for t in NEW_TOPICS if t not in current_topics][:batch_size]

    print(f"  Current: {len(current_coins)} coins, {len(current_topics)} topics")
    print(f"  Adding:  {len(to_add_coins)} coins, {len(to_add_topics)} topics")

    if to_add_coins:
        updated = current_coins + to_add_coins
        if set_array_items(COINS_FILE, "SUPPORTED_COINS", updated):
            # Also update COIN_METADATA with minimal entries for new coins
            for cid in to_add_coins:
                content = COINS_FILE.read_text()
                if f'"{cid}":' not in content:
                    name = cid.replace("-"," ").title().replace(" 2","")
                    sym  = cid[:4].upper()
                    meta_entry = f'  {cid.replace("-","_") if False else cid}: {{ name: "{name}", symbol: "{sym}", cgId: "{cid}" }},\n'
                    # Append to COIN_METADATA object
                    content = content.replace(
                        '} as const;\n\nexport type CoinSlug',
                        f'}} as const;\n\nexport type CoinSlug'
                    )
                    COINS_FILE.write_text(content)
            print(f"  ✅ Coins: {', '.join(to_add_coins)}")

    if to_add_topics:
        updated = current_topics + to_add_topics
        if set_array_items(STOCKS_FILE, "STOCK_TOPICS", updated):
            print(f"  ✅ Topics: {', '.join(to_add_topics)}")

    remaining = len([c for c in NEW_COINS if c not in current_coins + to_add_coins])
    remaining += len([t for t in NEW_TOPICS if t not in current_topics + to_add_topics])

    if to_add_coins or to_add_topics:
        msg = f"Content expansion: +{len(to_add_coins)} coins, +{len(to_add_topics)} topics"
        git_push(msg)
        print(f"\n  Pages live in ~90s after Vercel deploy.")

    print(f"  Remaining in queue: {remaining}")
    print(f"{'='*55}\n")

if __name__ == "__main__":
    run(batch_size=5)
