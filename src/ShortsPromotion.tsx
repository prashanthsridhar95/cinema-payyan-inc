import React from 'react';
import { motion } from 'framer-motion';
import { VideoAssets, Images } from "./assets/assets"; 
import './App.css';

const ShortsPromotion: React.FC = () => {
    const topYT = [
        { id: 23, title: "CUSTODY Game | CSK Vs SRH - who will win?", link: "https://youtu.be/aHxx-NtpAwQ?si=hoArL4w8_2clt2O7" },
        { id: 24, title: "Venkat Prabhu ARRESTED- CUSTODY Promo", link: "https://youtu.be/2M-A_3U-Zmc?si=FPJ7TfFoZvRtPoZH" },
        { id: 25, title: "Naga Chaitanya tests Venkat Prabhu’s patience", link: "https://youtu.be/XbvzHgeK3VI?si=HeroAaf4kXPLaDLF" },
    ];

    const middleReels = [
        { id: 26, title: "What’s holding everyone back? 🤔", link: "https://www.instagram.com/reel/DHFzEYph_sM/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="},
        { id: 28, title: "No matter how hard you hit, it’ll stand tall 😉", link: "https://www.instagram.com/reel/DHLXS6ghJfr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    ];

    const bottomYT = [
        { id: 29, title: "Mood Of Iraivan", link: "https://youtu.be/3IAV3UISk8U?si=ZwWgCxUeejVHDsqW" },
        { id: 30, title: "RaguThatha countdown series 1", link: "https://www.instagram.com/reel/C-ozgh8vB_9/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==" },
        { id: 31, title: "RaguThatha countdown series", link: "https://www.instagram.com/reel/C-hRTVyIwLj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    ];

    const specialPromo = {
        id: 32,
        title: "AMAZON PRIME X CINEMAPAYYAN",
        link: "https://youtu.be/tclNknwYTS0?si=6PeS3GpsiD7bqPJS"
    };

    return (
        <section className="shorts-promo-wrapper">
            <header className="promo-main-header">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bebas-font main-title"
                >
                    SHORTS <span className="yellow-text">PROMOTION</span>
                </motion.h1>
                <div className="brand-line-glow"></div>
            </header>

            {/* 1. TOP YOUTUBE GRID */}
            <div className="yt-preview-grid">
                {topYT.map((vid) => (
                    <a key={vid.id} href={vid.link} target="_blank" rel="noreferrer" className="yt-card">
                        <div className="yt-thumbnail">
                            <video autoPlay muted loop playsInline className="promo-vid">
                                <source src={VideoAssets.vjPreviews[vid.id]} type="video/mp4" />
                            </video>
                            <div className="play-hint-overlay">
                                <span className="bebas-font">WATCH NOW</span>
                            </div>
                        </div>
                        <h4 className="bebas-font">{vid.title}</h4>
                    </a>
                ))}
            </div>

            {/* 2. REELS WITH CENTER EXPLANATION */}
            <div className="reels-brand-integration">
                {/* Reel 1 */}
                <a href={middleReels[0].link} target="_blank" rel="noreferrer" className="reel-card">
                    <div className="reel-video-container">
                        <video autoPlay muted loop playsInline className="promo-vid">
                            <source src={VideoAssets.vjPreviews[middleReels[0].id]} type="video/mp4" />
                        </video>
                        <div className="reel-play-icon">▶</div>
                    </div>
                </a>

                {/* Center Explanation */}
                <div className="brand-explanation-center">
                    <img src={Images.logo} alt="CinemaPayyan" className="promo-logo-main" />
                    <h3 className="bebas-font yellow-text">COUNTDOWN SPECIALTY</h3>
                    <div className="short-divider"></div>
                    <p className="inter-font specialty-text">
                        High-energy rhythmic edits designed to build maximum anticipation. 
                        <strong> Namma Specialty.</strong>
                    </p>
                </div>

                {/* Reel 2 */}
                <a href={middleReels[1].link} target="_blank" rel="noreferrer" className="reel-card">
                    <div className="reel-video-container">
                        <video autoPlay muted loop playsInline className="promo-vid">
                            <source src={VideoAssets.vjPreviews[middleReels[1].id]} type="video/mp4" />
                        </video>
                        <div className="reel-play-icon">▶</div>
                    </div>
                </a>
            </div>

            {/* 3. BOTTOM YOUTUBE GRID */}
            <div className="yt-preview-grid">
                {bottomYT.map((vid) => (
                    <a key={vid.id} href={vid.link} target="_blank" rel="noreferrer" className="yt-card">
                        <div className="yt-thumbnail">
                            <video autoPlay muted loop playsInline className="promo-vid">
                                <source src={VideoAssets.vjPreviews[vid.id]} type="video/mp4" />
                            </video>
                            <div className="play-hint-overlay">
                                <span className="bebas-font">WATCH NOW</span>
                            </div>
                        </div>
                        <h4 className="bebas-font">{vid.title}</h4>
                    </a>
                ))}
            </div>

            {/* 4. SPECIAL PROMOTION SECTION */}
            <div className="special-promo-container">
                <div className="special-flex">
                    <div className="special-video-left">
                        <a href={specialPromo.link} target="_blank" rel="noreferrer" className="yt-thumbnail large-yt">
                            <video autoPlay muted loop playsInline>
                                <source src={VideoAssets.vjPreviews[specialPromo.id]} type="video/mp4" />
                            </video>
                            <div className="prime-badge">AMAZON PRIME ASSOCIATION</div>
                            <div className="play-hint-overlay">
                                <span className="bebas-font">WATCH FULL PROMO</span>
                            </div>
                        </a>
                    </div>

                    <div className="special-content-right">
                        <h2 className="bebas-font cyan-text">CINEMAPAYYAN SPECIAL PROMOTION</h2>
                        <div className="accent-divider"></div>
                        <p className="inter-font">
                            Countdown videos are the heart and soul of our creative identity. 
                            It’s our signature specialty—building high-octane anticipation through 
                            rhythmic editing and cinematic precision.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShortsPromotion;