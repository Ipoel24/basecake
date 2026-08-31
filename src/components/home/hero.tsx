import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyCa } from "@/components/copy-ca";
import { TOKEN } from "@/lib/token";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-20">
        <div className="relative z-10">
          <p className="rise-in mb-5 inline-flex items-center gap-2 rounded-full bg-frost px-3 py-1.5 text-xs font-medium tracking-wide text-ink-soft shadow-[0_0_0_1px_rgba(20,22,28,0.08)]">
            <span className="size-1.5 rounded-full bg-brand" />
            Just baked on Base · Feel.cash
          </p>
          <h1 className="rise-in font-display text-[clamp(2.6rem,8vw,5.4rem)] leading-[0.95] tracking-[-0.035em] text-ink">
            <span className="italic text-brand">Finish the drawing.</span>
            <br />
            We baked a cake.
          </h1>
          <p className="rise-in mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
            CoinMarketCap posted a blue blob. The timeline saw a cake.{" "}
            <span className="font-medium text-ink">$BASECAKE</span> is that
            cake — launched on Feel, living on Base.
          </p>
          <div className="rise-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <a href={TOKEN.feel} target="_blank" rel="noopener noreferrer">
                Buy on Feel
                <ExternalLink />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#draw">
                Finish it yourself
                <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="rise-in mt-8">
            <CopyCa />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 size-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl"
          />
          <img
            src="/art/mascot.jpg"
            alt="BaseCake mascot — a cobalt-blue blob cake with white frosting, a cherry, and a little smile"
            className="animate-cake-float relative z-10 w-full rounded-2xl ticket"
            width={1024}
            height={1024}
          />
        </div>
      </div>

      <div className="px-4 sm:px-6">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {[
            { label: "Ticker", value: "$BASECAKE" },
            { label: "Supply", value: "1B" },
            { label: "Chain", value: "Base" },
            { label: "Launch", value: "Feel" },
          ].map((item) => (
            <div key={item.label} className="bg-frost px-4 py-4 sm:px-5">
              <dt className="text-xs font-medium uppercase tracking-widest text-quiet">
                {item.label}
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold tracking-tight">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
