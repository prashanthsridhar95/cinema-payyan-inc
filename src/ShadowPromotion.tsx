import React from 'react';
import { motion } from 'framer-motion';
import { VideoAssets } from "./assets/assets"; 
import './App.css';

const ShadowPromotion: React.FC = () => {
    return (
        <section className="shadow-promo-wrapper">
            <div className="shadow-container">
                {/* Left Side: Content */}
                <div className="shadow-content-left">
                    <motion.h2 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bebas-font shadow-main-heading"
                    >
                        SHADOW <span className="cyan-text">PROMOTION</span>
                    </motion.h2>

                    <div className="shadow-story">
                        <h3 className="inter-font quote-text">
                            "En annanukku naan dhan seiven moment 🙈"
                        </h3>
                        
                        <p className="inter-font shadow-description">
                            When we at <strong>CinemaPayyan Inc</strong> envisioned pushing the boundaries of the famous shadow play for Sivakarthikeyan's <em>Maaveeran</em>, we collaborated with art curator Mamaran from Alai Global to bring this unique vision to life.
                        </p>

                        <p className="inter-font shadow-description">
                            The execution was masterfully handled by <strong>Out Of The Box Sale</strong>, featuring an incredible design by Siva Digital Art. This grand vision was made possible through the support of SPI Cinemas and PVR Cinemas for a Shanthi Talkies production.
                        </p>

                        <a 
                            href="https://www.instagram.com/reel/CuoYbZqghwl/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="bebas-font shadow-link-btn"
                        >
                            WATCH FULL VIDEO 🔥
                        </a>
                    </div>
                </div>

                {/* Right Side: YouTube-style Video Preview */}
                <div className="shadow-video-right">
                    <a 
                        href="https://www.instagram.com/reel/CuoYbZqghwl/" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="shadow-video-card"
                    >
                        <video autoPlay muted loop playsInline className="shadow-vid">
                            <source src={VideoAssets.vjPreviews[33]} type="video/mp4" />
                        </video>
                        <div className="shadow-overlay">
                            <span className="bebas-font">WATCH NOW</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ShadowPromotion;