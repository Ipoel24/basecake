import { ArrowUpRight } from "lucide-react";
import { TOKEN } from "@/lib/token";

export function Origin() {
  return (
    <section id="story" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-quiet">
            The prompt
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A blue blob.
            <br />
            One instruction.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            On 31 August 2026, CoinMarketCap posted a Base-blue square with a
            white outline and the words{" "}
            <span className="italic text-ink">finish the drawing</span>. People
            drew cats, frogs, helmets. We saw a cake. Then we baked it on-chain.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            No invented utility. No fake roadmap. $BASECAKE is the cake that
            came out of that prompt — fair-launched on Feel, 1,000,000,000
            crumbs, living on Base.
          </p>
          <a
            href={TOKEN.originTweet}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-11 items-center gap-2 text-sm font-medium text-brand hover:text-brand-deep"
          >
            Read the original post
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <figure className="ticket overflow-hidden rounded-xl bg-frost">
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <figcaption className="text-[11px] font-medium uppercase tracking-[0.14em] text-quiet">
              Source · @CoinMarketCap
            </figcaption>
            <span className="font-mono text-[11px] text-quiet">31.08.26</span>
          </div>
          <blockquote className="px-5 py-4 font-display text-2xl italic tracking-tight">
            finish the drawing
          </blockquote>
          <img
            src="/art/cmc-prompt.jpg"
            alt="CoinMarketCap prompt: a white outline blob on Base blue"
            className="aspect-[914/796] w-full object-cover"
            width={914}
            height={796}
          />
        </figure>
      </div>

      <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-xl ticket">
        <img
          src="/art/bakery.jpg"
          alt="A blue blob cake on a bakery counter, with the original outline sketch pinned behind it"
          className="aspect-[16/9] w-full object-cover"
          width={1792}
          height={1008}
        />
      </div>
    </section>
  );
}
