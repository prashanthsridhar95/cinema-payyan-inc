import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, VideoAssets } from "./assets/assets";

const InkbloodAndShadows: React.FC = () => {
  const comicPages = [
    Images.ComicPag0,
    Images.ComicPag1,
    Images.ComicPag2,
    Images.ComicPag3,
    Images.ComicPag4,
    Images.ComicPag5,
    Images.ComicPag6,
    Images.ComicPag7,
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const paginate = (dir: number) => {
    const next = currentPage + dir;
    if (next >= 0 && next < comicPages.length) setCurrentPage(next);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');

        /* ═══════════════════════════════════════════
           ① COMIC — Deep Sepia Ink #0e0a04
        ═══════════════════════════════════════════ */
        .ibs-comic-section {
          background: #0e0a04;
          color: #fff;
          padding: 100px 0 0;
          overflow-x: hidden;
          position: relative;
        }
        .ibs-comic-top-fade {
          position: absolute;
          top: 0; left: 0; right: 0; height: 140px;
          background: linear-gradient(to bottom, rgba(8,13,18,0.5), transparent);
          pointer-events: none; z-index: 1;
        }
        .ibs-comic-ambient {
          position: absolute;
          top: 30%; left: 50%;
          transform: translate(-50%, -50%);
          width: 70%; height: 50%;
          background: radial-gradient(ellipse at center,
            rgba(253,224,71,0.04) 0%,
            rgba(180,100,20,0.03) 40%,
            transparent 70%);
          filter: blur(80px);
          pointer-events: none; z-index: 1;
        }
        .ibs-comic-cool-accent {
          position: absolute; bottom: 0; right: 0;
          width: 380px; height: 380px;
          background: radial-gradient(circle at bottom right, rgba(50,197,244,0.045) 0%, transparent 65%);
          pointer-events: none; z-index: 1;
        }
        .ibs-comic-section::after {
          content: 'AR';
          position: absolute; right: 3%; bottom: -20px;
          font-size: 22rem; color: rgba(253,200,80,0.018);
          font-family: serif; line-height: 1;
          pointer-events: none; user-select: none; z-index: 0;
        }
        .ibs-comic-section::before {
          content: ''; position: absolute;
          top: 0; left: 8%; right: 8%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.10) 50%, transparent);
          pointer-events: none;
        }

        /* ── Comic Header ── */
        .ibs-comic-header {
          text-align: center; margin-bottom: 65px;
          position: relative; z-index: 5;
        }
        .ibs-comic-pre {
          display: inline-flex; align-items: center; gap: 12px; margin-bottom: 16px;
        }
        .ibs-comic-pre-line { width: 32px; height: 1px; background: #fde047; opacity: 0.5; }
        .ibs-comic-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600; letter-spacing: 5px;
          color: rgba(253,224,71,0.85); text-transform: uppercase;
        }
        .ibs-comic-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 9vw, 6.5rem);
          font-weight: 400; color: #fff;
          line-height: 0.95; letter-spacing: 3px; margin: 0 0 18px;
          text-shadow: 0 0 100px rgba(253,200,80,0.10);
        }
        .ibs-comic-title-cyan   { color: #32c5f4; }
        .ibs-comic-title-yellow { color: #fde047; }
        .ibs-comic-rule {
          width: 80px; height: 1px;
          background: linear-gradient(90deg, #32c5f4, #fde047);
          margin: 0 auto; opacity: 0.7;
        }

        /* ── BTS Image ── */
        .ibs-bts-wrap {
          max-width: 900px; margin: 0 auto 90px;
          padding: 0 clamp(20px, 5%, 40px);
          position: relative; z-index: 5;
        }
        .ibs-bts-container {
          position: relative;
          border: 1px solid rgba(253,224,71,0.08);
          background: #0a0702; overflow: hidden;
          transition: border-color 0.5s, box-shadow 0.5s;
        }
        .ibs-bts-container:hover {
          border-color: rgba(253,224,71,0.18);
          box-shadow: 0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(253,200,80,0.06);
        }
        .ibs-bts-badge {
          position: absolute; top: 18px; left: 18px;
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600; letter-spacing: 3px;
          color: rgba(255,255,255,0.85);
          background: rgba(14,10,4,0.82);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 7px 14px; z-index: 10; text-transform: uppercase;
          transition: border-color 0.3s, color 0.3s;
        }
        .ibs-bts-container:hover .ibs-bts-badge { border-color: #fde047; color: #fde047; }
        .ibs-bts-badge-dot {
          width: 6px; height: 6px; background: #32c5f4;
          border-radius: 50%; flex-shrink: 0;
        }
        .ibs-bts-img-wrap { width: 100%; aspect-ratio: 16/7; overflow: hidden; position: relative; }
        .ibs-bts-img {
          width: 100%; height: 100%; object-fit: cover;
          object-position: center 20%;
          filter: contrast(1.06) brightness(0.85) sepia(0.08);
          transition: transform 0.6s ease; display: block;
        }
        .ibs-bts-container:hover .ibs-bts-img { transform: scale(1.03); }
        .ibs-bts-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(circle, transparent 30%, rgba(14,10,4,0.72) 100%);
          pointer-events: none;
        }
        .ibs-bts-corner-tl, .ibs-bts-corner-br {
          position: absolute; z-index: 11; width: 22px; height: 22px; pointer-events: none;
        }
        .ibs-bts-corner-tl::before, .ibs-bts-corner-tl::after,
        .ibs-bts-corner-br::before, .ibs-bts-corner-br::after {
          content: ''; position: absolute; background: rgba(253,224,71,0.45);
        }
        .ibs-bts-corner-tl::before { width:100%; height:1px; top:0; left:0; }
        .ibs-bts-corner-tl::after  { width:1px; height:100%; top:0; left:0; }
        .ibs-bts-corner-tl { top:0; left:0; }
        .ibs-bts-corner-br::before { width:100%; height:1px; bottom:0; right:0; }
        .ibs-bts-corner-br::after  { width:1px; height:100%; bottom:0; right:0; }
        .ibs-bts-corner-br { bottom:0; right:0; }

        /* ── Comic Grid ── */
        .ibs-comic-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 65px;
          max-width: 1180px; margin: 0 auto;
          padding: 0 clamp(20px, 5%, 50px);
          align-items: center;
          position: relative; z-index: 5;
        }
        .ibs-book-wrap { max-width: 340px; margin: 0 auto; }
        .ibs-comic-sheet {
          aspect-ratio: 3/4.2;
          border: 1px solid rgba(253,224,71,0.10);
          position: relative; background: transparent;
          box-shadow: 0 20px 60px rgba(0,0,0,0.75), 0 0 30px rgba(253,200,80,0.05);
          overflow: hidden;
        }
        .ibs-comic-sheet-img { width: 100%; height: 100%; object-fit: contain; display: block; }
        .ibs-issue-tag {
          position: absolute; top: 12px; left: 12px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem; letter-spacing: 3px;
          color: #000; background: #fde047;
          padding: 4px 10px; z-index: 4; text-transform: uppercase;
        }
        .ibs-nav-bar {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 20px; padding: 13px 18px;
          background: rgba(253,224,71,0.025);
          border: 1px solid rgba(253,224,71,0.08);
        }
        .ibs-nav-btn {
          position: relative; overflow: hidden;
          padding: 8px 20px;
          border: 1px solid #32c5f4; color: #32c5f4;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600;
          letter-spacing: 3px; text-transform: uppercase;
          cursor: pointer; transition: color 0.35s;
        }
        .ibs-nav-btn::before {
          content: ''; position: absolute; inset: 0;
          background: #32c5f4;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.35s cubic-bezier(0.77,0,0.18,1);
        }
        .ibs-nav-btn:hover:not(:disabled)::before { transform: scaleX(1); }
        .ibs-nav-btn:hover:not(:disabled) { color: #000; }
        .ibs-nav-btn span { position: relative; z-index: 1; }
        .ibs-nav-btn:disabled { opacity: 0.22; cursor: not-allowed; }
        .ibs-dots-row { display: flex; gap: 8px; align-items: center; }
        .ibs-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(255,255,255,0.12);
          transition: background 0.3s, width 0.3s, border-radius 0.3s;
        }
        .ibs-dot.active { background: #fde047; width: 18px; border-radius: 3px; }

        /* ── Vision Card ── */
        .ibs-vision-card {
          padding: 42px;
          background: rgba(253,224,71,0.02);
          border: 1px solid rgba(253,224,71,0.08);
          border-left: 2px solid rgba(253,224,71,0.30);
          position: relative; overflow: hidden;
          transition: border-color 0.4s, box-shadow 0.4s;
        }
        .ibs-vision-card:hover {
          border-color: rgba(253,224,71,0.20);
          box-shadow: 0 20px 60px rgba(0,0,0,0.55), 0 0 30px rgba(253,200,80,0.05);
        }
        .ibs-vision-card::before {
          content: 'CP';
          position: absolute; right: -10px; bottom: -30px;
          font-size: 14rem; color: rgba(253,200,80,0.022);
          font-family: serif; line-height: 1;
          pointer-events: none; user-select: none;
        }
        .ibs-vision-pre { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
        .ibs-vision-pre-line { width: 28px; height: 1px; background: #fde047; opacity: 0.5; }
        .ibs-vision-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600; letter-spacing: 5px;
          color: rgba(253,224,71,0.85); text-transform: uppercase;
        }
        .ibs-vision-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 4.5vw, 4.2rem);
          font-weight: 400; color: #fde047;
          margin: 0 0 14px; letter-spacing: 3px; line-height: 1;
        }
        .ibs-vision-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(253,224,71,0.25), rgba(50,197,244,0.2), transparent);
          margin-bottom: 24px;
        }
        .ibs-vision-lead {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.9rem, 1.3vw, 1rem); font-weight: 400;
          color: rgba(255,255,255,0.85); line-height: 1.75; margin-bottom: 18px;
        }
        .ibs-vision-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.8rem, 1.1vw, 0.875rem); font-weight: 300;
          color: rgba(255,255,255,0.40); line-height: 1.85; margin-bottom: 28px;
        }
        .ibs-vision-body strong { color: rgba(253,224,71,0.8); font-weight: 600; }
        .ibs-vision-cta {
          position: relative; overflow: hidden;
          display: block; width: 100%; padding: 15px;
          border: 1px solid #fde047; color: #fde047;
          text-decoration: none; text-align: center;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 4px; text-transform: uppercase;
          transition: color 0.4s;
        }
        .ibs-vision-cta::before {
          content: ''; position: absolute; inset: 0;
          background: #fde047;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .ibs-vision-cta:hover::before { transform: scaleX(1); }
        .ibs-vision-cta:hover { color: #000; }
        .ibs-vision-cta span { position: relative; z-index: 1; }

        /* ── Reel Footer ── */
        .ibs-reel-footer {
          text-align: center; padding-top: 100px;
          position: relative; z-index: 5;
        }
        .ibs-reel-footer::before {
          content: ''; position: absolute;
          top: 40px; left: 8%; right: 8%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.08) 50%, transparent);
          pointer-events: none;
        }
        .ibs-reel-pre { display: inline-flex; align-items: center; gap: 12px; margin-bottom: 14px; }
        .ibs-reel-pre-line { width: 32px; height: 1px; background: #fde047; opacity: 0.5; }
        .ibs-reel-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600; letter-spacing: 5px;
          color: rgba(253,224,71,0.85); text-transform: uppercase;
        }
        .ibs-reel-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 400; color: #fde047; margin: 0 0 48px; letter-spacing: 4px;
        }
        .ibs-reel-title span { color: #fff; }
        .ibs-reel-layout { display: flex; align-items: center; justify-content: center; }
        .ibs-reel-side {
          flex: 1; height: 390px;
          border-top: 1px solid rgba(253,224,71,0.04);
          border-bottom: 1px solid rgba(253,224,71,0.04);
        }
        .ibs-reel-side--left  { background: linear-gradient(to right, #0e0a04, transparent); }
        .ibs-reel-side--right { background: linear-gradient(to left,  #0e0a04, transparent); }
        .ibs-video-frame {
          width: 270px; aspect-ratio: 9/16;
          position: relative;
          border: 1px solid rgba(253,224,71,0.10); z-index: 10;
          background: #090601;
          box-shadow: 0 0 60px rgba(0,0,0,1), 0 0 30px rgba(253,200,80,0.06);
          flex-shrink: 0; overflow: hidden;
          transition: border-color 0.4s, box-shadow 0.4s;
        }
        .ibs-video-frame:hover {
          border-color: rgba(253,224,71,0.25);
          box-shadow: 0 0 60px rgba(0,0,0,1), 0 0 40px rgba(253,224,71,0.10);
        }
        .ibs-video-corner-tl, .ibs-video-corner-br {
          position: absolute; z-index: 5; width: 12px; height: 12px; pointer-events: none;
        }
        .ibs-video-corner-tl::before, .ibs-video-corner-tl::after,
        .ibs-video-corner-br::before, .ibs-video-corner-br::after {
          content: ''; position: absolute; background: rgba(253,224,71,0.4);
        }
        .ibs-video-corner-tl::before { width:100%; height:1px; top:0; left:0; }
        .ibs-video-corner-tl::after  { width:1px; height:100%; top:0; left:0; }
        .ibs-video-corner-tl { top:8px; left:8px; }
        .ibs-video-corner-br::before { width:100%; height:1px; bottom:0; right:0; }
        .ibs-video-corner-br::after  { width:1px; height:100%; bottom:0; right:0; }
        .ibs-video-corner-br { bottom:8px; right:8px; }
        .ibs-video-el { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ibs-video-inner-vignette {
          position: absolute; inset: 0;
          box-shadow: inset 0 0 35px rgba(0,0,0,0.9); pointer-events: none;
        }
        .ibs-video-tag {
          position: absolute; bottom: -1px; left: 50%;
          transform: translateX(-50%);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.8rem; letter-spacing: 3px;
          color: #000; background: #32c5f4;
          padding: 5px 20px; white-space: nowrap;
          text-transform: uppercase; z-index: 6;
        }

        /* ═══════════════════════════════════════════
           ② BRIDGE — sepia → graphite-violet
        ═══════════════════════════════════════════ */
        .ibs-bridge {
          position: relative;
          background: linear-gradient(to bottom, #0e0a04 0%, #0a0a0e 100%);
          padding: 60px clamp(20px, 6%, 60px) 70px;
          overflow: hidden;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
        }
        .ibs-bridge-line {
          width: 100%; max-width: 1180px; height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(140,80,255,0.15) 20%,
            rgba(253,224,71,0.30) 50%,
            rgba(50,197,244,0.15) 80%,
            transparent 100%);
        }
        .ibs-bridge-core {
          display: flex; align-items: center;
          gap: clamp(16px, 4vw, 40px);
          padding: 28px 0; width: 100%;
          max-width: 1180px; justify-content: center;
        }
        .ibs-bridge-dash {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(253,224,71,0.12));
        }
        .ibs-bridge-dash--right {
          background: linear-gradient(90deg, rgba(253,224,71,0.12), transparent);
        }
        .ibs-bridge-label { text-align: center; flex-shrink: 0; }
        .ibs-bridge-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.55rem; font-weight: 600; letter-spacing: 6px;
          color: rgba(253,224,71,0.5); text-transform: uppercase;
          display: block; margin-bottom: 6px;
        }
        .ibs-bridge-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 5vw, 3.8rem);
          letter-spacing: 6px; line-height: 1; color: #fff;
          text-shadow: 0 0 60px rgba(140,80,255,0.18), 0 0 120px rgba(253,200,80,0.08);
        }
        .ibs-bridge-name-accent { color: #fde047; }
        .ibs-bridge-name-cyan   { color: #32c5f4; }
        .ibs-bridge-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 400; letter-spacing: 4px;
          color: rgba(255,255,255,0.22); text-transform: uppercase;
          display: block; margin-top: 8px;
        }
        .ibs-bridge-orb-l {
          position: absolute; left: 0; top: 50%; transform: translateY(-50%);
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(140,80,255,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .ibs-bridge-orb-r {
          position: absolute; right: 0; top: 50%; transform: translateY(-50%);
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(253,200,80,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ═══════════════════════════════════════════
           ③ SHADOW PROMOTION — Graphite-Violet #0a0a0e
        ═══════════════════════════════════════════ */
        .ibs-sh-section {
          background: #0a0a0e;
          padding: 90px clamp(20px, 6%, 60px) 110px;
          overflow: hidden; position: relative;
        }
        .ibs-sh-glow-tr {
          position: absolute; top: -80px; right: -80px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(140,80,255,0.06) 0%, transparent 60%);
          pointer-events: none; z-index: 0;
        }
        .ibs-sh-glow-bl {
          position: absolute; bottom: -60px; left: -60px;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(50,197,244,0.05) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }
        .ibs-sh-section::after {
          content: 'CP';
          position: absolute; right: 3%; bottom: 40px;
          font-size: clamp(8rem, 18vw, 22rem);
          color: rgba(140,80,255,0.022);
          font-family: serif; line-height: 1;
          pointer-events: none; user-select: none; z-index: 0;
        }
        .ibs-sh-section::before {
          content: ''; position: absolute;
          top: 0; left: 8%; right: 8%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(140,80,255,0.12) 50%, transparent);
          pointer-events: none;
        }
        .ibs-sh-inner {
          max-width: 1180px; margin: 0 auto;
          display: flex; align-items: center; gap: 65px;
          position: relative; z-index: 5;
        }
        .ibs-sh-left { flex: 1; }
        .ibs-sh-pre { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .ibs-sh-pre-line { width: 32px; height: 1px; background: #fde047; opacity: 0.5; }
        .ibs-sh-pre-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600; letter-spacing: 5px;
          color: rgba(253,224,71,0.85); text-transform: uppercase;
        }
        .ibs-sh-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6.5vw, 5.5rem);
          font-weight: 400; color: #fff;
          line-height: 0.95; letter-spacing: 3px; margin: 0 0 10px;
          text-shadow: 0 0 80px rgba(140,80,255,0.12);
        }
        .ibs-sh-title-cyan { color: #32c5f4; }
        .ibs-sh-rule {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, rgba(253,224,71,0.25), rgba(140,80,255,0.20), rgba(50,197,244,0.15), transparent);
          margin-bottom: 28px;
        }
        .ibs-sh-story {
          background: rgba(140,80,255,0.025);
          border: 1px solid rgba(140,80,255,0.10);
          border-left: 1px solid rgba(50,197,244,0.22);
          padding: 28px; position: relative; overflow: hidden;
          transition: border-color 0.4s, box-shadow 0.4s;
        }
        .ibs-sh-story:hover {
          border-color: rgba(140,80,255,0.18);
          box-shadow: 0 12px 40px rgba(0,0,0,0.6), 0 0 20px rgba(140,80,255,0.05);
        }
        .ibs-sh-story::before {
          content: ''; position: absolute; top: 0; left: 0;
          width: 16px; height: 16px;
          border-top: 1px solid rgba(253,224,71,0.4);
          border-left: 1px solid rgba(253,224,71,0.4);
          pointer-events: none;
        }
        .ibs-sh-story::after {
          content: ''; position: absolute; bottom: 0; right: 0;
          width: 16px; height: 16px;
          border-bottom: 1px solid rgba(253,224,71,0.4);
          border-right: 1px solid rgba(253,224,71,0.4);
          pointer-events: none;
        }
        .ibs-sh-quote {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.95rem, 1.4vw, 1.1rem);
          font-style: italic; font-weight: 500;
          color: #fde047; line-height: 1.6; margin: 0 0 20px;
        }
        .ibs-sh-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.8rem, 1.2vw, 0.9rem); font-weight: 300;
          color: rgba(255,255,255,0.42); line-height: 1.85; margin: 0 0 14px;
        }
        .ibs-sh-body strong { color: rgba(255,255,255,0.85); font-weight: 600; }
        .ibs-sh-body em     { color: rgba(50,197,244,0.75); font-style: italic; }
        .ibs-sh-cta {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; gap: 10px;
          margin-top: 24px; padding: 13px 28px;
          border: 1px solid #fde047; color: #fde047;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 4px; text-transform: uppercase;
          transition: color 0.4s;
        }
        .ibs-sh-cta::before {
          content: ''; position: absolute; inset: 0;
          background: #fde047;
          transform: scaleX(0); transform-origin: left; z-index: 0;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .ibs-sh-cta:hover::before { transform: scaleX(1); }
        .ibs-sh-cta:hover { color: #000; }
        .ibs-sh-cta span { position: relative; z-index: 1; }
        .ibs-sh-right { flex: 1.2; }
        .ibs-sh-video-card {
          display: block; width: 100%; aspect-ratio: 16/9;
          overflow: hidden; position: relative;
          border: 1px solid rgba(140,80,255,0.10);
          background: #07070b;
          transition: border-color 0.4s, box-shadow 0.4s;
          text-decoration: none;
        }
        .ibs-sh-video-card:hover {
          border-color: rgba(50,197,244,0.22);
          box-shadow: 0 14px 50px rgba(0,0,0,0.75), 0 0 30px rgba(140,80,255,0.07);
        }
        .ibs-sh-video-card::before {
          content: ''; position: absolute; top: 8px; left: 8px;
          width: 12px; height: 12px;
          border-top: 1px solid rgba(253,224,71,0.4);
          border-left: 1px solid rgba(253,224,71,0.4);
          z-index: 5; pointer-events: none;
        }
        .ibs-sh-video-card::after {
          content: ''; position: absolute; bottom: 8px; right: 8px;
          width: 12px; height: 12px;
          border-bottom: 1px solid rgba(253,224,71,0.4);
          border-right: 1px solid rgba(253,224,71,0.4);
          z-index: 5; pointer-events: none;
        }
        .ibs-sh-vid {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.55s cubic-bezier(0.16,1,0.3,1);
        }
        .ibs-sh-video-card:hover .ibs-sh-vid { transform: scale(1.04); }
        .ibs-sh-vid-grad {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(10,10,14,0.55) 100%);
          z-index: 2; pointer-events: none;
        }
        .ibs-sh-vid-tag {
          position: absolute; top: 10px; right: 10px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.8rem; letter-spacing: 3px;
          color: #000; background: #32c5f4;
          padding: 3px 8px; z-index: 6; text-transform: uppercase;
        }
        .ibs-sh-vid-overlay {
          position: absolute; inset: 0;
          background: rgba(10,10,14,0.75);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; z-index: 10; backdrop-filter: blur(4px);
          transition: opacity 0.3s;
        }
        .ibs-sh-video-card:hover .ibs-sh-vid-overlay { opacity: 1; }
        .ibs-sh-vid-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem; font-weight: 600; letter-spacing: 4px;
          color: #000; background: #fde047;
          padding: 8px 20px; text-transform: uppercase;
          transform: translateY(6px); transition: transform 0.3s;
        }
        .ibs-sh-video-card:hover .ibs-sh-vid-label { transform: translateY(0); }
        .ibs-sh-scan {
          position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #32c5f4, #fde047);
          transform: scaleX(0); transform-origin: left; z-index: 6;
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .ibs-sh-video-card:hover .ibs-sh-scan { transform: scaleX(1); }

        /* ═══════════════════════════════════════════
           RESPONSIVE
        ═══════════════════════════════════════════ */
        @media (max-width: 960px) {
          .ibs-comic-grid  { grid-template-columns: 1fr; gap: 40px; }
          .ibs-book-wrap   { max-width: 300px; }
          .ibs-vision-card { padding: 30px 24px; }
        }
        @media (max-width: 992px) {
          .ibs-sh-inner { flex-direction: column; text-align: center; gap: 42px; }
          .ibs-sh-pre   { justify-content: center; }
          .ibs-sh-rule  { margin: 0 auto 28px; width: 60%; }
          .ibs-sh-cta   { margin: 24px auto 0; }
          .ibs-sh-right { width: 100%; }
        }
        @media (max-width: 600px) {
          .ibs-comic-section  { padding: 70px 0 0; }
          .ibs-reel-side      { display: none; }
          .ibs-bts-img-wrap   { aspect-ratio: 16/9; }
          .ibs-video-frame    { width: 220px; }
          .ibs-vision-card    { padding: 24px 18px; }
          .ibs-vision-card::before { display: none; }
          .ibs-bts-badge      { top: auto; bottom: 18px; left: 18px; }
          .ibs-sh-section     { padding: 70px clamp(16px,5%,32px) 80px; }
          .ibs-sh-story       { padding: 20px 16px; }
          .ibs-bridge         { padding: 44px clamp(16px,5%,32px) 50px; }
          .ibs-bridge-name    { font-size: clamp(1.6rem, 8vw, 2.6rem); letter-spacing: 3px; }
          .ibs-bridge-dash    { display: none; }
        }
      `}</style>

      {/* ══════════════════════════════════════════
          ① COMIC
      ══════════════════════════════════════════ */}
      <section className="ibs-comic-section">
        <div className="ibs-comic-top-fade" />
        <div className="ibs-comic-ambient" />
        <div className="ibs-comic-cool-accent" />

        {/* Header */}
        <header className="ibs-comic-header">
          <div className="ibs-comic-pre">
            <div className="ibs-comic-pre-line" />
            <span className="ibs-comic-pre-text">CINEMAPAYYAN ORIGINALS</span>
            <div className="ibs-comic-pre-line" />
          </div>
          <motion.h1
            className="ibs-comic-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            RETRO <span className="ibs-comic-title-cyan">BTS</span>{" "}
            <span className="ibs-comic-title-yellow">COMIC</span>
          </motion.h1>
          <div className="ibs-comic-rule" />
        </header>

        {/* BTS Image */}
        <div className="ibs-bts-wrap">
          <div className="ibs-bts-container">
            <div className="ibs-bts-badge">
              <div className="ibs-bts-badge-dot" />
              <span>BEHIND THE SCENES</span>
            </div>
            <div className="ibs-bts-img-wrap">
              <img src={Images.ComicCOverimg} alt="BTS" className="ibs-bts-img" />
              <div className="ibs-bts-vignette" />
            </div>
            <div className="ibs-bts-corner-tl" />
            <div className="ibs-bts-corner-br" />
          </div>
        </div>

        {/* Comic Grid */}
        <div className="ibs-comic-grid">
          <div className="ibs-book-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="ibs-comic-sheet"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <img src={comicPages[currentPage]} alt="Comic Page" className="ibs-comic-sheet-img" />
                <div className="ibs-issue-tag">ISSUE.{currentPage + 1}</div>
              </motion.div>
            </AnimatePresence>
            <div className="ibs-nav-bar">
              <button className="ibs-nav-btn" onClick={() => paginate(-1)} disabled={currentPage === 0}>
                <span>PREV</span>
              </button>
              <div className="ibs-dots-row">
                {comicPages.map((_, i) => (
                  <span key={i} className={`ibs-dot ${i === currentPage ? "active" : ""}`} />
                ))}
              </div>
              <button className="ibs-nav-btn" onClick={() => paginate(1)} disabled={currentPage === comicPages.length - 1}>
                <span>NEXT</span>
              </button>
            </div>
          </div>

          <aside className="ibs-vision-card">
            <div className="ibs-vision-pre">
              <div className="ibs-vision-pre-line" />
              <span className="ibs-vision-pre-text">CREATIVE VISION</span>
            </div>
            <h2 className="ibs-vision-title">THE VISION</h2>
            <div className="ibs-vision-rule" />
            <p className="ibs-vision-lead">
              Where the raw grit of cinema meets the electric pulse of ink — a
              tribute to the golden era of visual storytelling, reimagined panel by panel.
            </p>
            <p className="ibs-vision-body">
              Conceived and crafted by the creative force of{" "}
              <strong>Abishake Raja</strong>, every frame is a statement — bold
              lines, deeper meaning. The <strong>Cinema Payyan</strong>{" "}
              collective doesn't just make films; they leave marks. This is not
              a behind-the-scenes — it's a front-row seat to obsession.
            </p>
            <a
              href="https://www.instagram.com/cinemapayyan.inc/"
              target="_blank" rel="noreferrer"
              className="ibs-vision-cta"
            >
              <span>VIEW FULL ARCHIVE</span>
            </a>
          </aside>
        </div>

        {/* Reel Footer */}
        <footer className="ibs-reel-footer">
          <div className="ibs-reel-pre">
            <div className="ibs-reel-pre-line" />
            <span className="ibs-reel-pre-text">VISUAL CHRONICLE</span>
            <div className="ibs-reel-pre-line" />
          </div>
          <h3 className="ibs-reel-title"><span>EPISODE </span>PREVIEW</h3>
          <div className="ibs-reel-layout">
            <div className="ibs-reel-side ibs-reel-side--left" />
            <div className="ibs-video-frame">
              <video className="ibs-video-el" autoPlay muted loop playsInline>
                <source src={VideoAssets.vjPreviews[22]} type="video/mp4" />
              </video>
              <div className="ibs-video-inner-vignette" />
              <div className="ibs-video-corner-tl" />
              <div className="ibs-video-corner-br" />
              <div className="ibs-video-tag">COMIC_REEL</div>
            </div>
            <div className="ibs-reel-side ibs-reel-side--right" />
          </div>
        </footer>
      </section>

      {/* ══════════════════════════════════════════
          ② BRIDGE — INKBLOOD & SHADOWS
      ══════════════════════════════════════════ */}
      <div className="ibs-bridge">
        <div className="ibs-bridge-orb-l" />
        <div className="ibs-bridge-orb-r" />
        <div className="ibs-bridge-line" />
        <div className="ibs-bridge-core">
          <div className="ibs-bridge-dash" />
          <div className="ibs-bridge-label">
            <span className="ibs-bridge-eyebrow">CinemaPayyan Universe</span>
            <div className="ibs-bridge-name">
              INK<span className="ibs-bridge-name-accent">BLOOD</span>{' '}
              &amp;{' '}
              <span className="ibs-bridge-name-cyan">SHADOWS</span>
            </div>
            <span className="ibs-bridge-sub">From the Silver Screen · Into the Panel · Onto the Wall</span>
          </div>
          <div className="ibs-bridge-dash ibs-bridge-dash--right" />
        </div>
        <div className="ibs-bridge-line" />
      </div>

      {/* ══════════════════════════════════════════
          ③ SHADOW PROMOTION
      ══════════════════════════════════════════ */}
      <section className="ibs-sh-section">
        <div className="ibs-sh-glow-tr" />
        <div className="ibs-sh-glow-bl" />
        <div className="ibs-sh-inner">
          <div className="ibs-sh-left">
            <div className="ibs-sh-pre">
              <div className="ibs-sh-pre-line" />
              <span className="ibs-sh-pre-text">CINEMAPAYYAN ORIGINALS</span>
            </div>
            <motion.h2
              className="ibs-sh-title"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
            >
              SHADOW <span className="ibs-sh-title-cyan">PROMOTION</span>
            </motion.h2>
            <div className="ibs-sh-rule" />
            <div className="ibs-sh-story">
              <p className="ibs-sh-quote">
                "When light bends, legends are born — and Sathyam felt every shadow."
              </p>
              <p className="ibs-sh-body">
  <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '8px', color: '#fff' }}>
    We don’t just promote stories; we live the impact.
  </strong>
  For <strong>Sivakarthikeyan’s</strong> <em>Maaveeran</em>, we transformed <strong>Sathyam Cinemas</strong> into a visceral battlefield of shadow and light. By blurring the lines between the screen and the streets, we ensured this warrior’s journey wasn't just seen—it was <strong>felt.</strong>
</p>
              <p className="ibs-sh-body">
                Directed by <strong>Madonne Ashwin</strong> · Celebrating <em>#VeerameJeyam</em> ·
                Ideation &amp; execution by <strong>CinemaPayyan Inc</strong> — where every frame
                has a heartbeat.
              </p>
              <a
                href="https://www.instagram.com/reel/CuoYbZqghwl/"
                target="_blank" rel="noreferrer"
                className="ibs-sh-cta"
              >
                <span>WATCH FULL VIDEO 🔥</span>
              </a>
            </div>
          </div>
          <div className="ibs-sh-right">
            <a
              href="https://www.instagram.com/reel/CuoYbZqghwl/"
              target="_blank" rel="noreferrer"
              className="ibs-sh-video-card"
            >
              <video autoPlay muted loop playsInline className="ibs-sh-vid">
                <source src={VideoAssets.vjPreviews[33]} type="video/mp4" />
              </video>
              <div className="ibs-sh-vid-grad" />
              <div className="ibs-sh-vid-tag">REEL</div>
              <div className="ibs-sh-vid-overlay">
                <span className="ibs-sh-vid-label">WATCH NOW</span>
              </div>
              <div className="ibs-sh-scan" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default InkbloodAndShadows;