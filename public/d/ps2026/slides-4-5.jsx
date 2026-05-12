/* global React */

// ============ SLIDE 04 — HOW IT WORKS =====================================
function Slide04How() {
  const steps = [
    {
      n: "01",
      t: <>Discover <span className="italic">the problem.</span></>,
      d: "UV reads your customer interviews, support tickets, and usage data. It surfaces opportunities — not guesses. You pick what matters.",
      tags: ["INTERVIEWS", "TICKETS", "USAGE", "PATTERNS"],
      who: <><b>PM</b> + AI COPILOT</>
    },
    {
      n: "02",
      t: <>Design <span className="italic">the solution.</span></>,
      d: "A copilot challenges your thinking. Asks the hard questions up front — edge cases, roles, fallbacks — against your actual codebase. You produce an executable spec.",
      tags: ["SPEC", "EDGE CASES", "ARCHITECTURE", "RISK"],
      who: <><b>PM</b> + CODEBASE INTELLIGENCE</>
    },
    {
      n: "03",
      t: <>Ship <span className="italic">overnight.</span></>,
      d: "Autonomous agents execute in isolated containers, following your team's patterns, run tests, and open a pull request. Review the behavior — not the code — in the morning.",
      tags: ["EXECUTION", "TESTS", "PULL REQUEST", "REVIEW"],
      who: <><b>AGENTS</b> · ENG REVIEWS</>
    }
  ];
  return (
    <section className="slide s-how" data-screen-label="04 How It Works" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>HOW IT WORKS</div>
      </div>

      <div className="slide-body">
        <div className="eyebrow">The Loop</div>
        <h2 className="display lg" style={{marginTop: 24, maxWidth: 1500}}>
          Problem to PRD <span className="dim">to</span> pull request.
        </h2>
        <p className="lede" style={{marginTop: 18}}>
          One system across the full product development lifecycle. No tickets over a wall. No context loss.
        </p>

        <div className="steps" style={{marginTop: 36}}>
          {steps.map((s, i) => (
            <div key={i} className="step">
              <div className="num">{s.n}</div>
              <div className="t">{s.t}</div>
              <div className="d">{s.d}</div>
              <div className="tags">
                {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="who-bar">
          {steps.map((s, i) => (
            <div key={i} className="who">{s.who}</div>
          ))}
        </div>
      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div>05 / 10</div>
      </div>
    </section>
  );
}

// ============ SLIDE 05 — EXAMPLE / DAY IN THE LIFE ========================
function Slide05Example() {
  const entries = [
    {
      when: "09:15",
      what: <>UV ingests 12 recent interviews, surfaces a retention-risk opportunity.</>,
      who: <><span className="dot" />UV</>,
      cls: "ai"
    },
    {
      when: "10:40",
      what: <>PM validates the opportunity. UV drafts the full project plan against the codebase.</>,
      who: <><span className="dot" />PM + UV</>,
      cls: ""
    },
    {
      when: "13:20",
      what: <>Agents execute the plan, step by step.</>,
      who: <><span className="dot" />UV</>,
      cls: "ai"
    },
    {
      when: "14:30",
      what: <>Tests pass. Quality gates run. PR opened for review.</>,
      who: <><span className="dot" />UV</>,
      cls: "ai"
    },
    {
      when: "15:45",
      what: <>Engineer reviews the diff. PM verifies behavior. Merged to production.</>,
      who: <><span className="dot" />ENG + PM</>,
      cls: ""
    }
  ];
  return (
    <section className="slide s-example band" data-screen-label="05 Example" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />

      <div className="slide-chrome top">
        <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
        <div className="rule-line" />
        <div>A DAY WITH UV</div>
      </div>

      <div className="slide-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="eyebrow">Customer Story</div>

        <div className="scene-hdr" style={{marginTop: 24}}>
          <h2 className="display lg">
            One PM + Ultraviolet, <span className="dim" style={{ whiteSpace: 'nowrap' }}>one day</span>
          </h2>
        </div>

        <div style={{marginTop: 24, display: 'flex', flexDirection: 'column'}}>
          <div style={{borderTop: '1px solid var(--uv-border)'}}>
            {entries.map((e, i) => (
              <div key={i} className={`entry ${e.cls}`}>
                <div className="when">{e.when}</div>
                <div className="what">{e.what}</div>
                <div className="who">{e.who}</div>
              </div>
            ))}
          </div>

          <div className="outcome">
            Churn risk identified and resolved in one day
          </div>
        </div>
      </div>

      <div className="slide-chrome bot">
        <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
        <div className="rule-line" />
        <div>06 / 10</div>
      </div>
    </section>
  );
}

Object.assign(window, { Slide04How, Slide05Example });
