import ThemeIcon from "../components/Elements/ThemeIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useRef } from "react";
import CurrentTime from "../components/Elements/currentTime";
import { DarkMode } from "../contexts/DarkMode";
import CardProfile from "../components/Fragments/CardProfile";
import Navigation from "../components/Fragments/Navigation";
import HeroSection from "../components/Layouts/HeroSection.jsx";
import AboutSection from "../components/Layouts/AboutSection.jsx";
import SkillsSection from "../components/Layouts/SkillsSection.jsx";
import PortfolioSection from "../components/Layouts/PortfolioSection.jsx";
import ContactSection from "../components/Layouts/ContactSection/index.jsx";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const { theme } = useContext(DarkMode);

  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });

    console.log("hello");
  };

  const handleToProject = () => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });

    console.log("hello");
  };

  return (
    <div className="lg:px-[100px] sm:px-[40px] px-[20px] lg:pr-[400px] ">
      <div className="fixed top-10 right-10">
        <CurrentTime />
      </div>

      <div className="text-center fixed top-10 left-1/2 z-50 lg:block hidden">
        <ThemeIcon />
      </div>

      <Navigation
        scrollToSection={scrollToSection}
        sections={{
          hero: heroRef,
          about: aboutRef,
          skills: skillsRef,
          portfolio: portfolioRef,
          contact: contactRef,
        }}
      />

      <main
        className={`flex w-full lg:px-[80px] pt-[40px] sm:gap-[30px] gap-[20px] flex-col relative ${
          theme != "black" ? "text-black" : "text-white"
        }`}
      >
        <CardProfile onClickToContact={handleToContact} />
        <div ref={heroRef}>
          <HeroSection onClickToProject={handleToProject} />
        </div>
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <div ref={skillsRef}>
          <SkillsSection />
        </div>
        <div ref={portfolioRef}>
          <PortfolioSection />
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
