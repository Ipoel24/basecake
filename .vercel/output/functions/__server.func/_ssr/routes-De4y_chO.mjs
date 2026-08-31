import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ExternalLink, c as Copy, d as ArrowUpRight, f as ArrowRight, i as Pencil, l as Check, n as Smile, o as Eraser, r as RotateCcw, s as Download, u as Cake } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-De4y_chO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-brand text-frost shadow-[0_0_0_1px_rgba(0,48,184,0.28),0_1px_2px_rgba(0,30,120,0.22)] hover:bg-brand-deep",
			ink: "bg-ink text-frost hover:bg-ink/90",
			outline: "bg-frost text-ink shadow-[0_0_0_1px_rgba(20,22,28,0.12)] hover:bg-cream",
			ghost: "bg-transparent text-ink hover:bg-ink/5",
			frost: "bg-frost text-brand hover:bg-cream"
		},
		size: {
			sm: "h-10 rounded-sm px-3.5 text-sm",
			md: "h-11 rounded-md px-4 text-sm",
			lg: "h-12 rounded-lg px-5 text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var TOKEN = {
	name: "BaseCake",
	ticker: "BASECAKE",
	symbol: "BASEC",
	ca: "0xb8d0851725247a00d7d7ccbac9f23a88c433fee1",
	chain: "Base",
	chainId: 8453,
	supply: 1e9,
	supplyLabel: "1,000,000,000",
	feel: "https://feel.cash/basecake",
	basescan: "https://basescan.org/token/0xb8d0851725247a00d7d7ccbac9f23a88c433fee1",
	dex: "https://dexscreener.com/base/0xb8d0851725247a00d7d7ccbac9f23a88c433fee1",
	uniswap: "https://app.uniswap.org/swap?chain=base&outputCurrency=0xb8d0851725247a00d7d7ccbac9f23a88c433fee1",
	originTweet: "https://x.com/CoinMarketCap/status/2094409963355386120"
};
function shortCa(ca = TOKEN.ca) {
	return `${ca.slice(0, 6)}…${ca.slice(-4)}`;
}
var DRAW_COLORS = [
	{
		name: "Frosting",
		value: "#FFFBF4"
	},
	{
		name: "Ink",
		value: "#14161C"
	},
	{
		name: "Brand",
		value: "#0052FF"
	},
	{
		name: "Cherry",
		value: "#C2413B"
	},
	{
		name: "Chocolate",
		value: "#5C3A24"
	},
	{
		name: "Mint",
		value: "#3F7A5A"
	}
];
function CopyCa({ variant = "outline", size = "md", className, showFull = false }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant,
		size,
		onClick: onCopy,
		className: cn("font-mono text-sm tracking-tight", className),
		"aria-label": "Copy contract address",
		children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: showFull ? TOKEN.ca : shortCa()
		})]
	});
}
var STEPS = [
	{
		n: "01",
		title: "Get ETH on Base",
		body: "Bridge or buy ETH on Base. That’s the only ingredient you need besides appetite."
	},
	{
		n: "02",
		title: "Open Feel",
		body: "BaseCake launched on Feel.cash. Connect a wallet that speaks Base."
	},
	{
		n: "03",
		title: "Swap for cake",
		body: "Paste the contract if you like doing things the careful way. Then take a slice."
	}
];
function Buy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "buy",
		className: "scroll-mt-24 px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-quiet",
						children: "How to buy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "Three steps. Then frosting."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col rounded-xl bg-frost p-5 ticket",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-brand",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl font-semibold tracking-tight",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-soft",
								children: step.body
							})
						]
					}, step.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 rounded-xl bg-brand p-5 text-frost sm:flex-row sm:items-center sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-semibold tracking-tight",
							children: "Ready to slice?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-frost/80",
							children: "Official launch is Feel. Uniswap and Basescan are linked if you want a second look."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "frost",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: TOKEN.feel,
								target: "_blank",
								rel: "noopener noreferrer",
								children: ["Buy on Feel", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyCa, {
							variant: "ink",
							size: "lg"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: TOKEN.uniswap,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1 text-ink-soft hover:text-ink",
							children: ["Uniswap", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: TOKEN.basescan,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1 text-ink-soft hover:text-ink",
							children: ["Basescan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: TOKEN.dex,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1 text-ink-soft hover:text-ink",
							children: ["Dexscreener", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: TOKEN.originTweet,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1 text-ink-soft hover:text-ink",
							children: ["Origin post", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
						})
					]
				})
			]
		})
	});
}
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cake",
		className: "scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-[0.16em] text-quiet",
					children: "The bake"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "How the blob became cake"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm leading-relaxed text-ink-soft",
					children: "Outline, frosting, face, candles. Same shape CMC posted. We just finished it."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "ticket overflow-hidden rounded-xl bg-frost md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/art/finishes.jpg",
						alt: "Four sticker finishes of the blue blob: plain, frosted, smiling with a cherry, and with birthday candles",
						className: "aspect-square w-full object-cover md:aspect-[4/3]",
						width: 1408,
						height: 1408
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "ticket overflow-hidden rounded-xl bg-frost",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/art/cake.jpg",
							alt: "A round Base-blue cake with white frosting, a cherry, a smile, and a birthday candle",
							className: "aspect-square w-full object-cover",
							width: 1408,
							height: 1408
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between rounded-xl bg-brand px-5 py-5 text-frost",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-2xl font-semibold leading-tight tracking-tight",
							children: [
								"Same blob.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Extra frosting."
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-frost/80",
							children: "The mascot is the prompt, filled in. If you can draw, you can bake."
						})]
					})]
				})]
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rise-in mb-5 inline-flex items-center gap-2 rounded-full bg-frost px-3 py-1.5 text-xs font-medium tracking-wide text-ink-soft shadow-[0_0_0_1px_rgba(20,22,28,0.08)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-brand" }), "Just baked on Base · Feel.cash"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "rise-in font-display text-[clamp(2.6rem,8vw,5.4rem)] leading-[0.95] tracking-[-0.035em] text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-brand",
								children: "Finish the drawing."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"We baked a cake."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rise-in mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg",
						children: [
							"CoinMarketCap posted a blue blob. The timeline saw a cake.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ink",
								children: "$BASECAKE"
							}),
							" is that cake — launched on Feel, living on Base."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: TOKEN.feel,
								target: "_blank",
								rel: "noopener noreferrer",
								children: ["Buy on Feel", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#draw",
								children: ["Finish it yourself", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rise-in mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyCa, {})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-md lg:max-w-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute left-1/2 top-1/2 size-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/mascot.jpg",
					alt: "BaseCake mascot — a cobalt-blue blob cake with white frosting, a cherry, and a little smile",
					className: "animate-cake-float relative z-10 w-full rounded-2xl ticket",
					width: 1024,
					height: 1024
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4",
				children: [
					{
						label: "Ticker",
						value: "$BASECAKE"
					},
					{
						label: "Supply",
						value: "1B"
					},
					{
						label: "Chain",
						value: "Base"
					},
					{
						label: "Launch",
						value: "Feel"
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-frost px-4 py-4 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs font-medium uppercase tracking-widest text-quiet",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-display text-xl font-semibold tracking-tight",
						children: item.value
					})]
				}, item.label))
			})
		})]
	});
}
var BITS = [
	"Finish the drawing",
	"$BASECAKE",
	"Baked on Base",
	"1,000,000,000 crumbs",
	"Launched on Feel",
	"No roadmap",
	"Just cake"
];
function Marquee() {
	const row = [
		...BITS,
		...BITS,
		...BITS,
		...BITS
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-brand-deep bg-brand text-frost",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-max animate-marquee py-3",
			children: row.map((bit, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-6 px-6 font-display text-sm font-medium tracking-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "size-1.5 rounded-full bg-frost/80"
				}), bit]
			}, `${bit}-${i}`))
		})
	});
}
function Origin() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "story",
		className: "scroll-mt-24 px-4 py-20 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-[0.16em] text-quiet",
					children: "The prompt"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: [
						"A blue blob.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"One instruction."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 max-w-xl text-base leading-relaxed text-ink-soft",
					children: [
						"On 31 August 2026, CoinMarketCap posted a Base-blue square with a white outline and the words",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-ink",
							children: "finish the drawing"
						}),
						". People drew cats, frogs, helmets. We saw a cake. Then we baked it on-chain."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-base leading-relaxed text-ink-soft",
					children: "No invented utility. No fake roadmap. $BASECAKE is the cake that came out of that prompt — fair-launched on Feel, 1,000,000,000 crumbs, living on Base."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: TOKEN.originTweet,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-6 inline-flex h-11 items-center gap-2 text-sm font-medium text-brand hover:text-brand-deep",
					children: ["Read the original post", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "ticket overflow-hidden rounded-xl bg-frost",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-line px-5 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "text-[11px] font-medium uppercase tracking-[0.14em] text-quiet",
							children: "Source · @CoinMarketCap"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] text-quiet",
							children: "31.08.26"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "px-5 py-4 font-display text-2xl italic tracking-tight",
						children: "finish the drawing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/art/cmc-prompt.jpg",
						alt: "CoinMarketCap prompt: a white outline blob on Base blue",
						className: "aspect-[914/796] w-full object-cover",
						width: 914,
						height: 796
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-16 max-w-6xl overflow-hidden rounded-xl ticket",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/art/bakery.jpg",
				alt: "A blue blob cake on a bakery counter, with the original outline sketch pinned behind it",
				className: "aspect-[16/9] w-full object-cover",
				width: 1792,
				height: 1008
			})
		})]
	});
}
var INGREDIENTS = [
	{
		amount: "1",
		item: "Blue blob, posted by CoinMarketCap"
	},
	{
		amount: "1",
		item: "Base chain"
	},
	{
		amount: "1B",
		item: "BASEC crumbs, no extra slices"
	},
	{
		amount: "0",
		item: "Fake utility"
	},
	{
		amount: "0",
		item: "Roadmap slides"
	},
	{
		amount: "∞",
		item: "Frosting"
	}
];
var FACTS = [
	{
		label: "Name",
		value: TOKEN.name
	},
	{
		label: "Ticker",
		value: `$${TOKEN.ticker}`
	},
	{
		label: "Symbol",
		value: TOKEN.symbol
	},
	{
		label: "Chain",
		value: `${TOKEN.chain} · ${TOKEN.chainId}`
	},
	{
		label: "Supply",
		value: TOKEN.supplyLabel
	},
	{
		label: "Launch",
		value: "Feel.cash"
	}
];
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "relative overflow-hidden rounded-xl bg-frost p-6 ticket sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-6 top-0 h-4 w-4 -translate-y-1/2 rounded-full bg-cream shadow-[inset_0_0_0_1px_rgba(20,22,28,0.08)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-quiet",
						children: "Recipe card"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold tracking-tight",
						children: "Ingredients"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 divide-y divide-line",
						children: INGREDIENTS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm text-brand",
								children: row.amount
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-sm text-ink-soft",
								children: row.item
							})]
						}, row.item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm italic text-quiet",
						children: "Method: take the blob. Add frosting. Launch on Feel. Serve on Base."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-ink p-6 text-frost sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-frost/50",
						children: "On-chain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold tracking-tight",
						children: "The cake, measured"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-6 space-y-3",
						children: FACTS.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-4 border-b border-white/10 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-sm text-frost/55",
								children: fact.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-mono text-sm",
								children: fact.value
							})]
						}, fact.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-frost/60",
							children: shortCa()
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyCa, {
							variant: "frost",
							size: "sm",
							className: "sm:ml-auto"
						})]
					})
				]
			})]
		})
	});
}
function StickyBuy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyCa, {
				className: "flex-1",
				size: "lg"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: TOKEN.feel,
					target: "_blank",
					rel: "noopener noreferrer",
					children: ["Buy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})]
				})
			})]
		})
	});
}
var CANVAS_SIZE = 720;
function Studio() {
	const canvasRef = (0, import_react.useRef)(null);
	const drawRef = (0, import_react.useRef)(null);
	const bgRef = (0, import_react.useRef)(null);
	const blobRef = (0, import_react.useRef)(null);
	const historyRef = (0, import_react.useRef)([]);
	const drawing = (0, import_react.useRef)(false);
	const last = (0, import_react.useRef)(null);
	const [tool, setTool] = (0, import_react.useState)("pencil");
	const [color, setColor] = (0, import_react.useState)(DRAW_COLORS[0].value);
	const [size, setSize] = (0, import_react.useState)(8);
	const [ready, setReady] = (0, import_react.useState)(false);
	const paint = (0, import_react.useCallback)(() => {
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
	}, []);
	const snapshot = (0, import_react.useCallback)(() => {
		const layer = drawRef.current;
		if (!layer) return;
		const ctx = layer.getContext("2d");
		if (!ctx) return;
		const data = ctx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE);
		historyRef.current.push(data);
		if (historyRef.current.length > 28) historyRef.current.shift();
	}, []);
	(0, import_react.useEffect)(() => {
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
		Promise.all([new Promise((res, rej) => {
			bg.onload = () => res();
			bg.onerror = () => rej(/* @__PURE__ */ new Error("bg"));
		}), new Promise((res, rej) => {
			blob.onload = () => res();
			blob.onerror = () => rej(/* @__PURE__ */ new Error("blob"));
		})]).then(() => {
			if (cancelled) return;
			bgRef.current = bg;
			blobRef.current = blob;
			setReady(true);
			paint();
		}).catch(() => {
			if (cancelled) return;
			setReady(true);
			paint();
		});
		return () => {
			cancelled = true;
		};
	}, [paint]);
	function pos(e) {
		const canvas = canvasRef.current;
		if (!canvas) return {
			x: 0,
			y: 0
		};
		const rect = canvas.getBoundingClientRect();
		return {
			x: (e.clientX - rect.left) / rect.width * CANVAS_SIZE,
			y: (e.clientY - rect.top) / rect.height * CANVAS_SIZE
		};
	}
	function stroke(from, to) {
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
	function onPointerDown(e) {
		e.preventDefault();
		e.currentTarget.setPointerCapture(e.pointerId);
		snapshot();
		drawing.current = true;
		const p = pos(e);
		last.current = p;
		stroke(p, p);
	}
	function onPointerMove(e) {
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
		if (!prev) ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
		else ctx.putImageData(prev, 0, 0);
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
		const w = CANVAS_SIZE * .78;
		const h = blob.height / blob.width * w;
		ctx.drawImage(blob, 158.39999999999998 / 2, (CANVAS_SIZE - h) / 2 - 8, w, h);
		paint();
	}
	function stampFace() {
		const layer = drawRef.current;
		if (!layer) return;
		snapshot();
		const ctx = layer.getContext("2d");
		if (!ctx) return;
		const cx = CANVAS_SIZE * .5;
		ctx.fillStyle = "#14161C";
		ctx.beginPath();
		ctx.ellipse(322, 352, 10, 14, 0, 0, Math.PI * 2);
		ctx.ellipse(398, 352, 10, 14, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.strokeStyle = "#FFFBF4";
		ctx.lineWidth = 6;
		ctx.lineCap = "round";
		ctx.beginPath();
		ctx.arc(cx, 378, 28, .15 * Math.PI, .85 * Math.PI);
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
		if (blob) {
			const w = CANVAS_SIZE * .78;
			const h = blob.height / blob.width * w;
			ctx.drawImage(blob, 158.39999999999998 / 2, (CANVAS_SIZE - h) / 2 - 8, w, h);
		}
		ctx.fillStyle = "#FFFBF4";
		for (const [x, y, rx, ry] of [
			[
				.32,
				.28,
				38,
				52
			],
			[
				.44,
				.24,
				46,
				64
			],
			[
				.56,
				.26,
				40,
				58
			],
			[
				.66,
				.3,
				34,
				48
			]
		]) {
			ctx.beginPath();
			ctx.ellipse(CANVAS_SIZE * x, CANVAS_SIZE * y, rx, ry, 0, 0, Math.PI * 2);
			ctx.fill();
		}
		ctx.beginPath();
		ctx.ellipse(CANVAS_SIZE * .5, CANVAS_SIZE * .26, 150, 36, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.fillStyle = "#C2413B";
		ctx.beginPath();
		ctx.arc(CANVAS_SIZE * .62, CANVAS_SIZE * .22, 22, 0, Math.PI * 2);
		ctx.fill();
		ctx.strokeStyle = "#3F7A5A";
		ctx.lineWidth = 4;
		ctx.beginPath();
		ctx.moveTo(CANVAS_SIZE * .62, CANVAS_SIZE * .2);
		ctx.quadraticCurveTo(CANVAS_SIZE * .66, CANVAS_SIZE * .12, CANVAS_SIZE * .7, CANVAS_SIZE * .14);
		ctx.stroke();
		ctx.fillStyle = "#14161C";
		ctx.beginPath();
		ctx.ellipse(CANVAS_SIZE * .45, CANVAS_SIZE * .5, 11, 15, 0, 0, Math.PI * 2);
		ctx.ellipse(CANVAS_SIZE * .55, CANVAS_SIZE * .5, 11, 15, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.strokeStyle = "#FFFBF4";
		ctx.lineWidth = 6;
		ctx.lineCap = "round";
		ctx.beginPath();
		ctx.arc(CANVAS_SIZE * .5, CANVAS_SIZE * .56, 26, .15 * Math.PI, .85 * Math.PI);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "draw",
		className: "scroll-mt-24 px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-quiet",
						children: "Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "Finish the drawing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-ink-soft sm:text-base",
						children: "Same prompt CMC posted. Draw on it, fill the cake, or hit Bake it and let the kitchen finish for you."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl bg-brand ticket",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
						ref: canvasRef,
						className: cn("block w-full touch-none select-none", tool === "eraser" ? "cursor-cell" : "cursor-crosshair"),
						style: { aspectRatio: "1 / 1" },
						onPointerDown,
						onPointerMove,
						onPointerUp,
						onPointerCancel: onPointerUp,
						"aria-label": "Drawing canvas"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 rounded-xl bg-frost p-4 ticket",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-[0.14em] text-quiet",
							children: "Tool"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "sm",
								variant: tool === "pencil" ? "primary" : "outline",
								onClick: () => setTool("pencil"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {}), "Pencil"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "sm",
								variant: tool === "eraser" ? "primary" : "outline",
								onClick: () => setTool("eraser"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eraser, {}), "Eraser"]
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-[0.14em] text-quiet",
							children: "Color"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: DRAW_COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": c.name,
								onClick: () => {
									setColor(c.value);
									setTool("pencil");
								},
								className: cn("size-9 rounded-full transition-transform duration-150", color === c.value && tool === "pencil" ? "scale-110 ring-2 ring-ink ring-offset-2 ring-offset-frost" : "shadow-[0_0_0_1px_rgba(20,22,28,0.12)]"),
								style: { backgroundColor: c.value }
							}, c.value))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium uppercase tracking-[0.14em] text-quiet",
								children: "Size"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 3,
								max: 36,
								value: size,
								onChange: (e) => setSize(Number(e.target.value)),
								className: "mt-2 w-full accent-brand"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "sm",
									variant: "outline",
									onClick: fillCake,
									disabled: !ready,
									children: "Fill cake"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									size: "sm",
									variant: "outline",
									onClick: stampFace,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smile, {}), "Face"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									size: "sm",
									variant: "outline",
									onClick: undo,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), "Undo"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									size: "sm",
									variant: "outline",
									onClick: clearAll,
									children: "Clear"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							onClick: bakeIt,
							disabled: !ready,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cake, {}), "Bake it"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "ink",
							onClick: download,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Download"]
						})
					]
				})]
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line px-4 py-12 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/blob.png",
					alt: "",
					className: "size-8 object-contain",
					width: 32,
					height: 32
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-semibold tracking-tight",
					children: "BaseCake"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] text-quiet",
					children: shortCa()
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-md text-xs leading-relaxed text-quiet",
				children: [
					"$BASECAKE is a memecoin with no intrinsic value, no expectation of financial return, and no formal team promises. Crypto is volatile. Only spend what you can afford to turn into crumbs. Contract",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: TOKEN.basescan,
						className: "underline decoration-line underline-offset-2 hover:text-ink",
						target: "_blank",
						rel: "noopener noreferrer",
						children: TOKEN.ca
					}),
					"."
				]
			})]
		})
	});
}
var NAV = [
	{
		href: "#story",
		label: "Story"
	},
	{
		href: "#cake",
		label: "The cake"
	},
	{
		href: "#draw",
		label: "Draw"
	},
	{
		href: "#buy",
		label: "Buy"
	}
];
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-line/80 bg-cream/85 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5 pr-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/art/blob.png",
						alt: "",
						className: "size-8 object-contain",
						width: 32,
						height: 32
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: "BaseCake"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-4 hidden items-center gap-1 md:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "rounded-sm px-3 py-2 text-sm text-ink-soft transition-colors duration-150 hover:bg-ink/5 hover:text-ink",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyCa, {
						size: "sm",
						className: "hidden max-w-44 sm:inline-flex"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: TOKEN.feel,
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["Buy", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})]
						})
					})]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "paper-grain min-h-dvh pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Origin, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Buy, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyBuy, {})
		]
	});
}
//#endregion
export { Home as component };
