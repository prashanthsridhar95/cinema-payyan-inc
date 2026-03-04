import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css'; 
import { Images } from './assets/assets';

const Munai: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { img: Images.Munai1, title: "THE ARCHITECTS", desc: "A CINEMAPAYYAN PRODUCT", bg: "#1a2421" }, // Deep Forest Green
    { img: Images.Munai2, title: "NARRATIVE DEPTH", desc: "A CINEMAPAYYAN PRODUCT", bg: "#1e221a" }, // Olive Drab
    { img: Images.Munai3, title: "THE SCRIPT LAB", desc: "A CINEMAPAYYAN PRODUCT", bg: "#141d1d" }, // Dark Slate/Cyan-Green
    { img: Images.Munai4, title: "ARC CRAFTING", desc: "A CINEMAPAYYAN PRODUCT", bg: "#24241a" }, // Muted Moss
    { img: Images.Munai5, title: "VISIONARY FLOW", desc: "A CINEMAPAYYAN PRODUCT", bg: "#1a1c24" }, // Deep Midnight Blue-Green
    { img: Images.Munai6, title: "DIALOGUE DESIGN", desc: "A CINEMAPAYYAN PRODUCT", bg: "#1a241e" }, // Hunter Green
    { img: Images.Munai7, title: "STORY PULSE", desc: "A CINEMAPAYYAN PRODUCT", bg: "#161a19" }, // Dark Emerald Tint
    { img: Images.Munai8, title: "MUNAI CORE", desc: "A CINEMAPAYYAN PRODUCT", bg: "#22241a" }, // Earthy Olive
    { img: Images.Munai9, title: "FINAL EDITION", desc: "A CINEMAPAYYAN PRODUCT", bg: "#1a2421" }, // Deep Sage
  ];

  return (
    <div className="gazette-wrapper">
      {/* ADD YOUR LINK HERE */}
      <a href="https://woolen-sodalite-e73.notion.site/16909085b6758040a618e11e9b9dabef" className={`gazette-cta ${scrolled ? 'show' : ''}`}>
        MUNAI — FOCUS GROUP SUBMISSION
      </a>

      <header className="gazette-header">
        <h1 className="gazette-logo">MUNAI</h1>
        <div className="gazette-meta">BY CINEMAPAYYAN • THE WRITERS' ROOM</div>
      </header>

      <main className="gazette-body">
        {sections.map((item, i) => (
          <section 
            key={i} 
            className={`gazette-section ${i % 2 === 0 ? 'row' : 'row-reverse'}`}
            style={{ backgroundColor: item.bg }}
          >
            <motion.div 
              className="gazette-text-block"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="gazette-title">{item.title}</h2>
              <div className="gazette-divider" />
              <p className="gazette-desc">{item.desc}</p>
            </motion.div>

            <motion.div 
              className="gazette-image-block"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img src={item.img} alt={item.title} className="full-view-img" />
            </motion.div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Munai;