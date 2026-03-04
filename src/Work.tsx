import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useVelocity, useAnimationFrame } from 'framer-motion';
import { Images } from './assets/assets';
import './App.css';

const projects = [
    { id: 1, img: Images.mahaveeran, title: "MAAVEERAN" },
    { id: 2, img: Images.chitha, title: "CHITHA" },
    { id: 3, img: Images.coustdy, title: "CUSTODY" },
    { id: 4, img: Images.ptsir, title: "PT SIR" },
    { id: 5, img: Images.Eraivan, title: "ERAIVAN" },
    { id: 6, img: Images.madrasMatniee, title: "MADRAS MATINEE" },
    { id: 7, img: Images.dear, title: "DEAR" },
    { id: 8, img: Images.Angammal, title: "ANGAMMAL" },
    { id: 9, img: Images.Kumki2, title: "KUMKI 2" },
    { id: 10, img: Images.Gevi, title: "GEVI" },
    { id: 11, img: Images.RetroImg, title: "RETRO" },
    { id: 12, img: Images.KadalReset, title: "KADAL RESET REPEAT" },
    { id: 13, img: Images.SnakeAndLader, title: "SNAKE & LADDER" },
    { id: 14, img: Images.Adipurshan, title: "ADIPURUSHAN" },
    { id: 15, img: Images.Ragut, title: "RAGU THATHA" },
    { id: 16, img: Images.Adiya, title: "ADIYA" },
];

const duplicatedProjects = [...projects, ...projects];

const Work = () => {
    const baseX = useMotionValue(0);
    
    // Scroll tracking for natural momentum if the user scrolls the page
    const scrollY = useMotionValue(0);
    useEffect(() => {
        const handleScroll = () => scrollY.set(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);

    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], { clamp: false });

    useAnimationFrame((t, delta) => {
        // SUPER SLOW SPEED: Changed from -0.08 down to -0.005
        let moveBy = -0.005 * (delta / 16);

        // Adds subtle momentum when the user scrolls the page
        moveBy += velocityFactor.get() * moveBy;

        let newValue = baseX.get() + moveBy;

        // Loop reset logic
        if (newValue <= -50) newValue = 0;
        else if (newValue > 0) newValue = -50;

        baseX.set(newValue);
    });

    const x = useTransform(baseX, (v) => `${v}%`);

    return (
        <section className="work-wrap">
            <div className="header-container">
                <h1 className="bebas-font main-title">
                    FINISHED <span className="stroke">PROJECTS</span>
                </h1>
                <p className="inter-font partner-tag">PROMOTIONAL PARTNER</p>
            </div>

            <div className="marquee-wrapper">
                <motion.div 
                    className="marquee-track" 
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDrag={(e, info) => {
                        // Manual interaction still works for faster exploration
                        baseX.set(baseX.get() + info.delta.x * 0.01);
                    }}
                >
                    {duplicatedProjects.map((proj, index) => (
                        <div key={index} className="film-card">
                            <div className="img-box">
                                <img src={proj.img} alt={proj.title} draggable="false" />
                                <div className="overlay">
                                    <span className="tag inter-font">PROMOTIONAL PARTNER</span>
                                    <h2 className="bebas-font">{proj.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="interaction-hint">
                <div className="line">
                    <motion.div 
                        className="progress-fill" 
                        animate={{ x: ["-100%", "100%"] }} 
                        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                    />
                </div>
                <span className="inter-font">CINEMATIC VIEW • DRAG TO SHIFT</span>
            </div>
        </section>
    );
};

export default Work;