export interface TradeColor {
	bg: string;
	accent: string;
	light: string;
}

export interface TradeDef {
	id: string;
	icon: string;
	label: string;
	desc: string;
	color: TradeColor;
	rfqId: string;
	summary: [string, string][];
}

export interface TradeDefsMap {
	[key: string]: TradeDef;
}

export interface Project {
	id: string;
	icon: string;
	title: string;
	desc: string;
	color: string;
	rfqId: string;
	trades: string[];
	tradeIds: string[];
	estimate: string;
	duration: string;
}

export interface Vendor {
	id: number;
	name: string;
	emoji: string;
	loc: string;
	rating: number;
	reviews: number;
	verified: boolean;
	best: boolean;
	price: string;
	priceNote: string;
	eta: string;
	tags: string[];
	note: string;
	jobs: { icon: string; name: string; date: string; price: string }[];
	credentials: { icon: string; text: string }[];
}

// Calculator types — for the new hackathon feature
export type SpecGrade = "economy" | "standard" | "premium";

export interface CalcInputs {
	location: string;
	builtUpArea: number | null;
	floors: number | null;
	specGrade: SpecGrade | null;
}

export interface ComponentBreakdown {
	name: string;
	sorRate: number; // ₹ per sq.ft, SOR baseline
	aiRate: number; // ₹ per sq.ft, AI adjusted
	percentage: number; // share of total cost
}

export interface EstimateResult {
	inputs: CalcInputs;
	totalArea: number; // builtUpArea * floors
	sorTotal: number; // manual SOR baseline
	aiTotal: number; // AI model output
	aiAdjustmentPct: number; // % difference
	breakdown: ComponentBreakdown[];
	locationTier: 1 | 2 | 3;
	generatedAt: string;
}

export interface TradeSlideOption {
	icon: string;
	name: string;
	sub?: string;
	desc?: string;
	bg?: string;
	notSure?: boolean;
}

export interface TradeSlideCheck {
	q: string;
	icon: string;
	f: string;
	opts: string[];
}

export interface TradeSlide {
	id: "options" | "checks" | "grid" | "size" | "photos" | "timeline" | "done";
	title: string;
	sub: string;
	field?: string;
	required?: boolean;
	opts?: TradeSlideOption[];
	checks?: TradeSlideCheck[];
}
