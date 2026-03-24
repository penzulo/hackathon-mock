export const T = {
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

export const TRADE_COLORS = {
	tiling: { bg: T.blueLight, accent: T.blue, light: "#DBEAFE" },
	plumbing: { bg: T.tealLight, accent: T.teal, light: "#CFFAFE" },
	electrical: { bg: T.amberLight, accent: T.amber, light: "#FEF9C3" },
	painting: { bg: T.purpleLight, accent: T.purple, light: "#EDE9FE" },
	waterproofing: { bg: T.roseLight, accent: T.rose, light: "#FFE4E6" },
};

export const fonts = `@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');`;

export const globalCss = `
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
.sec-label { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:${T.inkLight}; margin-bottom:10px; }
.divider { height:1px; background:${T.border}; margin:16px 0; }

.action-bar { position:sticky; bottom:0; left:0; right:0; background:white; border-top:1px solid ${T.border}; padding:14px 40px; display:flex; justify-content:space-between; align-items:center; z-index:100; box-shadow:0 -4px 16px rgba(0,0,0,0.05); }
.ab-left { font-size:13px; color:${T.inkLight}; font-weight:600; }
.ab-right { display:flex; gap:10px; }

.feature-card { background:white; border-radius:14px; border:1.5px solid ${T.border}; padding:24px; }
.feature-icon { font-size:28px; margin-bottom:12px; }
.feature-title { font-family:'Sora',sans-serif; font-size:15px; font-weight:700; color:${T.ink}; margin-bottom:6px; }
.feature-desc { font-size:13px; color:${T.inkMid}; line-height:1.6; }
.feature-row { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:48px; }

.compare-bar { background:white; border:1.5px solid ${T.border}; border-radius:10px; padding:14px 20px; display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; }

@keyframes fadeSlide { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
.anim { animation:fadeSlide 0.35s ease both; }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.45} }
.pulse { animation:pulse 1.2s infinite; }
@keyframes fadeIn { from{opacity:0} to{opacity:1} }
@keyframes tickPop { 0%{transform:scale(0) rotate(-20deg);opacity:0} 60%{transform:scale(1.2) rotate(4deg);opacity:1} 100%{transform:scale(1) rotate(0);opacity:1} }
@keyframes ringExpand { 0%{transform:scale(0.5);opacity:1} 100%{transform:scale(2.2);opacity:0} }
@keyframes textFadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
`;
