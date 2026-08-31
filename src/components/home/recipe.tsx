import { TOKEN, shortCa } from "@/lib/token";
import { CopyCa } from "@/components/copy-ca";

const INGREDIENTS = [
  { amount: "1", item: "Blue blob, posted by CoinMarketCap" },
  { amount: "1", item: "Base chain" },
  { amount: "1B", item: "BASEC crumbs, no extra slices" },
  { amount: "0", item: "Fake utility" },
  { amount: "0", item: "Roadmap slides" },
  { amount: "∞", item: "Frosting" },
];

const FACTS = [
  { label: "Name", value: TOKEN.name },
  { label: "Ticker", value: `$${TOKEN.ticker}` },
  { label: "Symbol", value: TOKEN.symbol },
  { label: "Chain", value: `${TOKEN.chain} · ${TOKEN.chainId}` },
  { label: "Supply", value: TOKEN.supplyLabel },
  { label: "Launch", value: "Feel.cash" },
];

export function Recipe() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <article className="relative rounded-xl bg-frost p-6 ticket sm:p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-quiet">
            Recipe card
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
            Ingredients
          </h2>
          <ul className="mt-6 divide-y divide-line">
            {INGREDIENTS.map((row) => (
              <li
                key={row.item}
                className="flex items-baseline justify-between gap-4 py-3"
              >
                <span className="font-mono text-sm text-brand">{row.amount}</span>
                <span className="flex-1 text-sm text-ink-soft">{row.item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm italic text-quiet">
            Method: take the blob. Add frosting. Launch on Feel. Serve on Base.
          </p>
        </article>

        <article className="rounded-xl bg-ink p-6 text-frost sm:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-frost/50">
            On-chain
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
            The cake, measured
          </h2>
          <dl className="mt-6 space-y-3">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 border-b border-white/10 py-2.5"
              >
                <dt className="text-sm text-frost/55">{fact.label}</dt>
                <dd className="font-mono text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <p className="font-mono text-xs text-frost/60">{shortCa()}</p>
            <CopyCa variant="frost" size="sm" className="sm:ml-auto" />
          </div>
        </article>
      </div>
    </section>
  );
}
