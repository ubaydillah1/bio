"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useRef } from "react";
import { useLenis } from "lenis/react";
import { DarkMode } from "../contexts/DarkMode";
import CardProfile from "../components/Fragments/CardProfile";
import Navigation from "../components/Fragments/Navigation";
import HeroSection from "../components/Layouts/HeroSection.jsx";
import AboutSection from "../components/Layouts/AboutSection.jsx";
import SkillsSection from "../components/Layouts/SkillsSection.jsx";
import PortfolioSection from "../components/Layouts/PortfolioSection.jsx";
import ContactSection from "../components/Layouts/ContactSection/index.jsx";
import ResumeSection from "../components/Layouts/ResumeSection/index.jsx";

gsap.registerPlugin(ScrollTrigger);

function HomePage({ locale = "en" }) {
  const { theme } = useContext(DarkMode);
  const lenis = useLenis();

  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);

  const scrollToSection = (ref, id) => {
    if (ref?.current) {
      window.history.pushState(null, "", `#${id}`);

      if (lenis) {
        lenis.scrollTo(ref.current);
        return;
      }

      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleToContact = () => {
    scrollToSection(contactRef, "contact");
  };

  const handleToProject = () => {
    scrollToSection(portfolioRef, "portfolio");
  };

  return (
    <div className="lg:px-[100px] sm:px-[40px] px-[20px] lg:pr-[400px] ">
      <Navigation
        scrollToSection={scrollToSection}
        sections={{
          hero: heroRef,
          about: aboutRef,
          skills: skillsRef,
          portfolio: portfolioRef,
          contact: contactRef,
          resume: resumeRef,
        }}
      />

      <main
        className={`flex w-full lg:px-[80px] pt-[40px] sm:gap-[30px] gap-[20px] flex-col relative ${
          theme != "black" ? "text-[#2f241a]" : "text-white"
        }`}
      >
        <CardProfile onClickToContact={handleToContact} />
        <div ref={heroRef} id="hero" className="scroll-mt-8">
          <HeroSection onClickToProject={handleToProject} />
        </div>
        <div ref={aboutRef} id="about" className="scroll-mt-8">
          <AboutSection />
        </div>
        <div ref={resumeRef} id="resume" className="scroll-mt-8">
          <ResumeSection />
        </div>
        <div ref={skillsRef} id="skills" className="scroll-mt-8">
          <SkillsSection />
        </div>
        <div ref={portfolioRef} id="portfolio" className="scroll-mt-8">
          <PortfolioSection locale={locale} />
        </div>

        <div ref={contactRef} id="contact" className="scroll-mt-8">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
