import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Film, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Images, VideoAssets } from './assets/assets'; 
import './App.css';

const Filmcritic = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const criticPreviews = [
        { id: 1, title: "Retro", link: "https://youtu.be/mp8e0SBS4d4", video: VideoAssets.vjPreviews[10] },
        { id: 2, title: "Dragon", link: "https://youtu.be/3z4uen7WeD8", video: VideoAssets.vjPreviews[11] },
        { id: 3, title: "Vidaamuyarchi", link: "https://youtu.be/vKdN87DhL9Y", video: VideoAssets.vjPreviews[12] },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const videos = entry.target.querySelectorAll('video');
                    if (entry.isIntersecting) {
                        videos.forEach((video) => {
                            video.muted = true;
                            video.play().catch(() => {});
                        });
                    } else {
                        videos.forEach((video) => video.pause());
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="work-section" ref={sectionRef}>
            <div className="work-container">
                
                <div className="section-header">
                    <Film className="gold-text" size={28} /> 
                    <h2>FILM <span className="gold-text">CRITIC</span></h2>
                </div>

                {/* Hero Banner */}
                <div className="critic-hero-container">
                    <img src={Images.openpanna} alt="Featured" className="critic-hero-img" />
                    <div className="critic-hero-overlay">
                        <span className="badge">OPEN PANNAA</span>
                    </div>
                </div>

                {/* Exact VJ Grid with Full-Card Links */}
                <div className="vj-grid">
                    {criticPreviews.map((item) => (
                        <a key={item.id} href={item.link} target="_blank" rel="noreferrer" className="vj-card-link">
                            <div className="vj-card">
                                <div className="vj-preview-box">
                                    <video src={item.video} muted loop playsInline autoPlay className="vj-hover-video" />
                                    <div className="vj-overlay">
                                        <div className="vj-play-link">
                                            <Play fill="currentColor" size={24} />
                                        </div>
                                    </div>
                                </div>
                                <div className="vj-info">
                                    <h4 className="vj-title">{item.title}</h4>
                                    <span className="mobile-cta">Watch on YouTube</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Footer with Circular Logo */}
                <div className="channel-social-footer">
                    <div className="social-logo-holder">
                        <img src={Images.OpenPannaimg} alt="Logo" className="footer-brand-logo" />
                    </div>
                    
                    <div className="social-links-row">
                        <motion.a whileHover={{ scale: 1.1, y: -5 }} href="https://youtube.com/@OpenPannaa" className="social-icon yt"><Youtube size={22} /></motion.a>
                        <motion.a whileHover={{ scale: 1.1, y: -5 }} href="https://instagram.com/openpannaa" className="social-icon ig"><Instagram size={22} /></motion.a>
                        <motion.a whileHover={{ scale: 1.1, y: -5 }} href="https://facebook.com/OpenPannaa" className="social-icon fb"><Facebook size={22} /></motion.a>
                        <motion.a whileHover={{ scale: 1.1, y: -5 }} href="https://x.com/OpenPannaa" className="social-icon x"><Twitter size={22} /></motion.a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Filmcritic;