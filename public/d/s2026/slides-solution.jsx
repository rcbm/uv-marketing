/* global React */

const solutionColor = 'color-mix(in oklab, var(--uv-text-primary) 18%, var(--uv-bg-primary))';

const solChrome = (label) => ({
  top: (
    <div className="slide-chrome top">
      <div><span className="dot" /><span className="logo">ULTRAVIOLET</span></div>
      <div className="rule-line" />
      <div>{label}</div>
    </div>
  ),
  bot: (
    <div className="slide-chrome bot">
      <div><span className="logo">ULTRAVIOLET</span> · PRE-SEED</div>
      <div className="rule-line" />
      <div />
    </div>
  )
});

// ==========================================================================
// CONCEPT 1: THE CHAIN, CONCRETE
// ==========================================================================

// V1a — Horizontal chain
function SlideSolChainH() {
  const chrome = solChrome("THE SOLUTION");
  const steps = [
    { phase: "Signal", content: '"We can\'t adopt without SSO. Enterprise policy."', detail: "14 signals · enterprise segment" },
    { phase: "Pattern", content: "Enterprise identity demand", detail: "88% confidence · clustering" },
    { phase: "Opportunity", content: "SSO & SCIM Integration", detail: "Priority 91 · $500K pipeline at risk" },
    { phase: "Project", content: "SSO Implementation", detail: "4 phases · 41 tasks auto-generated" },
    { phase: "Shipped", content: "PR #247 merged", detail: "1,847 lines · all tests pass" },
  ];

  return (
    <section className="slide s-sol-chain-h" data-screen-label="Solution: Chain H" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', gap: 40
      }}>
        <h2 className="display lg">
          One customer quote to <span className="dim">one merged PR</span>
        </h2>

        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
          {steps.map((step, i) => (
            <React.Fragment key={step.phase}>
              <div style={{
                flex: 1, padding: '28px 24px',
                background: solutionColor,
                borderLeft: i === 0 ? 'none' : '1px solid var(--uv-border)'
              }}>
                <div style={{
                  fontFamily: 'var(--uv-font-mono)', fontSize: 11,
                  letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
                  textTransform: 'uppercase', marginBottom: 14
                }}>{step.phase}</div>
                <div style={{
                  fontFamily: 'var(--uv-font-body)', fontSize: 17,
                  color: 'var(--uv-text-primary)', lineHeight: 1.45,
                  marginBottom: 10
                }}>{step.content}</div>
                <div style={{
                  fontFamily: 'var(--uv-font-mono)', fontSize: 12,
                  color: 'var(--uv-text-dim)', letterSpacing: '0.04em'
                }}>{step.detail}</div>
              </div>
              {i < steps.length - 1 && (
                <div style={{
                  display: 'flex', alignItems: 'center',
                  padding: '0 12px', color: 'var(--uv-text-dim)',
                  fontFamily: 'var(--uv-font-mono)', fontSize: 18
                }}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// V1b — Vertical chain
function SlideSolChainV() {
  const chrome = solChrome("THE SOLUTION");
  const steps = [
    { phase: "SIGNAL", content: '"We can\'t adopt without SSO."', detail: "14 signals · critical · enterprise segment" },
    { phase: "PATTERN", content: "Enterprise identity demand", detail: "88% confidence" },
    { phase: "OPPORTUNITY", content: "SSO & SCIM Integration", detail: "Priority 91 · $500K+ pipeline at risk" },
    { phase: "PROJECT", content: "SSO Implementation", detail: "4 phases · 41 tasks · auto-generated" },
    { phase: "SHIPPED", content: "PR #247 · 1,847 lines · all tests pass", detail: "Merged to production" },
  ];

  return (
    <section className="slide s-sol-chain-v" data-screen-label="Solution: Chain V" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', gap: 0,
        position: 'relative'
      }}>
        <h2 className="display lg" style={{ marginBottom: 40 }}>
          Customer interview to <span className="dim">merged PR</span>
        </h2>

        <div style={{ position: 'relative', height: 340 }}>
          {steps.map((step, i) => {
            const leftOffset = i * 140;
            const rightOffset = (steps.length - 1 - i) * 140;
            const topOffset = i * 56;
            return (
            <div key={i} style={{
              position: 'absolute',
              left: leftOffset,
              top: topOffset,
              right: rightOffset,
              display: 'flex', alignItems: 'baseline', gap: 24,
              padding: '14px 24px',
              background: 'var(--uv-text-primary)'
            }}>
              <span style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 11,
                letterSpacing: '0.15em', color: 'color-mix(in oklab, var(--uv-bg-primary) 70%, transparent)',
                width: 100, flexShrink: 0
              }}>{step.phase}</span>
              <span style={{
                fontFamily: 'var(--uv-font-body)', fontSize: 18,
                color: 'var(--uv-bg-primary)', flex: 1
              }}>{step.content}</span>
              <span style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 12,
                color: 'color-mix(in oklab, var(--uv-bg-primary) 70%, transparent)', letterSpacing: '0.04em'
              }}>{step.detail}</span>
            </div>
            );
          })}
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// V1c — Traceability stagger (6-row version of chain)
function SlideSolChainTrace() {
  const chrome = solChrome("TRACEABILITY");
  const steps = [
    { phase: "SIGNAL", content: '"We can\'t adopt without SSO. Enterprise policy."', detail: "14 signals · Intercom, Interviews, CSD, Sales " },
    { phase: "PATTERN", content: "Enterprise identity demand", detail: "88% confidence · 23 signals · 4 channels · feature_gap" },
    { phase: "OPPORTUNITY", content: "SSO & SCIM Integration", detail: "Priority 91 · $500K+ pipeline represented" },
    { phase: "PROJECT", content: "SSO Implementation", detail: "4 phases · Scaffolding → SSO → SCIM → Rollout" },
    { phase: "TASK", content: "Implement SAML 2.0 IdP integration", detail: "7 acceptance criteria · quality gate: passed" },
    { phase: "MERGED PR", content: "PR #247 · 1,847 total lines · all tests pass", detail: "Documentation auto-generated · live in production" },
  ];

  return (
    <section className="slide s-sol-chain-trace" data-screen-label="Solution: Chain Trace" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', gap: 0,
        position: 'relative'
      }}>
        <h2 className="display lg" style={{ marginBottom: 40 }}>
          Customer signal to <span className="dim">merged PR</span>
        </h2>

        <div style={{ position: 'relative', height: 360 }}>
          {steps.map((step, i) => {
            const leftOffset = i * 110;
            const rightOffset = (steps.length - 1 - i) * 110;
            const topOffset = i * 48;
            return (
            <div key={i} style={{
              position: 'absolute',
              left: leftOffset,
              top: topOffset,
              right: rightOffset,
              display: 'flex', alignItems: 'baseline', gap: 24,
              padding: '12px 24px',
              background: 'var(--uv-text-primary)'
            }}>
              <span style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 11,
                letterSpacing: '0.15em', color: 'color-mix(in oklab, var(--uv-bg-primary) 70%, transparent)',
                width: 100, flexShrink: 0
              }}>{step.phase}</span>
              <span style={{
                fontFamily: 'var(--uv-font-body)', fontSize: 17,
                color: 'var(--uv-bg-primary)', flex: 1
              }}>{step.content}</span>
              <span style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 12,
                color: 'color-mix(in oklab, var(--uv-bg-primary) 70%, transparent)', letterSpacing: '0.04em'
              }}>{step.detail}</span>
            </div>
            );
          })}
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// ==========================================================================
// CONCEPT 2: THREE CAPABILITIES
// ==========================================================================

// V2a — Three columns
function SlideSolThreeCols() {
  const chrome = solChrome("THE SOLUTION");
  const caps = [
    {
      n: "01", label: "Discover",
      head: "Turn scattered signals into scored opportunities",
      body: "Ingest interviews, tickets, sales calls, NPS, reviews. AI clusters them into patterns, scores impact, and surfaces what to build next."
    },
    {
      n: "02", label: "Plan",
      head: "Turn opportunities into executable specs",
      body: "AI drafts the PRD, technical architecture, risk register, and test plan — grounded in your actual codebase. You review and approve."
    },
    {
      n: "03", label: "Ship",
      head: "Turn specs into merged PRs",
      body: "Agents execute tasks, run tests against acceptance criteria, and pass quality gates. PR opens when everything passes. Docs auto-generated."
    }
  ];

  return (
    <section className="slide s-sol-three-cols" data-screen-label="Solution: 3 Cols" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', gap: 48
      }}>
        <h2 className="display lg">
          Discover. Plan. <span className="dim">Ship.</span>
        </h2>

        <div style={{ display: 'flex', gap: 2 }}>
          {caps.map((cap) => (
            <div key={cap.n} style={{
              flex: 1, padding: '32px 32px',
              background: solutionColor
            }}>
              <div style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 11,
                letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
                textTransform: 'uppercase', marginBottom: 20
              }}>{cap.n} · {cap.label}</div>
              <div style={{
                fontFamily: 'var(--uv-font-display)', fontSize: 26,
                fontWeight: 400, letterSpacing: '-0.01em',
                color: 'var(--uv-text-primary)', lineHeight: 1.2,
                marginBottom: 16
              }}>{cap.head}</div>
              <div style={{
                fontFamily: 'var(--uv-font-body)', fontSize: 16,
                color: 'var(--uv-text-secondary)', lineHeight: 1.55
              }}>{cap.body}</div>
            </div>
          ))}
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// V2b — Three large blocks, minimal text
function SlideSolThreeBlocks() {
  const chrome = solChrome("THE SOLUTION");
  const caps = [
    { label: "Discover", head: "Signals → Opportunities", sub: "AI ingests every customer signal. Clusters. Scores. Surfaces what to build." },
    { label: "Plan", head: "Opportunities → Specs", sub: "AI drafts PRD and tech spec against your codebase. You approve." },
    { label: "Ship", head: "Specs → Merged PRs", sub: "Agents execute. Quality gates enforce. Docs auto-generated." },
  ];

  return (
    <section className="slide s-sol-three-blocks" data-screen-label="Solution: 3 Blocks" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', gap: 48
      }}>
        <h2 className="display lg">
          Discover. Plan. <span className="dim">Ship.</span>
        </h2>

        <div style={{ display: 'flex', gap: 2 }}>
          {caps.map((cap, i) => (
            <div key={i} style={{
              flex: 1, padding: '48px 36px',
              background: solutionColor,
              display: 'flex', flexDirection: 'column', gap: 16
            }}>
              <div style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 12,
                letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
                textTransform: 'uppercase'
              }}>{cap.label}</div>
              <div style={{
                fontFamily: 'var(--uv-font-display)', fontSize: 32,
                fontWeight: 400, letterSpacing: '-0.01em',
                color: 'var(--uv-text-primary)', lineHeight: 1.15
              }}>{cap.head}</div>
              <div style={{
                fontFamily: 'var(--uv-font-body)', fontSize: 17,
                color: 'var(--uv-text-secondary)', lineHeight: 1.5
              }}>{cap.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// ==========================================================================
// CONCEPT 3: THE FLYWHEEL
// ==========================================================================

// V3a — Linear loop with return
function SlideSolFlywheel() {
  const chrome = solChrome("THE SOLUTION");
  const steps = [
    { label: "Signals", desc: "Customer interviews, tickets, calls, reviews" },
    { label: "Decisions", desc: "Patterns scored, opportunities prioritized" },
    { label: "Code", desc: "Agents execute specs, quality gates enforce" },
    { label: "Outcomes", desc: "PR merged, docs generated, impact measured" },
  ];

  return (
    <section className="slide s-sol-flywheel" data-screen-label="Solution: Flywheel" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', gap: 48
      }}>
        <h2 className="display lg">
          It compounds. <span className="dim">Every cycle makes it smarter.</span>
        </h2>

        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', gap: 2 }}>
            {steps.map((step, i) => {
              const bgs = [
                'color-mix(in oklab, var(--uv-text-primary) 20%, var(--uv-bg-primary))',
                'color-mix(in oklab, var(--uv-text-primary) 45%, var(--uv-bg-primary))',
                'color-mix(in oklab, var(--uv-text-primary) 72%, var(--uv-bg-primary))',
                'var(--uv-text-primary)'
              ];
              const mainColors = [
                'var(--uv-text-primary)',
                'var(--uv-bg-primary)',
                'var(--uv-bg-primary)',
                'var(--uv-bg-primary)'
              ];
              const labelColors = [
                'var(--uv-text-secondary)',
                'color-mix(in oklab, var(--uv-bg-primary) 75%, transparent)',
                'color-mix(in oklab, var(--uv-bg-primary) 70%, transparent)',
                'color-mix(in oklab, var(--uv-bg-primary) 70%, transparent)'
              ];
              return (
              <React.Fragment key={step.label}>
                <div style={{
                  flex: 1, padding: '32px 28px',
                  background: bgs[i]
                }}>
                  <div style={{
                    fontFamily: 'var(--uv-font-mono)', fontSize: 12,
                    letterSpacing: '0.15em', color: labelColors[i],
                    textTransform: 'uppercase', marginBottom: 14
                  }}>0{i + 1} · {step.label}</div>
                  <div style={{
                    fontFamily: 'var(--uv-font-body)', fontSize: 17,
                    color: mainColors[i], lineHeight: 1.45
                  }}>{step.desc}</div>
                </div>
                {i < steps.length - 1 && (
                  <div style={{
                    display: 'flex', alignItems: 'center',
                    padding: '0 8px', color: 'var(--uv-text-dim)',
                    fontFamily: 'var(--uv-font-mono)', fontSize: 18
                  }}>→</div>
                )}
              </React.Fragment>
              );
            })}
          </div>

          {/* Return arrow */}
          <div style={{
            marginTop: 16, textAlign: 'center',
            fontFamily: 'var(--uv-font-mono)', fontSize: 14,
            color: 'var(--uv-text-dim)', letterSpacing: '0.08em'
          }}>
            ←── outcomes feed back as new signals ──→
          </div>
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// V3b — Flywheel with compound dataset emphasis
function SlideSolFlywheelCompound() {
  const chrome = solChrome("THE SOLUTION");
  const steps = [
    { label: "Signals", desc: "Every customer touchpoint ingested" },
    { label: "Decisions", desc: "Patterns → Opportunities → Projects" },
    { label: "Code", desc: "Agents execute, gates verify" },
    { label: "Outcomes", desc: "Shipped, documented, measured" },
  ];

  return (
    <section className="slide s-sol-flywheel-c" data-screen-label="Solution: Flywheel Compound" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', gap: 40
      }}>
        <h2 className="display lg">
          Every cycle makes the system <span className="dim">smarter</span>
        </h2>

        <div style={{ display: 'flex', gap: 2 }}>
          {steps.map((step, i) => {
            const bgs = [
              'color-mix(in oklab, var(--uv-text-primary) 20%, var(--uv-bg-primary))',
              'color-mix(in oklab, var(--uv-text-primary) 45%, var(--uv-bg-primary))',
              'color-mix(in oklab, var(--uv-text-primary) 72%, var(--uv-bg-primary))',
              'var(--uv-text-primary)'
            ];
            const mainColors = [
              'var(--uv-text-primary)',
              'var(--uv-bg-primary)',
              'var(--uv-bg-primary)',
              'var(--uv-bg-primary)'
            ];
            const subColors = [
              'var(--uv-text-secondary)',
              'color-mix(in oklab, var(--uv-bg-primary) 65%, transparent)',
              'color-mix(in oklab, var(--uv-bg-primary) 60%, transparent)',
              'color-mix(in oklab, var(--uv-bg-primary) 60%, transparent)'
            ];
            return (
            <div key={i} style={{
              flex: 1, padding: '36px 28px',
              background: bgs[i],
              textAlign: 'center'
            }}>
              <div style={{
                fontFamily: 'var(--uv-font-display)', fontSize: 28,
                fontWeight: 400, letterSpacing: '-0.01em',
                color: mainColors[i], marginBottom: 10
              }}>{step.label}</div>
              <div style={{
                fontFamily: 'var(--uv-font-body)', fontSize: 16,
                color: subColors[i], lineHeight: 1.45
              }}>{step.desc}</div>
            </div>
            );
          })}
        </div>

        <div style={{
          display: 'flex', justifyContent: 'center', gap: 32,
          padding: '24px 0',
          borderTop: '1px solid var(--uv-border)',
          borderBottom: '1px solid var(--uv-border)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--uv-font-mono)', fontSize: 11,
              letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
              marginBottom: 6
            }}>CODEBASE INTELLIGENCE</div>
            <div style={{
              fontFamily: 'var(--uv-font-body)', fontSize: 16,
              color: 'var(--uv-text-secondary)'
            }}>Architecture, debt, ownership, patterns</div>
          </div>
          <div style={{
            fontFamily: 'var(--uv-font-mono)', fontSize: 24,
            color: 'var(--uv-text-dim)', alignSelf: 'center'
          }}>+</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--uv-font-mono)', fontSize: 11,
              letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
              marginBottom: 6
            }}>BUSINESS CONTEXT</div>
            <div style={{
              fontFamily: 'var(--uv-font-body)', fontSize: 16,
              color: 'var(--uv-text-secondary)'
            }}>Themes, priorities, tradeoffs, outcomes</div>
          </div>
          <div style={{
            fontFamily: 'var(--uv-font-mono)', fontSize: 24,
            color: 'var(--uv-text-dim)', alignSelf: 'center'
          }}>=</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--uv-font-mono)', fontSize: 11,
              letterSpacing: '0.15em', color: 'var(--uv-text-primary)',
              marginBottom: 6
            }}>THE COMPOUND DATASET</div>
            <div style={{
              fontFamily: 'var(--uv-font-body)', fontSize: 16,
              color: 'var(--uv-text-primary)'
            }}>Gets denser every month</div>
          </div>
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// ==========================================================================
// CONCEPT 4: SIDE-BY-SIDE ANNOTATED SCREENSHOTS
// ==========================================================================

// V4a — Discovery screenshot + explanation
function SlideSolScreenDiscovery() {
  const chrome = solChrome("THE SOLUTION");
  return (
    <section className="slide s-sol-screen-disc" data-screen-label="Solution: Discovery Screenshot" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'row',
        alignItems: 'center', gap: 56
      }}>
        <div style={{ flex: '1 1 auto', maxWidth: 600 }}>
          <div style={{
            fontFamily: 'var(--uv-font-mono)', fontSize: 11,
            letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
            textTransform: 'uppercase', marginBottom: 16
          }}>01 · DISCOVER</div>
          <h2 className="display md" style={{ marginBottom: 24 }}>
            Raw signals become <span className="dim">scored opportunities</span>
          </h2>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 12
          }}>
            {[
              "Ingests interviews, tickets, sales calls, reviews",
              "AI clusters signals into patterns with confidence scores",
              "Surfaces opportunities with $ impact and segment data",
              "PM validates — human in the loop at every step"
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 12, alignItems: 'baseline',
                fontFamily: 'var(--uv-font-body)', fontSize: 17,
                color: 'var(--uv-text-secondary)', lineHeight: 1.4
              }}>
                <span style={{
                  fontFamily: 'var(--uv-font-mono)', fontSize: 12,
                  color: 'var(--uv-text-dim)', flexShrink: 0
                }}>→</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          flex: '0 0 auto', maxWidth: 700,
          borderRadius: 8, overflow: 'hidden',
          border: '1px solid var(--uv-border-strong)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
        }}>
          <img src="uploads/uv-discovery.png" alt="Ultraviolet Discovery view"
            style={{ width: '100%', display: 'block' }} />
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// V4b — Execution screenshot + explanation
function SlideSolScreenExecution() {
  const chrome = solChrome("THE SOLUTION");
  return (
    <section className="slide s-sol-screen-exec" data-screen-label="Solution: Execution Screenshot" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'row',
        alignItems: 'center', gap: 56
      }}>
        <div style={{
          flex: '0 0 auto', maxWidth: 700,
          borderRadius: 8, overflow: 'hidden',
          border: '1px solid var(--uv-border-strong)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
        }}>
          <img src="uploads/uv-execution.png" alt="Ultraviolet Execution view"
            style={{ width: '100%', display: 'block' }} />
        </div>

        <div style={{ flex: '1 1 auto', maxWidth: 600 }}>
          <div style={{
            fontFamily: 'var(--uv-font-mono)', fontSize: 11,
            letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
            textTransform: 'uppercase', marginBottom: 16
          }}>03 · SHIP</div>
          <h2 className="display md" style={{ marginBottom: 24 }}>
            Specs become <span className="dim">merged PRs</span>
          </h2>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 12
          }}>
            {[
              "Tasks auto-generated from approved specs",
              "Agents execute sequentially with full context",
              "Quality gates verify acceptance criteria",
              "PR opens only when everything passes"
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 12, alignItems: 'baseline',
                fontFamily: 'var(--uv-font-body)', fontSize: 17,
                color: 'var(--uv-text-secondary)', lineHeight: 1.4
              }}>
                <span style={{
                  fontFamily: 'var(--uv-font-mono)', fontSize: 12,
                  color: 'var(--uv-text-dim)', flexShrink: 0
                }}>→</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// V4c — Layout A: Text on top, screenshot below (fills remaining space)
function SlideSolScreenTopText() {
  const chrome = solChrome("THE SOLUTION · DISCOVER");
  const bullets = [
    "Ingests interviews, tickets, sales calls, reviews",
    "AI clusters signals into patterns with confidence scores",
    "Surfaces opportunities with $ impact and segment data",
    "PM validates — human in the loop at every step"
  ];
  return (
    <section className="slide s-sol-screen-top" data-screen-label="Solution: Screen Top Text" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-start', gap: 20,
        overflow: 'hidden'
      }}>
        <div style={{ flexShrink: 0 }}>
          <div style={{
            fontFamily: 'var(--uv-font-mono)', fontSize: 11,
            letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
            textTransform: 'uppercase', marginBottom: 10
          }}>01 · DISCOVER</div>
          <h2 className="display sm" style={{ margin: 0 }}>
            Raw signals become <span className="dim">scored opportunities</span>
          </h2>
          <div style={{
            display: 'flex', gap: 32, marginTop: 12
          }}>
            {bullets.map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 8, alignItems: 'baseline',
                fontFamily: 'var(--uv-font-body)', fontSize: 14,
                color: 'var(--uv-text-secondary)', lineHeight: 1.4
              }}>
                <span style={{
                  fontFamily: 'var(--uv-font-mono)', fontSize: 11,
                  color: 'var(--uv-text-dim)', flexShrink: 0
                }}>→</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          flex: '1 1 0', minHeight: 0,
          borderRadius: 8, overflow: 'hidden',
          border: '1px solid var(--uv-border-strong)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
        }}>
          <img src="uploads/uv-discover-overlay.png" alt="Ultraviolet Discovery view"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }} />
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// V4d — Layout B: Full-bleed screenshot with text overlay bar
function SlideSolScreenOverlay() {
  const chrome = solChrome("THE SOLUTION · DISCOVER");
  const bullets = [
    "Ingests interviews, tickets, sales calls, reviews",
    "AI clusters signals into patterns with confidence scores",
    "Surfaces opportunities with $ impact and segment data",
    "PM validates — human in the loop at every step"
  ];
  return (
    <section className="slide s-sol-screen-overlay" data-screen-label="Solution: Screen Overlay" data-om-validate>
      {chrome.top}

      <div style={{
        position: 'absolute', inset: 0, zIndex: 1
      }}>
        <img src="uploads/uv-discover-overlay.png" alt="Ultraviolet Discovery view"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }} />
      </div>

      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 5,
        background: 'linear-gradient(to bottom, transparent, rgba(10,10,11,0.85) 30%, rgba(10,10,11,0.95))',
        padding: '80px 120px 100px'
      }}>
        <div style={{
          fontFamily: 'var(--uv-font-mono)', fontSize: 11,
          letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
          textTransform: 'uppercase', marginBottom: 12
        }}>01 · DISCOVER</div>
        <h2 className="display md" style={{ margin: 0, marginBottom: 16 }}>
          Raw signals become <span className="dim">scored opportunities</span>
        </h2>
        <div style={{ display: 'flex', gap: 32 }}>
          {bullets.map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: 8, alignItems: 'baseline',
              fontFamily: 'var(--uv-font-body)', fontSize: 15,
              color: 'var(--uv-text-secondary)', lineHeight: 1.4
            }}>
              <span style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 11,
                color: 'var(--uv-text-dim)', flexShrink: 0
              }}>→</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// V4e — Layout C: Large screenshot (70%), narrow text sidebar
function SlideSolScreenSidebar() {
  const chrome = solChrome("THE SOLUTION · DISCOVER");
  const bullets = [
    "Ingests interviews, tickets, sales calls, reviews",
    "AI clusters signals into patterns with confidence scores",
    "Surfaces opportunities with $ impact and segment data",
    "PM validates — human in the loop at every step"
  ];
  return (
    <section className="slide s-sol-screen-sidebar" data-screen-label="Solution: Screen Sidebar" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'row',
        alignItems: 'stretch', gap: 40
      }}>
        <div style={{
          flex: '1 1 70%', borderRadius: 8, overflow: 'hidden',
          border: '1px solid var(--uv-border-strong)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          minWidth: 0
        }}>
          <img src="uploads/uv-discovery.png" alt="Ultraviolet Discovery view"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }} />
        </div>

        <div style={{
          flex: '0 0 320px',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{
            fontFamily: 'var(--uv-font-mono)', fontSize: 11,
            letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
            textTransform: 'uppercase', marginBottom: 16
          }}>01 · DISCOVER</div>
          <h2 className="display sm" style={{ marginBottom: 24 }}>
            Raw signals become <span className="dim">scored opportunities</span>
          </h2>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 12
          }}>
            {bullets.map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, alignItems: 'baseline',
                fontFamily: 'var(--uv-font-body)', fontSize: 15,
                color: 'var(--uv-text-secondary)', lineHeight: 1.4
              }}>
                <span style={{
                  fontFamily: 'var(--uv-font-mono)', fontSize: 11,
                  color: 'var(--uv-text-dim)', flexShrink: 0
                }}>→</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// V4f — Layout D: Full-bleed screenshot with radial gradient caption in bottom-left
function SlideSolScreenCaption() {
  const chrome = solChrome("THE SOLUTION · DISCOVER");
  const bullets = [
    "Ingests interviews, tickets, sales calls, reviews",
    "AI groups signals into scored patterns",
    "Surfaces opportunities with $ impact and segment data",
    "PM validates. UV drafts the project plan."
  ];

  return (
    <section className="slide s-sol-screen-caption" data-screen-label="Solution: Screen Caption" data-om-validate>
      {chrome.top}

      <div style={{
        position: 'absolute', top: 90, left: 80, right: 80, bottom: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1, overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', height: '100%' }}>
          <img src="uploads/uv-discover-overlay.png" alt="Ultraviolet Discovery view"
            style={{ height: '100%', objectFit: 'contain', display: 'block' }} />
        </div>
      </div>

      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'radial-gradient(ellipse 120% 120% at 0% 100%, rgba(10,10,11,0.97) 0%, rgba(10,10,11,0.93) 30%, rgba(10,10,11,0.7) 50%, transparent 72%)'
      }} />

      <div style={{
        position: 'absolute', left: 0, bottom: 0, zIndex: 5,
        padding: '0 120px 100px',
        maxWidth: 500
      }}>
        <div style={{
          fontFamily: 'var(--uv-font-mono)', fontSize: 11,
          letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
          textTransform: 'uppercase', marginBottom: 16
        }}>DISCOVER</div>
        <h2 className="display sm" style={{ margin: 0, marginBottom: 24 }}>
          Raw signals become <span className="dim">scored opportunities</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {bullets.map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: 10, alignItems: 'baseline',
              fontFamily: 'var(--uv-font-body)', fontSize: 15,
              color: 'var(--uv-text-secondary)', lineHeight: 1.4
            }}>
              <span style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 11,
                color: 'var(--uv-text-dim)', flexShrink: 0
              }}>→</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// V4g — Layout D variant: Full-bleed Build screenshot with radial gradient caption
function SlideSolScreenCaptionBuild() {
  const chrome = solChrome("THE SOLUTION · BUILD");
  const bullets = [
    "Tasks auto-generated from approved specs",
    "Agents execute sequentially with full context",
    "Quality gates verify acceptance criteria",
    "PR opens only when everything passes"
  ];

  return (
    <section className="slide s-sol-screen-caption-build" data-screen-label="Solution: Screen Caption Build" data-om-validate>
      {chrome.top}

      <div style={{
        position: 'absolute', top: 90, left: 80, right: 80, bottom: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1, overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', height: '100%' }}>
          <img src="uploads/uv-build-overlay.png" alt="Ultraviolet Build execution view"
            style={{ height: '100%', objectFit: 'contain', display: 'block' }} />
        </div>
      </div>

      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'radial-gradient(ellipse 120% 120% at 100% 100%, rgba(10,10,11,0.97) 0%, rgba(10,10,11,0.93) 30%, rgba(10,10,11,0.7) 50%, transparent 72%)'
      }} />

      <div style={{
        position: 'absolute', right: 0, bottom: 0, zIndex: 5,
        padding: '0 120px 100px',
        maxWidth: 500,
        textAlign: 'right'
      }}>
        <div style={{
          fontFamily: 'var(--uv-font-mono)', fontSize: 11,
          letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
          textTransform: 'uppercase', marginBottom: 16
        }}>BUILD</div>
        <h2 className="display sm" style={{ margin: 0, marginBottom: 24 }}>
          Specs become <span className="dim">merged PRs</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
          {bullets.map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: 10, alignItems: 'baseline',
              fontFamily: 'var(--uv-font-body)', fontSize: 15,
              color: 'var(--uv-text-secondary)', lineHeight: 1.4
            }}>
              {item}
              <span style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 11,
                color: 'var(--uv-text-dim)', flexShrink: 0
              }}>←</span>
            </div>
          ))}
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// ==========================================================================
// CONCEPT 5: EMBEDDED SCREENSHOTS (background-matched)
// ==========================================================================

function SlideSolEmbedDiscover() {
  const chrome = solChrome("THE SOLUTION · DISCOVER");
  return (
    <section className="slide s-sol-embed-disc" data-screen-label="Solution: Embed Discover" data-om-validate
      style={{ background: '#1a1a1d' }}>
      <div className="noise" />

      <div className="slide-chrome top" style={{ color: 'rgba(255,255,255,0.35)' }}>
        <div><span className="dot" style={{ background: 'rgba(255,255,255,0.35)' }} /><span className="logo" style={{ color: 'rgba(255,255,255,0.7)' }}>ULTRAVIOLET</span></div>
        <div className="rule-line" style={{ opacity: 0.15 }} />
        <div>DISCOVER · OPPORTUNITY DETAIL</div>
      </div>

      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '90px 80px 60px', zIndex: 10
      }}>
        <img src="uploads/uv-discover-embed.png"
          alt="Ultraviolet — Opportunity detail view"
          style={{
            maxWidth: '100%', maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: 8,
            boxShadow: '0 0 80px rgba(0,0,0,0.4)'
          }} />
      </div>
    </section>
  );
}

function SlideSolEmbedBuild() {
  const chrome = solChrome("THE SOLUTION · BUILD");
  return (
    <section className="slide s-sol-embed-build" data-screen-label="Solution: Embed Build" data-om-validate
      style={{ background: '#1a1a1d' }}>
      <div className="noise" />

      <div className="slide-chrome top" style={{ color: 'rgba(255,255,255,0.35)' }}>
        <div><span className="dot" style={{ background: 'rgba(255,255,255,0.35)' }} /><span className="logo" style={{ color: 'rgba(255,255,255,0.7)' }}>ULTRAVIOLET</span></div>
        <div className="rule-line" style={{ opacity: 0.15 }} />
        <div>BUILD · EXECUTION PROGRESS</div>
      </div>

      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '90px 80px 60px', zIndex: 10
      }}>
        <img src="uploads/uv-build-embed.png"
          alt="Ultraviolet — Build execution view"
          style={{
            maxWidth: '100%', maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: 8,
            boxShadow: '0 0 80px rgba(0,0,0,0.4)'
          }} />
      </div>
    </section>
  );
}

// V5c/d — Exact background match (#151515 = Fabric dark mode body)
function SlideSolEmbedDiscoverFlush() {
  return (
    <section className="slide s-sol-embed-disc-flush" data-screen-label="Solution: Embed Discover Flush" data-om-validate
      style={{ background: '#151515' }}>

      <div className="slide-chrome top" style={{ color: 'rgba(255,255,255,0.35)' }}>
        <div><span className="dot" style={{ background: 'rgba(255,255,255,0.35)' }} /><span className="logo" style={{ color: 'rgba(255,255,255,0.7)' }}>ULTRAVIOLET</span></div>
        <div className="rule-line" style={{ opacity: 0.15 }} />
        <div>DISCOVER · OPPORTUNITY DETAIL</div>
      </div>

      <div style={{
        position: 'absolute', top: 90, left: 80, right: 80, bottom: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 10, overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', height: '100%' }}>
          <img src="uploads/uv-discover-embed.png"
            alt="Ultraviolet — Opportunity detail view"
            style={{
              height: '100%',
              objectFit: 'contain', display: 'block'
            }} />
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0, height: '25%',
            background: 'linear-gradient(to bottom, transparent, #151515)',
            pointerEvents: 'none'
          }} />
        </div>
      </div>
    </section>
  );
}

function SlideSolEmbedBuildFlush() {
  return (
    <section className="slide s-sol-embed-build-flush" data-screen-label="Solution: Embed Build Flush" data-om-validate
      style={{ background: '#151515' }}>

      <div className="slide-chrome top" style={{ color: 'rgba(255,255,255,0.35)' }}>
        <div><span className="dot" style={{ background: 'rgba(255,255,255,0.35)' }} /><span className="logo" style={{ color: 'rgba(255,255,255,0.7)' }}>ULTRAVIOLET</span></div>
        <div className="rule-line" style={{ opacity: 0.15 }} />
        <div>BUILD · EXECUTION PROGRESS</div>
      </div>

      <div style={{
        position: 'absolute', top: 90, left: 80, right: 80, bottom: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 10, overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', height: '100%' }}>
          <img src="uploads/uv-build-embed.png"
            alt="Ultraviolet — Build execution view"
            style={{
              height: '100%',
              objectFit: 'contain', display: 'block'
            }} />
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0, height: '25%',
            background: 'linear-gradient(to bottom, transparent, #151515)',
            pointerEvents: 'none'
          }} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  SlideSolChainH, SlideSolChainV, SlideSolChainTrace,
  SlideSolThreeCols, SlideSolThreeBlocks,
  SlideSolFlywheel, SlideSolFlywheelCompound,
  SlideSolScreenDiscovery, SlideSolScreenExecution,
  SlideSolScreenTopText, SlideSolScreenOverlay, SlideSolScreenSidebar, SlideSolScreenCaption, SlideSolScreenCaptionBuild,
  SlideSolEmbedDiscover, SlideSolEmbedBuild,
  SlideSolEmbedDiscoverFlush, SlideSolEmbedBuildFlush
});
