import { useState, useRef  } from "react";

const theme = {
  cream: "#FAF8F4",
  sand: "#F0EBE1",
  clay: "#C8A882",
  sienna: "#A0704A",
  bark: "#5C3D2E",
  ink: "#1A1208",
  mist: "#E8E2D9",
  sage: "#7A9E7E",
  sageLight: "#EBF2EC",
  amber: "#D4820A",
  amberLight: "#FEF3DC",
  error: "#C0392B",
  errorLight: "#FDECEA",
  star: "#F5A623",
};

const fonts = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
`;

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; background: ${theme.cream}; color: ${theme.ink}; }
  
  .app { min-height: 100vh; display: flex; flex-direction: column; }

  /* TOPBAR */
  .topbar {
    background: white;
    border-bottom: 1px solid ${theme.mist};
    padding: 0 32px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 1px 8px rgba(0,0,0,0.04);
  }
  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 700;
    color: ${theme.bark};
    letter-spacing: -0.5px;
  }
  .logo span { color: ${theme.sienna}; }
  .nav-pills { display: flex; gap: 4px; }
  .nav-pill {
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    color: ${theme.bark};
    cursor: pointer;
    transition: all 0.2s;
    border: none;
    background: transparent;
  }
  .nav-pill:hover { background: ${theme.sand}; }
  .nav-pill.active { background: ${theme.bark}; color: white; }
  .avatar {
    width: 34px; height: 34px; border-radius: 50%;
    background: linear-gradient(135deg, ${theme.clay}, ${theme.sienna});
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 13px; font-weight: 600; cursor: pointer;
  }

  /* BREADCRUMB */
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 14px 32px;
    font-size: 12px;
    color: ${theme.clay};
  }
  .breadcrumb-sep { color: ${theme.mist}; }
  .breadcrumb-current { color: ${theme.bark}; font-weight: 500; }

  /* STEP INDICATOR */
  .steps-bar {
    display: flex;
    align-items: center;
    padding: 0 32px 24px;
    gap: 0;
  }
  .step {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 500;
    color: ${theme.clay};
    position: relative;
  }
  .step.done { color: ${theme.sage}; }
  .step.active { color: ${theme.bark}; }
  .step-dot {
    width: 24px; height: 24px;
    border-radius: 50%;
    border: 2px solid ${theme.mist};
    display: flex; align-items: center; justify-content: center;
    font-size: 10px;
    background: white;
    color: ${theme.clay};
    flex-shrink: 0;
  }
  .step.done .step-dot { background: ${theme.sage}; border-color: ${theme.sage}; color: white; }
  .step.active .step-dot { background: ${theme.bark}; border-color: ${theme.bark}; color: white; }
  .step-line {
    height: 2px; width: 48px; background: ${theme.mist}; flex-shrink: 0; margin: 0 4px;
  }
  .step-line.done { background: ${theme.sage}; }

  /* SCREEN WRAPPER */
  .screen { padding: 0 32px 48px; max-width: 1100px; margin: 0 auto; width: 100%; }

  /* SEARCH SCREEN */
  .search-hero {
    text-align: center;
    padding: 60px 0 40px;
  }
  .search-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: 42px;
    font-weight: 700;
    color: ${theme.bark};
    margin-bottom: 12px;
    line-height: 1.2;
  }
  .search-hero p {
    color: ${theme.clay};
    font-size: 16px;
    margin-bottom: 36px;
  }
  .search-box-wrap {
    display: flex;
    gap: 0;
    max-width: 620px;
    margin: 0 auto 16px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(92,61,46,0.12);
    border: 2px solid transparent;
    transition: border-color 0.2s;
  }
  .search-box-wrap:focus-within { border-color: ${theme.sienna}; }
  .search-input {
    flex: 1;
    padding: 16px 20px;
    font-size: 15px;
    font-family: 'DM Sans', sans-serif;
    border: none;
    outline: none;
    background: white;
    color: ${theme.ink};
  }
  .search-btn {
    padding: 16px 28px;
    background: ${theme.bark};
    color: white;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    transition: background 0.2s;
  }
  .search-btn:hover { background: ${theme.sienna}; }
  .search-chips { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-top: 16px; }
  .chip {
    padding: 6px 14px;
    border-radius: 20px;
    border: 1px solid ${theme.mist};
    font-size: 12px;
    color: ${theme.bark};
    cursor: pointer;
    background: white;
    transition: all 0.2s;
  }
  .chip:hover { border-color: ${theme.sienna}; background: ${theme.amberLight}; }

  /* CARD */
  .card {
    background: white;
    border-radius: 14px;
    border: 1px solid ${theme.mist};
    overflow: hidden;
  }
  .card-header {
    padding: 20px 24px;
    border-bottom: 1px solid ${theme.mist};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-title {
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    font-weight: 600;
    color: ${theme.bark};
  }
  .card-body { padding: 24px; }

  /* JOB TEMPLATE */
  .template-section { margin-bottom: 28px; }
  .section-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${theme.clay};
    margin-bottom: 12px;
  }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
  .form-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px; }
  .field { display: flex; flex-direction: column; gap: 6px; }
  .field label { font-size: 12px; font-weight: 500; color: ${theme.bark}; }
  .field input, .field select, .field textarea {
    padding: 10px 14px;
    border-radius: 8px;
    border: 1.5px solid ${theme.mist};
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    color: ${theme.ink};
    background: white;
    outline: none;
    transition: border-color 0.2s;
  }
  .field input:focus, .field select:focus, .field textarea:focus { border-color: ${theme.sienna}; }
  .field textarea { resize: vertical; min-height: 80px; }
  .required-badge {
    font-size: 10px;
    background: ${theme.amberLight};
    color: ${theme.amber};
    padding: 2px 7px;
    border-radius: 10px;
    font-weight: 600;
  }
  .nudge-box {
    background: ${theme.amberLight};
    border: 1px solid #F0C060;
    border-radius: 10px;
    padding: 14px 18px;
    display: flex;
    gap: 12px;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  .nudge-icon { font-size: 18px; flex-shrink: 0; }
  .nudge-text { font-size: 13px; color: #7A4F00; line-height: 1.5; }
  .nudge-text strong { display: block; margin-bottom: 2px; }
  .photo-upload {
    border: 2px dashed ${theme.mist};
    border-radius: 10px;
    padding: 28px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s;
  }
  .photo-upload:hover { border-color: ${theme.sienna}; }
  .photo-upload p { font-size: 13px; color: ${theme.clay}; margin-top: 8px; }

  /* REVIEW */
  .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .review-item { padding: 14px 18px; background: ${theme.sand}; border-radius: 10px; }
  .review-item-label { font-size: 11px; color: ${theme.clay}; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
  .review-item-value { font-size: 14px; color: ${theme.ink}; font-weight: 500; }
  .broadcast-box {
    margin-top: 24px;
    background: ${theme.sageLight};
    border: 1px solid #B8D9BB;
    border-radius: 12px;
    padding: 18px 22px;
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .broadcast-icon { font-size: 28px; }
  .broadcast-text h4 { font-size: 14px; font-weight: 600; color: #2D6B32; margin-bottom: 3px; }
  .broadcast-text p { font-size: 12px; color: #4A9950; }
  .vendor-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px; }
  .vendor-tag {
    padding: 4px 12px;
    background: white;
    border: 1px solid #B8D9BB;
    border-radius: 20px;
    font-size: 12px;
    color: #2D6B32;
  }

  /* QUOTES */
  .quotes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .quote-card {
    background: white;
    border-radius: 14px;
    border: 2px solid ${theme.mist};
    overflow: hidden;
    transition: all 0.25s;
    cursor: pointer;
    position: relative;
  }
  .quote-card:hover { border-color: ${theme.sienna}; box-shadow: 0 8px 32px rgba(160,112,74,0.15); transform: translateY(-2px); }
  .quote-card.recommended { border-color: ${theme.sage}; }
  .recommended-badge {
    position: absolute;
    top: 12px; right: 12px;
    background: ${theme.sage};
    color: white;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 4px 10px;
    border-radius: 20px;
  }
  .quote-vendor-header {
    padding: 20px;
    border-bottom: 1px solid ${theme.mist};
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .vendor-logo {
    width: 44px; height: 44px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
  }
  .vendor-name { font-weight: 600; font-size: 14px; color: ${theme.ink}; }
  .vendor-sub { font-size: 12px; color: ${theme.clay}; margin-top: 2px; }
  .stars { display: flex; gap: 2px; align-items: center; margin-top: 4px; }
  .star-fill { color: ${theme.star}; font-size: 12px; }
  .star-count { font-size: 11px; color: ${theme.clay}; margin-left: 4px; }
  .quote-body { padding: 20px; }
  .price-row { display: flex; align-items: baseline; gap: 6px; margin-bottom: 14px; }
  .price-main { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: ${theme.bark}; }
  .price-sub { font-size: 12px; color: ${theme.clay}; }
  .quote-detail { font-size: 12px; color: ${theme.bark}; margin-bottom: 6px; display: flex; gap: 8px; }
  .quote-detail-icon { color: ${theme.clay}; width: 14px; text-align: center; }
  .quote-footer { padding: 14px 20px; border-top: 1px solid ${theme.mist}; display: flex; gap: 8px; }
  .btn-primary {
    flex: 1;
    padding: 10px;
    background: ${theme.bark};
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: background 0.2s;
  }
  .btn-primary:hover { background: ${theme.sienna}; }
  .btn-outline {
    padding: 10px 14px;
    background: white;
    color: ${theme.bark};
    border: 1.5px solid ${theme.mist};
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.2s;
  }
  .btn-outline:hover { border-color: ${theme.sienna}; background: ${theme.amberLight}; }
  .btn-large {
    padding: 14px 32px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.2s;
  }

  /* VENDOR PROFILE */
  .profile-hero {
    background: linear-gradient(135deg, ${theme.bark} 0%, ${theme.sienna} 100%);
    border-radius: 14px;
    padding: 28px;
    color: white;
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 24px;
  }
  .profile-avatar {
    width: 72px; height: 72px; border-radius: 14px;
    background: rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    font-size: 32px;
    flex-shrink: 0;
  }
  .profile-name { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; }
  .profile-tag { font-size: 13px; opacity: 0.75; margin-top: 4px; }
  .profile-stats { display: flex; gap: 28px; margin-top: 14px; }
  .profile-stat-val { font-size: 22px; font-weight: 700; font-family: 'Playfair Display', serif; }
  .profile-stat-key { font-size: 11px; opacity: 0.65; text-transform: uppercase; letter-spacing: 0.5px; }
  .verified-badge {
    margin-left: auto;
    background: rgba(122,158,126,0.25);
    border: 1px solid rgba(122,158,126,0.5);
    color: #A8E6AB;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    display: flex; align-items: center; gap: 6px;
    align-self: flex-start;
  }
  .profile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .review-row {
    padding: 16px 0;
    border-bottom: 1px solid ${theme.mist};
  }
  .review-row:last-child { border-bottom: none; }
  .review-header { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .reviewer-avatar {
    width: 32px; height: 32px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 600; color: white;
    flex-shrink: 0;
  }
  .reviewer-name { font-size: 13px; font-weight: 600; color: ${theme.ink}; }
  .review-date { font-size: 11px; color: ${theme.clay}; margin-left: auto; }
  .review-text { font-size: 13px; color: #555; line-height: 1.6; }
  .past-job-row {
    display: flex; align-items: center; gap: 14px;
    padding: 12px 0;
    border-bottom: 1px solid ${theme.mist};
  }
  .past-job-row:last-child { border-bottom: none; }
  .job-icon {
    width: 36px; height: 36px; border-radius: 8px;
    background: ${theme.sand};
    display: flex; align-items: center; justify-content: center;
    font-size: 16px;
    flex-shrink: 0;
  }
  .job-name { font-size: 13px; font-weight: 500; color: ${theme.ink}; }
  .job-meta { font-size: 11px; color: ${theme.clay}; margin-top: 2px; }
  .job-price { margin-left: auto; font-weight: 600; color: ${theme.bark}; font-size: 14px; }
  .tag-row { display: flex; gap: 8px; flex-wrap: wrap; }
  .skill-tag {
    padding: 5px 12px;
    background: ${theme.sand};
    border-radius: 20px;
    font-size: 12px;
    color: ${theme.bark};
    font-weight: 500;
  }

  /* PAGE ACTION BAR */
  .action-bar {
    position: sticky;
    bottom: 0;
    background: white;
    border-top: 1px solid ${theme.mist};
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 50;
    box-shadow: 0 -4px 16px rgba(0,0,0,0.04);
  }
  .action-bar-left { font-size: 13px; color: ${theme.clay}; }
  .action-bar-right { display: flex; gap: 12px; }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.4s ease forwards; }
  .fade-up-delay-1 { animation: fadeUp 0.4s 0.05s ease both; }
  .fade-up-delay-2 { animation: fadeUp 0.4s 0.1s ease both; }
  .fade-up-delay-3 { animation: fadeUp 0.4s 0.15s ease both; }
  .fade-up-delay-4 { animation: fadeUp 0.4s 0.2s ease both; }
  .fade-up-delay-5 { animation: fadeUp 0.4s 0.25s ease both; }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  .searching { animation: pulse 1.2s infinite; }

  /* DIVIDER */
  .divider { height: 1px; background: ${theme.mist}; margin: 20px 0; }

  /* COMPARE BANNER */
  .compare-banner {
    background: ${theme.sand};
    border: 1px solid ${theme.mist};
    border-radius: 10px;
    padding: 14px 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
  }
  .compare-banner strong { color: ${theme.bark}; }
`;

const STEPS = [
  { label: "Search" },
  { label: "Job Template" },
  { label: "Review Order" },
  { label: "Compare Quotes" },
  { label: "Vendor Profile" },
];

function Stars({ rating }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className="star-fill">{s <= Math.round(rating) ? "★" : "☆"}</span>
      ))}
      <span className="star-count">{rating}</span>
    </div>
  );
}

function StepBar({ current }) {
  return (
    <div className="steps-bar">
      {STEPS.map((s, i) => (
        <div key={s.label} style={{ display: "flex", alignItems: "center" }}>
          <div className={`step ${i < current ? "done" : i === current ? "active" : ""}`}>
            <div className="step-dot">
              {i < current ? "✓" : i + 1}
            </div>
            <span style={{ whiteSpace: "nowrap" }}>{s.label}</span>
          </div>
          {i < STEPS.length - 1 && <div className={`step-line ${i < current ? "done" : ""}`} />}
        </div>
      ))}
    </div>
  );
}

// ─── SCREEN 1: SEARCH ────────────────────────────────────────────────────────
function SearchScreen({ onSearch }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (q) => {
    const term = q || query;
    if (!term.trim()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); onSearch(term); }, 1200);
  };

  return (
    <div className="screen">
      <div className="search-hero fade-up">
        <h1>What job do you<br />need done today?</h1>
        <p>Describe your project and we'll match you with verified vendors instantly.</p>
        <div className="search-box-wrap">
          <input
            className="search-input"
            placeholder="e.g. Floor Tiling Job, Plumbing Repair, Interior Painting…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSearch()}
          />
          <button className="search-btn" onClick={() => handleSearch()}>
            {loading ? <span className="searching">Finding…</span> : "Search →"}
          </button>
        </div>
        <div className="search-chips">
          {["Floor Tiling", "Electrical Work", "Plumbing", "Painting", "Carpentry", "HVAC Service"].map(t => (
            <button key={t} className="chip" onClick={() => { setQuery(t); handleSearch(t); }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "40px" }}>
        {[
          { icon: "🔒", title: "Verified Vendors Only", desc: "Every vendor is background-checked and licensed." },
          { icon: "💬", title: "Smart Job Templates", desc: "We ask the right questions so vendors give accurate quotes." },
          { icon: "⚡", title: "Fast Matching", desc: "Receive multiple competitive quotes within hours." },
        ].map((f, i) => (
          <div key={f.title} className={`card fade-up-delay-${i + 2}`} style={{ padding: "22px" }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>{f.icon}</div>
            <div style={{ fontWeight: 600, color: theme.bark, marginBottom: 6 }}>{f.title}</div>
            <div style={{ fontSize: 13, color: theme.clay, lineHeight: 1.6 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SCREEN 2: JOB TEMPLATE ──────────────────────────────────────────────────
function JobTemplateScreen({ onNext, onBack }) {
  return (
    <>
      <div className="screen">
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: theme.bark, marginBottom: 6 }} className="fade-up">
            Floor Tiling Job Template
          </div>
          <div style={{ fontSize: 14, color: theme.clay }} className="fade-up-delay-1">
            Help vendors understand your project clearly to get the most accurate quotes.
          </div>
        </div>

        <div className="nudge-box fade-up-delay-1">
          <span className="nudge-icon">💡</span>
          <div className="nudge-text">
            <strong>Vendor Tip: Fill in as much detail as possible</strong>
            Vendors have flagged that incomplete job details lead to inaccurate quotes. The more you share, the better your offers will be.
          </div>
        </div>

        <div className="card fade-up-delay-2">
          <div className="card-header">
            <span className="card-title">📐 Room & Area Details</span>
            <span className="required-badge">Required</span>
          </div>
          <div className="card-body">
            <div className="form-row">
              <div className="field">
                <label>Room Type</label>
                <select defaultValue="bathroom">
                  <option value="bathroom">Bathroom</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="living">Living Room</option>
                  <option value="outdoor">Outdoor / Patio</option>
                  <option value="bedroom">Bedroom</option>
                </select>
              </div>
              <div className="field">
                <label>Total Area (sqft)</label>
                <input type="number" defaultValue="180" placeholder="e.g. 200" />
              </div>
            </div>
            <div className="form-row-3">
              <div className="field">
                <label>Room Length (ft)</label>
                <input type="number" defaultValue="15" />
              </div>
              <div className="field">
                <label>Room Width (ft)</label>
                <input type="number" defaultValue="12" />
              </div>
              <div className="field">
                <label>Ceiling Height (ft)</label>
                <input type="number" defaultValue="9" />
              </div>
            </div>
            <div className="field">
              <label>Any irregular shapes or obstacles? (columns, steps, etc.)</label>
              <textarea defaultValue="There are two small columns near the entrance, roughly 1ft x 1ft each." />
            </div>
          </div>
        </div>

        <div className="card fade-up-delay-3" style={{ marginTop: 16 }}>
          <div className="card-header">
            <span className="card-title">🪨 Tile Preferences</span>
            <span className="required-badge">Required</span>
          </div>
          <div className="card-body">
            <div className="form-row">
              <div className="field">
                <label>Tile Material</label>
                <select defaultValue="ceramic">
                  <option value="ceramic">Ceramic</option>
                  <option value="porcelain">Porcelain</option>
                  <option value="marble">Marble</option>
                  <option value="travertine">Travertine</option>
                  <option value="vinyl">Vinyl / LVT</option>
                  <option value="unsure">Not sure — need advice</option>
                </select>
              </div>
              <div className="field">
                <label>Tile Size (inches)</label>
                <select defaultValue="24x24">
                  <option value="12x12">12 × 12</option>
                  <option value="18x18">18 × 18</option>
                  <option value="24x24">24 × 24</option>
                  <option value="custom">Custom / Mosaic</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>Tile Pattern</label>
                <select defaultValue="straight">
                  <option value="straight">Straight / Grid</option>
                  <option value="diagonal">Diagonal / 45°</option>
                  <option value="herringbone">Herringbone</option>
                  <option value="offset">Brick Offset</option>
                </select>
              </div>
              <div className="field">
                <label>Do you already have tiles?</label>
                <select defaultValue="no">
                  <option value="yes">Yes, I have them</option>
                  <option value="no">No, vendor to supply</option>
                  <option value="partial">Partially — need extras</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>Grout Colour Preference</label>
              <input defaultValue="Light grey, matching tile tone" />
            </div>
          </div>
        </div>

        <div className="card fade-up-delay-4" style={{ marginTop: 16 }}>
          <div className="card-header">
            <span className="card-title">🔧 Current Floor Condition</span>
          </div>
          <div className="card-body">
            <div className="form-row">
              <div className="field">
                <label>Existing Floor Type</label>
                <select defaultValue="old-tile">
                  <option value="concrete">Bare Concrete</option>
                  <option value="old-tile">Old Tiles (removal needed)</option>
                  <option value="wood">Wooden Subfloor</option>
                  <option value="vinyl">Existing Vinyl</option>
                </select>
              </div>
              <div className="field">
                <label>Is subfloor levelling needed?</label>
                <select defaultValue="unsure">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">Not sure — vendor to assess</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label>Additional Notes for Vendors</label>
              <textarea defaultValue="The old tiles are cracked in some areas. Access to the apartment is from 8am–6pm on weekdays only." />
            </div>
          </div>
        </div>

        <div className="card fade-up-delay-5" style={{ marginTop: 16 }}>
          <div className="card-header">
            <span className="card-title">📸 Upload Site Photos</span>
          </div>
          <div className="card-body">
            <div className="photo-upload">
              <div style={{ fontSize: 32 }}>📷</div>
              <p>Drag & drop photos or click to browse</p>
              <p style={{ fontSize: 11, marginTop: 4 }}>JPG, PNG up to 10MB each · Max 8 photos</p>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 16, padding: 20 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ fontSize: 22 }}>📅</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, color: theme.bark, marginBottom: 12, fontSize: 15 }}>Timeline & Budget</div>
              <div className="form-row">
                <div className="field">
                  <label>Preferred Start Date</label>
                  <input type="date" defaultValue="2026-03-20" />
                </div>
                <div className="field">
                  <label>Budget Range (₹)</label>
                  <select defaultValue="25k-50k">
                    <option value="under-15k">Under ₹15,000</option>
                    <option value="15k-25k">₹15,000 – ₹25,000</option>
                    <option value="25k-50k">₹25,000 – ₹50,000</option>
                    <option value="50k+">₹50,000+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="action-bar">
        <span className="action-bar-left">Step 2 of 5 · Floor Tiling Job Template</span>
        <div className="action-bar-right">
          <button className="btn-outline btn-large" onClick={onBack}>← Back</button>
          <button className="btn-primary btn-large" onClick={onNext}>Review Job Order →</button>
        </div>
      </div>
    </>
  );
}

// ─── SCREEN 3: REVIEW ORDER ──────────────────────────────────────────────────
function ReviewScreen({ onNext, onBack }) {
  return (
    <>
      <div className="screen">
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: theme.bark, marginBottom: 6 }} className="fade-up">
            Review Your Job Order
          </div>
          <div style={{ fontSize: 14, color: theme.clay }} className="fade-up-delay-1">
            This is what vendors will see when they receive your job. Confirm all details before broadcasting.
          </div>
        </div>

        <div className="card fade-up-delay-2">
          <div className="card-header">
            <span className="card-title">📋 Job Summary</span>
            <button className="btn-outline" style={{ fontSize: 12, padding: "6px 12px" }}>✏️ Edit</button>
          </div>
          <div className="card-body">
            <div className="review-grid">
              {[
                { label: "Job Type", value: "Floor Tiling" },
                { label: "Room Type", value: "Bathroom" },
                { label: "Total Area", value: "180 sqft (15 × 12 ft)" },
                { label: "Tile Material", value: "Porcelain" },
                { label: "Tile Size", value: "24 × 24 inches" },
                { label: "Tile Pattern", value: "Straight / Grid" },
                { label: "Existing Floor", value: "Old Tiles (removal needed)" },
                { label: "Tiles Supplied By", value: "Vendor to supply" },
                { label: "Grout Colour", value: "Light grey" },
                { label: "Subfloor Levelling", value: "Vendor to assess" },
                { label: "Preferred Start", value: "20 March 2026" },
                { label: "Budget Range", value: "₹25,000 – ₹50,000" },
              ].map(item => (
                <div key={item.label} className="review-item">
                  <div className="review-item-label">{item.label}</div>
                  <div className="review-item-value">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="divider" />
            <div style={{ fontWeight: 600, color: theme.bark, marginBottom: 10, fontSize: 14 }}>📝 Additional Notes</div>
            <div style={{ fontSize: 13, color: "#555", background: theme.sand, borderRadius: 8, padding: "12px 16px", lineHeight: 1.7 }}>
              The old tiles are cracked in some areas. There are two small columns near the entrance (~1 ft × 1 ft each). Access to the apartment is from 8am–6pm on weekdays only.
            </div>

            <div className="divider" />
            <div style={{ fontWeight: 600, color: theme.bark, marginBottom: 10, fontSize: 14 }}>📸 Attached Photos</div>
            <div style={{ display: "flex", gap: 10 }}>
              {["🚿", "🪞", "🚪"].map((e, i) => (
                <div key={i} style={{ width: 80, height: 80, background: theme.sand, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>{e}</div>
              ))}
              <div style={{ width: 80, height: 80, border: `2px dashed ${theme.mist}`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: theme.clay }}>+</div>
            </div>
          </div>
        </div>

        <div className="broadcast-box fade-up-delay-3">
          <div className="broadcast-icon">📡</div>
          <div className="broadcast-text">
            <h4>Ready to Broadcast to Vendors</h4>
            <p>Your job will be sent to all verified tiling vendors in your area.</p>
            <div className="vendor-tags">
              {["TileKing Pro", "Urban Tiles & Co.", "MasterFloor Works", "Pune Tile Experts", "+ 14 more vendors"].map(v => (
                <span key={v} className="vendor-tag">{v}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="card fade-up-delay-4" style={{ marginTop: 16 }}>
          <div className="card-body" style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <input type="checkbox" defaultChecked id="agree" style={{ width: 16, height: 16 }} />
            <label htmlFor="agree" style={{ fontSize: 13, color: theme.bark, lineHeight: 1.6 }}>
              I confirm that the above details are accurate and I agree to Servzo's <span style={{ color: theme.sienna, textDecoration: "underline", cursor: "pointer" }}>Terms of Service</span> and <span style={{ color: theme.sienna, textDecoration: "underline", cursor: "pointer" }}>Vendor Engagement Policy</span>.
            </label>
          </div>
        </div>
      </div>

      <div className="action-bar">
        <span className="action-bar-left">Step 3 of 5 · Review & Broadcast</span>
        <div className="action-bar-right">
          <button className="btn-outline btn-large" onClick={onBack}>← Edit Details</button>
          <button className="btn-primary btn-large" onClick={onNext} style={{ background: theme.sage }}>📡 Broadcast to Vendors →</button>
        </div>
      </div>
    </>
  );
}

// ─── SCREEN 4: COMPARE QUOTES ─────────────────────────────────────────────────
function QuotesScreen({ onSelectVendor, onBack }) {
  const vendors = [
    {
      id: 1, name: "TileKing Pro", emoji: "👑", bg: "#FEF3DC",
      rating: 4.8, reviews: 312, jobs: 480,
      price: "₹38,500", eta: "2–3 days", warranty: "2-year workmanship",
      location: "Kothrud, Pune", verified: true, recommended: true,
      note: "Includes old tile removal & levelling. Premium grout included.",
    },
    {
      id: 2, name: "Urban Tiles & Co.", emoji: "🏙️", bg: "#EBF2EC",
      rating: 4.5, reviews: 187, jobs: 290,
      price: "₹34,200", eta: "3–4 days", warranty: "1-year workmanship",
      location: "Baner, Pune", verified: true, recommended: false,
      note: "Does not include tile supply. Customer to arrange tiles.",
    },
    {
      id: 3, name: "MasterFloor Works", emoji: "🔨", bg: "#EDE8FF",
      rating: 4.2, reviews: 94, jobs: 130,
      price: "₹29,000", eta: "5–7 days", warranty: "6-month workmanship",
      location: "Hadapsar, Pune", verified: false, recommended: false,
      note: "Budget-friendly option. Suitable for straightforward jobs.",
    },
  ];

  return (
    <>
      <div className="screen">
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: theme.bark, marginBottom: 6 }} className="fade-up">
            Vendor Quotes Received
          </div>
          <div style={{ fontSize: 14, color: theme.clay }} className="fade-up-delay-1">
            3 vendors responded to your Floor Tiling job · Compare and choose the best fit.
          </div>
        </div>

        <div className="compare-banner fade-up-delay-1">
          <span>Comparing quotes for: <strong>Floor Tiling · 180 sqft · Bathroom · Porcelain 24×24</strong></span>
          <span style={{ color: theme.clay }}>Posted 2 hrs ago</span>
        </div>

        <div className="quotes-grid">
          {vendors.map((v, i) => (
            <div key={v.id} className={`quote-card fade-up-delay-${i + 2} ${v.recommended ? "recommended" : ""}`}>
              {v.recommended && <div className="recommended-badge">✦ Best Match</div>}
              <div className="quote-vendor-header">
                <div className="vendor-logo" style={{ background: v.bg }}>{v.emoji}</div>
                <div>
                  <div className="vendor-name">{v.name}</div>
                  <div className="vendor-sub">{v.location}</div>
                  <Stars rating={v.rating} />
                </div>
              </div>
              <div className="quote-body">
                <div className="price-row">
                  <span className="price-main">{v.price}</span>
                  <span className="price-sub">all-in estimate</span>
                </div>
                {[
                  { icon: "⏱", text: `Lead time: ${v.eta}` },
                  { icon: "🛡", text: `Warranty: ${v.warranty}` },
                  { icon: `${v.verified ? "✅" : "⚠️"}`, text: v.verified ? "Identity Verified" : "Not yet verified" },
                  { icon: "💼", text: `${v.jobs} completed jobs` },
                ].map((d, j) => (
                  <div key={j} className="quote-detail">
                    <span className="quote-detail-icon">{d.icon}</span>
                    <span>{d.text}</span>
                  </div>
                ))}
                <div style={{ fontSize: 12, color: "#888", background: theme.sand, borderRadius: 6, padding: "8px 10px", marginTop: 10, lineHeight: 1.5 }}>
                  {v.note}
                </div>
              </div>
              <div className="quote-footer">
                <button className="btn-primary" onClick={() => onSelectVendor(v)}>Accept Quote</button>
                <button className="btn-outline" onClick={() => onSelectVendor(v)}>View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="action-bar">
        <span className="action-bar-left">Step 4 of 5 · 3 Quotes Received</span>
        <div className="action-bar-right">
          <button className="btn-outline btn-large" onClick={onBack}>← Back</button>
        </div>
      </div>
    </>
  );
}

// ─── SCREEN 5: VENDOR PROFILE ─────────────────────────────────────────────────
function VendorProfileScreen({ vendor, onBack }) {
  const reviews = [
    { name: "Ananya S.", color: "#A0704A", rating: 5, date: "Feb 2026", text: "Absolutely immaculate work. The tiles are perfectly aligned and the grouting is flawless. TileKing Pro finished ahead of schedule and cleaned up completely. Will hire again without question." },
    { name: "Rahul M.", color: "#5C8A6B", rating: 5, date: "Jan 2026", text: "Very professional team. They noticed a drainage slope issue the previous contractor had missed and fixed it as part of the job. The bathroom looks brand new." },
    { name: "Priya K.", color: "#7B63A0", rating: 4, date: "Dec 2025", text: "Great quality tiles and neat finish. Communication was good throughout. Minor delay on day 2 due to material delivery but they made up for it on day 3." },
  ];
  const pastJobs = [
    { icon: "🚿", name: "Master Bathroom Tiling — Koregaon Park", meta: "Porcelain 24×24 · 220 sqft · Mar 2026", price: "₹44,000" },
    { icon: "🍳", name: "Kitchen Floor & Backsplash — Baner", meta: "Ceramic Mosaic · 310 sqft · Feb 2026", price: "₹61,500" },
    { icon: "🏊", name: "Outdoor Pool Deck Tiling — Viman Nagar", meta: "Non-slip Travertine · 480 sqft · Jan 2026", price: "₹1,12,000" },
    { icon: "🏢", name: "Commercial Lobby — Hinjewadi IT Park", meta: "Marble 600×600 · 1200 sqft · Dec 2025", price: "₹2,80,000" },
  ];

  return (
    <>
      <div className="screen">
        <div className="profile-hero fade-up">
          <div className="profile-avatar">{vendor.emoji}</div>
          <div style={{ flex: 1 }}>
            <div className="profile-name">{vendor.name}</div>
            <div className="profile-tag">Tiling & Flooring Specialist · {vendor.location}</div>
            <div className="profile-stats">
              <div>
                <div className="profile-stat-val">{vendor.rating}</div>
                <div className="profile-stat-key">Rating</div>
              </div>
              <div>
                <div className="profile-stat-val">{vendor.reviews}</div>
                <div className="profile-stat-key">Reviews</div>
              </div>
              <div>
                <div className="profile-stat-val">{vendor.jobs}</div>
                <div className="profile-stat-key">Jobs Done</div>
              </div>
              <div>
                <div className="profile-stat-val">5 yrs</div>
                <div className="profile-stat-key">On Servzo</div>
              </div>
            </div>
          </div>
          {vendor.verified && (
            <div className="verified-badge">✓ Identity Verified</div>
          )}
        </div>

        <div className="profile-grid">
          {/* Reviews */}
          <div className="card fade-up-delay-2" style={{ gridColumn: "1 / -1" }}>
            <div className="card-header">
              <span className="card-title">⭐ Customer Reviews</span>
              <Stars rating={vendor.rating} />
            </div>
            <div className="card-body" style={{ paddingTop: 8 }}>
              {reviews.map(r => (
                <div key={r.name} className="review-row">
                  <div className="review-header">
                    <div className="reviewer-avatar" style={{ background: r.color }}>{r.name[0]}</div>
                    <div>
                      <div className="reviewer-name">{r.name}</div>
                      <Stars rating={r.rating} />
                    </div>
                    <div className="review-date">{r.date}</div>
                  </div>
                  <div className="review-text">{r.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Jobs */}
          <div className="card fade-up-delay-3">
            <div className="card-header">
              <span className="card-title">💼 Past Jobs</span>
            </div>
            <div className="card-body" style={{ paddingTop: 8 }}>
              {pastJobs.map(j => (
                <div key={j.name} className="past-job-row">
                  <div className="job-icon">{j.icon}</div>
                  <div>
                    <div className="job-name">{j.name}</div>
                    <div className="job-meta">{j.meta}</div>
                  </div>
                  <div className="job-price">{j.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div className="card fade-up-delay-4">
            <div className="card-header">
              <span className="card-title">🔖 Credentials & Skills</span>
            </div>
            <div className="card-body">
              <div className="section-label" style={{ marginBottom: 10 }}>Certifications</div>
              {[
                { icon: "📜", label: "CIBSE Certified Tile Installer" },
                { icon: "🛡", label: "Servzo Identity Verified" },
                { icon: "💰", label: "GST Registered Business" },
                { icon: "🔒", label: "Insured up to ₹10 Lakhs" },
              ].map(c => (
                <div key={c.label} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{ fontSize: 16 }}>{c.icon}</span>
                  <span style={{ fontSize: 13, color: theme.bark }}>{c.label}</span>
                </div>
              ))}

              <div className="divider" />
              <div className="section-label" style={{ marginBottom: 10 }}>Specialisations</div>
              <div className="tag-row">
                {["Porcelain", "Marble", "Mosaic", "Herringbone", "Outdoor Tiling", "Bathroom Waterproofing", "Subfloor Levelling", "Grout Sealing"].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>

              <div className="divider" />
              <div className="section-label" style={{ marginBottom: 10 }}>Service Area</div>
              <div style={{ fontSize: 13, color: theme.bark, lineHeight: 1.7 }}>
                📍 Kothrud · Baner · Aundh · Wakad · Hinjewadi · Koregaon Park · Kalyani Nagar · Viman Nagar
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="action-bar">
        <span className="action-bar-left">Step 5 of 5 · TileKing Pro · Verified Vendor</span>
        <div className="action-bar-right">
          <button className="btn-outline btn-large" onClick={onBack}>← Back to Quotes</button>
          <button className="btn-primary btn-large" style={{ background: theme.sage }}>✅ Accept This Quote</button>
        </div>
      </div>
    </>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState(0);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const topRef = useRef(null);

  const go = (n) => {
    setScreen(n);
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <>
      <style>{fonts}{css}</style>
      <div className="app" ref={topRef}>
        {/* TOPBAR */}
        <div className="topbar">
          <div className="logo">Serv<span>zo</span></div>
          <div className="nav-pills">
            {["Dashboard", "My Jobs", "Messages", "Vendors"].map((n, i) => (
              <button key={n} className={`nav-pill ${i === 1 ? "active" : ""}`}>{n}</button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 13, color: theme.clay }}>Arjun Mehta</div>
            <div className="avatar">AM</div>
          </div>
        </div>

        {/* BREADCRUMB + STEPS */}
        {screen > 0 && (
          <>
            <div className="breadcrumb">
              <span style={{ cursor: "pointer" }} onClick={() => go(0)}>Home</span>
              <span className="breadcrumb-sep">›</span>
              <span style={{ cursor: "pointer" }} onClick={() => go(0)}>Post a Job</span>
              <span className="breadcrumb-sep">›</span>
              <span className="breadcrumb-current">{["Search", "Job Template", "Review Order", "Compare Quotes", "Vendor Profile"][screen]}</span>
            </div>
            <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", paddingLeft: 32 }}>
              <StepBar current={screen} />
            </div>
          </>
        )}

        {/* SCREENS */}
        {screen === 0 && <SearchScreen onSearch={() => go(1)} />}
        {screen === 1 && <JobTemplateScreen onNext={() => go(2)} onBack={() => go(0)} />}
        {screen === 2 && <ReviewScreen onNext={() => go(3)} onBack={() => go(1)} />}
        {screen === 3 && <QuotesScreen onSelectVendor={(v) => { setSelectedVendor(v); go(4); }} onBack={() => go(2)} />}
        {screen === 4 && selectedVendor && <VendorProfileScreen vendor={selectedVendor} onBack={() => go(3)} />}
      </div>
    </>
  );
}
