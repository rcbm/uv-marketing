/* global React */

// ============ SLIDE 06 — MOAT (Venn Diagram) ==============================
function Slide06Moat() {
  const W = 1760, H = 600;
  const cy = H / 2;
  const r = 320, cx1 = 660, cx2 = 1100;
  const ocx = (cx1 + cx2) / 2;

  const codeItems = [
    "Architecture patterns",
    "Technical debt location",
    "Code ownership",
    "Dependency graph",
    "Quality drift over time",
    "High-risk file detection",
  ];
  const bizItems = [
    "Interview themes",
    "Feature priorities",
    "Rejected ideas & why",
    "Project blockers",
    "Stakeholder tradeoffs",
    "Sprint intent vs. outcome",
  ];

  const leftX = 580, rightX = 1180;
  const lineW = 100;
  const itemY0 = cy - 140, itemDY = 58;

  return (
    <section className="slide s-moat inverse" data-screen-label="07 Moat" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>THE MOAT</div>
      </div>

      <div className="slide-body">
        <div className="eyebrow">The Compounding Advantage</div>
        <h2 className="moat-claim" style={{ marginTop: 8, marginBottom: 24, fontSize: 72 }}>
          The only system that <span className="italic">sees both sides.</span>
        </h2>

        <div style={{ flex: 1, position: 'relative' }}>
          <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%"
            preserveAspectRatio="xMidYMid meet"
            style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
            <defs>
              <clipPath id="moat-right-clip">
                <circle cx={cx2} cy={cy} r={r} />
              </clipPath>
            </defs>

            {/* Left circle */}
            <circle cx={cx1} cy={cy} r={r}
              style={{ fill: 'var(--uv-border)', stroke: 'var(--uv-border-strong)' }}
              strokeWidth="1.5" />

            {/* Right circle */}
            <circle cx={cx2} cy={cy} r={r}
              style={{ fill: 'var(--uv-border)', stroke: 'var(--uv-border-strong)' }}
              strokeWidth="1.5" />

            {/* Intersection highlight */}
            <circle cx={cx1} cy={cy} r={r}
              clipPath="url(#moat-right-clip)"
              style={{ fill: 'var(--uv-border)' }} />

            {/* Circle labels */}
            <text x={leftX - lineW} y={itemY0 - 30} textAnchor="start"
              fontFamily="var(--uv-font-mono)" fontSize="12"
              style={{ fill: 'var(--uv-text-dim)' }} letterSpacing="0.22em">CODEBASE INTELLIGENCE</text>
            <text x={rightX + lineW} y={itemY0 - 30} textAnchor="end"
              fontFamily="var(--uv-font-mono)" fontSize="12"
              style={{ fill: 'var(--uv-text-dim)' }} letterSpacing="0.22em">BUSINESS CONTEXT</text>

            {/* Left items — left-aligned */}
            {codeItems.map((item, i) => (
              <g key={i}>
                <line x1={leftX - lineW} x2={leftX + lineW}
                  y1={itemY0 + i * itemDY - 18} y2={itemY0 + i * itemDY - 18}
                  style={{ stroke: 'var(--uv-border)' }} strokeWidth="1" />
                <text x={leftX - lineW} y={itemY0 + i * itemDY}
                  textAnchor="start"
                  fontFamily="var(--uv-font-mono)" fontSize="15"
                  style={{ fill: 'var(--uv-text-primary)' }} letterSpacing="0.04em">{item}</text>
              </g>
            ))}
            <line x1={leftX - lineW} x2={leftX + lineW}
              y1={itemY0 + codeItems.length * itemDY - 18} y2={itemY0 + codeItems.length * itemDY - 18}
              style={{ stroke: 'var(--uv-border)' }} strokeWidth="1" />

            {/* Right items — right-aligned */}
            {bizItems.map((item, i) => (
              <g key={i}>
                <line x1={rightX - lineW} x2={rightX + lineW}
                  y1={itemY0 + i * itemDY - 18} y2={itemY0 + i * itemDY - 18}
                  style={{ stroke: 'var(--uv-border)' }} strokeWidth="1" />
                <text x={rightX + lineW} y={itemY0 + i * itemDY}
                  textAnchor="end"
                  fontFamily="var(--uv-font-mono)" fontSize="15"
                  style={{ fill: 'var(--uv-text-primary)' }} letterSpacing="0.04em">{item}</text>
              </g>
            ))}
            <line x1={rightX - lineW} x2={rightX + lineW}
              y1={itemY0 + bizItems.length * itemDY - 18} y2={itemY0 + bizItems.length * itemDY - 18}
              style={{ stroke: 'var(--uv-border)' }} strokeWidth="1" />

            {/* Center UV label */}
            <rect x={ocx - 108} y={cy - 55} width={216} height={110}
              style={{ fill: 'var(--uv-bg-tertiary)' }} />
            <text x={ocx} y={cy - 24} textAnchor="middle"
              fontFamily="var(--uv-font-mono)" fontSize="11"
              style={{ fill: 'var(--uv-text-dim)' }} letterSpacing="0.25em">ULTRAVIOLET</text>
            <line x1={ocx - 70} x2={ocx + 70} y1={cy - 10} y2={cy - 10}
              style={{ stroke: 'var(--uv-border)' }} strokeWidth="1" />
            <text x={ocx} y={cy + 14} textAnchor="middle"
              fontFamily="var(--uv-font-display)" fontSize="19"
              style={{ fill: 'var(--uv-text-primary)' }} fontWeight="500" letterSpacing="-0.01em">The Compound</text>
            <text x={ocx} y={cy + 36} textAnchor="middle"
              fontFamily="var(--uv-font-display)" fontSize="19"
              style={{ fill: 'var(--uv-text-primary)' }} fontWeight="500" letterSpacing="-0.01em">Dataset</text>
          </svg>
        </div>

        <div style={{
          paddingTop: 16, borderTop: '1px solid var(--uv-border)',
          fontFamily: 'var(--uv-font-mono)', fontSize: 14,
          letterSpacing: '0.05em', color: 'var(--uv-text-dim)',
          textAlign: 'center'
        }}>
          Cursor sees the code. Gong hears the customer.{' '}
          <span style={{ color: 'var(--uv-text-primary)' }}>Ultraviolet sees the connection — and it compounds every month.</span>
        </div>
      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div>07 / 10</div>
      </div>
    </section>
  );
}

// ============ SLIDE — SOLUTION (PDLC × SDLC Venn) =========================
function SlideSolutionVenn() {
  const W = 1760, H = 600;
  const cy = H / 2;
  const r = 320, cx1 = 660, cx2 = 1100;
  const ocx = (cx1 + cx2) / 2;

  const pdlcItems = [
    "Customer interviews",
    "Signal collection & triage",
    "Pattern analysis",
    "Opportunity scoring",
    "Prioritization",
    "PRD authoring",
  ];
  const sdlcItems = [
    "Technical architecture",
    "Task decomposition",
    "Code generation",
    "Automated testing",
    "Code review",
    "Release & change docs",
  ];

  const leftX = 580, rightX = 1180;
  const lineW = 100;
  const itemY0 = cy - 140, itemDY = 58;

  return (
    <section className="slide s-solution-venn band" data-screen-label="Solution (Venn)" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>THE SOLUTION</div>
      </div>

      <div className="slide-body">
        <h2 className="display lg" style={{ marginBottom: 24 }}>
          One platform, <span className="dim">not six.</span>
        </h2>

        <div style={{ flex: 1, position: 'relative' }}>
          <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%"
            preserveAspectRatio="xMidYMid meet"
            style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
            <defs>
              <clipPath id="sol-right-clip">
                <circle cx={cx2} cy={cy} r={r} />
              </clipPath>
            </defs>

            {/* Left circle */}
            <circle cx={cx1} cy={cy} r={r}
              style={{ fill: 'var(--uv-border)', stroke: 'var(--uv-border-strong)' }}
              strokeWidth="1.5" />

            {/* Right circle */}
            <circle cx={cx2} cy={cy} r={r}
              style={{ fill: 'var(--uv-border)', stroke: 'var(--uv-border-strong)' }}
              strokeWidth="1.5" />

            {/* Intersection highlight */}
            <circle cx={cx1} cy={cy} r={r}
              clipPath="url(#sol-right-clip)"
              style={{ fill: 'var(--uv-border)' }} />

            {/* Circle labels */}
            <text x={leftX - lineW} y={itemY0 - 30} textAnchor="start"
              fontFamily="var(--uv-font-mono)" fontSize="12"
              style={{ fill: 'var(--uv-text-dim)' }} letterSpacing="0.22em">PRODUCT LIFECYCLE</text>
            <text x={rightX + lineW} y={itemY0 - 30} textAnchor="end"
              fontFamily="var(--uv-font-mono)" fontSize="12"
              style={{ fill: 'var(--uv-text-dim)' }} letterSpacing="0.22em">SOFTWARE LIFECYCLE</text>

            {/* Left items — left-aligned */}
            {pdlcItems.map((item, i) => (
              <g key={i}>
                <line x1={leftX - lineW} x2={leftX + lineW}
                  y1={itemY0 + i * itemDY - 18} y2={itemY0 + i * itemDY - 18}
                  style={{ stroke: 'var(--uv-border)' }} strokeWidth="1" />
                <text x={leftX - lineW} y={itemY0 + i * itemDY}
                  textAnchor="start"
                  fontFamily="var(--uv-font-mono)" fontSize="15"
                  style={{ fill: 'var(--uv-text-primary)' }} letterSpacing="0.04em">{item}</text>
              </g>
            ))}
            <line x1={leftX - lineW} x2={leftX + lineW}
              y1={itemY0 + pdlcItems.length * itemDY - 18} y2={itemY0 + pdlcItems.length * itemDY - 18}
              style={{ stroke: 'var(--uv-border)' }} strokeWidth="1" />

            {/* Right items — right-aligned */}
            {sdlcItems.map((item, i) => (
              <g key={i}>
                <line x1={rightX - lineW} x2={rightX + lineW}
                  y1={itemY0 + i * itemDY - 18} y2={itemY0 + i * itemDY - 18}
                  style={{ stroke: 'var(--uv-border)' }} strokeWidth="1" />
                <text x={rightX + lineW} y={itemY0 + i * itemDY}
                  textAnchor="end"
                  fontFamily="var(--uv-font-mono)" fontSize="15"
                  style={{ fill: 'var(--uv-text-primary)' }} letterSpacing="0.04em">{item}</text>
              </g>
            ))}
            <line x1={rightX - lineW} x2={rightX + lineW}
              y1={itemY0 + sdlcItems.length * itemDY - 18} y2={itemY0 + sdlcItems.length * itemDY - 18}
              style={{ stroke: 'var(--uv-border)' }} strokeWidth="1" />

            {/* Center UV label */}
            <rect x={ocx - 160} y={cy - 60} width={320} height={120}
              style={{ fill: '#ffffff' }} />
            <text x={ocx} y={cy - 30} textAnchor="middle"
              fontFamily="var(--uv-font-mono)" fontSize="11"
              fill="#0a0a0b" letterSpacing="0.1em">PRODUCT DELIVERY ENGINE</text>
            <line x1={ocx - 80} x2={ocx + 80} y1={cy - 16} y2={cy - 16}
              stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
            <text x={ocx} y={cy + 18} textAnchor="middle"
              fontFamily="var(--uv-font-logo)" fontSize="22"
              fill="#1a1a1b" fontWeight="500" letterSpacing="0.22em">ULTRAVIOLET</text>
          </svg>
        </div>

      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div />
      </div>
    </section>
  );
}

// ============ SLIDE 07 — MARKET ===========================================
function Slide07Market() {
  const rows = [
    {
      tag: "TAM",
      value: "$200B",
      what: "Global digital product engineering services spend.",
      who: "500K+ SOFTWARE COMPANIES"
    },
    {
      tag: "SAM",
      value: "$10–20B",
      what: "Product companies, 50–500 employees, modern stacks, dedicated product teams.",
      who: "60K–100K COMPANIES"
    },
    {
      tag: "SOM",
      value: "$300M–$1B",
      what: "Series A–C early adopters with dedicated product teams and growing backlogs.",
      who: "7K–10K COMPANIES BEACHHEAD"
    }
  ];
  return (
    <section className="slide s-market" data-screen-label="07 Market" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>MARKET</div>
      </div>

      <div className="slide-body">
        <div className="eyebrow">Where We Play</div>
        <h2 className="display lg" style={{marginTop: 20}}>
          $200B in engineering spend <span className="dim" style={{ whiteSpace: 'nowrap' }}> managed by ticketing systems</span>
        </h2>

        <div className="market-grid">
          <div className="market-dots">
            <div className="ring tam" />
            <div className="ring sam" />
            <div className="ring som" />
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <line x1="10%" y1="88%" x2="62%" y2="30%" style={{ stroke: 'color-mix(in oklab, var(--uv-text-primary) 25%, var(--uv-bg-primary))' }} strokeWidth="2" />
            </svg>
            <div className="market-dot-row" style={{ bottom: '4%', left: '8%' }}>
              <div className="market-dot som-dot" />
              <div className="market-dot-label">
                <div className="market-dot-k">SOM</div>
                <div className="market-dot-v">$300M–$1B</div>
              </div>
            </div>
            <div className="market-dot-row" style={{ bottom: '34%', left: '34%' }}>
              <div className="market-dot sam-dot" />
              <div className="market-dot-label">
                <div className="market-dot-k">SAM</div>
                <div className="market-dot-v">$10–20B</div>
              </div>
            </div>
            <div className="market-dot-row" style={{ bottom: '62%', left: '60%' }}>
              <div className="market-dot tam-dot" />
              <div className="market-dot-label">
                <div className="market-dot-k">TAM</div>
                <div className="market-dot-v">$200B</div>
              </div>
            </div>
          </div>

          <div>
            <div className="table">
              {rows.map(r => (
                <div key={r.tag} className="row">
                  <div className="tag">{r.tag}</div>
                  <div className="value">{r.value}</div>
                  <div className="what">{r.what}</div>
                  <div className="who">{r.who}</div>
                </div>
              ))}
            </div>
            <p className="anchor">
              Sales has Salesforce. Support has Zendesk. Product development has Google Docs.
            </p>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute', left: 120, bottom: 48, zIndex: 5,
        fontFamily: 'var(--uv-font-mono)', fontSize: 11,
        color: 'var(--uv-text-dim)', lineHeight: 1.6, maxWidth: 600
      }}>
        Sources: Gartner DPE Services Market (2024) · Grand View Research · Mordor Intelligence · Growth List · Cledara 2025 Software Spend Report
      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div />
      </div>
    </section>
  );
}

Object.assign(window, { Slide06Moat, SlideSolutionVenn, Slide07Market });
