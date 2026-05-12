/* global React */

// ============ SLIDE 04 HOW V2 — 5-PHASE PIPELINE ==========================
function Slide04HowV2() {
  const phases = [
    {
      n: "01",
      phase: "Discover",
      desc: "Continuously ingests signals across the org: support tickets, sales calls, CRM notes, Slack threads, interview transcripts, screen recordings usage.",
      input: "Raw signals",
      output: "Structured corpus",
      tags: ["TICKETS", "SALES CALLS", "NPS", "G2 REVIEWS", "SLACK"],
      who: "AI · CONTINUOUS",
      ai: true,
    },
    {
      n: "02",
      phase: "Analyze",
      desc: "AI clusters related signals into Patterns with confidence scores. Humans validate. Validated patterns aggregate into scored Opportunities, with supporting signals and expected impact.",
      input: "Signal corpus",
      output: "Scored opportunities",
      tags: ["PATTERN CLUSTER", "CONFIDENCE SCORE", "PM VALIDATION"],
        who: "AI → PM VALIDATES",
      ai: false,
    },
    {
      n: "03",
      phase: "Plan",
      desc: "Opportunity becomes a Project. AI drafts the full PRD and technical spec: problem, goals, architecture, risks, test plan, phased delivery. Humans review and approve each section.",
      input: "Validated opportunity",
      output: "Project plan",
      tags: ["PRD", "TECH SPEC", "RISK REGISTER", "PHASES"],
      who: "AI DRAFTS · PM APPROVES",
      ai: false,
    },
    {
      n: "04",
      phase: "Build",
      desc: "Tasks execute autonomously. Background agents write code, run tests against acceptance criteria, and pass quality gates, including comparing pre/post baseline.",
      input: "Approved plan",
      output: "PR + passing tests",
      tags: ["ACCEPTANCE CRITERIA", "QUALITY GATE", "BASELINE"],
      who: "AGENTS · ENG REVIEWS",
      ai: true,
    },
    {
      n: "05",
      phase: "Ship",
      desc: "PR merged. Auto-generated change documentation and impact assumptions. Real-time monitoring alerts on quality gate failures and blocked workstreams.",
      input: "Merged PR",
      output: "Production + audit trail",
      tags: ["CHANGE DOCS", "IMPACT ASSESSMENT", "MONITORING"],
      who: "AGENTS · PM MONITORS",
      ai: true,
    },
  ];

  return (
    <section className="slide s-how-v2" data-screen-label="05 How It Works" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>HOW IT WORKS</div>
      </div>

      <div className="slide-body">
        <div className="v2-head">
          <h2 className="display md" style={{ margin: 0 }}>
            The Product Delivery <span className="dim">Engine</span>
          </h2>
        </div>

        <div className="v2-pipeline">
          {phases.map((p, i) => {
            const bgs = [
              'color-mix(in oklab, var(--uv-text-primary) 15%, var(--uv-bg-primary))',
              'color-mix(in oklab, var(--uv-text-primary) 35%, var(--uv-bg-primary))',
              'color-mix(in oklab, var(--uv-text-primary) 55%, var(--uv-bg-primary))',
              'color-mix(in oklab, var(--uv-text-primary) 78%, var(--uv-bg-primary))',
              'var(--uv-text-primary)'
            ];
            const textColors = [
              'var(--uv-text-primary)',
              'var(--uv-text-primary)',
              'var(--uv-bg-primary)',
              'var(--uv-bg-primary)',
              'var(--uv-bg-primary)'
            ];
            const dimColors = [
              'var(--uv-text-primary)',
              'var(--uv-text-primary)',
              'color-mix(in oklab, var(--uv-bg-primary) 75%, transparent)',
              'color-mix(in oklab, var(--uv-bg-primary) 70%, transparent)',
              'color-mix(in oklab, var(--uv-bg-primary) 70%, transparent)'
            ];
            return (
            <React.Fragment key={i}>
              <div className="v2-col">
                <div className="v2-phase" style={{
                  background: bgs[i],
                  aspectRatio: '1 / 1'
                }}>
                  <div className="v2-pname" style={{ color: textColors[i] }}>{p.phase}</div>
                  <div className="v2-io" style={{
                    color: dimColors[i],
                    borderColor: i < 2 ? 'var(--uv-border)' : 'color-mix(in oklab, var(--uv-bg-primary) 15%, transparent)'
                  }}>
                    <div><span className="v2-io-k" style={{ color: dimColors[i] }}>IN</span>{p.input}</div>
                    <div><span className="v2-io-k" style={{ color: dimColors[i] }}>OUT</span>{p.output}</div>
                  </div>
                  <div className={`v2-who${p.ai ? ' ai' : ''}`} style={{
                    color: dimColors[i],
                    borderColor: i < 2 ? 'var(--uv-border)' : 'color-mix(in oklab, var(--uv-bg-primary) 15%, transparent)'
                  }}>{p.who}</div>
                </div>
                <div className="v2-desc-below">{p.desc}</div>
              </div>
              {i < 4 && (
                <div className="v2-arrow-col">→</div>
              )}
            </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============ SLIDE 04b — TRACEABILITY CHAIN ==============================
function Slide04Trace() {
  const rows = [
    {
      layer: "Customer Signal",
      example: '"We can\'t adopt without SSO. Enterprise policy."',
      meta: "14 signals · Intercom, Support, Sales, G2 · Critical · Enterprise segment",
      first: true,
    },
    {
      layer: "Pattern",
      example: "Enterprise identity demand",
      meta: "88% confidence · feature_gap · signals from 4 channels",
    },
    {
      layer: "Opportunity",
      example: "SSO & SCIM Integration",
      meta: "Priority 91 · Signal strength 88 · $500k+ pipeline at risk",
    },
    {
      layer: "Project",
      example: "SSO Implementation",
      meta: "4 phases: Foundation → Core SSO → SCIM Provisioning → Migration & Rollout",
    },
    {
      layer: "Task",
      example: "Implement SAML 2.0 IdP integration",
      meta: "Complexity: high · 7 acceptance criteria · quality gate: passed",
    },
    {
      layer: "Merged PR",
      example: "PR #247 · 1,847 lines · all tests pass",
      meta: "Code review: passed · change docs: auto-generated · live in production",
      last: true,
    },
  ];

  return (
    <section className="slide s-trace inverse" data-screen-label="06 Traceability" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>TRACEABILITY</div>
      </div>

      <div className="slide-body">
        <div className="trace-layout">

          <div className="trace-left">
            <h2 className="display md" style={{ margin: 0, color: 'var(--uv-text-primary)' }}>
              Every shipped line<br />
              of code traces back<br />
              to a customer quote.
            </h2>
            <p style={{
              fontFamily: 'var(--uv-font-mono)',
              fontSize: 16,
              lineHeight: 1.7,
              color: 'var(--uv-text-secondary)',
              marginTop: 32,
              maxWidth: 340,
            }}>
              Product leaders can answer "why did we build this?" with evidence. Engineers see the customer context behind every task. Executives see pipeline ROI of every sprint.
            </p>
            <div className="trace-foot">
              The audit trail nobody else has
            </div>
          </div>

          <div className="trace-right">
            {rows.map((r, i) => (
              <div key={i} className={`trace-row${r.first ? ' first' : ''}${r.last ? ' last' : ''}`}>
                <div className="trace-node-col">
                  <div className="trace-dot" />
                  {!r.last && <div className="trace-stem" />}
                </div>
                <div className="trace-layer-col">
                  <div className="trace-layer">{r.layer}</div>
                </div>
                <div className="trace-content-col">
                  <div className="trace-example">{r.example}</div>
                  <div className="trace-meta">{r.meta}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Slide04HowV2, Slide04Trace, Slide04HowV3a, Slide04HowV3b, Slide04HowV3c });

// ============ SLIDE 04 V3a — MINIMAL PIPELINE =============================
// One sentence per phase. Big phase names. Generous whitespace.
function Slide04HowV3a() {
  const phases = [
    { n: "01", phase: "Discover",  line: "AI ingests every customer signal across your org." },
    { n: "02", phase: "Analyze",   line: "Signals cluster into validated opportunities." },
    { n: "03", phase: "Plan",      line: "AI drafts the PRD and tech spec. You approve." },
    { n: "04", phase: "Build",     line: "Agents execute. Quality gates enforce the bar." },
    { n: "05", phase: "Ship",      line: "Merged, documented, monitored — automatically." },
  ];
  return (
    <section className="slide s-how-v3a" data-screen-label="05a How — Minimal" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>HOW IT WORKS · A</div>
      </div>

      <div className="slide-body">
        <h2 className="display lg" style={{ marginTop: 0, maxWidth: 1400 }}>
          Customer signal <span className="dim">to</span> merged PR.
        </h2>

        <div className="v3a-pipeline">
          {phases.map((p, i) => (
            <div key={i} className="v3a-phase">
              <div className="v3a-n">{p.n}</div>
              <div className="v3a-name">{p.phase}</div>
              <div className="v3a-line">{p.line}</div>
            </div>
          ))}
        </div>

        <div className="v3a-foot">
          <div className="v3a-foot-k">One system · Continuous loop</div>
          <div className="v3a-foot-v">Every step traceable, end to end.</div>
        </div>
      </div>
    </section>
  );
}

// ============ SLIDE 04 V3b — ARTIFACT FLOW ================================
// Each phase is reduced to the artifact it produces. Reads like a diagram.
function Slide04HowV3b() {
  const stages = [
    { phase: "Discover", artifact: "Signals",       sub: "Tickets, calls, NPS, reviews" },
    { phase: "Analyze",  artifact: "Patterns",      sub: "Clustered. Scored. Validated." },
    { phase: "Plan",     artifact: "Specs",         sub: "PRD + tech spec, approved." },
    { phase: "Build",    artifact: "Pull Requests", sub: "Agents execute. Tests pass." },
    { phase: "Ship",     artifact: "Production",    sub: "Docs + impact, auto-generated." },
  ];
  return (
    <section className="slide s-how-v3b inverse" data-screen-label="05b How — Artifact Flow" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>HOW IT WORKS · B</div>
      </div>

      <div className="slide-body">
        <h2 className="display md" style={{ marginTop: 0, maxWidth: 1400 }}>
          The pipeline, by what it produces.
        </h2>

        <div className="v3b-flow">
          {stages.map((s, i) => (
            <React.Fragment key={i}>
              <div className="v3b-node">
                <div className="v3b-phase">{s.phase}</div>
                <div className="v3b-artifact">{s.artifact}</div>
                <div className="v3b-sub">{s.sub}</div>
              </div>
              {i < stages.length - 1 && <div className="v3b-arrow">→</div>}
            </React.Fragment>
          ))}
        </div>

        <div className="v3b-foot">
          Every artifact links back to the one before it.
        </div>
      </div>
    </section>
  );
}

// ============ SLIDE 04 V3c — WHO DOES WHAT ================================
// Reframes around the human / AI handoff. Two-line cards.
function Slide04HowV3c() {
  const phases = [
    { n: "01", phase: "Discover", who: "AI",       verb: "AI listens",            note: "Every channel, continuously." },
    { n: "02", phase: "Analyze",  who: "AI / PM",  verb: "AI proposes",           note: "PM validates the patterns." },
    { n: "03", phase: "Plan",     who: "AI / PM",  verb: "AI drafts",             note: "PM approves PRD and spec." },
    { n: "04", phase: "Build",    who: "Agents",   verb: "Agents execute",        note: "Gates enforce the bar." },
    { n: "05", phase: "Ship",     who: "Auto",     verb: "Auto-documented",       note: "Change docs and impact." },
  ];
  return (
    <section className="slide s-how-v3c" data-screen-label="05c How — Who Does What" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>HOW IT WORKS · C</div>
      </div>

      <div className="slide-body">
        <h2 className="display md" style={{ marginTop: 0, maxWidth: 1500 }}>
          AI does the work. <span className="dim">You make the calls.</span>
        </h2>

        <div className="v3c-grid">
          {phases.map((p, i) => (
            <div key={i} className="v3c-card">
              <div className="v3c-top">
                <span className="v3c-n">{p.n}</span>
                <span className="v3c-who">{p.who}</span>
              </div>
              <div className="v3c-phase">{p.phase}</div>
              <div className="v3c-verb">{p.verb}</div>
              <div className="v3c-note">{p.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
