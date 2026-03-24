import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { FlowSteps } from "../../components/layout/FlowSteps";
import { T, TRADE_COLORS } from "../../lib/theme";
import { SINGLE_STEPS } from "../../lib/tradeDefs";

export const Route = createFileRoute("/trade/")({
	component: TradeSelectionScreen,
});

const TRADE_OPTIONS = [
	{
		id: "tiling",
		icon: "🪵",
		name: "Tiling & Flooring",
		sub: "Floor tiles, wall tiles, outdoor tiling",
		color: TRADE_COLORS.tiling,
	},
	{
		id: "plumbing",
		icon: "🔧",
		name: "Plumbing",
		sub: "Pipes, fixtures, drainage, water lines",
		color: TRADE_COLORS.plumbing,
	},
	{
		id: "electrical",
		icon: "⚡",
		name: "Electrical",
		sub: "Wiring, fixtures, switchboard, exhaust",
		color: TRADE_COLORS.electrical,
	},
	{
		id: "painting",
		icon: "🎨",
		name: "Painting",
		sub: "Walls, ceiling, waterproof paint",
		color: TRADE_COLORS.painting,
	},
	{
		id: "waterproofing",
		icon: "🛡️",
		name: "Waterproofing",
		sub: "Membrane coating, wet area protection",
		color: TRADE_COLORS.waterproofing,
	},
];

function TradeSelectionScreen() {
	const navigate = useNavigate();
	const [selected, setSelected] = useState<string | null>(null);

	const handleNext = () => {
		if (selected) {
			navigate({ to: "/trade/$tradeId", params: { tradeId: selected } });
		}
	};

	return (
		<>
			<FlowSteps steps={SINGLE_STEPS} current={0} />

			<div className="slide-wrap">
				<div className="slide-progress-bar">
					<div className="slide-progress-fill" style={{ width: "25%" }} />
				</div>

				<div className="slide-body">
					<div className="slide-step-label">Step 1 of 4 · Job Details</div>
					<h2 className="slide-title anim">What trade do you need?</h2>
					<p
						className="slide-subtitle anim"
						style={{ animationDelay: "0.04s" }}
					>
						Select the type of work. We'll guide you through the details.
					</p>

					<div
						className="option-list anim"
						style={{ animationDelay: "0.08s", width: "100%" }}
					>
						{TRADE_OPTIONS.map((t) => (
							<button
								key={t.id}
								className={`option-row${selected === t.id ? " selected" : ""}`}
								onClick={() => setSelected(t.id)}
								style={
									selected === t.id
										? { borderColor: t.color.accent, background: t.color.bg }
										: {}
								}
							>
								<div
									className="option-icon"
									style={
										selected === t.id
											? {
													background: "white",
													borderColor: t.color.accent + "50",
												}
											: {}
									}
								>
									{t.icon}
								</div>
								<div>
									<div
										className="option-text-main"
										style={selected === t.id ? { color: t.color.accent } : {}}
									>
										{t.name}
									</div>
									<div className="option-text-sub">{t.sub}</div>
								</div>
							</button>
						))}

						<button
							className="option-row not-sure"
							onClick={() => navigate({ to: "/project" })}
						>
							<div
								className="option-icon"
								style={{ background: T.purple, border: "none", color: "white" }}
							>
								🏗️
							</div>
							<div>
								<div className="option-text-main" style={{ color: T.purple }}>
									Multiple trades — Full project
								</div>
								<div className="option-text-sub">
									Bathroom reno or new building construction
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>

			<div className="slide-nav">
				<div className="slide-nav-left">Select a trade to continue</div>
				<div className="slide-nav-right">
					<button
						className="btn btn-ghost"
						onClick={() => navigate({ to: "/" })}
					>
						← Back
					</button>
					<button
						className="btn btn-primary"
						disabled={!selected}
						onClick={handleNext}
					>
						Next →
					</button>
				</div>
			</div>
		</>
	);
}
