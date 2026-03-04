import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, VideoAssets } from "./assets/assets"; 
import './App.css';

const Comic: React.FC = () => {
    const comicPages = [
        Images.ComicPag0, Images.ComicPag1, Images.ComicPag2, Images.ComicPag3, 
        Images.ComicPag4, Images.ComicPag5, Images.ComicPag6, Images.ComicPag7,
    ];
    
    const [currentPage, setCurrentPage] = useState(0);

    const paginate = (newDirection: number) => {
        if (currentPage + newDirection >= 0 && currentPage + newDirection < comicPages.length) {
            setCurrentPage(currentPage + newDirection);
        }
    };

    return (
        <section className="comic-page-wrapper">
            <header className="comic-main-header">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bebas-font main-title"
                >
                    RETRO <span className="cyan-text">BTS</span> <span className="yellow-text">COMIC</span>
                </motion.h1>
                <div className="brand-line-glow"></div>
            </header>

            {/* 1. STYLIZED BTS IMAGE SECTION */}
            <div className="bts-featured-section">
                <div className="bts-cinematic-container">
                    {/* Glassmorphism Overlay for Stylized Look */}
                    <div className="bts-glass-overlay">
                        <span className="bebas-font">BEHIND THE SCENES</span>
                    </div>
                    <div className="bts-image-holder-stylized">
                        <img src={Images.ComicCOverimg} alt="BTS" className="bts-img" />
                        <div className="vignette-effect"></div>
                    </div>
                    {/* Retro Corner Accents */}
                    <div className="corner-accent top-left"></div>
                    <div className="corner-accent bottom-right"></div>
                </div>
            </div>

            {/* 2. INTERACTIVE COMIC SECTION */}
            <div className="comic-grid-container">
                <div className="book-section">
                    <div className="book-viewport medium-size">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPage}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                className="comic-paper-sheet"
                            >
                                <img src={comicPages[currentPage]} alt="Comic Page" className="page-img" />
                                <div className="page-tag-fixed bebas-font">ISSUE.{currentPage + 1}</div>
                            </motion.div>
                        </AnimatePresence>
                        
                        {/* Dots Positioned Between Buttons */}
                        <div className="book-navigation-bar">
                            <button className="nav-btn-styled" onClick={() => paginate(-1)} disabled={currentPage === 0}>PREV</button>
                            
                            <div className="dot-indicator-inline">
                                {comicPages.map((_, i) => (
                                    <span key={i} className={`dot-item ${i === currentPage ? 'active' : ''}`} />
                                ))}
                            </div>

                            <button className="nav-btn-styled" onClick={() => paginate(1)} disabled={currentPage === 7}>NEXT</button>
                        </div>
                    </div>
                </div>

                <aside className="strategy-content">
                    <div className="strategy-glass-card">
                        <h2 className="bebas-font yellow-text section-label">THE VISION</h2>
                        <div className="accent-divider"></div>
                        <div className="narrative-text inter-font">
                            <p className="lead-para">
                                A tribute to the golden era of storytelling, where the meticulous craft of cinema 
                                converges with the bold, high-contrast aesthetic of classic graphic novels. 
                            </p>
                            <p className="body-para">
                                Brought to life by the visionary artistry of <strong>Santhosh Narayanan</strong>, 
                                every hand-crafted frame celebrates the creative synergy and raw energy of the 
                                <strong> Cinema Payyan</strong> collective. This initiative is more than a promotion; 
                                it is a serialized visual chronicle of the passion behind the lens.
                            </p>
                            <div className="release-badge bebas-font">
                                <span className="cyan-text">NEW CHRONICLES RELEASED EVERY MONDAY</span>
                            </div>
                        </div>
                        <a href="https://www.instagram.com/cinemapayyan.inc/" target="_blank" rel="noreferrer" className="modern-action-btn">
                            <span className="bebas-font">VIEW FULL ARCHIVE</span>
                        </a>
                    </div>
                </aside>
            </div>

            {/* 3. CENTERED REEL PREVIEW */}
            <footer className="comic-reel-section">
                <h3 className="bebas-font yellow-text">EPISODE PREVIEW</h3>
                
                <div className="reel-layout-centered">
                    <div className="side-panel left-panel hide-mobile"></div>

                    <div className="video-preview-frame">
                        <video className="reel-video-element" autoPlay muted loop playsInline>
                            <source src={VideoAssets.vjPreviews[22]} type="video/mp4" />
                        </video>
                        <div className="video-border-glow"></div>
                        <div className="tag-box-corner bebas-font">COMIC_REEL</div>
                    </div>

                    <div className="side-panel right-panel hide-mobile"></div>
                </div>
            </footer>
        </section>
    );
};

export default Comic;