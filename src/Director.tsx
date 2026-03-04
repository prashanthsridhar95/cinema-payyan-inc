import { motion } from "framer-motion";
import { Clapperboard, ExternalLink, Instagram } from "lucide-react";
import { Images } from "./assets/assets";
import "./App.css";

const Director = () => {
  return (
    <section className="work-section director-section">
      <div className="work-container">
        {/* 1. Header with Icon at the Start */}
        <div className="host-title-row">
          <h2 className="display-flex-align">
            <Clapperboard className="gold-text icon-margin" size={32} />
            THE <span className="gold-text">DIRECTOR</span>
          </h2>
        </div>

        {/* 2. Directorial Debut Feature */}
        <div className="director-feature-card">
          <div className="director-image-side">
            <img
              src={Images.JaamJaam || Images.openpanna}
              alt="Jaam Jaam Movie"
              className="director-main-img"
            />
            <a
              target="_blank"
              className="insta-overlay-link"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="director-content-side">
            <div className="debut-tag">DIRECTORIAL DEBUT</div>
            <h3 className="bebas-font movie-title">
              JAAM <span className="gold-text">JAAM</span>
            </h3>
            <p className="flick-type">A rom - காமம் Flick !</p>

            <div className="director-description-area">
              <p className="insta-text">
                My directorial debut with the esteemed{" "}
                <strong>@axess_filmfactory</strong> 💥
                <br />
                <br />
                Working alongside a stellar team to bring this vision to life.
                Grateful for the support of{" "}
                <strong>@dillibabugovindaraj</strong> and the entire crew.
              </p>

              <div className="crew-tags">
                <span>@abhinavsnayak</span> <span>@thenieswar_dop</span>
                <span>@naan__pradeep</span> <span>@navaa_rajkumar</span>
                <span>@valentino_suren</span> <span>@kvdurai</span>
                <span>@tuneyjohn</span> <span>@donechannel1</span>
                <span>@decoffl</span>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/p/C3XNjxgIdgo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" // Replace with your actual post link
              target="_blank"
              rel="noopener noreferrer"
              className="view-project-btn"
            >
              View Project Details <Instagram size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;
