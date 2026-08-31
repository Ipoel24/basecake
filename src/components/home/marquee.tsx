const BITS = [
  "Finish the drawing",
  "$BASECAKE",
  "Baked on Base",
  "1,000,000,000 crumbs",
  "Launched on Feel",
  "No roadmap",
  "Just cake",
];

export function Marquee() {
  const row = [...BITS, ...BITS, ...BITS, ...BITS];
  return (
    <div className="overflow-hidden border-y border-brand-deep bg-brand text-frost">
      <div className="flex w-max animate-marquee py-3">
        {row.map((bit, i) => (
          <span
            key={`${bit}-${i}`}
            className="flex items-center gap-6 px-6 font-display text-sm font-medium tracking-wide"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-frost/80" />
            {bit}
          </span>
        ))}
      </div>
    </div>
  );
}
