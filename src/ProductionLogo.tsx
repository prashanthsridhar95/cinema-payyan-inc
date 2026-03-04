import React from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform, useSpring } from 'framer-motion';
import { Images } from './assets/assets'; 
import './App.css';

const logos = [
    { id: 1, img: Images.Stone }, 
    { id: 2, img: Images.startda },
    { id: 3, img: Images.levelup }, 
    { id: 4, img: Images.Tseries },
    { id: 5, img: Images.PotentialStudio }, 
    { id: 6, img: Images.NutmegProduction },
    { id: 7, img: Images.EtakiLogo }, 
    { id: 8, img: Images.Srinivass },
    { id: 9, img: Images.MaliMovieMAkers }, 
    { id: 10, img: Images.Arupthangles },
    { id: 11, img: Images.PenStudio }, 
    { id: 12, img: Images.madras },
];

const quadrupledLogos = [...logos, ...logos, ...logos, ...logos];

const ProductionLogo = () => {
    const baseX = useMotionValue(0);
    const smoothX = useSpring(baseX, { damping: 50, stiffness: 300 });

    useAnimationFrame((t, delta) => {
        // SLOWED DOWN: Changed from 0.05 to 0.015 for a smooth crawl
        let moveBy = 0.015 * (delta / 16); 
        let nextX = baseX.get() + moveBy;
        
        if (nextX >= 0) nextX = -25; 
        baseX.set(nextX);
    });

    const x = useTransform(smoothX, (v) => `${v}%`);
    const bgX = useTransform(smoothX, (v) => `${v * 15}px`); 

    return (
        <section className="production-wrap">
            <div className="brand-glow-overlay" />
            
            <div className="tieup-header">
                <span className="subtitle inter-font">OFFICIAL COLLABORATIONS</span>
                <h2 className="bebas-font">TIE-UP <span className="yellow-text">PARTNERS</span></h2>
                <div className="brand-divider" />
            </div>

            <div className="film-strip-viewport">
                {/* YELLOW REEL DOTS */}
                <motion.div 
                    className="moving-sprockets" 
                    style={{ backgroundPositionX: bgX }}
                />

                <motion.div 
                    className="logo-track"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDrag={(e, info) => {
                        baseX.set(baseX.get() + (info.delta.x * 0.02));
                    }}
                >
                    {quadrupledLogos.map((logo, index) => (
                        <div key={index} className="logo-cell">
                            <img src={logo.img} alt="Production Partner" draggable="false" />
                        </div>
                    ))}
                </motion.div>

                <div className="side-vignette left-v" />
                <div className="side-vignette right-v" />
            </div>
        </section>
    );
};

export default ProductionLogo;