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
import Badge from "../components/Elements/Badge/index.jsx";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const { theme } = useContext(DarkMode);

  return (
    <div className="mb-[1000px] md:px-[100px] sm:px-[40px] px-[20px]">
      <div className="fixed top-10 right-10">
        <CurrentTime />
      </div>

      <div className="text-center fixed top-10 left-1/2 z-50">
        <ThemeIcon />
      </div>

      <Navigation />

      <main
        className={`flex w-full md:px-[80px] pt-[40px] sm:gap-[30px] gap-[20px] flex-col relative ${
          theme != "black" ? "text-black" : "text-white"
        }`}
      >
        <CardProfile />
        <HeroSection />
        <AboutSection />
        <SkillsSection />

        <section className="max-w-[850px] md:ml-[300px] w-full mt-[40px]">
          <Badge className="md:my-10 my-5 px-3 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="fill-white"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,50.32a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32-11.31l56-56A8,8,0,0,1,205.66,50.32ZM248,58.41a50.13,50.13,0,0,1-14.77,35.66L180,147.3A15.86,15.86,0,0,1,168.69,152H152v16.83a16,16,0,0,1-3.25,9.66,8.08,8.08,0,0,1-.72.83l-8,8a16,16,0,0,1-22.62,0L98.7,168.6l-77,77.06a8,8,0,0,1-11.32-11.32l77.05-77.05-18.7-18.71a16,16,0,0,1,0-22.63l8-8a8,8,0,0,1,.82-.72A16.14,16.14,0,0,1,87.17,104H104V87.3A15.92,15.92,0,0,1,108.68,76l53.24-53.23A50.43,50.43,0,0,1,248,58.41Zm-16,0a34.43,34.43,0,0,0-58.77-24.35L120,87.3V104a16,16,0,0,1-16,16H87.28L80,127.27,128.72,176l7.28-7.28V152a16,16,0,0,1,16-16h16.69l53.23-53.24A34.21,34.21,0,0,0,232,58.41Z"></path>
            </svg>
            PORTFOLIO
          </Badge>

          <div className="sm:text-[48px] text-[37px] md:max-w-[800px]">
            Featured{"  "}
            <span
              className={
                theme == "black" ? "text-primary-dark" : "text-primary-light"
              }
            >
              Portfolios
            </span>
          </div>

          <div className="my-[40px] flex flex-col gap-[40px]">
            <div className="w-full h-full relative">
              <div className="w-full h-full rounded-[20px] overflow-hidden relative">
                <video src="./assets/video/bgVideo.mp4" loop muted />

                <img
                  src="./assets/img/videoBelajar.png"
                  alt="Video Belajar"
                  className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-3/4"
                />
              </div>

              <p className="mt-5 text-[24px]">
                Video Belajar - CRUD with Redux
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
