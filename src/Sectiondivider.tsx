import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type DividerVariant = 'filmstrip' | 'scanline' | 'reel' | 'timecode' | 'slash' | 'marquee';

interface SectionDividerProps {
  variant?: DividerVariant;
  label?: string;
  index?: number;
}

const pad = (n: number) => String(n).padStart(2, '0');

/*
  ─────────────────────────────────────────────────────
  FILM PERFORATIONS — seamless, always-full-width scroll

  KEY FIX: animation-delay is NEGATIVE (-duration/2).
  A negative delay means the animation is already running
  at that offset when the element mounts — so you never
  see an "empty start". The strip is always full of holes.

  • hole = 13px + margin 12px each side = 37px per hole
  • 4 sets × 40 holes = 160 holes = 5920px track
  • Keyframe shifts by 1 set = 40 × 37 = 1480px
  • animation: 8s linear infinite, delay: -4s (mid-cycle on mount)
  ─────────────────────────────────────────────────────
*/
const HOLES_PER_SET = 40;
const PX_PER_HOLE   = 37;
const SHIFT_PX      = HOLES_PER_SET * PX_PER_HOLE; // 1480
const DURATION      = 8;                            // seconds

const FilmPerfs = ({
  color   = '#fde047',
  opacity = 0.82,
}: {
  color?:   string;
  opacity?: number;
}) => (
  <div
    className="cpd-perfs"
    style={{ '--perf-color': color, '--perf-opacity': String(opacity) } as React.CSSProperties}
  >
    <div
      className="cpd-perfs-track"
      style={{
        animation: `cpdPerf ${DURATION}s linear infinite`,
        animationDelay: `-${DURATION / 2}s`,   // ← starts mid-cycle: strip is full immediately
      }}
    >
      {/* 4 identical sets — guarantees full coverage on any screen */}
      {[0, 1, 2, 3].flatMap(set =>
        Array.from({ length: HOLES_PER_SET }, (_, i) => (
          <span key={`${set}-${i}`} className="cpd-perf-hole" />
        ))
      )}
    </div>
  </div>
);

/* ════════════ 1. FILMSTRIP ════════════ */
const FilmstripDivider = ({ label }: { label: string }) => (
  <div className="cpd-filmstrip">
    <FilmPerfs color="#fde047" opacity={0.82} />
    <div className="cpd-fs-content">
      <div className="cpd-fs-framebox" />
      <div className="cpd-fs-mid">
        <div className="cpd-fs-line cpd-fs-line--l" />
        <span className="cpd-fs-label">{label}</span>
        <div className="cpd-fs-line cpd-fs-line--r" />
      </div>
      <div className="cpd-fs-framebox" />
    </div>
    <FilmPerfs color="#fde047" opacity={0.82} />
  </div>
);

/* ════════════ 2. SCANLINE ════════════ */
const ScanlineDivider = ({ label, index }: { label: string; index: number }) => (
  <div className="cpd-scan">
    <FilmPerfs color="#32c5f4" opacity={0.65} />
    <div className="cpd-scan-inner">
      <div className="cpd-scan-beam" />
      <div className="cpd-scan-lens">
        <motion.div className="cpd-scan-lens-ring" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}>
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} className="cpd-scan-lens-spoke" style={{ transform: `rotate(${i * 45}deg)` }} />
          ))}
        </motion.div>
        <div className="cpd-scan-lens-core" />
      </div>
      <div className="cpd-scan-vline" />
      <div className="cpd-scan-info">
        <span className="cpd-scan-seq">FRAME {pad(index)}</span>
        <span className="cpd-scan-label">{label}</span>
      </div>
      <div className="cpd-scan-dots">
        <div className="cpd-scan-dot" /><div className="cpd-scan-dot" />
        <div className="cpd-scan-dot cpd-scan-dot--on" />
      </div>
    </div>
    <FilmPerfs color="#32c5f4" opacity={0.65} />
  </div>
);

/* ════════════ 3. REEL ════════════ */
const ReelDivider = ({ label }: { label: string }) => (
  <div className="cpd-reel">
    <FilmPerfs color="#fde047" opacity={0.6} />
    <div className="cpd-reel-inner">
      <div className="cpd-reel-line cpd-reel-line--l" />
      <div className="cpd-reel-hub">
        <motion.div className="cpd-reel-ring" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}>
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="cpd-reel-spoke" style={{ transform: `rotate(${i * 60}deg)` }} />
          ))}
          {Array.from({ length: 6 }, (_, i) => (
            <span key={`s${i}`} className="cpd-reel-sprocket" style={{ transform: `rotate(${i * 60 + 30}deg) translateY(-18px)` }} />
          ))}
        </motion.div>
        <div className="cpd-reel-core" />
      </div>
      <div className="cpd-reel-label">{label}</div>
      <div className="cpd-reel-line cpd-reel-line--r" />
    </div>
    <FilmPerfs color="#fde047" opacity={0.6} />
  </div>
);

/* ════════════ 4. TIMECODE ════════════ */
const TimecodeDivider = ({ label, index }: { label: string; index: number }) => (
  <div className="cpd-tc">
    <FilmPerfs color="#fde047" opacity={0.65} />
    <div className="cpd-tc-body">
      <div className="cpd-tc-clap">
        <div className="cpd-tc-clap-top">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className={`cpd-tc-stripe ${i % 2 === 0 ? 'cpd-tc-stripe--y' : 'cpd-tc-stripe--b'}`} />
          ))}
        </div>
        <div className="cpd-tc-clap-base">
          <span className="cpd-tc-scene">SC {pad(index)}</span>
        </div>
      </div>
      <div className="cpd-tc-content">
        <div className="cpd-tc-left">
          <span className="cpd-tc-seq">SCENE {pad(index)}</span>
          <span className="cpd-tc-slash">／</span>
          <span className="cpd-tc-label">{label}</span>
        </div>
        <div className="cpd-tc-bar" />
        <div className="cpd-tc-right">
          <span className="cpd-tc-rec">● REC</span>
        </div>
      </div>
    </div>
    <FilmPerfs color="#fde047" opacity={0.65} />
  </div>
);

/* ════════════ 5. SLASH ════════════ */
const SlashDivider = ({ label, index }: { label: string; index: number }) => (
  <div className="cpd-slash">
    <div className="cpd-slash-bar-top" />
    <div className="cpd-slash-main">
      <FilmPerfs color="#fde047" opacity={0.52} />
      <div className="cpd-slash-inner">
        <div className="cpd-slash-num">{pad(index)}</div>
        <div className="cpd-slash-rule cpd-slash-rule--y" />
        <div className="cpd-slash-text">{label}</div>
        <div className="cpd-slash-rule cpd-slash-rule--c" />
        <div className="cpd-slash-aspect">2.39:1</div>
      </div>
      <FilmPerfs color="#fde047" opacity={0.52} />
    </div>
    <div className="cpd-slash-bar-bot" />
  </div>
);

/* ════════════ 6. MARQUEE ════════════ */
const MarqueeDivider = ({ label }: { label: string }) => {
  const repeat = `${label} ★ `.repeat(18);
  return (
    <div className="cpd-mq">
      <div className="cpd-mq-bulbs">
        {Array.from({ length: 34 }, (_, i) => (
          <motion.div key={i} className="cpd-mq-bulb"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: (i * 0.08) % 1.4, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <div className="cpd-mq-row cpd-mq-row--fwd">
        <motion.span animate={{ x: ['0%', '-50%'] }} transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}>
          {repeat}{repeat}
        </motion.span>
      </div>
      <div className="cpd-mq-row cpd-mq-row--rev">
        <motion.span animate={{ x: ['-50%', '0%'] }} transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}>
          {repeat}{repeat}
        </motion.span>
      </div>
      <div className="cpd-mq-bulbs">
        {Array.from({ length: 34 }, (_, i) => (
          <motion.div key={i} className="cpd-mq-bulb"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: (i * 0.08) % 1.4, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════════════
   ROOT
════════════════════════════════════════════════════ */
const SectionDivider = ({ variant = 'filmstrip', label = 'SECTION', index = 1 }: SectionDividerProps) => {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

        .cpd-root {
          width: 100%; background: #000; overflow: hidden;
          opacity: 0; transform: translateY(8px);
          transition: opacity .55s ease, transform .55s ease;
        }
        .cpd-root.in { opacity: 1; transform: translateY(0); }

        /* ══════════════════════════════════════════════
           FILM PERFORATIONS
        ══════════════════════════════════════════════ */
        .cpd-perfs {
          width: 100%;
          height: 20px;
          background: #111;
          overflow: hidden;
          position: relative;
          border-top: 1px solid rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        .cpd-perfs-track {
          display: flex;
          align-items: center;
          height: 100%;
          flex-wrap: nowrap;
          will-change: transform;
          /* animation set inline with negative delay — see FilmPerfs component */
        }

        /*
          Shift = 1480px = 40 holes × 37px per hole (one full set).
          Track = 4 sets = 5920px, always wider than any screen.
          Negative animation-delay applied inline means the animation
          is already mid-cycle on mount — holes are full from frame 1.
        */
        @keyframes cpdPerf {
          from { transform: translateX(0px); }
          to   { transform: translateX(-1480px); }
        }

        .cpd-perf-hole {
          display: inline-flex;
          flex-shrink: 0;
          width: 13px;
          height: 9px;
          border-radius: 2px;
          background: var(--perf-color, #fde047);
          opacity: var(--perf-opacity, 0.82);
          margin: 0 12px;
          box-shadow:
            0 0 6px var(--perf-color, #fde047),
            0 0 16px color-mix(in srgb, var(--perf-color, #fde047) 35%, transparent);
        }

        /* ════════════
           1. FILMSTRIP
        ════════════ */
        .cpd-filmstrip { width: 100%; background: #0a0a0a; border-top: 1px solid rgba(253,224,71,0.18); border-bottom: 1px solid rgba(253,224,71,0.18); }
        .cpd-fs-content { display: flex; align-items: center; padding: 12px 4%; background: #090909; }
        .cpd-fs-framebox { width: 48px; height: 36px; flex-shrink: 0; border: 1px solid rgba(253,224,71,0.22); position: relative; }
        .cpd-fs-framebox::before { content: ''; position: absolute; inset: 4px; border: 1px solid rgba(253,224,71,0.1); }
        .cpd-fs-mid { flex: 1; display: flex; align-items: center; gap: 16px; padding: 0 16px; }
        .cpd-fs-line { flex: 1; height: 1px; }
        .cpd-fs-line--l { background: linear-gradient(90deg, transparent, rgba(253,224,71,0.5)); }
        .cpd-fs-line--r { background: linear-gradient(90deg, rgba(253,224,71,0.5), transparent); }
        .cpd-fs-label { font-family: 'Inter', sans-serif; font-size: 0.58rem; font-weight: 600; letter-spacing: 8px; color: #fde047; text-transform: uppercase; white-space: nowrap; flex-shrink: 0; }

        /* ═══════════
           2. SCANLINE
        ═══════════ */
        .cpd-scan { width: 100%; background: #060606; border-top: 1px solid rgba(50,197,244,0.18); border-bottom: 1px solid rgba(50,197,244,0.18); }
        .cpd-scan-inner { display: flex; align-items: center; padding: 10px 6%; gap: 20px; position: relative; overflow: hidden; background: linear-gradient(180deg, rgba(50,197,244,0.03) 0%, transparent 100%); }
        .cpd-scan-beam { position: absolute; top: 0; bottom: 0; width: 260px; background: linear-gradient(90deg, transparent, rgba(50,197,244,0.18), transparent); animation: cpdBeam 3.5s ease-in-out infinite; pointer-events: none; }
        @keyframes cpdBeam { 0%{left:-260px} 100%{left:110%} }
        .cpd-scan-lens { position: relative; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .cpd-scan-lens-ring { position: absolute; inset: 0; border: 1px solid rgba(50,197,244,0.3); border-radius: 50%; }
        .cpd-scan-lens-spoke { position: absolute; top: 50%; left: 50%; width: 1px; height: 18px; background: rgba(50,197,244,0.4); transform-origin: bottom center; margin-left: -0.5px; margin-top: -18px; }
        .cpd-scan-lens-core { width: 14px; height: 14px; border-radius: 50%; background: radial-gradient(circle, rgba(50,197,244,0.6), rgba(50,197,244,0.1)); box-shadow: 0 0 14px rgba(50,197,244,0.7); border: 1px solid rgba(50,197,244,0.5); z-index: 2; }
        .cpd-scan-vline { width: 1px; height: 32px; background: rgba(255,255,255,0.1); flex-shrink: 0; }
        .cpd-scan-info { display: flex; flex-direction: column; gap: 2px; flex: 1; }
        .cpd-scan-seq { font-family: 'Inter', sans-serif; font-size: 0.48rem; font-weight: 600; letter-spacing: 5px; color: rgba(50,197,244,0.7); text-transform: uppercase; }
        .cpd-scan-label { font-family: 'Inter', sans-serif; font-size: 0.65rem; font-weight: 600; letter-spacing: 5px; color: rgba(255,255,255,0.9); text-transform: uppercase; }
        .cpd-scan-dots { display: flex; gap: 8px; align-items: center; flex-shrink: 0; }
        .cpd-scan-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.14); }
        .cpd-scan-dot--on { background: #32c5f4; box-shadow: 0 0 10px rgba(50,197,244,0.9); animation: cpdDotOn 1.1s step-end infinite; }
        @keyframes cpdDotOn { 0%,100%{opacity:1} 50%{opacity:0.15} }

        /* ════════
           3. REEL
        ════════ */
        .cpd-reel { width: 100%; background: #000; border-top: 1px solid rgba(253,224,71,0.18); border-bottom: 1px solid rgba(253,224,71,0.18); }
        .cpd-reel-inner { display: flex; align-items: center; justify-content: center; gap: 28px; padding: 14px 6%; background: linear-gradient(180deg, rgba(253,224,71,0.02), transparent); }
        .cpd-reel-line { flex: 1; height: 1px; }
        .cpd-reel-line--l { background: linear-gradient(to right, transparent, rgba(253,224,71,0.45)); }
        .cpd-reel-line--r { background: linear-gradient(to left, transparent, rgba(50,197,244,0.35)); }
        .cpd-reel-hub { position: relative; width: 52px; height: 52px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .cpd-reel-ring { position: absolute; inset: 0; border: 1px solid rgba(253,224,71,0.22); border-radius: 50%; }
        .cpd-reel-spoke { position: absolute; top: 50%; left: 50%; width: 1.5px; height: 22px; background: linear-gradient(to top, rgba(253,224,71,0.6), transparent); transform-origin: bottom center; margin-left: -0.75px; margin-top: -22px; }
        .cpd-reel-sprocket { position: absolute; top: 50%; left: 50%; width: 5px; height: 5px; background: rgba(253,224,71,0.5); border-radius: 50%; margin-left: -2.5px; margin-top: -2.5px; }
        .cpd-reel-core { width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid rgba(253,224,71,0.7); background: #000; position: relative; z-index: 2; box-shadow: 0 0 10px rgba(253,224,71,0.25); }
        .cpd-reel-label { font-family: 'Inter', sans-serif; font-size: 0.62rem; font-weight: 600; letter-spacing: 6px; color: rgba(255,255,255,0.85); text-transform: uppercase; flex-shrink: 0; }

        /* ══════════════════════
           4. TIMECODE
        ══════════════════════ */
        .cpd-tc { width: 100%; background: #080808; border-top: 1px solid rgba(253,224,71,0.2); border-bottom: 1px solid rgba(253,224,71,0.2); }
        .cpd-tc-body { display: flex; align-items: stretch; }
        .cpd-tc-clap { flex-shrink: 0; width: 72px; background: #111; border-right: 1px solid rgba(255,255,255,0.07); overflow: hidden; }
        .cpd-tc-clap-top { display: flex; height: 18px; overflow: hidden; }
        .cpd-tc-stripe { flex: 1; }
        .cpd-tc-stripe--y { background: #fde047; }
        .cpd-tc-stripe--b { background: #111; }
        .cpd-tc-clap-base { display: flex; align-items: center; justify-content: center; flex: 1; background: #0d0d0d; padding: 8px 0; }
        .cpd-tc-scene { font-family: 'Bebas Neue', sans-serif; font-size: 0.85rem; letter-spacing: 2px; color: rgba(255,255,255,0.5); }
        .cpd-tc-content { flex: 1; display: flex; align-items: center; padding: 0 5%; gap: 20px; min-height: 56px; }
        .cpd-tc-left, .cpd-tc-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
        .cpd-tc-bar { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(253,224,71,0.3), rgba(50,197,244,0.2), transparent); }
        .cpd-tc-seq { font-family: 'Inter', sans-serif; font-size: 0.56rem; font-weight: 600; letter-spacing: 4px; color: rgba(253,224,71,0.8); text-transform: uppercase; }
        .cpd-tc-slash { font-family: serif; font-size: 1.1rem; color: rgba(255,255,255,0.18); }
        .cpd-tc-label { font-family: 'Inter', sans-serif; font-size: 0.62rem; font-weight: 600; letter-spacing: 5px; color: rgba(255,255,255,0.9); text-transform: uppercase; }
        .cpd-tc-rec { font-family: 'Inter', sans-serif; font-size: 0.62rem; font-weight: 600; letter-spacing: 2px; color: rgba(255,55,55,1); animation: cpdRec 1s step-end infinite; }
        @keyframes cpdRec { 0%,100%{opacity:1} 50%{opacity:0} }

        /* ═════════════════════
           5. SLASH
        ═════════════════════ */
        .cpd-slash { width: 100%; background: #000; }
        .cpd-slash-bar-top { height: 10px; background: #000; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .cpd-slash-bar-bot { height: 10px; background: #000; border-top: 1px solid rgba(255,255,255,0.05); }
        .cpd-slash-main { background: #080808; border-top: 1px solid rgba(253,224,71,0.22); border-bottom: 1px solid rgba(253,224,71,0.22); }
        .cpd-slash-inner { display: flex; align-items: center; padding: 12px 6%; gap: 24px; }
        .cpd-slash-num { font-family: 'Bebas Neue', sans-serif; font-size: 2.8rem; color: rgba(253,224,71,0.7); line-height: 1; flex-shrink: 0; letter-spacing: 2px; }
        .cpd-slash-rule { height: 1px; flex: 1; }
        .cpd-slash-rule--y { background: linear-gradient(90deg, rgba(253,224,71,0.55), transparent); }
        .cpd-slash-rule--c { background: linear-gradient(90deg, transparent, rgba(50,197,244,0.45)); }
        .cpd-slash-text { font-family: 'Inter', sans-serif; font-size: 0.62rem; font-weight: 600; letter-spacing: 7px; color: rgba(255,255,255,0.9); text-transform: uppercase; flex-shrink: 0; }
        .cpd-slash-aspect { font-family: 'Bebas Neue', sans-serif; font-size: 0.75rem; letter-spacing: 3px; color: rgba(50,197,244,0.4); flex-shrink: 0; }

        /* ════════════════════════
           6. MARQUEE
        ════════════════════════ */
        .cpd-mq { width: 100%; background: #070707; overflow: hidden; border-top: 1px solid rgba(253,224,71,0.25); border-bottom: 1px solid rgba(253,224,71,0.25); }
        .cpd-mq-bulbs { display: flex; justify-content: space-around; align-items: center; padding: 5px 0; background: #0a0a0a; }
        .cpd-mq-bulb { width: 6px; height: 6px; border-radius: 50%; background: #fde047; box-shadow: 0 0 6px rgba(253,224,71,0.8), 0 0 14px rgba(253,224,71,0.3); flex-shrink: 0; }
        .cpd-mq-row { overflow: hidden; white-space: nowrap; }
        .cpd-mq-row span { display: inline-block; }
        .cpd-mq-row--fwd { padding: 9px 0; background: #060606; }
        .cpd-mq-row--fwd span { font-family: 'Inter', sans-serif; font-size: 0.58rem; font-weight: 600; letter-spacing: 7px; color: rgba(253,224,71,0.7); text-transform: uppercase; }
        .cpd-mq-row--rev { padding: 8px 0; border-top: 1px solid rgba(255,255,255,0.04); background: #050505; }
        .cpd-mq-row--rev span { font-family: 'Inter', sans-serif; font-size: 0.58rem; font-weight: 600; letter-spacing: 7px; color: rgba(50,197,244,0.8); text-transform: uppercase; }

        @media (max-width: 600px) {
          .cpd-perf-hole { width: 9px; height: 7px; margin: 0 8px; }
          .cpd-scan-label, .cpd-reel-label, .cpd-tc-label,
          .cpd-slash-text, .cpd-fs-label { font-size: 0.54rem; letter-spacing: 4px; }
          .cpd-tc-content { min-height: 48px; }
          .cpd-slash-inner { gap: 14px; }
          .cpd-slash-num { font-size: 2rem; }
          .cpd-slash-aspect { display: none; }
          .cpd-mq-bulb { width: 5px; height: 5px; }
        }
      `}</style>

      <div ref={ref} className={`cpd-root ${inView ? 'in' : ''}`}>
        {variant === 'filmstrip' && <FilmstripDivider label={label} />}
        {variant === 'scanline'  && <ScanlineDivider  label={label} index={index} />}
        {variant === 'reel'      && <ReelDivider      label={label} />}
        {variant === 'timecode'  && <TimecodeDivider  label={label} index={index} />}
        {variant === 'slash'     && <SlashDivider     label={label} index={index} />}
        {variant === 'marquee'   && <MarqueeDivider   label={label} />}
      </div>
    </>
  );
};

export default SectionDivider;