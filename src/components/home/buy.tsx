import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyCa } from "@/components/copy-ca";
import { TOKEN } from "@/lib/token";

const STEPS = [
  {
    n: "01",
    title: "Get ETH on Base",
    body: "Bridge or buy ETH on Base. That’s the only ingredient you need besides appetite.",
  },
  {
    n: "02",
    title: "Open Feel",
    body: "BaseCake launched on Feel.cash. Connect a wallet that speaks Base.",
  },
  {
    n: "03",
    title: "Swap for cake",
    body: "Paste the contract if you like doing things the careful way. Then take a slice.",
  },
];

export function Buy() {
  return (
    <section id="buy" className="scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-quiet">
            How to buy
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Three steps. Then frosting.
          </h2>
        </div>

        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="flex flex-col rounded-xl bg-frost p-5 ticket"
            >
              <span className="font-mono text-xs text-brand">{step.n}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-3 rounded-xl bg-brand p-5 text-frost sm:flex-row sm:items-center sm:p-6">
          <div className="min-w-0 flex-1">
            <p className="font-display text-2xl font-semibold tracking-tight">
              Ready to slice?
            </p>
            <p className="mt-1 text-sm text-frost/80">
              Official launch is Feel. Uniswap and Basescan are linked if you
              want a second look.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button asChild variant="frost" size="lg">
              <a href={TOKEN.feel} target="_blank" rel="noopener noreferrer">
                Buy on Feel
                <ExternalLink />
              </a>
            </Button>
            <CopyCa variant="ink" size="lg" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a
            href={TOKEN.uniswap}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-ink-soft hover:text-ink"
          >
            Uniswap
            <ArrowUpRight className="size-3.5" />
          </a>
          <a
            href={TOKEN.basescan}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-ink-soft hover:text-ink"
          >
            Basescan
            <ArrowUpRight className="size-3.5" />
          </a>
          <a
            href={TOKEN.dex}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-ink-soft hover:text-ink"
          >
            Dexscreener
            <ArrowUpRight className="size-3.5" />
          </a>
          <a
            href={TOKEN.originTweet}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-ink-soft hover:text-ink"
          >
            Origin post
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
