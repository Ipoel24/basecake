import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button, type ButtonProps } from "@/components/ui/button";
import { TOKEN, shortCa } from "@/lib/token";
import { cn } from "@/lib/utils";

type CopyCaProps = {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  showFull?: boolean;
};

export function CopyCa({
  variant = "outline",
  size = "md",
  className,
  showFull = false,
}: CopyCaProps) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(TOKEN.ca);
      setCopied(true);
      toast.success("Contract copied");
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      toast.error("Couldn’t copy — select it manually");
    }
  }

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={onCopy}
      className={cn("font-mono text-sm tracking-tight", className)}
      aria-label="Copy contract address"
    >
      {copied ? <Check /> : <Copy />}
      <span className="truncate">
        {showFull ? TOKEN.ca : shortCa()}
      </span>
    </Button>
  );
}
