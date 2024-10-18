/* eslint-disable react/no-unescaped-entities */
import ThemeIcon from "../components/Elements/ThemeIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext } from "react";
import CurrentTime from "../components/Elements/currentTime";
import { DarkMode } from "../contexts/DarkMode";
import CardProfile from "../components/Fragments/CardProfile";
import Navigation from "../components/Fragments/Navigation";
import HeroSection from "../components/Layouts/HeroSection.jsx";
import AboutSection from "../components/Layouts/AboutSection.jsx/index.jsx";
import SkillsSection from "../components/Layouts/SkillsSection.jsx/index.jsx";
import PortfolioSection from "../components/Layouts/PortfolioSection.jsx/index.jsx";
import ContactSection from "../components/Layouts/ContactSection/index.jsx";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const { theme } = useContext(DarkMode);

  return (
    <div className="lg:px-[100px] sm:px-[40px] px-[20px] lg:pr-[400px] ">
      <div className="fixed top-10 right-10">
        <CurrentTime />
      </div>

      <div className="text-center fixed top-10 left-1/2 z-50 lg:block hidden">
        <ThemeIcon />
      </div>

      <Navigation />

      <main
        className={`flex w-full lg:px-[80px] pt-[40px] sm:gap-[30px] gap-[20px] flex-col relative ${
          theme != "black" ? "text-black" : "text-white"
        }`}
      >
        <CardProfile />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default HomePage;
