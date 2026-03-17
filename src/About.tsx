import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Images } from "./assets/assets";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const movieTrain = [
    Images.bigboss,
    Images.stone,
    Images.levelup,
    Images.startda,
    Images.logo,
    Images.madras,
  ];

  const socials = [
    {
      label: "Instagram",
      handle: "@cinemapayyan.inc",
      url: "https://www.instagram.com/cinemapayyan.inc/",
      color: "#E1306C",
      glow: "rgba(225,48,108,0.35)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
        </svg>
      ),
    },
    {
      label: "X / Twitter",
      handle: "@cinemapayyan",
      url: "https://x.com/cinemapayyan",
      color: "#fff",
      glow: "rgba(255,255,255,0.25)",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.963l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
        </svg>
      ),
    },
    {
      label: "YouTube",
      handle: "@OpenPannaa",
      url: "https://www.youtube.com/@OpenPannaa",
      color: "#FF0000",
      glow: "rgba(255,0,0,0.35)",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;700;900&display=swap');

        .cp-ab-section {
          width: 100%;
          min-height: 100vh;
          background: #000;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 110px 8%;
        }

        .cp-ab-section::before {
          content: '';
          position: absolute;
          top: 0; left: 8%; right: 8%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent);
          pointer-events: none; z-index: 0;
        }

        .cp-ab-section::after {
          content: '人';
          position: absolute;
          right: 3%; bottom: -40px;
          font-size: 28rem;
          color: rgba(255,255,255,0.012);
          font-family: serif; line-height: 1;
          pointer-events: none; user-select: none; z-index: 0;
        }

        .cp-ab-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.15;
        }

        /* ── LOGO TRAIN ── */
        .cp-ab-train-wrap {
          position: absolute;
          top: 15%; left: 0;
          width: 100%; height: 200px;
          opacity: 0.18;
          z-index: 1;
          pointer-events: none;
          display: flex; align-items: center;
          overflow: hidden;
          filter: grayscale(100%) brightness(2.2);
        }

        .cp-ab-train-track {
          display: flex;
          width: max-content;
          animation: cpAbTrain 38s linear infinite;
          will-change: transform;
        }

        @keyframes cpAbTrain {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        .cp-ab-train-logo {
          height: 100px;
          margin-right: 80px;
          object-fit: contain;
        }

        /* ── MAIN LAYOUT ── */
        .cp-ab-layout {
          position: relative; z-index: 5;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          align-items: center;
          gap: 90px;
          width: 100%;
        }

        /* ── VISUAL SIDE ── */
        .cp-ab-visual { position: relative; }

        .cp-ab-visual::before {
          content: '';
          position: absolute;
          top: -12px; left: -12px;
          width: 36px; height: 36px;
          border-top: 1px solid rgba(253,224,71,0.5);
          border-left: 1px solid rgba(253,224,71,0.5);
          pointer-events: none; z-index: 10;
        }

        .cp-ab-visual::after {
          content: '';
          position: absolute;
          bottom: -12px; right: -12px;
          width: 36px; height: 36px;
          border-bottom: 1px solid rgba(50,197,244,0.45);
          border-right: 1px solid rgba(50,197,244,0.45);
          pointer-events: none; z-index: 10;
        }

        .cp-ab-img {
          width: 100%;
          max-width: 480px;
          height: auto;
          display: block;
          box-shadow: 0 20px 60px rgba(0,0,0,0.9);
          transition: transform 0.6s ease;
        }
        .cp-ab-visual:hover .cp-ab-img { transform: scale(1.015); }

        .cp-ab-badge {
          position: absolute;
          top: 20px; left: -18px;
          display: flex; align-items: center; gap: 9px;
          font-family: 'Inter', sans-serif;
          font-size: 0.52rem;
          font-weight: 400;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.8);
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 8px 16px;
          z-index: 10;
          text-transform: uppercase;
          white-space: nowrap;
          transition: border-color 0.3s, color 0.3s;
          will-change: transform;
        }
        .cp-ab-visual:hover .cp-ab-badge {
          border-color: #fde047; color: #fde047;
        }

        .cp-ab-dot {
          width: 7px; height: 7px;
          background: #ff3333;
          border-radius: 50%;
          box-shadow: 0 0 8px #ff3333;
          flex-shrink: 0;
          animation: cpAbPulse 1.5s infinite;
        }
        @keyframes cpAbPulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.35; transform: scale(1.3); }
        }

        /* ── TEXT SIDE ── */
        .cp-ab-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.8rem, 9vw, 8rem);
          font-weight: 400;
          color: #fff;
          line-height: 0.92; letter-spacing: 4px;
          margin: 0 0 10px;
        }
        .cp-ab-title-yellow { color: #fde047; }

        .cp-ab-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(253,224,71,0.25), rgba(50,197,244,0.2), transparent);
          margin-bottom: 26px;
        }

        .cp-ab-lead {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.9rem, 1.4vw, 1.05rem);
          font-weight: 400;
          color: rgba(255,255,255,0.9);
          line-height: 1.75; margin: 0 0 14px;
        }
        .cp-ab-lead-cyan {
          color: #32c5f4; font-weight: 700;
          text-shadow: 0 0 18px rgba(50,197,244,0.3);
        }

        .cp-ab-philosophy {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.82rem, 1.2vw, 0.95rem);
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.9; max-width: 520px;
          margin: 0;
        }
        .cp-ab-philosophy-hl {
          color: #fff;
          font-weight: 700;
          border-bottom: 1px solid rgba(253,224,71,0.4);
        }

        .cp-ab-social-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          text-decoration: none;
          transition: border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s;
          flex: 1;
          min-width: 140px;
          position: relative;
          overflow: hidden;
        }

        .cp-ab-social-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--s-glow, transparent);
          opacity: 0;
          transition: opacity 0.35s;
          z-index: 0;
        }
        .cp-ab-social-btn:hover::before { opacity: 0.07; }

        .cp-ab-social-btn:hover {
          border-color: var(--s-color, #fff);
          transform: translateY(-3px);
          box-shadow: 0 8px 28px var(--s-glow, rgba(255,255,255,0.1));
        }

        .cp-ab-social-icon {
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          color: var(--s-color, #fff);
          position: relative; z-index: 1;
          transition: color 0.3s, filter 0.3s;
        }
        .cp-ab-social-btn:hover .cp-ab-social-icon {
          filter: drop-shadow(0 0 6px var(--s-glow, rgba(255,255,255,0.5)));
        }

        .cp-ab-social-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          position: relative; z-index: 1;
          min-width: 0;
        }

        .cp-ab-social-platform {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.88rem;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          transition: color 0.3s;
          white-space: nowrap;
        }
        .cp-ab-social-btn:hover .cp-ab-social-platform {
          color: var(--s-color, #fff);
        }

        .cp-ab-social-handle {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          font-weight: 400;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.35);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.3s;
        }
        .cp-ab-social-btn:hover .cp-ab-social-handle {
          color: rgba(255,255,255,0.75);
        }

        .cp-ab-social-btn::after {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 8px; height: 8px;
          border-top: 1px solid var(--s-color, rgba(255,255,255,0.2));
          border-left: 1px solid var(--s-color, rgba(255,255,255,0.2));
          opacity: 0.4;
          transition: opacity 0.3s;
        }
        .cp-ab-social-btn:hover::after { opacity: 1; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .cp-ab-layout {
            grid-template-columns: 1fr;
            text-align: center; gap: 55px;
          }
          .cp-ab-img      { max-width: 360px; margin: 0 auto; display: block; }
          .cp-ab-philosophy { margin: 0 auto; }
          .cp-ab-badge,
          .cp-ab-visual::before,
          .cp-ab-visual::after { display: none; }
        }

        @media (max-width: 768px) {
          .cp-ab-section  { padding: 70px 5% 80px; }
          .cp-ab-train-logo { height: 65px; margin-right: 40px; }
          .cp-ab-social-btn { min-width: 42%; padding: 12px 14px; gap: 10px; }
          .cp-ab-social-icon { width: 18px; height: 18px; }
        }

        @media (max-width: 480px) {
          .cp-ab-section  { padding: 60px 4% 70px; }
          .cp-ab-title    { font-size: clamp(3rem, 16vw, 4.5rem); }
          .cp-ab-social-btn { min-width: calc(50% - 4px); flex: none; }
        }

        @media (max-width: 360px) {
          .cp-ab-social-btn { min-width: 100%; flex: none; }
        }
      `}</style>

      <section ref={ref} className="cp-ab-section">
        <div className="cp-ab-grain" />

        {/* ── LOGO TRAIN ── */}
        <div className="cp-ab-train-wrap">
          <div className="cp-ab-train-track">
            {[...movieTrain, ...movieTrain, ...movieTrain].map((img, i) => (
              <img key={i} src={img} alt="Brand" className="cp-ab-train-logo" />
            ))}
          </div>
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div className="cp-ab-layout">

          {/* Visual */}
          <motion.div
            className="cp-ab-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={Images.abishakeRaja}
              alt="Abishek Raaja"
              className="cp-ab-img"
            />
            <div className="cp-ab-badge">
              <span className="cp-ab-dot" />
              <span>STILL SEARCHING</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="cp-ab-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* heading */}
            <h2 className="cp-ab-title">
              Abishek
              <br />
              <span className="cp-ab-title-yellow">Raaja</span>
            </h2>

            {/* rule */}
            <div className="cp-ab-rule" />

            {/* bio */}
            <p className="cp-ab-lead">
              Founder of{" "}
              <span className="cp-ab-lead-cyan">CINEMAPAYYAN PRODUCTIONS</span>.
            </p>
            <p className="cp-ab-philosophy">
              Success isn't a destination; it's a constant state of motion. Even
              now, we are{" "}
              <span className="cp-ab-philosophy-hl">
                searching for the unseen
              </span>
              . To us, every sunrise is a blank script and every day is a new
              opportunity to redefine what cinema can be.
            </p>

            {/* ── SOCIAL LINKS ── */}
            <motion.div
              className="cp-ab-socials"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
            >
              
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
});

export default About;