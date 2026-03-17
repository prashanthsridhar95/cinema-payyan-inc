import { useEffect, useState, useRef, useCallback } from "react";

interface CinemaNavigatorProps {
  refs: {
    homeRef?: React.RefObject<HTMLElement>;
    aboutRef?: React.RefObject<HTMLElement>;
    workRef?: React.RefObject<HTMLElement>;
    promotionsRef?: React.RefObject<HTMLElement>;
    contactRef?: React.RefObject<HTMLElement>;
  };
}

// ── Every section in order — synced with App.tsx ──────────────────
const SECTIONS = [
  { id: "home",        label: "HOME",              num: 1,  ref: "homeRef"       },
  { id: "about",       label: "ABOUT",             num: 2,  ref: "aboutRef"      },
  { id: "vjsession",   label: "VJ SESSION",        num: 3,  ref: null            },
  { id: "openpannaa",  label: "OPEN PANNAA",       num: 4,  ref: null            },
  { id: "rjarchives",  label: "RJ ARCHIVES",       num: 5,  ref: null            },
  { id: "host",        label: "HOST",              num: 6,  ref: null            },
  { id: "director",    label: "DIRECTOR",          num: 7,  ref: null            },
  { id: "producer",    label: "CREATIVE PRODUCER", num: 8,  ref: "promotionsRef" },
  { id: "accelerator", label: "ACCELERATOR",       num: 9,  ref: null            },
  { id: "work",        label: "FINISHED PROJECTS", num: 10, ref: "workRef"       },
  { id: "partners",    label: "TIE-UP PARTNERS",   num: 11, ref: null            },
  { id: "inkblood",    label: "INKBLOOD & SHADOWS",num: 12, ref: null            },
  { id: "shorts",      label: "SHORTS PROMO",      num: 13, ref: null            },
  { id: "contact",     label: "CONTACT",           num: 14, ref: "contactRef"    },
];

// Color per dial position 0-4 (cycles through cyan → yellow palette)
const HOLE_COLORS = [
  { border: "#32c5f4", text: "#32c5f4", glow: "rgba(50,197,244,0.7)"  },
  { border: "#7dd8f8", text: "#7dd8f8", glow: "rgba(125,216,248,0.6)" },
  { border: "#fde047", text: "#fde047", glow: "rgba(253,224,71,0.75)" },
  { border: "#7dd8f8", text: "#7dd8f8", glow: "rgba(125,216,248,0.6)" },
  { border: "#32c5f4", text: "#32c5f4", glow: "rgba(50,197,244,0.7)"  },
];

const VISIBLE = 5;

// Desktop: flat RIGHT edge, arc opens LEFT
const R_D    = 170;
const HOLE_D = 32;

const dPos = (vi: number) => {
  const deg = -76 + (vi / (VISIBLE - 1)) * 152;
  const rad = (deg * Math.PI) / 180;
  return {
    x: R_D + R_D * 0.76 * Math.cos(Math.PI - rad),
    y: R_D - R_D * 0.76 * Math.sin(rad),
  };
};

// Mobile: quarter arc, circle centre at top-right corner
const SIZE   = 220;
const mR     = 200;
const HOLE_M = 30;

const mPos = (vi: number) => {
  const deg = 98 + (vi / (VISIBLE - 1)) * 74;
  const rad = (deg * Math.PI) / 180;
  return {
    x: SIZE + mR * Math.cos(rad),
    y:     0 + mR * Math.sin(rad),
  };
};

const DialIcon = ({ sz, cls }: { sz: number; cls: string }) => (
  <svg className={cls} width={sz} height={sz} viewBox="0 0 100 100"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" fill="none"/>
    <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="50" cy="50" r="6.5" fill="currentColor" opacity="0.55"/>
    {Array.from({ length: 10 }).map((_, i) => {
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      return <circle key={i}
        cx={50 + 31 * Math.cos(a)} cy={50 + 31 * Math.sin(a)}
        r="6.2" fill="none" stroke="currentColor" strokeWidth="2.5"/>;
    })}
    <rect x="46" y="2" width="8" height="11" rx="4" fill="currentColor" opacity="0.6"/>
  </svg>
);

export default function CinemaNavigator({ refs }: CinemaNavigatorProps) {
  const [activeIdx,  setActiveIdx]  = useState(0);
  const [isOpen,     setIsOpen]     = useState(false);
  const [dialOffset, setDialOffset] = useState(0);
  const [animKey,    setAnimKey]    = useState(0);
  const [slideDir,   setSlideDir]   = useState<1|-1>(1);
  const [attention,  setAttention]  = useState(false);
  const [hasSeen,    setHasSeen]    = useState(false);
  const tickerRef = useRef<number>(0);
  const dragRef   = useRef<{ y: number; x: number; offset: number } | null>(null);

  // ── track active section via scroll ──────────────────────────
  useEffect(() => {
    const fn = () => {
      cancelAnimationFrame(tickerRef.current);
      tickerRef.current = requestAnimationFrame(() => {
        const mid = window.innerHeight / 2;
        let best = 0, bestD = Infinity;
        SECTIONS.forEach((sec, i) => {
          const el = (sec.ref ? (refs as any)[sec.ref]?.current : null)
                  || document.getElementById(sec.id);
          if (!el) return;
          const r = el.getBoundingClientRect();
          const d = Math.abs(r.top + r.height / 2 - mid);
          if (d < bestD) { bestD = d; best = i; }
        });
        setActiveIdx(best);
      });
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // ── attention pulse ──────────────────────────────────────────
  useEffect(() => {
    if (hasSeen) return;
    const fire = () => { setAttention(true); setTimeout(() => setAttention(false), 2500); };
    const t  = setTimeout(fire, 1800);
    const iv = setInterval(() => { if (!hasSeen) fire(); }, 9000);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, [hasSeen]);

  const goTo = useCallback((sec: typeof SECTIONS[0]) => {
    const el = (sec.ref ? (refs as any)[sec.ref]?.current : null)
             || document.getElementById(sec.id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
    setHasSeen(true);
  }, [refs]);

  const goHome = () => goTo(SECTIONS[0]);
  const toggle = () => { setIsOpen(v => !v); setHasSeen(true); setAttention(false); };

  const shift = (dir: 1 | -1) => {
    setDialOffset(p => {
      const next = Math.max(0, Math.min(SECTIONS.length - VISIBLE, p + dir));
      if (next !== p) {
        setSlideDir(dir);
        setAnimKey(k => k + 1);
      }
      return next;
    });
  };

  const onPD = (e: React.PointerEvent) => {
    dragRef.current = { y: e.clientY, x: e.clientX, offset: dialOffset };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPM = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const dy = dragRef.current.y - e.clientY;
    const dx = dragRef.current.x - e.clientX;
    const delta = Math.abs(dy) >= Math.abs(dx) ? dy : dx;
    const steps = Math.round(delta / 28);
    const next  = Math.max(0, Math.min(SECTIONS.length - VISIBLE, dragRef.current.offset + steps));
    if (next !== dialOffset) {
      setSlideDir(next > dialOffset ? 1 : -1);
      setAnimKey(k => k + 1);
      setDialOffset(next);
    }
  };
  const onPU = () => { dragRef.current = null; };
  const onWh = (e: React.WheelEvent) => { e.preventDefault(); shift(e.deltaY > 0 ? 1 : -1); };

  const vis = SECTIONS.slice(dialOffset, dialOffset + VISIBLE);
  const canUp   = dialOffset > 0;
  const canDown = dialOffset < SECTIONS.length - VISIBLE;
  const activeVisible = activeIdx >= dialOffset && activeIdx < dialOffset + VISIBLE;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

        @keyframes sc-in-down {
          from { opacity:0; transform:translate(-50%,-50%) translateY(-18px) scale(0.65); }
          to   { opacity:1; transform:translate(-50%,-50%) scale(1); }
        }
        @keyframes sc-in-up {
          from { opacity:0; transform:translate(-50%,-50%) translateY(18px) scale(0.65); }
          to   { opacity:1; transform:translate(-50%,-50%) scale(1); }
        }
        @keyframes sc-in-right {
          from { opacity:0; transform:translate(-50%,-50%) translateX(18px) scale(0.65); }
          to   { opacity:1; transform:translate(-50%,-50%) scale(1); }
        }
        @keyframes sc-in-left {
          from { opacity:0; transform:translate(-50%,-50%) translateX(-18px) scale(0.65); }
          to   { opacity:1; transform:translate(-50%,-50%) scale(1); }
        }
        @keyframes sc-shake {
          0%,100%{ transform:rotate(0); }
          15%{ transform:rotate(-22deg); } 30%{ transform:rotate(22deg); }
          45%{ transform:rotate(-14deg); } 60%{ transform:rotate(14deg); }
          75%{ transform:rotate(-7deg);  } 90%{ transform:rotate(7deg);  }
        }
        @keyframes sc-glow {
          0%,100%{ opacity:0.6; }
          50%    { opacity:1; filter:drop-shadow(0 0 6px #fde047); }
        }
        @keyframes sc-badge-pulse {
          0%,100%{ transform:scale(1); box-shadow:0 0 0 0 rgba(253,224,71,0); }
          50%    { transform:scale(1.15); box-shadow:0 0 0 5px rgba(253,224,71,0.2); }
        }

        .sc-hole {
          position: absolute;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          cursor: pointer;
          z-index: 6;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          background: radial-gradient(circle at 40% 35%, #0c1e26, #020608);
          box-shadow:
            inset 0 4px 10px rgba(0,0,0,0.95),
            inset 0 -1px 3px rgba(255,255,255,0.04);
          transition: transform 0.2s cubic-bezier(0.34,1.5,0.64,1),
                      box-shadow 0.22s, border-color 0.22s;
          overflow: visible;
        }
        .sc-hole:active {
          transform: translate(-50%,-50%) scale(0.88) !important;
        }

        .sc-num {
          font-family: 'Share Tech Mono', monospace;
          font-weight: bold;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          transition: color 0.22s, text-shadow 0.22s;
        }

        .sc-lbl {
          font-family: 'Share Tech Mono', monospace;
          font-size: 5.5px;
          letter-spacing: 0.1em;
          pointer-events: none;
          user-select: none;
          text-transform: uppercase;
          white-space: nowrap;
          transition: color 0.22s, opacity 0.22s;
          opacity: 0.7;
        }

        .sc-hole.sc-act {
          transform: translate(-50%,-50%) scale(1.22) !important;
          z-index: 8 !important;
        }

        .sc-anim-down  { animation: sc-in-down  0.35s cubic-bezier(0.34,1.4,0.64,1) both; }
        .sc-anim-up    { animation: sc-in-up    0.35s cubic-bezier(0.34,1.4,0.64,1) both; }
        .sc-anim-right { animation: sc-in-right 0.35s cubic-bezier(0.34,1.4,0.64,1) both; }
        .sc-anim-left  { animation: sc-in-left  0.35s cubic-bezier(0.34,1.4,0.64,1) both; }

        .sc-hole:nth-child(1) { animation-delay:0s;     }
        .sc-hole:nth-child(2) { animation-delay:0.045s; }
        .sc-hole:nth-child(3) { animation-delay:0.09s;  }
        .sc-hole:nth-child(4) { animation-delay:0.135s; }
        .sc-hole:nth-child(5) { animation-delay:0.18s;  }

        .sc-hub {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 36% 33%, #0e2230, #020608);
          display: flex; align-items:center; justify-content:center;
          cursor: pointer; z-index:9;
          transition: border-color 0.22s, box-shadow 0.22s, transform 0.22s;
          border: 2px solid rgba(50,197,244,0.45);
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.9), 0 2px 16px rgba(0,0,0,0.8);
        }
        .sc-hub:hover {
          border-color: #fde047;
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.9), 0 0 18px rgba(253,224,71,0.55);
          transform: scale(1.1);
        }
        .sc-hub:hover .sc-hub-t { color: #fde047; }
        .sc-hub-t {
          font-family: 'Share Tech Mono', monospace;
          font-size: 7px; text-align:center; line-height:1.3;
          color: rgba(50,197,244,0.7); pointer-events:none;
          transition: color 0.22s;
        }

        .sc-badge {
          position: absolute;
          font-family: 'Share Tech Mono', monospace;
          font-size: 7px; letter-spacing:0.1em;
          background: rgba(0,0,0,0.85);
          border: 1px solid rgba(50,197,244,0.3);
          border-radius: 3px;
          padding: 2px 5px;
          color: rgba(50,197,244,0.7);
          pointer-events: none; user-select: none;
          z-index: 10;
          white-space: nowrap;
        }

        .sc-arr {
          position: absolute; z-index:9;
          width: 24px; height: 24px;
          border-radius: 50%;
          background: rgba(0,0,0,0.8);
          border: 1.5px solid rgba(50,197,244,0.35);
          display: flex; align-items:center; justify-content:center;
          cursor: pointer; padding:0;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        .sc-arr:hover {
          background: rgba(50,197,244,0.18);
          border-color: #32c5f4;
          transform: scale(1.15);
        }
        .sc-arr:active { transform: scale(0.88); }
        .sc-arr.off    { opacity:0.12; pointer-events:none; }
        .sc-arr svg    { width:12px; height:12px; color:#32c5f4; }

        /* ═══════════════════════════
           DESKTOP  ≥ 1025px
        ═══════════════════════════ */
        .sc-d { display:none; }
        @media (min-width: 1025px) {
          .sc-d {
            display:block;
            position:fixed; right:0; top:50%;
            transform:translateY(-50%);
            z-index:9500;
            width:${R_D + 48}px;
            height:${R_D * 2}px;
          }

          .sc-d-tab {
            position:absolute; right:0; top:50%;
            transform:translateY(-50%);
            width:44px; height:70px;
            background:linear-gradient(180deg,#0a1e27,#071318);
            border:1.5px solid rgba(50,197,244,0.38);
            border-right:none;
            border-radius:10px 0 0 10px;
            display:flex; flex-direction:column;
            align-items:center; justify-content:center; gap:7px;
            cursor:pointer; z-index:10;
            box-shadow:-3px 0 20px rgba(50,197,244,0.15),
                       inset 1px 0 0 rgba(50,197,244,0.07);
            transition:background 0.25s, border-color 0.25s, box-shadow 0.25s;
          }
          .sc-d-tab:hover {
            background:linear-gradient(180deg,#0f2b38,#0d2030);
            border-color:rgba(50,197,244,0.65);
          }
          .sc-d-tab.open {
            background:linear-gradient(180deg,#0f2b38,#0d2030);
            border-color:rgba(253,224,71,0.55);
            box-shadow:-3px 0 24px rgba(253,224,71,0.22),
                       inset 1px 0 0 rgba(253,224,71,0.1);
          }
          .sc-d-ico {
            color:#32c5f4;
            transition:color 0.25s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
          }
          .sc-d-tab.open .sc-d-ico { color:#fde047; transform:rotate(135deg); }
          .sc-d-tab.attn .sc-d-ico { animation:sc-shake 2.5s ease-out; color:#fde047; }
          .sc-d-dot {
            width:5px; height:5px; border-radius:50%;
            background:#fde047;
            box-shadow:0 0 7px rgba(253,224,71,0.9);
            animation:sc-badge-pulse 2s ease-in-out infinite;
          }

          .sc-d-panel {
            position:absolute; right:44px; top:0;
            width:${R_D}px; height:${R_D*2}px;
            opacity:0; pointer-events:none;
            transform:translateX(${Math.round(R_D*0.4)}px) scaleX(0.58);
            transform-origin:right center;
            transition:opacity 0.36s ease,
                        transform 0.44s cubic-bezier(0.34,1.12,0.64,1);
          }
          .sc-d-panel.open {
            opacity:1; pointer-events:all;
            transform:translateX(0) scaleX(1);
          }

          .sc-d-drag {
            position:absolute; inset:0; z-index:3;
            cursor:grab; touch-action:none; user-select:none;
          }
          .sc-d-drag:active { cursor:grabbing; }

          .sc-badge { right:50px; bottom:14px; }
          .sc-d-up   { right:${R_D/2-12}px; top:10px; }
          .sc-d-down { right:${R_D/2-12}px; bottom:10px; }

          .sc-tip {
            position:absolute;
            right:calc(100% + 8px); top:50%;
            transform:translateY(-50%);
            font-family:'Share Tech Mono',monospace;
            font-size:8px; letter-spacing:0.13em;
            white-space:nowrap;
            background:rgba(0,0,0,0.9);
            border:1px solid rgba(50,197,244,0.3);
            padding:3px 9px; border-radius:2px;
            opacity:0; pointer-events:none;
            transition:opacity 0.16s, color 0.16s;
            z-index:10;
          }
          .sc-hole:hover .sc-tip { opacity:1; }
        }

        /* ═══════════════════════════
           MOBILE  ≤ 1024px
        ═══════════════════════════ */
        .sc-m { display:none; }
        @media (max-width: 1024px) {
          .sc-m {
            display:block;
            position:fixed; top:0; right:0;
            z-index:9800;
            width:${SIZE}px;
            height:${SIZE}px;
            pointer-events:none;
          }

          .sc-m-tab {
            position:absolute; top:0; right:0;
            display:flex; align-items:center; gap:6px;
            padding:6px 13px 7px;
            background:linear-gradient(135deg,#0a1e27,#071318);
            border-bottom:1.5px solid rgba(50,197,244,0.38);
            border-left:1.5px solid rgba(50,197,244,0.38);
            border-radius:0 0 0 12px;
            cursor:pointer; z-index:10;
            pointer-events:all;
            box-shadow:0 3px 18px rgba(50,197,244,0.15),
                       inset 0 -1px 0 rgba(50,197,244,0.07);
            transition:background 0.25s, border-color 0.25s, box-shadow 0.25s;
            touch-action:manipulation;
            -webkit-tap-highlight-color:transparent;
          }
          .sc-m-tab.open,
          .sc-m-tab:active {
            background:linear-gradient(135deg,#0f2b38,#0d2030);
            border-color:rgba(253,224,71,0.5);
            box-shadow:0 3px 22px rgba(253,224,71,0.2),
                       inset 0 -1px 0 rgba(253,224,71,0.1);
          }
          .sc-m-ico {
            color:#32c5f4; flex-shrink:0;
            transition:color 0.25s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
          }
          .sc-m-tab.open .sc-m-ico  { color:#fde047; transform:rotate(135deg); }
          .sc-m-tab.attn .sc-m-ico  { animation:sc-shake 2.5s ease-out; color:#fde047; }
          .sc-m-txt {
            font-family:'Share Tech Mono',monospace;
            font-size:8px; letter-spacing:0.14em;
            color:rgba(50,197,244,0.8); text-transform:uppercase;
            white-space:nowrap; max-width:80px;
            overflow:hidden; text-overflow:ellipsis;
            transition:color 0.25s;
          }
          .sc-m-tab.open .sc-m-txt { color:#fde047; }

          .sc-m-panel {
            position:absolute; top:0; right:0;
            width:${SIZE}px; height:${SIZE}px;
            overflow:hidden;
            pointer-events:none;
            opacity:0;
            transform:scale(0.5) translate(25%,-25%);
            transform-origin:top right;
            transition:opacity 0.34s ease,
                        transform 0.44s cubic-bezier(0.34,1.1,0.64,1);
          }
          .sc-m-panel.open {
            opacity:1; pointer-events:all;
            transform:scale(1) translate(0,0);
          }

          .sc-m-drag {
            position:absolute; inset:0; z-index:3;
            cursor:grab; touch-action:none; user-select:none;
          }
          .sc-m-drag:active { cursor:grabbing; }

          .sc-tip {
            position:absolute;
            top:calc(100% + 4px); left:50%;
            transform:translateX(-50%);
            font-family:'Share Tech Mono',monospace;
            font-size:6px; letter-spacing:0.08em;
            white-space:nowrap;
            background:rgba(0,0,0,0.82);
            padding:1px 4px; border-radius:2px;
            pointer-events:none; user-select:none;
            text-transform:uppercase;
            transition:color 0.2s, opacity 0.2s;
          }

          .sc-badge { left:16px; bottom:16px; }
          .sc-m-prev { left:16px;  bottom:46px; }
          .sc-m-next { left:46px; bottom:46px; }
        }
      `}</style>

      {/* ══════════════ DESKTOP ══════════════ */}
      <div className="sc-d">
        <div
          className={`sc-d-tab ${isOpen?"open":""} ${attention&&!isOpen?"attn":""}`}
          onClick={toggle} role="button" aria-label="Navigation"
        >
          <DialIcon sz={22} cls="sc-d-ico"/>
          <div className="sc-d-dot"/>
        </div>

        <div className={`sc-d-panel ${isOpen?"open":""}`}>
          <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"}}
            viewBox={`0 0 ${R_D} ${R_D*2}`}>
            <defs>
              <radialGradient id="sc-dg" cx="100%" cy="50%" r="100%">
                <stop offset="0%"  stopColor="#0b1e28"/>
                <stop offset="100%" stopColor="#020709"/>
              </radialGradient>
            </defs>
            <path d={`M${R_D} 0 A${R_D} ${R_D} 0 0 0 ${R_D} ${R_D*2} Z`}
              fill="url(#sc-dg)" stroke="rgba(50,197,244,0.25)" strokeWidth="1.5"/>
            {Array.from({length:12}).map((_,i)=>(
              <line key={i}
                x1={4} y1={(R_D*2/13)*(i+1)}
                x2={R_D*0.5} y2={(R_D*2/13)*(i+1)}
                stroke="rgba(255,255,255,0.02)" strokeWidth="0.7"/>
            ))}
            <path d={`M${R_D} ${R_D*0.1} A${R_D*0.9} ${R_D*0.9} 0 0 0 ${R_D} ${R_D*1.9}`}
              fill="none" stroke="rgba(50,197,244,0.07)" strokeWidth="4"/>
            <path d={`M${R_D} ${R_D*0.3} A${R_D*0.7} ${R_D*0.7} 0 0 0 ${R_D} ${R_D*1.7}`}
              fill="none" stroke="rgba(50,197,244,0.04)" strokeWidth="2.5"/>
          </svg>

          <div className="sc-d-drag"
            onPointerDown={onPD} onPointerMove={onPM}
            onPointerUp={onPU} onPointerCancel={onPU} onWheel={onWh}/>

          <div className="sc-hub"
            style={{width:40,height:40,right:8,top:R_D-20}}
            onClick={goHome} role="button" aria-label="Home">
            <span className="sc-hub-t">CP<br/>INC</span>
          </div>

          <div className="sc-badge" style={{position:"absolute"}}>
            {String(dialOffset+1).padStart(2,"0")}–{String(dialOffset+VISIBLE).padStart(2,"0")} / {SECTIONS.length}
          </div>

          <button className={`sc-arr sc-d-up ${!canUp?"off":""}`}
            style={{position:"absolute"}} onClick={()=>shift(-1)} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </button>
          <button className={`sc-arr sc-d-down ${!canDown?"off":""}`}
            style={{position:"absolute"}} onClick={()=>shift(1)} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {vis.map((sec, vi) => {
            const gi      = dialOffset + vi;
            const isAct   = gi === activeIdx;
            const col     = HOLE_COLORS[vi];
            const anim    = `sc-anim-${slideDir===1?"down":"up"}`;
            const {x, y}  = dPos(vi);
            return (
              <div key={`${animKey}-d-${sec.id}`}
                className={`sc-hole ${isAct?"sc-act":""} ${anim}`}
                style={{
                  left:x, top:y,
                  width:HOLE_D, height:HOLE_D,
                  border:`2px solid ${isAct?"#fde047":col.border}`,
                  boxShadow: isAct
                    ? `inset 0 4px 10px #000, 0 0 14px rgba(253,224,71,0.75), 0 0 28px rgba(253,224,71,0.25)`
                    : `inset 0 4px 10px #000, 0 0 6px ${col.glow}`,
                }}
                onClick={()=>goTo(sec)}>
                <span className="sc-num" style={{
                  fontSize: sec.num >= 10 ? "9px" : "11px",
                  color: isAct ? "#fde047" : col.text,
                  textShadow: isAct
                    ? `0 0 8px rgba(253,224,71,0.9)`
                    : `0 0 5px ${col.glow}`,
                }}>
                  {String(sec.num).padStart(2,"0")}
                </span>
                <span className="sc-lbl" style={{
                  color: isAct ? "rgba(253,224,71,0.8)" : `${col.text}99`,
                  fontSize:"5px",
                }}>
                  {sec.label.split(" ")[0]}
                </span>
                <span className="sc-tip" style={{
                  color: isAct ? "#fde047" : col.text,
                  borderColor: isAct ? "rgba(253,224,71,0.35)" : "rgba(50,197,244,0.3)",
                }}>
                  {String(sec.num).padStart(2,"0")} {sec.label}
                </span>
              </div>
            );
          })}

          {!activeVisible && isOpen && (
            <div style={{
              position:"absolute", right:50, top:"50%",
              transform:"translateY(-50%)",
              fontFamily:"'Share Tech Mono',monospace",
              fontSize:"8px", color:"rgba(253,224,71,0.7)",
              zIndex:10, pointerEvents:"none",
              background:"rgba(0,0,0,0.7)",
              border:"1px solid rgba(253,224,71,0.3)",
              padding:"3px 6px", borderRadius:"2px",
              whiteSpace:"nowrap",
            }}>
              {activeIdx < dialOffset ? "▲ CURRENT" : "▼ CURRENT"}
            </div>
          )}
        </div>
      </div>

      {/* ══════════════ MOBILE ══════════════ */}
      <div className="sc-m">
        <div
          className={`sc-m-tab ${isOpen?"open":""} ${attention&&!isOpen?"attn":""}`}
          onClick={toggle} role="button" aria-label="Navigation"
        >
          <DialIcon sz={18} cls="sc-m-ico"/>
          <span className="sc-m-txt">{SECTIONS[activeIdx]?.label}</span>
        </div>

        <div className={`sc-m-panel ${isOpen?"open":""}`}>
          <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible"}}
            viewBox={`0 0 ${SIZE} ${SIZE}`}>
            <defs>
              <radialGradient id="sc-mg" cx="100%" cy="0%" r="100%">
                <stop offset="0%"  stopColor="#0b1e28"/>
                <stop offset="100%" stopColor="#020709"/>
              </radialGradient>
              <clipPath id="sc-mc">
                <rect x="0" y="0" width={SIZE} height={SIZE}/>
              </clipPath>
            </defs>
            <circle cx={SIZE} cy={0} r={mR}
              fill="url(#sc-mg)" stroke="rgba(50,197,244,0.25)" strokeWidth="1.5"
              clipPath="url(#sc-mc)"/>
            {Array.from({length:8}).map((_,i)=>{
              const a=(98+(i/7)*74)*Math.PI/180;
              return <line key={i}
                x1={SIZE+mR*0.36*Math.cos(a)} y1={mR*0.36*Math.sin(a)}
                x2={SIZE+mR*0.62*Math.cos(a)} y2={mR*0.62*Math.sin(a)}
                stroke="rgba(255,255,255,0.02)" strokeWidth="0.7" clipPath="url(#sc-mc)"/>;
            })}
            <circle cx={SIZE} cy={0} r={mR*0.88}
              fill="none" stroke="rgba(50,197,244,0.07)" strokeWidth="4" clipPath="url(#sc-mc)"/>
            <circle cx={SIZE} cy={0} r={mR*0.68}
              fill="none" stroke="rgba(50,197,244,0.04)" strokeWidth="2.5" clipPath="url(#sc-mc)"/>
          </svg>

          <div className="sc-m-drag"
            onPointerDown={onPD} onPointerMove={onPM}
            onPointerUp={onPU} onPointerCancel={onPU} onWheel={onWh}/>

          <div className="sc-hub"
            style={{width:36,height:36,right:8,top:8}}
            onClick={goHome} role="button" aria-label="Home">
            <span className="sc-hub-t">CP<br/>INC</span>
          </div>

          <div className="sc-badge" style={{position:"absolute"}}>
            {String(dialOffset+1).padStart(2,"0")}–{String(dialOffset+VISIBLE).padStart(2,"0")}/{SECTIONS.length}
          </div>

          <button className={`sc-arr sc-m-prev ${!canUp?"off":""}`}
            style={{position:"absolute"}} onClick={()=>shift(-1)} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button className={`sc-arr sc-m-next ${!canDown?"off":""}`}
            style={{position:"absolute"}} onClick={()=>shift(1)} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          {vis.map((sec, vi) => {
            const gi     = dialOffset + vi;
            const isAct  = gi === activeIdx;
            const col    = HOLE_COLORS[vi];
            const anim   = `sc-anim-${slideDir===1?"right":"left"}`;
            const {x, y} = mPos(vi);
            return (
              <div key={`${animKey}-m-${sec.id}`}
                className={`sc-hole ${isAct?"sc-act":""} ${anim}`}
                style={{
                  left:x, top:y,
                  width:HOLE_M, height:HOLE_M,
                  border:`2px solid ${isAct?"#fde047":col.border}`,
                  boxShadow: isAct
                    ? `inset 0 4px 10px #000, 0 0 14px rgba(253,224,71,0.75), 0 0 28px rgba(253,224,71,0.25)`
                    : `inset 0 4px 10px #000, 0 0 6px ${col.glow}`,
                }}
                onClick={()=>goTo(sec)}>
                <span className="sc-num" style={{
                  fontSize: sec.num >= 10 ? "8px" : "10px",
                  color: isAct ? "#fde047" : col.text,
                  textShadow: isAct
                    ? `0 0 8px rgba(253,224,71,0.9)`
                    : `0 0 5px ${col.glow}`,
                }}>
                  {String(sec.num).padStart(2,"0")}
                </span>
                <span className="sc-tip" style={{
                  color: isAct ? "rgba(253,224,71,0.85)" : `${col.text}CC`,
                  opacity: 1,
                }}>
                  {sec.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}