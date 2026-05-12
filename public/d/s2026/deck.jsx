/* global React, ReactDOM,
   Slide01Title, Slide02ProblemBar, Slide02bStateOfTheArt, Slide02cStateOfTheArtV2,
   SlideToolchainGrid, SlideToolchainFlow, SlideToolchainBeforeAfter, SlideToolchainWall,
   Slide03Insight, Slide03InsightV2, Slide03InsightV3, Slide03InsightV4,
   SlideSolChainH, SlideSolChainV, SlideSolChainTrace,
   SlideSolThreeCols, SlideSolThreeBlocks,
   SlideSolFlywheel, SlideSolFlywheelCompound,
   SlideSolScreenDiscovery, SlideSolScreenExecution,
   SlideSolScreenTopText, SlideSolScreenOverlay, SlideSolScreenSidebar, SlideSolScreenCaption, SlideSolScreenCaptionBuild,
   SlideSolEmbedDiscover, SlideSolEmbedBuild,
   SlideSolEmbedDiscoverFlush, SlideSolEmbedBuildFlush,
   Slide04Founder, Slide04How, Slide04HowV2, Slide04Trace,
   Slide04HowV3a, Slide04HowV3b, Slide04HowV3c, Slide05Example,
   Slide06Moat, SlideSolutionVenn, Slide07Market,
   Slide08Comp, Slide10Ask */

const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headingScale": 0.9,
  "headingWeight": 400,
  "accentItalic": "serif",
  "gridDensity": 80
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const r = document.documentElement;
  r.style.setProperty('--uv-heading-scale', t.headingScale);
  r.style.setProperty('--uv-heading-weight', t.headingWeight);
  document.querySelectorAll('.grid-bg').forEach(el => {
    el.style.backgroundSize = `${t.gridDensity}px ${t.gridDensity}px`;
  });
}

function TweaksPanel({ open, tweaks, setTweaks }) {
  const update = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    applyTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };
  return (
    <div className={`tweaks-panel ${open ? 'open' : ''}`}>
      <h4>Tweaks</h4>
      <div className="grp">
        <div className="label">Heading Weight</div>
        <div className="pills">
          {[300, 400, 500, 700].map(w => (
            <button key={w}
              className={`pill ${tweaks.headingWeight === w ? 'active' : ''}`}
              onClick={() => update('headingWeight', w)}>{w}</button>
          ))}
        </div>
      </div>
      <div className="grp">
        <div className="label">Heading Scale</div>
        <div className="pills">
          {[{l:'0.85 · condensed',v:0.85},{l:'0.9 · site',v:0.9},{l:'1.0 · full',v:1}].map(o => (
            <button key={o.v}
              className={`pill ${tweaks.headingScale === o.v ? 'active' : ''}`}
              onClick={() => update('headingScale', o.v)}>{o.l}</button>
          ))}
        </div>
      </div>
      <div className="grp">
        <div className="label">Grid Density</div>
        <div className="pills">
          {[60,80,120,0].map(d => (
            <button key={d}
              className={`pill ${tweaks.gridDensity === d ? 'active' : ''}`}
              onClick={() => update('gridDensity', d || 9999)}>{d ? `${d}px` : 'off'}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Deck() {
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    applyTweaks(tweaks);
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksOpen(true);
      else if (e.data?.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <>
      <Slide01Title />
      <Slide04Founder />
      <Slide02cStateOfTheArtV2 />
      <Slide02ProblemBar />
      <SlideToolchainFlow />
      {/* <Slide03InsightV2 /> */}
      <SlideSolutionVenn />
      <SlideSolChainTrace />
      <Slide04HowV2 />
      <SlideSolScreenCaption />
      <SlideSolScreenCaptionBuild />
      <Slide05Example />
      <Slide07Market />
      <Slide08Comp />
      <Slide10Ask />
    </>
  );
}

const stage = document.querySelector('deck-stage');
ReactDOM.createRoot(stage).render(<Deck />);
