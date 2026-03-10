import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Images } from "./assets/assets";
import Header from "./Header";
import Hero from "./Hero";
import Logo from "./Logo";
import { useScrollTo } from "./useScrollTo";
import About from "./About";
import Work from "./Work";
import ProductionLogo from "./ProductionLogo";
import Comic from "./Comic";
import ShortsPromotion from "./ShortsPromotion";
import ShadowPromotion from "./ShadowPromotion";
import Contact from "./Contact";
import Footer from "./Footer";
import Munai from "./Munai";
import AboutWork from "./VjSession";
import Filmcritic from "./openpannaa";
import Host from "./Host";
import Director from "./Director";
import CreativeProducer from "./CreativeProducer";
import Accelerator from "./Accelerator";
import SectionDivider from "./Sectiondivider";
import CinemaNavigator from "./RotaryNavigator"; // ← same filename as before

function App() {
  const [offset, setOffset] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { scrollToSection, refs } = useScrollTo();
  const repoBasename = "/cinima-payan-inc";

  useEffect(() => {
    let ticking = false;
    const h = (): void => {
      if (!isMenuOpen && !ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setOffset(window.pageYOffset);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleScrollRequest = (target: any): void => {
    setIsMenuOpen(false);
    scrollToSection(target);
  };

  return (
    <Router basename={repoBasename}>
      <style>{`
        .cinenaPaitanBanner {
          background-attachment: scroll !important;
          will-change: transform;
        }
      `}</style>

      <CinemaNavigator refs={refs} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="App" id="home" ref={refs.homeRef}>
                <Header
                  onScrollRequest={handleScrollRequest}
                  refs={refs}
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                <Logo />
                <Hero onScrollRequest={handleScrollRequest} />
              </div>

              <div className="container1">
                <div
                  className="cinenaPaitanBanner"
                  style={{
                    backgroundImage: `url(${Images.banner})`,
                    "--scroll-offset": `${offset}px`,
                  } as any}
                >
                  <div className="banner-overlay" />
                </div>
              </div>

              <SectionDivider variant="timecode" label="CUT TO — ABOUT" index={1} />
              <section id="about" ref={refs.aboutRef}>
                <About />
              </section>

              <SectionDivider variant="filmstrip" label="VJ SESSION" />
              <section id="vjsession">
                <AboutWork />
              </section>

              <SectionDivider variant="slash" label="OPEN PANNAA" index={3} />
              <section id="openpannaa">
                <Filmcritic />
              </section>

              <SectionDivider variant="reel" label="HOST" />
              <section id="host">
                <Host />
              </section>

              <SectionDivider variant="scanline" label="DIRECTOR" index={5} />
              <section id="director">
                <Director />
              </section>

              <SectionDivider variant="marquee" label="CINEMAPAYYAN • CREATIVE PRODUCER" />
              <section id="producer" ref={refs.promotionsRef}>
                <CreativeProducer />
              </section>

              <SectionDivider variant="timecode" label="THE ACCELERATOR" index={7} />
              <section id="accelerator">
                <Accelerator />
              </section>

              <SectionDivider variant="filmstrip" label="FINISHED PROJECTS" />
              <section id="work" ref={refs.workRef}>
                <Work />
              </section>

              <SectionDivider variant="slash" label="TIE-UP PARTNERS" index={9} />
              <section id="partners">
                <ProductionLogo />
              </section>

              <SectionDivider variant="reel" label="RETRO BTS COMIC" />
              <section id="comic">
                <Comic />
              </section>

              <SectionDivider variant="scanline" label="SHORTS PROMOTION" index={11} />
              <section id="shorts">
                <ShortsPromotion />
              </section>

              <SectionDivider variant="marquee" label="SHADOW PROMOTION" />
              <section id="shadow">
                <ShadowPromotion />
              </section>

              <SectionDivider variant="timecode" label="BOOK A SESSION" index={13} />
              <section id="contact" ref={refs.contactRef}>
                <Contact />
              </section>

              <SectionDivider variant="slash" label="FIN" index={14} />
              <Footer />
            </>
          }
        />
        <Route path="/munai" element={<Munai />} />
      </Routes>
    </Router>
  );
}

export default App;