import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { FlowSteps } from "@/components/layout/FlowSteps";
import { T } from "@/lib/theme";
import { PROJECT_STEPS, PROJECTS } from "@/lib/tradeDefs";
import { useProjectStore } from "@/store/useProjectStore";

export const Route = createFileRoute("/project/")({
	component: ProjectTypeScreen,
});

function ProjectTypeScreen() {
	const navigate = useNavigate();
	const [selected, setSelected] = useState<string | null>(null);
	const resetProject = useProjectStore((s) => s.resetProject);

	const handleStart = () => {
		if (selected) {
			resetProject(); // Clear any previous project progress
			navigate({ to: "/project/$projectId", params: { projectId: selected } });
		}
	};

	return (
		<>
			<FlowSteps steps={PROJECT_STEPS} current={0} />
			<div className="page">
				<div style={{ marginBottom: 8 }} className="anim">
					<div
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 8,
							padding: "6px 14px",
							background: T.purpleLight,
							borderRadius: 20,
							marginBottom: 16,
						}}
					>
						<span style={{ fontSize: 14 }}>🏗️</span>
						<span
							style={{
								fontSize: 12,
								fontWeight: 700,
								color: T.purple,
								fontFamily: "'Sora',sans-serif",
							}}
						>
							PROJECT MANAGEMENT
						</span>
					</div>
					<h2
						style={{
							fontFamily: "'Sora',sans-serif",
							fontSize: 28,
							fontWeight: 800,
							color: T.ink,
							marginBottom: 8,
						}}
					>
						What are you building?
					</h2>
					<p
						style={{
							fontSize: 14,
							color: T.inkMid,
							lineHeight: 1.6,
							maxWidth: 560,
						}}
					>
						Select your project type. Servzo will guide you through one template
						per trade — then generate a single unified RFQ for the entire
						project.
					</p>
				</div>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: 20,
						marginTop: 24,
					}}
				>
					{PROJECTS.map((p, i) => (
						<button
							type="button"
							key={p.id}
							className="anim"
							style={{
								animationDelay: `${i * 0.08}s`,
								background: T.white,
								borderRadius: 16,
								border: `2px solid ${selected === p.id ? p.color : T.border}`,
								overflow: "hidden",
								cursor: "pointer",
								transition: "all 0.2s",
								boxShadow:
									selected === p.id ? `0 8px 32px ${p.color}25` : "none",
								transform: selected === p.id ? "translateY(-2px)" : "none",
							}}
							onClick={() => setSelected(p.id)}
						>
							<div
								style={{
									background: selected === p.id ? p.color : "#F8FAFF",
									padding: "24px 24px 16px",
									transition: "background 0.2s",
								}}
							>
								<div style={{ fontSize: 48, marginBottom: 12 }}>{p.icon}</div>
								<div
									style={{
										fontFamily: "'Sora',sans-serif",
										fontSize: 20,
										fontWeight: 800,
										color: selected === p.id ? "white" : T.ink,
									}}
								>
									{p.title}
								</div>
							</div>
							<div style={{ padding: "16px 24px 20px" }}>
								<p
									style={{
										fontSize: 13,
										color: T.inkMid,
										lineHeight: 1.6,
										marginBottom: 16,
									}}
								>
									{p.desc}
								</p>
								<div style={{ marginBottom: 14 }}>
									<div
										style={{
											fontSize: 11,
											fontWeight: 700,
											textTransform: "uppercase",
											letterSpacing: "0.8px",
											color: T.inkLight,
											marginBottom: 8,
										}}
									>
										Trades covered
									</div>
									<div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
										{p.trades.map((t) => (
											<span
												key={t}
												style={{
													padding: "4px 10px",
													borderRadius: 20,
													background: T.bg,
													border: `1px solid ${T.border}`,
													fontSize: 11,
													fontWeight: 600,
													color: T.inkMid,
												}}
											>
												{t}
											</span>
										))}
									</div>
								</div>
								{/* Cost & Duration Block here (kept from monolith) */}
							</div>
						</button>
					))}
				</div>
			</div>

			<div className="action-bar">
				<span className="ab-left">
					Project Management · Select Project Type
				</span>
				<div className="ab-right">
					<button
						type="button"
						className="btn btn-ghost"
						onClick={() => navigate({ to: "/" })}
					>
						← Back
					</button>
					<button
						type="button"
						className="btn btn-purple"
						disabled={!selected}
						onClick={handleStart}
					>
						Start Project →
					</button>
				</div>
			</div>
		</>
	);
}
