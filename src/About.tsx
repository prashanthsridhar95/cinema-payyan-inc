import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Images } from "./assets/assets";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const movieTrain = [
    Images.bigboss,
    Images.stone,
    Images.levelup,
    Images.startda,
    Images.logo,
    Images.madras,
  ];

  // Socials handled directly below

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

        .cp-ab-socials {
          display: flex; gap: 14px; margin-top: 22px;
        }
        .cp-ab-socials a {
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.30);
          font-size: 0.9rem; text-decoration: none;
          transition: border-color 0.3s, color 0.3s;
          position: relative; overflow: hidden;
        }
        .cp-ab-socials a::before {
          content: ''; position: absolute; inset: 0;
          background: #fde047;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.35s cubic-bezier(0.77,0,0.18,1);
        }
        .cp-ab-socials a:hover::before { transform: scaleX(1); }
        .cp-ab-socials a:hover { color: #000; border-color: #fde047; }
        .cp-ab-socials a svg { position: relative; z-index: 1; }

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
          .cp-ab-socials { justify-content: center; }
        }

        @media (max-width: 480px) {
          .cp-ab-section  { padding: 60px 4% 70px; }
          .cp-ab-title    { font-size: clamp(3rem, 16vw, 4.5rem); }
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
              <a href="https://www.instagram.com/cinemapayyan.inc/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://x.com/cinemapayyan" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@OpenPannaa" target="_blank" rel="noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
});

export default About;