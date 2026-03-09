import { useState, useEffect, useRef } from "react";

const CinemaScrubber = ({ refs }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [currentSection, setCurrentSection] = useState("HOME");
  const [showMenu, setShowMenu] = useState(false);
  const [isLongPress, setIsLongPress] = useState(false);
  const longPressTimer = useRef(null);
  const scrubberRef = useRef(null);

  // All sections in order as they appear on the page
  const allSections = [
    { id: "home", label: "HOME", ref: refs.homeRef },
    { id: "about", label: "ABOUT", ref: refs.aboutRef },
    { id: "vj-session", label: "VJ SESSION", ref: null },
    { id: "open-pannaa", label: "OPEN PANNAA", ref: null },
    { id: "host", label: "HOST", ref: null },
    { id: "director", label: "DIRECTOR", ref: null },
    { id: "creative-producer", label: "CREATIVE PRODUCER", ref: refs.promotionsRef },
    { id: "accelerator", label: "ACCELERATOR", ref: null },
    { id: "work", label: "FINISHED PROJECTS", ref: refs.workRef },
    { id: "tie-up", label: "TIE-UP PARTNERS", ref: null },
    { id: "comic", label: "BTS COMIC", ref: null },
    { id: "shorts", label: "SHORTS", ref: null },
    { id: "shadow", label: "SHADOW", ref: null },
    { id: "contact", label: "CONTACT", ref: refs.contactRef },
  ];

  // Handle scroll and update progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));

      // Detect current section
      let currentSectionFound = "HOME";
      const scrollMiddle = windowHeight / 2;

      // Check refs first
      if (refs.contactRef?.current?.getBoundingClientRect().top <= scrollMiddle) {
        currentSectionFound = "CONTACT";
      } else if (refs.promotionsRef?.current?.getBoundingClientRect().top <= scrollMiddle) {
        currentSectionFound = "CREATIVE PRODUCER";
      } else if (refs.workRef?.current?.getBoundingClientRect().top <= scrollMiddle) {
        currentSectionFound = "FINISHED PROJECTS";
      } else if (refs.aboutRef?.current?.getBoundingClientRect().top <= scrollMiddle) {
        currentSectionFound = "ABOUT";
      }

      setCurrentSection(currentSectionFound);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  // Handle scrubber drag
  const handleMouseDown = (e) => {
    if (showMenu) {
      setShowMenu(false);
      return;
    }
    setIsDragging(true);
    setIsLongPress(false);

    longPressTimer.current = setTimeout(() => {
      setIsLongPress(true);
      setShowMenu(true);
    }, 500);

    updateScrollFromClick(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging && !isLongPress) {
      updateScrollFromClick(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
    setIsLongPress(false);
  };

  const updateScrollFromClick = (e) => {
    if (!scrubberRef.current) return;

    const rect = scrubberRef.current.getBoundingClientRect();
    const percentage = (e.clientY - rect.top) / rect.height;
    const scrollTop =
      (percentage * (document.documentElement.scrollHeight - window.innerHeight)) *
      0.98;

    window.scrollTo({ top: Math.max(0, scrollTop), behavior: isDragging ? "auto" : "smooth" });
  };

  const handleSectionClick = (section) => {
    setShowMenu(false);
    if (section.ref?.current) {
      section.ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrubberClick = () => {
    if (!showMenu) {
      setShowLabel(!showLabel);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, isLongPress]);

  return (
    <div className="cinema-scrubber-container">
      <style>{`
        /* ── CINEMA SCRUBBER ── */
        .cinema-scrubber-container {
          position: fixed;
          right: 0;
          top: 0;
          height: 100vh;
          z-index: 500;
          pointer-events: none;
          display: flex;
          align-items: center;
          padding-right: 20px;
        }

        .cinema-scrubber-track {
          height: 70%;
          width: 3px;
          background: linear-gradient(
            to bottom,
            rgba(253, 224, 71, 0.08),
            rgba(253, 224, 71, 0.15),
            rgba(253, 224, 71, 0.08)
          );
          border-radius: 2px;
          position: relative;
          cursor: pointer;
          pointer-events: auto;
          box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
        }

        .cinema-scrubber-progress {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(
            to bottom,
            rgba(253, 224, 71, 0.3),
            rgba(253, 224, 71, 0.7),
            rgba(253, 224, 71, 0.4)
          );
          border-radius: 2px;
          transition: height 0.1s ease-out;
          box-shadow: 0 0 10px rgba(253, 224, 71, 0.4);
        }

        /* Film Reel Scrubber Handle */
        .cinema-scrubber-handle {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          cursor: grab;
          user-select: none;
          pointer-events: auto;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          padding: 20px 0;
          margin-left: -20px;
        }

        .cinema-scrubber-handle:active {
          cursor: grabbing;
        }

        .cinema-scrubber-handle.dragging {
          filter: drop-shadow(0 0 15px rgba(253, 224, 71, 0.8));
        }

        /* Film Reel SVG Icon */
        .film-reel-icon {
          width: 48px;
          height: 48px;
          filter: drop-shadow(0 0 8px rgba(253, 224, 71, 0.4));
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cinema-scrubber-handle:hover .film-reel-icon {
          transform: scale(1.15) rotate(20deg);
          filter: drop-shadow(0 0 15px rgba(253, 224, 71, 0.7));
        }

        .cinema-scrubber-handle.dragging .film-reel-icon {
          transform: scale(1.2) rotate(-30deg);
        }

        /* Section Label */
        .cinema-label {
          position: absolute;
          right: 60px;
          top: 50%;
          transform: translateY(-50%);
          font-family: "Courier New", monospace;
          font-size: 11px;
          letter-spacing: 2px;
          color: rgba(253, 224, 71, 0);
          text-transform: uppercase;
          white-space: nowrap;
          font-weight: 700;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
          text-shadow: 0 0 10px rgba(253, 224, 71, 0.3);
        }

        .cinema-label.visible {
          opacity: 1;
          color: rgba(253, 224, 71, 1);
          text-shadow: 0 0 15px rgba(253, 224, 71, 0.6);
        }

        /* Context Menu */
        .cinema-menu {
          position: absolute;
          right: 60px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.97);
          border: 1.5px solid rgba(253, 224, 71, 0.5);
          border-radius: 8px;
          padding: 12px 0;
          min-width: 200px;
          max-height: 70vh;
          overflow-y: auto;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(4px);
          box-shadow: 0 0 20px rgba(253, 224, 71, 0.2);
          z-index: 1000;
        }

        .cinema-menu.visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(-50%) translateX(0);
        }

        .cinema-menu-item {
          padding: 10px 16px;
          font-family: "Courier New", monospace;
          font-size: 10px;
          letter-spacing: 1px;
          color: rgba(253, 224, 71, 0.6);
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s ease;
          border-left: 2px solid transparent;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .cinema-menu-item:hover {
          background: rgba(253, 224, 71, 0.1);
          color: rgba(253, 224, 71, 1);
          border-left-color: rgba(253, 224, 71, 0.8);
          padding-left: 20px;
        }

        .cinema-menu-item.active {
          background: rgba(253, 224, 71, 0.15);
          color: rgba(253, 224, 71, 1);
          border-left-color: rgba(253, 224, 71, 1);
          font-weight: 700;
          text-shadow: 0 0 8px rgba(253, 224, 71, 0.4);
        }

        /* Scrollbar styling for menu */
        .cinema-menu::-webkit-scrollbar {
          width: 4px;
        }

        .cinema-menu::-webkit-scrollbar-track {
          background: rgba(253, 224, 71, 0.05);
        }

        .cinema-menu::-webkit-scrollbar-thumb {
          background: rgba(253, 224, 71, 0.3);
          border-radius: 2px;
        }

        .cinema-menu::-webkit-scrollbar-thumb:hover {
          background: rgba(253, 224, 71, 0.6);
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .cinema-scrubber-container {
            padding-right: 12px;
          }

          .cinema-scrubber-track {
            height: 60%;
          }

          .cinema-scrubber-handle {
            padding: 16px 0;
          }

          .film-reel-icon {
            width: 40px;
            height: 40px;
          }

          .cinema-label {
            font-size: 9px;
            right: 50px;
          }

          .cinema-menu {
            right: 50px;
            min-width: 160px;
          }

          .cinema-menu-item {
            font-size: 8px;
            padding: 8px 12px;
          }
        }

        @media (max-width: 480px) {
          .cinema-scrubber-container {
            padding-right: 8px;
          }

          .cinema-scrubber-track {
            height: 50%;
            width: 2px;
          }

          .cinema-scrubber-handle {
            padding: 12px 0;
            margin-left: -16px;
          }

          .film-reel-icon {
            width: 32px;
            height: 32px;
          }

          .cinema-label {
            display: none;
          }

          .cinema-menu {
            right: 40px;
            min-width: 140px;
            max-height: 50vh;
          }
        }
      `}</style>

      {/* Scrubber Track */}
      <div
        className="cinema-scrubber-track"
        ref={scrubberRef}
        onMouseDown={handleMouseDown}
      >
        <div
          className="cinema-scrubber-progress"
          style={{ height: `${scrollProgress}%` }}
        />

        {/* Film Reel Handle */}
        <div
          className={`cinema-scrubber-handle ${isDragging ? "dragging" : ""}`}
          style={{ top: `${scrollProgress}%` }}
          onClick={handleScrubberClick}
        >
          <svg
            className="film-reel-icon"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer ring */}
            <circle cx="50" cy="50" r="48" fill="none" stroke="#fde047" strokeWidth="2" />

            {/* Center circle */}
            <circle cx="50" cy="50" r="18" fill="none" stroke="#fde047" strokeWidth="2.5" />

            {/* Center dot */}
            <circle cx="50" cy="50" r="4" fill="#fde047" />

            {/* 6 Film spools */}
            <g stroke="#fde047" strokeWidth="2.5" fill="none">
              {[0, 60, 120, 180, 240, 300].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 50 + 32 * Math.cos(rad);
                const y1 = 50 + 32 * Math.sin(rad);
                const x2 = 50 + 38 * Math.cos(rad);
                const y2 = 50 + 38 * Math.sin(rad);
                return (
                  <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} />
                );
              })}
            </g>

            {/* Decorative film strip segments */}
            <g fill="none" stroke="#fde047" strokeWidth="1.5">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x = 50 + 42 * Math.cos(rad);
                const y = 50 + 42 * Math.sin(rad);
                return (
                  <rect
                    key={`seg-${angle}`}
                    x={x - 3}
                    y={y - 3}
                    width="6"
                    height="6"
                    fill="rgba(253, 224, 71, 0.2)"
                    stroke="#fde047"
                    strokeWidth="1"
                  />
                );
              })}
            </g>
          </svg>
        </div>
      </div>

      {/* Section Label */}
      <div className={`cinema-label ${showLabel ? "visible" : ""}`}>
        {currentSection}
      </div>

      {/* Context Menu */}
      <div className={`cinema-menu ${showMenu ? "visible" : ""}`}>
        {allSections.map((section) => (
          <div
            key={section.id}
            className={`cinema-menu-item ${
              currentSection === section.label ? "active" : ""
            }`}
            onClick={() => handleSectionClick(section)}
          >
            {section.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CinemaScrubber;