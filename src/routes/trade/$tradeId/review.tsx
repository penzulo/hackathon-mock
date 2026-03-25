import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FlowSteps } from "@/components/layout/FlowSteps";
import { T } from "@/lib/theme";
import { BUILDING_TRADE_DEFS, SINGLE_STEPS, TRADE_DEFS } from "@/lib/tradeDefs";

export const Route = createFileRoute("/trade/$tradeId/review")({
	component: SingleJobReviewScreen,
});

function SingleJobReviewScreen() {
	const { tradeId } = Route.useParams();
	const navigate = useNavigate();

	// Combine definitions to handle both standard and building trades
	const allDefs = { ...TRADE_DEFS, ...BUILDING_TRADE_DEFS };
	const tradeDef = allDefs[tradeId as keyof typeof allDefs];

	if (!tradeDef) return <div>Trade not found</div>;

	return (
		<>
			<FlowSteps steps={SINGLE_STEPS} current={1} />
			<div className="page">
				<div style={{ marginBottom: 24 }} className="anim">
					<h2
						style={{
							fontFamily: "'Sora',sans-serif",
							fontSize: 26,
							fontWeight: 800,
							color: T.ink,
							marginBottom: 6,
						}}
					>
						Review your request before posting
					</h2>
					<p style={{ fontSize: 14, color: T.inkMid }}>
						Here's what vendors will see. Make sure everything looks right.
					</p>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 10,
							marginTop: 12,
							padding: "10px 16px",
							background: tradeDef.color.bg,
							borderRadius: 10,
							width: "fit-content",
							border: `1px solid ${tradeDef.color.accent}40`,
						}}
					>
						<span
							style={{
								fontSize: 13,
								fontWeight: 700,
								color: tradeDef.color.accent,
								fontFamily: "'Sora',sans-serif",
							}}
						>
							RFQ ID:
						</span>
						<span
							style={{
								fontSize: 13,
								fontWeight: 700,
								color: T.ink,
								fontFamily: "'Sora',sans-serif",
							}}
						>
							{tradeDef.rfqId}-001
						</span>
						<span style={{ fontSize: 11, color: T.inkLight, marginLeft: 8 }}>
							Generated Today
						</span>
					</div>
				</div>

				{/* Dynamic Specifications Card */}
				<div
					className="review-card anim"
					style={{
						animationDelay: "0.06s",
						border: `1.5px solid ${tradeDef.color.accent}40`,
					}}
				>
					<div
						className="review-card-header"
						style={{ background: tradeDef.color.bg }}
					>
						<div>
							<div
								className="review-card-title"
								style={{
									color: tradeDef.color.accent,
									display: "flex",
									alignItems: "center",
									gap: 8,
								}}
							>
								<span style={{ fontSize: 20 }}>{tradeDef.icon}</span> Part A —
								Job Specifications
							</div>
							<div style={{ fontSize: 12, color: T.inkMid, marginTop: 2 }}>
								Auto-generated from your template answers
							</div>
						</div>
						<button
							type="button"
							className="btn btn-ghost"
							style={{ padding: "7px 14px", fontSize: 12 }}
							onClick={() =>
								navigate({ to: "/trade/$tradeId", params: { tradeId } })
							}
						>
							✏️ Edit
						</button>
					</div>

					<table style={{ width: "100%", borderCollapse: "collapse" }}>
						<tbody>
							{tradeDef.summary.map(([label, value], ri) => (
								<tr
									key={label}
									style={{
										borderBottom: `1px solid ${T.border}`,
										background: ri % 2 === 0 ? T.white : T.bg,
									}}
								>
									<td
										style={{
											padding: "12px 22px",
											fontSize: 13,
											fontWeight: 600,
											color: T.inkLight,
											width: "38%",
											verticalAlign: "top",
										}}
									>
										{label}
									</td>
									<td
										style={{
											padding: "12px 22px",
											fontSize: 13,
											fontWeight: 500,
											color: T.ink,
											lineHeight: 1.6,
										}}
									>
										{value}
									</td>
								</tr>
							))}
						</tbody>
					</table>

					{/* Vendor Quotation Placeholder */}
					<div
						style={{
							padding: "12px 22px",
							background: T.bg,
							borderTop: `1px solid ${T.border}`,
							fontSize: 12,
							color: T.inkMid,
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<span>
							📋 <strong>Part B — Vendor Quotation</strong> fields will be
							filled by the quoting vendors
						</span>
						<span style={{ fontSize: 11, color: T.inkLight }}>
							Price, materials, timeline…
						</span>
					</div>
				</div>

				{/* Broadcast Box */}
				<div className="broadcast-box anim" style={{ animationDelay: "0.12s" }}>
					<div style={{ fontSize: 28 }}>📡</div>
					<div className="broadcast-body">
						<h4>Ready to Broadcast to Vendors</h4>
						<p>
							Your {tradeDef.label.toLowerCase()} job will be sent to all
							verified vendors in your area.
						</p>
						<div className="vendor-tags">
							{[
								"TileKing Pro",
								"Urban Works & Co.",
								"MasterFloor Works",
								"Pune Experts",
								"+ 14 more",
							].map((v) => (
								<span key={v} className="vtag">
									{v}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* Confirmation Box */}
				<div className="review-card anim" style={{ animationDelay: "0.18s" }}>
					<div className="review-card-header">
						<div className="review-card-title">✅ Confirmation</div>
					</div>
					<div className="review-card-body">
						<p
							style={{
								fontSize: 13,
								color: T.inkMid,
								lineHeight: 1.7,
								marginBottom: 16,
							}}
						>
							By posting this RFQ, you confirm that all details above are
							accurate.
						</p>
						<div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
							<input
								type="checkbox"
								defaultChecked
								style={{
									width: 16,
									height: 16,
									accentColor: T.blue,
									marginTop: 2,
									flexShrink: 0,
								}}
							/>
							<span style={{ fontSize: 13, color: T.inkMid, lineHeight: 1.6 }}>
								I confirm the above details are accurate and agree to Servzo's{" "}
								<span
									style={{
										color: T.blue,
										cursor: "pointer",
										textDecoration: "underline",
									}}
								>
									Terms of Service
								</span>
								.
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Fixed Action Bar */}
			<div className="action-bar">
				<span className="ab-left">
					Step 2 of 4 · Review & Broadcast · RFQ {tradeDef.rfqId}-001
				</span>
				<div className="ab-right">
					<button
						type="button"
						className="btn btn-ghost"
						onClick={() =>
							navigate({ to: "/trade/$tradeId", params: { tradeId } })
						}
					>
						← Edit Details
					</button>
					<button
						type="button"
						className="btn btn-green"
						onClick={() =>
							navigate({ to: "/trade/$tradeId/quotes", params: { tradeId } })
						}
					>
						📡 Confirm & Post RFQ →
					</button>
				</div>
			</div>
		</>
	);
}
