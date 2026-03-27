import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FlowSteps } from "@/components/layout/FlowSteps";
import { T } from "@/lib/theme";
import {
	BUILDING_TRADE_DEFS,
	PROJECT_STEPS,
	PROJECTS,
	TRADE_DEFS,
} from "@/lib/tradeDefs";
import { useProjectStore } from "@/store/useProjectStore";

export const Route = createFileRoute("/project/$projectId/")({
	component: TradeHubScreen,
});

function TradeHubScreen() {
	const { projectId } = Route.useParams();
	const navigate = useNavigate();
	const completedTrades = useProjectStore((s) => s.completedTrades);

	const project = PROJECTS.find((p) => p.id === projectId);
	if (!project) return <div>Project not found</div>;

	const allDone = project.tradeIds.every((id) => completedTrades.includes(id));
	const doneCount = project.tradeIds.filter((id) =>
		completedTrades.includes(id),
	).length;
	const pct = Math.round((doneCount / project.tradeIds.length) * 100);

	const tradeDefs =
		project.id === "building" ? BUILDING_TRADE_DEFS : TRADE_DEFS;

	const getSequenceHint = (id: string) => {
		if (id === "tiling" && !completedTrades.includes("waterproofing"))
			return "Complete Waterproofing first";
		if (id === "painting" && !completedTrades.includes("electrical"))
			return "Complete Electrical first";
		if (id === "structural" && !completedTrades.includes("excavation"))
			return "Complete Excavation first";
		if (id === "interior" && !completedTrades.includes("structural"))
			return "Complete Structural first";
		return null;
	};

	return (
		<>
			<FlowSteps steps={PROJECT_STEPS} current={1} />
			<div className="page">
				{/* Project header banner */}
				<div
					className="anim"
					style={{
						background: `linear-gradient(135deg, ${project.color} 0%, ${project.id === "bathroom" ? "#1A3AAF" : "#4F46E5"} 100%)`,
						borderRadius: 16,
						padding: "24px 28px",
						color: "white",
						marginBottom: 24,
						display: "flex",
						alignItems: "center",
						gap: 20,
					}}
				>
					<div style={{ fontSize: 48 }}>{project.icon}</div>
					<div style={{ flex: 1 }}>
						<div
							style={{
								fontSize: 11,
								fontWeight: 700,
								letterSpacing: "1px",
								opacity: 0.7,
								textTransform: "uppercase",
								fontFamily: "'Sora',sans-serif",
								marginBottom: 4,
							}}
						>
							{project.rfqId}
						</div>
						<div
							style={{
								fontFamily: "'Sora',sans-serif",
								fontSize: 22,
								fontWeight: 800,
								marginBottom: 4,
							}}
						>
							{project.title}
						</div>
						<div style={{ marginTop: 14 }}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									marginBottom: 6,
								}}
							>
								<span style={{ fontSize: 12, opacity: 0.8 }}>
									{doneCount} of {project.tradeIds.length} templates complete
								</span>
								<span style={{ fontSize: 12, fontWeight: 700 }}>{pct}%</span>
							</div>
							<div
								style={{
									height: 6,
									background: "rgba(255,255,255,0.2)",
									borderRadius: 3,
								}}
							>
								<div
									style={{
										height: 6,
										background: "white",
										borderRadius: 3,
										width: `${pct}%`,
										transition: "width 0.5s ease",
									}}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Render Trade Cards mapping (same as monolith) */}
				<div
					style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
				>
					{project.tradeIds.map((id, i) => {
						const def = tradeDefs[id as keyof typeof tradeDefs];
						const done = completedTrades.includes(id);
						const hint = getSequenceHint(id);
						return (
							/* Extract the card UI from TradeHubScreen here */
							<div
								key={id}
								className="anim"
								style={{
									animationDelay: `${i * 0.06}s`,
									background: T.white,
									borderRadius: 14,
									border: `2px solid ${done ? def.color.accent : T.border}`,
								}}
							>
								{/* Card Content... */}
								<div style={{ padding: "18px 20px" }}>
									<div
										style={{
											fontFamily: "'Sora',sans-serif",
											fontSize: 15,
											fontWeight: 700,
										}}
									>
										{def.label}
									</div>
									<button
										type="button"
										className="btn-sm btn-sm-p"
										onClick={() =>
											navigate({
												to: "/trade/$tradeId",
												params: { tradeId: id },
												search: { projectId: project.id },
											})
										}
										disabled={!!hint}
									>
										{done ? "Edit Template" : `Fill ${def.label} Template →`}
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="action-bar">
				<span className="ab-left">
					{project.rfqId} · {doneCount}/{project.tradeIds.length} templates
				</span>
				<div className="ab-right">
					<button
						type="button"
						className="btn btn-ghost"
						onClick={() => navigate({ to: "/project" })}
					>
						← Change Project
					</button>
					{allDone && (
						<button
							className="btn btn-green"
							onClick={() =>
								navigate({
									to: "/project/$projectId/review",
									params: { projectId: project.id },
								})
							}
						>
							Generate RFQ →
						</button>
					)}
				</div>
			</div>
		</>
	);
}
