import { useState } from "react";

const T = {
	blue: "#3B5BDB",
	blueDark: "#2F4AC7",
	blueLight: "#EEF2FF",
	blueMid: "#C5D0FA",
	ink: "#0D1B2A",
	inkMid: "#3D4F63",
	inkLight: "#7A8A9A",
	border: "#E4E9F0",
	bg: "#F7F9FC",
	white: "#FFFFFF",
	green: "#2E7D32",
	greenLight: "#E8F5E9",
	greenBorder: "#A5D6A7",
	star: "#F59E0B",
	purple: "#7C3AED",
	purpleLight: "#F5F3FF",
	orange: "#EA580C",
	orangeLight: "#FFF7ED",
	teal: "#0891B2",
	tealLight: "#ECFEFF",
	rose: "#E11D48",
	roseLight: "#FFF1F2",
	amber: "#D97706",
	amberLight: "#FFFBEB",
};

const TRADE_COLORS = {
	tiling: { bg: T.blueLight, accent: T.blue, light: "#DBEAFE" },
	plumbing: { bg: T.tealLight, accent: T.teal, light: "#CFFAFE" },
	electrical: { bg: T.amberLight, accent: T.amber, light: "#FEF9C3" },
	painting: { bg: T.purpleLight, accent: T.purple, light: "#EDE9FE" },
	waterproofing: { bg: T.roseLight, accent: T.rose, light: "#FFE4E6" },
};

const fonts = `@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');`;

const css = `
* { box-sizing:border-box; margin:0; padding:0; }
body { font-family:'Lato',sans-serif; background:${T.bg}; color:${T.ink}; min-height:100vh; }

.topbar { background:${T.white}; border-bottom:1px solid ${T.border}; padding:0 40px; height:62px; display:flex; align-items:center; justify-content:space-between; position:sticky; top:0; z-index:200; box-shadow:0 1px 6px rgba(0,0,0,0.05); }
.logo { font-family:'Sora',sans-serif; font-size:22px; font-weight:800; color:${T.blue}; letter-spacing:-0.5px; }
.logo span { color:${T.ink}; }
.nav { display:flex; gap:2px; }
.nav-btn { padding:7px 16px; border-radius:8px; font-size:13px; font-weight:600; font-family:'Lato',sans-serif; color:${T.inkMid}; border:none; background:none; cursor:pointer; transition:all 0.15s; }
.nav-btn:hover { background:${T.blueLight}; color:${T.blue}; }
.nav-btn.active { background:${T.blueLight}; color:${T.blue}; }
.avatar { width:36px; height:36px; border-radius:50%; background:${T.blue}; color:white; font-size:13px; font-weight:700; display:flex; align-items:center; justify-content:center; cursor:pointer; font-family:'Sora',sans-serif; }
.topbar-right { display:flex; align-items:center; gap:12px; }
.topbar-name { font-size:13px; color:${T.inkMid}; font-weight:600; }

.flow-header { background:${T.white}; border-bottom:1px solid ${T.border}; padding:0 40px; }
.flow-steps { display:flex; align-items:center; padding:16px 0; gap:0; max-width:1080px; margin:0 auto; }
.fstep { display:flex; align-items:center; gap:8px; font-size:12px; font-weight:700; color:${T.inkLight}; font-family:'Sora',sans-serif; }
.fstep.done { color:${T.blue}; }
.fstep.active { color:${T.blue}; }
.fstep-num { width:26px; height:26px; border-radius:50%; border:2px solid ${T.border}; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; background:white; color:${T.inkLight}; flex-shrink:0; }
.fstep.done .fstep-num, .fstep.active .fstep-num { background:${T.blue}; border-color:${T.blue}; color:white; }
.fstep-line { height:2px; width:56px; background:${T.border}; margin:0 8px; flex-shrink:0; }
.fstep-line.done { background:${T.blue}; }

.slide-wrap { min-height:calc(100vh - 62px); display:flex; flex-direction:column; }
.slide-progress-bar { height:4px; background:${T.border}; }
.slide-progress-fill { height:100%; background:${T.blue}; transition:width 0.4s cubic-bezier(.4,0,.2,1); border-radius:0 2px 2px 0; }
.slide-body { flex:1; display:flex; flex-direction:column; align-items:center; padding:48px 24px 120px; max-width:560px; margin:0 auto; width:100%; }
.slide-step-label { font-size:11px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase; color:${T.blue}; margin-bottom:14px; font-family:'Sora',sans-serif; }
.slide-title { font-family:'Sora',sans-serif; font-size:28px; font-weight:800; color:${T.ink}; text-align:center; line-height:1.25; margin-bottom:8px; }
.slide-subtitle { font-size:15px; color:${T.inkMid}; text-align:center; line-height:1.6; margin-bottom:32px; }

.option-list { display:flex; flex-direction:column; gap:10px; width:100%; }
.option-row { display:flex; align-items:center; gap:14px; padding:16px 18px; border-radius:12px; border:2px solid ${T.border}; background:${T.white}; cursor:pointer; transition:all 0.15s; text-align:left; width:100%; }
.option-row:hover { border-color:${T.blueMid}; background:${T.blueLight}; }
.option-row.selected { border-color:${T.blue}; background:${T.blueLight}; }
.option-icon { width:42px; height:42px; border-radius:10px; background:${T.bg}; border:1.5px solid ${T.border}; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0; }
.option-row.selected .option-icon { background:white; border-color:${T.blueMid}; }
.option-text-main { font-size:15px; font-weight:700; color:${T.ink}; font-family:'Sora',sans-serif; }
.option-text-sub { font-size:12px; color:${T.inkLight}; margin-top:2px; line-height:1.4; }
.option-row.not-sure { background:${T.blueLight}; }
.option-row.not-sure .option-icon { background:${T.blue}; border-color:${T.blue}; color:white; font-size:16px; font-weight:700; }

.option-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; width:100%; }
.option-card { padding:16px; border-radius:12px; border:2px solid ${T.border}; background:${T.white}; cursor:pointer; transition:all 0.15s; display:flex; flex-direction:column; gap:10px; text-align:left; }
.option-card:hover { border-color:${T.blueMid}; background:${T.blueLight}; }
.option-card.selected { border-color:${T.blue}; background:${T.blueLight}; }
.option-card-thumb { width:100%; height:52px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:24px; }
.option-card-name { font-size:13px; font-weight:700; color:${T.ink}; font-family:'Sora',sans-serif; line-height:1.3; }
.option-card-desc { font-size:11px; color:${T.inkLight}; line-height:1.4; margin-top:2px; }

.check-group { width:100%; display:flex; flex-direction:column; gap:14px; }
.check-card { background:${T.white}; border:2px solid ${T.border}; border-radius:12px; padding:16px 18px; }
.check-question { display:flex; align-items:center; gap:10px; font-size:14px; font-weight:700; color:${T.ink}; margin-bottom:12px; font-family:'Sora',sans-serif; }
.check-options { display:flex; gap:8px; flex-wrap:wrap; }
.check-pill { padding:7px 16px; border-radius:8px; border:2px solid ${T.border}; background:${T.bg}; font-size:13px; font-weight:600; color:${T.ink}; cursor:pointer; transition:all 0.15s; font-family:'Lato',sans-serif; }
.check-pill:hover { border-color:${T.blueMid}; background:${T.blueLight}; }
.check-pill.selected { border-color:${T.blue}; background:${T.blue}; color:white; }

.meas-card { width:100%; background:${T.white}; border:2px solid ${T.border}; border-radius:12px; padding:20px; margin-bottom:10px; }
.meas-header { display:flex; align-items:center; gap:10px; font-size:14px; font-weight:700; color:${T.ink}; margin-bottom:14px; font-family:'Sora',sans-serif; }
.meas-inputs { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.meas-field { display:flex; flex-direction:column; gap:5px; }
.meas-label { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; color:${T.inkLight}; }
.meas-input { padding:11px 14px; border-radius:8px; border:2px solid ${T.border}; font-size:15px; font-weight:600; font-family:'Sora',sans-serif; color:${T.ink}; outline:none; transition:border-color 0.15s; }
.meas-input:focus { border-color:${T.blue}; }
.meas-calc { margin-top:12px; padding:10px 14px; background:${T.blueLight}; border-radius:8px; font-size:14px; color:${T.blue}; font-weight:700; font-family:'Sora',sans-serif; }

.upload-option { display:flex; align-items:center; gap:14px; padding:16px 18px; border-radius:12px; border:2px solid ${T.border}; background:${T.white}; cursor:pointer; transition:all 0.15s; width:100%; margin-bottom:10px; }
.upload-option:hover { border-color:${T.blueMid}; }
.upload-icon-box { width:42px; height:42px; border-radius:10px; background:${T.blueLight}; border:1.5px solid ${T.blueMid}; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0; }
.upload-main { font-size:15px; font-weight:700; color:${T.ink}; font-family:'Sora',sans-serif; }
.upload-sub { font-size:12px; color:${T.inkLight}; margin-top:2px; }
.upload-hint { font-size:12px; color:${T.inkMid}; margin-bottom:4px; display:flex; gap:6px; }
.skip-link { font-size:13px; color:${T.inkLight}; text-align:center; cursor:pointer; text-decoration:underline; margin-top:10px; }
.timeline-note { font-size:12px; color:${T.inkMid}; margin-top:16px; line-height:1.6; text-align:center; }

.slide-nav { position:fixed; bottom:0; left:0; right:0; background:${T.white}; border-top:1px solid ${T.border}; padding:14px 24px; display:flex; align-items:center; justify-content:space-between; z-index:100; box-shadow:0 -4px 16px rgba(0,0,0,0.05); }
.slide-nav-left { font-size:12px; color:${T.inkLight}; font-weight:600; }
.slide-nav-right { display:flex; gap:10px; }

.btn { padding:12px 28px; border-radius:10px; font-size:14px; font-weight:700; cursor:pointer; border:none; font-family:'Lato',sans-serif; transition:all 0.15s; display:inline-flex; align-items:center; gap:8px; }
.btn-primary { background:${T.blue}; color:white; }
.btn-primary:hover { background:${T.blueDark}; }
.btn-primary:disabled { background:${T.blueMid}; cursor:not-allowed; opacity:0.7; }
.btn-ghost { background:none; color:${T.inkMid}; border:2px solid ${T.border}; }
.btn-ghost:hover { border-color:${T.blue}; color:${T.blue}; }
.btn-green { background:#2E7D32; color:white; }
.btn-green:hover { background:#1B5E20; }
.btn-purple { background:${T.purple}; color:white; }
.btn-purple:hover { background:#6D28D9; }

.page { max-width:1080px; margin:0 auto; padding:32px 40px 100px; }

.search-hero { text-align:center; padding:64px 0 48px; }
.search-eyebrow { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:${T.blue}; margin-bottom:16px; font-family:'Sora',sans-serif; }
.search-h1 { font-family:'Sora',sans-serif; font-size:46px; font-weight:800; color:${T.ink}; line-height:1.15; margin-bottom:14px; }
.search-h1 em { color:${T.blue}; font-style:normal; }
.search-sub { font-size:17px; color:${T.inkMid}; margin-bottom:40px; }
.search-bar { display:flex; max-width:600px; margin:0 auto 20px; border-radius:14px; overflow:hidden; border:2px solid ${T.border}; box-shadow:0 4px 24px rgba(59,91,219,0.10); transition:border-color 0.2s; }
.search-bar:focus-within { border-color:${T.blue}; }
.search-input { flex:1; padding:18px 22px; font-size:15px; border:none; outline:none; font-family:'Lato',sans-serif; color:${T.ink}; background:white; }
.search-go { padding:18px 28px; background:${T.blue}; color:white; border:none; cursor:pointer; font-size:15px; font-weight:700; font-family:'Sora',sans-serif; transition:background 0.15s; }
.search-go:hover { background:${T.blueDark}; }
.quick-chips { display:flex; gap:8px; justify-content:center; flex-wrap:wrap; }
.chip { padding:7px 16px; border-radius:20px; border:2px solid ${T.border}; background:white; font-size:13px; font-weight:600; color:${T.inkMid}; cursor:pointer; transition:all 0.15s; font-family:'Lato',sans-serif; }
.chip:hover { border-color:${T.blue}; color:${T.blue}; background:${T.blueLight}; }
.feature-row { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:48px; }
.feature-card { background:white; border-radius:14px; border:1.5px solid ${T.border}; padding:24px; }
.feature-icon { font-size:28px; margin-bottom:12px; }
.feature-title { font-family:'Sora',sans-serif; font-size:15px; font-weight:700; color:${T.ink}; margin-bottom:6px; }
.feature-desc { font-size:13px; color:${T.inkMid}; line-height:1.6; }

.review-card { background:white; border-radius:14px; border:1.5px solid ${T.border}; overflow:hidden; margin-bottom:16px; }
.review-card-header { padding:18px 22px; border-bottom:1px solid ${T.border}; display:flex; justify-content:space-between; align-items:center; }
.review-card-title { font-family:'Sora',sans-serif; font-size:16px; font-weight:700; color:${T.ink}; }
.review-card-body { padding:22px; }
.rri { display:flex; justify-content:space-between; align-items:flex-start; padding:12px 0; border-bottom:1px solid ${T.border}; }
.rri:last-child { border-bottom:none; }
.rri-label { font-size:13px; color:${T.inkLight}; font-weight:600; }
.rri-value { font-size:14px; color:${T.ink}; font-weight:700; text-align:right; max-width:60%; }
.broadcast-box { background:${T.greenLight}; border:1.5px solid ${T.greenBorder}; border-radius:14px; padding:20px 24px; display:flex; gap:16px; align-items:flex-start; margin-bottom:16px; }
.broadcast-body h4 { font-family:'Sora',sans-serif; font-size:15px; font-weight:700; color:${T.green}; margin-bottom:4px; }
.broadcast-body p { font-size:13px; color:#388E3C; }
.vendor-tags { display:flex; flex-wrap:wrap; gap:6px; margin-top:10px; }
.vtag { padding:4px 12px; border-radius:20px; background:white; border:1px solid ${T.greenBorder}; font-size:12px; font-weight:600; color:${T.green}; }

.quotes-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
.quote-card { background:white; border-radius:14px; border:2px solid ${T.border}; overflow:hidden; cursor:pointer; transition:all 0.2s; position:relative; }
.quote-card:hover { border-color:${T.blue}; box-shadow:0 8px 32px rgba(59,91,219,0.12); transform:translateY(-2px); }
.quote-card.best { border-color:${T.blue}; }
.best-badge { position:absolute; top:12px; right:12px; background:${T.blue}; color:white; font-size:10px; font-weight:700; padding:4px 10px; border-radius:20px; font-family:'Sora',sans-serif; letter-spacing:0.5px; }
.qv-header { padding:18px; border-bottom:1px solid ${T.border}; display:flex; gap:12px; align-items:center; }
.qv-logo { width:44px; height:44px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:22px; flex-shrink:0; }
.qv-name { font-family:'Sora',sans-serif; font-size:14px; font-weight:700; color:${T.ink}; }
.qv-loc { font-size:12px; color:${T.inkLight}; margin-top:2px; }
.stars { display:flex; gap:1px; align-items:center; margin-top:3px; }
.star { font-size:11px; color:${T.star}; }
.star-count { font-size:11px; color:${T.inkLight}; margin-left:4px; }
.qv-body { padding:18px; }
.price-big { font-family:'Sora',sans-serif; font-size:30px; font-weight:800; color:${T.ink}; }
.price-note { font-size:12px; color:${T.inkLight}; margin-bottom:14px; }
.qv-detail { font-size:12px; color:${T.inkMid}; display:flex; gap:8px; margin-bottom:7px; }
.qv-note { font-size:12px; color:${T.inkMid}; background:${T.bg}; border-radius:8px; padding:10px; margin-top:10px; line-height:1.5; }
.qv-footer { padding:14px 18px; border-top:1px solid ${T.border}; display:flex; gap:8px; }
.btn-sm { padding:9px 16px; border-radius:8px; font-size:12px; font-weight:700; cursor:pointer; border:none; font-family:'Lato',sans-serif; transition:all 0.15s; }
.btn-sm-p { flex:1; background:${T.blue}; color:white; }
.btn-sm-p:hover { background:${T.blueDark}; }
.btn-sm-o { background:none; border:2px solid ${T.border}; color:${T.inkMid}; }
.btn-sm-o:hover { border-color:${T.blue}; color:${T.blue}; }
.compare-bar { background:white; border:1.5px solid ${T.border}; border-radius:10px; padding:14px 20px; display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; }

.profile-hero { background:linear-gradient(135deg,${T.blue} 0%,#1A3AAF 100%); border-radius:16px; padding:28px; color:white; display:flex; gap:22px; align-items:flex-start; margin-bottom:24px; position:relative; overflow:hidden; }
.profile-av { width:70px; height:70px; border-radius:14px; background:rgba(255,255,255,0.15); display:flex; align-items:center; justify-content:center; font-size:32px; flex-shrink:0; }
.profile-name { font-family:'Sora',sans-serif; font-size:22px; font-weight:800; }
.profile-sub { font-size:13px; opacity:0.75; margin-top:4px; }
.profile-stats { display:flex; gap:24px; margin-top:14px; }
.pstat-val { font-family:'Sora',sans-serif; font-size:22px; font-weight:800; }
.pstat-key { font-size:11px; opacity:0.65; text-transform:uppercase; letter-spacing:0.5px; margin-top:1px; }
.verified-pill { margin-left:auto; align-self:flex-start; background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3); color:white; padding:6px 14px; border-radius:20px; font-size:12px; font-weight:700; font-family:'Sora',sans-serif; }
.profile-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
.pcard { background:white; border-radius:14px; border:1.5px solid ${T.border}; overflow:hidden; }
.pcard.full { grid-column:1/-1; }
.pcard-hdr { padding:16px 20px; border-bottom:1px solid ${T.border}; font-family:'Sora',sans-serif; font-size:15px; font-weight:700; color:${T.ink}; display:flex; justify-content:space-between; align-items:center; }
.pcard-body { padding:20px; }
.rev-row { padding:14px 0; border-bottom:1px solid ${T.border}; }
.rev-row:last-child { border-bottom:none; }
.rev-header { display:flex; gap:10px; align-items:center; margin-bottom:8px; }
.rev-av { width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; color:white; flex-shrink:0; }
.rev-name { font-size:13px; font-weight:700; color:${T.ink}; font-family:'Sora',sans-serif; }
.rev-date { font-size:11px; color:${T.inkLight}; margin-left:auto; }
.rev-text { font-size:13px; color:${T.inkMid}; line-height:1.65; }
.job-row { display:flex; gap:12px; align-items:center; padding:12px 0; border-bottom:1px solid ${T.border}; }
.job-row:last-child { border-bottom:none; }
.job-ic { width:36px; height:36px; border-radius:8px; background:${T.blueLight}; display:flex; align-items:center; justify-content:center; font-size:16px; flex-shrink:0; }
.job-nm { font-size:13px; font-weight:700; color:${T.ink}; font-family:'Sora',sans-serif; }
.job-mt { font-size:11px; color:${T.inkLight}; margin-top:2px; }
.job-pr { margin-left:auto; font-family:'Sora',sans-serif; font-size:14px; font-weight:700; color:${T.blue}; white-space:nowrap; }
.cred-row { display:flex; gap:10px; align-items:center; margin-bottom:12px; font-size:13px; color:${T.ink}; }
.skill-tag { padding:5px 12px; border-radius:20px; background:${T.blueLight}; color:${T.blue}; font-size:12px; font-weight:600; display:inline-block; margin:3px; }
.sec-label { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:${T.inkLight}; margin-bottom:10px; }
.divider { height:1px; background:${T.border}; margin:16px 0; }

.action-bar { position:sticky; bottom:0; left:0; right:0; background:white; border-top:1px solid ${T.border}; padding:14px 40px; display:flex; justify-content:space-between; align-items:center; z-index:100; box-shadow:0 -4px 16px rgba(0,0,0,0.05); }
.ab-left { font-size:13px; color:${T.inkLight}; font-weight:600; }
.ab-right { display:flex; gap:10px; }

@keyframes fadeSlide { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
.anim { animation:fadeSlide 0.35s ease both; }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.45} }
.pulse { animation:pulse 1.2s infinite; }
@keyframes fadeIn { from{opacity:0} to{opacity:1} }
@keyframes tickPop { 0%{transform:scale(0) rotate(-20deg);opacity:0} 60%{transform:scale(1.2) rotate(4deg);opacity:1} 100%{transform:scale(1) rotate(0);opacity:1} }
@keyframes ringExpand { 0%{transform:scale(0.5);opacity:1} 100%{transform:scale(2.2);opacity:0} }
@keyframes textFadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
`;

// ─── TRADE DEFINITIONS ────────────────────────────────────────────────────────
const TRADE_DEFS = {
	tiling: {
		id: "tiling",
		icon: "🪵",
		label: "Tiling & Flooring",
		desc: "Floor tiles, wall tiles, outdoor tiling",
		color: TRADE_COLORS.tiling,
		rfqId: "SRZ-TIL",
		summary: [
			["Zone", "Bathroom Floor"],
			["Surface Condition", "Existing tiles cracked/loose"],
			["Area", "80 sq ft"],
			["Tile Style", "Luxury Marble Veins"],
			["Tile Spec", "Porcelain 600×600mm, ≥8mm"],
			["Adhesive", "C2TE waterproof adhesive"],
			["Timeline", "Soon (1–2 months)"],
		],
	},
	plumbing: {
		id: "plumbing",
		icon: "🔧",
		label: "Plumbing",
		desc: "Pipes, fixtures, drainage, water lines",
		color: TRADE_COLORS.plumbing,
		rfqId: "SRZ-PLB",
		summary: [
			["Plumbing Type", "Full bathroom fit-out"],
			["Fixtures", "WC, basin, shower, bathtub"],
			["Pipe Material", "CPVC hot & cold lines"],
			["Hot Water", "New geyser connection required"],
			["Drainage", "New floor trap + wall drain"],
			["Current Condition", "Old GI pipes to be replaced"],
			["Timeline", "Soon (1–2 months)"],
		],
	},
	electrical: {
		id: "electrical",
		icon: "⚡",
		label: "Electrical",
		desc: "Wiring, fixtures, switchboard, exhaust",
		color: TRADE_COLORS.electrical,
		rfqId: "SRZ-ELC",
		summary: [
			["Work Type", "Bathroom electrical fit-out"],
			["Points Required", "6 (2 lights, exhaust, geyser, shaver, ELCB)"],
			["Wiring", "Concealed FR wiring"],
			["DB Box", "Existing DB, 2 new MCBs needed"],
			["Earthing", "Earthing for geyser mandatory"],
			["Fixtures", "LED downlights, exhaust fan supplied by client"],
			["Timeline", "Soon (1–2 months)"],
		],
	},
	painting: {
		id: "painting",
		icon: "🎨",
		label: "Painting",
		desc: "Walls, ceiling, waterproof paint",
		color: TRADE_COLORS.painting,
		rfqId: "SRZ-PNT",
		summary: [
			["Paint Type", "Moisture-resistant / bathroom grade"],
			["Surfaces", "Ceiling + 2 non-tiled walls"],
			["Area", "~120 sq ft (walls + ceiling)"],
			["Finish", "Matte / satin finish"],
			["Colour", "White / off-white (client to confirm)"],
			["Coats", "2 coats primer + 2 finish coats"],
			["Timeline", "Soon (1–2 months)"],
		],
	},
	waterproofing: {
		id: "waterproofing",
		icon: "🛡️",
		label: "Waterproofing",
		desc: "Membrane coating, wet area protection",
		color: TRADE_COLORS.waterproofing,
		rfqId: "SRZ-WPF",
		summary: [
			["Application Area", "Full bathroom — floor + walls to 1.5m height"],
			["Method", "Crystalline waterproofing membrane"],
			["Coat Layers", "2-coat system"],
			["Coverage", "~200 sq ft (floor + walls)"],
			["Curing Time", "48 hrs before tiling"],
			["Guarantee", "5-year waterproofing warranty expected"],
			["Timeline", "Before tiling (critical sequence)"],
		],
	},
};

const BUILDING_TRADE_DEFS = {
	excavation: {
		id: "excavation",
		icon: "🏗️",
		label: "Excavation & Civil",
		desc: "Foundation, structural work, RCC",
		color: { bg: "#FEF3C7", accent: "#D97706", light: "#FDE68A" },
		rfqId: "SRZ-EXC",
		summary: [
			["Work Type", "Foundation excavation + PCC"],
			["Plot Area", "1200 sq ft"],
			["Soil Type", "Black cotton soil — needs treatment"],
			["Foundation", "Strip foundation with RCC columns"],
			["Depth", "6 ft below GL"],
			["Equipment", "JCB + manual labour"],
			["Timeline", "Urgent (within 2 weeks)"],
		],
	},
	structural: {
		id: "structural",
		icon: "🧱",
		label: "Structural / Masonry",
		desc: "Brickwork, columns, slabs, beams",
		color: { bg: "#F0FDF4", accent: "#16A34A", light: "#BBF7D0" },
		rfqId: "SRZ-STR",
		summary: [
			["Work Type", "Load-bearing structure — G+2"],
			["Built-up Area", "3600 sq ft total"],
			["Material", "AAC blocks + M25 grade concrete"],
			["No. of Floors", "Ground + 2 upper floors"],
			["Columns", "24 RCC columns as per drawing"],
			["Slab Thickness", "150mm RCC slab each floor"],
			["Timeline", "Soon (1–2 months)"],
		],
	},
	plumbing: {
		...TRADE_DEFS.plumbing,
		summary: [
			["Scope", "Full building plumbing — all 3 floors"],
			["Bathrooms", "6 bathrooms + 1 kitchen"],
			["Pipe Material", "CPVC for hot, UPVC for cold & drainage"],
			["Overhead Tank", "10,000L capacity + pump"],
			["Drainage", "STP connection + rainwater harvesting"],
			["Fixtures", "Supplied by client"],
			["Timeline", "Soon (1–2 months)"],
		],
	},
	electrical: {
		...TRADE_DEFS.electrical,
		summary: [
			["Scope", "Complete building wiring — G+2"],
			["Total Load", "15kW sanctioned load"],
			["DB Boards", "1 main + 3 floor distribution boards"],
			["Wiring", "Concealed FRLS wiring throughout"],
			["Earthing", "Copper earthing — 2 pits"],
			["Solar Ready", "Provision for 5kW rooftop solar"],
			["Timeline", "Soon (1–2 months)"],
		],
	},
	interior: {
		id: "interior",
		icon: "🪑",
		label: "Interior Finishing",
		desc: "Flooring, painting, false ceiling, carpentry",
		color: { bg: "#F5F3FF", accent: "#7C3AED", light: "#EDE9FE" },
		rfqId: "SRZ-INT",
		summary: [
			["Scope", "Full interior fit-out — all 3 floors"],
			[
				"Flooring",
				"Vitrified tiles — living areas; wooden laminate — bedrooms",
			],
			["Painting", "Asian Paints Royale — interior + exterior"],
			["Carpentry", "Modular kitchen + wardrobes in 3 bedrooms"],
			["False Ceiling", "POP false ceiling in living + master bedroom"],
			["Elevation", "Front elevation cladding + texture paint"],
			["Timeline", "Flexible (2–3 months)"],
		],
	},
};

// ─── SHARED HELPERS ───────────────────────────────────────────────────────────
function Stars({ r }) {
	return (
		<div className="stars">
			{[1, 2, 3, 4, 5].map((s) => (
				<span key={s} className="star">
					{s <= Math.round(r) ? "★" : "☆"}
				</span>
			))}
			<span className="star-count">{r}</span>
		</div>
	);
}

// Generic 9-step trade template — same UX as tiling but parameterised per trade
function TradeTemplate({ trade, onDone, onBack }) {
	const def = trade;
	const [slide, setSlide] = useState(0);
	const [animKey, setAnimKey] = useState(0);
	const [ans, setAns] = useState({
		q1: null,
		q2: null,
		q3: null,
		q4: null,
		q5: null,
		len: "",
		wid: "",
		timeline: null,
	});

	const sel = (f, v) => setAns((a) => ({ ...a, [f]: v }));
	const go = (d) => {
		setSlide((s) => s + d);
		setAnimKey((k) => k + 1);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	const area =
		ans.len && ans.wid ? parseInt(ans.len, 10) * parseInt(ans.wid, 10) : null;

	// Each trade has its own slide content definitions
	const slides = getTradeSlides(def.id);
	const total = slides.length;
	const progress = ((slide + 1) / total) * 100;
	const s = slides[slide];
	const ac = def.color.accent;

	const canNext = () => {
		if (s.required && s.field) return !!ans[s.field];
		if (s.id === "size") return !!(ans.len && ans.wid);
		if (s.id === "checks") return !!ans.q3 && !!ans.q4 && !!ans.q5;
		return true;
	};

	return (
		<div className="slide-wrap">
			{/* Trade color accent bar at top */}
			<div style={{ height: 4, background: def.color.accent }} />
			<div className="slide-progress-bar" style={{ marginTop: 0 }}>
				<div
					className="slide-progress-fill"
					style={{ width: `${progress}%`, background: def.color.accent }}
				/>
			</div>

			<div className="slide-body" key={animKey}>
				{/* Trade badge */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 8,
						marginBottom: 16,
						padding: "6px 16px",
						background: def.color.bg,
						borderRadius: 20,
						border: `1.5px solid ${def.color.accent}30`,
					}}
					className="anim"
				>
					<span style={{ fontSize: 16 }}>{def.icon}</span>
					<span
						style={{
							fontSize: 12,
							fontWeight: 700,
							color: def.color.accent,
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
					{s.id === "options" && (
						<div className="option-list">
							{s.opts.map((o) => (
								<button
									key={o.name}
									className={`option-row${o.notSure ? " not-sure" : ""}${ans[s.field] === o.name ? " selected" : ""}`}
									onClick={() => sel(s.field, o.name)}
								>
									<div className="option-icon">{o.icon}</div>
									<div>
										<div className="option-text-main">{o.name}</div>
										{o.sub && <div className="option-text-sub">{o.sub}</div>}
									</div>
								</button>
							))}
						</div>
					)}

					{s.id === "grid" && (
						<div className="option-grid">
							{s.opts.map((o) => (
								<button
									key={o.name}
									className={`option-card${ans[s.field] === o.name ? " selected" : ""}`}
									onClick={() => sel(s.field, o.name)}
								>
									<div
										className="option-card-thumb"
										style={{ background: o.bg || def.color.bg }}
									>
										{o.icon}
									</div>
									<div>
										<div className="option-card-name">{o.name}</div>
										<div className="option-card-desc">{o.desc}</div>
									</div>
								</button>
							))}
						</div>
					)}

					{s.id === "checks" && (
						<div className="check-group">
							{s.checks.map((c) => (
								<div key={c.f} className="check-card">
									<div className="check-question">
										<span style={{ fontSize: 18 }}>{c.icon}</span>
										{c.q}
									</div>
									<div className="check-options">
										{c.opts.map((o) => (
											<button
												key={o}
												className={`check-pill${ans[c.f] === o ? " selected" : ""}`}
												style={
													ans[c.f] === o
														? { borderColor: ac, background: ac }
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

					{s.id === "size" && (
						<>
							<div className="meas-card">
								<div className="meas-header">📐 Room Dimensions</div>
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

					{s.id === "photos" && (
						<>
							{[
								{
									icon: "📷",
									main: "Upload Photos",
									sub: "Minimum 2 photos required",
								},
								{
									icon: "✏️",
									main: "Upload Sketch / Floor Plan",
									sub: "(optional)",
								},
								{
									icon: "🎬",
									main: "Upload Video Walkthrough",
									sub: "(optional)",
								},
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
							<div style={{ marginTop: 8 }}>
								<div className="upload-hint">
									📍 Capture from each corner of the room.
								</div>
								<div className="upload-hint">
									🔍 Close-ups of problem areas are very helpful.
								</div>
							</div>
							<div className="skip-link">Skip for now</div>
						</>
					)}

					{s.id === "timeline" && (
						<>
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
										key={t.name}
										className={`option-row${ans.timeline === t.name ? " selected" : ""}`}
										onClick={() => sel("timeline", t.name)}
									>
										<div className="option-icon">{t.icon}</div>
										<div>
											<div className="option-text-main">{t.name}</div>
											<div className="option-text-sub">{t.sub}</div>
										</div>
									</button>
								))}
							</div>
							<p className="timeline-note">
								Flexible timelines get better rates from vendors.
							</p>
						</>
					)}

					{s.id === "done" && (
						<div style={{ textAlign: "center" }}>
							<div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
							<div
								style={{
									background: def.color.bg,
									borderRadius: 14,
									padding: "20px 24px",
									textAlign: "left",
									border: `1.5px solid ${ac}30`,
								}}
							>
								{def.summary.map(([k, v]) => (
									<div
										key={k}
										style={{
											display: "flex",
											justifyContent: "space-between",
											padding: "9px 0",
											borderBottom: `1px solid ${ac}20`,
											fontSize: 13,
										}}
									>
										<span style={{ color: T.inkLight, fontWeight: 600 }}>
											{k}
										</span>
										<span
											style={{
												color: T.ink,
												fontWeight: 700,
												textAlign: "right",
												maxWidth: "55%",
											}}
										>
											{v}
										</span>
									</div>
								))}
							</div>
							<p
								style={{
									marginTop: 16,
									fontSize: 13,
									color: T.inkMid,
									lineHeight: 1.6,
								}}
							>
								{def.label} template complete. Return to the project hub to fill
								in the remaining trades.
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
					{slide === 0 ? (
						<button className="btn btn-ghost" onClick={onBack}>
							← Project Hub
						</button>
					) : (
						<button className="btn btn-ghost" onClick={() => go(-1)}>
							← Back
						</button>
					)}
					{slide < total - 1 ? (
						<button
							className="btn btn-primary"
							style={{ background: ac }}
							disabled={!canNext()}
							onClick={() => go(1)}
						>
							Next →
						</button>
					) : (
						<button className="btn btn-green" onClick={onDone}>
							✓ Save & Return to Hub
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

// Per-trade slide content
function getTradeSlides(tradeId) {
	const base = {
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

// ─── SEARCH SCREEN ────────────────────────────────────────────────────────────
function SearchScreen({ onSearch, onStartProject }) {
	const [q, setQ] = useState("");
	const [loading, setLoading] = useState(false);
	const go = (term) => {
		if (!term.trim()) return;
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			onSearch(term);
		}, 1100);
	};
	return (
		<div className="page">
			<div className="search-hero anim">
				<div className="search-eyebrow">
					India's Smartest Procurement Platform
				</div>
				<h1 className="search-h1">
					What job do you
					<br />
					need done <em>today?</em>
				</h1>
				<p className="search-sub">
					Post a single job or manage a full multi-trade project — all in one
					place.
				</p>
				<div className="search-bar">
					<input
						className="search-input"
						placeholder="e.g. Floor Tiling Job, Plumbing Repair…"
						value={q}
						onChange={(e) => setQ(e.target.value)}
						onKeyDown={(e) => e.key === "Enter" && go(q)}
					/>
					<button className="search-go" onClick={() => go(q)}>
						{loading ? <span className="pulse">Finding…</span> : "Search →"}
					</button>
				</div>
				<div className="quick-chips">
					{[
						"Floor Tiling",
						"Electrical Work",
						"Plumbing",
						"Painting",
						"Carpentry",
						"HVAC Service",
					].map((t) => (
						<button key={t} className="chip" onClick={() => go(t)}>
							{t}
						</button>
					))}
				</div>

				{/* NEW: Project Management banner */}
				<div
					onClick={onStartProject}
					style={{
						maxWidth: 600,
						margin: "28px auto 0",
						background: `linear-gradient(135deg, ${T.purple} 0%, #4F46E5 100%)`,
						borderRadius: 16,
						padding: "20px 28px",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						gap: 18,
						boxShadow: "0 8px 32px rgba(124,58,237,0.25)",
						transition: "transform 0.15s",
					}}
					onMouseEnter={(e) =>
						(e.currentTarget.style.transform = "translateY(-2px)")
					}
					onMouseLeave={(e) =>
						(e.currentTarget.style.transform = "translateY(0)")
					}
				>
					<div style={{ fontSize: 40 }}>🏗️</div>
					<div style={{ flex: 1, textAlign: "left" }}>
						<div
							style={{
								fontFamily: "'Sora',sans-serif",
								fontSize: 16,
								fontWeight: 800,
								color: "white",
								marginBottom: 4,
							}}
						>
							New: Project Management
						</div>
						<div
							style={{
								fontSize: 13,
								color: "rgba(255,255,255,0.8)",
								lineHeight: 1.5,
							}}
						>
							Doing a full bathroom renovation or building construction? Fill
							one template per trade and get a{" "}
							<strong style={{ color: "white" }}>single unified RFQ</strong> for
							the entire project.
						</div>
					</div>
					<div style={{ color: "white", fontSize: 20, opacity: 0.7 }}>→</div>
				</div>
			</div>

			<div className="feature-row">
				{[
					{
						icon: "🔒",
						title: "Verified Vendors Only",
						desc: "Every vendor is background-checked, licensed and insured before they can bid.",
					},
					{
						icon: "📋",
						title: "Smart Job Templates",
						desc: "We ask the right questions so vendors give you accurate, comparable quotes.",
					},
					{
						icon: "⚡",
						title: "Fast Quote Matching",
						desc: "Receive multiple competitive quotes from nearby vendors within hours.",
					},
				].map((f, i) => (
					<div
						key={f.title}
						className="feature-card anim"
						style={{ animationDelay: `${i * 0.07}s` }}
					>
						<div className="feature-icon">{f.icon}</div>
						<div className="feature-title">{f.title}</div>
						<div className="feature-desc">{f.desc}</div>
					</div>
				))}
			</div>
		</div>
	);
}

// ─── PROJECT TYPE SELECTION ───────────────────────────────────────────────────
function ProjectTypeScreen({ onSelect, onBack }) {
	const [selected, setSelected] = useState(null);
	const projects = [
		{
			id: "bathroom",
			icon: "🚿",
			title: "Bathroom Renovation",
			desc: "Complete bathroom fit-out — tiling, plumbing, electrical, painting and waterproofing.",
			trades: ["Waterproofing", "Plumbing", "Electrical", "Tiling", "Painting"],
			tradeIds: [
				"waterproofing",
				"plumbing",
				"electrical",
				"tiling",
				"painting",
			],
			color: T.blue,
			rfqId: "SRZ-PRJ-BTH-001",
			estimate: "₹80,000 – ₹2,20,000",
			duration: "3–4 weeks",
		},
		{
			id: "building",
			icon: "🏗️",
			title: "Building Construction",
			desc: "End-to-end building — excavation, structural work, plumbing, electrical and interior finishing.",
			trades: [
				"Excavation",
				"Structural",
				"Plumbing",
				"Electrical",
				"Interior",
			],
			tradeIds: [
				"excavation",
				"structural",
				"plumbing",
				"electrical",
				"interior",
			],
			color: T.purple,
			rfqId: "SRZ-PRJ-BLD-001",
			estimate: "₹18L – ₹45L+",
			duration: "8–18 months",
		},
	];

	return (
		<>
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
					{projects.map((p, i) => (
						<div
							key={p.id}
							className="anim"
							style={{ animationDelay: `${i * 0.08}s` }}
							onClick={() => setSelected(p.id)}
							style={{
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
								<div style={{ display: "flex", gap: 16 }}>
									<div
										style={{
											background: T.bg,
											borderRadius: 8,
											padding: "8px 12px",
											flex: 1,
										}}
									>
										<div
											style={{
												fontSize: 10,
												color: T.inkLight,
												fontWeight: 600,
												textTransform: "uppercase",
												letterSpacing: "0.5px",
											}}
										>
											Est. Cost
										</div>
										<div
											style={{
												fontSize: 13,
												fontWeight: 700,
												color: T.ink,
												marginTop: 2,
											}}
										>
											{p.estimate}
										</div>
									</div>
									<div
										style={{
											background: T.bg,
											borderRadius: 8,
											padding: "8px 12px",
											flex: 1,
										}}
									>
										<div
											style={{
												fontSize: 10,
												color: T.inkLight,
												fontWeight: 600,
												textTransform: "uppercase",
												letterSpacing: "0.5px",
											}}
										>
											Duration
										</div>
										<div
											style={{
												fontSize: 13,
												fontWeight: 700,
												color: T.ink,
												marginTop: 2,
											}}
										>
											{p.duration}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* How it works explainer */}
				<div
					style={{
						marginTop: 32,
						background: T.white,
						borderRadius: 14,
						border: `1.5px solid ${T.border}`,
						padding: "24px",
					}}
					className="anim"
				>
					<div
						style={{
							fontFamily: "'Sora',sans-serif",
							fontSize: 15,
							fontWeight: 700,
							color: T.ink,
							marginBottom: 16,
						}}
					>
						How Project Management Works
					</div>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(4,1fr)",
							gap: 16,
						}}
					>
						{[
							{
								num: "1",
								icon: "🏗️",
								title: "Pick project type",
								desc: "Bathroom or building",
							},
							{
								num: "2",
								icon: "📋",
								title: "Fill trade templates",
								desc: "One per trade, guided slideshow",
							},
							{
								num: "3",
								icon: "📄",
								title: "Get unified RFQ",
								desc: "Single document, all trades",
							},
							{
								num: "4",
								icon: "📡",
								title: "Broadcast & compare",
								desc: "Vendors quote per trade",
							},
						].map((s) => (
							<div key={s.num} style={{ textAlign: "center" }}>
								<div
									style={{
										width: 36,
										height: 36,
										borderRadius: "50%",
										background: T.blueLight,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										margin: "0 auto 10px",
										fontFamily: "'Sora',sans-serif",
										fontSize: 14,
										fontWeight: 800,
										color: T.blue,
									}}
								>
									{s.num}
								</div>
								<div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
								<div
									style={{
										fontSize: 12,
										fontWeight: 700,
										color: T.ink,
										fontFamily: "'Sora',sans-serif",
										marginBottom: 4,
									}}
								>
									{s.title}
								</div>
								<div style={{ fontSize: 11, color: T.inkMid }}>{s.desc}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="action-bar">
				<span className="ab-left">
					Project Management · Select Project Type
				</span>
				<div className="ab-right">
					<button className="btn btn-ghost" onClick={onBack}>
						← Back
					</button>
					<button
						className="btn btn-purple"
						disabled={!selected}
						onClick={() => onSelect(projects.find((p) => p.id === selected))}
					>
						Start Project →
					</button>
				</div>
			</div>
		</>
	);
}

// ─── TRADE HUB ────────────────────────────────────────────────────────────────
function TradeHubScreen({
	project,
	completedTrades,
	onFillTrade,
	onReviewProject,
	onBack,
}) {
	const allDone = project.tradeIds.every((id) => completedTrades.includes(id));
	const doneCount = project.tradeIds.filter((id) =>
		completedTrades.includes(id),
	).length;
	const pct = Math.round((doneCount / project.tradeIds.length) * 100);

	const tradeDefs =
		project.id === "building" ? BUILDING_TRADE_DEFS : TRADE_DEFS;

	// Waterproofing must come before tiling (sequence hint)
	const getSequenceHint = (id) => {
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
			<div className="page">
				{/* Project header */}
				<div
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
					className="anim"
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
						<div style={{ fontSize: 13, opacity: 0.75 }}>
							{project.trades.length} trades · Est. {project.estimate} ·{" "}
							{project.duration}
						</div>
						{/* Progress bar */}
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
					{allDone && (
						<div
							style={{
								background: "rgba(255,255,255,0.15)",
								border: "1px solid rgba(255,255,255,0.3)",
								borderRadius: 12,
								padding: "10px 18px",
								textAlign: "center",
								flexShrink: 0,
							}}
						>
							<div style={{ fontSize: 24, marginBottom: 4 }}>✅</div>
							<div style={{ fontSize: 12, fontWeight: 700 }}>
								All templates
								<br />
								complete!
							</div>
						</div>
					)}
				</div>

				{/* Trade cards grid */}
				<div
					style={{
						marginBottom: 8,
						fontFamily: "'Sora',sans-serif",
						fontSize: 15,
						fontWeight: 700,
						color: T.ink,
					}}
					className="anim"
				>
					Fill templates in the recommended order
				</div>
				<div
					style={{ fontSize: 13, color: T.inkMid, marginBottom: 20 }}
					className="anim"
				>
					Each template takes ~5 minutes. Complete all trades to generate your
					unified project RFQ.
				</div>

				<div
					style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
				>
					{project.tradeIds.map((id, i) => {
						const def = tradeDefs[id];
						const done = completedTrades.includes(id);
						const hint = getSequenceHint(id);
						const col = def.color;
						return (
							<div
								key={id}
								className="anim"
								style={{
									animationDelay: `${i * 0.06}s`,
									background: T.white,
									borderRadius: 14,
									border: `2px solid ${done ? col.accent : hint ? T.border : T.border}`,
									overflow: "hidden",
									opacity: hint && !done ? 0.7 : 1,
									transition: "all 0.2s",
								}}
							>
								{/* Top accent stripe */}
								<div
									style={{
										height: 5,
										background: done
											? col.accent
											: hint
												? "#E2E8F0"
												: col.accent,
										opacity: done ? 1 : 0.3,
									}}
								/>
								<div style={{ padding: "18px 20px" }}>
									<div
										style={{
											display: "flex",
											alignItems: "flex-start",
											gap: 14,
											marginBottom: 14,
										}}
									>
										<div
											style={{
												width: 50,
												height: 50,
												borderRadius: 12,
												background: done ? col.accent : col.bg,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												fontSize: 24,
												flexShrink: 0,
											}}
										>
											{done ? "✓" : def.icon}
										</div>
										<div style={{ flex: 1 }}>
											<div
												style={{
													fontFamily: "'Sora',sans-serif",
													fontSize: 15,
													fontWeight: 700,
													color: done ? col.accent : T.ink,
													marginBottom: 3,
												}}
											>
												{def.label}
											</div>
											<div
												style={{
													fontSize: 12,
													color: T.inkMid,
													lineHeight: 1.4,
												}}
											>
												{def.desc}
											</div>
										</div>
										{done && (
											<div
												style={{
													padding: "3px 10px",
													background: T.greenLight,
													border: `1px solid ${T.greenBorder}`,
													borderRadius: 20,
													fontSize: 11,
													fontWeight: 700,
													color: T.green,
													flexShrink: 0,
												}}
											>
												Done ✓
											</div>
										)}
									</div>

									{/* RFQ ID */}
									<div
										style={{
											fontSize: 11,
											color: T.inkLight,
											marginBottom: 12,
										}}
									>
										RFQ: {def.rfqId}
									</div>

									{/* Sequence hint */}
									{hint && !done && (
										<div
											style={{
												background: T.amberLight,
												borderRadius: 8,
												padding: "8px 12px",
												fontSize: 12,
												color: T.amber,
												fontWeight: 600,
												marginBottom: 12,
												display: "flex",
												gap: 6,
												alignItems: "center",
											}}
										>
											<span>⚠️</span>
											<span>{hint}</span>
										</div>
									)}

									{done ? (
										<div style={{ display: "flex", gap: 8 }}>
											<button
												className="btn-sm btn-sm-o"
												style={{ flex: 1, fontSize: 11 }}
												onClick={() => onFillTrade(id)}
											>
												✏️ Edit
											</button>
											<div
												style={{
													flex: 2,
													padding: "9px",
													background: T.greenLight,
													borderRadius: 8,
													fontSize: 12,
													fontWeight: 700,
													color: T.green,
													textAlign: "center",
												}}
											>
												Template saved ✓
											</div>
										</div>
									) : (
										<button
											className="btn-sm btn-sm-p"
											style={{
												width: "100%",
												fontSize: 13,
												background: hint ? T.inkLight : col.accent,
											}}
											onClick={() => !hint && onFillTrade(id)}
											disabled={!!hint}
										>
											{hint ? "Locked 🔒" : `Fill ${def.label} Template →`}
										</button>
									)}
								</div>
							</div>
						);
					})}
				</div>

				{/* CTA when all done */}
				{allDone && (
					<div
						style={{
							marginTop: 24,
							background: T.greenLight,
							border: `1.5px solid ${T.greenBorder}`,
							borderRadius: 14,
							padding: "20px 24px",
							display: "flex",
							gap: 16,
							alignItems: "center",
						}}
						className="anim"
					>
						<div style={{ fontSize: 32 }}>🎉</div>
						<div style={{ flex: 1 }}>
							<div
								style={{
									fontFamily: "'Sora',sans-serif",
									fontSize: 16,
									fontWeight: 700,
									color: T.green,
									marginBottom: 4,
								}}
							>
								All {project.tradeIds.length} trade templates complete!
							</div>
							<div style={{ fontSize: 13, color: "#388E3C" }}>
								Your unified project RFQ is ready to be generated and broadcast
								to verified vendors.
							</div>
						</div>
						<button className="btn btn-green" onClick={onReviewProject}>
							Generate Project RFQ →
						</button>
					</div>
				)}
			</div>

			<div className="action-bar">
				<span className="ab-left">
					{project.rfqId} · {doneCount}/{project.tradeIds.length} templates ·{" "}
					{pct}% complete
				</span>
				<div className="ab-right">
					<button className="btn btn-ghost" onClick={onBack}>
						← Change Project
					</button>
					{allDone && (
						<button className="btn btn-green" onClick={onReviewProject}>
							Generate RFQ →
						</button>
					)}
				</div>
			</div>
		</>
	);
}

// ─── UNIFIED PROJECT RFQ REVIEW ───────────────────────────────────────────────
function ProjectReviewScreen({ project, onNext, onBack }) {
	const [activeTab, setActiveTab] = useState(0);
	const tradeDefs =
		project.id === "building" ? BUILDING_TRADE_DEFS : TRADE_DEFS;
	const trades = project.tradeIds.map((id) => tradeDefs[id]);

	const totalEstimate =
		project.id === "bathroom" ? "₹1,18,000 – ₹2,40,000" : "₹24L – ₹48L+";

	return (
		<>
			<div className="page">
				<div style={{ marginBottom: 20 }} className="anim">
					{/* Header */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 12,
							marginBottom: 8,
						}}
					>
						<div
							style={{
								width: 40,
								height: 40,
								borderRadius: 10,
								background: T.purpleLight,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: 20,
							}}
						>
							📄
						</div>
						<div>
							<h2
								style={{
									fontFamily: "'Sora',sans-serif",
									fontSize: 22,
									fontWeight: 800,
									color: T.ink,
								}}
							>
								Unified Project RFQ
							</h2>
							<div style={{ fontSize: 13, color: T.inkMid, marginTop: 2 }}>
								Review before broadcasting to all verified vendors
							</div>
						</div>
					</div>

					{/* RFQ ID badge */}
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 12,
							flexWrap: "wrap",
							marginTop: 12,
						}}
					>
						<div
							style={{
								padding: "8px 16px",
								background: T.blueLight,
								borderRadius: 10,
								display: "flex",
								gap: 8,
								alignItems: "center",
							}}
						>
							<span
								style={{
									fontSize: 12,
									fontWeight: 700,
									color: T.blue,
									fontFamily: "'Sora',sans-serif",
								}}
							>
								Project RFQ:
							</span>
							<span style={{ fontSize: 13, fontWeight: 700, color: T.ink }}>
								{project.rfqId}
							</span>
						</div>
						<div
							style={{
								padding: "8px 16px",
								background: T.purpleLight,
								borderRadius: 10,
								fontSize: 12,
								fontWeight: 600,
								color: T.purple,
							}}
						>
							{project.tradeIds.length} trades · {project.title}
						</div>
						<div
							style={{
								padding: "8px 16px",
								background: T.greenLight,
								borderRadius: 10,
								fontSize: 12,
								fontWeight: 600,
								color: T.green,
							}}
						>
							Est. {totalEstimate}
						</div>
					</div>
				</div>

				{/* Trade tab selector */}
				<div
					style={{
						display: "flex",
						gap: 4,
						marginBottom: 20,
						overflowX: "auto",
						paddingBottom: 4,
					}}
					className="anim"
				>
					<button
						onClick={() => setActiveTab(-1)}
						style={{
							padding: "8px 16px",
							borderRadius: 8,
							border: `2px solid ${activeTab === -1 ? T.ink : T.border}`,
							background: activeTab === -1 ? T.ink : "white",
							fontSize: 12,
							fontWeight: 700,
							color: activeTab === -1 ? "white" : T.inkMid,
							cursor: "pointer",
							fontFamily: "'Sora',sans-serif",
							flexShrink: 0,
						}}
					>
						All Trades
					</button>
					{trades.map((t, i) => (
						<button
							key={t.id}
							onClick={() => setActiveTab(i)}
							style={{
								padding: "8px 16px",
								borderRadius: 8,
								border: `2px solid ${activeTab === i ? t.color.accent : T.border}`,
								background: activeTab === i ? t.color.bg : "white",
								fontSize: 12,
								fontWeight: 700,
								color: activeTab === i ? t.color.accent : T.inkMid,
								cursor: "pointer",
								fontFamily: "'Sora',sans-serif",
								flexShrink: 0,
								display: "flex",
								alignItems: "center",
								gap: 6,
							}}
						>
							<span>{t.icon}</span>
							<span>{t.label}</span>
						</button>
					))}
				</div>

				{/* Trade RFQ tables */}
				{(activeTab === -1 ? trades : [trades[activeTab]]).map((trade, _ti) => (
					<div
						key={trade.id}
						className="review-card anim"
						style={{ border: `1.5px solid ${trade.color.accent}40` }}
					>
						<div
							className="review-card-header"
							style={{ background: trade.color.bg }}
						>
							<div>
								<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
									<span style={{ fontSize: 20 }}>{trade.icon}</span>
									<div
										className="review-card-title"
										style={{ color: trade.color.accent }}
									>
										{trade.label}
									</div>
									<span
										style={{
											fontSize: 11,
											padding: "2px 8px",
											background: "white",
											borderRadius: 10,
											color: trade.color.accent,
											fontWeight: 700,
											border: `1px solid ${trade.color.accent}40`,
										}}
									>
										{trade.rfqId}
									</span>
								</div>
								<div style={{ fontSize: 12, color: T.inkMid, marginTop: 4 }}>
									Auto-generated from your template answers
								</div>
							</div>
							<button className="btn-sm btn-sm-o" style={{ fontSize: 11 }}>
								✏️ Edit
							</button>
						</div>

						{/* Part A — Job Request */}
						<div
							style={{
								padding: "14px 22px 0",
								fontSize: 11,
								fontWeight: 700,
								textTransform: "uppercase",
								letterSpacing: "0.8px",
								color: T.inkLight,
							}}
						>
							Part A — Job Specifications
						</div>
						<table style={{ width: "100%", borderCollapse: "collapse" }}>
							<tbody>
								{trade.summary.map(([label, value], ri) => (
									<tr
										key={label}
										style={{
											borderBottom: `1px solid ${T.border}`,
											background: ri % 2 === 0 ? T.white : T.bg,
										}}
									>
										<td
											style={{
												padding: "11px 22px",
												fontSize: 12,
												fontWeight: 600,
												color: T.inkLight,
												width: "38%",
											}}
										>
											{label}
										</td>
										<td
											style={{
												padding: "11px 22px",
												fontSize: 13,
												fontWeight: 600,
												color: T.ink,
											}}
										>
											{value}
										</td>
									</tr>
								))}
							</tbody>
						</table>

						{/* Part B placeholder */}
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
								filled by each vendor
							</span>
							<span style={{ fontSize: 11, color: T.inkLight }}>
								Price/sqft, materials, duration, warranty…
							</span>
						</div>
					</div>
				))}

				{/* Broadcast box */}
				<div className="broadcast-box anim">
					<div style={{ fontSize: 28 }}>📡</div>
					<div className="broadcast-body">
						<h4>Ready to Broadcast Project RFQ to Vendors</h4>
						<p>
							Your unified project RFQ will be sent to all verified vendors
							covering each trade in {project.title}.
						</p>
						<div className="vendor-tags">
							{project.id === "bathroom"
								? [
										"AquaFit Plumbers",
										"TileKing Pro",
										"SparkElectrical",
										"ColourMaster Painters",
										"ShieldWaterproof",
										"+ 12 more",
									].map((v) => (
										<span key={v} className="vtag">
											{v}
										</span>
									))
								: [
										"BuildRight Civil",
										"SteelForm Structural",
										"MegaPlumb",
										"PowerGrid Electrical",
										"DesignNest Interiors",
										"+ 18 more",
									].map((v) => (
										<span key={v} className="vtag">
											{v}
										</span>
									))}
						</div>
					</div>
				</div>

				{/* Confirmation */}
				<div className="review-card anim">
					<div
						className="review-card-body"
						style={{ display: "flex", gap: 12, alignItems: "center" }}
					>
						<input
							type="checkbox"
							defaultChecked
							style={{
								width: 16,
								height: 16,
								accentColor: T.blue,
								flexShrink: 0,
							}}
						/>
						<span style={{ fontSize: 13, color: T.inkMid, lineHeight: 1.6 }}>
							I confirm all {project.tradeIds.length} trade templates are
							accurate and agree to Servzo's{" "}
							<span
								style={{
									color: T.blue,
									cursor: "pointer",
									textDecoration: "underline",
								}}
							>
								Terms of Service
							</span>
							. Vendors will quote per trade based on this unified RFQ.
						</span>
					</div>
				</div>
			</div>

			<div className="action-bar">
				<span className="ab-left">
					{project.rfqId} · Unified Project RFQ · {project.tradeIds.length}{" "}
					trades
				</span>
				<div className="ab-right">
					<button className="btn btn-ghost" onClick={onBack}>
						← Edit Templates
					</button>
					<button className="btn btn-green" onClick={onNext}>
						📡 Broadcast Project RFQ →
					</button>
				</div>
			</div>
		</>
	);
}

// ─── PROJECT QUOTES SCREEN ────────────────────────────────────────────────────
function ProjectQuotesScreen({ project, onBack }) {
	const [activeTab, setActiveTab] = useState("summary");
	const tradeDefs =
		project.id === "building" ? BUILDING_TRADE_DEFS : TRADE_DEFS;

	const vendors =
		project.id === "bathroom"
			? [
					{
						name: "BuildComplete Pro",
						emoji: "🏆",
						loc: "Kothrud, Pune",
						rating: 4.9,
						reviews: 204,
						verified: true,
						best: true,
						trades: {
							tiling: "₹18,500",
							plumbing: "₹22,000",
							electrical: "₹9,500",
							painting: "₹8,200",
							waterproofing: "₹11,500",
						},
						total: "₹69,700",
						eta: "18 days",
					},
					{
						name: "HomeFit Contractors",
						emoji: "🏠",
						loc: "Baner, Pune",
						rating: 4.6,
						reviews: 138,
						verified: true,
						best: false,
						trades: {
							tiling: "₹16,800",
							plumbing: "₹20,500",
							electrical: "₹8,800",
							painting: "₹7,500",
							waterproofing: "₹10,200",
						},
						total: "₹63,800",
						eta: "22 days",
					},
					{
						name: "Urban Works",
						emoji: "🔨",
						loc: "Hadapsar, Pune",
						rating: 4.3,
						reviews: 87,
						verified: false,
						best: false,
						trades: {
							tiling: "₹14,200",
							plumbing: "₹18,000",
							electrical: "₹7,600",
							painting: "₹6,800",
							waterproofing: "₹8,900",
						},
						total: "₹55,500",
						eta: "28 days",
					},
				]
			: [
					{
						name: "PrimeBuild Group",
						emoji: "🏗️",
						loc: "Pune (Pan-City)",
						rating: 4.8,
						reviews: 312,
						verified: true,
						best: true,
						trades: {
							excavation: "₹2,80,000",
							structural: "₹12,50,000",
							plumbing: "₹3,20,000",
							electrical: "₹2,80,000",
							interior: "₹8,50,000",
						},
						total: "₹29,80,000",
						eta: "14 months",
					},
					{
						name: "Skyline Constructions",
						emoji: "🏢",
						loc: "Kothrud & Baner",
						rating: 4.5,
						reviews: 189,
						verified: true,
						best: false,
						trades: {
							excavation: "₹2,50,000",
							structural: "₹11,80,000",
							plumbing: "₹2,90,000",
							electrical: "₹2,60,000",
							interior: "₹7,80,000",
						},
						total: "₹27,60,000",
						eta: "16 months",
					},
					{
						name: "Foundation Works",
						emoji: "🧱",
						loc: "Hadapsar, Pune",
						rating: 4.2,
						reviews: 92,
						verified: false,
						best: false,
						trades: {
							excavation: "₹2,20,000",
							structural: "₹10,50,000",
							plumbing: "₹2,60,000",
							electrical: "₹2,30,000",
							interior: "₹6,90,000",
						},
						total: "₹24,50,000",
						eta: "18 months",
					},
				];

	const _tabs = ["summary", "breakdown"];

	return (
		<>
			<div className="page">
				<div style={{ marginBottom: 16 }} className="anim">
					<h2
						style={{
							fontFamily: "'Sora',sans-serif",
							fontSize: 22,
							fontWeight: 800,
							color: T.ink,
							marginBottom: 6,
						}}
					>
						Project Quotes Received
					</h2>
					<p style={{ fontSize: 14, color: T.inkMid }}>
						{vendors.length} contractors submitted complete project quotes for{" "}
						{project.title}.
					</p>
				</div>

				{/* Tab switch */}
				<div
					style={{
						display: "flex",
						gap: 4,
						marginBottom: 20,
						background: T.bg,
						borderRadius: 10,
						padding: 4,
						width: "fit-content",
					}}
					className="anim"
				>
					{[
						["summary", "📊 Summary View"],
						["breakdown", "📋 Trade Breakdown"],
					].map(([id, label]) => (
						<button
							key={id}
							onClick={() => setActiveTab(id)}
							style={{
								padding: "8px 18px",
								borderRadius: 8,
								border: "none",
								cursor: "pointer",
								fontSize: 13,
								fontWeight: 700,
								fontFamily: "'Lato',sans-serif",
								background: activeTab === id ? T.white : "transparent",
								color: activeTab === id ? T.blue : T.inkMid,
								boxShadow:
									activeTab === id ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
							}}
						>
							{label}
						</button>
					))}
				</div>

				{activeTab === "summary" && (
					<div className="quotes-grid">
						{vendors.map((v, i) => (
							<div
								key={v.name}
								className={`quote-card anim${v.best ? " best" : ""}`}
								style={{ animationDelay: `${i * 0.07}s` }}
							>
								{v.best && <div className="best-badge">✦ Best Value</div>}
								<div className="qv-header">
									<div
										className="qv-logo"
										style={{ background: T.blueLight, fontSize: 22 }}
									>
										{v.emoji}
									</div>
									<div>
										<div className="qv-name">{v.name}</div>
										<div className="qv-loc">{v.loc}</div>
										<Stars r={v.rating} />
									</div>
								</div>
								<div className="qv-body">
									<div className="price-big">{v.total}</div>
									<div className="price-note">complete project estimate</div>
									{[
										["⏱", `Project duration: ${v.eta}`],
										["🛡", "End-to-end warranty included"],
										[
											v.verified ? "✅" : "⚠️",
											v.verified
												? "All trades verified"
												: "Some trades unverified",
										],
										["💼", `${v.reviews} completed projects`],
									].map(([ic, tx], j) => (
										<div key={j} className="qv-detail">
											<span>{ic}</span>
											<span>{tx}</span>
										</div>
									))}
								</div>
								<div className="qv-footer">
									<button className="btn-sm btn-sm-p">Accept Project</button>
									<button
										className="btn-sm btn-sm-o"
										onClick={() => setActiveTab("breakdown")}
									>
										Breakdown
									</button>
								</div>
							</div>
						))}
					</div>
				)}

				{activeTab === "breakdown" && (
					<div className="review-card anim">
						<div className="review-card-header">
							<div className="review-card-title">
								📋 Trade-by-Trade Cost Breakdown
							</div>
							<span style={{ fontSize: 12, color: T.inkMid }}>
								All vendors · All trades
							</span>
						</div>
						<div style={{ overflowX: "auto" }}>
							<table style={{ width: "100%", borderCollapse: "collapse" }}>
								<thead>
									<tr style={{ background: T.blueLight }}>
										<th
											style={{
												padding: "12px 18px",
												fontSize: 12,
												fontWeight: 700,
												color: T.blue,
												textAlign: "left",
												fontFamily: "'Sora',sans-serif",
											}}
										>
											Trade
										</th>
										{vendors.map((v) => (
											<th
												key={v.name}
												style={{
													padding: "12px 18px",
													fontSize: 12,
													fontWeight: 700,
													color: T.blue,
													textAlign: "center",
													fontFamily: "'Sora',sans-serif",
													minWidth: 130,
												}}
											>
												<div>
													{v.emoji} {v.name.split(" ")[0]}
												</div>
												{v.best && (
													<div
														style={{
															fontSize: 10,
															color: T.green,
															fontWeight: 600,
														}}
													>
														★ Best Value
													</div>
												)}
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{project.tradeIds.map((id, ri) => {
										const def = tradeDefs[id];
										return (
											<tr
												key={id}
												style={{
													borderBottom: `1px solid ${T.border}`,
													background: ri % 2 === 0 ? T.white : T.bg,
												}}
											>
												<td style={{ padding: "13px 18px" }}>
													<div
														style={{
															display: "flex",
															alignItems: "center",
															gap: 8,
														}}
													>
														<span style={{ fontSize: 18 }}>{def.icon}</span>
														<div>
															<div
																style={{
																	fontSize: 13,
																	fontWeight: 700,
																	color: T.ink,
																	fontFamily: "'Sora',sans-serif",
																}}
															>
																{def.label}
															</div>
															<div style={{ fontSize: 11, color: T.inkLight }}>
																{def.rfqId}
															</div>
														</div>
													</div>
												</td>
												{vendors.map((v, _vi) => {
													const amt = v.trades[id];
													const isLowest = vendors.every(
														(ov) =>
															!ov.trades[id] ||
															parseInt(
																ov.trades[id].replace(/[^0-9]/g, ""),
																10,
															) >= parseInt(amt.replace(/[^0-9]/g, ""), 10),
													);
													return (
														<td
															key={v.name}
															style={{
																padding: "13px 18px",
																textAlign: "center",
															}}
														>
															<span
																style={{
																	fontSize: 14,
																	fontWeight: 700,
																	color: isLowest ? T.green : T.ink,
																	fontFamily: "'Sora',sans-serif",
																}}
															>
																{amt}
															</span>
															{isLowest && (
																<div
																	style={{
																		fontSize: 10,
																		color: T.green,
																		fontWeight: 600,
																	}}
																>
																	Lowest
																</div>
															)}
														</td>
													);
												})}
											</tr>
										);
									})}
									{/* Total row */}
									<tr
										style={{
											background: T.navy || T.ink,
											borderTop: `2px solid ${T.border}`,
										}}
									>
										<td
											style={{
												padding: "14px 18px",
												fontFamily: "'Sora',sans-serif",
												fontSize: 13,
												fontWeight: 800,
												color: T.white,
												background: T.ink,
											}}
										>
											🏆 TOTAL
										</td>
										{vendors.map((v) => (
											<td
												key={v.name}
												style={{
													padding: "14px 18px",
													textAlign: "center",
													background: T.ink,
												}}
											>
												<span
													style={{
														fontFamily: "'Sora',sans-serif",
														fontSize: 16,
														fontWeight: 800,
														color: v.best ? "#86EFAC" : "white",
													}}
												>
													{v.total}
												</span>
												{v.best && (
													<div
														style={{
															fontSize: 10,
															color: "#86EFAC",
															fontWeight: 600,
														}}
													>
														Best Value
													</div>
												)}
											</td>
										))}
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				)}
			</div>

			<div className="action-bar">
				<span className="ab-left">
					{project.rfqId} · {vendors.length} Project Quotes ·{" "}
					{project.tradeIds.length} Trades
				</span>
				<div className="ab-right">
					<button className="btn btn-ghost" onClick={onBack}>
						← Back to RFQ
					</button>
					<button className="btn btn-green">✅ Accept Best Quote</button>
				</div>
			</div>
		</>
	);
}

// ─── ORIGINAL SINGLE-JOB SCREENS (unchanged) ─────────────────────────────────
const SLIDES = [
	{
		id: "zone",
		label: "Step 1 of 9",
		title: "Where do you need flooring work?",
		sub: "Choose the area you're planning to tile.",
	},
	{
		id: "subzone",
		label: "Step 2 of 9",
		title: "What best describes this balcony/verandah?",
		sub: "Pick the closest match. This sets the right prep and safety checks.",
	},
	{
		id: "condition",
		label: "Step 3 of 9",
		title: "What's the current flooring like?",
		sub: "Pick the option that matches your floor right now.",
	},
	{
		id: "checks",
		label: "Step 4 of 9",
		title: "A few quick details to get this right",
		sub: "These checks help vendors plan the right prep.",
	},
	{
		id: "size",
		label: "Step 5 of 9",
		title: "What's the size of the area?",
		sub: "Just a rough idea is fine. Vendors will confirm exact measurements.",
	},
	{
		id: "style",
		label: "Step 6 of 9",
		title: "What style do you prefer for this apartment balcony?",
		sub: "Pick the look you like. Vendors will suggest tiles.",
	},
	{
		id: "photos",
		label: "Step 7 of 9",
		title: "Add photos of your space",
		sub: "Vendors need to see the current floor. Add at least 2 angles.",
	},
	{
		id: "timeline",
		label: "Step 8 of 9",
		title: "When do you need this job done?",
		sub: "This helps vendors schedule the work.",
	},
	{
		id: "done",
		label: "Step 9 of 9",
		title: "You're all set!",
		sub: "Your job template is ready to review and broadcast.",
	},
];

function JobTemplateScreen({ onNext, onBack }) {
	const [slide, setSlide] = useState(0);
	const [animKey, setAnimKey] = useState(0);
	const [ans, setAns] = useState({
		zone: null,
		subzone: null,
		condition: null,
		covered: null,
		drain: null,
		furniture: null,
		len: "12",
		wid: "10",
		style: null,
		timeline: null,
	});
	const sel = (f, v) => setAns((a) => ({ ...a, [f]: v }));
	const go = (d) => {
		setSlide((s) => s + d);
		setAnimKey((k) => k + 1);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	const canNext = () => {
		if (slide === 0) return !!ans.zone;
		if (slide === 1) return !!ans.subzone;
		if (slide === 2) return !!ans.condition;
		if (slide === 3) return !!ans.covered && !!ans.drain && !!ans.furniture;
		if (slide === 4) return !!(ans.len && ans.wid);
		if (slide === 5) return !!ans.style;
		if (slide === 6) return true;
		if (slide === 7) return !!ans.timeline;
		return true;
	};
	const progress = ((slide + 1) / SLIDES.length) * 100;
	const s = SLIDES[slide];
	const area =
		ans.len && ans.wid ? parseInt(ans.len, 10) * parseInt(ans.wid, 10) : null;
	const zones = [
		{
			icon: "🛋️",
			name: "Living / Dining / Bedroom",
			sub: "Main interior spaces",
		},
		{ icon: "🍳", name: "Kitchen", sub: "Including wet/dry areas" },
		{ icon: "🚿", name: "Bathroom / WC", sub: "Full bath or toilet-only" },
		{
			icon: "🌿",
			name: "Balcony / Verandah / Sit-Out",
			sub: "Outdoor or semi-outdoor",
		},
		{ icon: "🧺", name: "Utility / Laundry", sub: "Service areas" },
		{ icon: "🅿️", name: "Parking / Driveway", sub: "Vehicle or heavy use" },
		{ icon: "❓", name: "Not sure (we'll help you decide)", notSure: true },
	];
	const subzones = [
		{
			icon: "🏠",
			name: "Apartment Balcony (semi-covered)",
			sub: "Semi-covered space with light rain exposure",
		},
		{
			icon: "🧺",
			name: "Utility Balcony (washer/mop area)",
			sub: "Daily water use, needs slope + drain check",
		},
		{
			icon: "☀️",
			name: "Courtyard Verandah (full sun/rain)",
			sub: "Completely exposed to weather, needs thermal joints",
		},
		{
			icon: "🔄",
			name: "Retrofit Balcony Overlay",
			sub: "Existing tiles to be overlaid or repaired",
		},
		{ icon: "❓", name: "Not sure (we'll help you decide)", notSure: true },
	];
	const conditions = [
		{ icon: "🪨", name: "Bare concrete slab" },
		{ icon: "🟦", name: "Existing tiles (good)" },
		{ icon: "⚠️", name: "Existing tiles cracked/loose" },
		{ icon: "🗿", name: "Old stone/kota/marble" },
		{ icon: "💧", name: "Damp patches/seepage" },
		{ icon: "❓", name: "Not sure", notSure: true },
	];
	const styles = [
		{
			icon: "🤍",
			bg: "#F0EFED",
			name: "Luxury Marble Veins",
			sub: "Carrara, Travertine — premium extended living room feel",
		},
		{
			icon: "✨",
			bg: "#E0E0E0",
			name: "High Gloss / Nano Polish",
			sub: "Porcelain Super-Gloss — polished look, slippery if wet",
		},
		{
			icon: "🟫",
			bg: "#D4A574",
			name: "Wood Plank Mimics",
			sub: "Warm, cozy deck vibe without real timber",
		},
		{
			icon: "🔲",
			bg: "#B0B8C1",
			name: "Concrete / Industrial Greys",
			sub: "Minimalist, modern, low-maintenance",
		},
		{
			icon: "🟤",
			bg: "#E8C99A",
			name: "Rustic Earth / Mediterranean Clay",
			sub: "Bright, timeless look for small balconies",
		},
		{
			icon: "🌿",
			bg: "#C8A880",
			name: "Rustic Earth (darker tone)",
			sub: "Natural outdoor vibe for planters & sit-outs",
		},
	];
	const timelines = [
		{
			icon: "⚡",
			name: "Urgent (within 2 weeks)",
			sub: "Priority job, may cost more due to labour availability",
		},
		{
			icon: "📋",
			name: "Soon (1–2 months)",
			sub: "Standard scheduling, flexible vendor options",
		},
		{
			icon: "✅",
			name: "Flexible (2–3 months)",
			sub: "Best rates possible, vendors can plan in advance",
		},
	];
	return (
		<div className="slide-wrap">
			<div className="slide-progress-bar">
				<div
					className="slide-progress-fill"
					style={{ width: `${progress}%` }}
				/>
			</div>
			<div className="slide-body" key={animKey}>
				<div className="slide-step-label anim">{s.label}</div>
				<h2 className="slide-title anim" style={{ animationDelay: "0.04s" }}>
					{s.title}
				</h2>
				<p className="slide-subtitle anim" style={{ animationDelay: "0.08s" }}>
					{s.sub}
				</p>
				{slide === 0 && (
					<div className="option-list anim" style={{ animationDelay: "0.12s" }}>
						{zones.map((z) => (
							<button
								key={z.name}
								className={`option-row${z.notSure ? " not-sure" : ""}${ans.zone === z.name ? " selected" : ""}`}
								onClick={() => sel("zone", z.name)}
							>
								<div className="option-icon">{z.icon}</div>
								<div>
									<div className="option-text-main">{z.name}</div>
									{z.sub && <div className="option-text-sub">{z.sub}</div>}
								</div>
							</button>
						))}
					</div>
				)}
				{slide === 1 && (
					<div className="option-list anim" style={{ animationDelay: "0.12s" }}>
						{subzones.map((z) => (
							<button
								key={z.name}
								className={`option-row${z.notSure ? " not-sure" : ""}${ans.subzone === z.name ? " selected" : ""}`}
								onClick={() => sel("subzone", z.name)}
							>
								<div className="option-icon">{z.icon}</div>
								<div>
									<div className="option-text-main">{z.name}</div>
									{z.sub && <div className="option-text-sub">{z.sub}</div>}
								</div>
							</button>
						))}
					</div>
				)}
				{slide === 2 && (
					<div className="option-list anim" style={{ animationDelay: "0.12s" }}>
						{conditions.map((c) => (
							<button
								key={c.name}
								className={`option-row${c.notSure ? " not-sure" : ""}${ans.condition === c.name ? " selected" : ""}`}
								onClick={() => sel("condition", c.name)}
							>
								<div className="option-icon">{c.icon}</div>
								<div className="option-text-main">{c.name}</div>
							</button>
						))}
						<p
							style={{
								fontSize: 12,
								color: T.inkLight,
								textAlign: "center",
								marginTop: 4,
								lineHeight: 1.5,
							}}
						>
							Unsure? Pick closest. Upload a close-up photo if cracks/damp spots
							visible.
						</p>
					</div>
				)}
				{slide === 3 && (
					<div className="check-group anim" style={{ animationDelay: "0.12s" }}>
						{[
							{
								q: "Is the balcony covered or exposed?",
								icon: "🌂",
								f: "covered",
								opts: ["Covered", "Semi-covered", "Fully Exposed"],
							},
							{
								q: "Is there a drain outlet?",
								icon: "💧",
								f: "drain",
								opts: ["Yes", "No", "Not sure"],
							},
							{
								q: "Do you plan to place heavy furniture (sofa, swing, storage)?",
								icon: "🛋️",
								f: "furniture",
								opts: ["Yes", "No"],
							},
						].map((c) => (
							<div key={c.f} className="check-card">
								<div className="check-question">
									<span style={{ fontSize: 18 }}>{c.icon}</span>
									{c.q}
								</div>
								<div className="check-options">
									{c.opts.map((o) => (
										<button
											key={o}
											className={`check-pill${ans[c.f] === o ? " selected" : ""}`}
											onClick={() => sel(c.f, o)}
										>
											{o}
										</button>
									))}
								</div>
							</div>
						))}
						<button
							className="option-row not-sure"
							onClick={() => {
								sel("covered", "Not sure");
								sel("drain", "Not sure");
								sel("furniture", "Not sure");
							}}
						>
							<div
								className="option-icon"
								style={{ background: T.blue, border: "none", color: "white" }}
							>
								?
							</div>
							<div className="option-text-main">
								Not sure (vendors will guide)
							</div>
						</button>
						<p
							style={{
								fontSize: 12,
								color: T.inkLight,
								textAlign: "center",
								lineHeight: 1.6,
							}}
						>
							Answering helps vendors plan slope and thermal joints.
							<br />
							Not sure? Vendors will confirm on-site.
						</p>
					</div>
				)}
				{slide === 4 && (
					<div
						className="anim"
						style={{ width: "100%", animationDelay: "0.12s" }}
					>
						<div className="meas-card">
							<div className="meas-header">📐 Length × Width</div>
							<div className="meas-inputs">
								<div className="meas-field">
									<div className="meas-label">Length (ft)</div>
									<input
										className="meas-input"
										type="number"
										value={ans.len}
										onChange={(e) => sel("len", e.target.value)}
										placeholder="e.g. 12"
									/>
								</div>
								<div className="meas-field">
									<div className="meas-label">Width (ft)</div>
									<input
										className="meas-input"
										type="number"
										value={ans.wid}
										onChange={(e) => sel("wid", e.target.value)}
										placeholder="e.g. 10"
									/>
								</div>
							</div>
							{area > 0 && (
								<div className="meas-calc">
									📐 Total Area: {area} sq. ft ({ans.len} × {ans.wid} ft)
								</div>
							)}
						</div>
						<button className="option-row" style={{ marginBottom: 10 }}>
							<div className="option-icon">➕</div>
							<div className="option-text-main">Add Irregular Spaces</div>
						</button>
						<button
							className="option-row not-sure"
							onClick={() => {
								sel("len", "0");
								sel("wid", "0");
							}}
						>
							<div
								className="option-icon"
								style={{ background: T.blue, border: "none", color: "white" }}
							>
								?
							</div>
							<div className="option-text-main">
								Not sure (vendors will measure)
							</div>
						</button>
					</div>
				)}
				{slide === 5 && (
					<div
						className="anim"
						style={{ width: "100%", animationDelay: "0.12s" }}
					>
						<div className="option-grid">
							{styles.map((st) => (
								<button
									key={st.name}
									className={`option-card${ans.style === st.name ? " selected" : ""}`}
									onClick={() => sel("style", st.name)}
								>
									<div
										className="option-card-thumb"
										style={{ background: st.bg }}
									>
										{st.icon}
									</div>
									<div>
										<div className="option-card-name">{st.name}</div>
										<div className="option-card-desc">{st.sub}</div>
									</div>
								</button>
							))}
						</div>
						<button
							className="option-row not-sure"
							style={{ marginTop: 10 }}
							onClick={() => sel("style", "none")}
						>
							<div
								className="option-icon"
								style={{ background: T.blue, border: "none", color: "white" }}
							>
								?
							</div>
							<div className="option-text-main">
								No preference (vendors can suggest)
							</div>
						</button>
					</div>
				)}
				{slide === 6 && (
					<div
						className="anim"
						style={{ width: "100%", animationDelay: "0.12s" }}
					>
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
								<div className="upload-icon-box">{u.icon}</div>
								<div>
									<div className="upload-main">{u.main}</div>
									<div className="upload-sub">{u.sub}</div>
								</div>
							</div>
						))}
						<div style={{ marginTop: 8 }}>
							<div className="upload-hint">
								📍 Stand in opposite corners and click 2 photos.
							</div>
							<div className="upload-hint">
								🔍 Close-up of cracks/damp patches is very helpful.
							</div>
						</div>
						<div className="skip-link">Skip for now</div>
					</div>
				)}
				{slide === 7 && (
					<div
						className="anim"
						style={{ width: "100%", animationDelay: "0.12s" }}
					>
						<div className="option-list">
							{timelines.map((t) => (
								<button
									key={t.name}
									className={`option-row${ans.timeline === t.name ? " selected" : ""}`}
									onClick={() => sel("timeline", t.name)}
								>
									<div className="option-icon">{t.icon}</div>
									<div>
										<div className="option-text-main">{t.name}</div>
										<div className="option-text-sub">{t.sub}</div>
									</div>
								</button>
							))}
						</div>
						<p className="timeline-note">
							Flexible may get better rates.
							<br />
							Urgent jobs may cost more due to priority labour.
						</p>
					</div>
				)}
				{slide === 8 && (
					<div
						className="anim"
						style={{
							textAlign: "center",
							animationDelay: "0.12s",
							width: "100%",
						}}
					>
						<div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
						<div
							style={{
								background: T.blueLight,
								borderRadius: 14,
								padding: "20px 24px",
								marginBottom: 16,
								textAlign: "left",
							}}
						>
							{[
								["Zone", "Balcony / Verandah / Sit-Out"],
								["Sub-type", "Apartment Balcony (semi-covered)"],
								[
									"Floor Condition",
									ans.condition || "Existing tiles cracked/loose",
								],
								[
									"Measurements",
									area > 0
										? `${area} sq. ft (${ans.len} × ${ans.wid} ft)`
										: "120 sq. ft (12 × 10 ft)",
								],
								[
									"Functional Notes",
									"Semi-covered, drain present, heavy furniture planned",
								],
								["Aesthetic Preference", "Wood Plank Mimics OR Concrete Grey"],
								["Timeline", ans.timeline || "Soon (1–2 months)"],
							].map(([k, v]) => (
								<div
									key={k}
									style={{
										display: "flex",
										justifyContent: "space-between",
										padding: "9px 0",
										borderBottom: `1px solid ${T.blueMid}`,
										fontSize: 13,
									}}
								>
									<span style={{ color: T.inkLight, fontWeight: 600 }}>
										{k}
									</span>
									<span
										style={{
											color: T.ink,
											fontWeight: 700,
											textAlign: "right",
											maxWidth: "55%",
										}}
									>
										{v}
									</span>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			<div className="slide-nav">
				<div className="slide-nav-left">{s.label}</div>
				<div className="slide-nav-right">
					{slide === 0 ? (
						<button className="btn btn-ghost" onClick={onBack}>
							← Search
						</button>
					) : (
						<button className="btn btn-ghost" onClick={() => go(-1)}>
							← Back
						</button>
					)}
					{slide < SLIDES.length - 1 ? (
						<button
							className="btn btn-primary"
							disabled={!canNext()}
							onClick={() => go(1)}
						>
							Next →
						</button>
					) : (
						<button className="btn btn-green" onClick={onNext}>
							Review Job Order →
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

function ReviewScreen({ onNext, onBack }) {
	const RFQ_ID = "SRZ-BAL-108-001";
	const sections = [
		{
			title: "Part A — Job Request",
			subtitle: "Read-only · This is exactly what vendors will see",
			icon: "📋",
			rows: [
				["RFQ ID", RFQ_ID, true],
				[
					"Job Title",
					"Balcony tile replacement with outdoor anti-skid wood-plank porcelain tiles",
				],
				["Location Type", "Apartment Balcony (Semi-covered)"],
				[
					"Area",
					"Approx. 108 sq ft (final measurement to be verified on site)",
				],
				[
					"Current Surface Condition",
					"Existing tiles cracked / loose — removal expected before new installation",
				],
				["Drain Outlet", "Present — slope must direct water towards drain"],
				[
					"Furniture Load",
					"Outdoor seating, storage cabinet, plant pots (moderate static load)",
				],
				["Exposure", "Semi-covered balcony with occasional rain splash"],
				["Preferred Style", "Wood plank tile look"],
			],
		},
		{
			title: "Technical Tile Specifications",
			subtitle: "Auto-generated from your selections",
			icon: "🔧",
			rows: [
				[
					"Typical Tile Size Range",
					"150×900 mm or 200×1200 mm porcelain plank tiles",
				],
				["Tile Thickness", "≥10 mm outdoor-grade porcelain"],
				["Slip Resistance", "Minimum R10 anti-skid rating"],
				["Water Absorption", "≤0.5% (outdoor rated porcelain)"],
				["Adhesive Spec", "C2TE exterior tile adhesive or equivalent"],
				["Grout Spec", "Polymer modified waterproof grout"],
			],
		},
		{
			title: "Scope of Work",
			subtitle: "Expected installation steps",
			icon: "📐",
			rows: [
				["Step 1", "Remove existing tiles"],
				["Step 2", "Clean substrate"],
				["Step 3", "Repair minor cracks"],
				["Step 4", "Correct slope if required"],
				["Step 5", "Install tiles using exterior adhesive"],
				["Step 6", "Apply polymer modified grout"],
				["Step 7", "Finish edges near walls and drain"],
			],
		},
		{
			title: "Timeline & Documentation",
			subtitle: "",
			icon: "📅",
			rows: [
				["Timeline", "Preferred start within ~2 weeks"],
				[
					"Site Photos",
					"Minimum 2 site photos expected (overall view + crack close-up)",
				],
				["Uploaded Files", "3 photos attached — view →"],
			],
		},
	];
	return (
		<>
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
							background: T.blueLight,
							borderRadius: 10,
							width: "fit-content",
						}}
					>
						<span
							style={{
								fontSize: 13,
								fontWeight: 700,
								color: T.blue,
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
							{RFQ_ID}
						</span>
						<span style={{ fontSize: 11, color: T.inkLight, marginLeft: 8 }}>
							Generated · 13 Mar 2026
						</span>
					</div>
				</div>
				{sections.map((sec, si) => (
					<div
						key={sec.title}
						className="review-card anim"
						style={{ animationDelay: `${si * 0.06}s` }}
					>
						<div className="review-card-header">
							<div>
								<div className="review-card-title">
									{sec.icon} {sec.title}
								</div>
								{sec.subtitle && (
									<div
										style={{ fontSize: 12, color: T.inkLight, marginTop: 2 }}
									>
										{sec.subtitle}
									</div>
								)}
							</div>
							{si === 0 && (
								<button
									className="btn btn-ghost"
									style={{ padding: "7px 14px", fontSize: 12 }}
								>
									✏️ Edit
								</button>
							)}
						</div>
						<table style={{ width: "100%", borderCollapse: "collapse" }}>
							<tbody>
								{sec.rows.map(([label, value, isId], ri) => (
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
												fontWeight: isId ? 700 : 500,
												color: label === "Uploaded Files" ? T.blue : T.ink,
												cursor:
													label === "Uploaded Files" ? "pointer" : "default",
												lineHeight: 1.6,
											}}
										>
											{value}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				))}
				<div className="broadcast-box anim" style={{ animationDelay: "0.24s" }}>
					<div style={{ fontSize: 28 }}>📡</div>
					<div className="broadcast-body">
						<h4>Ready to Broadcast to Vendors</h4>
						<p>
							Your job will be sent to all verified tiling vendors in your area.
						</p>
						<div className="vendor-tags">
							{[
								"TileKing Pro",
								"Urban Tiles & Co.",
								"MasterFloor Works",
								"Pune Tile Experts",
								"+ 14 more",
							].map((v) => (
								<span key={v} className="vtag">
									{v}
								</span>
							))}
						</div>
					</div>
				</div>
				<div className="review-card anim" style={{ animationDelay: "0.28s" }}>
					<div className="review-card-header">
						<div className="review-card-title">✅ Part D — Confirmation</div>
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
			<div className="action-bar">
				<span className="ab-left">
					Step 3 of 5 · Review & Broadcast · RFQ {RFQ_ID}
				</span>
				<div className="ab-right">
					<button className="btn btn-ghost" onClick={onBack}>
						← Edit Details
					</button>
					<button className="btn btn-green" onClick={onNext}>
						📡 Confirm & Post RFQ →
					</button>
				</div>
			</div>
		</>
	);
}

function ViewQuoteModal({ vendor, onClose }) {
	const lineItems = {
		1: [
			{
				category: "Demolition & Prep",
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
					{
						name: "Slope correction (screed)",
						qty: "1 job",
						rate: "₹1,800",
						total: "₹1,800",
					},
				],
				subtotal: "₹9,280",
			},
			{
				category: "Materials",
				items: [
					{
						name: "Porcelain plank tiles 150×900mm R10",
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
					{
						name: "Polymer modified waterproof grout",
						qty: "3 bags",
						rate: "₹480/bag",
						total: "₹1,440",
					},
					{
						name: "Edge trims & finishing strips",
						qty: "1 lot",
						rate: "₹900",
						total: "₹900",
					},
				],
				subtotal: "₹21,620",
			},
			{
				category: "Labour & Installation",
				items: [
					{
						name: "Tile laying (108 sqft)",
						qty: "108 sqft",
						rate: "₹55/sqft",
						total: "₹5,940",
					},
					{
						name: "Grouting & finishing",
						qty: "108 sqft",
						rate: "₹12/sqft",
						total: "₹1,296",
					},
					{
						name: "Edge & drain area detailing",
						qty: "1 job",
						rate: "₹800",
						total: "₹800",
					},
					{
						name: "Clean-up & site clearance",
						qty: "1 job",
						rate: "₹500",
						total: "₹500",
					},
				],
				subtotal: "₹8,536",
			},
		],
		2: [
			{
				category: "Labour & Installation",
				items: [
					{
						name: "Tile laying — customer supplies tiles",
						qty: "108 sqft",
						rate: "₹50/sqft",
						total: "₹5,400",
					},
					{
						name: "Adhesive (C2TE)",
						qty: "4 bags",
						rate: "₹620/bag",
						total: "₹2,480",
					},
					{
						name: "Grouting & finishing",
						qty: "108 sqft",
						rate: "₹14/sqft",
						total: "₹1,512",
					},
					{
						name: "Edge & drain detailing",
						qty: "1 job",
						rate: "₹750",
						total: "₹750",
					},
					{ name: "Clean-up", qty: "1 job", rate: "₹500", total: "₹500" },
				],
				subtotal: "₹10,642",
			},
			{
				category: "Overheads & Profit",
				items: [
					{
						name: "Site supervision & tools",
						qty: "—",
						rate: "—",
						total: "₹23,558",
					},
				],
				subtotal: "₹23,558",
			},
		],
		3: [
			{
				category: "Materials",
				items: [
					{
						name: "Economy porcelain tiles",
						qty: "12 boxes",
						rate: "₹900/box",
						total: "₹10,800",
					},
					{
						name: "Standard exterior adhesive",
						qty: "4 bags",
						rate: "₹520/bag",
						total: "₹2,080",
					},
					{
						name: "Standard grout",
						qty: "3 bags",
						rate: "₹380/bag",
						total: "₹1,140",
					},
				],
				subtotal: "₹14,020",
			},
			{
				category: "Labour",
				items: [
					{
						name: "Tile laying",
						qty: "108 sqft",
						rate: "₹40/sqft",
						total: "₹4,320",
					},
					{
						name: "Grouting & clean-up",
						qty: "1 job",
						rate: "₹1,500",
						total: "₹1,500",
					},
					{
						name: "Basic edge finishing",
						qty: "1 job",
						rate: "₹600",
						total: "₹600",
					},
					{
						name: "Tools, travel, misc.",
						qty: "—",
						rate: "—",
						total: "₹8,560",
					},
				],
				subtotal: "₹14,980",
			},
		],
	};
	const data = lineItems[vendor.id] || lineItems[1];
	return (
		<div
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
			<div
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
							All amounts in INR · Includes materials, labour & clean-up unless
							noted
						</div>
					</div>
					<button
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
									background: T.white,
									borderRadius: 10,
									overflow: "hidden",
									border: `1px solid ${T.border}`,
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
													fontFamily: "'Sora',sans-serif",
												}}
											>
												{h}
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{section.items.map((item, ii) => (
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
												fontFamily: "'Sora',sans-serif",
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
												fontFamily: "'Sora',sans-serif",
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
								Excl. optional add-ons · GST as applicable
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
			</div>
		</div>
	);
}

function QuotesScreen({ onVendor, onBack }) {
	const [viewQuoteVendor, setViewQuoteVendor] = useState(null);
	const vendors = [
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
			name: "Urban Tiles & Co.",
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
	return (
		<>
			{viewQuoteVendor && (
				<ViewQuoteModal
					vendor={viewQuoteVendor}
					onClose={() => setViewQuoteVendor(null)}
				/>
			)}
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
						3 vendors responded · Compare and choose the best fit.
					</p>
				</div>
				<div className="compare-bar anim">
					<span style={{ fontSize: 13, color: T.inkMid }}>
						Comparing:{" "}
						<b style={{ color: T.ink }}>
							Balcony Tiling · 108 sqft · Semi-Covered
						</b>
					</span>
					<span style={{ fontSize: 12, color: T.inkLight }}>
						RFQ SRZ-BAL-108-001
					</span>
				</div>
				<div className="quotes-grid">
					{vendors.map((v, i) => (
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
									<div key={j} className="qv-detail">
										<span>{ic}</span>
										<span>{tx}</span>
									</div>
								))}
								<div className="qv-note">{v.note}</div>
							</div>
							<div className="qv-footer">
								<button className="btn-sm btn-sm-p" onClick={() => onVendor(v)}>
									Accept Quote
								</button>
								<button
									className="btn-sm btn-sm-o"
									style={{ flex: "none" }}
									onClick={() => setViewQuoteVendor(v)}
								>
									View Quote
								</button>
								<button
									className="btn-sm btn-sm-o"
									style={{ flex: "none" }}
									onClick={() => onVendor(v)}
								>
									Profile
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="action-bar">
				<span className="ab-left">Step 4 of 5 · 3 Quotes</span>
				<div className="ab-right">
					<button className="btn btn-ghost" onClick={onBack}>
						← Back
					</button>
				</div>
			</div>
		</>
	);
}

function ConfirmationScreen({ vendor }) {
	return (
		<div className="page">
			<div
				className="anim"
				style={{
					maxWidth: 640,
					margin: "0 auto",
					textAlign: "center",
					paddingTop: 40,
				}}
			>
				<div
					style={{
						width: 80,
						height: 80,
						borderRadius: "50%",
						background: T.greenLight,
						border: `3px solid ${T.greenBorder}`,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						fontSize: 36,
						margin: "0 auto 24px",
					}}
				>
					✓
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
					Job Awarded to {vendor.name}!
				</h2>
				<p
					style={{
						fontSize: 15,
						color: T.inkMid,
						marginBottom: 32,
						lineHeight: 1.6,
					}}
				>
					Your balcony tiling job has been confirmed. The vendor will contact
					you within 24 hours.
				</p>
				<div
					style={{
						background: T.white,
						borderRadius: 16,
						border: `1.5px solid ${T.border}`,
						overflow: "hidden",
						marginBottom: 20,
						textAlign: "left",
					}}
				>
					<div
						style={{
							background: `linear-gradient(135deg,${T.blue},#1A3AAF)`,
							padding: "20px 24px",
							color: "white",
							display: "flex",
							gap: 16,
							alignItems: "center",
						}}
					>
						<div
							style={{
								width: 52,
								height: 52,
								borderRadius: 12,
								background: "rgba(255,255,255,0.15)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: 26,
							}}
						>
							{vendor.emoji}
						</div>
						<div>
							<div
								style={{
									fontFamily: "'Sora',sans-serif",
									fontSize: 17,
									fontWeight: 800,
								}}
							>
								{vendor.name}
							</div>
							<div style={{ fontSize: 13, opacity: 0.75, marginTop: 2 }}>
								{vendor.loc}
							</div>
						</div>
						<div style={{ marginLeft: "auto", textAlign: "right" }}>
							<div
								style={{
									fontFamily: "'Sora',sans-serif",
									fontSize: 22,
									fontWeight: 800,
								}}
							>
								{vendor.price}
							</div>
							<div style={{ fontSize: 11, opacity: 0.65 }}>Confirmed total</div>
						</div>
					</div>
					<table style={{ width: "100%", borderCollapse: "collapse" }}>
						{[
							["RFQ ID", "SRZ-BAL-108-001"],
							["Job", "Balcony Tile Replacement"],
							["Start Date", "Within 2 weeks"],
							["Duration", "2–3 working days"],
							["Warranty", "2-year workmanship"],
							["Payment Terms", "50% advance · 50% on completion"],
						].map(([l, v], i) => (
							<tr
								key={l}
								style={{
									borderBottom: `1px solid ${T.border}`,
									background: i % 2 === 0 ? T.white : T.bg,
								}}
							>
								<td
									style={{
										padding: "11px 20px",
										fontSize: 12,
										fontWeight: 600,
										color: T.inkLight,
										width: "40%",
									}}
								>
									{l}
								</td>
								<td
									style={{
										padding: "11px 20px",
										fontSize: 13,
										fontWeight: 600,
										color: T.ink,
									}}
								>
									{v}
								</td>
							</tr>
						))}
					</table>
				</div>
				<div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
					<button className="btn btn-ghost">📄 Download Job Order</button>
					<button className="btn btn-primary">Go to My Jobs →</button>
				</div>
			</div>
		</div>
	);
}

function VendorProfile({ vendor, onBack, onConfirmed }) {
	const [accepting, setAccepting] = useState(false);
	const [showTick, setShowTick] = useState(false);
	const [confirmed, setConfirmed] = useState(false);
	const handleAccept = () => {
		setAccepting(true);
		setTimeout(() => setShowTick(true), 200);
		setTimeout(() => {
			setShowTick(false);
			setAccepting(false);
			setConfirmed(true);
		}, 2200);
	};
	if (confirmed) return <ConfirmationScreen vendor={vendor} />;
	const reviews = [
		{
			name: "Ananya S.",
			color: "#1565C0",
			rating: 5,
			date: "Feb 2026",
			text: "Absolutely immaculate work. The tiles are perfectly aligned and the grouting is flawless. TileKing Pro finished ahead of schedule and cleaned up completely.",
		},
		{
			name: "Rahul M.",
			color: "#2E7D32",
			rating: 5,
			date: "Jan 2026",
			text: "Very professional team. They noticed a drainage slope issue the previous contractor had missed and fixed it as part of the job.",
		},
		{
			name: "Priya K.",
			color: "#6A1B9A",
			rating: 4,
			date: "Dec 2025",
			text: "Great quality tiles and neat finish. Minor delay on day 2 due to material delivery but they made up for it on day 3.",
		},
	];
	const pastJobs = [
		{
			icon: "🚿",
			name: "Master Bathroom Tiling — Koregaon Park",
			meta: "Porcelain 24×24 · 220 sqft · Mar 2026",
			price: "₹44,000",
		},
		{
			icon: "🍳",
			name: "Kitchen Floor & Backsplash — Baner",
			meta: "Ceramic Mosaic · 310 sqft · Feb 2026",
			price: "₹61,500",
		},
		{
			icon: "🏊",
			name: "Outdoor Pool Deck — Viman Nagar",
			meta: "Non-slip Travertine · 480 sqft · Jan 2026",
			price: "₹1,12,000",
		},
		{
			icon: "🏢",
			name: "Commercial Lobby — Hinjewadi",
			meta: "Marble 600×600 · 1200 sqft · Dec 2025",
			price: "₹2,80,000",
		},
	];
	return (
		<>
			{accepting && (
				<div
					style={{
						position: "fixed",
						inset: 0,
						zIndex: 999,
						background: "rgba(255,255,255,0.96)",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						animation: "fadeIn 0.2s ease",
					}}
				>
					<style>{`@keyframes tickPop{0%{transform:scale(0) rotate(-20deg);opacity:0}60%{transform:scale(1.2) rotate(4deg);opacity:1}100%{transform:scale(1) rotate(0);opacity:1}}@keyframes ringExpand{0%{transform:scale(0.5);opacity:1}100%{transform:scale(2.2);opacity:0}}@keyframes textFadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
					{showTick && (
						<>
							<div
								style={{
									position: "absolute",
									width: 140,
									height: 140,
									borderRadius: "50%",
									border: `4px solid ${T.green}`,
									opacity: 0,
									animation: "ringExpand 0.8s 0.1s ease-out forwards",
								}}
							/>
							<div
								style={{
									position: "absolute",
									width: 140,
									height: 140,
									borderRadius: "50%",
									border: `2px solid ${T.green}`,
									opacity: 0,
									animation: "ringExpand 0.9s 0.25s ease-out forwards",
								}}
							/>
							<div
								style={{
									width: 120,
									height: 120,
									borderRadius: "50%",
									background: T.green,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									animation: "tickPop 0.5s cubic-bezier(.34,1.56,.64,1) both",
									boxShadow: `0 12px 48px rgba(46,125,50,0.35)`,
								}}
							>
								<svg width="56" height="56" viewBox="0 0 56 56" fill="none">
									<path
										d="M12 28 L24 40 L44 18"
										stroke="white"
										strokeWidth="5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div
								style={{
									marginTop: 28,
									textAlign: "center",
									animation: "textFadeUp 0.4s 0.3s ease both",
								}}
							>
								<div
									style={{
										fontFamily: "'Sora',sans-serif",
										fontSize: 22,
										fontWeight: 800,
										color: T.ink,
										marginBottom: 6,
									}}
								>
									{vendor.name} Accepted!
								</div>
								<div style={{ fontSize: 14, color: T.inkMid }}>
									Setting up your job order…
								</div>
							</div>
						</>
					)}
				</div>
			)}
			<div className="page">
				<div className="profile-hero anim">
					<div className="profile-av">{vendor.emoji}</div>
					<div style={{ flex: 1 }}>
						<div className="profile-name">{vendor.name}</div>
						<div className="profile-sub">
							Tiling & Flooring Specialist · {vendor.loc}
						</div>
						<div className="profile-stats">
							{[
								[vendor.rating, "Rating"],
								[vendor.reviews, "Reviews"],
								[vendor.jobs, "Jobs Done"],
								["5 yrs", "On Servzo"],
							].map(([v, k]) => (
								<div key={k}>
									<div className="pstat-val">{v}</div>
									<div className="pstat-key">{k}</div>
								</div>
							))}
						</div>
					</div>
					{vendor.verified && <div className="verified-pill">✓ Verified</div>}
				</div>
				<div className="profile-grid">
					<div className="pcard full anim">
						<div className="pcard-hdr">
							⭐ Customer Reviews
							<Stars r={vendor.rating} />
						</div>
						<div className="pcard-body" style={{ paddingTop: 8 }}>
							{reviews.map((r) => (
								<div key={r.name} className="rev-row">
									<div className="rev-header">
										<div className="rev-av" style={{ background: r.color }}>
											{r.name[0]}
										</div>
										<div>
											<div className="rev-name">{r.name}</div>
											<Stars r={r.rating} />
										</div>
										<div className="rev-date">{r.date}</div>
									</div>
									<div className="rev-text">{r.text}</div>
								</div>
							))}
						</div>
					</div>
					<div className="pcard anim">
						<div className="pcard-hdr">💼 Past Jobs</div>
						<div className="pcard-body" style={{ paddingTop: 8 }}>
							{pastJobs.map((j) => (
								<div key={j.name} className="job-row">
									<div className="job-ic">{j.icon}</div>
									<div>
										<div className="job-nm">{j.name}</div>
										<div className="job-mt">{j.meta}</div>
									</div>
									<div className="job-pr">{j.price}</div>
								</div>
							))}
						</div>
					</div>
					<div className="pcard anim">
						<div className="pcard-hdr">🔖 Credentials & Skills</div>
						<div className="pcard-body">
							<div className="sec-label">Certifications</div>
							{[
								["📜", "CIBSE Certified Tile Installer"],
								["🛡", "Servzo Identity Verified"],
								["💰", "GST Registered Business"],
								["🔒", "Insured up to ₹10 Lakhs"],
							].map(([ic, lb]) => (
								<div key={lb} className="cred-row">
									<span style={{ fontSize: 16 }}>{ic}</span>
									<span>{lb}</span>
								</div>
							))}
							<div className="divider" />
							<div className="sec-label">Specialisations</div>
							<div>
								{[
									"Porcelain",
									"Marble",
									"Mosaic",
									"Herringbone",
									"Outdoor Tiling",
									"Bathroom Waterproofing",
									"Subfloor Levelling",
									"Grout Sealing",
								].map((s) => (
									<span key={s} className="skill-tag">
										{s}
									</span>
								))}
							</div>
							<div className="divider" />
							<div className="sec-label">Service Area</div>
							<div style={{ fontSize: 13, color: T.inkMid, lineHeight: 1.7 }}>
								📍 Kothrud · Baner · Aundh · Wakad · Hinjewadi · Koregaon Park
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="action-bar">
				<span className="ab-left">
					Step 5 of 5 · {vendor.name} · Verified Vendor
				</span>
				<div className="ab-right">
					<button className="btn btn-ghost" onClick={onBack}>
						← Back to Quotes
					</button>
					<button
						className="btn btn-green"
						onClick={handleAccept}
						disabled={accepting}
					>
						✅ Accept This Quote
					</button>
				</div>
			</div>
		</>
	);
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
const SINGLE_STEPS = [
	"Search",
	"Job Template",
	"Review Order",
	"Compare Quotes",
	"Vendor Profile",
];
const PROJECT_STEPS = [
	"Project Type",
	"Trade Hub",
	"Project RFQ",
	"Project Quotes",
];

export default function App() {
	// Single-job flow
	const [screen, setScreen] = useState(0);
	const [vendor, setVendor] = useState(null);

	// Project management flow
	const [mode, setMode] = useState("single"); // "single" | "project"
	const [projectScreen, setProjectScreen] = useState(0);
	const [selectedProject, setSelectedProject] = useState(null);
	const [completedTrades, setCompletedTrades] = useState([]);
	const [activeTradeId, setActiveTradeId] = useState(null);

	const go = (n) => {
		setScreen(n);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	const pgo = (n) => {
		setProjectScreen(n);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleStartProject = () => {
		setMode("project");
		setProjectScreen(0);
		setSelectedProject(null);
		setCompletedTrades([]);
		setActiveTradeId(null);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleBackToSearch = () => {
		setMode("single");
		setScreen(0);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleTradeDone = (tradeId) => {
		setCompletedTrades((prev) =>
			prev.includes(tradeId) ? prev : [...prev, tradeId],
		);
		setActiveTradeId(null);
		pgo(1); // back to hub
	};

	// Render topbar
	const topbar = (
		<div className="topbar">
			<div className="logo">
				Serv<span>zo</span>
			</div>
			<div className="nav">
				{["Dashboard", "My Jobs", "Messages", "Vendors"].map((n, i) => (
					<button key={n} className={`nav-btn${i === 1 ? " active" : ""}`}>
						{n}
					</button>
				))}
			</div>
			<div className="topbar-right">
				<span className="topbar-name">Arjun Mehta</span>
				<div className="avatar">AM</div>
			</div>
		</div>
	);

	// ── PROJECT FLOW ──────────────────────────────────────────────────────────
	if (mode === "project") {
		// Filling an individual trade template
		if (activeTradeId) {
			const tradeDefs =
				selectedProject?.id === "building" ? BUILDING_TRADE_DEFS : TRADE_DEFS;
			const tradeDef = tradeDefs[activeTradeId];
			return (
				<>
					<style>
						{fonts}
						{css}
					</style>
					{topbar}
					{/* Project context banner */}
					<div
						style={{
							background: T.purpleLight,
							borderBottom: `1px solid ${T.purple}20`,
							padding: "8px 40px",
							display: "flex",
							alignItems: "center",
							gap: 10,
						}}
					>
						<span
							style={{
								fontSize: 12,
								fontWeight: 700,
								color: T.purple,
								fontFamily: "'Sora',sans-serif",
							}}
						>
							🏗️ PROJECT MODE
						</span>
						<span style={{ fontSize: 12, color: T.inkMid }}>·</span>
						<span style={{ fontSize: 12, color: T.inkMid }}>
							{selectedProject?.title}
						</span>
						<span style={{ fontSize: 12, color: T.inkMid }}>·</span>
						<span style={{ fontSize: 12, fontWeight: 600, color: T.ink }}>
							{completedTrades.length}/{selectedProject?.tradeIds.length} trades
							complete
						</span>
					</div>
					<TradeTemplate
						trade={tradeDef}
						onDone={() => handleTradeDone(activeTradeId)}
						onBack={() => setActiveTradeId(null)}
					/>
				</>
			);
		}

		return (
			<>
				<style>
					{fonts}
					{css}
				</style>
				{topbar}

				{/* Project step indicator */}
				{projectScreen > 0 && (
					<div className="flow-header">
						<div className="flow-steps">
							{PROJECT_STEPS.map((s, i) => (
								<div key={s} style={{ display: "flex", alignItems: "center" }}>
									<div
										className={`fstep${i < projectScreen ? " done" : i === projectScreen ? " active" : ""}`}
									>
										<div
											className="fstep-num"
											style={
												i <= projectScreen
													? {
															background: T.purple,
															borderColor: T.purple,
															color: "white",
														}
													: {}
											}
										>
											{i < projectScreen ? "✓" : i + 1}
										</div>
										<span style={{ whiteSpace: "nowrap" }}>{s}</span>
									</div>
									{i < PROJECT_STEPS.length - 1 && (
										<div
											className={`fstep-line${i < projectScreen ? " done" : ""}`}
											style={i < projectScreen ? { background: T.purple } : {}}
										/>
									)}
								</div>
							))}
						</div>
					</div>
				)}

				{projectScreen === 0 && (
					<ProjectTypeScreen
						onSelect={(proj) => {
							setSelectedProject(proj);
							pgo(1);
						}}
						onBack={handleBackToSearch}
					/>
				)}
				{projectScreen === 1 && selectedProject && (
					<TradeHubScreen
						project={selectedProject}
						completedTrades={completedTrades}
						onFillTrade={(id) => setActiveTradeId(id)}
						onReviewProject={() => pgo(2)}
						onBack={() => pgo(0)}
					/>
				)}
				{projectScreen === 2 && selectedProject && (
					<ProjectReviewScreen
						project={selectedProject}
						onNext={() => pgo(3)}
						onBack={() => pgo(1)}
					/>
				)}
				{projectScreen === 3 && selectedProject && (
					<ProjectQuotesScreen
						project={selectedProject}
						onBack={() => pgo(2)}
					/>
				)}
			</>
		);
	}

	// ── SINGLE JOB FLOW ──────────────────────────────────────────────────────
	return (
		<>
			<style>
				{fonts}
				{css}
			</style>
			{topbar}
			{screen > 0 && (
				<div className="flow-header">
					<div className="flow-steps">
						{SINGLE_STEPS.map((s, i) => (
							<div key={s} style={{ display: "flex", alignItems: "center" }}>
								<div
									className={`fstep${i < screen ? " done" : i === screen ? " active" : ""}`}
								>
									<div className="fstep-num">{i < screen ? "✓" : i + 1}</div>
									<span style={{ whiteSpace: "nowrap" }}>{s}</span>
								</div>
								{i < SINGLE_STEPS.length - 1 && (
									<div className={`fstep-line${i < screen ? " done" : ""}`} />
								)}
							</div>
						))}
					</div>
				</div>
			)}
			{screen === 0 && (
				<SearchScreen
					onSearch={() => go(1)}
					onStartProject={handleStartProject}
				/>
			)}
			{screen === 1 && (
				<JobTemplateScreen onNext={() => go(2)} onBack={() => go(0)} />
			)}
			{screen === 2 && (
				<ReviewScreen onNext={() => go(3)} onBack={() => go(1)} />
			)}
			{screen === 3 && (
				<QuotesScreen
					onVendor={(v) => {
						setVendor(v);
						go(4);
					}}
					onBack={() => go(2)}
				/>
			)}
			{screen === 4 && vendor && (
				<VendorProfile
					vendor={vendor}
					onBack={() => go(3)}
					onConfirmed={() => go(5)}
				/>
			)}
		</>
	);
}
