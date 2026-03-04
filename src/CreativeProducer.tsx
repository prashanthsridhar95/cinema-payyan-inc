import { useState, useRef, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Instagram, LayoutGrid, Youtube, Play, Clapperboard, ExternalLink } from "lucide-react";
import { Images, VideoAssets } from "./assets/assets";

/* ─── YouTube Card ──────────────────────────── */
function YTCard({ item, index }: { item: any; index: number }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hovered) { v.muted = true; v.play().catch(() => {}); }
    else { v.pause(); v.currentTime = 0; }
  }, [hovered]);

  return (
    <motion.div
      className="cpcp-yt-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="cpcp-yt-media">
        <video ref={videoRef} src={item.preview} className="cpcp-yt-video" muted loop playsInline />
        <div className="cpcp-yt-gradient" />
        <div className="cpcp-yt-tag">{item.tag}</div>
        <motion.a
          href={item.link} target="_blank" rel="noreferrer"
          className="cpcp-yt-play"
          animate={{ opacity: hovered ? 1 : 0.7, scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.25 }}
        >
          <Play fill="black" size={18} />
        </motion.a>
        <motion.div
          className="cpcp-yt-scan"
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <div className="cpcp-yt-info">
        <h5 className="cpcp-yt-title">{item.title}</h5>
        <p className="cpcp-yt-desc">{item.desc}</p>
      </div>
    </motion.div>
  );
}

/* ─── MAIN ──────────────────────────────────── */
const CreativeProducer = () => {
  const [activeTab,   setActiveTab]   = useState("images");
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView    = useInView(headerRef, { once: true, amount: 0.5 });

  const imagesList = useMemo(() => [
    Images.CreativePr1, Images.CreativePr2, Images.CreativePr3,
    Images.CreativePr4, Images.CreativePr5,
  ], []);

  const reelsList = useMemo(() => [
    VideoAssets.vjPreviews[15], VideoAssets.vjPreviews[16],
    VideoAssets.vjPreviews[17], VideoAssets.vjPreviews[18],
  ], []);

  const youtubeList = useMemo(() => [
    {
      id: 1, title: "Madras Matinee Reveal",
      desc: "Engineered the official digital reveal campaign, generating 500k+ organic impressions.",
      link: "https://youtu.be/iOoRSnCsftQ",
      preview: VideoAssets.vjPreviews[19], tag: "BRAND REVEAL",
    },
    {
      id: 2, title: "Marketing Strategy",
      desc: "High-impact precision targeting campaign focusing on regional cinema demographics.",
      link: "https://youtu.be/O_3zIwyqL6s",
      preview: VideoAssets.vjPreviews[20], tag: "DIGITAL STRATEGY",
    },
    {
      id: 3, title: "Matinee Trailer Drop",
      desc: "Coordinated cross-platform trailer distribution and hype-cycle management.",
      link: "https://youtu.be/F_LRE9Bfaw0",
      preview: VideoAssets.vjPreviews[21], tag: "PROMO DROP",
    },
  ], []);

  const currentList =
    activeTab === "images"  ? imagesList  :
    activeTab === "reels"   ? reelsList   : youtubeList;

  /* ── SCROLL → DOT SYNC ─────────────────────
     Direct scroll-position math: find which card
     centre is closest to the container centre.
     Runs on every scroll event — 100% reliable.
  ─────────────────────────────────────────── */
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = Array.from(
      container.querySelectorAll<HTMLElement>('[data-card]')
    );
    if (!cards.length) return;

    const cLeft  = container.getBoundingClientRect().left;
    const cMid   = cLeft + container.offsetWidth / 2;

    let bestIdx  = 0;
    let bestDist = Infinity;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const dist = Math.abs(rect.left + rect.width / 2 - cMid);
      if (dist < bestDist) { bestDist = dist; bestIdx = Number(card.dataset.card); }
    });

    setScrollIndex(bestIdx);
  };

  /* reset on tab change */
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    setScrollIndex(0);
  }, [activeTab]);

  const tabs = [
    { key: "images",  label: "IMAGES",  Icon: LayoutGrid },
    { key: "reels",   label: "REELS",   Icon: Instagram  },
    { key: "youtube", label: "YOUTUBE", Icon: Youtube    },
  ];

  /* dot click → scroll to card */
  const scrollToCard = (i: number) => {
    setScrollIndex(i);                          // snap dot immediately
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>(`[data-card="${i}"]`);
    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;0,800;1,600;1,700;1,800&display=swap');

        /* ═══════════════════════════════════════
           SECTION
        ═══════════════════════════════════════ */
        .cpcp-section {
          background: #000;
          padding: 90px 0 110px;
          overflow: hidden;
          position: relative;
        }
        .cpcp-section::before {
          content: '';
          position: absolute; top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent);
        }

        .cpcp-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(20px,6%,60px);
        }

        /* ═══════════════════════════════════════
           SECTION HEADER
        ═══════════════════════════════════════ */
        .cpcp-header {
          display: flex; align-items: center; gap: 20px;
          padding: 0 clamp(20px,6%,60px);
          margin-bottom: 60px;
          max-width: 1200px; margin-left: auto; margin-right: auto;
        }

        .cpcp-header-rule {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.35));
          transform-origin: left;
        }
        .cpcp-header-rule--r {
          background: linear-gradient(90deg, rgba(50,197,244,0.3), transparent);
          transform-origin: right;
        }

        .cpcp-header-content {
          display: flex; align-items: center; gap: 14px; flex-shrink: 0;
        }
        .cpcp-header-icon {
          width: 36px; height: 36px;
          border: 1px solid rgba(253,224,71,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #fde047; flex-shrink: 0;
        }
        .cpcp-overline {
          font-family: 'Courier New', monospace;
          font-size: 0.5rem; letter-spacing: 5px;
          color: rgba(255,255,255,0.45); text-transform: uppercase;
          display: block; margin-bottom: 4px;
        }
        .cpcp-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 3.5vw, 2.8rem);
          font-weight: 800; font-style: italic;
          color: #fff; line-height: 1; margin: 0;
          letter-spacing: -0.5px;
        }
        .cpcp-heading-yellow { color: #fde047; font-style: normal; }

        /* ═══════════════════════════════════════
           FEATURE CARD
        ═══════════════════════════════════════ */
        .cpcp-feature {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }

        /* image side */
        .cpcp-img-side {
          position: relative;
          display: flex; align-items: center; justify-content: center;
        }

        /* corner marks */
        .cpcp-corner {
          position: absolute; width: 20px; height: 20px;
          pointer-events: none; z-index: 5;
        }
        .cpcp-corner--tl { top:-8px; left:-8px; border-top:1px solid rgba(253,224,71,0.5); border-left:1px solid rgba(253,224,71,0.5); }
        .cpcp-corner--tr { top:-8px; right:-8px; border-top:1px solid rgba(253,224,71,0.5); border-right:1px solid rgba(253,224,71,0.5); }
        .cpcp-corner--bl { bottom:-8px; left:-8px; border-bottom:1px solid rgba(50,197,244,0.4); border-left:1px solid rgba(50,197,244,0.4); }
        .cpcp-corner--br { bottom:-8px; right:-8px; border-bottom:1px solid rgba(50,197,244,0.4); border-right:1px solid rgba(50,197,244,0.4); }

        .cpcp-img {
          max-width: 100%; height: auto; display: block;
          filter: drop-shadow(0 20px 50px rgba(0,0,0,0.85));
          transition: transform 0.6s ease;
        }
        .cpcp-img-side:hover .cpcp-img { transform: scale(1.04) rotate(-1deg); }

        .cpcp-img-glow {
          position: absolute; inset: 0;
          background: radial-gradient(circle at center, rgba(50,197,244,0.07) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        /* instagram badge */
        .cpcp-insta-btn {
          position: absolute; bottom: -14px; left: 50%; transform: translateX(-50%);
          display: flex; align-items: center; gap: 8px;
          font-family: 'Courier New', monospace;
          font-size: 0.46rem; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          background: rgba(0,0,0,0.75); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 8px 16px; text-decoration: none; white-space: nowrap;
          transition: border-color 0.3s, color 0.3s;
          z-index: 6;
        }
        .cpcp-insta-btn:hover { border-color: #fde047; color: #fde047; }

        /* content side */
        .cpcp-content {}

        .cpcp-pre {
          display: flex; align-items: center; gap: 12px; margin-bottom: 14px;
        }
        .cpcp-pre-line { width: 28px; height: 1px; background: #fde047; opacity: 0.5; }
        .cpcp-pre-text {
          font-family: 'Courier New', monospace;
          font-size: 0.5rem; letter-spacing: 5px;
          color: rgba(253,224,71,0.65); text-transform: uppercase;
        }

        .cpcp-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 800; font-style: italic;
          color: #fff; line-height: 0.92;
          letter-spacing: -1px; margin: 0 0 10px;
        }
        .cpcp-title-yellow { color: #fde047; font-style: normal; }

        .cpcp-tagline {
          font-family: 'Courier New', monospace;
          font-size: 0.5rem; letter-spacing: 4px;
          color: rgba(50,197,244,0.7); text-transform: uppercase;
          margin: 0 0 18px;
        }

        .cpcp-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(253,224,71,0.3), rgba(50,197,244,0.2), transparent);
          margin-bottom: 20px;
        }

        .cpcp-desc {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1rem, 1.4vw, 1.1rem);
          color: rgba(255,255,255,0.55);
          line-height: 1.85; margin: 0 0 28px;
        }
        .cpcp-highlight {
          color: #fff; font-weight: 700;
          border-bottom: 1px solid rgba(253,224,71,0.4);
        }

        /* stats strip */
        .cpcp-stats {
          display: flex; align-items: stretch;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          padding: 18px 24px;
          margin-bottom: 28px;
          gap: 0;
        }
        .cpcp-stat { display: flex; flex-direction: column; gap: 5px; flex: 1; }
        .cpcp-stat-divider { width: 1px; background: rgba(255,255,255,0.08); margin: 0 20px; }
        .cpcp-stat-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700; color: #32c5f4; line-height: 1;
        }
        .cpcp-stat-plus { font-size: 0.6em; vertical-align: super; }
        .cpcp-stat-label {
          font-family: 'Courier New', monospace;
          font-size: 0.44rem; letter-spacing: 3px;
          color: rgba(255,255,255,0.35); text-transform: uppercase;
        }

        /* CTA */
        .cpcp-cta {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px;
          border: 1px solid #fde047;
          color: #fde047; text-decoration: none;
          font-family: 'Courier New', monospace;
          font-size: 0.54rem; letter-spacing: 4px; text-transform: uppercase;
          transition: color 0.4s;
        }
        .cpcp-cta-bg {
          position: absolute; inset: 0;
          background: #fde047;
          transform-origin: left; transform: scaleX(0); z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .cpcp-cta:hover .cpcp-cta-bg { transform: scaleX(1); }
        .cpcp-cta:hover { color: #000; }
        .cpcp-cta-label, .cpcp-cta svg { position: relative; z-index: 1; }

        /* ═══════════════════════════════════════
           TABS
        ═══════════════════════════════════════ */
        .cpcp-tabs-wrap {
          margin-top: 10px;
        }

        .cpcp-tab-bar {
          display: flex; gap: 0;
          border: 1px solid rgba(255,255,255,0.08);
          width: fit-content;
          margin-bottom: 28px;
          overflow: hidden;
        }

        .cpcp-tab {
          position: relative;
          display: flex; align-items: center; gap: 8px;
          padding: 12px 24px;
          background: transparent; border: none; cursor: pointer;
          font-family: 'Courier New', monospace;
          font-size: 0.52rem; letter-spacing: 4px; text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          transition: color 0.3s;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .cpcp-tab:last-child { border-right: none; }
        .cpcp-tab:hover { color: rgba(255,255,255,0.7); }
        .cpcp-tab--active { color: #000; }
        .cpcp-tab--active .cpcp-tab-icon { color: #000; }

        .cpcp-tab-pill {
          position: absolute; inset: 0;
          background: #fde047; z-index: 0;
        }
        .cpcp-tab-icon, .cpcp-tab-label { position: relative; z-index: 1; }
        .cpcp-tab-icon { opacity: 0.7; }
        .cpcp-tab--active .cpcp-tab-icon { opacity: 1; }

        /* ── MEDIA SCROLL CONTAINER ───────────── */
        .cpcp-media-scroll {
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          /* side padding centres first/last card on screen */
          padding: 0 calc(50% - 160px) 8px;
        }
        .cpcp-media-scroll::-webkit-scrollbar { display: none; }

        /* ── GRID LAYOUTS ─────────────────────── */
        .cpcp-grid {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        /* POSTER (images) */
        .cpcp-poster {
          flex: 0 0 clamp(200px, 60vw, 280px);
          width: clamp(200px, 60vw, 280px);
          aspect-ratio: 2/3;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: #0a0a0a;
          position: relative;
          scroll-snap-align: center;
          transition: border-color 0.35s;
        }
        .cpcp-poster:hover { border-color: rgba(253,224,71,0.25); }
        .cpcp-poster img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.55s ease;
        }
        .cpcp-poster:hover img { transform: scale(1.07); }
        .cpcp-poster-overlay {
          position: absolute; inset: 0;
          background: rgba(50,197,244,0.06);
          opacity: 0; transition: opacity 0.35s;
        }
        .cpcp-poster:hover .cpcp-poster-overlay { opacity: 1; }
        /* TL/BR marks */
        .cpcp-poster-tl, .cpcp-poster-br {
          position: absolute; width: 10px; height: 10px; pointer-events: none; z-index: 4;
        }
        .cpcp-poster-tl { top:7px; left:7px; border-top:1px solid rgba(253,224,71,0.45); border-left:1px solid rgba(253,224,71,0.45); }
        .cpcp-poster-br { bottom:7px; right:7px; border-bottom:1px solid rgba(253,224,71,0.45); border-right:1px solid rgba(253,224,71,0.45); }

        /* REEL */
        .cpcp-reel-card {
          flex: 0 0 clamp(140px, 42vw, 210px);
          width: clamp(140px, 42vw, 210px);
          aspect-ratio: 9/16;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: #0a0a0a;
          position: relative;
          position: relative;
          scroll-snap-align: center;
          transition: border-color 0.35s, transform 0.4s;
        }
        .cpcp-reel-card:hover { border-color: rgba(50,197,244,0.25); transform: translateY(-6px); }
        .cpcp-reel-video {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }
        .cpcp-reel-gradient {
          position: absolute; inset:0;
          background: linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.65) 100%);
          pointer-events:none;
        }
        .cpcp-reel-tag {
          position: absolute; bottom:10px; left:10px; right:10px;
          display: flex; justify-content: space-between; align-items: center;
          font-family: 'Courier New', monospace;
          font-size: 0.44rem; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.7); z-index:3;
        }
        .cpcp-reel-num { color: #fde047; }

        /* YT CARD */
        .cpcp-yt-card {
          /* clamp: min 260px, prefer 72vw, max 360px */
          flex: 0 0 clamp(260px, 72vw, 360px);
          width: clamp(260px, 72vw, 360px);
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          scroll-snap-align: center;
          transition: border-color 0.35s, box-shadow 0.35s;
        }
        .cpcp-yt-card:hover { border-color: rgba(253,224,71,0.2); box-shadow: 0 12px 40px rgba(0,0,0,0.6); }

        .cpcp-yt-media {
          position: relative;
          width: 100%;
          /* strict 16:9 — never stretches */
          aspect-ratio: 16 / 9;
          background: #0a0a0a;
          overflow: hidden;
        }
        .cpcp-yt-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .cpcp-yt-gradient {
          position:absolute; inset:0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%);
          pointer-events:none;
        }
        .cpcp-yt-tag {
          position:absolute; top:10px; left:10px;
          font-family:'Courier New',monospace;
          font-size:0.42rem; letter-spacing:3px;
          color:#000; background:#fde047;
          padding:3px 8px; z-index:5; text-transform:uppercase;
        }
        .cpcp-yt-play {
          position:absolute; bottom:10px; right:10px;
          width:36px; height:36px;
          background:#fde047; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          text-decoration:none; z-index:5;
        }
        .cpcp-yt-scan {
          position:absolute; bottom:0; left:0; right:0;
          height:2px; background:linear-gradient(90deg,#32c5f4,#fde047);
          transform-origin:left; z-index:6;
        }

        .cpcp-yt-info { padding: 18px 20px; }
        .cpcp-yt-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.15rem; font-weight: 700;
          color: #fff; margin: 0 0 8px; line-height: 1.3;
        }
        .cpcp-yt-desc {
          font-family: 'Courier New', monospace;
          font-size: 0.48rem; letter-spacing: 2px;
          color: rgba(255,255,255,0.45); line-height: 1.9;
          margin: 0;
        }

        /* ═══════════════════════════════════════
           SCROLL DOTS — clearly visible, clickable
        ═══════════════════════════════════════ */
        .cpcp-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 24px;
          padding: 8px 0;
        }

        .cpcp-dot {
          /* pill shape — inactive */
          width: 24px; height: 4px;
          background: rgba(255,255,255,0.18);
          border-radius: 2px;
          cursor: pointer;
          transition: width 0.35s cubic-bezier(0.77,0,0.18,1),
                      background 0.35s,
                      box-shadow 0.35s;
          flex-shrink: 0;
        }

        .cpcp-dot:hover {
          background: rgba(253,224,71,0.5);
        }

        /* active dot — wider + yellow + glow */
        .cpcp-dot--active {
          width: 48px;
          background: #fde047;
          box-shadow: 0 0 10px rgba(253,224,71,0.55);
        }

        /* ═══════════════════════════════════════
           RESPONSIVE
        ═══════════════════════════════════════ */

        /* ── 960px tablet ── */
        @media (max-width: 960px) {
          .cpcp-feature { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .cpcp-pre     { justify-content: center; }
          .cpcp-stats   { max-width: 360px; margin: 0 auto 28px; }
          .cpcp-cta     { margin: 0 auto; }
        }

        /* ── section header: collapse rules on small screens ── */
        @media (max-width: 700px) {
          .cpcp-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            padding: 0 clamp(16px,5%,40px);
            margin-bottom: 40px;
          }
          /* hide decorative rule lines — they overflow on narrow screens */
          .cpcp-header-rule { display: none; }
          .cpcp-header-content { flex-direction: column; align-items: flex-start; gap: 10px; }
          .cpcp-header-icon { width: 30px; height: 30px; }
          .cpcp-overline {
            font-size: 0.46rem; letter-spacing: 4px;
            white-space: normal; line-height: 1.6;
          }
          .cpcp-heading { font-size: clamp(1.4rem, 6vw, 2rem); }
        }

        /* ── 600px mobile ── */
        @media (max-width: 600px) {
          .cpcp-section   { padding: 60px 0 70px; }
          .cpcp-inner     { padding: 0 16px; }

          /* recalculate side padding so cards centre correctly on narrow screens */
          .cpcp-media-scroll { padding: 0 calc(50% - 38vw) 8px; }

          /* tab bar: full width, equal flex cols */
          .cpcp-tab-bar   { width: 100%; }
          .cpcp-tab {
            flex: 1;
            padding: 10px 4px;
            font-size: 0.4rem;
            letter-spacing: 1.5px;
            justify-content: center;
            gap: 5px;
          }

          /* stats strip */
          .cpcp-stats     { flex-wrap: wrap; gap: 14px; padding: 14px 16px; }
          .cpcp-stat-divider { display: none; }
          .cpcp-stat      { min-width: 80px; }

          /* dots */
          .cpcp-dot        { width: 16px; }
          .cpcp-dot--active { width: 34px; }

          
        }

        /* ── 400px very small ── */
        @media (max-width: 400px) {
          .cpcp-media-scroll { padding: 0 calc(50% - 43vw) 8px; }
          .cpcp-tab       { font-size: 0.36rem; letter-spacing: 1px; gap: 4px; }
        }
      `}</style>

      <section className="cpcp-section">

        {/* ── HEADER ───────────────────────────── */}
        <div className="cpcp-header" ref={headerRef}>
          <motion.div
            className="cpcp-header-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="cpcp-header-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="cpcp-header-icon"><Clapperboard size={18} /></div>
            <div>
              <span className="cpcp-overline">CAMPAIGN STRATEGY · CONTENT</span>
              <h2 className="cpcp-heading">
                CREATIVE <span className="cpcp-heading-yellow">PRODUCER</span>
              </h2>
            </div>
          </motion.div>
          <motion.div
            className="cpcp-header-rule cpcp-header-rule--r"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>

        <div className="cpcp-inner">

          {/* ── FEATURE CARD ─────────────────── */}
          <motion.div
            className="cpcp-feature"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* image */}
            <div className="cpcp-img-side">
              <div className="cpcp-img-glow" />
              {(['tl','tr','bl','br'] as const).map(pos => (
                <div key={pos} className={`cpcp-corner cpcp-corner--${pos}`} />
              ))}
              <motion.img
                src={Images.madras} alt="Madras Motion Pictures"
                className="cpcp-img"
                whileHover={{ scale: 1.07, rotate: -1.5 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.a
                href="https://www.instagram.com/madrasmotionpictures/"
                target="_blank" rel="noreferrer"
                className="cpcp-insta-btn"
                whileHover={{ scale: 1.04 }}
              >
                <Instagram size={13} /><span>INSTAGRAM</span>
              </motion.a>
            </div>

            {/* content */}
            <div className="cpcp-content">
              <div className="cpcp-pre">
                <div className="cpcp-pre-line" />
                <span className="cpcp-pre-text">DIGITAL ARCHITECT</span>
              </div>

              <h3 className="cpcp-title">
                TURNING FRAMES<br />
                <span className="cpcp-title-yellow">INTO FAME</span>
              </h3>

              <p className="cpcp-tagline">Campaign Strategy · Content Curation · Growth</p>
              <div className="cpcp-rule" />

              <p className="cpcp-desc">
                I specialise in engineering the digital heartbeat of modern cinema — executing
                high-stakes reveal campaigns that transform raw cinematic footage into{" "}
                <span className="cpcp-highlight">unavoidable content</span>.
              </p>

              <div className="cpcp-stats">
                <div className="cpcp-stat">
                  <span className="cpcp-stat-num">500K<span className="cpcp-stat-plus">+</span></span>
                  <span className="cpcp-stat-label">IMPRESSIONS</span>
                </div>
                <div className="cpcp-stat-divider" />
                <div className="cpcp-stat">
                  <span className="cpcp-stat-num">3</span>
                  <span className="cpcp-stat-label">CAMPAIGNS</span>
                </div>
                <div className="cpcp-stat-divider" />
                <div className="cpcp-stat">
                  <span className="cpcp-stat-num">∞</span>
                  <span className="cpcp-stat-label">IMPACT</span>
                </div>
              </div>

              <motion.a
                href="https://www.instagram.com/madrasmotionpictures/"
                target="_blank" rel="noreferrer"
                className="cpcp-cta"
                whileHover="hover"
              >
                <motion.span
                  className="cpcp-cta-bg"
                  variants={{ hover: { scaleX: 1 } }}
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="cpcp-cta-label">VISIT INSTAGRAM</span>
                <ExternalLink size={13} className="cpcp-cta-icon" />
              </motion.a>
            </div>
          </motion.div>

          {/* ── TABS ─────────────────────────── */}
          <motion.div
            className="cpcp-tabs-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* tab bar */}
            <div className="cpcp-tab-bar">
              {tabs.map(({ key, label, Icon }) => (
                <button
                  key={key}
                  className={`cpcp-tab ${activeTab === key ? "cpcp-tab--active" : ""}`}
                  onClick={() => setActiveTab(key)}
                >
                  {activeTab === key && (
                    <motion.div className="cpcp-tab-pill" layoutId="cpcp-tab-pill" />
                  )}
                  <Icon size={13} className="cpcp-tab-icon" />
                  <span className="cpcp-tab-label">{label}</span>
                </button>
              ))}
            </div>

            {/* scrollable grid */}
            <div className="cpcp-media-scroll" ref={scrollRef} onScroll={handleScroll}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="cpcp-grid"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {activeTab === "images" && imagesList.map((img, i) => (
                    <motion.div
                      key={i} data-card={i}
                      className="cpcp-poster"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.07, duration: 0.45 }}
                    >
                      <img src={img} alt="Work" />
                      <div className="cpcp-poster-overlay" />
                      <div className="cpcp-poster-tl" /><div className="cpcp-poster-br" />
                    </motion.div>
                  ))}

                  {activeTab === "reels" && reelsList.map((reel, i) => (
                    <motion.div
                      key={i} data-card={i}
                      className="cpcp-reel-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08, duration: 0.45 }}
                    >
                      <video src={reel} muted loop autoPlay playsInline className="cpcp-reel-video" />
                      <div className="cpcp-reel-gradient" />
                      <div className="cpcp-reel-tag">
                        <span>REEL</span>
                        <span className="cpcp-reel-num">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                    </motion.div>
                  ))}

                  {activeTab === "youtube" && youtubeList.map((yt, i) => (
                    <div key={yt.id} data-card={i}>
                      <YTCard item={yt} index={i} />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── DOTS ─────────────────────────
                Pill-shaped, clearly yellow when
                active, clickable to jump to card.
            ─────────────────────────────────── */}
            <div className="cpcp-dots">
              {currentList.map((_, i) => (
                <div
                  key={i}
                  className={`cpcp-dot ${scrollIndex === i ? "cpcp-dot--active" : ""}`}
                  onClick={() => scrollToCard(i)}
                  title={`Go to item ${i + 1}`}
                />
              ))}
            </div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CreativeProducer;