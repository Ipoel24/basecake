import {
  Download,
  Eraser,
  Pencil,
  RotateCcw,
  Smile,
  Cake,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { DRAW_COLORS } from "@/lib/token";
import { cn } from "@/lib/utils";

type Tool = "pencil" | "eraser";

const CANVAS_SIZE = 720;

export function Studio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawRef = useRef<HTMLCanvasElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);
  const blobRef = useRef<HTMLImageElement | null>(null);
  const historyRef = useRef<ImageData[]>([]);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const boxRef = useRef({ x: 96, y: 138, w: 498, h: 416 });

  const [tool, setTool] = useState<Tool>("pencil");
  const [color, setColor] = useState<string>(DRAW_COLORS[0].value);
  const [size, setSize] = useState(8);
  const [ready, setReady] = useState(false);

  const paint = useCallback(() => {
    const canvas = canvasRef.current;
    const layer = drawRef.current;
    const bg = bgRef.current;
    if (!canvas || !layer) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#0052FF";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    if (bg) {
      const scale = Math.max(
        CANVAS_SIZE / bg.width,
        CANVAS_SIZE / bg.height,
      );
      const w = bg.width * scale;
      const h = bg.height * scale;
      ctx.drawImage(bg, (CANVAS_SIZE - w) / 2, (CANVAS_SIZE - h) / 2, w, h);
    }
    ctx.drawImage(layer, 0, 0);
  }, []);

  const snapshot = useCallback(() => {
    const layer = drawRef.current;
    if (!layer) return;
    const ctx = layer.getContext("2d");
    if (!ctx) return;
    const data = ctx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    historyRef.current.push(data);
    if (historyRef.current.length > 28) historyRef.current.shift();
  }, []);

  useEffect(() => {
    const layer = document.createElement("canvas");
    layer.width = CANVAS_SIZE;
    layer.height = CANVAS_SIZE;
    drawRef.current = layer;

    const display = canvasRef.current;
    if (display) {
      display.width = CANVAS_SIZE;
      display.height = CANVAS_SIZE;
    }

    let cancelled = false;
    const bg = new Image();
    const blob = new Image();
    bg.src = "/art/cmc-prompt.jpg";
    blob.src = "/art/blob.png";
    Promise.all([
      new Promise<void>((res, rej) => {
        bg.onload = () => res();
        bg.onerror = () => rej(new Error("bg"));
      }),
      new Promise<void>((res, rej) => {
        blob.onload = () => res();
        blob.onerror = () => rej(new Error("blob"));
      }),
    ])
      .then(() => {
        if (cancelled) return;
        bgRef.current = bg;
        blobRef.current = blob;
        const off = document.createElement("canvas");
        off.width = CANVAS_SIZE;
        off.height = CANVAS_SIZE;
        const octx = off.getContext("2d");
        if (octx) {
          octx.fillStyle = "#0052FF";
          octx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
          const scale = Math.max(
            CANVAS_SIZE / bg.width,
            CANVAS_SIZE / bg.height,
          );
          const bw = bg.width * scale;
          const bh = bg.height * scale;
          octx.drawImage(
            bg,
            (CANVAS_SIZE - bw) / 2,
            (CANVAS_SIZE - bh) / 2,
            bw,
            bh,
          );
          const { data } = octx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE);
          let minX = CANVAS_SIZE;
          let minY = CANVAS_SIZE;
          let maxX = 0;
          let maxY = 0;
          for (let i = 0; i < data.length; i += 4) {
            if (data[i] > 220 && data[i + 1] > 220 && data[i + 2] > 220) {
              const p = i / 4;
              const x = p % CANVAS_SIZE;
              const y = (p / CANVAS_SIZE) | 0;
              if (x < minX) minX = x;
              if (y < minY) minY = y;
              if (x > maxX) maxX = x;
              if (y > maxY) maxY = y;
            }
          }
          if (maxX > minX && maxY > minY) {
            boxRef.current = {
              x: minX,
              y: minY,
              w: maxX - minX,
              h: maxY - minY,
            };
          }
        }
        setReady(true);
        paint();
      })
      .catch(() => {
        if (cancelled) return;
        setReady(true);
        paint();
      });

    return () => {
      cancelled = true;
    };
  }, [paint]);

  function pos(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * CANVAS_SIZE,
      y: ((e.clientY - rect.top) / rect.height) * CANVAS_SIZE,
    };
  }

  function stroke(from: { x: number; y: number }, to: { x: number; y: number }) {
    const layer = drawRef.current;
    if (!layer) return;
    const ctx = layer.getContext("2d");
    if (!ctx) return;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = size * (tool === "eraser" ? 2.2 : 1);
    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = "rgba(0,0,0,1)";
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = color;
    }
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
    ctx.globalCompositeOperation = "source-over";
    paint();
  }

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    snapshot();
    drawing.current = true;
    const p = pos(e);
    last.current = p;
    stroke(p, p);
  }

  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current || !last.current) return;
    const p = pos(e);
    stroke(last.current, p);
    last.current = p;
  }

  function onPointerUp() {
    drawing.current = false;
    last.current = null;
  }

  function undo() {
    const layer = drawRef.current;
    if (!layer) return;
    const ctx = layer.getContext("2d");
    if (!ctx) return;
    const prev = historyRef.current.pop();
    if (!prev) {
      ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    } else {
      ctx.putImageData(prev, 0, 0);
    }
    paint();
  }

  function clearAll() {
    snapshot();
    const layer = drawRef.current;
    if (!layer) return;
    const ctx = layer.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    paint();
  }

  function fillCake() {
    const layer = drawRef.current;
    const blob = blobRef.current;
    if (!layer || !blob) return;
    snapshot();
    const ctx = layer.getContext("2d");
    if (!ctx) return;
    const box = boxRef.current;
    ctx.drawImage(blob, box.x, box.y, box.w, box.h);
    paint();
  }

  function stampFace() {
    const layer = drawRef.current;
    if (!layer) return;
    snapshot();
    const ctx = layer.getContext("2d");
    if (!ctx) return;
    const box = boxRef.current;
    const cx = box.x + box.w * 0.5;
    const cy = box.y + box.h * 0.52;
    const eye = Math.max(8, box.w * 0.028);
    ctx.fillStyle = "#14161C";
    ctx.beginPath();
    ctx.ellipse(cx - box.w * 0.09, cy - box.h * 0.04, eye, eye * 1.35, 0, 0, Math.PI * 2);
    ctx.ellipse(cx + box.w * 0.09, cy - box.h * 0.04, eye, eye * 1.35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#FFFBF4";
    ctx.lineWidth = Math.max(4, box.w * 0.012);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(cx, cy + box.h * 0.04, box.w * 0.07, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.stroke();
    paint();
  }

  function bakeIt() {
    const layer = drawRef.current;
    const blob = blobRef.current;
    if (!layer) return;
    snapshot();
    const ctx = layer.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    const box = boxRef.current;
    if (blob) {
      ctx.drawImage(blob, box.x, box.y, box.w, box.h);
    }
    const top = box.y + box.h * 0.12;
    ctx.fillStyle = "#FFFBF4";
    const drips = [
      [0.22, 0.18, 0.07, 0.14],
      [0.38, 0.1, 0.09, 0.18],
      [0.55, 0.12, 0.08, 0.16],
      [0.7, 0.2, 0.07, 0.13],
    ] as const;
    for (const [x, y, rx, ry] of drips) {
      ctx.beginPath();
      ctx.ellipse(
        box.x + box.w * x,
        box.y + box.h * y,
        box.w * rx,
        box.h * ry,
        0,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }
    ctx.beginPath();
    ctx.ellipse(
      box.x + box.w * 0.5,
      top,
      box.w * 0.34,
      box.h * 0.1,
      0,
      0,
      Math.PI * 2,
    );
    ctx.fill();
    ctx.fillStyle = "#C2413B";
    const cherryX = box.x + box.w * 0.66;
    const cherryY = box.y + box.h * 0.08;
    const cherryR = box.w * 0.045;
    ctx.beginPath();
    ctx.arc(cherryX, cherryY, cherryR, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#3F7A5A";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cherryX, cherryY - cherryR * 0.4);
    ctx.quadraticCurveTo(
      cherryX + box.w * 0.04,
      cherryY - box.h * 0.12,
      cherryX + box.w * 0.08,
      cherryY - box.h * 0.08,
    );
    ctx.stroke();
    const cx = box.x + box.w * 0.5;
    const cy = box.y + box.h * 0.52;
    const eye = Math.max(8, box.w * 0.028);
    ctx.fillStyle = "#14161C";
    ctx.beginPath();
    ctx.ellipse(cx - box.w * 0.09, cy - box.h * 0.04, eye, eye * 1.35, 0, 0, Math.PI * 2);
    ctx.ellipse(cx + box.w * 0.09, cy - box.h * 0.04, eye, eye * 1.35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#FFFBF4";
    ctx.lineWidth = Math.max(4, box.w * 0.012);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(cx, cy + box.h * 0.04, box.w * 0.07, 0.15 * Math.PI, 0.85 * Math.PI);
    ctx.stroke();
    paint();
    toast.success("Baked.");
  }

  function download() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "basecake-drawing.png";
    a.click();
  }

  return (
    <section id="draw" className="scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-quiet">
            Studio
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Finish the drawing
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
            Same prompt CMC posted. Draw on it, fill the cake, or hit Bake it
            and let the kitchen finish for you.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
          <div className="overflow-hidden rounded-xl bg-brand ticket">
            <canvas
              ref={canvasRef}
              className={cn(
                "block w-full touch-none select-none",
                tool === "eraser" ? "cursor-cell" : "cursor-crosshair",
              )}
              style={{ aspectRatio: "1 / 1" }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              aria-label="Drawing canvas"
            />
          </div>

          <div className="flex flex-col gap-4 rounded-xl bg-frost p-4 ticket">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-quiet">
                Tool
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant={tool === "pencil" ? "primary" : "outline"}
                  onClick={() => setTool("pencil")}
                >
                  <Pencil />
                  Pencil
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={tool === "eraser" ? "primary" : "outline"}
                  onClick={() => setTool("eraser")}
                >
                  <Eraser />
                  Eraser
                </Button>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-quiet">
                Color
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {DRAW_COLORS.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    aria-label={c.name}
                    onClick={() => {
                      setColor(c.value);
                      setTool("pencil");
                    }}
                    className={cn(
                      "size-9 rounded-full transition-transform duration-150",
                      color === c.value && tool === "pencil"
                        ? "scale-110 ring-2 ring-ink ring-offset-2 ring-offset-frost"
                        : "shadow-[0_0_0_1px_rgba(20,22,28,0.12)]",
                    )}
                    style={{ backgroundColor: c.value }}
                  />
                ))}
              </div>
            </div>

            <label className="block">
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-quiet">
                Size
              </span>
              <input
                type="range"
                min={3}
                max={36}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="mt-2 w-full accent-brand"
              />
            </label>

            <div className="grid grid-cols-2 gap-2">
              <Button type="button" size="sm" variant="outline" onClick={fillCake} disabled={!ready}>
                Fill cake
              </Button>
              <Button type="button" size="sm" variant="outline" onClick={stampFace}>
                <Smile />
                Face
              </Button>
              <Button type="button" size="sm" variant="outline" onClick={undo}>
                <RotateCcw />
                Undo
              </Button>
              <Button type="button" size="sm" variant="outline" onClick={clearAll}>
                Clear
              </Button>
            </div>

            <Button type="button" onClick={bakeIt} disabled={!ready}>
              <Cake />
              Bake it
            </Button>
            <Button type="button" variant="ink" onClick={download}>
              <Download />
              Download
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
