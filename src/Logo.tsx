import React, { useState, useEffect, useRef } from 'react';
import { Images } from './assets/assets';


const Logo: React.FC = () => {
  const [displayRotation, setDisplayRotation] = useState(0);
  const targetRotation = useRef(0);
  const currentRotation = useRef(0);
  const requestRef = useRef<number>(0);

  const animate = () => {
    const diff = targetRotation.current - currentRotation.current;
    currentRotation.current += diff * 0.1; 

    setDisplayRotation(currentRotation.current);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {
    const autoSpin = setInterval(() => {
      targetRotation.current = Math.ceil(targetRotation.current / 360) * 360 + 360;
    }, 3000);

    return () => clearInterval(autoSpin);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      targetRotation.current += 16; 
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

 // ... (your existing imports and logic)

  return (
    <div className="logo-container">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" /> {/* Yellow */}
            <stop offset="100%" stopColor="#32C5F4" /> {/* Cyan */}
          </linearGradient>
          
          <filter id="gradient-glow-filter" x="-200%" y="-100%" width="500%" height="300%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
            <feFlood floodColor="url(#logo-gradient)" result="glow-color" />
            <feComposite in="glow-color" in2="blur" operator="in" result="soft-glow" />
            <feMerge>
              <feMergeNode in="soft-glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <img
        src={Images.logo}
        alt="Logo"
        className="logo-img"
        style={{ transform: `rotate(${displayRotation}deg)` }}
      />
    </div>
  );
};

export default Logo;