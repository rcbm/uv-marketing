/* global React */

// ============ SLIDE 01 — TITLE ============================================
function Slide01Title() {
  return (
    <section className="slide s-title" data-screen-label="01 Title" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      <div className="slide-body" style={{ padding: '80px 120px' }}>
        <div className="hero-wrap">
          <h1 className="hero-name" style={{ fontWeight: "300", color: "rgb(23, 255, 240)" }}><span style={{ color: "rgb(232, 232, 232)", fontFamily: "\"Work Sans\"", fontWeight: "500" }}>Ultraviolet</span></h1>

          <p className="hero-line">
            <span>From customer signal to pull request</span>
            <br />
            <span className="italic dim">The product delivery engine</span>
          </p>
        </div>

        <div className="foot-bar">
          <div className="foot-item">
            <div className="k">Stage</div>
            <div className="v">Pre-Seed · $500K</div>
          </div>
          <div className="foot-item">
            <div className="k">Prepared by</div>
            <div className="v">Roger Cosseboom</div>
          </div>
        </div>
      </div>
    </section>);

}

// ============ SLIDE 02 — PROBLEM (BAR) =====================================
function Slide02ProblemBar() {
  const stages = ["Customer interviews", "Feature requests", "Problem definition", "Prioritization", "PRD writing", "Spec writing", "Technical design", "Acceptance criteria", "Implementation plan"];
  const codeStages = ["Writing code", "Tests", "Code review"];

  return (
    <section className="slide s-problem-bar" data-screen-label="02 Problem (Bar)" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>THE PROBLEM</div>
      </div>

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h2 className="display lg" style={{ maxWidth: 1600 }}>
          AI speeds up <span className="dim">only the last 25%</span> of building products
        </h2>

        <div className="bar-wrap">
          <div className="bar">
            <div className="seg seg-planning">
              <div className="seg-top">
                <div className="seg-pct">75<span className="pct-sign">%</span></div>
              </div>
              <ul className="stage-table">
                {stages.map((s, i) =>
                <li key={s}>
                    <span className="ord">{String(i + 1).padStart(2, '0')}</span>
                    <span className="name">{s}</span>
                  </li>
                )}
              </ul>
            </div>
            <div className="seg seg-code">
              <div className="seg-top">
                <div className="seg-pct">25<span className="pct-sign">%</span></div>
              </div>
              <ul className="stage-table code-stages">
                {codeStages.map((s, i) =>
                <li key={s}>
                    <span className="ord">{String(stages.length + i + 1).padStart(2, '0')}</span>
                    <span className="name">{s}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div>02 / 10</div>
      </div>
    </section>);

}

// ============ SLIDE 02b — STATE OF THE ART ================================
function Slide02bStateOfTheArt() {
  return (
    <section className="slide s-state-of-art" data-screen-label="02b State of the Art" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>THE PROBLEM</div>
      </div>

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 32, textAlign: 'center'
      }}>
        <h2 className="display md" style={{ maxWidth: 1200 }}>
          This is what AI-assisted development<br />
          <span className="dim">actually looks like today</span>
        </h2>

        <div style={{
          width: '100%', maxWidth: 1100,
          borderRadius: 8,
          overflow: 'hidden',
          border: '1px solid var(--uv-border-strong)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)'
        }}>
          <img
            src="uploads/state-of-the-art.png"
            alt="VS Code file tree showing 30+ AI-drafted planning documents"
            style={{ width: '100%', display: 'block' }}
          />
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

// ============ SLIDE 02c — STATE OF THE ART (V2) ===========================
function Slide02cStateOfTheArtV2() {
  return (
    <section className="slide s-state-of-art-v2" data-screen-label="02c State of the Art V2" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>THE PROBLEM</div>
      </div>

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'row',
        alignItems: 'center', justifyContent: 'center',
        gap: 64
      }}>
        <div style={{
          position: 'relative',
          flex: '0 0 auto', maxWidth: 520, maxHeight: '55vh',
          borderRadius: 8,
          overflow: 'hidden'
        }}>
          <img
            src="uploads/state-of-the-art-v2.png"
            alt="VS Code file tree showing 40+ AI-drafted planning documents"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }}
          />
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: '100%',
            background: 'linear-gradient(to right, transparent, color-mix(in oklab, var(--uv-bg-primary) 75%, transparent))',
            pointerEvents: 'none'
          }} />
        </div>

        <div style={{ flex: '1 1 auto', maxWidth: 900 }}>
          <h2 className="display lg" style={{ textAlign: 'left' }}>
            What Agentic coding in 2026 <span className="dim">actually looks like</span>
          </h2>
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

// ============ SLIDE 03 — INSIGHT ==========================================
function Slide03Insight() {
  const cells = [
  {
    k: "GARBAGE IN, GARBAGE OUT",
    v: <>Better <span className="italic">plans</span> beat better models</>,
    b: "LLMs are only as good as what you give them. The work to decide what to build, the interviews, tickets, architectural tradeoffs, live outside the IDE. Labs are racing to improve models instead of the whole workflow."
  },
  {
    k: "THE REAL LEVER",
    v: <>Bad business decisions mean <span className="italic">bad code</span></>,
    b: "The bottleneck moved upstream — to the thinking, scoping, and planning. Ultraviolet competes on the input side: helping users discover new opportunities, think rigorously about what to build next, and plan projects thoroughly enough for them to execute themselves."
  },
  {
    k: "THE EMPOWERED OPERATOR",
    v: <>Your PMs become <span className="italic">devs,</span> your devs become <span className="italic">PMs</span></>,
    b: "The person who talks to the customer is the same person who ships the fix. Insights are no longer translated through multiple teams across sprints. It just gets shipped."
  }];

  return (
    <section className="slide s-insight band" data-screen-label="03 Insight" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>THE INSIGHT</div>
      </div>

      <div className="slide-body">
        <div className="eyebrow show">Why Now</div>
        <h2 className="display lg">
          Planning is the<br />
          <span className="italic">new bottleneck</span>
        </h2>

        <div className="insight-grid">
          {cells.map((c, i) =>
          <div key={i} className="cell">
              <div className="k">0{i + 1} · {c.k}</div>
              <div className="v">{c.v}</div>
              <div className="b">{c.b}</div>
            </div>
          )}
        </div>
      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div>03 / 10</div>
      </div>
    </section>);

}

// ============ SLIDE 03b — INSIGHT V2 (Enumerated pains) ===================
function Slide03InsightV2() {
  const pains = [
    "Context lost at every handoff between tools",
    "PMs spend more time gluing tools together than making decisions",
    "No traceability from shipped feature back to customer need",
    "AI agents get vague prompts because the planning lives in 18 places",
    "Priorities defended in meetings, not proven in data",
    "The same context re-explained across Slack, Docs, Jira, and PRs",
  ];

  return (
    <section className="slide s-insight band" data-screen-label="03b Insight V2" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>THE INSIGHT</div>
      </div>

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h2 className="display lg">
          Planning is the<br />
          <span className="italic">new bottleneck</span>
        </h2>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: 20,
          marginTop: 48, maxWidth: 1200
        }}>
          {pains.map((pain, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'baseline', gap: 20,
              padding: '16px 24px',
              background: 'rgba(255,255,255,0.08)',
              fontFamily: 'var(--uv-font-body)', fontSize: 22,
              lineHeight: 1.4
            }}>
              <span style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 14,
                color: 'var(--uv-text-dim)', letterSpacing: '0.05em',
                flexShrink: 0
              }}>0{i + 1}</span>
              <span style={{ color: 'var(--uv-text-primary)' }}>{pain}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div>03 / 10</div>
      </div>
    </section>
  );
}

// ============ SLIDE 03c — INSIGHT V3 (Two-column pains) ===================
function Slide03InsightV3() {
  const left = [
    "Context lost at every handoff",
    "PMs are expensive middleware",
    "No traceability to customer needs",
  ];
  const right = [
    "AI gets vague inputs from 18 tools",
    "Priorities justified by opinion, not data",
    "Same context re-explained everywhere",
  ];

  const renderCol = (items) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>
      {items.map((item, i) => (
        <div key={i} style={{
          padding: '20px 24px',
          background: 'rgba(255,255,255,0.08)',
          fontFamily: 'var(--uv-font-body)', fontSize: 20,
          color: 'var(--uv-text-primary)', lineHeight: 1.4
        }}>{item}</div>
      ))}
    </div>
  );

  return (
    <section className="slide s-insight band" data-screen-label="03c Insight V3" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>THE INSIGHT</div>
      </div>

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div className="eyebrow show">Why Now</div>
        <h2 className="display lg">
          Planning is the<br />
          <span className="italic">new bottleneck</span>
        </h2>

        <div style={{
          display: 'flex', gap: 20, marginTop: 48
        }}>
          {renderCol(left)}
          {renderCol(right)}
        </div>
      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div>03 / 10</div>
      </div>
    </section>
  );
}

// ============ SLIDE 03d — INSIGHT V4 (Pain → Cost pairs) ==================
function Slide03InsightV4() {
  const rows = [
    { pain: "Context lost at every handoff", cost: "Features ship that nobody asked for" },
    { pain: "PMs glue together 18 tools", cost: "Highest-paid people do lowest-value work" },
    { pain: "No traceability", cost: "Can't justify what shipped or why" },
    { pain: "AI gets scattered, vague input", cost: "Garbage in, garbage out" },
  ];

  return (
    <section className="slide s-insight band" data-screen-label="03d Insight V4" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>THE INSIGHT</div>
      </div>

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div className="eyebrow show">Why Now</div>
        <h2 className="display lg">
          Planning is the<br />
          <span className="italic">new bottleneck</span>
        </h2>

        <div style={{ marginTop: 48, maxWidth: 1400 }}>
          {rows.map((row, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center',
              borderTop: i === 0 ? '1px solid var(--uv-border-strong)' : 'none',
              borderBottom: '1px solid var(--uv-border-strong)',
              padding: '20px 0'
            }}>
              <span style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 13,
                color: 'var(--uv-text-dim)', letterSpacing: '0.05em',
                width: 48, flexShrink: 0
              }}>0{i + 1}</span>
              <span style={{
                fontFamily: 'var(--uv-font-body)', fontSize: 21,
                color: 'var(--uv-text-primary)', flex: 1
              }}>{row.pain}</span>
              <span style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 16,
                color: 'var(--uv-text-dim)', marginLeft: 40, marginRight: 8
              }}>→</span>
              <span style={{
                fontFamily: 'var(--uv-font-body)', fontSize: 19,
                color: 'var(--uv-text-secondary)', flex: 1,
                fontStyle: 'italic'
              }}>{row.cost}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div>03 / 10</div>
      </div>
    </section>
  );
}

Object.assign(window, { Slide01Title, Slide02ProblemBar, Slide02bStateOfTheArt, Slide02cStateOfTheArtV2, Slide03Insight, Slide03InsightV2, Slide03InsightV3, Slide03InsightV4 });