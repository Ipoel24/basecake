import { TOKEN, shortCa } from "@/lib/token";

export function SiteFooter() {
  return (
    <footer className="border-t border-line px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-2.5">
          <img
            src="/art/blob.png"
            alt=""
            className="size-8 object-contain"
            width={32}
            height={32}
          />
          <div>
            <p className="font-display text-lg font-semibold tracking-tight">
              BaseCake
            </p>
            <p className="font-mono text-[11px] text-quiet">{shortCa()}</p>
            <a
              href={TOKEN.x}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-ink-soft hover:text-ink"
            >
              @BasecakeOnBase
            </a>
          </div>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-quiet">
          $BASECAKE is a memecoin with no intrinsic value, no expectation of
          financial return, and no formal team promises. Crypto is volatile.
          Only spend what you can afford to turn into crumbs. Contract{" "}
          <a
            href={TOKEN.basescan}
            className="underline decoration-line underline-offset-2 hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            {TOKEN.ca}
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
