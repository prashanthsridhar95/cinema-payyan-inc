import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css'; 

interface HeroProps {
  onScrollRequest?: (target: string) => void;
}

const Hero = ({ onScrollRequest }: HeroProps) => {
  const branches = [
    { title: "PROMOTIONS", path: "#work", className: "branch-left", isScroll: true },
    { title: "PRODUCTIONS", path: "#promotions", className: "branch-center", isScroll: true },
    { title: "MUNAI", path: "/munai", className: "branch-right", isScroll: false },
  ];

  return (
    <div className="hero-container">
      <div className="hero-vignette" />
      <div className="ambient-glow" />

      <div className="tree-architecture">
        <motion.div 
          className="main-trunk" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="brand-full-name">
            <span className="gold-text">CINEMAPAYYAN</span>
            <motion.span 
              className="cyan-inc" 
              animate={{ opacity: [0.4, 1, 0.4] }} 
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              INC
            </motion.span>
          </h1>
          <motion.div 
            className="trunk-spine" 
            initial={{ height: 0 }} 
            animate={{ height: 80 }} 
            transition={{ delay: 1, duration: 0.8 }} 
          />
        </motion.div>

        <div className="branches-wrapper">
          <div className="horizontal-base-line" />
          
          <div className="nodes-container">
            {branches.map((branch, i) => (
              <motion.div key={i} className={`tree-node ${branch.className}`} whileHover="hover">
                <motion.div 
                  className="node-line" 
                  initial={{ height: 0 }} 
                  animate={{ height: 40 }} 
                  transition={{ duration: 0.3 }} 
                />
                
                <motion.div 
                  className="interactive-box" 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: 1.8 + (i * 0.2) }}
                >
                  {branch.isScroll ? (
                    <div 
                      className="node-link" 
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        if (branch.title === "PROMOTIONS") {
                          onScrollRequest?.("workRef");
                        } else if (branch.title === "PRODUCTIONS") {
                          onScrollRequest?.("promotionsRef");
                        }
                      }}
                    >
                      <motion.span variants={{ hover: { letterSpacing: "8px", color: "var(--white)" } }}>
                        {branch.title}
                      </motion.span>
                    </div>
                  ) : (
                    <Link to={branch.path} className="node-link">
                      <motion.span variants={{ hover: { letterSpacing: "8px", color: "var(--white)" } }}>
                        {branch.title}
                      </motion.span>
                    </Link>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- WRAPPER FOR DIRECTOR TAG + SCROLL --- */}
      <div className="hero-footer">
        <motion.div 
          className="hero-director-tag" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2.8 }}
        >
          <p className="credit-label">CINEMA ENTREPRENEUR</p>
          <h2 className="director-name">ABISHEK RAAJA</h2>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          <p className="explore-text">EXPLORE</p>
          <div className="mouse-body">
            <motion.div 
              className="mouse-wheel"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="scroll-line" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;