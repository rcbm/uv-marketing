/* global React */

// ============ SLIDE 08 — COMPETITION ======================================
function Slide08Comp() {
  // Quadrant: X = "code generation" axis (left: none, right: autonomous)
  //           Y = "lifecycle coverage" (bottom: single-step, top: full lifecycle)
  const pts = [
  { x: 15, y: 82, name: "Linear / Jira", sub: "TRACK WORK", uv: false },
  { x: 35, y: 32, name: "GitHub Copilot", sub: "IDE AGENT", uv: false },
  { x: 68, y: 50, name: "Cursor / Claude Code", sub: "CODE AGENT", uv: false },
  { x: 78, y: 40, name: "Devin / Factory", sub: "AUTONOMOUS EXEC", uv: false },
  { x: 28, y: 60, name: "Retool / Replit", sub: "LOW-CODE APPS", uv: false },
  { x: 88, y: 88, name: "ULTRAVIOLET", sub: "PROBLEM → PR", uv: true }];

  return (
    <section className="slide s-comp" data-screen-label="08 Competition" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>COMPETITIVE LANDSCAPE</div>
      </div>

      <div className="slide-body">
        <div className="eyebrow">The Difference</div>
        <h2 className="display lg" style={{ marginTop: 24 }}>
          Not a coding tool, <span className="italic dim">a delivery engine</span>
        </h2>

        <div className="comp-wrap">
          <div className="quadrant">
            <div className="axis-x" />
            <div className="axis-y" />
            <div className="ax-label top">FULL LIFECYCLE</div>
            <div className="ax-label bottom">SINGLE STEP</div>
            <div className="ax-label left">HUMAN-DRIVEN</div>
            <div className="ax-label right">AUTONOMOUS</div>

            {pts.map((p) =>
            <div key={p.name} className={`pt ${p.uv ? 'uv' : ''}`} style={{
              left: `${p.x}%`, top: `${100 - p.y}%`
            }}>
                <div className="marker" />
                <div className="name">{p.name}</div>
                <div className="n-dim">{p.sub}</div>
              </div>
            )}
          </div>

          <div className="table-side">
            <table className="comp-table">
              <thead>
                <tr>
                  <th style={{ width: '34%' }}>Category</th>
                  <th>Discovery</th>
                  <th>Design</th>
                  <th>Autonomous</th>
                  <th>Codebase memory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-name">Linear / Jira</td>
                  <td className="dash">—</td>
                  <td className="dash">—</td>
                  <td className="dash">—</td>
                  <td className="dash">—</td>
                </tr>
                <tr>
                  <td className="row-name">Copilot / Cursor</td>
                  <td className="dash">—</td>
                  <td className="dash">—</td>
                  <td className="dash">—</td>
                  <td className="dash">session</td>
                </tr>
                <tr>
                  <td className="row-name">Devin / Factory</td>
                  <td className="dash">—</td>
                  <td className="dash">—</td>
                  <td className="chk">●</td>
                  <td className="dash">shallow</td>
                </tr>
                <tr>
                  <td className="row-name">Retool / Replit</td>
                  <td className="dash">—</td>
                  <td className="chk">●</td>
                  <td className="dash">walled</td>
                  <td className="dash">—</td>
                </tr>
                <tr className="uv">
                  <td className="row-name">Ultraviolet</td>
                  <td className="chk">●</td>
                  <td className="chk">●</td>
                  <td className="chk">●</td>
                  <td className="chk">compounds</td>
                </tr>
              </tbody>
            </table>

            <p style={{
              marginTop: 32,
              fontSize: 22,
              color: 'var(--uv-text-primary)',
              lineHeight: 1.5
            }}>
              Product discovery to pull request. <span style={{ color: 'var(--uv-text-secondary)' }}>End to end.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div>09 / 10</div>
      </div>
    </section>);

}

// ============ SLIDE 04 — FOUNDER ==========================================
function Slide04Founder() {
  const cv = [
  { role: "VP of Engineering", where: <>Beyond Finance</>, note: "&gt;$1B annual revenue · consumer fintech" },
  { role: "COO", where: <>BackboneIQ</>, note: "Vertical SaaS · ops &amp; eng leadership" },
  { role: "Founder", where: <>Union Billing <span style={{ color: 'var(--uv-text-dim)', fontSize: '0.7em' }}>(YCF 15)</span></>, note: "Payments infrastructure" },
  { role: "Head of Engineering", where: <>Zerocater <span style={{ color: 'var(--uv-text-dim)', fontSize: '0.7em' }}>(YC W11)</span></>, note: "Scaled from $1M to $100M ARR" }];

  return (
    <section className="slide s-founder band" data-screen-label="04 Founder" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>FOUNDER</div>
      </div>

      <div className="slide-body">
        <div className="eyebrow">Why Me</div>
        <h2 className="display lg" style={{ marginTop: 24 }}>
          Solo founder <span className="dim">with 10+ years of operating experience</span>
        </h2>

        <div className="founder-wrap">
          <div className="founder-portrait">
            <div className="portrait">
              <img src="roger-headshot.jpeg" alt="Roger Cosseboom" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <h3 className="f-name">Roger Cosseboom</h3>
            <div className="f-role">Founder &amp; CEO · Ultraviolet</div>
            <a className="f-link" href="https://www.linkedin.com/in/rogercosseboom" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/rogercosseboom <span className="arr">↗</span>
            </a>
          </div>

          <div className="founder-cv">
            <div className="cv-header">Experience</div>
            <ul className="cv">
              {cv.map((c, i) =>
              <li key={i}>
                  <div className="role">{c.role}</div>
                  <div className="where">{c.where}</div>
                  <div className="note" dangerouslySetInnerHTML={{ __html: c.note }} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div />
      </div>
    </section>);

}

// ============ SLIDE 10 — ASK + TRACTION ===================================
function Slide10Ask() {
  const terms = [
  { k: "RAISING", v: <>$500K</> },
  { k: "INSTRUMENT", v: <>Post-money SAFE</> },
  { k: "POST-MONEY CAP", v: <>$5M <span className="dim" style={{ fontSize: "28px" }}>(10% dilution)</span></> },
  { k: "USE OF FUNDS", v: <>25 design partners <span className="dim" style={{ fontSize: "28px" }}>→</span> $25K MRR</> },
  { k: "RUNWAY", v: <>15–18 months</> }];

  const log = [
  { when: "Q1 · 2026", what: "15 user interviews completed", metric: "15 / 15", state: "done" },
  { when: "APR · 2026", what: "MVP build & internal testing", metric: "IN PROGRESS", state: "now" },
  { when: "MAY 9 · 2026", what: "Early access launch", metric: "T−17 DAYS", state: "now" },
  { when: "Q3 · 2026", what: "Design partner pilots", metric: "25 TARGET", state: "future" },
  { when: "Q4 · 2026", what: "Paid conversion · $25K MRR", metric: "RAISE MILESTONE", state: "future" }];

  return (
    <section className="slide s-ask inverse" data-screen-label="10 Ask" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>THE ASK</div>
      </div>

      <div className="slide-body">
        <div className="eyebrow">Close the Loop</div>

        <div className="ask-grid">
          <div className="ask-traction">
            <h3 className="ask-h3">Traction · Road to seed</h3>
            <ul className="ask-log">
              {log.map((l, i) =>
              <li key={i} className={l.state}>
                  <div className="chk">{l.state === "done" ? "✓" : ""}</div>
                  <div className="when">{l.when}</div>
                  <div className="what" style={{ fontSize: "17px" }}>{l.what}</div>
                  <div className="metric">{l.metric}</div>
                </li>
              )}
            </ul>
          </div>

          <div className="terms">
            <h3 className="ask-h3">The Ask</h3>
            {terms.map((t, i) =>
            <div key={i} className="t-row">
                <div className="k">{t.k}</div>
                <div className="v" style={{ fontSize: "28px" }}>{t.v}</div>
              </div>
            )}
          </div>
        </div>

        <div className="vision">
          <div className="k">FUTURE</div>
          <div className="v">
            The operating system for software companies.
          </div>
          <div className="contact" style={{ fontSize: "18px" }}>
            <span className="label" style={{ fontSize: "13px" }}>CONTACT</span>
            <span className="line" style={{ fontSize: "18px" }}>Roger Cosseboom</span><br />
            roger@uv.now
          </div>
        </div>
      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div>THANK YOU</div>
      </div>
    </section>);

}

Object.assign(window, { Slide04Founder, Slide08Comp, Slide10Ask });