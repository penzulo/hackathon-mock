import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { FlowSteps } from "@/components/layout/FlowSteps";
import { T } from "@/lib/theme";
import { BUILDING_TRADE_DEFS, SINGLE_STEPS, TRADE_DEFS } from "@/lib/tradeDefs";
import type { LineItemsMap } from "@/types/quotes";
import type { Vendor } from "@/types/vendor";

export const Route = createFileRoute("/trade/$tradeId/quotes")({
	component: SingleJobQuotesScreen,
});

// Helper component for Star Ratings
function Stars({ r }: { r: number }) {
	return (
		<div
			className="stars"
			style={{ display: "flex", gap: 1, alignItems: "center", marginTop: 3 }}
		>
			{[1, 2, 3, 4, 5].map((s) => (
				<span
					key={s}
					style={{
						fontSize: 11,
						color: s <= Math.round(r) ? T.star : T.inkLight,
					}}
				>
					{s <= Math.round(r) ? "★" : "☆"}
				</span>
			))}
			<span style={{ fontSize: 11, color: T.inkLight, marginLeft: 4 }}>
				{r}
			</span>
		</div>
	);
}

// ─── MOCK DATA (Hardcoded for Proof of Concept) ────────────────────────────────
const MOCK_VENDORS = [
	{
		id: 1,
		emoji: "👑",
		bg: "#FEF9C3",
		name: "TileKing Pro",
		loc: "Kothrud, Pune",
		rating: 4.8,
		reviews: 312,
		jobs: 480,
		price: "₹38,500",
		eta: "2–3 days",
		warranty: "2-year workmanship",
		verified: true,
		best: true,
		note: "Includes old tile removal & levelling. Premium grout included.",
	},
	{
		id: 2,
		emoji: "🏙️",
		bg: "#DBEAFE",
		name: "Urban Works & Co.",
		loc: "Baner, Pune",
		rating: 4.5,
		reviews: 187,
		jobs: 290,
		price: "₹34,200",
		eta: "3–4 days",
		warranty: "1-year workmanship",
		verified: true,
		best: false,
		note: "Does not include tile supply. Customer to arrange tiles.",
	},
	{
		id: 3,
		emoji: "🔨",
		bg: "#EDE9FE",
		name: "MasterFloor Works",
		loc: "Hadapsar, Pune",
		rating: 4.2,
		reviews: 94,
		jobs: 130,
		price: "₹29,000",
		eta: "5–7 days",
		warranty: "6-month workmanship",
		verified: false,
		best: false,
		note: "Budget-friendly option.",
	},
];

const MOCK_LINE_ITEMS: LineItemsMap = {
	1: [
		{
			category: "Demolition & Prep",
			subtotal: "₹9,280",
			items: [
				{
					name: "Old tile removal (108 sqft)",
					qty: "108 sqft",
					rate: "₹35/sqft",
					total: "₹3,780",
				},
				{
					name: "Substrate cleaning & levelling",
					qty: "1 job",
					rate: "₹2,500",
					total: "₹2,500",
				},
				{
					name: "Crack repair (minor)",
					qty: "3 patches",
					rate: "₹400/patch",
					total: "₹1,200",
				},
			],
		},
		{
			category: "Materials",
			subtotal: "₹21,620",
			items: [
				{
					name: "Porcelain plank tiles 150×900mm",
					qty: "12 boxes",
					rate: "₹1,400/box",
					total: "₹16,800",
				},
				{
					name: "C2TE exterior adhesive",
					qty: "4 bags",
					rate: "₹620/bag",
					total: "₹2,480",
				},
			],
		},
	],
	// Fallback for others
	2: [
		{
			category: "Labour Only",
			subtotal: "₹10,642",
			items: [
				{
					name: "Tile laying",
					qty: "108 sqft",
					rate: "₹50/sqft",
					total: "₹5,400",
				},
			],
		},
	],
};

// ─── MODAL COMPONENT ─────────────────────────────────────────────────────────
function ViewQuoteModal({
	vendor,
	onClose,
}: {
	vendor: Vendor;
	onClose: () => void;
}) {
	const data = MOCK_LINE_ITEMS[vendor.id] || MOCK_LINE_ITEMS[2];

	return (
		<button
			type="button"
			style={{
				position: "fixed",
				inset: 0,
				background: "rgba(13,27,42,0.6)",
				zIndex: 500,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "24px",
			}}
			onClick={onClose}
		>
			<button
				type="button"
				style={{
					background: T.white,
					borderRadius: 16,
					width: "100%",
					maxWidth: 740,
					maxHeight: "90vh",
					overflow: "auto",
					boxShadow: "0 24px 80px rgba(0,0,0,0.25)",
				}}
				onClick={(e) => e.stopPropagation()}
			>
				<div
					style={{
						padding: "20px 24px",
						borderBottom: `1px solid ${T.border}`,
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						position: "sticky",
						top: 0,
						background: T.white,
						zIndex: 10,
					}}
				>
					<div>
						<div
							style={{
								fontFamily: "'Sora',sans-serif",
								fontSize: 17,
								fontWeight: 800,
								color: T.ink,
							}}
						>
							Itemised Quote — {vendor.name}
						</div>
						<div style={{ fontSize: 12, color: T.inkLight, marginTop: 2 }}>
							All amounts in INR · Includes materials & labour
						</div>
					</div>
					<button
						type="button"
						onClick={onClose}
						style={{
							border: `2px solid ${T.border}`,
							background: "none",
							borderRadius: 8,
							padding: "6px 12px",
							cursor: "pointer",
							fontSize: 13,
							color: T.inkMid,
							fontWeight: 700,
						}}
					>
						✕ Close
					</button>
				</div>
				<div style={{ padding: "20px 24px" }}>
					{data.map((section) => (
						<div key={section.category} style={{ marginBottom: 20 }}>
							<div
								style={{
									fontFamily: "'Sora',sans-serif",
									fontSize: 13,
									fontWeight: 700,
									color: T.blue,
									textTransform: "uppercase",
									letterSpacing: "0.8px",
									marginBottom: 8,
								}}
							>
								{section.category}
							</div>
							<table
								style={{
									width: "100%",
									borderCollapse: "collapse",
									border: `1px solid ${T.border}`,
									borderRadius: 10,
									overflow: "hidden",
								}}
							>
								<thead>
									<tr style={{ background: T.blueLight }}>
										{["Line Item", "Qty", "Rate", "Total"].map((h) => (
											<th
												key={h}
												style={{
													padding: "9px 14px",
													fontSize: 11,
													fontWeight: 700,
													color: T.blue,
													textAlign: h === "Total" ? "right" : "left",
												}}
											>
												{h}
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{section.items.map((item, ii: number) => (
										<tr
											key={item.name}
											style={{
												borderTop: `1px solid ${T.border}`,
												background: ii % 2 === 0 ? T.white : T.bg,
											}}
										>
											<td
												style={{
													padding: "11px 14px",
													fontSize: 13,
													color: T.ink,
												}}
											>
												{item.name}
											</td>
											<td
												style={{
													padding: "11px 14px",
													fontSize: 12,
													color: T.inkLight,
												}}
											>
												{item.qty}
											</td>
											<td
												style={{
													padding: "11px 14px",
													fontSize: 12,
													color: T.inkLight,
												}}
											>
												{item.rate}
											</td>
											<td
												style={{
													padding: "11px 14px",
													fontSize: 13,
													color: T.ink,
													fontWeight: 700,
													textAlign: "right",
												}}
											>
												{item.total}
											</td>
										</tr>
									))}
									<tr
										style={{
											borderTop: `2px solid ${T.border}`,
											background: T.blueLight,
										}}
									>
										<td
											colSpan={3}
											style={{
												padding: "10px 14px",
												fontSize: 13,
												fontWeight: 700,
												color: T.blue,
											}}
										>
											Section Subtotal
										</td>
										<td
											style={{
												padding: "10px 14px",
												fontSize: 13,
												fontWeight: 800,
												color: T.blue,
												textAlign: "right",
											}}
										>
											{section.subtotal}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					))}
					<div
						style={{
							background: `linear-gradient(135deg,${T.blue},#1A3AAF)`,
							borderRadius: 12,
							padding: "18px 22px",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							color: "white",
							marginTop: 8,
						}}
					>
						<div>
							<div
								style={{
									fontFamily: "'Sora',sans-serif",
									fontSize: 14,
									fontWeight: 700,
									opacity: 0.8,
								}}
							>
								Grand Total
							</div>
							<div style={{ fontSize: 12, opacity: 0.65, marginTop: 2 }}>
								GST as applicable
							</div>
						</div>
						<div
							style={{
								fontFamily: "'Sora',sans-serif",
								fontSize: 28,
								fontWeight: 800,
							}}
						>
							{vendor.price}
						</div>
					</div>
				</div>
			</button>
		</button>
	);
}

// ─── MAIN SCREEN COMPONENT ───────────────────────────────────────────────────
function SingleJobQuotesScreen() {
	const { tradeId } = Route.useParams();
	const navigate = useNavigate();
	const [viewQuoteVendor, setViewQuoteVendor] = useState<Vendor | null>(null);

	const allDefs = { ...TRADE_DEFS, ...BUILDING_TRADE_DEFS };
	const tradeDef = allDefs[tradeId as keyof typeof allDefs];

	if (!tradeDef) return <div>Trade not found</div>;

	return (
		<>
			{viewQuoteVendor && (
				<ViewQuoteModal
					vendor={viewQuoteVendor}
					onClose={() => setViewQuoteVendor(null)}
				/>
			)}

			<FlowSteps steps={SINGLE_STEPS} current={2} />

			<div className="page">
				<div style={{ marginBottom: 20 }}>
					<h2
						className="anim"
						style={{
							fontFamily: "'Sora',sans-serif",
							fontSize: 28,
							fontWeight: 800,
							color: T.ink,
							marginBottom: 6,
						}}
					>
						Vendor Quotes Received
					</h2>
					<p className="anim" style={{ fontSize: 14, color: T.inkMid }}>
						{MOCK_VENDORS.length} vendors responded · Compare and choose the
						best fit.
					</p>
				</div>

				<div className="compare-bar anim">
					<span style={{ fontSize: 13, color: T.inkMid }}>
						Comparing: <b style={{ color: T.ink }}>{tradeDef.label} Job</b>
					</span>
					<span style={{ fontSize: 12, color: T.inkLight }}>
						RFQ {tradeDef.rfqId}-001
					</span>
				</div>

				<div className="quotes-grid">
					{MOCK_VENDORS.map((v, i) => (
						<div
							key={v.id}
							className={`quote-card anim${v.best ? " best" : ""}`}
							style={{ animationDelay: `${i * 0.07}s` }}
						>
							{v.best && <div className="best-badge">✦ Best Match</div>}
							<div className="qv-header">
								<div className="qv-logo" style={{ background: v.bg }}>
									{v.emoji}
								</div>
								<div>
									<div className="qv-name">{v.name}</div>
									<div className="qv-loc">{v.loc}</div>
									<Stars r={v.rating} />
								</div>
							</div>
							<div className="qv-body">
								<div className="price-big">{v.price}</div>
								<div className="price-note">all-in estimate</div>
								{[
									["⏱", `Lead time: ${v.eta}`],
									["🛡", `Warranty: ${v.warranty}`],
									[
										v.verified ? "✅" : "⚠️",
										v.verified ? "Identity Verified" : "Not verified",
									],
									["💼", `${v.jobs} completed jobs`],
								].map(([ic, tx], j) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: Miniscule performance difference
									<div key={j} className="qv-detail">
										<span>{ic}</span>
										<span>{tx}</span>
									</div>
								))}
								<div className="qv-note">{v.note}</div>
							</div>
							<div className="qv-footer">
								<button
									type="button"
									className="btn-sm btn-sm-p"
									onClick={() =>
										navigate({
											to: `/trade/$tradeId/vendor/$vendorId`,
											params: { tradeId, vendorId: v.id.toString() },
										})
									}
								>
									Accept Quote
								</button>
								<button
									type="button"
									className="btn-sm btn-sm-o"
									style={{ flex: "none" }}
									onClick={() => setViewQuoteVendor(v)}
								>
									View Quote
								</button>
								<button
									type="button"
									className="btn-sm btn-sm-o"
									style={{ flex: "none" }}
									onClick={() =>
										navigate({
											to: `/trade/$tradeId/vendor/$vendorId`,
											params: { tradeId, vendorId: v.id.toString() },
										})
									}
								>
									Profile
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="action-bar">
				<span className="ab-left">
					Step 3 of 4 · {MOCK_VENDORS.length} Quotes
				</span>
				<div className="ab-right">
					<button
						type="button"
						className="btn btn-ghost"
						onClick={() =>
							navigate({ to: "/trade/$tradeId/review", params: { tradeId } })
						}
					>
						← Back
					</button>
				</div>
			</div>
		</>
	);
}
