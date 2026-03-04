import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Images } from './assets/assets';

const About = forwardRef<HTMLDivElement>((props, ref) => {
    const movieTrain = [
        Images.bigboss, Images.stone, Images.levelup,
        Images.startda, Images.logo, Images.madras,
    ];

    return (
        <section ref={ref} className="about-section-interactive">
            
            {/* BACKGROUND LOGO TRAIN */}
            <div className="about-train-wrapper">
                <div className="about-train-track">
                    {[...movieTrain, ...movieTrain, ...movieTrain].map((img, index) => (
                        <img key={index} src={img} alt="Brand Logo" className="about-train-logo" />
                    ))}
                </div>
            </div>

            <div className="about-main-layout">
                {/* Visual Side */}
                <motion.div 
                    className="about-visual"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src={Images.abishakeRaja} alt="Abishek Raaja" className="about-hero-img" />
                    <div className="status-badge">
                        <span className="dot"></span> STILL SEARCHING
                    </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                    className="about-text-box"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <span className="about-pre-title">ESTABLISHED • REDEFINING DAILY</span>
                    <h2 className="about-main-title">Abishek <br/> <span className="gold-text">Raaja</span></h2>
                    
                    <div className="about-bio-body">
                        <p className="about-lead">
                            Founder of <span className="cyan-text">CINEMAPAYYAN PRODUCTIONS</span>. 
                        </p>
                        <p className="about-philosophy">
                            Success isn't a destination; it's a constant state of motion. Even now, we are 
                            <span className="white-highlight"> searching for the unseen</span>. 
                            To us, every sunrise is a blank script and every day is a new opportunity to 
                            redefine what cinema can be.
                        </p>
                    </div>

                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-num">10+</span>
                            <span className="stat-label">YEARS OF <br/> EVOLUTION</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num">44.6K</span>
                            <span className="stat-label">INSTAGRAM <br/> FOLLOWERS</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
});

export default About;