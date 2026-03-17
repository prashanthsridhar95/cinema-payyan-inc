import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Tv, ExternalLink } from "lucide-react";
import { Images, VideoAssets } from "./assets/assets";

/* ─── Data ─────────────────────────────────── */
const vjVideos = [
  { id: 1,  title: "Anirudh Ravichander", role: "Composer · Producer",       link: "https://youtu.be/dESRRC-uVME",  preview: VideoAssets.vjPreviews[0], thumb: Images.ScreenshotAR  },
  { id: 2,  title: "Venkat Prabhu",       role: "Director · Actor",          link: "https://youtu.be/lAH_99cCcos", preview: VideoAssets.vjPreviews[1], thumb: Images.ScreenshotVP  },
  { id: 3,  title: "Silambarasan TR",     role: "Actor",                     link: "https://youtu.be/GKHk7d_bQh0", preview: VideoAssets.vjPreviews[2], thumb: Images.ScreenshotSTR },
  { id: 4,  title: "Vijay Sethupathi",    role: "Actor · Producer",          link: "https://youtu.be/77oGSFHYzSY", preview: VideoAssets.vjPreviews[3], thumb: Images.ScreenshotVJS },
  { id: 5,  title: "Arjun DAS",           role: "Actor",                     link: "https://youtu.be/fEpt5b794ys", preview: VideoAssets.vjPreviews[4], thumb: Images.ScreenshotAD  },
  { id: 6,  title: "T. Kumararaja",       role: "Director · Writer",         link: "https://youtu.be/BBnY5tE7-Wo", preview: VideoAssets.vjPreviews[5], thumb: Images.ScreenshotTK  },
  { id: 7,  title: "Kamal Haasan",        role: "Actor · Director · Legend", link: "https://www.youtube.com/watch?v=JzsDo_hf5cg", preview: VideoAssets.vjPreviews[6], thumb: Images.ScreenshotKH  },
  { id: 8,  title: "Dulquer Salmaan",     role: "Actor · Producer",          link: "https://youtu.be/sSmudmwhMgc?si=R8T6Lp_IM9IGQRer", preview: VideoAssets.vjPreviews[7], thumb: Images.ScreenshotDQ  },
  { id: 9,  title: "GVM",                 role: "Director · Visionary",      link: "https://youtu.be/hKbP91H0_Do", preview: VideoAssets.vjPreviews[8], thumb: Images.ScreenshotGVM },
  { id: 10, title: "Ashok Selvan",        role: "Actor",                     link: "https://youtu.be/uXQOlL7EjzA", preview: VideoAssets.vjPreviews[9], thumb: Images.ScreenshotAS  },
];

/* ─── Single Card ───────────────────────────── */
function VJCard({
  video,
  isActive,
  onActivate,
}: {
  video: typeof vjVideos[0];
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hovered || isActive) { v.muted = true; v.play().catch(() => {}); }
    else { v.pause(); v.currentTime = 0; }
  }, [hovered, isActive]);

  const showVideo = hovered || isActive;

  return (
    <div
      className={`vjl-card ${isActive ? "vjl-card--active" : ""}`}
      onMouseEnter={() => { setHovered(true); onActivate(); }}
      onMouseLeave={() => setHovered(false)}
      onClick={onActivate}
    >
      <div className="vjl-media">
        <img src={video.thumb} alt={video.title} className={`vjl-thumb ${showVideo ? "vjl-thumb--hidden" : ""}`} />
        <video ref={videoRef} src={video.preview} className={`vjl-video ${showVideo ? "vjl-video--show" : ""}`} muted loop playsInline preload="none" />
        <div className="vjl-overlay" />
        <div className="vjl-num-tag">{String(video.id).padStart(2, "0")}</div>
        <a href={video.link} target="_blank" rel="noreferrer" className={`vjl-play ${showVideo ? "vjl-play--show" : ""}`} onClick={e => e.stopPropagation()}>
          <Play fill="black" size={16} />
        </a>
        <div className={`vjl-active-bar ${isActive ? "vjl-active-bar--on" : ""}`} />
      </div>
      <div className="vjl-info">
        <div className="vjl-info-row">
          <span className="vjl-session-lbl">SESSION {String(video.id).padStart(2, "0")}</span>
          <ExternalLink size={12} className="vjl-ext" />
        </div>
        <h4 className="vjl-title">{video.title}</h4>
        <span className="vjl-role">{video.role}</span>
      </div>
    </div>
  );
}

/* ─── Main ──────────────────────────────────── */
const AboutWork = () => {
  const vjHeaderRef = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const vjInView    = useInView(vjHeaderRef, { once: true, amount: 0.4 });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused,    setIsPaused]    = useState(false);

  const CARD_W    = 400;
  const CARD_GAP  = 20;
  const CARD_STEP = CARD_W + CARD_GAP;
  const TOTAL     = vjVideos.length;
  const SET_W     = TOTAL * CARD_STEP;

  const loopList = [...vjVideos, ...vjVideos, ...vjVideos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = SET_W;

    let raf: number;
    const speed = 0.7;
    const tick = () => {
      if (!isPaused && track) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= SET_W * 2) track.scrollLeft -= SET_W;
        if (track.scrollLeft < SET_W)      track.scrollLeft += SET_W;
        const posInSet = (track.scrollLeft - SET_W) % SET_W;
        const idx = Math.round(posInSet / CARD_STEP) % TOTAL;
        setActiveIndex(idx);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isPaused, SET_W, CARD_STEP, TOTAL]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;700;900&display=swap');

        .vjl-section {
          background: #0a0f1a;
          background: radial-gradient(circle at center, #0f1628 0%, #0a0f1a 100%);
          padding: 90px 0 100px;
          overflow: hidden;
          position: relative;
        }
        .vjl-section::before {
          content: '';
          position: absolute; top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(50,197,244,0.08) 50%, transparent);
        }

        .vjl-header {
          display: flex; align-items: center; gap: 20px;
          padding: 0 clamp(20px,6%,60px);
          margin-bottom: 48px;
        }
        .vjl-header-rule {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.4));
          transform-origin: left;
        }
        .vjl-header-rule--r {
          background: linear-gradient(90deg, rgba(50,197,244,0.35), transparent);
          transform-origin: right;
        }
        .vjl-header-content { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
        .vjl-header-icon {
          width: 38px; height: 38px;
          border: 1px solid rgba(253,224,71,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #fde047; flex-shrink: 0;
        }
        .vjl-overline {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem, 1.5vw, 0.6rem);
          font-weight: 400; letter-spacing: 6px;
          color: rgba(255,255,255,0.45); text-transform: uppercase; margin-bottom: 6px;
        }
        .vjl-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 4.5vw, 3.2rem);
          font-weight: 400; color: #fff; line-height: 1; margin: 0; letter-spacing: 3px;
        }
        .vjl-heading-yellow { color: #fde047; }
        .vjl-ep-count {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 400; color: rgba(253,224,71,0.25); line-height: 1;
          flex-shrink: 0; letter-spacing: 2px;
        }
        .vjl-ep-lbl {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.48rem, 1.2vw, 0.58rem);
          font-weight: 400; letter-spacing: 4px;
          color: rgba(255,255,255,0.45); text-transform: uppercase;
        }

        .vjl-track-wrap { position: relative; }
        .vjl-track-wrap::before, .vjl-track-wrap::after {
          content: '';
          position: absolute; top: 0; bottom: 0; width: 80px;
          z-index: 5; pointer-events: none;
        }
        .vjl-track-wrap::before { left: 0; background: linear-gradient(to right, #0a0f1a, transparent); }
        .vjl-track-wrap::after  { right: 0; background: linear-gradient(to left, #0a0f1a, transparent); }

        .vjl-track {
          display: flex; gap: 16px;
          overflow-x: scroll; scrollbar-width: none;
          padding: 20px 80px 24px;
        }
        .vjl-track::-webkit-scrollbar { display: none; }

        .vjl-card {
          flex: 0 0 clamp(220px, 35vw, 400px);
          background: #0d1220;
          border: 1px solid rgba(50,197,244,0.08);
          cursor: pointer;
          transition: border-color 0.35s, transform 0.4s, box-shadow 0.4s;
          position: relative;
        }
        .vjl-card:hover, .vjl-card--active {
          border-color: rgba(253,224,71,0.25);
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.7);
        }
        .vjl-media { position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; background: #080d15; }
        .vjl-thumb, .vjl-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .vjl-thumb { transition: opacity 0.4s; opacity: 1; }
        .vjl-thumb--hidden { opacity: 0; }
        .vjl-video { opacity: 0; transition: opacity 0.4s; }
        .vjl-video--show { opacity: 1; }
        .vjl-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.88) 100%);
          z-index: 2; pointer-events: none;
        }
        .vjl-num-tag {
          position: absolute; top: 8px; left: 10px; z-index: 4;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          color: rgba(253,224,71,0.15); line-height: 1; user-select: none;
        }
        .vjl-play {
          position: absolute; bottom: 12px; right: 12px; z-index: 5;
          width: 38px; height: 38px; border-radius: 50%;
          background: #fde047;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          opacity: 0; transform: scale(0.7);
          transition: opacity 0.3s, transform 0.3s;
        }
        .vjl-play--show { opacity: 1; transform: scale(1); }
        .vjl-active-bar {
          position: absolute; bottom: 0; left: 0; right: 0; z-index: 6;
          height: 2px;
          background: linear-gradient(90deg, #fde047, #32c5f4);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.5s ease;
        }
        .vjl-active-bar--on { transform: scaleX(1); }
        .vjl-info { padding: 12px 14px 14px; background: #080d15; }
        .vjl-info-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; }
        .vjl-session-lbl {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1.2vw, 0.56rem);
          font-weight: 400; letter-spacing: 4px;
          color: rgba(253,224,71,0.75); text-transform: uppercase;
        }
        .vjl-ext { color: rgba(255,255,255,0.25); flex-shrink: 0; transition: color 0.3s; }
        .vjl-card:hover .vjl-ext { color: #32c5f4; }
        .vjl-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          font-weight: 400; letter-spacing: 2px;
          color: #fff; margin: 0 0 4px; line-height: 1.1;
        }
        .vjl-role {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.42rem, 1vw, 0.54rem);
          font-weight: 300; letter-spacing: 2px;
          color: rgba(255,255,255,0.45); text-transform: uppercase; display: block;
        }
        .vjl-card:hover .vjl-role { color: rgba(50,197,244,0.75); }

        .vjl-ticker {
          display: flex; align-items: center; gap: 0;
          margin-top: 28px;
          padding: 0 clamp(16px,5%,60px);
        }
        .vjl-ticker-bar {
          flex: 1; height: 2px;
          background: rgba(255,255,255,0.06);
          position: relative; overflow: hidden;
        }
        .vjl-ticker-bar-fill {
          position: absolute; top: 0; left: 0; height: 100%;
          background: linear-gradient(90deg, #32c5f4, #fde047);
          transition: width 0.5s cubic-bezier(0.77,0,0.18,1);
        }
        .vjl-ticker-bar--r .vjl-ticker-bar-fill { background: linear-gradient(90deg, #fde047, transparent); }
        .vjl-ticker-panel {
          flex-shrink: 0; display: flex; align-items: center; gap: 12px;
          padding: 0 clamp(12px, 3vw, 28px);
          border-left: 1px solid rgba(255,255,255,0.08);
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .vjl-ticker-idx {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          color: rgba(253,224,71,0.9); line-height: 1;
          min-width: 36px; text-align: right;
        }
        .vjl-ticker-divider { width: 1px; height: 32px; background: rgba(255,255,255,0.1); }
        .vjl-ticker-info { display: flex; flex-direction: column; gap: 4px; }
        .vjl-ticker-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          letter-spacing: 2px; color: #fff; line-height: 1;
        }
        .vjl-ticker-role {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.42rem, 1vw, 0.54rem);
          font-weight: 300; letter-spacing: 3px;
          color: rgba(50,197,244,0.8); text-transform: uppercase;
        }
        .vjl-ticker-total {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.44rem, 1vw, 0.56rem);
          letter-spacing: 3px;
          color: rgba(255,255,255,0.22); text-transform: uppercase;
          flex-shrink: 0; padding-left: 12px; align-self: center;
        }
        .vjl-pause-hint {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.42rem, 1.2vw, 0.56rem);
          font-weight: 300; letter-spacing: 4px;
          color: rgba(255,255,255,0.2); text-transform: uppercase;
          text-align: center; margin-top: 14px; transition: color 0.3s;
        }
        .vjl-pause-hint.paused { color: rgba(253,224,71,0.6); }

        @media (max-width: 640px) {
          .vjl-section  { padding: 60px 0 70px; }
          .vjl-header   { justify-content: center; }
          .vjl-header-rule { display: none; }
          .vjl-track    { padding: 16px 40px 20px; gap: 12px; }
          .vjl-track-wrap::before, .vjl-track-wrap::after { width: 40px; }
          .vjl-ticker   { padding: 0 clamp(12px,4%,40px); }
          .vjl-ticker-panel { padding: 0 12px; gap: 8px; }
          .vjl-ticker-total { display: none; }
        }
      `}</style>

      <section className="vjl-section">
        <div className="vjl-header" ref={vjHeaderRef}>
          <motion.div className="vjl-header-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: vjInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.76,0,0.24,1] }}
          />
          <motion.div className="vjl-header-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: vjInView ? 1 : 0, y: vjInView ? 0 : 18 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="vjl-header-icon"><Tv size={18} /></div>
            <div>
              <span className="vjl-overline">VJ</span>
              <h2 className="vjl-heading">CURATED <span className="vjl-heading-yellow">CONVERSATIONS</span></h2>
            </div>
            <div style={{ marginLeft: 12 }}>
              <span className="vjl-ep-count">10</span>
              <span className="vjl-ep-lbl">EPISODES</span>
            </div>
          </motion.div>
          <motion.div className="vjl-header-rule vjl-header-rule--r"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: vjInView ? 1 : 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.76,0,0.24,1] }}
          />
        </div>

        <div className="vjl-track-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="vjl-track" ref={trackRef}>
            {loopList.map((video, i) => {
              const realIndex = i % TOTAL;
              return (
                <VJCard
                  key={`${i}-${video.id}`}
                  video={video}
                  index={realIndex}
                  isActive={realIndex === activeIndex}
                  onActivate={() => setActiveIndex(realIndex)}
                />
              );
            })}
          </div>
        </div>

        <div className="vjl-ticker">
          <div className="vjl-ticker-bar">
            <div className="vjl-ticker-bar-fill" style={{ width: `${((activeIndex + 1) / TOTAL) * 100}%` }} />
          </div>
          <div className="vjl-ticker-panel">
            <span className="vjl-ticker-idx">{String(activeIndex + 1).padStart(2, "0")}</span>
            <div className="vjl-ticker-divider" />
            <div className="vjl-ticker-info">
              <span className="vjl-ticker-name">{vjVideos[activeIndex].title}</span>
              <span className="vjl-ticker-role">{vjVideos[activeIndex].role}</span>
            </div>
            <span className="vjl-ticker-total">/ {String(TOTAL).padStart(2, "0")}</span>
          </div>
          <div className="vjl-ticker-bar vjl-ticker-bar--r">
            <div className="vjl-ticker-bar-fill" style={{ width: `${((TOTAL - activeIndex - 1) / TOTAL) * 100}%` }} />
          </div>
        </div>

        <p className={`vjl-pause-hint ${isPaused ? "paused" : ""}`}>
          {isPaused ? "● PAUSED — HOVER TO PREVIEW" : "● AUTO SCROLLING — HOVER TO PAUSE"}
        </p>
      </section>
    </>
  );
};

export default AboutWork;