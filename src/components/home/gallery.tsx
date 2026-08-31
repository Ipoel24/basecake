export function Gallery() {
  return (
    <section id="cake" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-quiet">
              The bake
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              How the blob became cake
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Outline, frosting, face, candles. Same shape CMC posted. We just
            finished it.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <figure className="ticket overflow-hidden rounded-xl bg-frost md:col-span-2">
            <img
              src="/art/finishes.jpg"
              alt="Four sticker finishes of the blue blob: plain, frosted, smiling with a cherry, and with birthday candles"
              className="aspect-square w-full object-cover md:aspect-[4/3]"
              width={1408}
              height={1408}
            />
          </figure>
          <div className="grid gap-4">
            <figure className="ticket overflow-hidden rounded-xl bg-frost">
              <img
                src="/art/cake.jpg"
                alt="A round Base-blue cake with white frosting, a cherry, a smile, and a birthday candle"
                className="aspect-square w-full object-cover"
                width={1408}
                height={1408}
              />
            </figure>
            <div className="flex flex-col justify-between rounded-xl bg-brand px-5 py-5 text-frost">
              <p className="font-display text-2xl font-semibold leading-tight tracking-tight">
                Same blob.
                <br />
                Extra frosting.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-frost/80">
                The mascot is the prompt, filled in. If you can draw, you can
                bake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
