import { useState, useRef, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, LayoutGrid, Youtube, Play, ArrowRight, Clapperboard } from "lucide-react";
import { Images, VideoAssets } from "./assets/assets";
import "./App.css";

const CreativeProducer = () => {
  const [activeTab, setActiveTab] = useState("images");
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const imagesList = useMemo(() => [
    Images.CreativePr1, Images.CreativePr2, Images.CreativePr3, Images.CreativePr4, Images.CreativePr5
  ], []);

  const reelsList = useMemo(() => [
    VideoAssets.vjPreviews[15], VideoAssets.vjPreviews[16], 
    VideoAssets.vjPreviews[17], VideoAssets.vjPreviews[18]
  ], []);

  const youtubeList = useMemo(() => [
    { 
      id: 1, 
      title: "Madras Matinee Reveal", 
      desc: "Engineered the official digital reveal campaign, generating 500k+ organic impressions.",
      link: "https://youtu.be/iOoRSnCsftQ", 
      preview: VideoAssets.vjPreviews[19],
      tag: "BRAND REVEAL"
    },
    { 
      id: 2, 
      title: "Marketing Strategy", 
      desc: "High-impact precision targeting campaign focusing on regional cinema demographics.",
      link: "https://youtu.be/O_3zIwyqL6s", 
      preview: VideoAssets.vjPreviews[20],
      tag: "DIGITAL STRATEGY"
    },
    { 
      id: 3, 
      title: "Matinee Trailer Drop", 
      desc: "Coordinated cross-platform trailer distribution and hype-cycle management.",
      link: "https://youtu.be/F_LRE9Bfaw0", 
      preview: VideoAssets.vjPreviews[21],
      tag: "PROMO DROP"
    },
  ], []);

  const currentList = activeTab === "images" ? imagesList : activeTab === "reels" ? reelsList : youtubeList;

  // Track scroll position for dots (Mobile only)
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (offsetWidth * 0.75));
      setScrollIndex(index);
    }
  };

  // Reset scroll when tab changes
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    setScrollIndex(0);
  }, [activeTab]);

  return (
    <section className="creative-producer-section">
      <div className="producer-standard-container">
        
        {/* HEADER SECTION */}
        <div className="producer-header-row">
          <h2 className="section-title-responsive">
            <div className="header-top-line">
              <Clapperboard className="yellow-clapper" size={28} />
              <span className="small-the">THE CREATIVE</span>
            </div>
            <span className="large-producer">PRODUCER</span>
          </h2>
        </div>

        {/* FEATURE CARD */}
        <div className="producer-feature-card">
          <div className="producer-image-side">
            <img src={Images.madras} alt="Madras Motion Pictures" className="producer-main-img" />
            <a href="https://www.instagram.com/madrasmotionpictures/" target="_blank" rel="noreferrer" className="insta-overlay-link">
                <Instagram size={20} />
            </a>
          </div>

          <div className="producer-content-side">
            <span className="debut-tag">DIGITAL ARCHITECT</span>
            <h3 className="movie-title bebas-font">TURNING FRAMES INTO FAME</h3>
            <p className="flick-type">Campaign Strategy • Content Curation • Growth</p>
            
            <div className="producer-description-area">
              <p className="intro-text-clean">
                I specialize in engineering the digital heartbeat of modern cinema. I execute high-stakes "Reveal Campaigns" that transform raw 
                cinematic footage into <span className="gold-text-bold">unavoidable content</span>.
              </p>
            </div>

            <a href="https://www.instagram.com/madrasmotionpictures/" target="_blank" rel="noreferrer" className="view-project-btn">
              Visit Instagram <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* MEDIA SECTION */}
        <div className="promo-tabs-wrapper">
          <div className="tabs-navigation">
            {['images', 'reels', 'youtube'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)} 
                className={activeTab === tab ? "active-gold" : ""}
              >
                {tab === 'images' && <LayoutGrid size={14} />}
                {tab === 'reels' && <Instagram size={14} />}
                {tab === 'youtube' && <Youtube size={14} />}
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="responsive-media-wrapper" ref={scrollRef} onScroll={handleScroll}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`grid-contents-wrapper grid-${activeTab}`}
              >
                {activeTab === "images" && imagesList.map((img, i) => (
                  <div key={`img-${i}`} className="media-item poster-item">
                    <img src={img} alt="Work" loading="lazy" />
                  </div>
                ))}

                {activeTab === "reels" && reelsList.map((reel, i) => (
                  <div key={`reel-${i}`} className="media-item reel-item">
                    <div className="reel-frame">
                      <video src={reel} muted loop autoPlay playsInline />
                      <div className="reel-tag-gold">REEL</div>
                    </div>
                  </div>
                ))}

                {activeTab === "youtube" && youtubeList.map((yt) => (
                  <div key={yt.id} className="media-item youtube-item">
                    <div className="yt-card">
                      <div className="yt-video-box">
                        <video src={yt.preview} muted loop autoPlay playsInline />
                        <a href={yt.link} target="_blank" rel="noreferrer" className="yt-play-btn">
                          <Play size={24} fill="currentColor"/>
                        </a>
                      </div>
                      <div className="yt-info">
                        <span className="yt-tag-gold">{yt.tag}</span>
                        <h5 className="yt-title-bebas">{yt.title}</h5>
                        <p className="yt-description-text">{yt.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DOTS: ONLY VISIBLE VIA MEDIA QUERY (SCSS/CSS) */}
          <div className="slider-dots-container">
            {currentList.map((_, i) => (
              <span key={i} className={`dot ${scrollIndex === i ? "active" : ""}`}></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeProducer;