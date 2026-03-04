import React from 'react';
import { Images } from "./assets/assets";
import { Rocket, Zap, ShieldCheck, Trophy, ArrowUpRight, Clapperboard } from "lucide-react";
import "./App.css";

const Accelerator = () => {
  const connections = [
    Images.Thalivar, Images.Vijay, Images.Danush, Images.Str,
    Images.Nani, Images.Prabas, Images.Lokash, Images.Vp,
    Images.Keerthi, Images.AnirutRavi, Images.Tyagaraja,
  ];
  
  // Tripled for a seamless industry legacy train
  const trainImages = [...connections, ...connections, ...connections];

  return (
    <section className="acc-universe-v4">
      {/* --- HERO SECTION: PERFECTLY CENTERED --- */}
      <div className="acc-hero-parallax" style={{ backgroundImage: `url(${Images.Bannerrr2})` }}>
        <div className="acc-hero-overlay"></div>
        
        <div className="acc-hero-content">
          <span className="acc-pre-title">ESTABLISHED INDUSTRY LINKS</span>
          <h2 className="bebas-font acc-main-title">THE <span className="gold-text">ACCELERATOR</span></h2>
        </div>

        {/* --- CONTINUOUS REDEFINE TRAIN --- */}
        <div className="acc-credo-train">
          <div className="acc-train-track">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="acc-track-item">
                <span>WE REDEFINE EVERY DAY • </span>
                <span>WE REDEFINE EVERY DAY • </span>
                <span>WE REDEFINE EVERY DAY • </span>
                <span>WE REDEFINE EVERY DAY • </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="acc-wrapper">
        <div className="acc-mission-hub">
          {/* IMAGE SIDE */}
          <div className="acc-visual-side">
            <div className="acc-portrait-container">
              <img src={Images.AbishakeWhite} alt="Abishek Raaja" className="acc-portrait-img" />
              <div className="acc-status-tag">
                <Zap size={14} fill="currentColor" />
                <span>ACTIVE CONNECT</span>
              </div>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="acc-text-side">
            <div className="acc-pill-label">
              <ShieldCheck size={14} className="gold-text" />
              <span>CINEMAPAYYAN INC • SINCE 2014</span>
            </div>
            
            <h3 className="bebas-font acc-heading">REDEFINING THE <br/><span className="cyan-text">PROMOTION</span> ENGINE</h3>
            
            <p className="acc-body">
              We don't just promote; we <strong>accelerate</strong>. We turn films into cultural movements using 10+ years of trust and experimental digital IPs.
            </p>
            
            <div className="acc-feature-stack">
              <div className="acc-feature-card highlight-card">
                <div className="acc-feature-icon cyan-bg"><Clapperboard size={20} color="#000"/></div>
                <div className="acc-feature-text">
                  <h4 className="cyan-text">End-to-End Movie Marketing</h4>
                  <p>From pre-production buzz to post-release dominance.</p>
                </div>
              </div>

              <div className="acc-feature-card">
                <div className="acc-feature-icon gold-bg"><Rocket size={20} color="#000"/></div>
                <div className="acc-feature-text">
                  <h4>Film Acceleration</h4>
                  <p>High-impact promotion cycles for Tier-1 cinema.</p>
                </div>
              </div>
            </div>

            <a href="https://www.instagram.com/cinemapayyan.inc/" target="_blank" rel="noopener noreferrer" className="acc-cta">
              EXPLORE OUR TECH <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* --- LEGACY REEL: HOVER FIXED --- */}
        <div className="acc-legacy-reel">
          <div className="acc-reel-title">
            <h4 className="bebas-font">INDUSTRY <span className="gold-text">LEGACY</span></h4>
          </div>
          
          <div className="acc-marquee-container">
            <div className="acc-marquee-track">
              {trainImages.map((img, i) => (
                <div key={i} className="acc-marquee-card">
                  <div className="acc-card-inner">
                    <img src={img} alt="Legacy Star" loading="lazy" />
                    <div className="acc-legacy-badge">
                      <Trophy size={14} className="gold-text" />
                      <span className="bebas-font">LEGACY STAR</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accelerator;