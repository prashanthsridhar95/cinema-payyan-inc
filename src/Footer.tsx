import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaYoutube, FaArrowUp } from 'react-icons/fa';
import './App.css';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Brand Section */}
                <div className="footer-brand">
                    <h2 className="footer-logo">CINEMA PAYYAN</h2>
                    <p className="footer-tagline">STORYTELLING THROUGH A CINEMATIC LENS.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>PRODUCTION</h4>
                        <a href="#work">PROJECTS</a>
                        <a href="#about">THE STUDIO</a>
                        <a href="https://woolen-sodalite-e73.notion.site/16909085b6758040a618e11e9b9dabef" target="_blank" rel="noreferrer">MUNAI PORTAL</a>
                    </div>
                    <div className="footer-column">
                        <h4>SOCIALS</h4>
                        <a href="https://www.instagram.com/cinemapayyan.inc/" target="_blank" rel="noreferrer">INSTAGRAM</a>
                        <a href="https://x.com/cinemapayyan" target="_blank" rel="noreferrer">X (TWITTER)</a>
                        <a href="https://www.youtube.com/@OpenPannaa">YOUTUBE</a>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="footer-contact">
                    <h4>INQUIRIES</h4>
                    <p>cinemapayyanproductions@gmail.com</p>
                    <p>CHENNAI, INDIA</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="legal">
                    <span>© 2026 CINEMA PAYYAN PRODUCTIONS.</span>
                    <span>ALL RIGHTS RESERVED.</span>
                </div>
                
                <motion.button 
                    className="scroll-top" 
                    onClick={scrollToTop}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    BACK TO TOP <FaArrowUp />
                </motion.button>
            </div>
        </footer>
    );
};

export default Footer;