<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Creative Economy Scorecard ⚡ — Free State Arts Data Tool | Mini Business Intelligence Tool</title>
<meta name="description" content="The creative economy employs 50M+ people and grows at 2× the U.S. growth rate. ⚡ Measure your state against the national average.">
<meta name="author" content="Knowledge on Tap">
<link rel="canonical" href="https://creative-economies.vercel.app">
<meta property="og:type" content="website">
<meta property="og:url" content="https://creative-economies.vercel.app">
<meta property="og:title" content="Creative Economy Scorecard ⚡ — Free State Arts Data Tool | Mini Business Intelligence Tool">
<meta property="og:description" content="The creative economy employs 50M+ people and grows at 2× the U.S. growth rate. ⚡ Measure your state against the national average.">
<meta property="og:site_name" content="Knowledge on Tap">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Creative Economy Scorecard ⚡ — Free State Arts Data Tool | Mini Business Intelligence Tool">
<meta name="twitter:description" content="The creative economy employs 50M+ people and grows at 2× the U.S. growth rate. ⚡ Measure your state against the national average.">
<link rel="icon" type="image/svg+xml" href="/public/favicon.svg">
<meta name="p:domain_verify" content="9921e493445e449a3a36e7bf152b8a2e">
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PC2BG949');</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6KP11HKDTE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-6KP11HKDTE');
</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;1,9..144,300&family=Plus+Jakarta+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<script src="/data/bea_data.js"></script>
<script src="/data/nasaa_data.js"></script>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#1a1a18;
  --surface:#242422;
  --surface2:#2e2e2b;
  --border:rgba(255,255,255,0.08);
  --border2:rgba(255,255,255,0.14);
  --text:#f0ede8;
  --muted:#8a8a84;
  --accent:#be3650;
  --crimson:#861442;
  --font-display:'Fraunces',Georgia,serif;
  --font-body:'Plus Jakarta Sans',sans-serif;
}
body{background:var(--bg);color:var(--text);font-family:var(--font-body);font-weight:300;min-height:100vh;overflow-x:hidden}

/* HEADER */
/* NAV — v4 spec */
.kot-nav{width:100%;background:#111110;padding:1.75rem clamp(16px,4vw,2rem) 1.25rem;border-bottom:none;}
.kot-nav-inner{display:flex;flex-direction:column;gap:8px;}
.kot-nav-title{font-family:var(--font-display);font-size:24px;color:#f0ede8;line-height:1.1;}
.kot-nav-title strong{font-weight:700;color:#f0ede8;}
.kot-nav-title em{font-weight:300;font-style:italic;color:#be3650;}
.kot-nav-sub{font-family:var(--font-body);font-size:14px;font-weight:300;line-height:1.8;color:#f0ede8;margin-top:6px;}
.kot-crimson-rule{height:1.5px;background:rgba(134,20,66,0.5);margin-top:1.75rem;}

/* HERO IMAGE */
.kot-hero-image-wrap{max-width:860px;margin:0 auto;}
.kot-hero-image{
  width:100%;height:240px;
  background-image:url('/public/hero-creative-economies.jpg');
  background-size:cover;background-position:center 40%;
  position:relative;overflow:hidden;
}
.kot-hero-image::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(to bottom,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.55) 100%);
}

/* DIMENSION BAR */
.kot-dim-bar{
  background:#111110;
  display:flex;align-items:center;
  border-bottom:1px solid rgba(255,255,255,0.06);
}
.kot-dim-col{
  flex:1;padding:1rem clamp(12px,2vw,1.5rem);
  text-align:center;
}
.kot-dim-val{
  font-family:var(--font-display);font-weight:300;font-style:italic;
  font-size:1.3rem;color:#f0ede8;line-height:1;margin-bottom:4px;
}
.kot-dim-label{
  font-family:var(--font-body);font-size:10px;font-weight:500;
  text-transform:uppercase;letter-spacing:0.12em;color:#f0ede8;opacity:0.7;
  line-height:1.6;
}
.kot-dim-pipe{
  width:1px;height:28px;background:rgba(255,255,255,0.12);flex-shrink:0;
}

/* SELECTOR ZONE */
.selector-zone{
  padding:2.5rem 2rem 2rem;
  max-width:720px;margin:0 auto;
}
.selector-head{
  text-align:center;margin-bottom:1.8rem;
}
.selector-head h3{
  font-family:var(--font-display);font-weight:300;font-size:24px;
  letter-spacing:-0.02em;margin-bottom:6px;
}
.selector-head h3 em{font-style:italic;color:var(--accent)}
.selector-head p{font-size:0.72rem;color:var(--muted);line-height:1.7}

.selectors{display:flex;flex-direction:column;gap:10px;margin-bottom:1.5rem}

.sel-row{
  display:flex;align-items:center;gap:10px;
}
.sel-num{
  font-size:0.65rem;color:var(--muted);width:16px;flex-shrink:0;text-align:right;
}
.sel-num.required{color:var(--accent)}

select.state-pick{
  flex:1;
  background:var(--surface);
  border:1px solid var(--border2);
  color:var(--text);
  font-family:var(--font-body);
  font-size:0.82rem;
  padding:11px 14px;
  border-radius:10px;
  outline:none;
  cursor:pointer;
  transition:border-color 0.2s;
  appearance:none;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888580' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat:no-repeat;
  background-position:right 14px center;
  padding-right:36px;
}
select.state-pick:focus{border-color:var(--accent)}
select.state-pick.optional{border-color:var(--border);color:var(--muted)}
select.state-pick.optional:focus,
select.state-pick.optional:not([value=""]):not([data-empty="true"]){
  border-color:var(--border2);color:var(--text);
}
.sel-remove{
  background:none;border:none;color:var(--muted);cursor:pointer;
  font-size:1rem;padding:4px;line-height:1;
  transition:color 0.15s;flex-shrink:0;
  font-family:var(--font-body);
}
.sel-remove:hover{color:var(--accent)}
.sel-remove.hidden{visibility:hidden}

.add-state-btn{
  background:none;border:1px dashed var(--border2);
  color:var(--muted);font-family:var(--font-body);font-size:0.72rem;
  padding:9px 16px;border-radius:10px;cursor:pointer;
  width:calc(100% - 52px);text-align:center;
  transition:color 0.15s,border-color 0.15s;
  margin-left:26px;
}
.add-state-btn:hover{color:var(--accent);border-color:var(--accent)}
.add-state-btn.hidden{display:none}

/* RUN BUTTON */
.run-wrap{text-align:center;margin-top:1.2rem}
.btn-run{
  background:#861442;color:#fff;border:none;
  font-family:var(--font-body);font-size:0.82rem;font-weight:500;
  padding:13px 36px;border-radius:10px;cursor:pointer;
  letter-spacing:0.04em;transition:opacity 0.15s,transform 0.1s;
}
.btn-run:hover{opacity:0.88}
.btn-run:active{transform:scale(0.97)}
.btn-run:disabled{opacity:0.4;cursor:not-allowed}
.run-note{font-size:0.62rem;color:var(--muted);margin-top:8px}

/* DIVIDER */
.section-divider{
  border:none;border-top:1px solid var(--border);
  max-width:960px;margin:0 auto;
}

/* RESULT ZONE */
#result-zone{
  max-width:960px;margin:0 auto;
  padding:0 2rem 3rem;
  display:none;
}
#result-zone.visible{display:block}

/* LOADING STATE */
.loading-state{
  text-align:center;padding:3rem 2rem;
}
.loading-spinner{
  width:32px;height:32px;border:2px solid var(--border2);
  border-top-color:var(--accent);border-radius:50%;
  animation:spin 0.8s linear infinite;margin:0 auto 1rem;
}
@keyframes spin{to{transform:rotate(360deg)}}
.loading-text{font-size:0.72rem;color:var(--muted);line-height:1.8}
.loading-state-label{color:var(--accent);font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px}

/* RESULT CARDS — single state */
.result-single{animation:fadeUp 0.4s ease}
.result-header{
  padding:1.8rem 0 1.2rem;
  border-bottom:1px solid var(--border);
  display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:1rem;
  margin-bottom:1.2rem;
}
.result-state-name{
  font-family:var(--font-display);font-weight:300;
  font-size:2rem;letter-spacing:-0.02em;line-height:1;
}
.result-state-name em{font-style:italic;color:var(--accent)}
.result-meta{font-size:0.62rem;color:var(--muted);margin-top:6px;line-height:1.8}
.result-score-block{text-align:right}
.result-score-num{
  font-family:var(--font-display);font-style:italic;font-weight:300;
  font-size:4rem;line-height:1;
}
.result-score-sub{font-size:0.6rem;color:var(--muted);margin-top:2px}

/* DIM GRID */
.dim-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:1rem}
.dim-card{
  background:var(--surface);border:1px solid var(--border);
  border-radius:10px;padding:1rem;
}
.dim-label{font-size:0.58rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px}
.dim-score{
  font-size:1.8rem;font-weight:300;font-family:var(--font-display);
  font-style:italic;line-height:1;margin-bottom:6px;
}
.dim-bar{height:4px;background:rgba(255,255,255,0.06);border-radius:99px;overflow:hidden;margin-bottom:8px}
.dim-fill{height:100%;border-radius:99px}
.dim-note{font-size:0.6rem;color:var(--muted);line-height:1.6}

/* NARRATIVE BOX */
.narrative-box{
  background:var(--surface);
  border:1px solid var(--border);
  border-left:3px solid var(--accent);
  border-radius:0 10px 10px 0;
  padding:1.1rem 1.3rem;
  font-size:0.75rem;line-height:1.8;color:var(--muted);
  margin-bottom:1rem;
}
.narrative-box strong{color:var(--text)}

/* ARCHETYPE BADGE */
.archetype-row{
  display:flex;align-items:center;gap:10px;margin-bottom:1rem;flex-wrap:wrap;
}
.archetype-badge{
  font-size:0.62rem;padding:4px 12px;border-radius:99px;font-weight:500;
  letter-spacing:0.06em;text-transform:uppercase;
}
.arch-developing{background:rgba(212,184,0,0.15);color:#d4b800}
.arch-atrisk{background:rgba(190,54,80,0.15);color:#e06070}
.arch-leading{background:rgba(29,158,117,0.12);color:#1D9E75}
.arch-paradox{background:rgba(216,90,48,0.15);color:#e07050}
.arch-model{background:rgba(59,109,17,0.15);color:#6aaa20}
.archetype-desc{font-size:0.65rem;color:var(--muted);line-height:1.6}

/* COMPARISON LAYOUT — metric cards + summary cards */
.result-compare{animation:fadeUp 0.4s ease}
.compare-header{padding:1.8rem 0 1rem;border-bottom:1px solid var(--border);margin-bottom:1.5rem}
.compare-header h3{
  font-family:var(--font-display);font-weight:300;font-size:1.4rem;letter-spacing:-0.02em;
}
.compare-header h3 em{font-style:italic;color:var(--accent)}
.compare-header p{font-size:0.65rem;color:var(--muted);margin-top:4px}

/* Three stacked full-width metric cards */
.metric-cards{display:flex;flex-direction:column;gap:10px;margin-bottom:1.5rem}
.metric-card{
  background:var(--surface);border:1px solid var(--border);
  border-radius:12px;padding:1.1rem 1.4rem 1.3rem;
}
.metric-card-label{
  font-family:var(--font-body);font-size:10px;font-weight:500;
  text-transform:uppercase;letter-spacing:0.13em;color:#861442;
  margin-bottom:0.85rem;
}
.metric-row{display:flex;flex-direction:column;gap:10px}
.metric-state-row{display:grid;align-items:center;gap:10px;}
.metric-state-name{
  font-family:var(--font-display);font-weight:700;font-size:15px;
  color:#f0ede8;line-height:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
}
.metric-bar-wrap{flex:1;height:8px;background:rgba(255,255,255,0.07);border-radius:99px;overflow:hidden}
.metric-bar-fill{height:100%;border-radius:99px;transition:width 0.8s ease}
.metric-val{
  font-family:var(--font-display);font-weight:300;font-style:italic;font-size:14px;
  color:#f0ede8;white-space:nowrap;text-align:right;
}

/* Summary cards below metric cards */
.summary-cards{display:grid;gap:10px;margin-bottom:1.2rem}
.summary-card{
  background:var(--surface);border:1px solid var(--border);
  border-top-width:3px;
  border-radius:12px;padding:1.1rem 1.3rem;
}
.sc-name{
  font-family:var(--font-display);font-weight:700;font-size:24px;
  color:#f0ede8;line-height:1.1;margin-bottom:6px;letter-spacing:-0.01em;
}
.sc-score-row{display:flex;align-items:baseline;gap:6px;margin-bottom:0.6rem}
.sc-score{
  font-family:var(--font-display);font-style:italic;font-weight:300;
  font-size:2rem;line-height:1;
}
.sc-score-sub{font-size:0.58rem;color:var(--muted)}
.sc-narrative{font-size:12px;font-weight:300;color:#f0ede8;line-height:1.75;}

/* INSIGHT BOX — appears after compare */
.insight-box{
  background:var(--surface2);border:1px solid var(--border);border-radius:10px;
  padding:1.1rem 1.3rem;margin-bottom:1rem;
}
.insight-label{font-size:0.58rem;color:var(--accent);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px}
.insight-text{font-size:0.72rem;color:var(--muted);line-height:1.8}
.insight-text strong{color:var(--text)}

/* SOURCE ROW */
.source-row{
  font-size:0.6rem;color:var(--muted);line-height:1.8;
  border-top:1px solid var(--border);padding-top:1rem;margin-top:0.5rem;
}
.source-row a{color:var(--accent);text-decoration:none}

/* ERROR STATE */
.error-state{
  background:rgba(190,54,80,0.08);border:1px solid rgba(190,54,80,0.2);
  border-radius:10px;padding:1.2rem 1.5rem;
  font-size:0.72rem;color:rgba(190,54,80,0.8);line-height:1.7;
  margin:1rem 0;
}

/* PAGE FOOTER */
.page-footer{
  background:#111110;border-top:1px solid rgba(255,255,255,0.06);
  padding:1.5rem clamp(16px,4vw,2rem);
}
.footer-left{font-family:var(--font-body);font-size:12px;font-weight:400;color:#f0ede8;line-height:1.8;flex:1;min-width:200px;}
.footer-left a{color:#be3650;text-decoration:none;}
.footer-left a:hover{color:#f0ede8;}
.footer-right{display:flex;align-items:center;}
/* ── MODAL ── */
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:300;align-items:center;justify-content:center;}
.modal-overlay.open{display:flex;}
.modal-box{background:#1a1a18;border:1px solid rgba(134,20,66,0.5);border-radius:var(--radius);padding:2rem;width:100%;max-width:380px;margin:0 1rem;}
.modal-title{font-family:var(--font-display);font-size:22px;font-weight:300;color:#f0ede8;margin-bottom:6px;}
.modal-title em{font-style:italic;color:#be3650;}
.modal-sub{font-size:13px;font-weight:300;color:#8a8a84;line-height:1.6;margin-bottom:1.25rem;}
.modal-inputs{display:flex;flex-direction:column;gap:8px;margin-bottom:8px;}
.modal-inputs input{background:#111110;border:1px solid rgba(255,255,255,0.4);color:#f0ede8;font-family:var(--font-body);font-size:13px;font-weight:300;padding:9px 14px;border-radius:var(--radius);outline:none;width:100%;}
.modal-inputs input::placeholder{color:#5a5a56;}
.modal-email-row{display:flex;gap:8px;}
.modal-email-row input{flex:1;}
.modal-email-row button{background:#861442;color:#fff;border:none;font-family:var(--font-body);font-size:13px;font-weight:500;padding:9px 18px 11px;border-radius:var(--radius);cursor:pointer;white-space:nowrap;}
.modal-dismiss{margin-top:0.75rem;font-size:11px;font-weight:300;color:#5a5a56;text-align:center;cursor:pointer;}
.modal-dismiss:hover{color:#8a8a84;}

@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}

@media(max-width:700px){
  .stats-inner{grid-template-columns:1fr}
  .stat-box{border-right:none;border-bottom:1px solid var(--border)}
  .dim-grid{grid-template-columns:1fr}
  .cc-dims{grid-template-columns:1fr}
  .metric-state-row{grid-template-columns:100px 1fr 72px !important}
  .metric-state-name{font-size:12px}
  .metric-val{font-size:12px}
  .summary-cards{grid-template-columns:1fr !important}
}
</style>
</head>
<body>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PC2BG949" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

<div style="max-width:860px;margin:0 auto;">

<!-- NAV — v4 spec -->
<nav class="kot-nav">
  <div class="kot-nav-inner">
    <div style="display:flex;align-items:center;gap:12px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 100 100" style="flex-shrink:0">
        <path d="M50,72 L36,28 Q50,18 64,28 Z" fill="#861442" transform="rotate(-18,50,72)"/>
        <path d="M50,72 L36,28 Q50,18 64,28 Z" fill="#be3650" transform="rotate(0,50,72)"/>
        <path d="M50,72 L36,28 Q50,18 64,28 Z" fill="#861442" opacity="0.2" transform="rotate(18,50,72)"/>
        <circle cx="50" cy="72" r="8" fill="#861442"/>
      </svg>
      <div class="kot-nav-title"><strong>Creative Economy</strong> <em>Scorecard</em></div>
    </div>
    <div class="kot-nav-sub">The creative economy employs 50M+ people and grows at 2× the U.S. growth rate. Measure your state against the national average.</div>
  </div>
</nav>

<!-- HERO IMAGE -->
<div class="kot-hero-image"></div>

<!-- DIMENSION BAR -->
<div class="kot-dim-bar">
  <div class="kot-dim-col">
    <div class="kot-dim-val">$1.2T</div>
    <div class="kot-dim-label">Creative Industries<br>Total Economic Impact (2023)</div>
  </div>
  <div class="kot-dim-pipe"></div>
  <div class="kot-dim-col">
    <div class="kot-dim-val">0.049%</div>
    <div class="kot-dim-label">Arts Funding<br>% of State Budget (Avg)</div>
  </div>
  <div class="kot-dim-pipe"></div>
  <div class="kot-dim-col">
    <div class="kot-dim-val">4.2%</div>
    <div class="kot-dim-label">U.S. GDP (2023)</div>
  </div>
</div>
<div class="kot-crimson-rule"></div>

<!-- STATE SELECTOR -->
<div class="selector-zone">
  <div class="selector-head">
    <h3>Score Your <em>State</em></h3>
    <p>Select up to six states to compare them to the national average.</p>
  </div>

  <div class="selectors" id="selectors">

    <div class="sel-row" id="sel-row-1">
      <span class="sel-num required">1</span>
      <select class="state-pick" id="sel-1">
        <option value="">— select a state —</option>
        <option>Alabama</option><option>Alaska</option><option>Arizona</option>
        <option>Arkansas</option><option>California</option><option>Colorado</option>
        <option>Connecticut</option><option>Delaware</option><option>Florida</option>
        <option>Georgia</option><option>Hawaii</option><option>Idaho</option>
        <option>Illinois</option><option>Indiana</option><option>Iowa</option>
        <option>Kansas</option><option>Kentucky</option><option>Louisiana</option>
        <option>Maine</option><option>Maryland</option><option>Massachusetts</option>
        <option>Michigan</option><option>Minnesota</option><option>Mississippi</option>
        <option>Missouri</option><option>Montana</option><option>Nebraska</option>
        <option>Nevada</option><option>New Hampshire</option><option>New Jersey</option>
        <option>New Mexico</option><option>New York</option><option>North Carolina</option>
        <option>North Dakota</option><option>Ohio</option><option>Oklahoma</option>
        <option>Oregon</option><option>Pennsylvania</option><option>Rhode Island</option>
        <option>South Carolina</option><option>South Dakota</option><option>Tennessee</option>
        <option>Texas</option><option>Utah</option><option>Vermont</option>
        <option>Virginia</option><option>Washington</option><option>West Virginia</option>
        <option>Wisconsin</option><option>Wyoming</option>
      </select>
      <button class="sel-remove hidden" onclick="removeSelector(1)">×</button>
    </div>

  </div>

  <button class="add-state-btn" id="add-btn" onclick="addSelector()">+ add another state to compare</button>

  <div class="run-wrap">
    <button class="btn-run" id="run-btn" onclick="runScorecard()">Score These States →</button>
    
  </div>
</div>

<hr class="section-divider">

<!-- RESULT ZONE -->
<div id="result-zone"></div>

<!-- PAGE FOOTER -->
<div class="page-footer">
  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;width:100%;">
    <div class="footer-left">
      <div style="font-weight:500;">Creative Economy Scorecard</div>
      <div>© 2026 Monica Poling &nbsp;|&nbsp; <a href="https://monicapoling.com/knowledge-on-tap" target="_blank">Knowledge on Tap</a></div>
      <span style="font-size:11px;color:#8a8a84;">
        Sources: <a href="https://www.bea.gov/news/2025/arts-and-cultural-production-satellite-account-us-and-states-2023" target="_blank">BEA/ACPSA 2023</a> ·
        <a href="https://nasaa-arts.org/nasaa_research/creative-economy-state-profiles/" target="_blank">NASAA</a> FY2025 ·
        NEA State Profiles
      </span>
    </div>
    <div class="footer-right">
      <button onclick="openSubscribeModal()" style="background:#861442;color:#fff;border:none;font-family:var(--font-body);font-size:13px;font-weight:500;padding:10px 22px 13px;border-radius:var(--radius);cursor:pointer;white-space:nowrap;">Subscribe</button>
    </div>
  </div>
</div>

<!-- SUBSCRIBE MODAL -->
<div class="modal-overlay" id="subscribe-modal" onclick="closeSubscribeModal(event)">
  <div class="modal-box">
    <div class="modal-title">Subscribe <em>Now</em></div>
    <div class="modal-sub">Weekly AI tips for business leaders.<br>You can unsubscribe any time.</div>
    <div class="modal-inputs">
      <input type="text" id="modal-firstname" placeholder="First name">
      <div class="modal-email-row">
        <input type="email" id="modal-email" placeholder="your@email.com">
        <button onclick="submitModalEmail()">Subscribe</button>
      </div>
    </div>
    <div class="modal-dismiss" onclick="closeSubscribeModal()">No thanks</div>
  </div>
</div>

<script>
const STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
  'New Hampshire','New Jersey','New Mexico','New York','North Carolina',
  'North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island',
  'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming'
];

// ─── Real-data helper ────────────────────────────────────────────────────────
function getStateData(state) {
  const bea  = (BEA_DATA.states[state]   || {});
  const nas  = (NASAA_DATA.states[state] || {});
  const tot  = (NASAA_TOTALS.states[state] || {});
  const rank = (NASAA_RANKS.states[state] || null);

  const inv_fy2025 = (nas.years
    ? nas[nas.length - 1]           // fallback
    : NASAA_DATA.states[state]
      ? NASAA_DATA.states[state][NASAA_DATA.states[state].length - 1]
      : null) || null;

  // Latest per-capita investment = last entry in NASAA_DATA for this state
  const stateNasaaArr = NASAA_DATA.states[state] || [];
  const perCapita_fy2025 = stateNasaaArr[stateNasaaArr.length - 1] ?? null;
  const perCapita_fy2023 = stateNasaaArr[1] ?? null;

  const natBea = BEA_DATA.national;

  return {
    // BEA 2023
    gdp_b:       bea.gdp_b    ?? null,   // creative GDP, billions
    gdp_pct:     bea.gdp_pct  ?? null,   // % of state GDP
    jobs:        bea.jobs      ?? null,   // total creative jobs
    jobs_pct:    bea.jobs_pct  ?? null,   // % of workforce
    // NASAA FY2025
    inv_total:   tot.total_fy2025    ?? null,  // total approp, millions
    inv_baseline:tot.baseline_fy2025 ?? null,  // baseline (excl line items), millions
    inv_percap:  perCapita_fy2025,             // $/capita FY2025
    inv_percap_fy2023: perCapita_fy2023,       // $/capita FY2023 (for trend)
    nasaa_rank:  rank,                         // rank out of 50
    // National benchmarks
    nat_gdp_b:   natBea.gdp_b,
    nat_gdp_pct: natBea.gdp_pct,
    nat_jobs:    natBea.jobs,
    nat_jobs_pct:natBea.jobs_pct,
    nat_percap:  NASAA_DATA.national[NASAA_DATA.national.length - 1], // FY2025 national avg
  };
}

let selectorCount = 1;
const MAX_SELECTORS = 6;

function buildStateOptions(selectedVal) {
  return '<option value="">— optional —</option>' +
    STATES.map(s => `<option${s===selectedVal?' selected':''}>${s}</option>`).join('');
}

function addSelector() {
  if (selectorCount >= MAX_SELECTORS) return;
  selectorCount++;
  const row = document.createElement('div');
  row.className = 'sel-row';
  row.id = `sel-row-${selectorCount}`;
  row.innerHTML = `
    <span class="sel-num">${selectorCount}</span>
    <select class="state-pick optional" id="sel-${selectorCount}">
      ${buildStateOptions('')}
    </select>
    <button class="sel-remove" onclick="removeSelector(${selectorCount})">×</button>
  `;
  document.getElementById('selectors').appendChild(row);
  if (selectorCount >= MAX_SELECTORS) {
    document.getElementById('add-btn').classList.add('hidden');
  }
}

function removeSelector(n) {
  const row = document.getElementById(`sel-row-${n}`);
  if (row) row.remove();
  selectorCount = Math.max(1, selectorCount - 1);
  document.getElementById('add-btn').classList.remove('hidden');
  renumberSelectors();
}

function renumberSelectors() {
  const rows = document.querySelectorAll('.sel-row');
  rows.forEach((row, i) => {
    const num = row.querySelector('.sel-num');
    if (num) num.textContent = i + 1;
  });
}

function getSelectedStates() {
  const states = [];
  document.querySelectorAll('.state-pick').forEach(sel => {
    if (sel.value && sel.value !== '') states.push(sel.value);
  });
  return [...new Set(states)];
}

async function runScorecard() {
  const states = getSelectedStates();
  if (states.length === 0) {
    alert('Please select at least one state.');
    return;
  }

  const btn = document.getElementById('run-btn');
  btn.disabled = true;
  btn.textContent = 'Scoring…';

  const zone = document.getElementById('result-zone');
  zone.classList.add('visible');
  zone.innerHTML = `
    <div class="loading-state">
      <div class="loading-spinner"></div>
      <div class="loading-state-label">Analyzing creative economies</div>
      <div class="loading-text">
        Grounding in BEA federal data · NASAA state investment data · ${states.length > 1 ? 'Building comparison across ' + states.length + ' states' : 'Scoring ' + states[0]}
      </div>
    </div>
  `;
  zone.scrollIntoView({behavior:'smooth', block:'start'});

  const isSingle = states.length === 1;
  const prompt = isSingle ? buildSinglePrompt(states[0]) : buildComparePrompt(states);

  try {
    const response = await fetch('/api/anthropic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 3000,
        tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    const text = data.content
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('');

    let parsed;
    try {
      const clean = text.replace(/```json|```/g, '').trim();
      const jsonMatch = clean.match(/\{[\s\S]*\}/);
      parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch(e) { parsed = null; }

    if (!parsed) {
      zone.innerHTML = `<div style="padding:2rem"><div class="error-state">Could not parse the response. Raw output:<br><br>${text}</div></div>`;
    } else if (isSingle) {
      renderSingle(parsed, zone);
    } else {
      renderCompare(parsed, zone);
    }

  } catch(err) {
    zone.innerHTML = `<div style="padding:2rem"><div class="error-state">Something went wrong: ${err.message}</div></div>`;
  }

  btn.disabled = false;
  btn.textContent = 'Score These States →';
}

function buildSinglePrompt(state) {
  const d = getStateData(state);
  const roi = (d.gdp_b && d.inv_total)
    ? Math.round((d.gdp_b * 1e9) / (d.inv_total * 1e6)).toLocaleString()
    : null;

  return `You are a creative economy analyst. Score ${state}'s creative economy using ONLY the verified data below — do NOT use web search to find different numbers. Your job is to write narrative and derive scores from these facts, not to look up new data.

VERIFIED DATA FOR ${state.toUpperCase()} — BEA ACPSA 2023 & NASAA FY2025:

Creative Economy (BEA ACPSA 2023):
- Creative GDP: $${d.gdp_b}B (national: $${d.nat_gdp_b}B)
- Creative GDP as % of state GDP: ${d.gdp_pct}% (national avg: ${d.nat_gdp_pct}%)
- Total creative jobs: ${d.jobs ? d.jobs.toLocaleString() : 'N/A'} (national: ${d.nat_jobs ? d.nat_jobs.toLocaleString() : 'N/A'})
- Creative jobs as % of workforce: ${d.jobs_pct}% (national avg: ${d.nat_jobs_pct}%)

State Arts Investment (NASAA FY2025):
- Per capita investment: $${d.inv_percap}/capita (national avg: $${d.nat_percap}/capita)
- Total state arts appropriation: $${d.inv_total}M
- Rank among 50 states: #${d.nasaa_rank}
- FY2023 per capita (for trend): $${d.inv_percap_fy2023}/capita
${roi ? `- Return ratio: $${roi} creative GDP per $1 of public arts investment` : ''}

Score ${state} across three dimensions (0–100 each), where 50 = at national average, 100 = top performer, 0 = far below average. Use the numbers above as your anchor — don't inflate or deflate. Derive the overall score as a weighted average (employment 35%, gdp 40%, pipeline 25%).

Return ONLY a valid JSON object, no markdown, no preamble:

{
  "state": "${state}",
  "overall_score": <number 0-100>,
  "score_color": <"#1D9E75" if score>=70, "#d4b800" if 50-69, "#be3650" if below 50>,
  "archetype": <"Model" | "Leading" | "Developing" | "Paradox" | "At risk">,
  "archetype_class": <"arch-model" | "arch-leading" | "arch-developing" | "arch-paradox" | "arch-atrisk">,
  "archetype_desc": <one sentence explaining what the archetype means for this state>,
  "rank": ${d.nasaa_rank || '<estimated rank out of 50>'},
  "dims": {
    "employment": { "score": <0-100>, "label": "Arts & cultural employment", "note": <one sentence referencing the ${d.jobs ? d.jobs.toLocaleString() : ''} jobs and ${d.jobs_pct}% workforce share> },
    "gdp": { "score": <0-100>, "label": "Creative industry GDP share", "note": <one sentence referencing the $${d.gdp_b}B / ${d.gdp_pct}% vs national ${d.nat_gdp_pct}%> },
    "pipeline": { "score": <0-100>, "label": "Education & pipeline", "note": <one sentence; this is estimated from state arts investment trend and your knowledge — flag as estimated> }
  },
  "narrative": <2-3 sentences: the specific story of this state's creative economy using the numbers above — what's working, what's lagging, what the data reveals. Name specific programs or industries where relevant.>,
  "investment": "$${d.inv_percap}/capita",
  "creative_gdp": "$${d.gdp_b}B",
  "roi": "${roi ? '$' + roi : '<creative GDP per $1 invested>'}",
  "sources": "BEA ACPSA 2023, NASAA FY2025 State Arts Agency Revenues Report"
}`;
}

function buildComparePrompt(states) {
  const stateBlocks = states.map(state => {
    const d = getStateData(state);
    const roi = (d.gdp_b && d.inv_total)
      ? Math.round((d.gdp_b * 1e9) / (d.inv_total * 1e6)).toLocaleString()
      : null;
    return `${state.toUpperCase()}:
  Creative GDP: $${d.gdp_b}B (${d.gdp_pct}% of state GDP)
  Creative jobs: ${d.jobs ? d.jobs.toLocaleString() : 'N/A'} (${d.jobs_pct}% of workforce)
  NASAA per capita FY2025: $${d.inv_percap} (rank #${d.nasaa_rank}/50)
  Total arts approp FY2025: $${d.inv_total}M
  ROI: ${roi ? '$' + roi + ' GDP per $1 invested' : 'N/A'}`;
  }).join('\n\n');

  return `You are a creative economy analyst. Compare the creative economies of: ${states.join(', ')}.

Use ONLY the verified data below — do NOT look up different numbers. Your job is to write narrative and derive scores from these facts.

NATIONAL BENCHMARKS (BEA ACPSA 2023 · NASAA FY2025):
  Creative GDP: $${BEA_DATA.national.gdp_b}B (${BEA_DATA.national.gdp_pct}% of U.S. GDP)
  Creative jobs: ${BEA_DATA.national.jobs.toLocaleString()} (${BEA_DATA.national.jobs_pct}% of workforce)
  National avg per capita arts investment: $${NASAA_DATA.national[NASAA_DATA.national.length - 1]}/capita

VERIFIED STATE DATA:
${stateBlocks}

Score each state (0–100 per dimension, 50 = at national average). Derive overall as weighted avg: employment 35%, gdp 40%, pipeline 25%.

Return ONLY a valid JSON object, no markdown, no preamble:

{
  "states": [
    {
      "state": <state name>,
      "overall_score": <0-100>,
      "score_color": <"#1D9E75" if >=70, "#d4b800" if 50-69, "#be3650" if <50>,
      "archetype": <"Model" | "Leading" | "Developing" | "Paradox" | "At risk">,
      "archetype_class": <"arch-model" | "arch-leading" | "arch-developing" | "arch-paradox" | "arch-atrisk">,
      "dims": {
        "employment": { "score": <0-100>, "note": <one sentence with the actual job count and % from verified data> },
        "gdp": { "score": <0-100>, "note": <one sentence with actual GDP figures from verified data> },
        "pipeline": { "score": <0-100>, "note": <one sentence, estimated from arts investment trend — flag as estimated> }
      },
      "narrative": <2 sentences: what's distinctive using the numbers above>,
      "investment": <"$X.XX/capita" — use verified NASAA FY2025 figure>,
      "creative_gdp": <"$X.XXB" — use verified BEA figure>,
      "roi": <"$X,XXX" — use verified ROI or "N/A">
    }
  ],
  "insight": <2-3 sentences synthesizing the most interesting pattern across the states — be specific with numbers and state names>,
  "sources": "BEA ACPSA 2023, NASAA FY2025 State Arts Agency Revenues Report"
}`;
}

function archetypeColor(archClass) {
  const map = {
    'arch-model':'#6aaa20',
    'arch-leading':'#1D9E75',
    'arch-developing':'#d4b800',
    'arch-paradox':'#e07050',
    'arch-atrisk':'#be3650'
  };
  return map[archClass] || '#be3650';
}

function renderSingle(d, zone) {
  const nameParts = d.state.split(' ');
  const last = nameParts.pop();
  const first = nameParts.join(' ');
  const nameHtml = (first ? first + ' ' : '') + '<em>' + last + '</em>';
  const scoreColor = d.score_color || '#be3650';
  const aColor = archetypeColor(d.archetype_class);

  zone.innerHTML = `
    <div class="result-single" style="padding:0 0 2rem">
      <div class="result-header">
        <div>
          <div class="result-state-name">${nameHtml}</div>
          <div class="result-meta">Archetype: ${d.archetype} · rank ~${d.rank}/50 · BEA ACPSA 2023</div>
        </div>
        <div class="result-score-block">
          <div class="result-score-num" style="color:${scoreColor}">${d.overall_score}</div>
          <div class="result-score-sub">/ 100 overall</div>
        </div>
      </div>

      <div class="dim-grid">
        ${['employment','gdp','pipeline'].map(k => {
          const dim = d.dims[k];
          const c = '#861442';
          return `<div class="dim-card">
            <div class="dim-label">${dim.label||k}</div>
            <div class="dim-score" style="color:${c}">${dim.score}</div>
            <div class="dim-bar"><div class="dim-fill" style="width:${dim.score}%;background:${c}"></div></div>
            <div class="dim-note">${dim.note}</div>
          </div>`;
        }).join('')}
      </div>

      <div class="narrative-box">${d.narrative}</div>

      <div class="archetype-row">
        <span class="archetype-badge ${d.archetype_class}" style="border:1px solid ${aColor}20">${d.archetype}</span>
        <span class="archetype-desc">${d.archetype_desc||''}</span>
      </div>

      <div class="dim-grid" style="margin-top:1rem">
        <div class="dim-card">
          <div class="dim-label">Creative GDP output</div>
          <div class="dim-score" style="color:${scoreColor};font-size:1.4rem">${d.creative_gdp}</div>
        </div>
        <div class="dim-card">
          <div class="dim-label">Public arts investment</div>
          <div class="dim-score" style="color:${scoreColor};font-size:1.4rem">${d.investment}</div>
        </div>
        <div class="dim-card">
          <div class="dim-label">Return per $1 invested</div>
          <div class="dim-score" style="color:${scoreColor};font-size:1.4rem">${d.roi}</div>
        </div>
      </div>

      <div class="source-row">Sources: ${d.sources}</div>
    </div>
  `;
}

function renderCompare(d, zone) {
  // Assign a distinct color to each state — consistent across all three metric cards
  const STATE_COLORS = ['#5b8dd9','#e07a30','#4caf8a','#c46ab0','#d4b800'];
  const stateNames = d.states.map(s => s.state);
  const colorMap = {};
  stateNames.forEach((n, i) => { colorMap[n] = STATE_COLORS[i % STATE_COLORS.length]; });

  // Pull real numeric data for all three metric cards
  const stateData = stateNames.map(n => {
    const bea = BEA_DATA.states[n] || {};
    const nas = NASAA_DATA.states[n] || [];
    const tot = (NASAA_TOTALS.states[n] || {});
    const gdp_b      = bea.gdp_b    || 0;
    const inv_percap = nas.slice(-1)[0] || 0;
    const jobs       = bea.jobs     || 0;
    const jobs_pct   = bea.jobs_pct || 0;
    const inv_total  = tot.total_fy2025 || 0;
    return { name: n, gdp_b, inv_percap, jobs, jobs_pct, inv_total, color: colorMap[n] };
  });

  const maxGdp  = Math.max(...stateData.map(s => s.gdp_b));
  const maxInv  = Math.max(...stateData.map(s => s.inv_percap));
  const maxJobs = Math.max(...stateData.map(s => s.jobs));

  // Column grid: name | bar | value + pct
  const COL = '140px 1fr 160px';

  function metricRows(key, max, fmt) {
    return stateData.map(s => {
      const raw = s[key] || 0;
      const pct = max ? Math.round((raw / max) * 100) : 0;
      return `<div class="metric-state-row" style="grid-template-columns:${COL}">
        <div class="metric-state-name">${s.name}</div>
        <div class="metric-bar-wrap"><div class="metric-bar-fill" style="width:${pct}%;background:${s.color}"></div></div>
        <div class="metric-val">${fmt(raw, s)}</div>
      </div>`;
    }).join('');
  }

  const gdpRows  = metricRows('gdp_b', maxGdp, v => `$${v}B`);
  const invRows  = metricRows('inv_percap', maxInv, (v, s) => `$${v.toFixed(2)}/cap &nbsp;<span style="color:var(--muted);font-size:11px;">$${s.inv_total.toFixed(1)}M total</span>`);
  const jobsRows = stateData.map(s => {
    const raw = s.jobs || 0;
    const pct = maxJobs ? Math.round((raw / maxJobs) * 100) : 0;
    return `<div class="metric-state-row" style="grid-template-columns:${COL}">
      <div class="metric-state-name">${s.name}</div>
      <div class="metric-bar-wrap"><div class="metric-bar-fill" style="width:${pct}%;background:${s.color}"></div></div>
      <div class="metric-val">${raw ? raw.toLocaleString() : 'N/A'} &nbsp;<span style="color:var(--muted);font-size:11px;">${s.jobs_pct}% of workforce</span></div>
    </div>`;
  }).join('');

  // Summary cards — responsive grid, colored top border
  const cols = d.states.length <= 2 ? d.states.length : Math.min(d.states.length, 3);
  const summaryCards = d.states.map(s => {
    const sc = s.score_color || '#be3650';
    const stateColor = colorMap[s.state];
    return `
      <div class="summary-card" style="border-top-color:${stateColor}">
        <div class="sc-name">${s.state}</div>
        <div class="sc-score-row">
          <div class="sc-score" style="color:${sc}">${s.overall_score}</div>
          <div class="sc-score-sub">/ 100</div>
        </div>
        <div class="sc-narrative">${s.narrative}</div>
      </div>`;
  }).join('');

  zone.innerHTML = `
    <div class="result-compare" style="padding:0 0 2rem">
      <div class="compare-header">
        <h3>Comparing <em>${d.states.length} states</em></h3>
        <p>Scored against national benchmarks · BEA ACPSA 2023 · NASAA FY2025</p>
      </div>

      <div class="metric-cards">
        <div class="metric-card">
          <div class="metric-card-label">Arts & Culture Total GDP</div>
          <div class="metric-row">${gdpRows}</div>
        </div>
        <div class="metric-card">
          <div class="metric-card-label">Per Capita Arts Investment (NASAA FY2025)</div>
          <div class="metric-row">${invRows}</div>
        </div>
        <div class="metric-card">
          <div class="metric-card-label">Creative Jobs</div>
          <div class="metric-row">${jobsRows}</div>
        </div>
      </div>

      <div class="summary-cards" style="grid-template-columns:repeat(${cols},1fr)">
        ${summaryCards}
      </div>

      ${d.insight ? `
        <div class="insight-box">
          <div class="insight-label">What the comparison reveals</div>
          <div class="insight-text">${d.insight}</div>
        </div>
      ` : ''}

      <div class="source-row">Sources: ${d.sources}</div>
    </div>
  `;
}

function openSubscribeModal() {
  document.getElementById('subscribe-modal').classList.add('open');
  document.getElementById('modal-firstname').value = '';
  document.getElementById('modal-email').value = '';
  setTimeout(() => document.getElementById('modal-firstname').focus(), 100);
}
function closeSubscribeModal(e) {
  if (!e || e.target === document.getElementById('subscribe-modal')) {
    document.getElementById('subscribe-modal').classList.remove('open');
  }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSubscribeModal(); });
function submitModalEmail() {
  var email = document.getElementById('modal-email').value.trim();
  var firstName = document.getElementById('modal-firstname').value.trim();
  if (!email || !email.includes('@')) return;
  var now = new Date();
  var humanTime = now.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true });
  var LOGGER = 'https://script.google.com/macros/s/AKfycbwvztxaVKSDYhevhsjQ7LowAMvjBu4ONs2AqXytbNflmEJ_mfBF7mI54fgyhBZzhU8M/exec';
  fetch(LOGGER, {
    method: 'POST', mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ timestamp: humanTime, event: 'modal_submit', app: 'Creative Economy Scorecard', url: window.location.href, score: '', firstName: firstName, email: email, subscribe: 'yes' })
  }).catch(function() {});
  var box = document.querySelector('.modal-box');
  box.innerHTML = '<div class="modal-title">Subscribe <em>Now</em></div><div style="font-size:14px;color:#be3650;line-height:1.6;padding:8px 0;">Thank you! You\'ve been subscribed.<br>Check your email for a welcome message.</div><div onclick="closeSubscribeModal()" style="margin-top:1rem;font-size:13px;font-weight:500;color:#f0ede8;cursor:pointer;">Close</div>';
}
</script>
</div>
</body>
</html>
