import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CopyCa } from "@/components/copy-ca";
import { TOKEN } from "@/lib/token";

export function StickyBuy() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <CopyCa className="flex-1" size="lg" />
        <Button asChild size="lg" className="flex-1">
          <a href={TOKEN.feel} target="_blank" rel="noopener noreferrer">
            Buy
            <ExternalLink />
          </a>
        </Button>
      </div>
    </div>
  );
}
