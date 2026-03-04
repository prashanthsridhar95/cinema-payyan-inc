import { Mic2, Instagram, Youtube, ExternalLink } from "lucide-react";
import { Images, VideoAssets } from "./assets/assets";
import "./App.css";

const Host = () => {
  return (
    <section className="work-section host-section">
      <div className="work-container">
        {/* 1. SECTION HEADER */}
        <div className="section-header host-title-row">
          <h2 className="display-flex-align">
            <Mic2 className="gold-text icon-margin" size={32} />
            THE <span className="gold-text">HOST</span>
          </h2>
        </div>

        {/* 2. MAIN FEATURED BANNER */}
        <div className="host-main-banner">
          <img
            src={Images.NeeyaoliHost}
            alt="Host Header"
            className="host-banner-img"
          />
          <div className="host-banner-overlay">
            <div className="banner-text-content">
              <span className="badge">FEATURED EVENT</span>
              <h3 className="bebas-font">NEEYE OLI 2024</h3>
            </div>
          </div>
        </div>

        {/* 3. PROJECT DESCRIPTIONS GRID */}
        <div className="host-project-grid">
          {/* Project 1: Music Santhosh (Video 13) */}
          <div className="host-project-card">
            <div className="vj-preview-box host-vj-box">
              <video
                src={VideoAssets.vjPreviews[13]}
                muted
                loop
                playsInline
                autoPlay
                className="vj-hover-video"
              />
              <div className="vj-overlay">
                <a
                  href="https://youtu.be/OpIYkWJ_rws?si=T0gC2JCt6jA4vter"
                  className="vj-play-link"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="project-details">
              <h4 className="project-title">
                International Standards: Chiyaan Vikram{" "}
              </h4>

              <p className="project-description">
                <strong>@the_real_chiyaan</strong> operates on an unprecedented
                level of craft, often drawing comparisons to global icons like
                Christian Bale. His dedication to character transformation is
                significantly underrated, and he deserves the highest pedestal
                for his consistent efforts in elevating Tamil cinema to
                international standards.
                <br />
                <br />
                <span className="credit-line">
                  Hosted by: <strong>@abishek_raaja</strong> <br />
                  Feature: <strong>Tribute to Excellence</strong>
                </span>
              </p>
            </div>
          </div>

          {/* Project 2: Chiyaan Vikram (Video 14) */}
          <div className="host-project-card">
            <div className="vj-preview-box host-vj-box">
              <video
                src={VideoAssets.vjPreviews[14]}
                muted
                loop
                playsInline
                autoPlay
                className="vj-hover-video"
              />
              <div className="vj-overlay">
                <a
                  href="https://www.instagram.com/reel/C01jVyrCb9F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  className="vj-play-link"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="project-details">
              <h4 className="project-title">Concert Curation: Neeye Oli</h4>

              <p className="project-description">
                A significant milestone in my hosting career was the opportunity
                to name and present this grand concert. It was a privilege to
                contribute to the creative vision of
                <strong> @musicsanthosh</strong>, brought to life through a
                seamless collaboration with{" "}
                <strong>@directedbykenroyson</strong> and their dedicated
                production team.
                <br />
                <br />
                <span className="credit-line">
                  Hosted by: <strong>@abishek_raaja</strong> <br />
                  Venue: <strong>Nehru Outdoor Stadium</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Host;
