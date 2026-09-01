import {
  Download,
  Eraser,
  Pencil,
  RotateCcw,
  Smile,
  Cake,
  Cherry,
  Flame,
  Droplets,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { DRAW_COLORS } from "@/lib/token";
import { cn } from "@/lib/utils";

type DrawTool = "pencil" | "eraser";
type StampKind = "face" | "cherry" | "frosting" | "candle";
type Tool = DrawTool | StampKind;

type Stamp = { id: string; kind: StampKind; x: number; y: number };

const CANVAS_SIZE = 720;
const STAMP_TOOLS: StampKind[] = ["face", "cherry", "frosting", "candle"];

let stampSeq = 0;
function nextId() {
  stampSeq += 1;
  return `s${stampSeq}`;
}

function isStamp(tool: Tool): tool is StampKind {
  return (STAMP_TOOLS as string[]).includes(tool);
}

function hitRadius(kind: StampKind, boxW: number) {
  if (kind === "face") return boxW * 0.16;
  if (kind === "frosting") return boxW * 0.08;
  if (kind === "candle") return boxW * 0.07;
  return boxW * 0.07;
}

function drawFace(ctx: CanvasRenderingContext2D, x: number, y: number, s: number) {
  const eye = Math.max(7, s * 0.032);
  ctx.fillStyle = "#14161C";
  ctx.beginPath();
  ctx.ellipse(x - s * 0.1, y - s * 0.01, eye, eye * 1.2, 0, 0, Math.PI * 2);
  ctx.ellipse(x + s * 0.1, y - s * 0.01, eye, eye * 1.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  const r = eye * 0.32;
  ctx.beginPath();
  ctx.ellipse(x - s * 0.1 + r * 0.3, y - eye * 0.55, r, r, 0, 0, Math.PI * 2);
  ctx.ellipse(x + s * 0.1 + r * 0.3, y - eye * 0.55, r, r, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#FFFBF4";
  ctx.lineWidth = Math.max(4, s * 0.015);
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(x, y + s * 0.04, s * 0.075, 0.15 * Math.PI, 0.85 * Math.PI);
  ctx.stroke();
}

function drawCherry(ctx: CanvasRenderingContext2D, x: number, y: number, s: number) {
  const r = Math.max(10, s * 0.055);
  ctx.strokeStyle = "#3F7A5A";
  ctx.lineWidth = Math.max(3, s * 0.012);
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x, y - r * 0.2);
  ctx.quadraticCurveTo(x + s * 0.03, y - s * 0.1, x + s * 0.05, y - s * 0.13);
  ctx.stroke();
  ctx.fillStyle = "#C2413B";
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,190,180,0.7)";
  ctx.beginPath();
  ctx.ellipse(x - r * 0.28, y - r * 0.32, r * 0.28, r * 0.2, -0.4, 0, Math.PI * 2);
  ctx.fill();
}

function drawCandle(ctx: CanvasRenderingContext2D, x: number, y: number, s: number) {
  const w = Math.max(5, s * 0.028);
  const h = s * 0.13;
  ctx.fillStyle = "#FFFBF4";
  ctx.fillRect(x - w, y - h, w * 2, h + s * 0.02);
  ctx.fillStyle = "#0052FF";
  for (let i = 0; i < 3; i++) {
    const yy = y - h + 8 + i * (h / 3.4);
    ctx.fillRect(x - w, yy, w * 2, 3);
  }
  ctx.fillStyle = "#E89130";
  ctx.beginPath();
  ctx.ellipse(x, y - h - s * 0.02, w * 0.75, s * 0.03, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#FFD65A";
  ctx.beginPath();
  ctx.ellipse(x, y - h - s * 0.028, w * 0.35, s * 0.018, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawFrosting(ctx: CanvasRenderingContext2D, x: number, y: number, s: number) {
  ctx.fillStyle = "#FFFBF4";
  const rx = s * 0.07;
  const ry = s * 0.11;
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(x, y + ry * 0.55, rx * 0.55, ry * 0.55, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawStamp(
  ctx: CanvasRenderingContext2D,
  stamp: Stamp,
  s: number,
) {
  if (stamp.kind === "face") drawFace(ctx, stamp.x, stamp.y, s);
  else if (stamp.kind === "cherry") drawCherry(ctx, stamp.x, stamp.y, s);
  else if (stamp.kind === "candle") drawCandle(ctx, stamp.x, stamp.y, s);
  else drawFrosting(ctx, stamp.x, stamp.y, s);
}

export function Studio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawRef = useRef<HTMLCanvasElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);
  const blobRef = useRef<HTMLImageElement | null>(null);
  const historyRef = useRef<{ pixels: ImageData; stamps: Stamp[] }[]>([]);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const boxRef = useRef({ x: 96, y: 138, w: 498, h: 416 });
  const stampsRef = useRef<Stamp[]>([]);
  const dragRef = useRef<{ id: string; dx: number; dy: number } | null>(null);

  const [tool, setTool] = useState<Tool>("pencil");
  const [color, setColor] = useState<string>(DRAW_COLORS[0].value);
  const [size, setSize] = useState(8);
  const [ready, setReady] = useState(false);
  const [stamps, setStamps] = useState<Stamp[]>([]);

  const commitStamps = useCallback((next: Stamp[]) => {
    stampsRef.current = next;
    setStamps(next);
  }, []);

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
      const scale = Math.max(CANVAS_SIZE / bg.width, CANVAS_SIZE / bg.height);
      const w = bg.width * scale;
      const h = bg.height * scale;
      ctx.drawImage(bg, (CANVAS_SIZE - w) / 2, (CANVAS_SIZE - h) / 2, w, h);
    }
    ctx.drawImage(layer, 0, 0);
    const s = boxRef.current.w;
    for (const stamp of stampsRef.current) {
      drawStamp(ctx, stamp, s);
    }
  }, []);

  const snapshot = useCallback(() => {
    const layer = drawRef.current;
    if (!layer) return;
    const ctx = layer.getContext("2d");
    if (!ctx) return;
    historyRef.current.push({
      pixels: ctx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE),
      stamps: stampsRef.current.map((s) => ({ ...s })),
    });
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
          const scale = Math.max(CANVAS_SIZE / bg.width, CANVAS_SIZE / bg.height);
          const bw = bg.width * scale;
          const bh = bg.height * scale;
          octx.drawImage(bg, (CANVAS_SIZE - bw) / 2, (CANVAS_SIZE - bh) / 2, bw, bh);
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

  function hitStamp(p: { x: number; y: number }) {
    const s = boxRef.current.w;
    const list = stampsRef.current;
    for (let i = list.length - 1; i >= 0; i--) {
      const st = list[i];
      const dx = p.x - st.x;
      const dy = p.y - st.y;
      const r = hitRadius(st.kind, s);
      if (dx * dx + dy * dy <= r * r) return st;
    }
    return null;
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
    const p = pos(e);

    if (isStamp(tool)) {
      snapshot();
      const existing = hitStamp(p);
      if (existing) {
        dragRef.current = { id: existing.id, dx: p.x - existing.x, dy: p.y - existing.y };
      } else if (tool === "face") {
        const prev = stampsRef.current.find((s) => s.kind === "face");
        if (prev) {
          commitStamps(
            stampsRef.current.map((s) =>
              s.id === prev.id ? { ...s, x: p.x, y: p.y } : s,
            ),
          );
          dragRef.current = { id: prev.id, dx: 0, dy: 0 };
        } else {
          const next = { id: nextId(), kind: "face" as const, x: p.x, y: p.y };
          commitStamps([...stampsRef.current, next]);
          dragRef.current = { id: next.id, dx: 0, dy: 0 };
        }
      } else {
        const next = { id: nextId(), kind: tool, x: p.x, y: p.y };
        commitStamps([...stampsRef.current, next]);
        dragRef.current = { id: next.id, dx: 0, dy: 0 };
      }
      paint();
      return;
    }

    snapshot();
    drawing.current = true;
    last.current = p;
    stroke(p, p);
  }

  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    const p = pos(e);
    const drag = dragRef.current;
    if (drag) {
      commitStamps(
        stampsRef.current.map((s) =>
          s.id === drag.id ? { ...s, x: p.x - drag.dx, y: p.y - drag.dy } : s,
        ),
      );
      paint();
      return;
    }
    if (!drawing.current || !last.current) return;
    stroke(last.current, p);
    last.current = p;
  }

  function onPointerUp() {
    drawing.current = false;
    last.current = null;
    dragRef.current = null;
  }

  function undo() {
    const layer = drawRef.current;
    if (!layer) return;
    const ctx = layer.getContext("2d");
    if (!ctx) return;
    const prev = historyRef.current.pop();
    if (!prev) {
      ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      commitStamps([]);
    } else {
      ctx.putImageData(prev.pixels, 0, 0);
      commitStamps(prev.stamps);
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
    commitStamps([]);
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

  function bakeIt() {
    const layer = drawRef.current;
    const blob = blobRef.current;
    if (!layer) return;
    snapshot();
    const ctx = layer.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    const box = boxRef.current;
    if (blob) ctx.drawImage(blob, box.x, box.y, box.w, box.h);
    const cx = box.x + box.w * 0.5;
    const baked: Stamp[] = [
      { id: nextId(), kind: "frosting", x: box.x + box.w * 0.28, y: box.y + box.h * 0.22 },
      { id: nextId(), kind: "frosting", x: box.x + box.w * 0.46, y: box.y + box.h * 0.16 },
      { id: nextId(), kind: "frosting", x: box.x + box.w * 0.64, y: box.y + box.h * 0.2 },
      { id: nextId(), kind: "cherry", x: box.x + box.w * 0.7, y: box.y + box.h * 0.08 },
      { id: nextId(), kind: "face", x: cx, y: box.y + box.h * 0.58 },
    ];
    commitStamps(baked);
    setTool("face");
    paint();
    toast.success("Baked — drag the face to sit on the blob.");
  }

  function download() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "basecake-drawing.png";
    a.click();
  }

  const stampCursor = isStamp(tool) ? "cursor-grab" : tool === "eraser" ? "cursor-cell" : "cursor-crosshair";

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
            Fill the CMC blob, then drop a face, frosting, cherry, or candle.
            Drag any decoration to line it up with the mascot.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
          <div className="overflow-hidden rounded-xl bg-brand ticket">
            <canvas
              ref={canvasRef}
              className={cn("block w-full touch-none select-none", stampCursor)}
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
                Decorations
              </p>
              <p className="mt-1 text-[11px] leading-snug text-quiet">
                Tap to place, drag to move.
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant={tool === "face" ? "primary" : "outline"}
                  onClick={() => setTool("face")}
                >
                  <Smile />
                  Face
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={tool === "frosting" ? "primary" : "outline"}
                  onClick={() => setTool("frosting")}
                >
                  <Droplets />
                  Frost
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={tool === "cherry" ? "primary" : "outline"}
                  onClick={() => setTool("cherry")}
                >
                  <Cherry />
                  Cherry
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant={tool === "candle" ? "primary" : "outline"}
                  onClick={() => setTool("candle")}
                >
                  <Flame />
                  Candle
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
              <Button type="button" size="sm" variant="outline" onClick={undo}>
                <RotateCcw />
                Undo
              </Button>
              <Button type="button" size="sm" variant="outline" onClick={clearAll} className="col-span-2">
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
            {stamps.length > 0 ? (
              <p className="text-center text-[11px] text-quiet">
                {stamps.length} decoration{stamps.length === 1 ? "" : "s"} on the cake
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
