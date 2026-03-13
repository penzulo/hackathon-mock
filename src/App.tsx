import { useState } from "react";

// ─── THEME ────────────────────────────────────────────────────────────────────
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
};

const fonts = `@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Lato:wght@300;400;700&display=swap');`;

const css = `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Lato', sans-serif; background: ${T.bg}; color: ${T.ink}; min-height: 100vh; }

.topbar {
  background: ${T.white}; border-bottom: 1px solid ${T.border};
  padding: 0 40px; height: 62px;
  display: flex; align-items: center; justify-content: space-between;
  position: sticky; top: 0; z-index: 200;
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
}
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
`;

const SLIDES = [
  {id:"zone",      label:"Step 1 of 9",title:"Where do you need flooring work?",          sub:"Choose the area you're planning to tile."},
  {id:"subzone",   label:"Step 2 of 9",title:"What best describes this balcony/verandah?",sub:"Pick the closest match. This sets the right prep and safety checks."},
  {id:"condition", label:"Step 3 of 9",title:"What's the current flooring like?",          sub:"Pick the option that matches your floor right now."},
  {id:"checks",    label:"Step 4 of 9",title:"A few quick details to get this right",      sub:"These checks help vendors plan the right prep."},
  {id:"size",      label:"Step 5 of 9",title:"What's the size of the area?",               sub:"Just a rough idea is fine. Vendors will confirm exact measurements."},
  {id:"style",     label:"Step 6 of 9",title:"What style do you prefer for this apartment balcony?",sub:"Pick the look you like. Vendors will suggest tiles."},
  {id:"photos",    label:"Step 7 of 9",title:"Add photos of your space",                   sub:"Vendors need to see the current floor. Add at least 2 angles."},
  {id:"timeline",  label:"Step 8 of 9",title:"When do you need this job done?",            sub:"This helps vendors schedule the work."},
  {id:"done",      label:"Step 9 of 9",title:"You're all set!",                            sub:"Your job template is ready to review and broadcast."},
];

function Stars({r}) {
  return (
    <div className="stars">
      {[1,2,3,4,5].map(s=><span key={s} className="star">{s<=Math.round(r)?"★":"☆"}</span>)}
      <span className="star-count">{r}</span>
    </div>
  );
}

// SEARCH
function SearchScreen({onSearch}) {
  const [q,setQ]=useState("");
  const [loading,setLoading]=useState(false);
  const go=(term)=>{if(!term.trim())return;setLoading(true);setTimeout(()=>{setLoading(false);onSearch(term);},1100);};
  return (
    <div className="page">
      <div className="search-hero anim">
        <div className="search-eyebrow">India's Smartest Procurement Platform</div>
        <h1 className="search-h1">What job do you<br/>need done <em>today?</em></h1>
        <p className="search-sub">Describe your project — we'll match you with verified vendors instantly.</p>
        <div className="search-bar">
          <input className="search-input" placeholder="e.g. Floor Tiling Job, Plumbing Repair…" value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==="Enter"&&go(q)}/>
          <button className="search-go" onClick={()=>go(q)}>{loading?<span className="pulse">Finding…</span>:"Search →"}</button>
        </div>
        <div className="quick-chips">
          {["Floor Tiling","Electrical Work","Plumbing","Painting","Carpentry","HVAC Service"].map(t=>(
            <button key={t} className="chip" onClick={()=>go(t)}>{t}</button>
          ))}
        </div>
      </div>
      <div className="feature-row">
        {[
          {icon:"🔒",title:"Verified Vendors Only",desc:"Every vendor is background-checked, licensed and insured before they can bid."},
          {icon:"📋",title:"Smart Job Templates",desc:"We ask the right questions so vendors give you accurate, comparable quotes."},
          {icon:"⚡",title:"Fast Quote Matching",desc:"Receive multiple competitive quotes from nearby vendors within hours."},
        ].map((f,i)=>(
          <div key={f.title} className="feature-card anim" style={{animationDelay:`${i*0.07}s`}}>
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// JOB TEMPLATE - SLIDESHOW
function JobTemplateScreen({onNext,onBack}) {
  const [slide,setSlide]=useState(0);
  const [animKey,setAnimKey]=useState(0);
  const [ans,setAns]=useState({zone:null,subzone:null,condition:null,covered:null,drain:null,furniture:null,len:"12",wid:"10",style:null,timeline:null});

  const sel=(f,v)=>setAns(a=>({...a,[f]:v}));
  const go=(d)=>{setSlide(s=>s+d);setAnimKey(k=>k+1);window.scrollTo({top:0,behavior:"smooth"});};

  const canNext=()=>{
    if(slide===0)return!!ans.zone;
    if(slide===1)return!!ans.subzone;
    if(slide===2)return!!ans.condition;
    if(slide===3)return!!ans.covered&&!!ans.drain&&!!ans.furniture;
    if(slide===4)return!!(ans.len&&ans.wid);
    if(slide===5)return!!ans.style;
    if(slide===6)return true;
    if(slide===7)return!!ans.timeline;
    return true;
  };

  const progress=((slide+1)/SLIDES.length)*100;
  const s=SLIDES[slide];
  const area=ans.len&&ans.wid?parseInt(ans.len)*parseInt(ans.wid):null;

  const zones=[
    {icon:"🛋️",name:"Living / Dining / Bedroom",sub:"Main interior spaces"},
    {icon:"🍳",name:"Kitchen",sub:"Including wet/dry areas"},
    {icon:"🚿",name:"Bathroom / WC",sub:"Full bath or toilet-only"},
    {icon:"🌿",name:"Balcony / Verandah / Sit-Out",sub:"Outdoor or semi-outdoor"},
    {icon:"🧺",name:"Utility / Laundry",sub:"Service areas"},
    {icon:"🅿️",name:"Parking / Driveway",sub:"Vehicle or heavy use"},
    {icon:"❓",name:"Not sure (we'll help you decide)",notSure:true},
  ];
  const subzones=[
    {icon:"🏠",name:"Apartment Balcony (semi-covered)",sub:"Semi-covered space with light rain exposure"},
    {icon:"🧺",name:"Utility Balcony (washer/mop area)",sub:"Daily water use, needs slope + drain check"},
    {icon:"☀️",name:"Courtyard Verandah (full sun/rain)",sub:"Completely exposed to weather, needs thermal joints"},
    {icon:"🔄",name:"Retrofit Balcony Overlay",sub:"Existing tiles to be overlaid or repaired"},
    {icon:"❓",name:"Not sure (we'll help you decide)",notSure:true},
  ];
  const conditions=[
    {icon:"🪨",name:"Bare concrete slab"},
    {icon:"🟦",name:"Existing tiles (good)"},
    {icon:"⚠️",name:"Existing tiles cracked/loose"},
    {icon:"🗿",name:"Old stone/kota/marble"},
    {icon:"💧",name:"Damp patches/seepage"},
    {icon:"❓",name:"Not sure",notSure:true},
  ];
  const styles=[
    {icon:"🤍",bg:"#F0EFED",name:"Luxury Marble Veins",sub:"Carrara, Travertine — premium extended living room feel"},
    {icon:"✨",bg:"#E0E0E0",name:"High Gloss / Nano Polish",sub:"Porcelain Super-Gloss — polished look, slippery if wet"},
    {icon:"🟫",bg:"#D4A574",name:"Wood Plank Mimics",sub:"Warm, cozy deck vibe without real timber"},
    {icon:"🔲",bg:"#B0B8C1",name:"Concrete / Industrial Greys",sub:"Minimalist, modern, low-maintenance"},
    {icon:"🟤",bg:"#E8C99A",name:"Rustic Earth / Mediterranean Clay",sub:"Bright, timeless look for small balconies"},
    {icon:"🌿",bg:"#C8A880",name:"Rustic Earth (darker tone)",sub:"Natural outdoor vibe for planters & sit-outs"},
  ];
  const timelines=[
    {icon:"⚡",name:"Urgent (within 2 weeks)",sub:"Priority job, may cost more due to labour availability"},
    {icon:"📋",name:"Soon (1–2 months)",sub:"Standard scheduling, flexible vendor options"},
    {icon:"✅",name:"Flexible (2–3 months)",sub:"Best rates possible, vendors can plan in advance"},
  ];

  return (
    <div className="slide-wrap">
      <div className="slide-progress-bar"><div className="slide-progress-fill" style={{width:`${progress}%`}}/></div>
      <div className="slide-body" key={animKey}>
        <div className="slide-step-label anim">{s.label}</div>
        <h2 className="slide-title anim" style={{animationDelay:"0.04s"}}>{s.title}</h2>
        <p className="slide-subtitle anim" style={{animationDelay:"0.08s"}}>{s.sub}</p>

        {slide===0&&(
          <div className="option-list anim" style={{animationDelay:"0.12s"}}>
            {zones.map(z=>(
              <button key={z.name} className={`option-row${z.notSure?" not-sure":""}${ans.zone===z.name?" selected":""}`} onClick={()=>sel("zone",z.name)}>
                <div className="option-icon">{z.icon}</div>
                <div><div className="option-text-main">{z.name}</div>{z.sub&&<div className="option-text-sub">{z.sub}</div>}</div>
              </button>
            ))}
          </div>
        )}

        {slide===1&&(
          <div className="option-list anim" style={{animationDelay:"0.12s"}}>
            {subzones.map(z=>(
              <button key={z.name} className={`option-row${z.notSure?" not-sure":""}${ans.subzone===z.name?" selected":""}`} onClick={()=>sel("subzone",z.name)}>
                <div className="option-icon">{z.icon}</div>
                <div><div className="option-text-main">{z.name}</div>{z.sub&&<div className="option-text-sub">{z.sub}</div>}</div>
              </button>
            ))}
          </div>
        )}

        {slide===2&&(
          <div className="option-list anim" style={{animationDelay:"0.12s"}}>
            {conditions.map(c=>(
              <button key={c.name} className={`option-row${c.notSure?" not-sure":""}${ans.condition===c.name?" selected":""}`} onClick={()=>sel("condition",c.name)}>
                <div className="option-icon">{c.icon}</div>
                <div className="option-text-main">{c.name}</div>
              </button>
            ))}
            <p style={{fontSize:12,color:T.inkLight,textAlign:"center",marginTop:4,lineHeight:1.5}}>Unsure? Pick closest. Upload a close-up photo if cracks/damp spots visible.</p>
          </div>
        )}

        {slide===3&&(
          <div className="check-group anim" style={{animationDelay:"0.12s"}}>
            {[
              {q:"Is the balcony covered or exposed?",icon:"🌂",f:"covered",opts:["Covered","Semi-covered","Fully Exposed"]},
              {q:"Is there a drain outlet?",icon:"💧",f:"drain",opts:["Yes","No","Not sure"]},
              {q:"Do you plan to place heavy furniture (sofa, swing, storage)?",icon:"🛋️",f:"furniture",opts:["Yes","No"]},
            ].map(c=>(
              <div key={c.f} className="check-card">
                <div className="check-question"><span style={{fontSize:18}}>{c.icon}</span>{c.q}</div>
                <div className="check-options">
                  {c.opts.map(o=><button key={o} className={`check-pill${ans[c.f]===o?" selected":""}`} onClick={()=>sel(c.f,o)}>{o}</button>)}
                </div>
              </div>
            ))}
            <button className="option-row not-sure" onClick={()=>{sel("covered","Not sure");sel("drain","Not sure");sel("furniture","Not sure");}}>
              <div className="option-icon" style={{background:T.blue,border:"none",color:"white"}}>?</div>
              <div className="option-text-main">Not sure (vendors will guide)</div>
            </button>
            <p style={{fontSize:12,color:T.inkLight,textAlign:"center",lineHeight:1.6}}>Answering helps vendors plan slope and thermal joints.<br/>Not sure? Vendors will confirm on-site.</p>
          </div>
        )}

        {slide===4&&(
          <div className="anim" style={{width:"100%",animationDelay:"0.12s"}}>
            <div className="meas-card">
              <div className="meas-header">📐 Length × Width</div>
              <div className="meas-inputs">
                <div className="meas-field"><div className="meas-label">Length (ft)</div><input className="meas-input" type="number" value={ans.len} onChange={e=>sel("len",e.target.value)} placeholder="e.g. 12"/></div>
                <div className="meas-field"><div className="meas-label">Width (ft)</div><input className="meas-input" type="number" value={ans.wid} onChange={e=>sel("wid",e.target.value)} placeholder="e.g. 10"/></div>
              </div>
              {area>0&&<div className="meas-calc">📐 Total Area: {area} sq. ft ({ans.len} × {ans.wid} ft)</div>}
            </div>
            <button className="option-row" style={{marginBottom:10}}>
              <div className="option-icon">➕</div><div className="option-text-main">Add Irregular Spaces</div>
            </button>
            <button className="option-row not-sure" onClick={()=>{sel("len","0");sel("wid","0");}}>
              <div className="option-icon" style={{background:T.blue,border:"none",color:"white"}}>?</div>
              <div className="option-text-main">Not sure (vendors will measure)</div>
            </button>
          </div>
        )}

        {slide===5&&(
          <div className="anim" style={{width:"100%",animationDelay:"0.12s"}}>
            <div className="option-grid">
              {styles.map(st=>(
                <button key={st.name} className={`option-card${ans.style===st.name?" selected":""}`} onClick={()=>sel("style",st.name)}>
                  <div className="option-card-thumb" style={{background:st.bg}}>{st.icon}</div>
                  <div><div className="option-card-name">{st.name}</div><div className="option-card-desc">{st.sub}</div></div>
                </button>
              ))}
            </div>
            <button className="option-row not-sure" style={{marginTop:10}} onClick={()=>sel("style","none")}>
              <div className="option-icon" style={{background:T.blue,border:"none",color:"white"}}>?</div>
              <div className="option-text-main">No preference (vendors can suggest)</div>
            </button>
          </div>
        )}

        {slide===6&&(
          <div className="anim" style={{width:"100%",animationDelay:"0.12s"}}>
            {[{icon:"📷",main:"Upload Photos",sub:"Minimum 2 photos required"},{icon:"✏️",main:"Upload Sketch",sub:"(optional)"},{icon:"🎬",main:"Upload Video",sub:"(optional)"}].map(u=>(
              <div key={u.main} className="upload-option">
                <div className="upload-icon-box">{u.icon}</div>
                <div><div className="upload-main">{u.main}</div><div className="upload-sub">{u.sub}</div></div>
              </div>
            ))}
            <div style={{marginTop:8}}>
              <div className="upload-hint">📍 Stand in opposite corners and click 2 photos.</div>
              <div className="upload-hint">🔍 Close-up of cracks/damp patches is very helpful.</div>
            </div>
            <div className="skip-link">Skip for now</div>
          </div>
        )}

        {slide===7&&(
          <div className="anim" style={{width:"100%",animationDelay:"0.12s"}}>
            <div className="option-list">
              {timelines.map(t=>(
                <button key={t.name} className={`option-row${ans.timeline===t.name?" selected":""}`} onClick={()=>sel("timeline",t.name)}>
                  <div className="option-icon">{t.icon}</div>
                  <div><div className="option-text-main">{t.name}</div><div className="option-text-sub">{t.sub}</div></div>
                </button>
              ))}
            </div>
            <p className="timeline-note">Flexible may get better rates.<br/>Urgent jobs may cost more due to priority labour.</p>
          </div>
        )}

        {slide===8&&(
          <div className="anim" style={{textAlign:"center",animationDelay:"0.12s",width:"100%"}}>
            <div style={{fontSize:64,marginBottom:20}}>🎉</div>
            <div style={{background:T.blueLight,borderRadius:14,padding:"20px 24px",marginBottom:16,textAlign:"left"}}>
              {[
                ["Zone","Balcony / Verandah / Sit-Out"],
                ["Sub-type","Apartment Balcony (semi-covered)"],
                ["Floor Condition",ans.condition||"Existing tiles cracked/loose"],
                ["Measurements",area>0?`${area} sq. ft (${ans.len} × ${ans.wid} ft)`:"120 sq. ft (12 × 10 ft)"],
                ["Functional Notes","Semi-covered, drain present, heavy furniture planned"],
                ["Aesthetic Preference","Wood Plank Mimics OR Concrete Grey"],
                ["Timeline",ans.timeline||"Soon (1–2 months)"],
              ].map(([k,v])=>(
                <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:`1px solid ${T.blueMid}`,fontSize:13}}>
                  <span style={{color:T.inkLight,fontWeight:600}}>{k}</span>
                  <span style={{color:T.ink,fontWeight:700,textAlign:"right",maxWidth:"55%"}}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="slide-nav">
        <div className="slide-nav-left">{s.label}</div>
        <div className="slide-nav-right">
          {slide===0?<button className="btn btn-ghost" onClick={onBack}>← Search</button>:<button className="btn btn-ghost" onClick={()=>go(-1)}>← Back</button>}
          {slide<SLIDES.length-1
            ?<button className="btn btn-primary" disabled={!canNext()} onClick={()=>go(1)}>Next →</button>
            :<button className="btn btn-green" onClick={onNext}>Review Job Order →</button>
          }
        </div>
      </div>
    </div>
  );
}

// REVIEW
function ReviewScreen({onNext,onBack}) {
  return (
    <>
      <div className="page">
        <div style={{marginBottom:24}}>
          <h2 className="anim" style={{fontFamily:"'Sora',sans-serif",fontSize:28,fontWeight:800,color:T.ink,marginBottom:6}}>Review your request before posting</h2>
          <p className="anim" style={{fontSize:14,color:T.inkMid}}>Here's what vendors will see. Make sure everything looks right.</p>
        </div>
        <div className="review-card anim">
          <div className="review-card-header">
            <div className="review-card-title">📋 Job Details</div>
            <button className="btn btn-ghost" style={{padding:"7px 14px",fontSize:12}}>✏️ Edit</button>
          </div>
          <div className="review-card-body">
            {[
              ["Zone & Sub-Branch","Balcony → Apartment Balcony (Semi-Covered)"],
              ["Current Floor Condition","Existing tiles cracked/loose"],
              ["Measurements","120 sq. ft (12 × 10 ft)"],
              ["Functional Prompts","Semi-covered, drain present, heavy furniture planned"],
              ["Aesthetic Preference","Wood Plank Mimics OR Concrete Grey"],
              ["Timeline","Soon (1–2 months)"],
              ["Uploaded Files","3 photos attached"],
            ].map(([l,v])=>(
              <div key={l} className="rri">
                <div className="rri-label">{l}</div>
                <div className="rri-value" style={l==="Uploaded Files"?{color:T.blue,cursor:"pointer"}:{}}>{l==="Uploaded Files"?"View 3 photos →":v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="broadcast-box anim">
          <div style={{fontSize:28}}>📡</div>
          <div className="broadcast-body">
            <h4>Ready to Broadcast to Vendors</h4>
            <p>Your job will be sent to all verified tiling vendors in your area.</p>
            <div className="vendor-tags">
              {["TileKing Pro","Urban Tiles & Co.","MasterFloor Works","Pune Tile Experts","+ 14 more"].map(v=>(
                <span key={v} className="vtag">{v}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="review-card anim">
          <div className="review-card-body" style={{display:"flex",gap:12,alignItems:"center"}}>
            <input type="checkbox" defaultChecked style={{width:16,height:16,accentColor:T.blue}}/>
            <span style={{fontSize:13,color:T.inkMid,lineHeight:1.6}}>I confirm the above details are accurate and agree to Servzo's <span style={{color:T.blue,cursor:"pointer",textDecoration:"underline"}}>Terms of Service</span> and <span style={{color:T.blue,cursor:"pointer",textDecoration:"underline"}}>Vendor Policy</span>.</span>
          </div>
        </div>
      </div>
      <div className="action-bar">
        <span className="ab-left">Step 3 of 5 · Review & Broadcast</span>
        <div className="ab-right">
          <button className="btn btn-ghost" onClick={onBack}>← Edit Details</button>
          <button className="btn btn-green" onClick={onNext}>📡 Confirm & Post RFQ →</button>
        </div>
      </div>
    </>
  );
}

// QUOTES
function QuotesScreen({onVendor,onBack}) {
  const vendors=[
    {id:1,emoji:"👑",bg:"#FEF9C3",name:"TileKing Pro",loc:"Kothrud, Pune",rating:4.8,reviews:312,jobs:480,price:"₹38,500",eta:"2–3 days",warranty:"2-year workmanship",verified:true,best:true,note:"Includes old tile removal & levelling. Premium grout included."},
    {id:2,emoji:"🏙️",bg:"#DBEAFE",name:"Urban Tiles & Co.",loc:"Baner, Pune",rating:4.5,reviews:187,jobs:290,price:"₹34,200",eta:"3–4 days",warranty:"1-year workmanship",verified:true,best:false,note:"Does not include tile supply. Customer to arrange tiles."},
    {id:3,emoji:"🔨",bg:"#EDE9FE",name:"MasterFloor Works",loc:"Hadapsar, Pune",rating:4.2,reviews:94,jobs:130,price:"₹29,000",eta:"5–7 days",warranty:"6-month workmanship",verified:false,best:false,note:"Budget-friendly option. Suitable for straightforward jobs."},
  ];
  return (
    <>
      <div className="page">
        <div style={{marginBottom:20}}>
          <h2 className="anim" style={{fontFamily:"'Sora',sans-serif",fontSize:28,fontWeight:800,color:T.ink,marginBottom:6}}>Vendor Quotes Received</h2>
          <p className="anim" style={{fontSize:14,color:T.inkMid}}>3 vendors responded to your Floor Tiling job · Compare and choose the best fit.</p>
        </div>
        <div className="compare-bar anim">
          <span style={{fontSize:13,color:T.inkMid}}>Comparing: <b style={{color:T.ink}}>Balcony Tiling · 120 sqft · Apartment Balcony · Semi-Covered</b></span>
          <span style={{fontSize:12,color:T.inkLight}}>Posted 2 hrs ago</span>
        </div>
        <div className="quotes-grid">
          {vendors.map((v,i)=>(
            <div key={v.id} className={`quote-card anim${v.best?" best":""}`} style={{animationDelay:`${i*0.07}s`}}>
              {v.best&&<div className="best-badge">✦ Best Match</div>}
              <div className="qv-header">
                <div className="qv-logo" style={{background:v.bg}}>{v.emoji}</div>
                <div><div className="qv-name">{v.name}</div><div className="qv-loc">{v.loc}</div><Stars r={v.rating}/></div>
              </div>
              <div className="qv-body">
                <div className="price-big">{v.price}</div>
                <div className="price-note">all-in estimate</div>
                {[["⏱","Lead time: "+v.eta],["🛡","Warranty: "+v.warranty],[v.verified?"✅":"⚠️",v.verified?"Identity Verified":"Not yet verified"],["💼",v.jobs+" completed jobs"]].map(([ic,tx],j)=>(
                  <div key={j} className="qv-detail"><span>{ic}</span><span>{tx}</span></div>
                ))}
                <div className="qv-note">{v.note}</div>
              </div>
              <div className="qv-footer">
                <button className="btn-sm btn-sm-p" onClick={()=>onVendor(v)}>Accept Quote</button>
                <button className="btn-sm btn-sm-o" onClick={()=>onVendor(v)}>View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="action-bar">
        <span className="ab-left">Step 4 of 5 · 3 Quotes Received</span>
        <div className="ab-right"><button className="btn btn-ghost" onClick={onBack}>← Back</button></div>
      </div>
    </>
  );
}

// VENDOR PROFILE
function VendorProfile({vendor,onBack}) {
  const reviews=[
    {name:"Ananya S.",color:"#1565C0",rating:5,date:"Feb 2026",text:"Absolutely immaculate work. The tiles are perfectly aligned and the grouting is flawless. TileKing Pro finished ahead of schedule and cleaned up completely. Will hire again without question."},
    {name:"Rahul M.",color:"#2E7D32",rating:5,date:"Jan 2026",text:"Very professional team. They noticed a drainage slope issue the previous contractor had missed and fixed it as part of the job. The bathroom looks brand new."},
    {name:"Priya K.",color:"#6A1B9A",rating:4,date:"Dec 2025",text:"Great quality tiles and neat finish. Minor delay on day 2 due to material delivery but they made up for it on day 3. Communication was excellent throughout."},
  ];
  const pastJobs=[
    {icon:"🚿",name:"Master Bathroom Tiling — Koregaon Park",meta:"Porcelain 24×24 · 220 sqft · Mar 2026",price:"₹44,000"},
    {icon:"🍳",name:"Kitchen Floor & Backsplash — Baner",meta:"Ceramic Mosaic · 310 sqft · Feb 2026",price:"₹61,500"},
    {icon:"🏊",name:"Outdoor Pool Deck — Viman Nagar",meta:"Non-slip Travertine · 480 sqft · Jan 2026",price:"₹1,12,000"},
    {icon:"🏢",name:"Commercial Lobby — Hinjewadi IT Park",meta:"Marble 600×600 · 1200 sqft · Dec 2025",price:"₹2,80,000"},
  ];
  return (
    <>
      <div className="page">
        <div className="profile-hero anim">
          <div className="profile-av">{vendor.emoji}</div>
          <div style={{flex:1}}>
            <div className="profile-name">{vendor.name}</div>
            <div className="profile-sub">Tiling & Flooring Specialist · {vendor.loc}</div>
            <div className="profile-stats">
              {[[vendor.rating,"Rating"],[vendor.reviews,"Reviews"],[vendor.jobs,"Jobs Done"],["5 yrs","On Servzo"]].map(([v,k])=>(
                <div key={k}><div className="pstat-val">{v}</div><div className="pstat-key">{k}</div></div>
              ))}
            </div>
          </div>
          {vendor.verified&&<div className="verified-pill">✓ Verified</div>}
        </div>
        <div className="profile-grid">
          <div className="pcard full anim">
            <div className="pcard-hdr">⭐ Customer Reviews<Stars r={vendor.rating}/></div>
            <div className="pcard-body" style={{paddingTop:8}}>
              {reviews.map(r=>(
                <div key={r.name} className="rev-row">
                  <div className="rev-header">
                    <div className="rev-av" style={{background:r.color}}>{r.name[0]}</div>
                    <div><div className="rev-name">{r.name}</div><Stars r={r.rating}/></div>
                    <div className="rev-date">{r.date}</div>
                  </div>
                  <div className="rev-text">{r.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="pcard anim">
            <div className="pcard-hdr">💼 Past Jobs</div>
            <div className="pcard-body" style={{paddingTop:8}}>
              {pastJobs.map(j=>(
                <div key={j.name} className="job-row">
                  <div className="job-ic">{j.icon}</div>
                  <div><div className="job-nm">{j.name}</div><div className="job-mt">{j.meta}</div></div>
                  <div className="job-pr">{j.price}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="pcard anim">
            <div className="pcard-hdr">🔖 Credentials & Skills</div>
            <div className="pcard-body">
              <div className="sec-label">Certifications</div>
              {[["📜","CIBSE Certified Tile Installer"],["🛡","Servzo Identity Verified"],["💰","GST Registered Business"],["🔒","Insured up to ₹10 Lakhs"]].map(([ic,lb])=>(
                <div key={lb} className="cred-row"><span style={{fontSize:16}}>{ic}</span><span>{lb}</span></div>
              ))}
              <div className="divider"/>
              <div className="sec-label">Specialisations</div>
              <div>{["Porcelain","Marble","Mosaic","Herringbone","Outdoor Tiling","Bathroom Waterproofing","Subfloor Levelling","Grout Sealing"].map(s=><span key={s} className="skill-tag">{s}</span>)}</div>
              <div className="divider"/>
              <div className="sec-label">Service Area</div>
              <div style={{fontSize:13,color:T.inkMid,lineHeight:1.7}}>📍 Kothrud · Baner · Aundh · Wakad · Hinjewadi · Koregaon Park · Kalyani Nagar · Viman Nagar</div>
            </div>
          </div>
        </div>
      </div>
      <div className="action-bar">
        <span className="ab-left">Step 5 of 5 · {vendor.name} · Verified Vendor</span>
        <div className="ab-right">
          <button className="btn btn-ghost" onClick={onBack}>← Back to Quotes</button>
          <button className="btn btn-green">✅ Accept This Quote</button>
        </div>
      </div>
    </>
  );
}

// APP
const MAIN_STEPS=["Search","Job Template","Review Order","Compare Quotes","Vendor Profile"];

export default function App() {
  const [screen,setScreen]=useState(0);
  const [vendor,setVendor]=useState(null);
  const go=(n)=>{setScreen(n);window.scrollTo({top:0,behavior:"smooth"});};
  return (
    <>
      <style>{fonts}{css}</style>
      <div className="topbar">
        <div className="logo">Serv<span>zo</span></div>
        <div className="nav">{["Dashboard","My Jobs","Messages","Vendors"].map((n,i)=><button key={n} className={`nav-btn${i===1?" active":""}`}>{n}</button>)}</div>
        <div className="topbar-right"><span className="topbar-name">Arjun Mehta</span><div className="avatar">AM</div></div>
      </div>
      {screen>0&&(
        <div className="flow-header">
          <div className="flow-steps">
            {MAIN_STEPS.map((s,i)=>(
              <div key={s} style={{display:"flex",alignItems:"center"}}>
                <div className={`fstep${i<screen?" done":i===screen?" active":""}`}>
                  <div className="fstep-num">{i<screen?"✓":i+1}</div>
                  <span style={{whiteSpace:"nowrap"}}>{s}</span>
                </div>
                {i<MAIN_STEPS.length-1&&<div className={`fstep-line${i<screen?" done":""}`}/>}
              </div>
            ))}
          </div>
        </div>
      )}
      {screen===0&&<SearchScreen onSearch={()=>go(1)}/>}
      {screen===1&&<JobTemplateScreen onNext={()=>go(2)} onBack={()=>go(0)}/>}
      {screen===2&&<ReviewScreen onNext={()=>go(3)} onBack={()=>go(1)}/>}
      {screen===3&&<QuotesScreen onVendor={v=>{setVendor(v);go(4);}} onBack={()=>go(2)}/>}
      {screen===4&&vendor&&<VendorProfile vendor={vendor} onBack={()=>go(3)}/>}
    </>
  );
}
