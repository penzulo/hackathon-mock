import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { T } from "@/lib/theme";
import { BUILDING_TRADE_DEFS, TRADE_DEFS } from "@/lib/tradeDefs";

export const Route = createFileRoute("/trade/$tradeId/vendor/$vendorId")({
	component: VendorProfileScreen,
});

// ─── MOCK FULL PROFILE DATA ──────────────────────────────────────────────────
const getMockProfile = (id: string) => ({
	id,
	name:
		id === "1"
			? "TileKing Pro"
			: id === "2"
				? "Urban Works & Co."
				: "MasterFloor Works",
	emoji: id === "1" ? "👑" : id === "2" ? "🏙️" : "🔨",
	loc: "Pune, Maharashtra",
	rating: id === "1" ? 4.8 : 4.5,
	reviews: id === "1" ? 312 : 187,
	jobs: id === "1" ? 480 : 290,
	verified: true,
	memberSince: "2021",
	quotePrice: id === "1" ? "₹38,500" : "₹34,200",
	skills: [
		"Ceramic",
		"Porcelain",
		"Waterproofing",
		"Epoxy Grouting",
		"Marble Overlay",
	],
	recentReviews: [
		{
			name: "Rahul D.",
			date: "2 weeks ago",
			text: "Excellent finish on our bathroom tiles. Very clean work and stuck to the timeline.",
			rating: 5,
		},
		{
			name: "Sneha P.",
			date: "1 month ago",
			text: "Good work, but arrived a bit late on the first day. Overall satisfied.",
			rating: 4,
		},
	],
	pastJobs: [
		{
			title: "Master Bathroom Renovation",
			type: "Tiling & Waterproofing",
			price: "₹45,000",
		},
		{
			title: "Balcony Anti-Skid Tiling",
			type: "Outdoor Tiling",
			price: "₹18,500",
		},
	],
});

function VendorProfileScreen() {
	const { tradeId, vendorId } = Route.useParams();
	const navigate = useNavigate();
	const [isConfirmed, setIsConfirmed] = useState(false);

	const allDefs = { ...TRADE_DEFS, ...BUILDING_TRADE_DEFS };
	const tradeDef = allDefs[tradeId as keyof typeof allDefs];
	const profile = getMockProfile(vendorId);

	if (!tradeDef) return <div>Trade not found</div>;

	// ─── SUCCESS VIEW ────────────────────────────────────────────────────────
	if (isConfirmed) {
		return (
			<div
				className="page"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					minHeight: "80vh",
					textAlign: "center",
				}}
			>
				<div className="anim" style={{ animationDelay: "0s" }}>
					<div style={{ fontSize: 72, marginBottom: 24 }}>🎉</div>
					<h2
						style={{
							fontFamily: "'Sora',sans-serif",
							fontSize: 32,
							fontWeight: 800,
							color: T.ink,
							marginBottom: 12,
						}}
					>
						Job Awarded to {profile.name}!
					</h2>
					<p
						style={{
							fontSize: 15,
							color: T.inkMid,
							lineHeight: 1.6,
							maxWidth: 400,
							margin: "0 auto 32px",
						}}
					>
						Your RFQ <b>{tradeDef.rfqId}-001</b> has been successfully assigned.
						The vendor will contact you shortly to finalize the site visit and
						schedule.
					</p>
					<div
						style={{
							padding: "20px 24px",
							background: T.white,
							border: `2px solid ${T.border}`,
							borderRadius: 16,
							maxWidth: 400,
							margin: "0 auto",
							textAlign: "left",
						}}
					>
						<div
							style={{
								fontSize: 12,
								fontWeight: 700,
								color: T.inkLight,
								textTransform: "uppercase",
								letterSpacing: "0.5px",
								marginBottom: 12,
							}}
						>
							Next Steps
						</div>
						<div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
							<div style={{ fontSize: 20 }}>📞</div>
							<div style={{ fontSize: 13, color: T.ink, lineHeight: 1.5 }}>
								<b>Vendor Contact:</b> Expect a call from {profile.name} within
								24 hours.
							</div>
						</div>
						<div style={{ display: "flex", gap: 12 }}>
							<div style={{ fontSize: 20 }}>💳</div>
							<div style={{ fontSize: 13, color: T.ink, lineHeight: 1.5 }}>
								<b>Payment:</b> A 10% mobilization advance is standard before
								work begins.
							</div>
						</div>
					</div>
				</div>
				<div
					className="action-bar"
					style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
				>
					<span className="ab-left">Order Confirmed</span>
					<div className="ab-right">
						<button
							className="btn btn-primary"
							onClick={() => navigate({ to: "/" })}
						>
							Return to Dashboard →
						</button>
					</div>
				</div>
			</div>
		);
	}

	// ─── PROFILE VIEW ──────────────────────────────────────────────────────────
	return (
		<>
			<div className="page">
				{/* Profile Hero */}
				<div className="profile-hero anim">
					<div className="profile-av">{profile.emoji}</div>
					<div style={{ flex: 1 }}>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "flex-start",
							}}
						>
							<div>
								<div className="profile-name">{profile.name}</div>
								<div className="profile-sub">
									📍 {profile.loc} · Member since {profile.memberSince}
								</div>
							</div>
							{profile.verified && (
								<div className="verified-pill">✓ VERIFIED</div>
							)}
						</div>
						<div className="profile-stats">
							<div>
								<div className="pstat-val">★ {profile.rating}</div>
								<div className="pstat-key">{profile.reviews} Reviews</div>
							</div>
							<div>
								<div className="pstat-val">{profile.jobs}</div>
								<div className="pstat-key">Jobs Completed</div>
							</div>
						</div>
					</div>
				</div>

				<div className="profile-grid">
					{/* Credentials & Skills */}
					<div className="pcard anim" style={{ animationDelay: "0.06s" }}>
						<div className="pcard-hdr">Credentials & Skills</div>
						<div className="pcard-body">
							<div className="cred-row">✅ GST Registered Business</div>
							<div className="cred-row">✅ Background Checked (Mar 2026)</div>
							<div className="divider" />
							<div className="sec-label">Verified Skills</div>
							<div style={{ margin: "-3px" }}>
								{profile.skills.map((s) => (
									<span key={s} className="skill-tag">
										{s}
									</span>
								))}
							</div>
						</div>
					</div>

					{/* Past Jobs on Servzo */}
					<div className="pcard anim" style={{ animationDelay: "0.08s" }}>
						<div className="pcard-hdr">Recent Servzo Jobs</div>
						<div className="pcard-body" style={{ padding: "10px 20px" }}>
							{profile.pastJobs.map((job, i) => (
								<div key={i} className="job-row">
									<div className="job-ic">✓</div>
									<div>
										<div className="job-nm">{job.title}</div>
										<div className="job-mt">{job.type}</div>
									</div>
									<div className="job-pr">{job.price}</div>
								</div>
							))}
						</div>
					</div>

					{/* Reviews */}
					<div className="pcard full anim" style={{ animationDelay: "0.12s" }}>
						<div className="pcard-hdr">Client Reviews</div>
						<div className="pcard-body" style={{ padding: "10px 20px" }}>
							{profile.recentReviews.map((rev, i) => (
								<div key={i} className="rev-row">
									<div className="rev-header">
										<div className="rev-av" style={{ background: T.blue }}>
											{rev.name[0]}
										</div>
										<div className="rev-name">{rev.name}</div>
										<div style={{ color: T.star, fontSize: 12, marginLeft: 8 }}>
											{"★".repeat(rev.rating)}
											{"☆".repeat(5 - rev.rating)}
										</div>
										<div className="rev-date">{rev.date}</div>
									</div>
									<div className="rev-text">{rev.text}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="action-bar">
				<span className="ab-left">Viewing Vendor Profile</span>
				<div className="ab-right">
					<button
						className="btn btn-ghost"
						onClick={() =>
							navigate({ to: "/trade/$tradeId/quotes", params: { tradeId } })
						}
					>
						← Back to Quotes
					</button>
					<button
						className="btn btn-green"
						onClick={() => setIsConfirmed(true)}
					>
						✅ Accept Quote ({profile.quotePrice})
					</button>
				</div>
			</div>
		</>
	);
}
