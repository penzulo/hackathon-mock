import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { T } from "@/lib/theme";
import { BUILDING_TRADE_DEFS, TRADE_DEFS } from "@/lib/tradeDefs";
import { useProjectStore } from "@/store/useProjectStore";
import type { TradeSlide } from "@/types";

type TradeSearchDeps = {
	projectId?: string;
};

export const Route = createFileRoute("/trade/$tradeId/")({
	validateSearch: (search: Record<string, unknown>): TradeSearchDeps => {
		return {
			projectId: search.projectId as string | undefined,
		};
	},
	component: TradeTemplateScreen,
});

function getTradeSlides(tradeId: string): TradeSlide[] {
	const base: Record<string, TradeSlide[]> = {
		tiling: [
			{
				id: "options",
				field: "q1",
				required: true,
				title: "What type of tiling do you need?",
				sub: "Select all that apply — vendors will scope the full job.",
				opts: [
					{
						icon: "🚿",
						name: "Bathroom floor tiling",
						sub: "Wet area — needs waterproof adhesive",
					},
					{
						icon: "🧱",
						name: "Bathroom wall tiling",
						sub: "Full wall or dado height",
					},
					{ icon: "🍳", name: "Kitchen floor + backsplash", sub: "" },
					{
						icon: "🌿",
						name: "Balcony / outdoor tiling",
						sub: "Anti-skid rating required",
					},
					{ icon: "❓", name: "Not sure — vendor to advise", notSure: true },
				],
			},
			{
				id: "options",
				field: "q2",
				required: true,
				title: "What's the current floor condition?",
				sub: "Pick the option that best matches right now.",
				opts: [
					{ icon: "🪨", name: "Bare concrete slab", sub: "" },
					{
						icon: "⚠️",
						name: "Old tiles — cracked/loose",
						sub: "Removal required",
					},
					{
						icon: "🟦",
						name: "Old tiles — intact",
						sub: "Can tile over or remove",
					},
					{
						icon: "💧",
						name: "Damp patches visible",
						sub: "Waterproofing needed first",
					},
					{ icon: "❓", name: "Not sure", notSure: true },
				],
			},
			{
				id: "checks",
				title: "A few quick details",
				sub: "Helps vendors plan the right materials and method.",
				checks: [
					{
						q: "Is this a wet area (shower/bath)?",
						icon: "🚿",
						f: "q3",
						opts: ["Yes", "No"],
					},
					{
						q: "Do you want wall tiles too?",
						icon: "🧱",
						f: "q4",
						opts: ["Yes — full height", "Yes — dado only", "No"],
					},
					{
						q: "Do you already have tiles?",
						icon: "📦",
						f: "q5",
						opts: ["Yes", "No — vendor to supply", "Partially"],
					},
				],
			},
			{
				id: "grid",
				field: "q1b",
				title: "What tile style do you prefer?",
				sub: "Pick the look you like. Vendors will suggest matching tiles.",
				opts: [
					{
						icon: "🤍",
						bg: "#F0EFED",
						name: "Marble / Stone look",
						desc: "Premium, timeless",
					},
					{
						icon: "✨",
						bg: "#E8E8E8",
						name: "High Gloss Porcelain",
						desc: "Clean, modern",
					},
					{
						icon: "🟫",
						bg: "#D4A574",
						name: "Wood Plank Mimics",
						desc: "Warm, earthy",
					},
					{
						icon: "🔲",
						bg: "#B0B8C1",
						name: "Concrete / Grey",
						desc: "Minimalist",
					},
					{
						icon: "🟤",
						bg: "#E8C99A",
						name: "Rustic / Terracotta",
						desc: "Classic Indian",
					},
					{
						icon: "❓",
						bg: "#EEF2FF",
						name: "No preference",
						desc: "Vendor suggests",
					},
				],
			},
			{
				id: "size",
				title: "What's the size of the area?",
				sub: "Just a rough idea is fine. Vendors will measure on-site.",
			},
			{
				id: "photos",
				title: "Add photos of your space",
				sub: "Helps vendors see the current floor and plan accurately.",
			},
			{
				id: "timeline",
				title: "When do you need this done?",
				sub: "This helps vendors schedule the work.",
			},
			{ id: "done", title: "Tiling template complete!", sub: "" },
		],
		plumbing: [
			{
				id: "options",
				field: "q1",
				required: true,
				title: "What plumbing work do you need?",
				sub: "Select the scope — vendors will quote accordingly.",
				opts: [
					{
						icon: "🚿",
						name: "New bathroom fit-out",
						sub: "Full plumbing from scratch",
					},
					{
						icon: "🔄",
						name: "Replacement / renovation",
						sub: "Old pipes & fixtures being replaced",
					},
					{ icon: "💧", name: "Repair only", sub: "Leak fix, joint repair" },
					{ icon: "🚰", name: "Geyser / water heater connection", sub: "" },
					{ icon: "❓", name: "Not sure — vendor to assess", notSure: true },
				],
			},
			{
				id: "options",
				field: "q2",
				required: true,
				title: "Which fixtures are needed?",
				sub: "Select everything you want installed.",
				opts: [
					{ icon: "🚽", name: "WC / Indian toilet", sub: "" },
					{ icon: "🪣", name: "Basin / wash sink", sub: "" },
					{ icon: "🛁", name: "Bathtub", sub: "Requires floor reinforcement" },
					{ icon: "🚿", name: "Shower area / panel", sub: "" },
					{ icon: "🔧", name: "All of the above", sub: "Full bathroom" },
				],
			},
			{
				id: "checks",
				title: "Pipe & water supply details",
				sub: "This helps vendors plan the pipe layout and materials.",
				checks: [
					{
						q: "What pipe material do you prefer?",
						icon: "🔩",
						f: "q3",
						opts: ["CPVC", "PVC", "GI (galvanized)", "Vendor to decide"],
					},
					{
						q: "Is hot water required?",
						icon: "♨️",
						f: "q4",
						opts: ["Yes — new geyser", "Yes — existing geyser", "No"],
					},
					{
						q: "Current pipe condition?",
						icon: "🔍",
						f: "q5",
						opts: [
							"New installation",
							"Old pipes — replace all",
							"Partial replacement",
						],
					},
				],
			},
			{
				id: "options",
				field: "q1b",
				required: false,
				title: "Any drainage concerns?",
				sub: "Helps vendors plan slope and drainage routing.",
				opts: [
					{ icon: "🕳️", name: "New floor trap needed", sub: "" },
					{ icon: "🌊", name: "Existing drain — reuse", sub: "" },
					{
						icon: "🧪",
						name: "Slow drain / blockage issue",
						sub: "Requires clearing",
					},
					{ icon: "❓", name: "Not sure", notSure: true },
				],
			},
			{
				id: "size",
				title: "What's the bathroom size?",
				sub: "Just a rough estimate. Vendors will verify on-site.",
			},
			{
				id: "photos",
				title: "Add photos of existing plumbing",
				sub: "Photos of current pipes, drain points and walls help vendors plan.",
			},
			{
				id: "timeline",
				title: "When do you need this done?",
				sub: "Note: plumbing should happen before tiling.",
			},
			{ id: "done", title: "Plumbing template complete!", sub: "" },
		],
		electrical: [
			{
				id: "options",
				field: "q1",
				required: true,
				title: "What electrical work is needed?",
				sub: "Select all that apply for this bathroom.",
				opts: [
					{ icon: "💡", name: "Light points", sub: "Ceiling & mirror lights" },
					{ icon: "🔌", name: "Power points", sub: "Geyser, shaver socket" },
					{ icon: "💨", name: "Exhaust fan point", sub: "" },
					{
						icon: "🛡️",
						name: "ELCB / safety circuit",
						sub: "Mandatory for wet areas",
					},
					{
						icon: "📋",
						name: "All of the above",
						sub: "Complete bathroom electrical",
					},
				],
			},
			{
				id: "options",
				field: "q2",
				required: true,
				title: "What's the current wiring situation?",
				sub: "Helps vendors estimate rewiring scope.",
				opts: [
					{
						icon: "🆕",
						name: "New installation — no existing wiring",
						sub: "",
					},
					{ icon: "🔄", name: "Old wiring — full replacement", sub: "" },
					{ icon: "➕", name: "Add points to existing wiring", sub: "" },
					{ icon: "❓", name: "Not sure — vendor to check", notSure: true },
				],
			},
			{
				id: "checks",
				title: "Wiring & safety preferences",
				sub: "Critical for bathroom safety compliance.",
				checks: [
					{
						q: "Wiring type preferred?",
						icon: "🔌",
						f: "q3",
						opts: [
							"Concealed (inside walls)",
							"Surface conduit",
							"Vendor to decide",
						],
					},
					{
						q: "Is the DB box nearby?",
						icon: "📦",
						f: "q4",
						opts: ["Yes — same floor", "No — different floor", "Don't know"],
					},
					{
						q: "Earthing required?",
						icon: "⚡",
						f: "q5",
						opts: ["Yes", "Already earthed", "Not sure"],
					},
				],
			},
			{
				id: "grid",
				field: "q1b",
				title: "What light fittings do you want?",
				sub: "Vendors will quote supply + installation.",
				opts: [
					{
						icon: "💡",
						bg: "#FEF9C3",
						name: "LED Downlights",
						desc: "Recessed, clean look",
					},
					{
						icon: "🪞",
						bg: "#EEF2FF",
						name: "Mirror / Vanity Lights",
						desc: "Above basin",
					},
					{
						icon: "🌟",
						bg: "#F5F3FF",
						name: "Premium Fixtures",
						desc: "Designer fittings",
					},
					{
						icon: "💨",
						bg: "#ECFEFF",
						name: "Exhaust Fan",
						desc: "Inline or wall",
					},
					{
						icon: "🔆",
						bg: "#F0FDF4",
						name: "Nightlight point",
						desc: "Low-level",
					},
					{ icon: "❓", bg: "#F7F9FC", name: "Vendor to suggest", desc: "" },
				],
			},
			{
				id: "size",
				title: "What's the room size?",
				sub: "Used to estimate wire lengths and fixture count.",
			},
			{
				id: "photos",
				title: "Photos of existing switchboard & walls",
				sub: "Photos of DB box and current wiring help vendors plan the layout.",
			},
			{
				id: "timeline",
				title: "When do you need this done?",
				sub: "Electrical should happen before tiling and painting.",
			},
			{ id: "done", title: "Electrical template complete!", sub: "" },
		],
		painting: [
			{
				id: "options",
				field: "q1",
				required: true,
				title: "What surfaces need painting?",
				sub: "Select all areas to be painted.",
				opts: [
					{ icon: "🧱", name: "Walls only", sub: "" },
					{ icon: "⬜", name: "Ceiling only", sub: "" },
					{ icon: "🏠", name: "Walls + ceiling", sub: "Most common" },
					{ icon: "🚪", name: "Including doors & frames", sub: "" },
					{ icon: "🏗️", name: "Exterior facade too", sub: "" },
				],
			},
			{
				id: "options",
				field: "q2",
				required: true,
				title: "What type of paint is needed?",
				sub: "Different areas need different paint grades.",
				opts: [
					{
						icon: "💧",
						name: "Moisture-resistant (bathroom)",
						sub: "Prevents fungal growth",
					},
					{ icon: "🏠", name: "Standard interior emulsion", sub: "" },
					{
						icon: "✨",
						name: "Premium / texture paint",
						sub: "Designer finish",
					},
					{ icon: "🌧️", name: "Exterior weatherproof", sub: "" },
					{ icon: "❓", name: "Not sure — vendor to advise", notSure: true },
				],
			},
			{
				id: "checks",
				title: "Surface & finish details",
				sub: "Helps vendors quote accurately for prep and finishing.",
				checks: [
					{
						q: "Current wall condition?",
						icon: "🔍",
						f: "q3",
						opts: [
							"New plaster — never painted",
							"Previously painted",
							"Peeling / damp patches",
						],
					},
					{
						q: "Preferred finish?",
						icon: "✨",
						f: "q4",
						opts: [
							"Matte",
							"Satin / semi-gloss",
							"High gloss",
							"Vendor to suggest",
						],
					},
					{
						q: "Who supplies the paint?",
						icon: "🪣",
						f: "q5",
						opts: ["Vendor to supply", "I'll buy paint", "Undecided"],
					},
				],
			},
			{
				id: "options",
				field: "q1b",
				required: false,
				title: "Any special requirements?",
				sub: "These add-ons affect the final quote.",
				opts: [
					{
						icon: "🎨",
						name: "Specific colour matching",
						sub: "Custom colour codes",
					},
					{
						icon: "🖌️",
						name: "Feature wall / accent wall",
						sub: "Different colour or texture",
					},
					{
						icon: "🧹",
						name: "Full surface preparation",
						sub: "Grinding + putty + primer",
					},
					{ icon: "❓", name: "Standard preparation only", notSure: false },
				],
			},
			{
				id: "size",
				title: "What's the total area to paint?",
				sub: "Approximate wall + ceiling area in sq ft.",
			},
			{
				id: "photos",
				title: "Photos of walls to be painted",
				sub: "Current condition photos help vendors quote prep work accurately.",
			},
			{
				id: "timeline",
				title: "When do you need this done?",
				sub: "Painting is usually the last trade — after plumbing and electrical.",
			},
			{ id: "done", title: "Painting template complete!", sub: "" },
		],
		waterproofing: [
			{
				id: "options",
				field: "q1",
				required: true,
				title: "Where is waterproofing needed?",
				sub: "Select all areas that need protection.",
				opts: [
					{ icon: "🚿", name: "Bathroom floor only", sub: "" },
					{
						icon: "🧱",
						name: "Bathroom floor + walls",
						sub: "Walls up to 1.5m height",
					},
					{ icon: "🏗️", name: "Terrace / roof slab", sub: "" },
					{ icon: "🌊", name: "External walls / basement", sub: "" },
					{ icon: "📋", name: "All wet areas — full scope", sub: "" },
				],
			},
			{
				id: "options",
				field: "q2",
				required: true,
				title: "Have you had water leakage issues before?",
				sub: "Helps vendors select the right membrane system.",
				opts: [
					{
						icon: "💧",
						name: "Yes — active leakage",
						sub: "Needs repair before coating",
					},
					{
						icon: "🔍",
						name: "Yes — old stains/damp",
						sub: "Preventive treatment needed",
					},
					{
						icon: "🆕",
						name: "No — new construction",
						sub: "Standard 2-coat system",
					},
					{ icon: "❓", name: "Not sure", notSure: true },
				],
			},
			{
				id: "checks",
				title: "Technical details",
				sub: "These affect product selection and guarantee period.",
				checks: [
					{
						q: "What method do you prefer?",
						icon: "🛡️",
						f: "q3",
						opts: [
							"Crystalline membrane",
							"Polymer coating",
							"APP membrane",
							"Vendor to decide",
						],
					},
					{
						q: "Will tiles go over the waterproofing?",
						icon: "🪵",
						f: "q4",
						opts: ["Yes — tiling after", "No — exposed surface", "Not sure"],
					},
					{
						q: "Guarantee period expected?",
						icon: "📋",
						f: "q5",
						opts: [
							"5 years",
							"10 years",
							"Lifetime (premium)",
							"No preference",
						],
					},
				],
			},
			{
				id: "options",
				field: "q1b",
				required: false,
				title: "Any additional requirements?",
				sub: "Add-ons that improve the waterproofing system.",
				opts: [
					{
						icon: "🧪",
						name: "Anti-fungal treatment",
						sub: "Prevents mold growth",
					},
					{
						icon: "🔩",
						name: "Cove formation at junctions",
						sub: "Floor-wall joints",
					},
					{ icon: "🌡️", name: "Thermal insulation layer", sub: "Roof slabs" },
					{ icon: "❓", name: "Standard scope only", notSure: false },
				],
			},
			{
				id: "size",
				title: "What area needs waterproofing?",
				sub: "Include floor + wall area for full bathroom protection.",
			},
			{
				id: "photos",
				title: "Photos of areas to waterproof",
				sub: "Current condition and any visible damp/leakage spots.",
			},
			{
				id: "timeline",
				title: "When is waterproofing needed?",
				sub: "Must happen before tiling — plan accordingly.",
			},
			{ id: "done", title: "Waterproofing template complete!", sub: "" },
		],
		excavation: [
			{
				id: "options",
				field: "q1",
				required: true,
				title: "What excavation work is required?",
				sub: "Select the primary scope of civil work.",
				opts: [
					{
						icon: "🏗️",
						name: "Foundation excavation",
						sub: "Strip / raft / pile foundation",
					},
					{ icon: "🧱", name: "Basement construction", sub: "" },
					{ icon: "🌱", name: "Plinth beam & PCC", sub: "" },
					{
						icon: "❓",
						name: "Structural consultant to advise",
						notSure: true,
					},
				],
			},
			{
				id: "options",
				field: "q2",
				required: true,
				title: "What type of foundation?",
				sub: "Your structural engineer's recommendation.",
				opts: [
					{ icon: "📐", name: "Strip foundation (load-bearing)", sub: "" },
					{ icon: "🏗️", name: "Raft / mat foundation", sub: "For soft soil" },
					{
						icon: "🔩",
						name: "Pile foundation",
						sub: "For high loads / soft ground",
					},
					{ icon: "❓", name: "As per drawing", notSure: false },
				],
			},
			{
				id: "checks",
				title: "Site & soil details",
				sub: "Critical for equipment selection and cost estimation.",
				checks: [
					{
						q: "Soil type at site?",
						icon: "🌍",
						f: "q3",
						opts: ["Hard rock", "Murram", "Black cotton soil", "Sandy / loose"],
					},
					{
						q: "Site access for machinery?",
						icon: "🚜",
						f: "q4",
						opts: [
							"Good — full JCB access",
							"Limited — manual needed",
							"Very restricted",
						],
					},
					{
						q: "Existing structure to demolish?",
						icon: "🏚️",
						f: "q5",
						opts: ["Yes", "No — open plot", "Partial demolition"],
					},
				],
			},
			{
				id: "options",
				field: "q1b",
				required: false,
				title: "Additional civil work needed?",
				sub: "",
				opts: [
					{ icon: "💧", name: "Dewatering required", sub: "High water table" },
					{ icon: "🧪", name: "Soil testing", sub: "Before foundation design" },
					{
						icon: "🔒",
						name: "Shoring / retaining walls",
						sub: "Adjacent structures",
					},
					{ icon: "❓", name: "No additional scope", notSure: false },
				],
			},
			{
				id: "size",
				title: "What's the plot / work area size?",
				sub: "Length × width of the plot in feet.",
			},
			{
				id: "photos",
				title: "Photos of the site",
				sub: "Current site condition, boundaries, access point.",
			},
			{
				id: "timeline",
				title: "When do you need this done?",
				sub: "Excavation is always the first trade — sets the entire project timeline.",
			},
			{ id: "done", title: "Excavation template complete!", sub: "" },
		],
		structural: [
			{
				id: "options",
				field: "q1",
				required: true,
				title: "What structural work is required?",
				sub: "",
				opts: [
					{
						icon: "🏗️",
						name: "New construction — full structure",
						sub: "Columns, beams, slabs",
					},
					{ icon: "🔧", name: "Structural repair / strengthening", sub: "" },
					{ icon: "➕", name: "Extension / addition to existing", sub: "" },
					{ icon: "❓", name: "As per architect drawing", notSure: false },
				],
			},
			{
				id: "options",
				field: "q2",
				required: true,
				title: "What concrete grade is specified?",
				sub: "From your structural drawing or consultant.",
				opts: [
					{ icon: "🧱", name: "M20 (standard residential)", sub: "" },
					{ icon: "💪", name: "M25 (recommended for G+2+)", sub: "" },
					{ icon: "🏗️", name: "M30 (commercial / heavy load)", sub: "" },
					{ icon: "❓", name: "As per structural drawing", notSure: false },
				],
			},
			{
				id: "checks",
				title: "Construction details",
				sub: "",
				checks: [
					{
						q: "No. of floors?",
						icon: "🏢",
						f: "q3",
						opts: ["G (single storey)", "G+1", "G+2", "G+3 or more"],
					},
					{
						q: "Brick / block material?",
						icon: "🧱",
						f: "q4",
						opts: [
							"Red brick",
							"AAC blocks",
							"Solid concrete blocks",
							"Vendor to recommend",
						],
					},
					{
						q: "Steel grade?",
						icon: "🔩",
						f: "q5",
						opts: ["Fe415", "Fe500", "As per drawing", "Vendor to source"],
					},
				],
			},
			{
				id: "options",
				field: "q1b",
				required: false,
				title: "Additional structural items?",
				sub: "",
				opts: [
					{ icon: "🏊", name: "Water sump / OHT", sub: "" },
					{ icon: "🏗️", name: "Compound wall", sub: "" },
					{ icon: "🌿", name: "Boundary + gate foundation", sub: "" },
					{ icon: "❓", name: "Standard scope only", notSure: false },
				],
			},
			{
				id: "size",
				title: "What's the built-up area per floor?",
				sub: "Floor plate length × width in feet.",
			},
			{
				id: "photos",
				title: "Upload drawings & site photos",
				sub: "Architectural and structural drawings + current site photos.",
			},
			{
				id: "timeline",
				title: "When should structural work begin?",
				sub: "After excavation is complete and foundation is cast.",
			},
			{ id: "done", title: "Structural template complete!", sub: "" },
		],
		interior: [
			{
				id: "options",
				field: "q1",
				required: true,
				title: "What interior work is needed?",
				sub: "Select all trades under interior finishing.",
				opts: [
					{ icon: "🪵", name: "Flooring (tiles/wood/vinyl)", sub: "" },
					{ icon: "🎨", name: "Painting (walls + ceiling)", sub: "" },
					{ icon: "🪑", name: "Carpentry (kitchen + wardrobes)", sub: "" },
					{ icon: "💡", name: "False ceiling + lighting", sub: "" },
					{
						icon: "📋",
						name: "Full interior fit-out",
						sub: "All of the above",
					},
				],
			},
			{
				id: "options",
				field: "q2",
				required: true,
				title: "What flooring type do you prefer?",
				sub: "",
				opts: [
					{
						icon: "🪵",
						name: "Vitrified tiles",
						sub: "Durable, easy to clean",
					},
					{ icon: "🌳", name: "Wooden laminate", sub: "Warm, premium look" },
					{ icon: "🔲", name: "Natural stone / marble", sub: "Luxury segment" },
					{
						icon: "🏠",
						name: "Mix — tiles + wood",
						sub: "Common in Indian homes",
					},
					{ icon: "❓", name: "Architect to decide", notSure: false },
				],
			},
			{
				id: "checks",
				title: "Design preferences",
				sub: "Helps interior vendors pitch the right style.",
				checks: [
					{
						q: "Interior style preference?",
						icon: "🎨",
						f: "q3",
						opts: [
							"Modern / contemporary",
							"Traditional / classic",
							"Minimalist",
							"As per architect",
						],
					},
					{
						q: "Kitchen type?",
						icon: "🍳",
						f: "q4",
						opts: [
							"Modular kitchen",
							"Semi-modular",
							"Open kitchen",
							"No kitchen work",
						],
					},
					{
						q: "False ceiling needed?",
						icon: "💡",
						f: "q5",
						opts: [
							"Yes — all rooms",
							"Yes — living only",
							"No",
							"Vendor to suggest",
						],
					},
				],
			},
			{
				id: "options",
				field: "q1b",
				required: false,
				title: "Any premium elements?",
				sub: "",
				opts: [
					{ icon: "🚿", name: "Master bath — premium fittings", sub: "" },
					{ icon: "🖼️", name: "Feature wall / wallpaper", sub: "" },
					{ icon: "🌿", name: "Landscape / outdoor area", sub: "" },
					{ icon: "❓", name: "Standard scope", notSure: false },
				],
			},
			{
				id: "size",
				title: "Total built-up area for interiors?",
				sub: "Total sq ft across all floors to be finished.",
			},
			{
				id: "photos",
				title: "Upload design references",
				sub: "Inspiration images, architect drawings, or mood board.",
			},
			{
				id: "timeline",
				title: "When should interior work start?",
				sub: "Usually begins after structural and MEP work is complete.",
			},
			{ id: "done", title: "Interior template complete!", sub: "" },
		],
	};
	return base[tradeId] || base.tiling;
}

function TradeTemplateScreen() {
	const { tradeId } = Route.useParams();
	const { projectId } = Route.useSearch();
	const navigate = useNavigate();
	const markTradeDone = useProjectStore((s) => s.markTradeDone);

	// Grab the base definition for colors and icons
	const allDefs = { ...TRADE_DEFS, ...BUILDING_TRADE_DEFS };
	const def = allDefs[tradeId as keyof typeof allDefs];
	const slides = getTradeSlides(tradeId);

	const [slide, setSlide] = useState(0);
	const [animKey, setAnimKey] = useState(0);

	// Generic answer state instead of hardcoded fields
	const [ans, setAns] = useState<Record<string, any>>({
		len: "",
		wid: "",
	});

	if (!def || !slides) return <div>Trade not found</div>;

	const total = slides.length;
	const s = slides[slide];
	const progress = ((slide + 1) / total) * 100;
	const ac = def.color.accent;
	const area =
		ans.len && ans.wid ? parseInt(ans.len, 10) * parseInt(ans.wid, 10) : 0;

	const sel = (f: string, v: any) => setAns((a) => ({ ...a, [f]: v }));
	const go = (d: number) => {
		setSlide((s) => s + d);
		setAnimKey((k) => k + 1);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const canNext = () => {
		if (s.required && s.field) return !!ans[s.field];
		if (s.id === "size") return !!(ans.len && ans.wid);
		if (s.id === "checks" && s.checks) {
			return s.checks.every((c: any) => !!ans[c.f]);
		}
		return true;
	};

	const handleDone = () => {
		if (projectId) {
			// PROJECT FLOW: Mark done in Zustand and return to Hub
			markTradeDone(tradeId);
			navigate({ to: "/project/$projectId", params: { projectId } });
		} else {
			// SINGLE JOB FLOW: Proceed to review screen
			navigate({ to: "/trade/$tradeId/review", params: { tradeId } });
		}
	};

	const handleBack = () => {
		if (slide === 0) {
			if (projectId) {
				navigate({ to: "/project/$projectId", params: { projectId } });
			} else {
				navigate({ to: "/trade" });
			}
		} else {
			go(-1);
		}
	};

	return (
		<div className="slide-wrap">
			{/* Trade color accent bar at top */}
			<div style={{ height: 4, background: ac }} />
			<div className="slide-progress-bar" style={{ marginTop: 0 }}>
				<div
					className="slide-progress-fill"
					style={{ width: `${progress}%`, background: ac }}
				/>
			</div>

			<div className="slide-body" key={animKey}>
				{/* Trade badge */}
				<div
					className="anim"
					style={{
						display: "flex",
						alignItems: "center",
						gap: 8,
						marginBottom: 16,
						padding: "6px 16px",
						background: def.color.bg,
						borderRadius: 20,
						border: `1.5px solid ${ac}30`,
					}}
				>
					<span style={{ fontSize: 16 }}>{def.icon}</span>
					<span
						style={{
							fontSize: 12,
							fontWeight: 700,
							color: ac,
							fontFamily: "'Sora',sans-serif",
						}}
					>
						{def.label} Template
					</span>
					<span style={{ fontSize: 11, color: T.inkLight, marginLeft: 4 }}>
						Step {slide + 1} of {total}
					</span>
				</div>

				<h2 className="slide-title anim" style={{ animationDelay: "0.04s" }}>
					{s.title}
				</h2>
				<p className="slide-subtitle anim" style={{ animationDelay: "0.08s" }}>
					{s.sub}
				</p>

				<div
					className="anim"
					style={{ width: "100%", animationDelay: "0.12s" }}
				>
					{/* GENERIC OPTIONS LIST */}
					{s.id === "options" && s.opts && (
						<div className="option-list">
							{s.opts.map((o) => (
								<button
									type="button"
									key={o.name}
									className={`option-row${o.notSure ? " not-sure" : ""}${ans[s.field] === o.name ? " selected" : ""}`}
									onClick={() => sel(s.field, o.name)}
									style={
										ans[s.field] === o.name
											? { borderColor: ac, background: def.color.bg }
											: {}
									}
								>
									<div
										className="option-icon"
										style={
											ans[s.field] === o.name
												? { background: "white", borderColor: ac }
												: {}
										}
									>
										{o.icon}
									</div>
									<div>
										<div
											className="option-text-main"
											style={ans[s.field] === o.name ? { color: ac } : {}}
										>
											{o.name}
										</div>
										{o.sub && <div className="option-text-sub">{o.sub}</div>}
									</div>
								</button>
							))}
						</div>
					)}

					{/* GENERIC GRID */}
					{s.id === "grid" && s.opts && (
						<div className="option-grid">
							{s.opts.map((o: any) => (
								<button
									type="button"
									key={o.name}
									className={`option-card${ans[s.field] === o.name ? " selected" : ""}`}
									onClick={() => sel(s.field, o.name)}
									style={
										ans[s.field] === o.name
											? { borderColor: ac, background: def.color.bg }
											: {}
									}
								>
									<div
										className="option-card-thumb"
										style={{ background: o.bg || def.color.bg }}
									>
										{o.icon}
									</div>
									<div>
										<div
											className="option-card-name"
											style={ans[s.field] === o.name ? { color: ac } : {}}
										>
											{o.name}
										</div>
										<div className="option-card-desc">{o.desc}</div>
									</div>
								</button>
							))}
						</div>
					)}

					{/* GENERIC CHECKS */}
					{s.id === "checks" && s.checks && (
						<div className="check-group">
							{s.checks.map((c: any) => (
								<div key={c.f} className="check-card">
									<div className="check-question">
										<span style={{ fontSize: 18 }}>{c.icon}</span>
										{c.q}
									</div>
									<div className="check-options">
										{c.opts.map((o: string) => (
											<button
												type="button"
												key={o}
												className={`check-pill${ans[c.f] === o ? " selected" : ""}`}
												style={
													ans[c.f] === o
														? {
																borderColor: ac,
																background: ac,
																color: "white",
															}
														: {}
												}
												onClick={() => sel(c.f, o)}
											>
												{o}
											</button>
										))}
									</div>
								</div>
							))}
						</div>
					)}

					{/* SIZE INPUTS */}
					{s.id === "size" && (
						<>
							<div className="meas-card">
								<div className="meas-header">📐 Dimensions</div>
								<div className="meas-inputs">
									<div className="meas-field">
										<div className="meas-label">Length (ft)</div>
										<input
											className="meas-input"
											type="number"
											value={ans.len}
											onChange={(e) => sel("len", e.target.value)}
											placeholder="e.g. 10"
										/>
									</div>
									<div className="meas-field">
										<div className="meas-label">Width (ft)</div>
										<input
											className="meas-input"
											type="number"
											value={ans.wid}
											onChange={(e) => sel("wid", e.target.value)}
											placeholder="e.g. 8"
										/>
									</div>
								</div>
								{area > 0 && (
									<div className="meas-calc" style={{ color: ac }}>
										📐 Total: {area} sq ft ({ans.len} × {ans.wid} ft)
									</div>
								)}
							</div>
							<button
								type="button"
								className="option-row not-sure"
								onClick={() => {
									sel("len", "0");
									sel("wid", "0");
								}}
							>
								<div
									className="option-icon"
									style={{ background: ac, border: "none", color: "white" }}
								>
									?
								</div>
								<div className="option-text-main">
									Not sure (vendors will measure)
								</div>
							</button>
						</>
					)}

					{/* PHOTOS */}
					{s.id === "photos" && (
						<>
							{[
								{
									icon: "📷",
									main: "Upload Photos",
									sub: "Minimum 2 photos required",
								},
								{ icon: "✏️", main: "Upload Sketch", sub: "(optional)" },
								{ icon: "🎬", main: "Upload Video", sub: "(optional)" },
							].map((u) => (
								<div key={u.main} className="upload-option">
									<div
										className="upload-icon-box"
										style={{ background: def.color.bg, borderColor: `${ac}40` }}
									>
										{u.icon}
									</div>
									<div>
										<div className="upload-main">{u.main}</div>
										<div className="upload-sub">{u.sub}</div>
									</div>
								</div>
							))}
							<button className="skip-link" type="button" onClick={() => go(1)}>
								Skip for now
							</button>
						</>
					)}

					{/* TIMELINE */}
					{s.id === "timeline" && (
						<div className="option-list">
							{[
								{
									icon: "⚡",
									name: "Urgent (within 2 weeks)",
									sub: "Priority — may cost more",
								},
								{
									icon: "📋",
									name: "Soon (1–2 months)",
									sub: "Standard scheduling",
								},
								{
									icon: "✅",
									name: "Flexible (2–3 months)",
									sub: "Best rates possible",
								},
							].map((t) => (
								<button
									type="button"
									key={t.name}
									className={`option-row${ans.timeline === t.name ? " selected" : ""}`}
									onClick={() => sel("timeline", t.name)}
									style={
										ans.timeline === t.name
											? { borderColor: ac, background: def.color.bg }
											: {}
									}
								>
									<div
										className="option-icon"
										style={
											ans.timeline === t.name
												? { background: "white", borderColor: ac }
												: {}
										}
									>
										{t.icon}
									</div>
									<div>
										<div
											className="option-text-main"
											style={ans.timeline === t.name ? { color: ac } : {}}
										>
											{t.name}
										</div>
										<div className="option-text-sub">{t.sub}</div>
									</div>
								</button>
							))}
						</div>
					)}

					{/* DONE */}
					{s.id === "done" && (
						<div style={{ textAlign: "center" }}>
							<div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
							<p
								style={{
									marginTop: 16,
									fontSize: 14,
									color: T.inkMid,
									lineHeight: 1.6,
								}}
							>
								Template complete. Proceed to generate your RFQ.
							</p>
						</div>
					)}
				</div>
			</div>

			<div className="slide-nav">
				<div className="slide-nav-left" style={{ color: ac }}>
					{def.icon} {def.label} · Step {slide + 1}/{total}
				</div>
				<div className="slide-nav-right">
					<button type="button" className="btn btn-ghost" onClick={handleBack}>
						← {slide === 0 ? (projectId ? "Project Hub" : "Search") : "Back"}
					</button>

					{slide < total - 1 ? (
						<button
							type="button"
							className="btn btn-primary"
							style={{ background: ac }}
							disabled={!canNext()}
							onClick={() => go(1)}
						>
							Next →
						</button>
					) : (
						<button
							type="button"
							className="btn btn-green"
							onClick={handleDone}
						>
							{projectId ? "✓ Save & Return to Hub" : "Review Job Order →"}
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
