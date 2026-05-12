/* global React */

const toolchainData = [
  { stage: "Discovery & Research", tools: ["Gong", "Dovetail", "UserTesting", "Zoom"] },
  { stage: "Feedback & Signals", tools: ["Intercom", "Zendesk", "Salesforce", "Slack", "Canny"] },
  { stage: "Prioritization", tools: ["Productboard", "Aha!", "Spreadsheets"] },
  { stage: "Specs & PRDs", tools: ["Google Docs", "Notion", "Confluence"] },
  { stage: "Design", tools: ["Figma", "Miro", "Lucidchart"] },
  { stage: "Task Management", tools: ["Jira", "Linear", "Shortcut"] },
  { stage: "Coding", tools: ["Cursor", "Copilot", "Claude Code"] },
  { stage: "Review & CI/CD", tools: ["GitHub", "CircleCI", "Jenkins"] },
  { stage: "Docs & Monitoring", tools: ["Datadog", "Sentry", "Confluence"] },
];

const slideChrome = (label) => ({
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

// ============ VARIATION A — TOOL GRID =====================================
function SlideToolchainGrid() {
  const chrome = slideChrome("THE PROBLEM");
  return (
    <section className="slide s-toolchain-grid" data-screen-label="Toolchain: Grid" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', gap: 36
      }}>
        <h2 className="display md">
          The current stack
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          background: 'var(--uv-border)',
          border: '1px solid var(--uv-border)'
        }}>
          {toolchainData.map((cat) => (
            <div key={cat.stage} style={{
              background: 'rgba(255,255,255,0.08)',
              padding: '20px 24px'
            }}>
              <div style={{
                fontFamily: 'var(--uv-font-mono)', fontSize: 11,
                letterSpacing: '0.1em', color: 'var(--uv-text-dim)',
                marginBottom: 10, textTransform: 'uppercase'
              }}>{cat.stage}</div>
              <div style={{
                fontFamily: 'var(--uv-font-body)', fontSize: 17,
                color: 'var(--uv-text-primary)', lineHeight: 1.6
              }}>
                {cat.tools.join(", ")}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          fontFamily: 'var(--uv-font-mono)', fontSize: 14,
          color: 'var(--uv-text-dim)', letterSpacing: '0.05em',
          textAlign: 'center', paddingTop: 8
        }}>
          {toolchainData.reduce((n, c) => n + c.tools.length, 0)} tools. Zero connective tissue.
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// ============ VARIATION B — FRAGMENTED FLOW ===============================
function SlideToolchainFlow() {
  const chrome = slideChrome("THE PROBLEM");
  const phases = [
    { label: "Discover", tools: ["Gong", "Dovetail", "UserTesting", "Zoom", "Intercom", "Zendesk", "Slack"] },
    { label: "Prioritize", tools: ["Productboard", "Aha!", "Spreadsheets", "Salesforce"] },
    { label: "Plan", tools: ["Google Docs", "Notion", "Confluence", "Figma", "Miro"] },
    { label: "Build", tools: ["Jira", "Linear", "Cursor", "Copilot", "Claude Code", "GitHub"] },
    { label: "Ship", tools: ["CircleCI", "Jenkins", "Datadog", "Sentry", "Confluence"] },
  ];

  return (
    <section className="slide s-toolchain-flow" data-screen-label="Toolchain: Flow" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', gap: 36
      }}>
        <h2 className="display lg">
          What it takes to ship a feature.<br /><span className="dim">Humans are the glue.</span>
        </h2>

        <div style={{
          display: 'flex', gap: 0, alignItems: 'stretch'
        }}>
          {phases.map((phase, i) => (
            <React.Fragment key={phase.label}>
              <div style={{
                flex: 1,
                padding: '24px 20px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid var(--uv-border)',
                borderRight: i < phases.length - 1 ? 'none' : '1px solid var(--uv-border)'
              }}>
                <div style={{
                  fontFamily: 'var(--uv-font-mono)', fontSize: 11,
                  letterSpacing: '0.15em', color: 'var(--uv-text-secondary)',
                  textTransform: 'uppercase', marginBottom: 16
                }}>{phase.label}</div>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  gap: '8px 12px'
                }}>
                  {phase.tools.map((tool) => (
                    <div key={tool} style={{
                      fontFamily: 'var(--uv-font-body)', fontSize: 15,
                      color: 'var(--uv-text-primary)', lineHeight: 1.4
                    }}>{tool}</div>
                  ))}
                </div>
              </div>
              {i < phases.length - 1 && (
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 40, flexShrink: 0, color: 'var(--uv-text-dim)',
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

// ============ VARIATION C — BEFORE / AFTER ================================
function SlideToolchainBeforeAfter() {
  const chrome = slideChrome("THE PROBLEM");
  return (
    <section className="slide s-toolchain-ba" data-screen-label="Toolchain: Before/After" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'row',
        alignItems: 'stretch', justifyContent: 'center',
        gap: 48
      }}>
        {/* Before */}
        <div style={{ flex: 1, maxWidth: 720 }}>
          <div style={{
            fontFamily: 'var(--uv-font-mono)', fontSize: 12,
            letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
            textTransform: 'uppercase', marginBottom: 20
          }}>Today</div>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 8
          }}>
            {toolchainData.flatMap((cat) =>
              cat.tools.map((tool) => (
                <div key={tool} style={{
                  padding: '8px 16px',
                  border: '1px solid var(--uv-border-strong)',
                  fontFamily: 'var(--uv-font-body)', fontSize: 15,
                  color: 'var(--uv-text-secondary)'
                }}>{tool}</div>
              ))
            )}
          </div>
          <div style={{
            marginTop: 20,
            fontFamily: 'var(--uv-font-mono)', fontSize: 13,
            color: 'var(--uv-text-dim)', letterSpacing: '0.05em'
          }}>
            {toolchainData.reduce((n, c) => n + c.tools.length, 0)} tools · {toolchainData.length} categories · zero traceability
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: 1, background: 'var(--uv-border-strong)', alignSelf: 'stretch'
        }} />

        {/* After */}
        <div style={{
          flex: 1, maxWidth: 720,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{
            fontFamily: 'var(--uv-font-mono)', fontSize: 12,
            letterSpacing: '0.15em', color: 'var(--uv-text-dim)',
            textTransform: 'uppercase', marginBottom: 20
          }}>With Ultraviolet</div>
          <div style={{
            padding: '40px 48px',
            background: '#ffffff',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 12
          }}>
            <div style={{
              fontFamily: 'var(--uv-font-mono)', fontSize: 11,
              letterSpacing: '0.25em', color: '#999'
            }}>ULTRAVIOLET</div>
            <div style={{
              fontFamily: 'var(--uv-font-display)', fontSize: 22,
              fontWeight: 500, color: '#1a1a1b', letterSpacing: '-0.01em'
            }}>Product Delivery Engine</div>
            <div style={{
              fontFamily: 'var(--uv-font-body)', fontSize: 15,
              color: '#999', marginTop: 4
            }}>Customer signal to production code. One platform, not six.</div>
          </div>
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

// ============ VARIATION D — LOGO WALL / DENSITY ===========================
function SlideToolchainWall() {
  const chrome = slideChrome("THE PROBLEM");
  const allTools = toolchainData.flatMap((cat) =>
    cat.tools.map((tool) => ({ tool, stage: cat.stage }))
  );

  return (
    <section className="slide s-toolchain-wall" data-screen-label="Toolchain: Wall" data-om-validate>
      <div className="grid-bg" />
      <div className="noise" />
      {chrome.top}

      <div className="slide-body" style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        gap: 40, textAlign: 'center'
      }}>
        <h2 className="display md">
          The current stack
        </h2>

        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', gap: '16px 24px',
          maxWidth: 1400
        }}>
          {allTools.map(({ tool }) => (
            <span key={tool} style={{
              fontFamily: 'var(--uv-font-display)', fontSize: 28,
              fontWeight: 400, color: 'var(--uv-text-secondary)',
              lineHeight: 1.4
            }}>{tool}</span>
          ))}
        </div>

        <div style={{
          width: 120, height: 1,
          background: 'var(--uv-border-strong)', margin: '8px 0'
        }} />

        <div style={{
          fontFamily: 'var(--uv-font-mono)', fontSize: 14,
          color: 'var(--uv-text-dim)', letterSpacing: '0.05em',
          maxWidth: 600
        }}>
          {allTools.length} tools across {toolchainData.length} categories. No shared context. No traceability. No connective tissue.
        </div>
      </div>

      {chrome.bot}
    </section>
  );
}

Object.assign(window, { SlideToolchainGrid, SlideToolchainFlow, SlideToolchainBeforeAfter, SlideToolchainWall });
