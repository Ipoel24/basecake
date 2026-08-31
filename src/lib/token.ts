export const TOKEN = {
  name: "BaseCake",
  ticker: "BASECAKE",
  symbol: "BASECAKE",
  ca: "0xb8d0851725247a00d7d7ccbac9f23a88c433fee1",
  chain: "Base",
  chainId: 8453,
  supply: 1_000_000_000,
  supplyLabel: "1,000,000,000",
  feel: "https://feel.cash/basecake",
  basescan:
    "https://basescan.org/token/0xb8d0851725247a00d7d7ccbac9f23a88c433fee1",
  dex: "https://dexscreener.com/base/0xb8d0851725247a00d7d7ccbac9f23a88c433fee1",
  uniswap:
    "https://app.uniswap.org/swap?chain=base&outputCurrency=0xb8d0851725247a00d7d7ccbac9f23a88c433fee1",
  originTweet: "https://x.com/CoinMarketCap/status/2094409963355386120",
} as const;

export function shortCa(ca: string = TOKEN.ca) {
  return `${ca.slice(0, 6)}…${ca.slice(-4)}`;
}

export const DRAW_COLORS = [
  { name: "Frosting", value: "#FFFBF4" },
  { name: "Ink", value: "#14161C" },
  { name: "Brand", value: "#0052FF" },
  { name: "Cherry", value: "#C2413B" },
  { name: "Chocolate", value: "#5C3A24" },
  { name: "Mint", value: "#3F7A5A" },
] as const;
