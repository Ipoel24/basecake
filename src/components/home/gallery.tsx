export function Gallery() {
  return (
    <section id="cake" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-quiet">
              The finish
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Same blob. A little frosting.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            The CMC outline, filled in. Face, drips, cherry, candles — still
            the same shape, just finished.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <figure className="ticket overflow-hidden rounded-xl bg-frost p-3 md:col-span-2 md:p-4">
            <img
              src="/art/finishes.jpg"
              alt="Four finishes of the BaseCake blob: face, frosting, cherry, and birthday candles"
              className="aspect-square w-full object-contain"
              width={1408}
              height={1408}
            />
          </figure>
          <div className="grid gap-4">
            <figure className="ticket overflow-hidden rounded-xl bg-frost p-3">
              <img
                src="/art/cake.jpg"
                alt="The BaseCake blob with frosting drips, a cherry, and a small smile"
                className="aspect-square w-full object-contain"
                width={1408}
                height={1408}
              />
            </figure>
            <div className="flex flex-col justify-between rounded-xl bg-brand px-5 py-5 text-frost">
              <p className="font-display text-2xl font-semibold leading-tight tracking-tight">
                Still the blob.
                <br />
                Just dressed.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-frost/80">
                The mascot is the prompt, filled in. Drag the face in the
                studio until it sits right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
