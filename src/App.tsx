import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Images } from "./assets/assets";
import "./App.css";
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

function App() {
  const [offset, setOffset] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection, refs } = useScrollTo();

  const repoBasename = "/cinima-payan-inc";

  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    // Lock scroll when menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleScrollRequest = (target: any) => {
    setIsMenuOpen(false); // Close menu on navigation
    scrollToSection(target);
  };

  return (
    <Router basename={repoBasename}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* --- YELLOW HAMBURGER BURGER --- */}
              <div 
                className={`mobile-burger-trigger ${isMenuOpen ? 'active' : ''}`} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
              </div>

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
                <div className="cinenaPaitanBanner" style={{ backgroundImage: `url(${Images.banner})`, "--scroll-offset": `${offset}px` } as any}>
                  <div className="banner-overlay"></div>
                </div>
              </div>

              <section id="about" ref={refs.aboutRef}><About /></section>
              <AboutWork />
              <Filmcritic />
              <Host />
              <Director />
              
              <section id="promotions" ref={refs.promotionsRef}>
                <CreativeProducer />
              </section>

              <Accelerator />
              <section id="work" ref={refs.workRef}><Work /></section>
              <ProductionLogo />
              <Comic />
              <ShortsPromotion />
              <ShadowPromotion />
              <section id="contact" ref={refs.contactRef}><Contact /></section>
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