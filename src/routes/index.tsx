import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { T } from "../lib/theme";

export const Route = createFileRoute("/")({
	component: SearchScreen,
});

const QUICK_CHIPS = [
	"Balcony tiling",
	"Bathroom renovation",
	"Interior painting",
	"Plumbing repair",
	"Waterproofing",
	"Electrical work",
];

const FEATURES = [
	{
		icon: "📋",
		title: "Structured RFQ",
		desc: "Answer a few guided questions. We generate a professional Request for Quote — no guesswork for vendors.",
	},
	{
		icon: "📡",
		title: "Broadcast to Vendors",
		desc: "Your RFQ goes to verified vendors in your area simultaneously. No phone calls needed.",
	},
	{
		icon: "⚖️",
		title: "Compare & Choose",
		desc: "See itemised quotes side by side. Compare rates, timelines, and vendor ratings in one view.",
	},
];

function SearchScreen() {
	const navigate = useNavigate();

	return (
		<div className="page">
			<div className="search-hero">
				<div className="search-eyebrow">Servzo · Construction & Renovation</div>
				<h1 className="search-h1">
					Get quotes from <em>verified</em>
					<br />
					construction vendors
				</h1>
				<p className="search-sub">
					Describe your job once. Compare quotes from trusted local vendors.
				</p>

				<div className="search-bar">
					<input
						className="search-input"
						placeholder="e.g. Balcony tiling, bathroom renovation, painting..."
					/>
					<button
						className="search-go"
						onClick={() => navigate({ to: "/trade" })}
					>
						Get Quotes →
					</button>
				</div>

				<div className="quick-chips">
					{QUICK_CHIPS.map((chip) => (
						<button
							key={chip}
							className="chip"
							onClick={() => navigate({ to: "/trade" })}
						>
							{chip}
						</button>
					))}
				</div>

				{/* Cost calculator CTA */}
				<div
					style={{
						marginTop: 32,
						padding: "16px 24px",
						background: T.blueLight,
						border: `1.5px solid ${T.blueMid}`,
						borderRadius: 14,
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						maxWidth: 600,
						margin: "32px auto 0",
					}}
				>
					<div style={{ textAlign: "left" }}>
						<div
							style={{
								fontFamily: "'Sora',sans-serif",
								fontSize: 15,
								fontWeight: 700,
								color: T.ink,
								marginBottom: 3,
							}}
						>
							🧮 AI Cost Estimator — New
						</div>
						<div style={{ fontSize: 13, color: T.inkMid }}>
							Get an instant cost-per-sq.ft estimate before talking to vendors.
						</div>
					</div>
					<button
						className="btn btn-primary"
						style={{ flexShrink: 0, marginLeft: 16 }}
						onClick={() => navigate({ to: "/calculator" })}
					>
						Try it →
					</button>
				</div>
			</div>

			<div className="feature-row">
				{FEATURES.map((f) => (
					<div key={f.title} className="feature-card">
						<div className="feature-icon">{f.icon}</div>
						<div className="feature-title">{f.title}</div>
						<div className="feature-desc">{f.desc}</div>
					</div>
				))}
			</div>
		</div>
	);
}
