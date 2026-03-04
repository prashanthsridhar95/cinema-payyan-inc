import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaTwitter, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './App.css';

const BookingContact: React.FC = () => {
    const [isTorn, setIsTorn] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);

    const filmStrip = " • CINEMA PAYYAN • NOW BOOKING • ".repeat(20);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        // Capture data manually for a 'Brutal' reliable send
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const templateParams = {
                user_name: formData.get('user_name'),
                user_email: formData.get('user_email'),
                user_phone: formData.get('user_phone'),
                message: formData.get('message'),
            };

            emailjs.send(
                'service_hq6bpkh', 
                '__ejs-test-mail-service__', // Using your specific ID
                templateParams, 
                'PCxhelMbj51llHZmn'
            )
            .then(() => {
                setIsTorn(true);
                setIsSending(false);
            })
            .catch((err) => {
                console.error("EmailJS Error:", err);
                alert(`Booking failed: ${err.text || "Check console"}`);
                setIsSending(false);
            });
        }
    };

    return (
        <section className="booking-wrapper">
            {/* The Moving Background Lines */}
            <div className="marquee-line top">
                <motion.div 
                    className="marquee-text" 
                    animate={{ x: [0, -1000] }} 
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {filmStrip}
                </motion.div>
            </div>

            <div className="ticket-area">
                <AnimatePresence mode="wait">
                    {!isTorn ? (
                        <motion.div
                            key="ticket"
                            className="yellow-ticket"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -1000, rotate: -10, opacity: 0 }}
                            transition={{ type: "spring", damping: 20 }}
                        >
                            <form ref={formRef} className="ticket-form" onSubmit={sendEmail}>
                                <div className="ticket-info">
                                    <div className="ticket-header">
                                        <h2>ADMIT ONE</h2>
                                        <p className="brand-sub">CINEMA PAYYAN PRODUCTIONS</p>
                                    </div>

                                    <div className="inputs-grid">
                                        <div className="input-field">
                                            <label>NAME</label>
                                            <input name="user_name" type="text" placeholder="YOUR NAME" required />
                                        </div>
                                        <div className="input-field">
                                            <label>EMAIL</label>
                                            <input name="user_email" type="email" placeholder="EMAIL ADDRESS" required />
                                        </div>
                                        <div className="input-field full">
                                            <label>CONTACT NUMBER</label>
                                            <input name="user_phone" type="tel" placeholder="+91" />
                                        </div>
                                        <div className="input-field full">
                                            <label>ABOUT THE PROJECT</label>
                                            <textarea name="message" placeholder="TELL US YOUR STORY..." rows={2} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="ticket-divider">
                                    <div className="punch top"></div>
                                    <div className="dash-line"></div>
                                    <div className="punch bottom"></div>
                                </div>

                                <div className="ticket-stub">
                                    <div className="stub-socials">
                                        <p>FOLLOW US</p>
                                        <div className="stub-icons">
                                            <a href="https://www.instagram.com/cinemapayyan.inc/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                                            <a href="https://x.com/cinemapayyan" target="_blank" rel="noreferrer"><FaTwitter /></a>
                                            <a href="#"><FaYoutube /></a>
                                        </div>
                                        <a href="https://woolen-sodalite-e73.notion.site/..." target="_blank" rel="noreferrer" className="notion-link">
                                            MUNAI PORTAL <FaExternalLinkAlt size={8} />
                                        </a>
                                    </div>
                                    <button type="submit" className="confirm-button" disabled={isSending}>
                                        {isSending ? "SENDING..." : "CONFIRM"}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div 
                            className="success-screen" 
                            initial={{ scale: 0.8, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }}
                        >
                            <div className="success-content">
                                <h1 className="success-title">BOOKED!</h1>
                                <p>WE WILL REACH OUT SOON</p>
                                <div className="divider-line"></div>
                                <button className="back-button" onClick={() => setIsTorn(false)}>
                                    BACK
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="marquee-line bottom">
                <motion.div 
                    className="marquee-text" 
                    animate={{ x: [-1000, 0] }} 
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                    {filmStrip}
                </motion.div>
            </div>
        </section>
    );
};

export default BookingContact;