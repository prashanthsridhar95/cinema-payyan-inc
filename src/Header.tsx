import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onScrollRequest: (ref: React.RefObject<HTMLDivElement | null>) => void;
  refs: {
    homeRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    workRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
  };
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

function Header({ onScrollRequest, refs, isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const [active, setActive] = useState('HOME');
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. SCROLL SPY LOGIC: Updates active state based on scroll position
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) setActive(id.toUpperCase());
        }
      });
    }, options);

    const currentRefs = [refs.homeRef, refs.aboutRef, refs.workRef, refs.contactRef];
    currentRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      currentRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs]);

  const navItems = [
    { label: 'HOME', ref: refs.homeRef },
    { label: 'ABOUT', ref: refs.aboutRef },
    { label: 'WORK', ref: refs.workRef },
    { label: 'CONTACT', ref: refs.contactRef },
  ];

  return (
    <>
      {/* DESKTOP HEADER - Hidden on mobile via CSS display: none */}
      <div className={`header-fixed-container ${isScrolled ? 'is-scrolled' : ''}`}>
        <header className="prof-header-centered">
          <nav className="prof-nav">
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                className={`prof-nav-item ${active === item.label ? 'active' : ''}`}
                onClick={() => {
                  onScrollRequest(item.ref);
                  setActive(item.label);
                }}
                whileHover="hover"
                initial="rest"
              >
                {/* Background Hover Fill */}
                <motion.div 
                  className="prof-fill"
                  variants={{
                    rest: { height: 0 },
                    hover: { height: '100%' }
                  }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                />

                <span className="prof-text">{item.label}</span>

                {/* THE YELLOW LINE - Centered indicator */}
                {active === item.label && (
                  <motion.div 
                    layoutId="active-line"
                    className="prof-active-bar"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '15%', // Keeps the line centered
                        width: '70%',
                        height: '3px',
                        backgroundColor: '#FDE047',
                        zIndex: 10
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </nav>
        </header>
      </div>

      {/* MOBILE OVERLAY NAVIGATION */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-nav-overlay"
          >
            <div className="mobile-nav-list">
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  className={`mobile-nav-link ${active === item.label ? 'm-active' : ''}`}
                  onClick={() => {
                    onScrollRequest(item.ref);
                    setIsMenuOpen(false); // Close menu on click
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;