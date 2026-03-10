import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onScrollRequest: (ref: React.RefObject<HTMLDivElement | null>) => void;
  refs: {
    homeRef:    React.RefObject<HTMLDivElement | null>;
    aboutRef:   React.RefObject<HTMLDivElement | null>;
    workRef:    React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
  };
  isMenuOpen:    boolean;
  setIsMenuOpen: (open: boolean) => void;
}

function Header({ onScrollRequest, refs, isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const [active,     setActive]     = useState('HOME');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) setActive(id.toUpperCase());
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    const allRefs = [refs.homeRef, refs.aboutRef, refs.workRef, refs.contactRef];
    allRefs.forEach((r) => { if (r.current) observer.observe(r.current); });

    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      allRefs.forEach((r) => { if (r.current) observer.unobserve(r.current); });
    };
  }, [refs]);

  const navItems = [
    { label: 'HOME',    ref: refs.homeRef    },
    { label: 'ABOUT',   ref: refs.aboutRef   },
    { label: 'WORK',    ref: refs.workRef    },
    { label: 'CONTACT', ref: refs.contactRef },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

        /* ═══════════════════════════════════════════
           DESKTOP HEADER
           Glass bar floats over every section.
           Resting: warm-tinted near-black glass
           Scrolled: deep #0a0800 amber-black solid
                     — matches BookingContact/Footer
                       end-of-site warmth
        ═══════════════════════════════════════════ */
        .cp-hd-fixed {
          position: fixed;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: auto;
          z-index: 10000;
          padding-top: 20px;
          transition: padding-top 0.5s cubic-bezier(0.19,1,0.22,1);
        }
        .cp-hd-fixed.scrolled { padding-top: 8px; }

        /* resting — warm amber tint glass, not cold blue */
        .cp-hd-bar {
          background: rgba(8, 5, 0, 0.38);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(253,224,71,0.06);
          box-shadow:
            0 8px 32px rgba(0,0,0,0.45),
            0 1px 0 rgba(253,224,71,0.04) inset;
          display: flex;
          transition: background 0.5s, border-color 0.5s, box-shadow 0.5s;
        }

        /* scrolled — deep amber-black solid, matches site finale */
        .cp-hd-fixed.scrolled .cp-hd-bar {
          background: rgba(10, 8, 0, 0.96);
          border-color: rgba(253,224,71,0.16);
          box-shadow:
            0 4px 30px rgba(0,0,0,0.6),
            0 0 20px rgba(253,224,71,0.04);
        }

        /* ── NAV ITEM ──────────────────────────── */
        .cp-hd-item {
          position: relative;
          padding: 14px 30px;
          cursor: pointer;
          overflow: hidden;
          display: flex; align-items: center;
          transition: background 0.3s;
        }

        /* hover sweep — warm amber tint */
        .cp-hd-fill {
          position: absolute; inset: 0;
          background: rgba(253,224,71,0.055);
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.35s cubic-bezier(0.77,0,0.18,1);
          pointer-events: none;
        }
        .cp-hd-item:hover .cp-hd-fill { transform: scaleX(1); }

        .cp-hd-label {
          position: relative; z-index: 5;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.80);
          text-transform: uppercase;
          transition: color 0.3s, letter-spacing 0.3s;
          white-space: nowrap;
        }
        .cp-hd-item:hover .cp-hd-label {
          color: #fde047;
          letter-spacing: 5px;
        }
        .cp-hd-item.active .cp-hd-label { color: #fde047; }

        /* active underline — gold */
        .cp-hd-active-bar {
          position: absolute;
          bottom: 0; left: 15%;
          width: 70%; height: 1px;
          background: #fde047;
          z-index: 10;
        }

        /* separator between items */
        .cp-hd-sep {
          width: 1px;
          background: rgba(253,224,71,0.06);
          align-self: stretch;
          flex-shrink: 0;
        }

        /* ═══════════════════════════════════════════
           MOBILE OVERLAY
           Deep amber-black — #080500 — not pure black.
           Matches the warm dark end of the site.
        ═══════════════════════════════════════════ */
        .cp-hd-overlay {
          position: fixed; inset: 0;
          background: rgba(8, 5, 0, 0.98);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(20px);
        }

        /* kanji watermark — warm amber tint */
        .cp-hd-overlay::before {
          content: '映';
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          font-size: 40rem; font-family: serif;
          color: rgba(253,180,30,0.025);
          pointer-events: none; user-select: none;
          line-height: 1;
        }

        /* top rule — gold gradient */
        .cp-hd-overlay::after {
          content: '';
          position: absolute;
          top: 0; left: 8%; right: 8%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.22), transparent);
          pointer-events: none;
        }

        /* ambient warm glow — centre of overlay */
        .cp-hd-overlay-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(253,180,30,0.04) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        .cp-hd-mobile-nav {
          display: flex; flex-direction: column;
          align-items: center; gap: 0;
          position: relative; z-index: 5;
          width: 100%; padding: 0 8%;
        }

        .cp-hd-mobile-item {
          width: 100%; max-width: 480px;
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 22px 0;
          /* separator — warm amber instead of cold white */
          border-bottom: 1px solid rgba(253,224,71,0.06);
          cursor: pointer;
          position: relative; overflow: hidden;
        }

        .cp-hd-mobile-num {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 3px;
          color: rgba(253,200,71,0.65);
        }

        .cp-hd-mobile-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 8vw, 5rem);
          font-weight: 400;
          color: rgba(255,255,255,0.82);
          letter-spacing: 3px; line-height: 1;
          transition: color 0.3s, letter-spacing 0.3s;
          position: relative; z-index: 2;
        }
        .cp-hd-mobile-item:hover .cp-hd-mobile-label,
        .cp-hd-mobile-item.active .cp-hd-mobile-label {
          color: #fde047;
          letter-spacing: 4px;
        }

        .cp-hd-mobile-arrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem; font-weight: 500;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.40);
          transition: color 0.3s, transform 0.3s;
        }
        .cp-hd-mobile-item:hover .cp-hd-mobile-arrow,
        .cp-hd-mobile-item.active .cp-hd-mobile-arrow {
          color: rgba(50,197,244,0.55);
          transform: translateX(6px);
        }

        /* hover fill — warm amber sweep */
        .cp-hd-mobile-fill {
          position: absolute; inset: 0;
          background: rgba(253,224,71,0.028);
          transform: scaleX(0); transform-origin: left; z-index: 1;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
          pointer-events: none;
        }
        .cp-hd-mobile-item:hover .cp-hd-mobile-fill { transform: scaleX(1); }

        /* active left bar — gold */
        .cp-hd-mobile-active-bar {
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 2px; background: #fde047; z-index: 5;
        }

        /* bottom tag */
        .cp-hd-mobile-bottom {
          margin-top: 32px;
          display: flex; align-items: center; gap: 12px;
          max-width: 480px; width: 100%;
        }
        .cp-hd-mobile-bottom-line {
          flex: 1; height: 1px;
          background: rgba(253,224,71,0.07);
        }
        .cp-hd-mobile-bottom-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 4px;
          color: rgba(253,200,71,0.50);
          text-transform: uppercase;
        }

        /* ─── RESPONSIVE ────────────────────────── */
        @media (max-width: 1024px) {
          .cp-hd-fixed { display: none; }
        }
        @media (max-width: 768px) {
          html, body { overflow-x: hidden; width: 100%; }
        }
      `}</style>

      {/* ── DESKTOP HEADER ──────────────────────── */}
      <div className={`cp-hd-fixed ${isScrolled ? 'scrolled' : ''}`}>
        <header className="cp-hd-bar">
          {navItems.map((item, i) => (
            <React.Fragment key={item.label}>
              {i > 0 && <div className="cp-hd-sep" />}
              <motion.div
                className={`cp-hd-item ${active === item.label ? 'active' : ''}`}
                onClick={() => { onScrollRequest(item.ref); setActive(item.label); }}
                whileHover="hover"
                initial="rest"
              >
                <div className="cp-hd-fill" />
                <span className="cp-hd-label">{item.label}</span>

                {active === item.label && (
                  <motion.div
                    layoutId="cp-active-line"
                    className="cp-hd-active-bar"
                    transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                  />
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </header>
      </div>

      {/* ── MOBILE OVERLAY ──────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="cp-hd-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="cp-hd-overlay-glow" />

            <div className="cp-hd-mobile-nav">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className={`cp-hd-mobile-item ${active === item.label ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, type: 'spring', stiffness: 100 }}
                  onClick={() => { onScrollRequest(item.ref); setIsMenuOpen(false); }}
                >
                  <div className="cp-hd-mobile-fill" />
                  {active === item.label && <div className="cp-hd-mobile-active-bar" />}

                  <span className="cp-hd-mobile-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="cp-hd-mobile-label">{item.label}</span>

                  <span className="cp-hd-mobile-arrow">→</span>
                </motion.div>
              ))}

              <div className="cp-hd-mobile-bottom">
                <div className="cp-hd-mobile-bottom-line" />
                <span className="cp-hd-mobile-bottom-text">CINEMAPAYYAN INC</span>
                <div className="cp-hd-mobile-bottom-line" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;