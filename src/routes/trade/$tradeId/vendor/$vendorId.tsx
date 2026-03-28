import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { BUILDING_TRADE_DEFS, TRADE_DEFS } from "@/lib/tradeDefs";

export const Route = createFileRoute("/trade/$tradeId/vendor/$vendorId")({
	component: VendorProfileScreen,
});

// ─── DESIGN TOKENS ─────────────────────────────────────────────────────
const D = {
	heroFrom: "#0D1B2A",
	heroTo: "#1A2F45",
	accent: "#10B981",
	accentDark: "#059669",
	accentGlow: "rgba(16,185,129,0.25)",
	gold: "#F59E0B",
	ink: "#0D1B2A",
	inkMid: "#4B5563",
	inkLight: "#9CA3AF",
	surface: "#FFFFFF",
	surfaceAlt: "#F8FAFB",
	border: "#E5E9EF",
	borderStrong: "#CBD5E1",
	blue: "#2563EB",
	blueSoft: "#EFF6FF",
	radius: "16px",
	radiusSm: "10px",
	shadow: "0 1px 3px rgba(13,27,42,0.06), 0 4px 16px rgba(13,27,42,0.08)",
	shadowMd: "0 4px 24px rgba(13,27,42,0.12)",
};

// ─── FONT IMPORT & BULLETPROOF RESPONSIVE CSS ───────────────────────────
const FONT_STYLE = `
	@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600&display=swap');
	* { box-sizing: border-box; }
	body { font-family: 'DM Sans', sans-serif; }
	
	/* --- NUKE CONFLICTING CSS FROM OTHER FILES --- */
	body, #root { width: 100% !important; max-width: 100vw !important; overflow-x: hidden !important; text-align: left !important; }
	
	@keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
	@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
	@keyframes scaleIn { from { transform:scale(0.94); opacity:0; } to { transform:scale(1); opacity:1; } }
	@keyframes tickPop { 0%{transform:scale(0) rotate(-20deg);opacity:0} 60%{transform:scale(1.2) rotate(4deg);opacity:1} 100%{transform:scale(1) rotate(0);opacity:1} }
	@keyframes ringExpand { 0%{transform:scale(0.5);opacity:1} 100%{transform:scale(2.2);opacity:0} }
	@keyframes textFadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
	
	/* --- RELATIVE RESPONSIVE CLASSES --- */
	.responsive-container { max-width: 900px; margin: 0 auto; padding: 28px 24px 0; width: 100%; box-sizing: border-box; overflow-x: hidden; }
	.responsive-grid { display: grid; grid-template-columns: 1fr 340px; gap: 20px; align-items: start; width: 100%; box-sizing: border-box; min-width: 0; }
	
	/* NEW: Hero Section Classes */
	.hero-flex { display: flex; gap: 24px; align-items: flex-start; width: 100%; box-sizing: border-box; }
	.hero-middle { flex: 1; min-width: 0; }
	.hero-title-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 6px; }
	.hero-price { flex-shrink: 0; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; padding: 18px 24px; text-align: center; backdrop-filter: blur(8px); box-sizing: border-box; }
	.success-hero { display: flex; gap: 16px; align-items: center; }

	.stats-box { display: flex; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; overflow: hidden; width: 100%; min-width: 0; box-sizing: border-box; }
	.stat-item { flex: 1; padding: 12px 20px; text-align: center; border-right: 1px solid rgba(255,255,255,0.08); min-width: 0; box-sizing: border-box; }
	.stat-item:last-child { border-right: none; }
	
	.review-text { margin: 0; font-size: 14px; color: #4B5563; line-height: 1.65; padding-left: 50px; word-break: break-word; }
	
	.mobile-action-bar { position: fixed; bottom: 0; left: 0; right: 0; background: rgba(255,255,255,0.95); backdrop-filter: blur(16px); border-top: 1px solid #E5E9EF; padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; z-index: 100; box-shadow: 0 -4px 24px rgba(13,27,42,0.08); box-sizing: border-box; width: 100%; }
	.mobile-action-btns { display: flex; gap: 10px; align-items: center; }

	@media (max-width: 768px) {
		/* Force Topbar to behave */
		.topbar { display: grid !important; grid-template-columns: 1fr auto !important; grid-template-areas: "logo profile" "nav nav" !important; padding: 12px 16px !important; height: auto !important; width: 100% !important; box-sizing: border-box !important; }
		.nav { grid-area: nav; width: 100% !important; min-width: 0 !important; flex-wrap: nowrap !important; overflow-x: auto !important; justify-content: flex-start !important; }
		.nav-btn { white-space: nowrap !important; }
		.topbar-name { display: none !important; }

		/* HERO STACKING (Fixes the Squished Price Card) */
		.hero-flex { flex-direction: column; align-items: center; text-align: center; gap: 20px !important; }
		.hero-middle { width: 100%; display: flex; flex-direction: column; align-items: center; }
		.hero-price { width: 100%; margin-top: 4px; }
		.hero-title-row { justify-content: center; }
		.success-hero { flex-direction: column; text-align: center; }
		.success-hero > div { text-align: center !important; }

		/* Body Grid Stacking */
		.responsive-container { padding: 20px 16px 0; }
		.responsive-grid { display: flex !important; flex-direction: column !important; align-items: stretch !important; }
		.responsive-grid > div { width: 100% !important; max-width: 100% !important; box-sizing: border-box !important; }
		
		.stats-box { flex-wrap: wrap; }
		.stat-item { flex: 1 1 50% !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
		.stat-item:nth-child(even) { border-right: none; }
		
		.review-text { padding-left: 0 !important; margin-top: 12px; width: 100% !important; box-sizing: border-box !important; white-space: normal !important; }
		
		.mobile-action-bar { flex-direction: column; gap: 12px; text-align: center; padding: 16px; }
		.mobile-action-btns { width: 100%; }
		.mobile-action-btns button { flex: 1; justify-content: center; }
	}
`;

// ─── STAR RATING ────────────────────────────────────────────────────────
function Stars({ r, size = 13 }: { r: number; size?: number }) {
	return (
		<span style={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
			{[1, 2, 3, 4, 5].map((s) => (
				<span
					key={s}
					style={{
						fontSize: size,
						color: s <= Math.round(r) ? D.gold : D.border,
						lineHeight: 1,
					}}
				>
					★
				</span>
			))}
			<span
				style={{
					fontSize: size - 1,
					fontWeight: 600,
					color: D.inkMid,
					marginLeft: 4,
				}}
			>
				{r}
			</span>
		</span>
	);
}

// ─── BADGE ──────────────────────────────────────────────────────────────
function Badge({ children, color = D.accent, bg = "rgba(16,185,129,0.1)" }: { children: React.ReactNode; color?: string; bg?: string; }) {
	return (
		<span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 99, background: bg, color, fontSize: 11, fontWeight: 600, letterSpacing: "0.03em" }}>
			{children}
		</span>
	);
}

// ─── MOCK DATA ───────────────────────────────────────────────────────────
const getMockVendor = (id: string, tradeId: string) => {
	const isTileKing = id === "1";
	return {
		id, name: isTileKing ? "TileKing Pro" : "Urban Works & Co.", emoji: isTileKing ? "👑" : "🏙️", loc: "Kothrud, Pune", rating: isTileKing ? 4.8 : 4.5, reviews: isTileKing ? 312 : 187, jobs: isTileKing ? 480 : 290, verified: true, price: isTileKing ? "₹38,500" : "₹34,200", tradeId,
	};
};

const REVIEWS = [
	{ name: "Ananya S.", color: "#2563EB", rating: 5, date: "Feb 2026", text: "Absolutely immaculate work. The tiles are perfectly aligned and the grouting is flawless. TileKing Pro finished ahead of schedule and cleaned up completely." },
	{ name: "Rahul M.", color: "#059669", rating: 5, date: "Jan 2026", text: "Very professional team. They noticed a drainage slope issue the previous contractor had missed and fixed it as part of the job." },
	{ name: "Priya K.", color: "#7C3AED", rating: 4, date: "Dec 2025", text: "Great quality tiles and neat finish. Minor delay on day 2 due to material delivery but they made up for it on day 3." },
];

const PAST_JOBS = [
	{ icon: "🚿", name: "Master Bathroom Tiling — Koregaon Park", meta: "Porcelain 24×24 · 220 sqft · Mar 2026", price: "₹44,000" },
	{ icon: "🍳", name: "Kitchen Floor & Backsplash — Baner", meta: "Ceramic Mosaic · 310 sqft · Feb 2026", price: "₹61,500" },
	{ icon: "🏊", name: "Outdoor Pool Deck — Viman Nagar", meta: "Non-slip Travertine · 480 sqft · Jan 2026", price: "₹1,12,000" },
	{ icon: "🏢", name: "Commercial Lobby — Hinjewadi", meta: "Marble 600×600 · 1200 sqft · Dec 2025", price: "₹2,80,000" },
];

// ─── CARD COMPONENT ──────────────────────────────────────────────────────
function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties; }) {
	return (
		<div style={{ background: D.surface, borderRadius: D.radius, border: `1px solid ${D.border}`, boxShadow: D.shadow, overflow: "hidden", width: "100%", maxWidth: "100%", boxSizing: "border-box", ...style }}>
			{children}
		</div>
	);
}

function CardHeader({ children }: { children: React.ReactNode }) {
	return (
		<div style={{ padding: "16px 22px", borderBottom: `1px solid ${D.border}`, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: D.inkMid, letterSpacing: "0.05em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 8, background: D.surfaceAlt, boxSizing: "border-box", width: "100%" }}>
			{children}
		</div>
	);
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────
export default function VendorProfileScreen() {
	const { tradeId, vendorId } = Route.useParams();
	const navigate = useNavigate();

	const [accepting, setAccepting] = useState(false);
	const [showTick, setShowTick] = useState(false);
	const [confirmed, setConfirmed] = useState(false);

	const allDefs = { ...TRADE_DEFS, ...BUILDING_TRADE_DEFS };
	const tradeDef = allDefs[tradeId as keyof typeof allDefs];
	const vendor = getMockVendor(vendorId, tradeId);

	if (!tradeDef) return <div>Trade not found</div>;

	const handleAccept = () => {
		setAccepting(true);
		setTimeout(() => setShowTick(true), 200);
		setTimeout(() => {
			setShowTick(false);
			setAccepting(false);
			setConfirmed(true);
		}, 2200);
	};

	// ─── CONFIRMATION SCREEN ──────────────────────────────────────────────
	if (confirmed) {
		return (
			<div style={{ minHeight: "100vh", background: D.surfaceAlt, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "48px 16px 120px", width: "100%", boxSizing: "border-box" }}>
				<style>{FONT_STYLE}</style>
				<div style={{ width: "100%", maxWidth: 600, animation: "scaleIn 0.4s cubic-bezier(0.34,1.2,0.64,1) both" }}>
					{/* Success Header */}
					<div style={{ textAlign: "center", marginBottom: 32 }}>
						<div style={{ width: 72, height: 72, borderRadius: "50%", background: `linear-gradient(135deg, ${D.accent}, ${D.accentDark})`, boxShadow: `0 8px 32px ${D.accentGlow}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 20px" }}>✓</div>
						<h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 30, fontWeight: 900, color: D.ink, margin: "0 0 8px", lineHeight: 1.2 }}>Job Awarded!</h2>
						<p style={{ fontSize: 15, color: D.inkMid, margin: 0, lineHeight: 1.6 }}>Your {tradeDef.label.toLowerCase()} job has been confirmed.<br />The vendor will contact you within 24 hours.</p>
					</div>

					{/* Job Card */}
					<Card style={{ marginBottom: 16 }}>
						<div className="success-hero" style={{ background: `linear-gradient(135deg, ${D.heroFrom} 0%, ${D.heroTo} 100%)`, padding: "22px 24px" }}>
							<div style={{ width: 54, height: 54, borderRadius: 14, background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, margin: "0 auto" }}>{vendor.emoji}</div>
							<div style={{ flex: 1 }}>
								<div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700, color: "white", letterSpacing: "-0.01em" }}>{vendor.name}</div>
								<div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 3 }}>{vendor.loc}</div>
							</div>
							<div style={{ textAlign: "right" }}>
								<div style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 900, color: "white" }}>{vendor.price}</div>
								<div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Confirmed total</div>
							</div>
						</div>
						<div>
							{[
								["RFQ ID", `${tradeDef.rfqId}-001`],
								["Job", `${tradeDef.label} Job`],
								["Start Date", "Within 2 weeks"],
								["Duration", "2–3 working days"],
								["Warranty", "2-year workmanship"],
								["Payment Terms", "50% advance · 50% on completion"],
							].map(([l, v], i) => (
								<div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 24px", borderBottom: i < 5 ? `1px solid ${D.border}` : "none", background: i % 2 === 0 ? D.surface : D.surfaceAlt }}>
									<span style={{ fontSize: 12, fontWeight: 500, color: D.inkLight, letterSpacing: "0.02em" }}>{l}</span>
									<span style={{ fontSize: 13, fontWeight: 600, color: D.ink }}>{v}</span>
								</div>
							))}
						</div>
					</Card>

					{/* Actions */}
					<div style={{ display: "flex", gap: 10 }}>
						<button onClick={() => navigate({ to: "/" })} style={{ flex: 1, padding: "13px 20px", borderRadius: D.radiusSm, border: `1.5px solid ${D.borderStrong}`, background: D.surface, fontSize: 14, fontWeight: 600, color: D.inkMid, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>📄 Download Job Order</button>
						<button onClick={() => navigate({ to: "/" })} style={{ flex: 1, padding: "13px 20px", borderRadius: D.radiusSm, border: "none", background: `linear-gradient(135deg, ${D.accent}, ${D.accentDark})`, fontSize: 14, fontWeight: 600, color: "white", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", boxShadow: `0 4px 16px ${D.accentGlow}` }}>Go to My Jobs →</button>
					</div>
				</div>
			</div>
		);
	}

	// ─── PROFILE VIEW ─────────────────────────────────────────────────────
	return (
		<div style={{ background: D.surfaceAlt, minHeight: "100vh", width: "100%", maxWidth: "100vw", overflowX: "hidden", position: "relative" }}>
			<style>{FONT_STYLE}</style>

			{/* Accepting Overlay */}
			{accepting && (
				<div style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(255,255,255,0.97)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "fadeIn 0.2s ease" }}>
					{showTick && (
						<>
							<div style={{ position: "absolute", width: 140, height: 140, borderRadius: "50%", border: `4px solid ${D.accent}`, opacity: 0, animation: "ringExpand 0.8s 0.1s ease-out forwards" }} />
							<div style={{ position: "absolute", width: 140, height: 140, borderRadius: "50%", border: `2px solid ${D.accent}`, opacity: 0, animation: "ringExpand 0.9s 0.25s ease-out forwards" }} />
							<div style={{ width: 112, height: 112, borderRadius: "50%", background: `linear-gradient(135deg, ${D.accent}, ${D.accentDark})`, display: "flex", alignItems: "center", justifyContent: "center", animation: "tickPop 0.5s cubic-bezier(.34,1.56,.64,1) both", boxShadow: `0 16px 48px ${D.accentGlow}` }}>
								<svg width="52" height="52" viewBox="0 0 56 56" fill="none"><path d="M12 28 L24 40 L44 18" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></svg>
							</div>
							<div style={{ marginTop: 28, textAlign: "center", animation: "textFadeUp 0.4s 0.3s ease both" }}>
								<div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 800, color: D.ink, marginBottom: 6 }}>{vendor.name} Accepted!</div>
								<div style={{ fontSize: 14, color: D.inkMid }}>Setting up your job order…</div>
							</div>
						</>
					)}
				</div>
			)}

			<div style={{ paddingBottom: 100 }}>
				{/* ── HERO ──────────────────────────────────────────────────────── */}
				<div style={{ background: `linear-gradient(160deg, ${D.heroFrom} 0%, ${D.heroTo} 100%)`, padding: "40px 24px 0", position: "relative", overflow: "hidden", width: "100%", boxSizing: "border-box" }}>
					<div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
					
					<div style={{ maxWidth: 900, margin: "0 auto", position: "relative", width: "100%" }}>
						<div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 28, letterSpacing: "0.04em", fontWeight: 500 }}>
							{tradeDef.label.toUpperCase()} · STEP 5 OF 5
						</div>

						{/* REPLACED HARDCODED ROW WITH CSS CLASSES */}
						<div className="hero-flex">
							<div style={{ width: 88, height: 88, borderRadius: 20, background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.06))", border: "2px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42, flexShrink: 0, backdropFilter: "blur(8px)", margin: "0 auto" }}>
								{vendor.emoji}
							</div>

							<div className="hero-middle">
								<div className="hero-title-row">
									<h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 30, fontWeight: 900, color: "white", margin: 0, letterSpacing: "-0.02em", lineHeight: 1 }}>{vendor.name}</h1>
									{vendor.verified && (<Badge color={D.accent} bg="rgba(16,185,129,0.18)">✓ Verified</Badge>)}
								</div>
								<div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>
									{tradeDef.label} Specialist · 📍 {vendor.loc}
								</div>

								{/* Stats box */}
								<div className="stats-box">
									{[
										[vendor.rating, "Rating", D.gold],
										[vendor.reviews, "Reviews", "rgba(255,255,255,0.9)"],
										[vendor.jobs, "Jobs", "rgba(255,255,255,0.9)"],
										["5 yrs", "On Servzo", "rgba(255,255,255,0.9)"],
									].map(([v, k, color]) => (
										<div key={k as string} className="stat-item">
											<div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: color as string, lineHeight: 1 }}>{v as string}</div>
											<div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 4, fontWeight: 500, letterSpacing: "0.04em" }}>{k as string}</div>
										</div>
									))}
								</div>
							</div>

							<div className="hero-price">
								<div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em", fontWeight: 600, marginBottom: 6 }}>QUOTED PRICE</div>
								<div style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 900, color: "white", lineHeight: 1 }}>{vendor.price}</div>
								<div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 6 }}>all-inclusive estimate</div>
							</div>
						</div>

						<div style={{ height: 32 }} />
					</div>
				</div>

				{/* ── BODY ──────────────────────────────────────────────────────── */}
				<div className="responsive-container">
					<div className="responsive-grid">
						
						{/* LEFT COLUMN */}
						<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
							<Card>
								<CardHeader>⭐ Customer Reviews <Stars r={vendor.rating} size={12} /></CardHeader>
								<div style={{ padding: "6px 0", width: "100%", boxSizing: "border-box" }}>
									{REVIEWS.map((r, i) => (
										<div key={r.name} style={{ padding: "18px 22px", borderBottom: i < REVIEWS.length - 1 ? `1px solid ${D.border}` : "none", width: "100%", boxSizing: "border-box" }}>
											<div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
												<div style={{ width: 38, height: 38, borderRadius: "50%", background: r.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, flexShrink: 0 }}>
													{r.name[0]}
												</div>
												<div style={{ flex: 1, minWidth: 0 }}>
													<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
														<span style={{ fontSize: 14, fontWeight: 600, color: D.ink }}>{r.name}</span>
														<span style={{ fontSize: 12, color: D.inkLight }}>{r.date}</span>
													</div>
													<Stars r={r.rating} size={12} />
												</div>
											</div>
											<p className="review-text">{r.text}</p>
										</div>
									))}
								</div>
							</Card>

							<Card>
								<CardHeader>💼 Past Jobs</CardHeader>
								<div style={{ padding: "6px 0", width: "100%", boxSizing: "border-box" }}>
									{PAST_JOBS.map((j, i) => (
										<div key={j.name} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 22px", borderBottom: i < PAST_JOBS.length - 1 ? `1px solid ${D.border}` : "none", width: "100%", boxSizing: "border-box" }}>
											<div style={{ width: 40, height: 40, borderRadius: 10, background: D.surfaceAlt, border: `1px solid ${D.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
												{j.icon}
											</div>
											<div style={{ flex: 1, minWidth: 0 }}>
												<div style={{ fontSize: 14, fontWeight: 600, color: D.ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{j.name}</div>
												<div style={{ fontSize: 12, color: D.inkLight, marginTop: 2 }}>{j.meta}</div>
											</div>
											<div style={{ fontSize: 14, fontWeight: 700, color: D.ink, whiteSpace: "nowrap", flexShrink: 0, background: D.surfaceAlt, padding: "4px 10px", borderRadius: 8, border: `1px solid ${D.border}` }}>
												{j.price}
											</div>
										</div>
									))}
								</div>
							</Card>
						</div>

						{/* RIGHT COLUMN */}
						<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
							<Card>
								<CardHeader>🔖 Credentials</CardHeader>
								<div style={{ padding: "14px 18px", display: "flex", flexDirection: "column", gap: 8, width: "100%", boxSizing: "border-box" }}>
									{[
										["📜", "CIBSE Certified Installer", D.blueSoft, D.blue],
										["🛡", "Servzo Identity Verified", "rgba(16,185,129,0.08)", D.accent],
										["💰", "GST Registered Business", D.surfaceAlt, D.inkMid],
										["🔒", "Insured up to ₹10 Lakhs", D.surfaceAlt, D.inkMid],
									].map(([ic, lb, bg, color]) => (
										<div key={lb as string} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: D.radiusSm, background: bg as string, border: `1px solid ${D.border}` }}>
											<span style={{ fontSize: 16, lineHeight: 1 }}>{ic as string}</span>
											<span style={{ fontSize: 13, fontWeight: 500, color: color as string }}>{lb as string}</span>
										</div>
									))}
								</div>
							</Card>

							<Card>
								<CardHeader>⚡ Specialisations</CardHeader>
								<div style={{ padding: "16px 18px", width: "100%", boxSizing: "border-box" }}>
									<div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
										{["Porcelain", "Marble", "Mosaic", "Herringbone", "Outdoor Tiling", "Bathroom Waterproofing", "Subfloor Levelling", "Grout Sealing"].map((s) => (
											<span key={s} style={{ padding: "5px 12px", borderRadius: 99, background: D.surfaceAlt, border: `1.5px solid ${D.border}`, fontSize: 12, fontWeight: 500, color: D.inkMid }}>{s}</span>
										))}
									</div>
								</div>
							</Card>

							<Card>
								<CardHeader>📍 Service Area</CardHeader>
								<div style={{ padding: "14px 18px", width: "100%", boxSizing: "border-box" }}>
									{["Kothrud", "Baner", "Aundh", "Wakad", "Hinjewadi", "Koregaon Park"].map((area) => (
										<div key={area} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 500, color: D.ink, padding: "5px 12px", margin: "0 6px 6px 0", borderRadius: 99, background: D.surfaceAlt, border: `1.5px solid ${D.border}` }}>
											{area}
										</div>
									))}
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>

			{/* ── ACTION BAR ────────────────────────────────────────────────── */}
			<div className="mobile-action-bar">
				<div>
					<div style={{ fontSize: 12, fontWeight: 600, color: D.inkLight, letterSpacing: "0.04em", textTransform: "uppercase" }}>Step 5 of 5</div>
					<div style={{ fontSize: 14, fontWeight: 600, color: D.ink, marginTop: 1 }}>
						{vendor.name} · <span style={{ color: D.accent }}>Verified Vendor</span>
					</div>
				</div>
				<div className="mobile-action-btns">
					<button
						type="button"
						onClick={() => navigate({ to: "/trade/$tradeId/quotes", params: { tradeId } })}
						style={{ padding: "10px 18px", borderRadius: D.radiusSm, border: `1.5px solid ${D.borderStrong}`, background: D.surface, fontSize: 14, fontWeight: 600, color: D.inkMid, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
					>
						← Back
					</button>
					<button
						type="button"
						onClick={handleAccept}
						disabled={accepting}
						style={{
							padding: "10px 24px", borderRadius: D.radiusSm, border: "none",
							background: accepting ? D.inkLight : `linear-gradient(135deg, ${D.accent}, ${D.accentDark})`,
							fontSize: 14, fontWeight: 700, color: "white", cursor: accepting ? "not-allowed" : "pointer",
							fontFamily: "'DM Sans', sans-serif", boxShadow: accepting ? "none" : `0 4px 16px ${D.accentGlow}`,
							display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s",
						}}
					>
						<span>✅</span>
						<span>Accept Quote · {vendor.price}</span>
					</button>
				</div>
			</div>
		</div>
	);
}