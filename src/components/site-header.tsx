import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyCa } from "@/components/copy-ca";
import { TOKEN } from "@/lib/token";

const NAV = [
  { href: "#story", label: "Story" },
  { href: "#cake", label: "The cake" },
  { href: "#draw", label: "Draw" },
  { href: "#buy", label: "Buy" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 pr-2">
          <img
            src="/art/blob.png"
            alt=""
            className="size-8 object-contain"
            width={32}
            height={32}
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            BaseCake
          </span>
        </a>

        <nav className="ml-4 hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-2 text-sm text-ink-soft transition-colors duration-150 hover:bg-ink/5 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <CopyCa
            size="sm"
            className="hidden max-w-44 sm:inline-flex"
          />
          <Button asChild size="sm">
            <a
              href={TOKEN.feel}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy
              <ExternalLink />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
