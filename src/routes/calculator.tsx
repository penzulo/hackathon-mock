import { createFileRoute } from "@tanstack/react-router";
import { type CSSProperties, type SVGProps, useEffect, useState } from "react";

// ── ROUTE EXPORT ───────────────────────────────────────────────
export const Route = createFileRoute("/calculator")({
	component: PaintingCalculator,
});

// ── DESIGN TOKENS ─────────────────────────────────────────────
const NAVY = "#1B2444";
const BLUE = "#3366CC";
const GRAY_BG = "#F5F6F8";
const GRAY_BORDER = "#E2E4E9";
const GRAY_TEXT = "#6B7280";
const LIGHT_BLUE = "#EBF0FA";
const GREEN_TEXT = "#22863A";
const GREEN_BG = "#F0FDF4";

const icons = {
	location: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<title>SVG Title</title>
			<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
			<circle cx="12" cy="9" r="2.5" />
		</svg>
	),
	fresh: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<title>SVG Title</title>
			<rect x="3" y="3" width="18" height="18" rx="3" />
			<path d="M12 8v8M8 12h8" />
		</svg>
	),
	repaint: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
			<path d="M8 12h8M8 8h8M8 16h4" />
		</svg>
	),
	question: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<circle cx="12" cy="12" r="10" />
			<path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
		</svg>
	),
	home: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
		</svg>
	),
	full: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<rect x="3" y="3" width="18" height="18" rx="2" />
			<path d="M3 9h18M9 3v18" />
		</svg>
	),
	rooms: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<rect x="3" y="3" width="7" height="7" rx="1" />
			<rect x="14" y="3" width="7" height="7" rx="1" />
			<rect x="3" y="14" width="7" height="7" rx="1" />
			<rect x="14" y="14" width="7" height="7" rx="1" />
		</svg>
	),
	bed: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<path d="M2 12h20M2 20h20M4 12V7a2 2 0 012-2h12a2 2 0 012 2v5M7 8h4M13 8h4" />
		</svg>
	),
	sofa: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<path d="M4 11V8a4 4 0 014-4h8a4 4 0 014 4v3M2 11v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2H4a2 2 0 00-2 2zM4 17v2M20 17v2" />
		</svg>
	),
	kitchen: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<path d="M6 2v6M10 2v4a2 2 0 01-2 2H4M18 2v20M16 10h4" />
		</svg>
	),
	bath: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<path d="M4 12h16M6 12v4a4 4 0 004 4h4a4 4 0 004-4v-4M6 12V6a2 2 0 012-2 2 2 0 012 2v1" />
		</svg>
	),
	balcony: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<rect x="3" y="3" width="18" height="18" rx="2" />
			<path d="M3 12h18M8 12v9M16 12v9" />
		</svg>
	),
	child: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<circle cx="12" cy="8" r="5" />
			<path d="M4 21v-1a6 6 0 0112 0v1" />
		</svg>
	),
	pray: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<path d="M12 2v4M6 6l2 2M18 6l-2 2M12 22v-6M8 12a4 4 0 018 0" />
		</svg>
	),
	stairs: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<path d="M4 20h4v-4h4v-4h4v-4h4" />
		</svg>
	),
	ceiling: (s: CSSProperties, p: SVGProps<SVGSVGElement>) => (
		<svg style={s} viewBox="0 0 24 24" {...p}>
			<rect x="2" y="4" width="20" height="4" rx="1" />
			<path d="M6 8v12M18 8v12M2 20h20" />
		</svg>
	),
	check: (s: CSSProperties) => (
		<svg
			style={s}
			viewBox="0 0 24 24"
			fill="none"
			stroke={GREEN_TEXT}
			strokeWidth="3"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M8 12l3 3 5-5" />
		</svg>
	),
} as const;

type IconType = keyof typeof icons;

type IconProps = {
	type: IconType;
	size?: number;
	color?: string;
};

// ── RESPONSIVE HOOK ───────────────────────────────────────────
function useIsDesktop(bp = 768) {
	const [desktop, setDesktop] = useState(
		typeof window !== "undefined" ? window.innerWidth >= bp : true,
	);
	useEffect(() => {
		const h = () => setDesktop(window.innerWidth >= bp);
		window.addEventListener("resize", h);
		return () => window.removeEventListener("resize", h);
	}, [bp]);
	return desktop;
}

// ── GLOBAL CSS ────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
  * { box-sizing: border-box; }
  .srv-wrap { font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; }
  .srv-mobile-only {}
  @media (min-width: 768px) {
    .srv-mobile-only { display: none !important; }
  }
  .srv-sidebar-scroll { overflow-y: auto; }
  .srv-sidebar-scroll::-webkit-scrollbar { width: 4px; }
  .srv-sidebar-scroll::-webkit-scrollbar-track { background: transparent; }
  .srv-sidebar-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
  .srv-main-scroll { overflow-y: auto; }
  .srv-main-scroll::-webkit-scrollbar { width: 6px; }
  .srv-main-scroll::-webkit-scrollbar-track { background: #F5F6F8; }
  .srv-main-scroll::-webkit-scrollbar-thumb { background: #C4C9D4; border-radius: 4px; }
  .srv-step-item { transition: background 0.15s; }
  .srv-step-item:hover { background: rgba(255,255,255,0.05); }
  .srv-nav-btn { transition: all 0.15s; }
  .srv-nav-btn:hover:not(:disabled) { opacity: 0.88; transform: translateY(-1px); }
`;

// ── ICONS ──────────────────────────────────────────────────────
const Icon = ({ type, size = 20, color = NAVY }: IconProps) => {
	const s: CSSProperties = { width: size, height: size };
	const p: SVGProps<SVGSVGElement> = {
		stroke: color,
		strokeWidth: "2",
		fill: "none",
	};

	const Comp = icons[type];

	return Comp ? Comp(s, p) : null;
};

// ── SHARED UI ──────────────────────────────────────────────────
const ProgressBar = ({ percent }: { percent: number }) => (
	<div
		className="srv-mobile-only"
		style={{
			display: "flex",
			alignItems: "center",
			gap: 10,
			padding: "0 24px",
			marginBottom: 12,
		}}
	>
		<span style={{ fontSize: 13, color: GRAY_TEXT }}>{percent}%</span>
		<div
			style={{ flex: 1, height: 4, background: GRAY_BORDER, borderRadius: 2 }}
		>
			<div
				style={{
					width: `${percent}%`,
					height: "100%",
					background: BLUE,
					borderRadius: 2,
					transition: "width 0.3s",
				}}
			/>
		</div>
	</div>
);

const NextBtn = ({
	onClick,
	label = "Next",
	disabled,
}: {
	onClick: () => void;
	label?: string;
	disabled: boolean;
}) => (
	<div className="srv-mobile-only" style={{ padding: "8px 24px 24px" }}>
		<button
			onClick={onClick}
			disabled={disabled}
			style={{
				width: "100%",
				padding: 16,
				border: "none",
				borderRadius: 12,
				background: disabled ? GRAY_BORDER : BLUE,
				color: disabled ? GRAY_TEXT : "#fff",
				fontSize: 16,
				fontWeight: 600,
				cursor: disabled ? "not-allowed" : "pointer",
				transition: "background 0.15s",
			}}
		>
			{label}
		</button>
	</div>
);

type OptionCardProps = {
	icon?: IconType;
	label: string;
	sub?: string;
	selected?: boolean;
	compact?: boolean;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const OptionCard = ({
	icon,
	label,
	sub,
	selected,
	onClick,
	compact,
}: OptionCardProps) => (
	<div
		onClick={onClick}
		style={{
			display: "flex",
			alignItems: "center",
			gap: 12,
			padding: compact ? "12px 14px" : "16px 18px",
			border: `1.5px solid ${selected ? BLUE : GRAY_BORDER}`,
			borderRadius: 12,
			cursor: "pointer",
			background: selected ? LIGHT_BLUE : "#fff",
			transition: "all 0.15s",
		}}
	>
		{icon && (
			<div
				style={{
					width: 36,
					height: 36,
					borderRadius: 10,
					background: selected ? "#fff" : GRAY_BG,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexShrink: 0,
				}}
			>
				<Icon type={icon} size={18} />
			</div>
		)}
		<div style={{ flex: 1 }}>
			<div style={{ fontSize: 15, fontWeight: 500, color: NAVY }}>{label}</div>
			{sub && (
				<div style={{ fontSize: 12, color: GRAY_TEXT, marginTop: 2 }}>
					{sub}
				</div>
			)}
		</div>
		{selected && (
			<div
				style={{
					width: 22,
					height: 22,
					borderRadius: "50%",
					background: BLUE,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexShrink: 0,
				}}
			>
				<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
					<path
						d="M2.5 6L5 8.5L9.5 3.5"
						stroke="#fff"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		)}
	</div>
);

// ── DATA ───────────────────────────────────────────────────────
const GRADE_DATA = {
	whitewash: {
		label: "Whitewash",
		sub: "Most basic coating. Bare plaster, rental rooms.",
		hasFinish: false,
	},
	distemper: {
		label: "Distemper",
		sub: "Smooth colour coat. 3–5 year life.",
		isDistemper: true,
		types: [
			{
				id: "dry",
				label: "Dry Distemper",
				sub: "Powder mixed on site. Not washable.",
			},
			{
				id: "obd",
				label: "Oil-Bound (OBD)",
				sub: "Ready-mix. Washable. Better durability.",
			},
			{
				id: "acrylic",
				label: "Acrylic Distemper",
				sub: "950+ shades. Light cleaning possible.",
			},
			{
				id: "water",
				label: "Water-Based",
				sub: "Low odour. Easy application.",
			},
		],
	},
	economy: {
		label: "Economy Emulsion",
		sub: "Good coverage at best price. 3–4 year warranty.",
		hasFinish: true,
		finishes: [
			{
				id: "matt",
				label: "Matt",
				sub: "Flat, no sheen.",
				variants: [
					{
						id: "standard",
						label: "Standard Matt",
						sub: "1.5x coverage vs distemper.",
					},
					{
						id: "antifungal",
						label: "Anti-Fungal Matt",
						sub: "Fungal shield. 4-year warranty.",
					},
					{
						id: "waterresist",
						label: "Water Resistant Matt",
						sub: "2x water resistance. Prevents peeling.",
					},
				],
			},
			{
				id: "sheen",
				label: "Sheen",
				sub: "Soft light-reflecting finish.",
				variants: [
					{
						id: "standard",
						label: "Standard Sheen",
						sub: "Anti-fade UV. Superior washability.",
					},
					{
						id: "twinpower",
						label: "Sheen + Twin Power",
						sub: "Better coverage + whiteness + anti-fungal.",
					},
				],
			},
		],
	},
	midrange: {
		label: "Mid-Range Emulsion",
		sub: "Washable, durable. 5–6 year warranty.",
		hasFinish: true,
		finishes: [
			{
				id: "matt",
				label: "Matt",
				sub: "Flat finish, fully washable.",
				variants: [
					{
						id: "standard",
						label: "Standard Washable Matt",
						sub: "Stain Guard, anti-fungal, anti-algal.",
					},
					{
						id: "advanced",
						label: "Advanced Washable Matt",
						sub: "Superior washability + moisture protection.",
					},
					{
						id: "lotus",
						label: "Lotus Effect Matt",
						sub: "Best-in-class stain repellency.",
					},
				],
			},
			{
				id: "sheen",
				label: "Sheen / Satin",
				sub: "Soft satin, washable.",
				variants: [
					{
						id: "standard",
						label: "Standard Satin",
						sub: "Soft sheen, anti-fungal, washable.",
					},
					{
						id: "lotus",
						label: "Satin + Lotus Effect",
						sub: "Stain repellency + soft sheen.",
					},
					{
						id: "crosslink",
						label: "Cross-Linking Polymers",
						sub: "Stubborn stains removed. Non-porous film.",
					},
				],
			},
		],
	},
	luxury: {
		label: "Luxury Emulsion",
		sub: "Best brands, 8–12 year warranty.",
		hasFinish: true,
		finishes: [
			{
				id: "matt",
				label: "Matt",
				sub: "Deep flat finish, fully washable.",
				variants: [
					{
						id: "standard",
						label: "Standard Luxury Matt",
						sub: "Teflon protection. 10-year lifespan.",
					},
					{
						id: "ultra",
						label: "Ultra Matt",
						sub: "Richer, deeper matt. Ultra-smooth.",
					},
					{
						id: "antipollution",
						label: "Matt + Anti-Pollution",
						sub: "Filters air pollution. Urban apartments.",
					},
				],
			},
			{
				id: "sheen",
				label: "Sheen",
				sub: "Mid to high sheen, premium.",
				variants: [
					{
						id: "standard",
						label: "Standard Luxury Sheen",
						sub: "Kills 99% microorganisms.",
					},
					{
						id: "advanced",
						label: "Advanced Sheen",
						sub: "Anti-viral + anti-bacterial.",
					},
					{
						id: "highsheen",
						label: "High Sheen",
						sub: "Teflon + Silver Ion. Mirror-like.",
					},
				],
			},
			{
				id: "health",
				label: "Health / Anti-Microbial",
				sub: "Low-VOC, safe for all.",
				isHealth: true,
				products: [
					{
						id: "antiviral",
						label: "Anti-Viral + Anti-Bacterial",
						sub: "Full bio shield. Chemical-free. 10yr.",
					},
					{
						id: "zerovoc",
						label: "Anti-Pollution + Zero Odour",
						sub: "Singapore Green Label. IMA approved.",
					},
				],
			},
			{
				id: "ultra",
				label: "Ultra Premium",
				sub: "Royale Aspira. 12-year lifespan.",
				isSingle: true,
			},
		],
	},
};

const CEILING_GRADES = [
	{
		id: "economy",
		label: "Economy Ceiling",
		sub: "Basic flat white. Anti-drip.",
	},
	{
		id: "midrange",
		label: "Mid-Range Ceiling",
		sub: "Anti-sag. Stain-blocking primer.",
	},
	{
		id: "luxury",
		label: "Luxury Ceiling",
		sub: "Royale Matt / ATMOS. Always flat.",
	},
];

const ZONE_GRADE_KEYS = {
	dry: ["whitewash", "distemper", "economy", "midrange", "luxury"],
	kitchen: ["midrange", "luxury"],
	bath: ["economy", "midrange", "luxury"],
	balcony: ["economy", "midrange", "luxury"],
};

type RateTuple = readonly [number, number, number, number];

const PRICING = {
	grade: {
		whitewash: [4, 6, 3, 5],
		distemper: [6, 14, 5, 11],
		economy: [12, 22, 9, 17],
		midrange: [18, 34, 15, 28],
		luxury: [24, 52, 19, 45],
		economy_ceiling: [14, 24, 10, 20],
		midrange_ceiling: [20, 35, 15, 30],
		luxury_ceiling: [28, 42, 22, 35],
	},
	finish: {
		economy_matt: [12, 21, 9, 17],
		economy_sheen: [14, 22, 10, 17],
		midrange_matt: [18, 34, 15, 28],
		midrange_sheen: [20, 36, 16, 27],
		luxury_matt: [28, 44, 22, 36],
		luxury_sheen: [28, 46, 22, 40],
		luxury_health: [24, 42, 19, 34],
		luxury_ultra: [36, 52, 29, 45],
		distemper_dry: [6, 9, 5, 8],
		distemper_obd: [8, 13, 6, 10],
		distemper_acrylic: [9, 14, 7, 12],
		distemper_water: [8, 13, 6, 10],
	},
	variant: {
		economy_matt_standard: [14, 19, 10, 14],
		economy_matt_antifungal: [14, 19, 10, 15],
		economy_matt_waterresist: [15, 20, 11, 16],
		economy_matt_bioresist: [15, 21, 11, 16],
		economy_sheen_standard: [14, 20, 10, 15],
		economy_sheen_twinpower: [15, 22, 11, 17],
		midrange_matt_standard: [19, 28, 15, 22],
		midrange_matt_advanced: [22, 34, 18, 28],
		midrange_matt_lotus: [24, 34, 19, 28],
		midrange_sheen_standard: [22, 29, 18, 24],
		midrange_sheen_lotus: [24, 32, 19, 27],
		midrange_sheen_crosslink: [24, 32, 19, 27],
		luxury_matt_standard: [28, 38, 22, 32],
		luxury_matt_ultra: [32, 44, 26, 36],
		luxury_matt_antipollution: [32, 44, 26, 36],
		luxury_sheen_standard: [28, 36, 22, 30],
		luxury_sheen_advanced: [32, 42, 26, 36],
		luxury_sheen_highsheen: [29, 46, 23, 40],
		luxury_health_antiviral: [25, 34, 20, 28],
		luxury_health_zerovoc: [27, 34, 22, 28],
		luxury_ultra_aspira: [36, 52, 29, 45],
	},
} as const satisfies {
	grade: Record<string, RateTuple>;
	finish: Record<string, RateTuple>;
	variant: Record<string, RateTuple>;
};

type GradeKey = keyof typeof PRICING.grade;
type FinishKey = keyof typeof PRICING.finish;
type VariantKey = keyof typeof PRICING.variant;

type PriceKey = GradeKey | FinishKey | VariantKey;
type Unit = "sqft" | "sqm";

const sqftFromArea = (area: number | string, unit: Unit): number => {
	const n = typeof area === "number" ? area : parseFloat(area) || 0;
	return unit === "sqm" ? Math.round(n * 10.764) : n;
};

const fmtRange = (min: number, max: number): string => {
	const f = (n: number) => (n >= 1000 ? `₹${(n / 1000).toFixed(1)}k` : `₹${n}`);
	return `${f(min)}–${f(max)}`;
};

const getPriceRange = (
	key: PriceKey,
	area: number | string,
	unit: Unit,
	isFresh: boolean,
) => {
	const rates: RateTuple | undefined =
		PRICING.grade[key as GradeKey] ??
		PRICING.finish[key as FinishKey] ??
		PRICING.variant[key as VariantKey];

	if (!rates) return null;

	const sqft = sqftFromArea(area, unit);
	if (sqft <= 0) return null;

	const [fm, fx, rm, rx] = rates;
	const [min, max] = isFresh ? [fm, fx] : [rm, rx];

	return fmtRange(Math.round(sqft * min), Math.round(sqft * max));
};

const finishPriceKey = (
	gradeId: Extract<GradeKey, "distemper" | "economy" | "midrange" | "luxury">,
	finishId: string,
): FinishKey => {
	return (
		gradeId === "distemper" ? `distemper_${finishId}` : `${gradeId}_${finishId}`
	) as FinishKey;
};

const variantPriceKey = (
	gradeId: string,
	finishId: string,
	variantId: string,
): VariantKey => `${gradeId}_${finishId}_${variantId}` as VariantKey;

const ceilingPriceKey = (
	id: Extract<GradeKey, "economy" | "midrange" | "luxury">,
): GradeKey => `${id}_ceiling` as GradeKey;

type IconKey = "bed" | "kitchen" | "bath" | "balcony" | "ceiling";

type ZoneKey = "dry" | "kitchen" | "bath" | "balcony" | "ceiling";

type LabelItem = {
	label: string;
	sub: string;
};

type ZoneMetaItem = LabelItem & {
	icon: IconKey;
};

const ZONE_META = {
	dry: { label: "Bedrooms + Living room", sub: "All dry rooms", icon: "bed" },
	kitchen: { label: "Kitchen", sub: "Cooking area walls", icon: "kitchen" },
	bath: { label: "Bathrooms", sub: "All bathrooms", icon: "bath" },
	balcony: { label: "Balcony", sub: "Interior face walls", icon: "balcony" },
	ceiling: { label: "Ceilings", sub: "All selected rooms", icon: "ceiling" },
} as const satisfies Record<ZoneKey, ZoneMetaItem>;

const ZONE_CONDITIONS = {
	dry: [
		{ label: "Walls look fine", sub: "Just want new colour or refresh" },
		{ label: "Some peeling or flaking", sub: "Paint coming off in patches" },
		{
			label: "Damp patches or water marks",
			sub: "Stains, wet feel, seepage signs",
		},
		{ label: "Black spots or fungus", sub: "Mould growth on walls" },
		{ label: "Powdery / chalky feel", sub: "Old distemper — rubs off on hand" },
	],
	kitchen: [
		{ label: "Walls look fine", sub: "Just want a fresh look" },
		{ label: "Greasy / oily / stained", sub: "Built-up cooking residue" },
		{ label: "Peeling near stove or sink", sub: "Heat and moisture damage" },
		{ label: "Fungus or damp patches", sub: "Mould around wet areas" },
	],
	bath: [
		{ label: "Walls look OK", sub: "No major damage" },
		{ label: "Black spots / mould", sub: "Common in monsoon season" },
		{ label: "Peeling / bubbling", sub: "Paint lifting from moisture" },
		{ label: "Constant dampness", sub: "Walls always wet or cold" },
	],
	balcony: [
		{ label: "Walls look fine", sub: "No visible damage" },
		{ label: "Rain damage / water stains", sub: "Marks from weather exposure" },
		{ label: "Peeling from weather", sub: "Sun and rain damage" },
	],
	ceiling: [
		{ label: "Ceiling looks fine", sub: "Just want a fresh coat" },
		{ label: "Water stains / marks", sub: "Leakage marks from above" },
		{ label: "Peeling or flaking", sub: "Paint coming off overhead" },
	],
} as const satisfies Record<ZoneKey, readonly LabelItem[]>;

const MICRO_OPTIONS = [
	"Cracks",
	"Stains",
	"Uneven surface",
	"White powder",
] as const;

const JOB_TYPE_LABELS = [
	"Fresh paint (new construction)",
	"Repaint existing walls",
	"Not sure (treated as repaint)",
] as const;

const PROPERTY_LABELS = [
	"Studio apartment",
	"1 BHK",
	"2 BHK",
	"3 BHK",
	"Bungalow / Villa",
	"Row house",
] as const;

const TIMELINE_LABELS = [
	"ASAP",
	"Within 1 week",
	"Within 2 weeks",
	"Just exploring",
] as const;

const CEILING_LABELS = ["Yes — ceilings included", "No — walls only"] as const;

const PRODUCT_CODE_MAP = {
	whitewash: "PR-WH-LIM-STD-PUN",
	distemper_dry: "PR-DD-M-STD-PUN",
	distemper_obd: "PR-OBD-SH-STD-PUN",
	distemper_acrylic: "PR-AD-M-STD-PUN",
	distemper_water: "PR-WBD-M-STD-PUN",
	economy_matt_standard: "PR-EC-M-STD-PUN",
	economy_matt_antifungal: "PR-EC-M-AF-PUN",
	economy_matt_waterresist: "PR-EC-M-WR-PUN",
	economy_matt_bioresist: "PR-EC-M-BR-PUN",
	economy_sheen_standard: "PR-EC-SH-STD-PUN",
	economy_sheen_twinpower: "PR-EC-SH-TP-PUN",
	midrange_matt_standard: "PR-MR-M-STD-PUN",
	midrange_matt_advanced: "PR-MR-M-ADV-PUN",
	midrange_matt_lotus: "PR-MR-M-LT-PUN",
	midrange_sheen_standard: "PR-MR-SH-STD-PUN",
	midrange_sheen_lotus: "PR-MR-SH-LT-PUN",
	midrange_sheen_crosslink: "PR-MR-SH-XL-PUN",
	luxury_matt_standard: "PR-LX-M-STD-PUN",
	luxury_matt_ultra: "PR-LX-M-ULT-PUN",
	luxury_matt_antipollution: "PR-LX-M-AP-PUN",
	luxury_sheen_standard: "PR-LX-SH-STD-PUN",
	luxury_sheen_advanced: "PR-LX-SH-ADV-PUN",
	luxury_sheen_highsheen: "PR-LX-SH-HI-PUN",
	luxury_health_antiviral: "PR-HG-MR-STD-PUN",
	luxury_health_zerovoc: "PR-HG-MR-STD-PUN",
	luxury_ultra_aspira: "PR-UP-M-STD-PUN",
	ceiling_economy: "PR-CL-EC-STD-PUN",
	ceiling_midrange: "PR-CL-MR-AS-PUN",
	ceiling_luxury: "PR-CL-LX-STD-PUN",
} as const;

const BRAND_MAP = {
	"PR-WH-LIM-STD-PUN": ["Generic slaked lime + Fevicol binder"],
	"PR-DD-M-STD-PUN": [
		"Asian Paints — Tractor Distemper",
		"Berger — Bison Distemper",
		"Nerolac — Suraksha Distemper",
	],
	"PR-OBD-SH-STD-PUN": [
		"Asian Paints — Tractor Synthetic Distemper",
		"Berger — Rangoli Premium Distemper",
		"Nerolac — Suraksha Plus OBD",
	],
	"PR-AD-M-STD-PUN": [
		"Asian Paints — Ace Acrylic Distemper",
		"Berger — Bison Acrylic Distemper",
		"Nerolac — Healthy Home Acrylic Distemper",
	],
	"PR-WBD-M-STD-PUN": [
		"Asian Paints — Tractor Acrylic Distemper (Water-Based)",
		"Nerolac — Primer Sealer (Water-Based)",
	],
	"PR-EC-M-STD-PUN": [
		"Asian Paints — Tractor Emulsion",
		"Berger — Bison Acrylic Emulsion",
		"Nerolac — Beauty Smooth Finish",
		"Birla Opus — Style Colour Fresh",
		"Dulux — Supercover",
	],
	"PR-EC-M-AF-PUN": [
		"Asian Paints — Tractor Emulsion Advanced (Anti-Fungal)",
		"Berger — Rangoli Total Care",
	],
	"PR-EC-M-WR-PUN": [
		"Asian Paints — Tractor Aqualock",
		"Asian Paints — Ace Exterior Emulsion (secondary)",
	],
	"PR-EC-M-BR-PUN": [
		"Berger — Rangoli Total Care (Bio-Resistant)",
		"Nerolac — Beauty Gold Anti-Bacterial",
	],
	"PR-EC-SH-STD-PUN": [
		"Asian Paints — Tractor Emulsion Shyne",
		"Berger — Bison Glow",
	],
	"PR-EC-SH-TP-PUN": [
		"Asian Paints — Tractor Emulsion Shyne (Twin Power)",
		"Nerolac — Beauty Little Master Sheen",
	],
	"PR-MR-M-STD-PUN": [
		"Asian Paints — Apcolite Premium Emulsion",
		"Berger — Easy Clean",
		"Nerolac — Beauty Gold",
		"Birla Opus — Calista Ever Wash",
		"Birla Opus — Calista Ever Stay",
		"Dulux — Velvet Touch Pearl Glo",
	],
	"PR-MR-M-ADV-PUN": [
		"Asian Paints — Apcolite Advanced Premium Emulsion",
		"Berger — Walmasta Anti-Fungal Emulsion",
	],
	"PR-MR-M-LT-PUN": ["Asian Paints — Apcolite All Protek (Lotus Effect)"],
	"PR-MR-SH-STD-PUN": [
		"Asian Paints — Apcolite All Protek Shyne",
		"Nerolac — Impressions Eco Clean",
	],
	"PR-MR-SH-LT-PUN": [
		"Asian Paints — Apcolite All Protek Shyne (Lotus Effect + Satin)",
	],
	"PR-MR-SH-XL-PUN": [
		"Nerolac — Beauty Gold Washable Plus (Cross-Linking)",
		"Asian Paints — Apcolite Interior Wall Finish Lustre",
	],
	"PR-LX-M-STD-PUN": [
		"Asian Paints — Royale Luxury Emulsion",
		"Nerolac — Impressions HD",
		"Birla Opus — One Pure Elegance",
		"Dulux — Velvet Touch Diamond Glo",
	],
	"PR-LX-M-ULT-PUN": ["Asian Paints — Royale Glitz Ultra Matt"],
	"PR-LX-M-AP-PUN": ["Asian Paints — Royale ATMOS (Anti-Pollution)"],
	"PR-LX-SH-STD-PUN": [
		"Asian Paints — Royale Luxury Emulsion",
		"Berger — Silk Luxury Emulsion",
	],
	"PR-LX-SH-ADV-PUN": [
		"Asian Paints — Royale Advanced (Anti-Viral + Anti-Bacterial)",
	],
	"PR-LX-SH-HI-PUN": [
		"Asian Paints — Royale Shyne",
		"Berger — Silk Glamor",
		"Nerolac — Impressions Kashmir Luxury",
		"Nerolac — Impressions 24 Carat",
		"Dulux — Velvet Touch Diamond Glo",
	],
	"PR-HG-MR-STD-PUN": [
		"Nerolac — Impressions Eco Clean",
		"Berger — Silk Breathe Easy",
		"Asian Paints — Royale Health Shield",
	],
	"PR-UP-M-STD-PUN": [
		"Asian Paints — Royale Aspira",
		"Nerolac — Impressions Ultra HD",
		"Birla Opus — Pristine",
		"Dulux — Velvet Touch Platinum Glo",
	],
	"PR-CL-EC-STD-PUN": [
		"Berger — Bison Super Ceiling Paint (Anti-Drip)",
		"Asian Paints — Tractor Emulsion (Ceiling)",
	],
	"PR-CL-MR-AS-PUN": [
		"Asian Paints — Royale Matt (Ceiling — Flat White)",
		"Nerolac — Impressions Ceiling Coat (Anti-Sag)",
	],
	"PR-CL-LX-STD-PUN": ["Asian Paints — Royale ATMOS (Anti-Pollution Ceiling)"],
} as const satisfies Record<string, readonly string[]>;

const PREP_STEPS = {
	dry: {
		0: [
			"Dust walls, remove loose particles.",
			"Lightly sand rough patches.",
			"Fill minor cracks with wall putty.",
			"Apply one coat acrylic wall primer.",
			"Allow primer to dry fully before topcoat.",
		],
		1: [
			"Scrape all loose and peeling paint — no partial scraping.",
			"Sand scraped areas smooth.",
			"Apply two coats wall putty with sanding between coats.",
			"Apply alkali-resistant primer.",
			"Allow primer to cure 24 hours before topcoat.",
		],
		2: [
			"Identify and seal moisture source — do not paint over active damp.",
			"Allow wall to dry (minimum 5 days).",
			"Apply damp-proof / moisture-barrier primer (AP Dampstop or equivalent).",
			"Apply wall putty after primer dries.",
			"Apply one coat acrylic primer before topcoat.",
		],
		3: [
			"Apply solvent-based fungicidal solution — 2 to 3 coats, 8 hours apart.",
			"Allow 24 hours drying.",
			"Apply water-based fungicidal primer.",
			"Apply wall putty.",
			"Apply anti-fungal topcoat only — standard emulsion not permitted.",
		],
		4: [
			"Remove all distemper completely by scraping and washing.",
			"Sand bare wall smooth.",
			"Apply two coats wall putty with sanding between coats.",
			"Apply alkali-resistant primer.",
			"Allow 24 hours before topcoat.",
		],
	},
	kitchen: {
		0: [
			"Degrease entire kitchen wall surface — mandatory regardless of visible grease.",
			"Allow to dry fully.",
			"Apply waterproof acrylic putty (no standard white cement putty).",
			"Apply moisture-barrier primer.",
			"Apply two coats kitchen-grade emulsion.",
		],
		1: [
			"Heavy degreasing — two passes with alkaline cleaner.",
			"Sand stained areas.",
			"Apply waterproof acrylic putty.",
			"Apply moisture-barrier primer.",
			"Apply two coats kitchen-grade emulsion.",
		],
		2: [
			"Remove all loose and peeling paint.",
			"Degrease thoroughly — two passes.",
			"Waterproof acrylic putty on all surfaces.",
			"Apply moisture-barrier primer.",
			"Apply two coats kitchen-grade emulsion.",
		],
		3: [
			"Apply solvent-based fungicidal solution — 2 coats.",
			"Degrease after fungicidal treatment.",
			"Apply waterproof acrylic putty.",
			"Apply moisture-barrier primer.",
			"Apply anti-fungal topcoat.",
		],
	},
	bath: {
		0: [
			"Waterproof acrylic putty on all bathroom walls — no exceptions.",
			"Apply moisture-barrier primer.",
			"Apply anti-fungal primer.",
			"Apply two coats specified emulsion.",
		],
		1: [
			"Apply solvent-based fungicidal solution — 2 to 3 coats, 8 hours apart.",
			"Allow 24 hours after final fungicidal coat.",
			"Apply waterproof acrylic putty.",
			"Apply moisture-barrier primer.",
			"Apply anti-fungal topcoat.",
		],
		2: [
			"Remove all loose and peeling paint.",
			"Waterproof acrylic putty on stripped areas.",
			"Apply moisture-barrier primer.",
			"Allow 24 hours before topcoat.",
			"Apply two coats specified emulsion.",
		],
		3: [
			"Identify and seal moisture source — report to Servzo if unresolved.",
			"Apply interior damp-proof coating (AP SmartCare Damp Sheath).",
			"Allow 48 hours curing.",
			"Apply waterproof acrylic putty.",
			"Apply moisture-barrier primer then specified emulsion.",
		],
	},
	balcony: {
		0: [
			"Dust and clean all surfaces.",
			"Fill minor cracks with exterior-grade crack filler.",
			"Apply alkali-resistant primer.",
			"Apply two coats specified emulsion.",
		],
		1: [
			"Sand all water-stained areas.",
			"Apply alkali-resistant primer.",
			"Apply stain-blocking primer on deep stain areas.",
			"Apply two coats specified emulsion.",
		],
		2: [
			"Scrape all loose and peeling paint.",
			"Fill cracks with exterior-grade crack filler.",
			"Apply alkali-resistant primer.",
			"Apply two coats specified emulsion.",
		],
	},
	ceiling: {
		0: [
			"Lightly sand ceiling surface.",
			"Apply stain-blocking primer (recommended even without visible stains).",
			"Apply anti-sag ceiling emulsion — two coats minimum.",
		],
		1: [
			"Confirm leakage source resolved — do not paint over active leakage.",
			"Apply stain-blocking primer (AP Stainbloc) — mandatory.",
			"Allow 24 hours drying.",
			"Apply anti-sag ceiling emulsion — two coats minimum.",
		],
		2: [
			"Scrape all loose and peeling ceiling paint.",
			"Sand smooth.",
			"Apply stain-blocking primer.",
			"Apply anti-sag ceiling emulsion — two coats minimum.",
		],
	},
} as const satisfies {
	dry: Record<number, readonly string[]>;
	kitchen: Record<number, readonly string[]>;
	bath: Record<number, readonly string[]>;
	balcony: Record<number, readonly string[]>;
	ceiling: Record<number, readonly string[]>;
};

const getRawRange = (
	key: PriceKey,
	area: number | string,
	unit: Unit,
	isFresh: boolean,
): { min: number; max: number } | null => {
	const rates =
		PRICING.grade[key as keyof typeof PRICING.grade] ??
		PRICING.finish[key as keyof typeof PRICING.finish] ??
		PRICING.variant[key as keyof typeof PRICING.variant];

	if (!rates) return null;

	const sqft = sqftFromArea(area, unit);
	if (sqft <= 0) return null;

	const [fm, fx, rm, rx] = rates;
	const [min, max] = isFresh ? [fm, fx] : [rm, rx];

	return { min: Math.round(sqft * min), max: Math.round(sqft * max) };
};

const fmtRupee = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;

type GradeId = keyof typeof GRADE_DATA;
type CeilingGradeId = (typeof CEILING_GRADES)[number]["id"];

type ZoneSelection = {
	grade?: GradeId | CeilingGradeId;
	distemperType?: string;
	finish?: string;
	variant?: string;
	healthProduct?: string;
};

type ZoneState = {
	area: string;
	areaUnit: Unit;
	grade: GradeId | CeilingGradeId | null;
	finish: string | null;
	variant: string | null;
	distemperType: string | null;
	healthProduct: string | null;
	condition: number | null;
	micro: number[];
};

const getZoneSelectionTrail = (
	zoneKey: ZoneKey,
	zs: ZoneSelection | null | undefined,
) => {
	if (!zs || !zs.grade) return "—";

	const isCeiling = zoneKey === "ceiling";

	if (isCeiling)
		return CEILING_GRADES.find((g) => g.id === zs.grade)?.label || zs.grade;

	const gradeKey = zs.grade as keyof typeof GRADE_DATA;
	const gradeLabel = GRADE_DATA[gradeKey]?.label ?? zs.grade;

	const parts: string[] = [gradeLabel];

	if (zs.grade === "distemper" && zs.distemperType) {
		const dt = GRADE_DATA.distemper?.types?.find(
			(t) => t.id === zs.distemperType,
		);
		if (dt) parts.push(dt.label);
	} else if (zs.finish) {
		const gd = GRADE_DATA[gradeKey];
		const fd = gd?.finishes?.find((f) => f.id === zs.finish);

		if (fd) {
			parts.push(fd.label);

			if (fd.isSingle) parts.push("Royale Aspira");
			else if (fd.isHealth && zs.healthProduct) {
				const hp = fd.products?.find((p) => p.id === zs.healthProduct);
				if (hp) parts.push(hp.label);
			} else if (zs.variant) {
				const vr = fd.variants?.find((v) => v.id === zs.variant);
				if (vr) parts.push(vr.label);
			}
		}
	}
	return parts.join(" → ");
};

const getZonePriceKey = (zoneKey: ZoneKey, zs: ZoneSelection) => {
	if (!zs || !zs.grade) return null;
	const isCeiling = zoneKey === "ceiling";
	if (isCeiling) return `${zs.grade}_ceiling`;
	if (zs.grade === "whitewash") return "whitewash";
	if (zs.grade === "distemper" && zs.distemperType)
		return `distemper_${zs.distemperType}`;
	if (zs.variant) return `${zs.grade}_${zs.finish}_${zs.variant}`;
	if (zs.healthProduct) return `${zs.grade}_${zs.finish}_${zs.healthProduct}`;
	if (zs.finish) return `${zs.grade}_${zs.finish}`;
	return zs.grade;
};

type ProductCodeMap = typeof PRODUCT_CODE_MAP;

type ProductKey = keyof ProductCodeMap;

// pattern-based subsets
type CeilingKey = Extract<ProductKey, `ceiling_${string}`>;
type DistemperKey = Extract<ProductKey, `distemper_${string}`>;

const resolveProductCode = (
	grade: GradeKey,
	finish?: FinishKey,
	variant?: string,
	distemperType?: string,
	healthProduct?: string,
	isCeiling?: boolean,
): ProductCodeMap[ProductKey] | "PR-UNKNOWN" => {
	if (isCeiling) {
		const key = `ceiling_${grade}` as CeilingKey;
		return PRODUCT_CODE_MAP[key] ?? "PR-UNKNOWN";
	}

	if (grade === "whitewash") {
		return PRODUCT_CODE_MAP.whitewash;
	}

	if (grade === "distemper" && distemperType) {
		const key = `distemper_${distemperType}` as DistemperKey;
		return PRODUCT_CODE_MAP[key] ?? "PR-UNKNOWN";
	}

	if (finish && variant) {
		const key = `${grade}_${finish}_${variant}` as VariantKey;
		return PRODUCT_CODE_MAP[key] ?? "PR-UNKNOWN";
	}

	if (finish && healthProduct) {
		const key = `${grade}_${finish}_${healthProduct}` as VariantKey;
		return PRODUCT_CODE_MAP[key] ?? "PR-UNKNOWN";
	}

	return "PR-UNKNOWN";
};

// ── HTML BUILDERS ─────────────────────────────────────────────
const SHARED_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1B2444; background: #fff; font-size: 14px; line-height: 1.6; }
  .page { max-width: 800px; margin: 0 auto; padding: 36px 28px; }
  .header { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 20px; border-bottom: 2px solid #3366CC; margin-bottom: 24px; }
  .logo { font-size: 26px; font-weight: 800; color: #3366CC; letter-spacing: -0.5px; }
  .logo span { color: #1B2444; }
  .meta { display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 24px; padding: 14px 16px; background: #F5F6F8; border-radius: 8px; }
  .mi { display: flex; flex-direction: column; gap: 2px; }
  .ml { font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #6B7280; font-weight: 700; }
  .mv { font-size: 13px; font-weight: 600; color: #1B2444; }
  h2 { font-size: 16px; font-weight: 700; color: #1B2444; margin-bottom: 12px; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th { background: #1B2444; color: #fff; padding: 10px 12px; text-align: left; font-size: 11px; letter-spacing: 0.05em; text-transform: uppercase; }
  td { padding: 10px 12px; border-bottom: 1px solid #E2E4E9; vertical-align: top; }
  tr:nth-child(even) td { background: #F5F6F8; }
  .total { background: #EBF0FA; border: 1.5px solid #3366CC; border-radius: 8px; padding: 14px 18px; margin-top: 16px; display: flex; justify-content: space-between; align-items: center; }
  .tl { font-size: 14px; font-weight: 700; color: #1B2444; }
  .tv { font-size: 22px; font-weight: 800; color: #3366CC; }
  .footer { margin-top: 28px; padding-top: 14px; border-top: 1px solid #E2E4E9; font-size: 11px; color: #6B7280; line-height: 1.7; }
  @media print { body { font-size: 12px; } .page { padding: 16px; } }
`;

type ZoneDocData = {
	zoneKey: ZoneKey;
	zoneLabel: string;
	area: number;
	selectionTrail: string;
	productCode: string;
	conditionLabel: string;
	conditionIndex: number;
	micro: number[];
	estimateFormatted: string;
};

type CustomerDocParams = {
	jobTypeLabel: string;
	propertyLabel: string;
	timelineLabel: string;
	location: string;
	zones: ZoneDocData[];
	totalMin: number;
	totalMax: number;
	rfqId: string;
	generatedAt: string;
	isFresh: boolean;
};

type VendorDocParams = Omit<CustomerDocParams, "totalMin" | "totalMax">;

const buildCustomerDoc = ({
	propertyLabel,
	timelineLabel,
	location,
	zones,
	totalMin,
	totalMax,
	rfqId,
	generatedAt,
	isFresh,
}: CustomerDocParams) => {
	const jobLabel = isFresh
		? "Fresh Paint (New Construction)"
		: "Repaint Existing Walls";
	const rows = zones
		.map(
			(z) =>
				`<tr><td><strong>${z.zoneLabel}</strong></td><td>${z.area} sq ft</td><td>${z.selectionTrail}</td><td style="font-weight:700;color:#3366CC">${z.estimateFormatted}</td></tr>`,
		)
		.join("");
	return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Servzo — Quote ${rfqId}</title><style>${SHARED_CSS}</style></head><body><div class="page"><div class="header"><div><div class="logo">Serv<span>zo</span></div><div style="font-size:12px;color:#6B7280;margin-top:4px">Painting Quote</div></div><div style="text-align:right"><div style="font-size:11px;color:#6B7280">Quote ID</div><div style="font-size:15px;font-weight:700">${rfqId}</div><div style="font-size:11px;color:#6B7280;margin-top:4px">${generatedAt}</div></div></div><div class="meta"><div class="mi"><span class="ml">Job Type</span><span class="mv">${jobLabel}</span></div><div class="mi"><span class="ml">Property</span><span class="mv">${propertyLabel}</span></div><div class="mi"><span class="ml">Location</span><span class="mv">${location || "Pune"}</span></div><div class="mi"><span class="ml">Timeline</span><span class="mv">${timelineLabel}</span></div></div><h2>Zone Summary</h2><table><thead><tr><th>Zone</th><th>Area</th><th>Grade Selected</th><th>Estimated Cost</th></tr></thead><tbody>${rows}</tbody></table><div class="total"><div class="tl">Total Estimated Range</div><div class="tv">${fmtRupee(totalMin)} – ${fmtRupee(totalMax)}</div></div><div class="footer"><p>This is an indicative estimate. Final price is quoted by the vendor after site inspection and may vary based on wall condition, access, and prep requirements.</p><p style="margin-top:6px">Prices include material + labour + standard putty and primer. Servzo — Pune · servzo.in</p></div></div></body></html>`;
};

const buildVendorDoc = ({
	propertyLabel,
	timelineLabel,
	location,
	zones,
	rfqId,
	generatedAt,
	isFresh,
}: VendorDocParams) => {
	const jobLabel = isFresh
		? "Fresh Paint (New Construction)"
		: "Repaint Existing Walls";
	const zoneBlocks = zones
		.map((z) => {
			const brands = (BRAND_MAP[z.productCode] || ["See Servzo spec sheet"])
				.map((b) => `<li>${b}</li>`)
				.join("");
			const prep = (
				PREP_STEPS[z.zoneKey]?.[z.conditionIndex] ||
				PREP_STEPS[z.zoneKey]?.[0] ||
				[]
			)
				.map((s) => `<li>${s}</li>`)
				.join("");
			const microText =
				z.micro?.length > 0
					? `<div style="margin-top:4px;font-size:11px;color:#6B7280">Also noted: ${z.micro.map((mi) => MICRO_OPTIONS[mi]).join(", ")}</div>`
					: "";
			return `<div style="border:1.5px solid #E2E4E9;border-radius:8px;margin-bottom:14px;overflow:hidden"><div style="background:#1B2444;color:#fff;padding:10px 14px;display:flex;justify-content:space-between"><span style="font-weight:700;font-size:14px">${z.zoneLabel}</span><span style="font-size:12px;opacity:0.7">${z.area} sq ft</span></div><div style="padding:12px 14px"><div style="background:#EBF0FA;border:1.5px solid #3366CC;border-radius:6px;padding:10px 12px;margin-bottom:12px"><div style="font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:#3366CC;font-weight:700;margin-bottom:3px">Product Code</div><div style="font-size:16px;font-weight:800;letter-spacing:0.5px">${z.productCode}</div><div style="font-size:12px;color:#6B7280;margin-top:3px">${z.selectionTrail}</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px"><div><div style="font-size:10px;text-transform:uppercase;color:#6B7280;font-weight:700;margin-bottom:4px">Approved Brands</div><ul style="font-size:11px;padding-left:14px;line-height:1.9">${brands}</ul></div><div><div style="font-size:10px;text-transform:uppercase;color:#6B7280;font-weight:700;margin-bottom:4px">Wall Condition</div><div style="font-size:12px;font-weight:500">${z.conditionLabel}</div>${microText}</div></div><div style="background:#F5F6F8;border-radius:6px;padding:10px 12px;margin-bottom:12px"><div style="font-size:10px;text-transform:uppercase;color:#6B7280;font-weight:700;margin-bottom:6px">Mandatory Prep Steps</div><ol style="font-size:11px;padding-left:16px;line-height:1.9">${prep}</ol></div><div style="display:flex;align-items:center;gap:10px"><div style="font-size:12px;font-weight:700;white-space:nowrap">Your Quote:</div><div style="flex:1;border-bottom:2px solid #1B2444;height:26px"></div><div style="font-size:12px;color:#6B7280">₹ ___________</div></div></div></div>`;
		})
		.join("");
	const quoteRows = zones
		.map(
			(z) =>
				`<tr><td>${z.zoneLabel}</td><td>${z.area} sq ft</td><td style="font-family:monospace;font-weight:700;font-size:12px">${z.productCode}</td><td style="border-bottom:1.5px solid #1B2444">&nbsp;</td></tr>`,
		)
		.join("");
	return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Servzo — Vendor Spec ${rfqId}</title><style>${SHARED_CSS}</style></head><body><div class="page"><div class="header"><div><div class="logo">Serv<span>zo</span></div><div style="font-size:12px;color:#6B7280;margin-top:4px">Vendor Technical Specification</div></div><div style="text-align:right"><div style="font-size:11px;color:#6B7280">RFQ ID</div><div style="font-size:15px;font-weight:700">${rfqId}</div><div style="font-size:11px;color:#6B7280;margin-top:4px">${generatedAt}</div></div></div><div style="background:#FEF3C7;border:1.5px solid #D97706;border-radius:6px;padding:8px 12px;font-size:12px;font-weight:700;color:#92400E;margin-bottom:18px">VENDOR COPY — CONFIDENTIAL — Do not share with customer</div><div class="meta"><div class="mi"><span class="ml">Job Type</span><span class="mv">${jobLabel}</span></div><div class="mi"><span class="ml">Property</span><span class="mv">${propertyLabel}</span></div><div class="mi"><span class="ml">Location</span><span class="mv">${location || "Pune"}</span></div><div class="mi"><span class="ml">Timeline</span><span class="mv">${timelineLabel}</span></div></div><h2>Zone Specifications</h2>${zoneBlocks}<h2 style="margin-top:28px">Quote Summary Table</h2><table><thead><tr><th>Zone</th><th>Area</th><th>Product Code</th><th>Your Quote (₹)</th></tr></thead><tbody>${quoteRows}<tr><td colspan="3" style="font-weight:700;text-align:right;padding-right:14px">TOTAL</td><td style="border-bottom:2px solid #1B2444">&nbsp;</td></tr></tbody></table><div class="footer"><p><strong>Instructions:</strong> Quote per product codes specified. Brand substitutions require Servzo approval. Include all prep steps in quoted price. Return completed quote table within 24 hours.</p><p style="margin-top:6px">Servzo — Pune · servzo.in · vendor@servzo.in</p></div></div></body></html>`;
};

const ROOM_ITEMS: { icon: IconType; label: string; zone: string }[] = [
	{ icon: "bed", label: "Bedroom(s)", zone: "dry" },
	{ icon: "sofa", label: "Living room", zone: "dry" },
	{ icon: "kitchen", label: "Kitchen", zone: "kitchen" },
	{ icon: "bath", label: "Bathroom(s)", zone: "bath" },
	{ icon: "balcony", label: "Balcony", zone: "balcony" },
	{ icon: "child", label: "Kids room", zone: "dry" },
	{ icon: "pray", label: "Pooja room", zone: "dry" },
	{ icon: "stairs", label: "Staircase", zone: "dry" },
];

// ── ZONE CARD ─────────────────────────────────────────────────
type ZoneCardProps = {
	zoneKey: ZoneKey;
	isFresh: boolean;
	isActive: boolean;
	onActivate: () => void;
	state: ZoneState;
	onChange: (s: ZoneState) => void;
};

function ZoneCard({
	zoneKey,
	isFresh,
	isActive,
	onActivate,
	state,
	onChange,
}: ZoneCardProps) {
	const isCeiling = zoneKey === "ceiling";
	const meta = ZONE_META[zoneKey];
	const {
		area = "",
		areaUnit = "sqft",
		grade,
		finish,
		variant,
		distemperType,
		healthProduct,
		condition,
		micro = [],
	} = state;

	const gradeData = !isCeiling && grade ? GRADE_DATA[grade] : null;
	const finishData = gradeData?.finishes?.find((f) => f.id === finish) || null;

	const showGrade = area !== "";
	const showDistemperTypes = showGrade && grade === "distemper";
	const showFinish =
		showGrade &&
		grade &&
		!isCeiling &&
		gradeData?.hasFinish &&
		!gradeData?.isDistemper;
	const showVariants =
		showFinish &&
		finish &&
		finishData &&
		!finishData.isSingle &&
		!finishData.isHealth;
	const showHealthProducts = showFinish && finish && finishData?.isHealth;
	const showUltraNote = showFinish && finish && finishData?.isSingle;

	const gradeDecisionMade = isCeiling
		? grade !== null
		: grade === "whitewash"
			? true
			: grade === "distemper"
				? distemperType !== null
				: !gradeData?.hasFinish
					? true
					: finish === null
						? false
						: finishData?.isSingle
							? true
							: finishData?.isHealth
								? healthProduct !== null
								: variant !== null;

	const showCondition = !isFresh && grade !== null && gradeDecisionMade;
	const isDone =
		area !== "" &&
		grade !== null &&
		gradeDecisionMade &&
		(isFresh || condition !== null);

	const up = (patch: Partial<ZoneState>) => onChange({ ...state, ...patch });
	const gp = (key: string) =>
		getPriceRange(key as PriceKey, area, areaUnit, isFresh);

	const buildSummary = () => {
		if (!grade) return null;
		const gradeLabel = isCeiling
			? CEILING_GRADES.find((g) => g.id === grade)?.label
			: GRADE_DATA[grade]?.label;
		if (!gradeLabel) return null;
		let priceKey = isCeiling ? ceilingPriceKey(grade) : grade;
		let label = gradeLabel;
		if (finish && !isCeiling) {
			const finishLabel =
				gradeData?.finishes?.find((f) => f.id === finish)?.label ||
				GRADE_DATA.distemper?.types?.find((t) => t.id === finish)?.label;
			if (finishLabel) {
				label += ` → ${finishLabel}`;
				priceKey = finishPriceKey(grade, finish);
			}
			if (variant) {
				const variantLabel = finishData?.variants?.find(
					(v) => v.id === variant,
				)?.label;
				if (variantLabel) {
					label += ` → ${variantLabel}`;
					priceKey = variantPriceKey(grade, finish, variant);
				}
			}
			if (healthProduct) {
				const hpLabel = finishData?.products?.find(
					(p) => p.id === healthProduct,
				)?.label;
				if (hpLabel) {
					label += ` → ${hpLabel}`;
					priceKey = variantPriceKey(grade, finish, healthProduct);
				}
			}
		}
		if (distemperType) {
			const dtLabel = GRADE_DATA.distemper.types.find(
				(t) => t.id === distemperType,
			)?.label;
			if (dtLabel) {
				label += ` → ${dtLabel}`;
				priceKey = `distemper_${distemperType}`;
			}
		}
		const price = gp(priceKey);
		return { label, price };
	};

	const summary = buildSummary();

	const SL = {
		fontSize: 10,
		letterSpacing: "0.1em",
		textTransform: "uppercase",
		color: GRAY_TEXT,
		fontWeight: 600,
		margin: "14px 0 8px",
	};
	const radioRow = (sel: boolean) => ({
		display: "flex",
		alignItems: "flex-start",
		gap: 8,
		padding: "10px 12px",
		border: `1.5px solid ${sel ? BLUE : GRAY_BORDER}`,
		borderRadius: 8,
		cursor: "pointer",
		background: sel ? LIGHT_BLUE : "#fff",
		transition: "all 0.15s",
	});
	const radioDot = (sel: boolean) => ({
		width: 16,
		height: 16,
		borderRadius: "50%",
		border: `2px solid ${sel ? BLUE : GRAY_BORDER}`,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
		marginTop: 2,
	});

	type TileItem = { id: string; label: string; sub?: string };

	const Tiles = ({
		items,
		selectedKey,
		onSelect,
		getPriceKey,
	}: {
		items: TileItem[];
		selectedKey: string | null | undefined;
		onSelect: (id: string) => void;
		getPriceKey?: (id: string) => string;
	}) => (
		<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
			{items.map((item) => {
				const priceKey = getPriceKey ? getPriceKey(item.id) : item.id;
				const price = area ? gp(priceKey) : null;
				const sel = selectedKey === item.id;
				return (
					<div
						key={item.id}
						onClick={() => onSelect(item.id)}
						style={{
							padding: "12px",
							borderRadius: 10,
							cursor: "pointer",
							border: `1.5px solid ${sel ? BLUE : GRAY_BORDER}`,
							background: sel ? LIGHT_BLUE : "#fff",
							transition: "all 0.15s",
						}}
					>
						<div
							style={{
								fontSize: 13,
								fontWeight: 600,
								color: sel ? BLUE : NAVY,
								marginBottom: 3,
							}}
						>
							{item.label}
						</div>
						<div
							style={{
								fontSize: 11,
								color: GRAY_TEXT,
								lineHeight: 1.4,
								marginBottom: price ? 6 : 0,
							}}
						>
							{item.sub}
						</div>
						{price && (
							<div
								style={{
									fontSize: 12,
									fontWeight: 600,
									color: sel ? BLUE : "#2D6A4F",
									background: sel ? "rgba(51,102,204,0.08)" : "#F0FDF4",
									borderRadius: 5,
									padding: "3px 7px",
									display: "inline-block",
									marginTop: 2,
								}}
							>
								{price}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);

	const RadioList = ({
		items,
		selectedKey,
		onSelect,
		getPriceKey,
	}: {
		items: { id: string | number; label: string; sub?: string }[];
		selectedKey: string | number | null | undefined;
		onSelect: (id: string | number) => void;
		getPriceKey?: (id: string) => string | null;
	}) => (
		<div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
			{items.map((item) => {
				const priceKey = getPriceKey ? getPriceKey(item.id) : null;
				const price = priceKey && area ? gp(priceKey) : null;
				const sel = selectedKey === item.id;
				return (
					<div
						key={item.id}
						onClick={() => onSelect(item.id)}
						style={radioRow(sel)}
					>
						<div style={radioDot(sel)}>
							{sel && (
								<div
									style={{
										width: 8,
										height: 8,
										borderRadius: "50%",
										background: BLUE,
									}}
								/>
							)}
						</div>
						<div style={{ flex: 1 }}>
							<div style={{ fontSize: 13, fontWeight: 500, color: NAVY }}>
								{item.label}
							</div>
							<div style={{ fontSize: 11, color: GRAY_TEXT }}>{item.sub}</div>
						</div>
						{price && (
							<div
								style={{
									fontSize: 12,
									fontWeight: 600,
									color: sel ? BLUE : "#2D6A4F",
									background: sel ? "rgba(51,102,204,0.1)" : "#F0FDF4",
									borderRadius: 5,
									padding: "3px 8px",
									flexShrink: 0,
									alignSelf: "center",
									marginLeft: 8,
								}}
							>
								{price}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);

	return (
		<div
			style={{
				border: `1.5px solid ${isActive ? BLUE : GRAY_BORDER}`,
				borderRadius: 12,
				overflow: "hidden",
				transition: "border-color 0.15s",
			}}
		>
			<div
				onClick={onActivate}
				style={{
					display: "flex",
					alignItems: "center",
					gap: 10,
					padding: "12px 14px",
					cursor: "pointer",
				}}
			>
				<div
					style={{
						width: 32,
						height: 32,
						borderRadius: 8,
						background: GRAY_BG,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Icon type={meta.icon} size={16} />
				</div>
				<div style={{ flex: 1 }}>
					<div style={{ fontSize: 14, fontWeight: 500, color: NAVY }}>
						{meta.label}
					</div>
					<div style={{ fontSize: 11, color: GRAY_TEXT }}>{meta.sub}</div>
				</div>
				<span
					style={{
						fontSize: 11,
						padding: "3px 8px",
						borderRadius: 4,
						fontWeight: 500,
						background: isDone ? "#E6F9ED" : GRAY_BG,
						color: isDone ? GREEN_TEXT : GRAY_TEXT,
					}}
				>
					{isDone ? "Done ✓" : "Select"}
				</span>
			</div>

			{isActive && (
				<div
					style={{
						padding: "0 14px 14px",
						borderTop: `1px solid ${GRAY_BORDER}`,
					}}
				>
					<div style={SL}>Area for this zone</div>
					<div style={{ display: "flex", gap: 8, alignItems: "center" }}>
						<input
							type="number"
							placeholder="Enter size"
							value={area}
							onChange={(e) => up({ area: e.target.value })}
							style={{
								flex: 1,
								padding: "10px 12px",
								border: `1.5px solid ${GRAY_BORDER}`,
								borderRadius: 8,
								fontSize: 14,
								outline: "none",
								color: NAVY,
								background: "#fff",
							}}
						/>
						<div
							style={{
								display: "flex",
								border: `1.5px solid ${GRAY_BORDER}`,
								borderRadius: 8,
								overflow: "hidden",
							}}
						>
							{["sqft", "sqm"].map((unit) => (
								<div
									key={unit}
									onClick={() => up({ areaUnit: unit })}
									style={{
										padding: "10px 12px",
										cursor: "pointer",
										fontSize: 12,
										fontWeight: 500,
										background: areaUnit === unit ? BLUE : "#fff",
										color: areaUnit === unit ? "#fff" : GRAY_TEXT,
										transition: "all 0.15s",
									}}
								>
									{unit === "sqft" ? "sq ft" : "sq m"}
								</div>
							))}
						</div>
					</div>

					{showGrade && (
						<>
							<div style={SL}>Pick a grade</div>
							{isCeiling ? (
								<Tiles
									items={CEILING_GRADES}
									selectedKey={grade}
									onSelect={(k) =>
										up({
											grade: k,
											finish: null,
											variant: null,
											distemperType: null,
											healthProduct: null,
											condition: null,
											micro: [],
										})
									}
									getPriceKey={(id) => ceilingPriceKey(id)}
								/>
							) : (
								<Tiles
									items={ZONE_GRADE_KEYS[zoneKey].map((k) => ({
										id: k,
										...GRADE_DATA[k],
									}))}
									selectedKey={grade}
									onSelect={(k) =>
										up({
											grade: k,
											finish: null,
											variant: null,
											distemperType: null,
											healthProduct: null,
											condition: null,
											micro: [],
										})
									}
									getPriceKey={(id) => id}
								/>
							)}
						</>
					)}

					{summary && (
						<div
							style={{
								margin: "12px 0 2px",
								padding: "10px 12px",
								background: "#EBF0FA",
								borderRadius: 8,
								borderLeft: "3px solid #3366CC",
							}}
						>
							<div style={{ fontSize: 11, color: GRAY_TEXT, marginBottom: 3 }}>
								Estimated cost for this zone
							</div>
							<div
								style={{
									fontSize: 13,
									fontWeight: 600,
									color: NAVY,
									lineHeight: 1.5,
								}}
							>
								{summary.label}
							</div>
							{summary.price && (
								<div
									style={{
										fontSize: 16,
										fontWeight: 700,
										color: BLUE,
										marginTop: 4,
									}}
								>
									{summary.price}
								</div>
							)}
						</div>
					)}

					{showDistemperTypes && (
						<>
							<div style={SL}>Which type?</div>
							<RadioList
								items={GRADE_DATA.distemper.types}
								selectedKey={distemperType}
								onSelect={(v) => up({ distemperType: v })}
								getPriceKey={(id) => `distemper_${id}`}
							/>
						</>
					)}
					{showFinish && (
						<>
							<div style={SL}>Finish type</div>
							<RadioList
								items={gradeData.finishes}
								selectedKey={finish}
								onSelect={(v) =>
									up({ finish: v, variant: null, healthProduct: null })
								}
								getPriceKey={(id) => finishPriceKey(grade, id)}
							/>
						</>
					)}
					{showVariants && (
						<>
							<div style={SL}>Variant</div>
							<RadioList
								items={finishData.variants}
								selectedKey={variant}
								onSelect={(v) => up({ variant: v })}
								getPriceKey={(id) => variantPriceKey(grade, finish, id)}
							/>
						</>
					)}
					{showHealthProducts && (
						<>
							<div style={SL}>Select product</div>
							<RadioList
								items={finishData.products}
								selectedKey={healthProduct}
								onSelect={(v) => up({ healthProduct: v })}
								getPriceKey={(id) => variantPriceKey(grade, finish, id)}
							/>
						</>
					)}
					{showUltraNote && (
						<div
							style={{
								padding: "10px 12px",
								background: GREEN_BG,
								borderRadius: 8,
								marginTop: 8,
							}}
						>
							<div style={{ fontSize: 12, color: GREEN_TEXT, fontWeight: 500 }}>
								✓ Royale Aspira selected — 12-year lifespan, ultra-smooth,
								highest tier.
							</div>
						</div>
					)}
					{showCondition && (
						<>
							<div style={SL}>Wall condition</div>
							<RadioList
								items={(ZONE_CONDITIONS[zoneKey] || []).map((o, i) => ({
									id: i,
									...o,
								}))}
								selectedKey={condition}
								onSelect={(v) => up({ condition: v })}
							/>
							<div style={SL}>Anything else? (optional)</div>
							<div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
								{MICRO_OPTIONS.map((m, mi) => {
									const sel = micro.includes(mi);
									return (
										<div
											key={mi}
											onClick={() =>
												up({
													micro: sel
														? micro.filter((x) => x !== mi)
														: [...micro, mi],
												})
											}
											style={{
												padding: "6px 12px",
												borderRadius: 6,
												cursor: "pointer",
												fontSize: 12,
												fontWeight: 500,
												transition: "all 0.15s",
												border: `1.5px solid ${sel ? "#D97706" : GRAY_BORDER}`,
												background: sel ? "#FEF3C7" : "#fff",
												color: sel ? "#92400E" : GRAY_TEXT,
											}}
										>
											{m}
										</div>
									);
								})}
							</div>
						</>
					)}
					{isFresh && grade !== null && gradeDecisionMade && (
						<div
							style={{
								padding: "10px 12px",
								background: GREEN_BG,
								borderRadius: 8,
								marginTop: 12,
							}}
						>
							<div style={{ fontSize: 12, color: GREEN_TEXT }}>
								✓ New walls — condition auto-noted. No prep assessment needed.
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

// ── SUMMARY SCREEN ────────────────────────────────────────────
function SummaryScreen({
	jobType,
	propertyType,
	scope,
	selectedRooms,
	ceilings,
	timeline,
	pincode,
	address,
	zones,
	zoneStates,
	isFresh,
	onBack,
}: {
	jobType: number | null;
	propertyType: number | null;
	scope: number | null;
	selectedRooms: number[];
	ceilings: number | null;
	timeline: number | null;
	pincode: string;
	address: string;
	zones: ZoneKey[];
	zoneStates: Partial<Record<ZoneKey, ZoneState>>;
	isFresh: boolean;
	onBack: () => void;
}) {
	const [activeTab, setActiveTab] = useState(null);

	const ZONE_CONDITION_LABELS = {
		dry: [
			"Walls look fine",
			"Some peeling or flaking",
			"Damp patches / water marks",
			"Black spots or fungus",
			"Powdery / chalky (old distemper)",
		],
		kitchen: [
			"Walls look fine",
			"Greasy / oily / stained",
			"Peeling near stove or sink",
			"Fungus or damp patches",
		],
		bath: [
			"Walls look OK",
			"Black spots / mould",
			"Peeling / bubbling",
			"Constant dampness",
		],
		balcony: [
			"Walls look fine",
			"Rain damage / water stains",
			"Peeling from weather",
		],
		ceiling: [
			"Ceiling looks fine",
			"Water stains / marks",
			"Peeling or flaking",
		],
	};

	const buildZoneData = () => {
		let totalMin = 0,
			totalMax = 0;
		const zoneData = zones.map((zoneKey) => {
			const zs = zoneStates[zoneKey] || {};
			const isCeiling = zoneKey === "ceiling";
			const area = parseFloat(zs.area) || 0;
			const areaUnit = zs.areaUnit || "sqft";
			const priceKey = getZonePriceKey(zoneKey, zs);
			const raw = priceKey
				? getRawRange(priceKey, area, areaUnit, isFresh)
				: null;
			if (raw) {
				totalMin += raw.min;
				totalMax += raw.max;
			}
			const conditionIndex =
				zs.condition !== null && zs.condition !== undefined
					? Number(zs.condition)
					: 0;
			const conditionLabel = isFresh
				? "New construction — full prep applied"
				: ZONE_CONDITION_LABELS[zoneKey]?.[conditionIndex] || "Not specified";
			const productCode = resolveProductCode(
				zs.grade,
				zs.finish,
				zs.variant,
				zs.distemperType,
				zs.healthProduct,
				isCeiling,
			);
			return {
				zoneKey,
				zoneLabel: ZONE_META[zoneKey].label,
				area: sqftFromArea(area, areaUnit),
				selectionTrail: getZoneSelectionTrail(zoneKey, zs),
				productCode,
				conditionLabel,
				conditionIndex,
				micro: zs.micro || [],
				estimateFormatted: raw
					? `${fmtRupee(raw.min)} – ${fmtRupee(raw.max)}`
					: "—",
			};
		});
		return { zoneData, totalMin, totalMax };
	};

	const { zoneData, totalMin, totalMax } = buildZoneData();
	const propertyLabel = PROPERTY_LABELS[propertyType] || "—";
	const timelineLabel = TIMELINE_LABELS[timeline] || "—";
	const location = [pincode, address].filter(Boolean).join(", ") || "Pune";
	const rfqId = `SRV-${Date.now().toString(36).toUpperCase()}`;
	const generatedAt = new Date().toLocaleString("en-IN", {
		day: "2-digit",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});

	const openDoc = (html) => {
		const w = window.open("", "_blank");
		if (w) {
			w.document.write(html);
			w.document.close();
		}
	};
	const handleCustomerDoc = () =>
		openDoc(
			buildCustomerDoc({
				jobTypeLabel: JOB_TYPE_LABELS[jobType] || "—",
				propertyLabel,
				timelineLabel,
				location,
				zones: zoneData,
				totalMin,
				totalMax,
				rfqId,
				generatedAt,
				isFresh,
			}),
		);
	const handleVendorDoc = () =>
		openDoc(
			buildVendorDoc({
				jobTypeLabel: JOB_TYPE_LABELS[jobType] || "—",
				propertyLabel,
				timelineLabel,
				location,
				zones: zoneData,
				rfqId,
				generatedAt,
				isFresh,
			}),
		);

	const rowStyle = {
		display: "flex",
		alignItems: "flex-start",
		padding: "9px 0",
		borderBottom: `1px solid ${GRAY_BORDER}`,
		gap: 8,
		fontSize: 13,
	};
	const labelCol = {
		color: GRAY_TEXT,
		fontWeight: 500,
		width: 110,
		flexShrink: 0,
		fontSize: 12,
	};
	const valueCol = { color: NAVY, fontWeight: 500, flex: 1 };
	const tabStyle = (active) => ({
		flex: 1,
		padding: "10px 4px",
		background: active ? "#fff" : "transparent",
		border: "none",
		borderBottom: `2px solid ${active ? BLUE : "transparent"}`,
		fontWeight: 700,
		fontSize: 12,
		color: active ? BLUE : GRAY_TEXT,
		cursor: "pointer",
		transition: "all 0.15s",
	});
	const SL = {
		fontSize: 10,
		letterSpacing: "0.1em",
		textTransform: "uppercase",
		color: GRAY_TEXT,
		fontWeight: 700,
		marginBottom: 10,
	};

	return (
		<div>
			<div style={{ padding: "24px 24px 0" }}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 10,
						marginBottom: 4,
					}}
				>
					<div
						style={{
							width: 32,
							height: 32,
							borderRadius: 8,
							background: GREEN_BG,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Icon type="check" size={20} />
					</div>
					<h1 style={{ fontSize: 20, fontWeight: 700, color: NAVY }}>
						Job Summary
					</h1>
				</div>
				<p style={{ fontSize: 13, color: GRAY_TEXT, marginBottom: 16 }}>
					Review your selections before downloading the RFQ.
				</p>
				<div
					style={{
						display: "flex",
						background: GRAY_BG,
						borderRadius: 8,
						overflow: "hidden",
						marginBottom: 0,
					}}
				>
					<button
						style={tabStyle(activeTab === null)}
						onClick={() => setActiveTab(null)}
					>
						Overview
					</button>
					<button
						style={tabStyle(activeTab === "zones")}
						onClick={() => setActiveTab("zones")}
					>
						Zone Specs
					</button>
					<button
						style={tabStyle(activeTab === "costs")}
						onClick={() => setActiveTab("costs")}
					>
						Costs
					</button>
				</div>
			</div>

			<div style={{ padding: "16px 24px", minHeight: 260 }}>
				{activeTab === null && (
					<div>
						<div style={SL}>Job details</div>
						<div
							style={{
								background: "#fff",
								borderRadius: 10,
								border: `1px solid ${GRAY_BORDER}`,
								overflow: "hidden",
								marginBottom: 16,
							}}
						>
							{[
								["Job type", JOB_TYPE_LABELS[jobType] || "—"],
								["Property", PROPERTY_LABELS[propertyType] || "—"],
								["Scope", scope === 0 ? "Full flat" : "Specific rooms"],
								["Ceilings", CEILING_LABELS[ceilings] || "—"],
								["Timeline", TIMELINE_LABELS[timeline] || "—"],
								["Location", location],
							].map(([label, value], i) => (
								<div
									key={i}
									style={{
										...rowStyle,
										padding: "10px 14px",
										borderBottom: i < 5 ? `1px solid ${GRAY_BORDER}` : "none",
									}}
								>
									<span style={labelCol}>{label}</span>
									<span style={valueCol}>{value}</span>
								</div>
							))}
						</div>
						{scope === 1 && selectedRooms.length > 0 && (
							<>
								<div style={SL}>Rooms selected</div>
								<div
									style={{
										display: "flex",
										flexWrap: "wrap",
										gap: 6,
										marginBottom: 16,
									}}
								>
									{selectedRooms.map((i) => (
										<span
											key={i}
											style={{
												fontSize: 12,
												padding: "4px 10px",
												borderRadius: 6,
												background: LIGHT_BLUE,
												color: BLUE,
												fontWeight: 600,
											}}
										>
											{ROOM_ITEMS[i]?.label}
										</span>
									))}
								</div>
							</>
						)}
						<div style={SL}>Zones in scope</div>
						<div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
							{zones.map((z) => (
								<span
									key={z}
									style={{
										fontSize: 12,
										padding: "4px 10px",
										borderRadius: 6,
										background: GRAY_BG,
										color: NAVY,
										fontWeight: 500,
										display: "flex",
										alignItems: "center",
										gap: 4,
									}}
								>
									<Icon type={ZONE_META[z].icon} size={12} />{" "}
									{ZONE_META[z].label}
								</span>
							))}
						</div>
					</div>
				)}

				{activeTab === "zones" && (
					<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
						{zoneData.map((z) => (
							<div
								key={z.zoneKey}
								style={{
									background: "#fff",
									border: `1px solid ${GRAY_BORDER}`,
									borderRadius: 10,
									overflow: "hidden",
								}}
							>
								<div
									style={{
										background: NAVY,
										color: "#fff",
										padding: "8px 14px",
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									}}
								>
									<span style={{ fontSize: 13, fontWeight: 700 }}>
										{z.zoneLabel}
									</span>
									<span style={{ fontSize: 11, opacity: 0.7 }}>
										{z.area} sq ft
									</span>
								</div>
								<div style={{ padding: "10px 14px" }}>
									{[
										["Grade", z.selectionTrail],
										["Condition", z.conditionLabel],
										["Code", z.productCode],
									].map(([label, value], i) => (
										<div
											key={i}
											style={{
												...rowStyle,
												borderBottom:
													i < 2 ? `1px solid ${GRAY_BORDER}` : "none",
												padding: "8px 0",
											}}
										>
											<span style={labelCol}>{label}</span>
											<span
												style={{
													...valueCol,
													fontFamily:
														label === "Code" ? "monospace" : "inherit",
													fontSize: label === "Code" ? 11 : 13,
													color: label === "Code" ? BLUE : NAVY,
												}}
											>
												{value}
											</span>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				)}

				{activeTab === "costs" && (
					<div>
						<div style={SL}>Estimate breakdown</div>
						<div
							style={{
								background: "#fff",
								border: `1px solid ${GRAY_BORDER}`,
								borderRadius: 10,
								overflow: "hidden",
								marginBottom: 12,
							}}
						>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "1fr 1fr 1fr",
									background: GRAY_BG,
									borderBottom: `1px solid ${GRAY_BORDER}`,
								}}
							>
								{["Zone", "Area", "Estimate"].map((h) => (
									<div
										key={h}
										style={{
											padding: "8px 12px",
											fontSize: 10,
											fontWeight: 700,
											textTransform: "uppercase",
											letterSpacing: "0.06em",
											color: GRAY_TEXT,
										}}
									>
										{h}
									</div>
								))}
							</div>
							{zoneData.map((z, i) => (
								<div
									key={z.zoneKey}
									style={{
										display: "grid",
										gridTemplateColumns: "1fr 1fr 1fr",
										borderBottom:
											i < zoneData.length - 1
												? `1px solid ${GRAY_BORDER}`
												: "none",
									}}
								>
									<div
										style={{
											padding: "10px 12px",
											fontSize: 13,
											fontWeight: 500,
											color: NAVY,
										}}
									>
										{z.zoneLabel}
									</div>
									<div
										style={{
											padding: "10px 12px",
											fontSize: 13,
											color: GRAY_TEXT,
										}}
									>
										{z.area} sqft
									</div>
									<div
										style={{
											padding: "10px 12px",
											fontSize: 13,
											fontWeight: 700,
											color: BLUE,
										}}
									>
										{z.estimateFormatted}
									</div>
								</div>
							))}
						</div>
						<div
							style={{
								background: LIGHT_BLUE,
								border: `1.5px solid ${BLUE}`,
								borderRadius: 10,
								padding: "14px 16px",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<div>
								<div
									style={{
										fontSize: 11,
										color: GRAY_TEXT,
										fontWeight: 600,
										textTransform: "uppercase",
										letterSpacing: "0.06em",
										marginBottom: 2,
									}}
								>
									Total estimate
								</div>
								<div style={{ fontSize: 11, color: GRAY_TEXT }}>
									{isFresh ? "Fresh paint rates" : "Repaint rates"} · Pune
									market · {new Date().getFullYear()}
								</div>
							</div>
							<div style={{ fontSize: 20, fontWeight: 800, color: BLUE }}>
								{fmtRupee(totalMin)}–{fmtRupee(totalMax)}
							</div>
						</div>
						<div
							style={{
								fontSize: 11,
								color: GRAY_TEXT,
								marginTop: 10,
								lineHeight: 1.5,
							}}
						>
							Indicative range. Final price confirmed by vendor after site
							inspection. Includes material + labour + standard primer and
							putty.
						</div>
					</div>
				)}
			</div>

			<div
				style={{
					padding: "0 24px 8px",
					display: "flex",
					flexDirection: "column",
					gap: 8,
				}}
			>
				<div
					style={{
						fontSize: 11,
						color: GRAY_TEXT,
						fontWeight: 600,
						textTransform: "uppercase",
						letterSpacing: "0.06em",
						marginBottom: 2,
					}}
				>
					Download RFQ documents
				</div>
				<button
					onClick={handleCustomerDoc}
					style={{
						width: "100%",
						padding: "13px 16px",
						border: `1.5px solid ${BLUE}`,
						borderRadius: 10,
						background: BLUE,
						color: "#fff",
						fontSize: 14,
						fontWeight: 600,
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 8,
					}}
				>
					<span>📄</span> Customer Estimate
				</button>
				<button
					onClick={handleVendorDoc}
					style={{
						width: "100%",
						padding: "13px 16px",
						border: `1.5px solid ${GRAY_BORDER}`,
						borderRadius: 10,
						background: "#fff",
						color: NAVY,
						fontSize: 14,
						fontWeight: 600,
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 8,
					}}
				>
					<span>👷</span> Vendor Technical Spec
				</button>
			</div>

			<div style={{ padding: "4px 24px 20px", textAlign: "center" }}>
				<span
					onClick={onBack}
					style={{
						fontSize: 13,
						color: GRAY_TEXT,
						cursor: "pointer",
						textDecoration: "underline",
					}}
				>
					← Back to location
				</span>
			</div>
		</div>
	);
}

// ── DESKTOP SIDEBAR ───────────────────────────────────────────
function DesktopSidebar({
	screen,
	setScreen,
	canNext,
	onNext,
	onBack,
	zones,
	zoneStates,
	isFresh,
	scope,
	jobType,
	propertyType,
	ceilings,
	timeline,
	selectedRooms,
	allZonesDone,
	doneCount,
	zoneDoneMap,
}: {
	screen: number;
	setScreen: React.Dispatch<React.SetStateAction<number>>;
	canNext: () => boolean;
	onNext: () => void;
	onBack: () => void;
	zones: ZoneKey[];
	zoneStates: Partial<Record<ZoneKey, ZoneState>>;
	isFresh: boolean;
	scope: number | null;
	jobType: number | null;
	propertyType: number | null;
	ceilings: number | null;
	timeline: number | null;
	selectedRooms: number[];
	allZonesDone: boolean;
	doneCount: number;
	zoneDoneMap: Record<string, boolean>;
}) {
	const totalRange = (() => {
		if (!zones.length) return null;
		let min = 0,
			max = 0,
			hasAny = false;
		zones.forEach((zk) => {
			const zs = zoneStates[zk] || {};
			const pk = getZonePriceKey(zk, zs);
			if (!pk) return;
			const raw = getRawRange(
				pk,
				parseFloat(zs.area) || 0,
				zs.areaUnit || "sqft",
				isFresh,
			);
			if (raw) {
				min += raw.min;
				max += raw.max;
				hasAny = true;
			}
		});
		return hasAny ? { min, max } : null;
	})();

	const STEP_DEFS = [
		{ id: 0, label: "Job type", done: jobType !== null },
		{ id: 1, label: "Property type", done: propertyType !== null },
		{ id: 2, label: "Scope", done: scope !== null },
		...(scope !== 0
			? [{ id: 3, label: "Select rooms", done: selectedRooms.length > 0 }]
			: []),
		{ id: 4, label: "Ceilings", done: ceilings !== null },
		{ id: 5, label: "Zone details", done: allZonesDone },
		{ id: 6, label: "Timeline", done: timeline !== null },
		{ id: 7, label: "Location", done: false },
		{ id: 8, label: "Summary", done: false },
	];

	const nextLabel = () => {
		if (screen === 5 && !allZonesDone)
			return `${doneCount} / ${zones.length} zones done`;
		if (screen === 7) return "Submit →";
		if (screen === 8) return "Done";
		return "Next →";
	};

	return (
		<aside
			style={{
				width: 264,
				background: NAVY,
				minHeight: "100vh",
				position: "sticky",
				top: 0,
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				flexShrink: 0,
			}}
		>
			{/* Logo */}
			<div style={{ padding: "28px 24px 20px" }}>
				<div
					style={{
						fontSize: 22,
						fontWeight: 800,
						color: "#fff",
						letterSpacing: "-0.5px",
						fontFamily: "'DM Sans', sans-serif",
					}}
				>
					Serv<span style={{ color: BLUE }}>zo</span>
				</div>
				<div
					style={{
						fontSize: 11,
						color: "rgba(255,255,255,0.45)",
						marginTop: 3,
						fontWeight: 500,
						letterSpacing: "0.04em",
					}}
				>
					Painting Calculator
				</div>
			</div>

			<div
				style={{
					height: 1,
					background: "rgba(255,255,255,0.08)",
					margin: "0 20px",
				}}
			/>

			{/* Steps */}
			<div
				className="srv-sidebar-scroll"
				style={{ flex: 1, padding: "12px 0" }}
			>
				{STEP_DEFS.map((step) => {
					const isCurrent = step.id === screen;
					const isPast = step.id < screen;
					return (
						<div
							key={step.id}
							className="srv-step-item"
							onClick={() => (isPast || isCurrent ? setScreen(step.id) : null)}
							style={{
								display: "flex",
								alignItems: "center",
								gap: 12,
								padding: "9px 20px",
								cursor: isPast || isCurrent ? "pointer" : "default",
								background: isCurrent ? "rgba(51,102,204,0.22)" : "transparent",
								borderLeft: `3px solid ${isCurrent ? BLUE : "transparent"}`,
							}}
						>
							<div
								style={{
									width: 22,
									height: 22,
									borderRadius: "50%",
									flexShrink: 0,
									border: `2px solid ${step.done ? BLUE : isCurrent ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.18)"}`,
									background: step.done ? BLUE : "transparent",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								{step.done ? (
									<svg width="10" height="10" viewBox="0 0 12 12" fill="none">
										<path
											d="M2.5 6L5 8.5L9.5 3.5"
											stroke="#fff"
											strokeWidth="2.2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								) : (
									<span
										style={{
											fontSize: 9,
											fontWeight: 700,
											color: isCurrent
												? "rgba(255,255,255,0.9)"
												: "rgba(255,255,255,0.3)",
										}}
									>
										{step.id + 1}
									</span>
								)}
							</div>
							<span
								style={{
									fontSize: 13,
									fontWeight: isCurrent ? 600 : 400,
									color: isCurrent
										? "#fff"
										: step.done
											? "rgba(255,255,255,0.65)"
											: "rgba(255,255,255,0.32)",
								}}
							>
								{step.label}
							</span>
						</div>
					);
				})}

				{/* Zone progress pill (screen 5) */}
				{screen === 5 && zones.length > 0 && (
					<div
						style={{
							margin: "12px 16px 0",
							padding: "12px 14px",
							background: "rgba(255,255,255,0.05)",
							borderRadius: 10,
							border: "1px solid rgba(255,255,255,0.08)",
						}}
					>
						<div
							style={{
								fontSize: 10,
								color: "rgba(255,255,255,0.4)",
								fontWeight: 700,
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								marginBottom: 10,
							}}
						>
							Zones
						</div>
						{zones.map((zk) => {
							const done = zoneDoneMap[zk] || false;
							return (
								<div
									key={zk}
									style={{
										display: "flex",
										alignItems: "center",
										gap: 8,
										marginBottom: 7,
									}}
								>
									<div
										style={{
											width: 16,
											height: 16,
											borderRadius: "50%",
											border: `2px solid ${done ? "#4ADE80" : "rgba(255,255,255,0.2)"}`,
											background: done ? "#4ADE80" : "transparent",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											flexShrink: 0,
										}}
									>
										{done && (
											<svg width="8" height="8" viewBox="0 0 10 10" fill="none">
												<path
													d="M2 5l2.5 2.5L8 2.5"
													stroke="#fff"
													strokeWidth="1.8"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										)}
									</div>
									<span
										style={{
											fontSize: 12,
											color: done
												? "rgba(255,255,255,0.75)"
												: "rgba(255,255,255,0.32)",
										}}
									>
										{ZONE_META[zk]?.label}
									</span>
								</div>
							);
						})}
					</div>
				)}
			</div>

			{/* Estimate + Nav */}
			<div
				style={{
					padding: "16px 20px 28px",
					borderTop: "1px solid rgba(255,255,255,0.08)",
				}}
			>
				{totalRange && (
					<div
						style={{
							marginBottom: 14,
							padding: "10px 12px",
							background: "rgba(51,102,204,0.18)",
							borderRadius: 8,
							border: "1px solid rgba(51,102,204,0.3)",
						}}
					>
						<div
							style={{
								fontSize: 10,
								color: "rgba(255,255,255,0.45)",
								fontWeight: 700,
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								marginBottom: 4,
							}}
						>
							Running estimate
						</div>
						<div style={{ fontSize: 18, fontWeight: 800, color: BLUE }}>
							{fmtRupee(totalRange.min)}
						</div>
						<div
							style={{
								fontSize: 11,
								color: "rgba(255,255,255,0.4)",
								marginTop: 1,
							}}
						>
							to {fmtRupee(totalRange.max)}
						</div>
					</div>
				)}

				<div style={{ display: "flex", gap: 8 }}>
					<button
						className="srv-nav-btn"
						onClick={onBack}
						disabled={screen === 0}
						style={{
							flex: 1,
							padding: "11px 0",
							borderRadius: 8,
							border: "1.5px solid rgba(255,255,255,0.18)",
							background: "transparent",
							color: "rgba(255,255,255,0.6)",
							fontSize: 13,
							fontWeight: 500,
							cursor: screen === 0 ? "not-allowed" : "pointer",
							opacity: screen === 0 ? 0.35 : 1,
						}}
					>
						← Back
					</button>
					<button
						className="srv-nav-btn"
						onClick={onNext}
						disabled={!canNext() || screen === 8}
						style={{
							flex: 2,
							padding: "11px 0",
							borderRadius: 8,
							border: "none",
							background:
								canNext() && screen !== 8 ? BLUE : "rgba(255,255,255,0.08)",
							color:
								canNext() && screen !== 8 ? "#fff" : "rgba(255,255,255,0.25)",
							fontSize: 13,
							fontWeight: 600,
							cursor: canNext() && screen !== 8 ? "pointer" : "not-allowed",
						}}
					>
						{nextLabel()}
					</button>
				</div>
			</div>
		</aside>
	);
}

// ── MAIN COMPONENT ────────────────────────────────────────────
function PaintingCalculator() {
	const isDesktop = useIsDesktop();
	const [screen, setScreen] = useState(0);
	const [jobType, setJobType] = useState<number | null>(null);
	const [propertyType, setPropertyType] = useState<number | null>(null);
	const [scope, setScope] = useState<number | null>(null);
	const [selectedRooms, setSelectedRooms] = useState<number[]>([]);
	const [ceilings, setCeilings] = useState<number | null>(null);
	const [activeZone, setActiveZone] = useState<number>(0);
	const [zoneStates, setZoneStates] = useState<
		Partial<Record<ZoneKey, ZoneState>>
	>({});
	const [timeline, setTimeline] = useState<number | null>(null);
	const [pincode, setPincode] = useState("");
	const [address, setAddress] = useState("");

	const isFresh = jobType === 0;
	const isFullFlat = scope === 0;

	const getZones = () => {
		const w = [];
		if (isFullFlat) {
			w.push("dry", "kitchen", "bath", "balcony");
		} else {
			const has = (z: string): boolean =>
				ROOM_ITEMS.some((r, i) => r.zone === z && selectedRooms.includes(i));
			if (has("dry")) w.push("dry");
			if (has("kitchen")) w.push("kitchen");
			if (has("bath")) w.push("bath");
			if (has("balcony")) w.push("balcony");
		}
		if (ceilings === 0) w.push("ceiling");
		return w;
	};
	const zones = getZones();

	const isZoneDone = (z: ZoneKey): boolean => {
		const s = zoneStates[z] || ({} as ZoneState);
		const isCeil = z === "ceiling";
		const {
			area,
			grade,
			finish,
			variant,
			distemperType,
			healthProduct,
			condition,
		} = s;
		if (!area || !grade) return false;
		if (isCeil) return isFresh || condition !== null;
		const gd = GRADE_DATA[grade];
		if (grade === "whitewash") return isFresh || condition !== null;
		if (grade === "distemper")
			return distemperType !== null && (isFresh || condition !== null);
		if (!gd?.hasFinish) return isFresh || condition !== null;
		if (!finish) return false;
		const fd = gd.finishes.find((f) => f.id === finish);
		if (fd?.isSingle) return isFresh || condition !== null;
		if (fd?.isHealth)
			return healthProduct !== null && (isFresh || condition !== null);
		return variant !== null && (isFresh || condition !== null);
	};

	const allZonesDone = zones.length > 0 && zones.every(isZoneDone);
	const doneCount = zones.filter(isZoneDone).length;
	const zoneDoneMap = Object.fromEntries(zones.map((z) => [z, isZoneDone(z)]));

	const getZoneState = (z: ZoneKey) =>
		zoneStates[z] || {
			area: "",
			areaUnit: "sqft",
			grade: null,
			finish: null,
			variant: null,
			distemperType: null,
			healthProduct: null,
			condition: null,
			micro: [],
		};
	const updateZone = (z: ZoneKey, s: ZoneState) =>
		setZoneStates((prev) => ({ ...prev, [z]: s }));

	const next = () => {
		let n = screen + 1;
		if (screen === 2 && scope === 0) n = 4;
		setScreen(Math.min(8, n));
	};

	const goBack = () => {
		if (screen === 4 && scope === 0) setScreen(2);
		else setScreen(Math.max(0, screen - 1));
	};

	const canNext = () => {
		if (screen === 0) return jobType !== null;
		if (screen === 1) return propertyType !== null;
		if (screen === 2) return scope !== null;
		if (screen === 3) return selectedRooms.length > 0;
		if (screen === 4) return ceilings !== null;
		if (screen === 5) return allZonesDone;
		if (screen === 6) return timeline !== null;
		return true;
	};

	const SCREEN_TITLES = [
		"Painting job type",
		"Property type",
		"Painting scope",
		"Select rooms",
		"Ceiling painting",
		"Zone details",
		"Timeline",
		"Site location",
		"Summary & RFQ",
	];

	const renderScreen = () => {
		switch (screen) {
			case 0:
				return (
					<div>
						<div style={{ padding: "32px 24px 8px" }}>
							<h1
								style={{
									fontSize: 24,
									fontWeight: 700,
									color: NAVY,
									lineHeight: 1.3,
								}}
							>
								What kind of painting job is this?
							</h1>
							<p style={{ fontSize: 13, color: GRAY_TEXT, marginTop: 6 }}>
								This shapes the whole flow.
							</p>
						</div>
						<div
							style={{
								padding: "16px 24px",
								display: "flex",
								flexDirection: "column",
								gap: 10,
							}}
						>
							<OptionCard
								icon="fresh"
								label="New flat — never painted"
								sub="Bare plaster walls from builder"
								selected={jobType === 0}
								onClick={() => setJobType(0)}
							/>
							<OptionCard
								icon="repaint"
								label="Repaint existing walls"
								sub="Already has paint or distemper"
								selected={jobType === 1}
								onClick={() => setJobType(1)}
							/>
							<OptionCard
								icon="question"
								label="Not sure"
								sub="We'll treat it as repaint"
								selected={jobType === 2}
								onClick={() => setJobType(2)}
							/>
						</div>
						<ProgressBar percent={11} />
						<NextBtn onClick={next} disabled={!canNext()} />
					</div>
				);

			case 1:
				return (
					<div>
						<div style={{ padding: "32px 24px 8px" }}>
							<h1
								style={{
									fontSize: 24,
									fontWeight: 700,
									color: NAVY,
									lineHeight: 1.3,
								}}
							>
								What type of property?
							</h1>
							<p style={{ fontSize: 13, color: GRAY_TEXT, marginTop: 6 }}>
								Choose the closest match.
							</p>
						</div>
						<div
							style={{
								padding: "16px 24px",
								display: "flex",
								flexDirection: "column",
								gap: 10,
							}}
						>
							{[
								"Studio apartment",
								"1 BHK",
								"2 BHK",
								"3 BHK",
								"Bungalow / Villa",
								"Row house",
							].map((label, i) => (
								<OptionCard
									key={i}
									icon="home"
									label={label}
									selected={propertyType === i}
									onClick={() => setPropertyType(i)}
									compact
								/>
							))}
						</div>
						<ProgressBar percent={22} />
						<NextBtn onClick={next} disabled={!canNext()} />
					</div>
				);

			case 2:
				return (
					<div>
						<div style={{ padding: "32px 24px 8px" }}>
							<h1
								style={{
									fontSize: 24,
									fontWeight: 700,
									color: NAVY,
									lineHeight: 1.3,
								}}
							>
								How much of the home needs painting?
							</h1>
						</div>
						<div
							style={{
								padding: "16px 24px",
								display: "flex",
								flexDirection: "column",
								gap: 10,
							}}
						>
							<OptionCard
								icon="full"
								label="Entire flat — all rooms"
								sub="We'll cover every room and passage"
								selected={scope === 0}
								onClick={() => setScope(0)}
							/>
							<OptionCard
								icon="rooms"
								label="Only specific rooms"
								sub="I'll pick which rooms"
								selected={scope === 1}
								onClick={() => setScope(1)}
							/>
						</div>
						<ProgressBar percent={33} />
						<NextBtn onClick={next} disabled={!canNext()} />
					</div>
				);

			case 3:
				return (
					<div>
						<div style={{ padding: "32px 24px 8px" }}>
							<h1
								style={{
									fontSize: 24,
									fontWeight: 700,
									color: NAVY,
									lineHeight: 1.3,
								}}
							>
								Which rooms need painting?
							</h1>
							<p style={{ fontSize: 13, color: GRAY_TEXT, marginTop: 6 }}>
								Select all that apply.
							</p>
						</div>
						<div style={{ padding: "16px 24px" }}>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									gap: 10,
								}}
							>
								{ROOM_ITEMS.map((room, i) => {
									const sel = selectedRooms.includes(i);
									return (
										<div
											key={i}
											onClick={() =>
												setSelectedRooms((prev) =>
													sel ? prev.filter((x) => x !== i) : [...prev, i],
												)
											}
											style={{
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												gap: 8,
												padding: "16px 8px",
												cursor: "pointer",
												borderRadius: 12,
												transition: "all 0.15s",
												border: `1.5px solid ${sel ? BLUE : GRAY_BORDER}`,
												background: sel ? LIGHT_BLUE : "#fff",
											}}
										>
											<Icon
												type={room.icon}
												size={22}
												color={sel ? BLUE : NAVY}
											/>
											<span
												style={{
													fontSize: 13,
													fontWeight: 500,
													color: sel ? BLUE : NAVY,
												}}
											>
												{room.label}
											</span>
										</div>
									);
								})}
							</div>
						</div>
						<ProgressBar percent={44} />
						<NextBtn onClick={next} disabled={!canNext()} />
					</div>
				);

			case 4:
				return (
					<div>
						<div style={{ padding: "32px 24px 8px" }}>
							<h1
								style={{
									fontSize: 24,
									fontWeight: 700,
									color: NAVY,
									lineHeight: 1.3,
								}}
							>
								Include ceilings?
							</h1>
							<p style={{ fontSize: 13, color: GRAY_TEXT, marginTop: 6 }}>
								Ceiling paint is always flat/matt and priced separately.
							</p>
						</div>
						<div
							style={{
								padding: "16px 24px",
								display: "flex",
								flexDirection: "column",
								gap: 10,
							}}
						>
							<OptionCard
								icon="ceiling"
								label="Yes — paint ceilings too"
								sub="Ceiling grade shown in zone cards"
								selected={ceilings === 0}
								onClick={() => setCeilings(0)}
							/>
							<OptionCard
								icon="ceiling"
								label="No — walls only"
								sub="Skip ceiling painting"
								selected={ceilings === 1}
								onClick={() => setCeilings(1)}
							/>
						</div>
						<ProgressBar percent={55} />
						<NextBtn onClick={next} disabled={!canNext()} />
					</div>
				);

			case 5:
				return (
					<div>
						<div style={{ padding: "32px 24px 8px" }}>
							<h1
								style={{
									fontSize: 24,
									fontWeight: 700,
									color: NAVY,
									lineHeight: 1.3,
								}}
							>
								Tell us about each area.
							</h1>
							<p style={{ fontSize: 13, color: GRAY_TEXT, marginTop: 6 }}>
								Size, grade, finish, and condition — per zone.
							</p>
						</div>
						<div
							style={{
								padding: "12px 24px",
								display: "flex",
								flexDirection: "column",
								gap: 10,
							}}
						>
							{zones.map((zoneKey, zi) => (
								<ZoneCard
									key={zoneKey}
									zoneKey={zoneKey}
									isFresh={isFresh}
									isActive={activeZone === zi}
									onActivate={() => setActiveZone(zi)}
									state={getZoneState(zoneKey)}
									onChange={(s) => updateZone(zoneKey, s)}
								/>
							))}
						</div>
						<ProgressBar percent={66} />
						<NextBtn
							onClick={next}
							disabled={!canNext()}
							label={
								allZonesDone
									? "Next"
									: `${doneCount} of ${zones.length} zones complete`
							}
						/>
					</div>
				);

			case 6:
				return (
					<div>
						<div style={{ padding: "32px 24px 16px" }}>
							<h1
								style={{
									fontSize: 24,
									fontWeight: 700,
									color: NAVY,
									lineHeight: 1.3,
								}}
							>
								When do you want to start?
							</h1>
						</div>
						<div
							style={{
								padding: "0 24px",
								display: "flex",
								flexDirection: "column",
								gap: 4,
							}}
						>
							{[
								"ASAP",
								"Within 1 week",
								"Within 2 weeks",
								"Just exploring",
							].map((label, i) => (
								<div
									key={i}
									onClick={() => setTimeline(i)}
									style={{
										display: "flex",
										alignItems: "center",
										gap: 12,
										padding: "14px 16px",
										cursor: "pointer",
									}}
								>
									<div
										style={{
											width: 22,
											height: 22,
											borderRadius: "50%",
											border: `2px solid ${timeline === i ? BLUE : GRAY_BORDER}`,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											flexShrink: 0,
										}}
									>
										{timeline === i && (
											<div
												style={{
													width: 10,
													height: 10,
													borderRadius: "50%",
													background: BLUE,
												}}
											/>
										)}
									</div>
									<span
										style={{
											fontSize: 16,
											color: NAVY,
											fontWeight: timeline === i ? 600 : 400,
										}}
									>
										{label}
									</span>
								</div>
							))}
						</div>
						<div style={{ height: 24 }} />
						<ProgressBar percent={77} />
						<NextBtn onClick={next} disabled={!canNext()} />
					</div>
				);

			case 7:
				return (
					<div>
						<div style={{ padding: "32px 24px 8px" }}>
							<h1
								style={{
									fontSize: 24,
									fontWeight: 700,
									color: NAVY,
									lineHeight: 1.3,
								}}
							>
								Where is the site located?
							</h1>
						</div>
						<div
							style={{
								padding: "0 24px",
								display: "flex",
								flexDirection: "column",
								gap: 12,
							}}
						>
							<input
								value={pincode}
								onChange={(e) => setPincode(e.target.value)}
								placeholder="Pincode"
								style={{
									width: "100%",
									padding: "16px 18px",
									border: `1.5px solid ${GRAY_BORDER}`,
									borderRadius: 12,
									fontSize: 15,
									outline: "none",
									color: NAVY,
									background: "#fff",
								}}
							/>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 10,
									padding: "14px 18px",
									border: `1.5px solid ${GRAY_BORDER}`,
									borderRadius: 12,
									cursor: "pointer",
								}}
							>
								<Icon type="location" size={18} color={GRAY_TEXT} />
								<span style={{ fontSize: 15, color: GRAY_TEXT }}>
									Use current location
								</span>
							</div>
							<input
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								placeholder="Full address or landmark (optional)"
								style={{
									width: "100%",
									padding: "16px 18px",
									border: `1.5px solid ${GRAY_BORDER}`,
									borderRadius: 12,
									fontSize: 15,
									outline: "none",
									color: NAVY,
									background: "#fff",
								}}
							/>
						</div>
						<div style={{ height: 24 }} />
						<ProgressBar percent={88} />
						<NextBtn onClick={next} label="Submit" />
					</div>
				);

			case 8:
				return (
					<SummaryScreen
						jobType={jobType}
						propertyType={propertyType}
						scope={scope}
						selectedRooms={selectedRooms}
						ceilings={ceilings}
						timeline={timeline}
						pincode={pincode}
						address={address}
						zones={zones}
						zoneStates={zoneStates}
						isFresh={isFresh}
						onBack={() => setScreen(7)}
					/>
				);

			default:
				return null;
		}
	};

	// ── DESKTOP LAYOUT ──────────────────────────────────────────
	if (isDesktop) {
		return (
			<div
				className="srv-wrap"
				style={{ display: "flex", minHeight: "100vh", background: GRAY_BG }}
			>
				<style>{GLOBAL_CSS}</style>
				<DesktopSidebar
					screen={screen}
					setScreen={setScreen}
					canNext={canNext}
					onNext={next}
					onBack={goBack}
					zones={zones}
					zoneStates={zoneStates}
					isFresh={isFresh}
					scope={scope}
					jobType={jobType}
					propertyType={propertyType}
					ceilings={ceilings}
					timeline={timeline}
					selectedRooms={selectedRooms}
					allZonesDone={allZonesDone}
					doneCount={doneCount}
					zoneDoneMap={zoneDoneMap}
				/>

				{/* Main content */}
				<div
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						minHeight: "100vh",
						overflow: "hidden",
					}}
				>
					{/* Top bar */}
					<div
						style={{
							background: "#fff",
							borderBottom: `1px solid ${GRAY_BORDER}`,
							padding: "0 40px",
							height: 56,
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							flexShrink: 0,
						}}
					>
						<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
							<div
								style={{
									width: 6,
									height: 6,
									borderRadius: "50%",
									background: BLUE,
								}}
							/>
							<span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>
								{SCREEN_TITLES[screen]}
							</span>
						</div>
						<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
							{/* Step dots */}
							{Array.from({ length: 9 }, (_, i) => (
								<div
									key={i}
									style={{
										width: i === screen ? 20 : 6,
										height: 6,
										borderRadius: 3,
										background:
											i === screen
												? BLUE
												: i < screen
													? "#C7D6F5"
													: GRAY_BORDER,
										transition: "all 0.2s",
									}}
								/>
							))}
							<span
								style={{
									fontSize: 12,
									color: GRAY_TEXT,
									marginLeft: 6,
									fontWeight: 500,
								}}
							>
								{screen + 1} / 9
							</span>
						</div>
					</div>

					{/* Scrollable form area */}
					<div className="srv-main-scroll" style={{ flex: 1 }}>
						<div style={{ maxWidth: 620, margin: "0 auto", paddingBottom: 60 }}>
							{renderScreen()}
						</div>
					</div>
				</div>
			</div>
		);
	}

	// ── MOBILE LAYOUT (original) ──────────────────────────────────
	return (
		<div
			className="srv-wrap"
			style={{
				fontFamily: "'Inter','Segoe UI',sans-serif",
				background: "#EEEEF0",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "20px 16px",
			}}
		>
			<style>{GLOBAL_CSS}</style>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 8,
					marginBottom: 16,
				}}
			>
				<span
					style={{
						fontSize: 12,
						color: GRAY_TEXT,
						letterSpacing: "0.06em",
						textTransform: "uppercase",
						fontWeight: 600,
					}}
				>
					Servzo — Painting v2
				</span>
				<span
					style={{
						fontSize: 11,
						padding: "2px 8px",
						borderRadius: 4,
						background: LIGHT_BLUE,
						color: BLUE,
						fontWeight: 600,
					}}
				>
					Screen {screen + 1} of 9
				</span>
			</div>

			<div
				style={{
					width: "100%",
					maxWidth: 375,
					background: "#fff",
					borderRadius: 20,
					overflow: "hidden",
					boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
				}}
			>
				{renderScreen()}
			</div>

			{/* Nav controls */}
			<div
				style={{
					display: "flex",
					gap: 8,
					marginTop: 16,
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				<button
					onClick={goBack}
					disabled={screen === 0}
					style={{
						padding: "8px 16px",
						borderRadius: 8,
						border: `1px solid ${GRAY_BORDER}`,
						background: "#fff",
						color: screen === 0 ? GRAY_TEXT : NAVY,
						fontSize: 13,
						fontWeight: 500,
						cursor: screen === 0 ? "default" : "pointer",
						opacity: screen === 0 ? 0.5 : 1,
					}}
				>
					← Back
				</button>
				{Array.from({ length: 9 }, (_, i) => (
					<button
						key={i}
						onClick={() => setScreen(i)}
						style={{
							width: 28,
							height: 28,
							borderRadius: 6,
							border: `1px solid ${i === screen ? BLUE : GRAY_BORDER}`,
							background: i === screen ? BLUE : "#fff",
							color: i === screen ? "#fff" : GRAY_TEXT,
							fontSize: 11,
							fontWeight: 600,
							cursor: "pointer",
							padding: 0,
						}}
					>
						{i + 1}
					</button>
				))}
				<button
					onClick={() => setScreen(Math.min(8, screen + 1))}
					disabled={screen === 8}
					style={{
						padding: "8px 16px",
						borderRadius: 8,
						border: `1px solid ${GRAY_BORDER}`,
						background: "#fff",
						color: screen === 8 ? GRAY_TEXT : NAVY,
						fontSize: 13,
						fontWeight: 500,
						cursor: screen === 8 ? "default" : "pointer",
						opacity: screen === 8 ? 0.5 : 1,
					}}
				>
					Next →
				</button>
			</div>

			{/* Flow debug */}
			<div
				style={{
					marginTop: 16,
					maxWidth: 375,
					width: "100%",
					background: "#fff",
					borderRadius: 12,
					padding: "12px 16px",
					fontSize: 12,
					color: GRAY_TEXT,
					lineHeight: 1.5,
				}}
			>
				<span style={{ fontWeight: 600, color: NAVY }}>Flow: </span>
				{isFresh
					? "Fresh paint — condition auto-noted"
					: jobType === null
						? "Select job type"
						: "Repaint — full condition per zone"}
				{" · "}
				{scope === 0
					? "Full flat"
					: scope === 1
						? "Specific rooms"
						: "Scope not set"}
				{zones.length > 0 && ` · ${doneCount}/${zones.length} zones done`}
			</div>
		</div>
	);
}

export default PaintingCalculator;
