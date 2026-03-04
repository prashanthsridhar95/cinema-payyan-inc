import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Mic2, Film, Tv, ExternalLink, Zap } from "lucide-react";
import { Images, VideoAssets } from "./assets/assets";
import "./App.css";

const AboutWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const vjVideos = [
    {
      id: 1,
      title: "Anirudh Ravichander",
      link: "https://youtu.be/dESRRC-uVME",
      preview: VideoAssets.vjPreviews[0],
      thumb: Images.Munai1,
    },
    {
      id: 2,
      title: "Venkat Prabhu",
      link: "https://youtu.be/lAH_99cCcos?si=GtlnhQydVJNfRBop",
      preview: VideoAssets.vjPreviews[1],
      thumb: Images.Munai2,
    },
    {
      id: 3,
      title: "Silambarasan TR",
      link: "https://youtu.be/GKHk7d_bQh0?si=h-8nwdu3qtytPPCV",
      preview: VideoAssets.vjPreviews[2],
      thumb: Images.Munai3,
    },
    {
      id: 4,
      title: "Vijay Sethupathi",
      link: "https://youtu.be/77oGSFHYzSY?si=dumaevinjdTtEVX6",
      preview: VideoAssets.vjPreviews[3],
      thumb: Images.Munai4,
    },
    {
      id: 5,
      title: "Arjun DAS",
      link: "https://youtu.be/fEpt5b794ys?si=9r3yKH1OSU5di5ag",
      preview: VideoAssets.vjPreviews[4],
      thumb: Images.Munai5,
    },
    {
      id: 6,
      title: "T. Kumararaja",
      link: "https://youtu.be/BBnY5tE7-Wo?si=DV1P17OplHXoo0DE",
      preview: VideoAssets.vjPreviews[5],
      thumb: Images.Munai6,
    },
    {
      id: 7,
      title: "Kamal Haasan",
      link: "https://youtube.com/link7",
      preview: VideoAssets.vjPreviews[6],
      thumb: Images.Munai7,
    },
    {
      id: 8,
      title: "Dulquer Salmaan",
      link: "https://youtu.be/JzsDo_hf5cg?si=kpsF9KLqm0cfFIdq",
      preview: VideoAssets.vjPreviews[7],
      thumb: Images.Munai8,
    },
    {
      id: 9,
      title: "GVM",
      link: "https://youtu.be/hKbP91H0_Do?si=T2FJcb3BiPK9lrYk",
      preview: VideoAssets.vjPreviews[8],
      thumb: Images.Munai9,
    },
    {
      id: 10,
      title: "Ashok Selvan",
      link: "https://youtu.be/uXQOlL7EjzA?si=GYx6_KE1WFmjQXz_",
      preview: VideoAssets.vjPreviews[9],
      thumb: Images.Munai9,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videos = entry.target.querySelectorAll("video");
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
    <section id="production" className="work-section" ref={sectionRef}>
      <div className="work-container">
        {/* VJ SECTION WITH 10 VIDEOS */}
        <div className="work-block">
          <div className="section-header">
            <Tv className="gold-text" size={28} />
            <h2>
              VJ <span className="gold-text">SESSIONS</span>
            </h2>
          </div>

          <div className="vj-slider-container">
            {vjVideos.map((video) => (
              <div key={video.id} className="vj-slide-card">
                <div className="vj-preview-box">
                  <video
                    className="vj-hover-video"
                    src={video.preview}
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noreferrer"
                    className="vj-play-link"
                  >
                    <Play fill="black" size={20} />
                  </a>
                </div>
                <div className="vj-slide-info">
                  <span>SESSION 0{video.id}</span>
                  <h4>{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RJ SECTION */}
        {/* RJ SECTION - SINGLE BOX */}
        <div className="work-block" style={{ marginTop: "80px" }}>
          <div className="section-header">
            <Mic2 className="cyan-text" size={28} />
            <h2>
              RJ <span className="cyan-text">ARCHIVES</span>
            </h2>
          </div>

          <div className="rj-single-container">
            <motion.a
              href="https://soundcloud.com/rj-abishek/i-dont-like-my-mother?fbclid=IwY2xjawQQPulleHR
              uA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeUNYmed8CEEPxCbL7E67UYkFe8IjlRo_zpku
              rioi3LgWlY60f1Oz9zkPA9c0_aem_Z7k4dW1CcthfsPut3E8DSA"
              target="_blank"
              rel="noreferrer"
              className="rj-mini-box single-box"
              whileHover={{ scale: 1.02 }}
            >
              <img src={Images.AbishakeAudio} alt="RJ Archive Highlights" />
              <div className="rj-mini-overlay">
                <ExternalLink size={24} />
                <span style={{ marginTop: "10px" }}>
                  LISTEN TO ALL EPISODES
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWork;
