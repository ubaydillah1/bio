import ThemeIcon from "../components/Elements/ThemeIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext } from "react";
import CurrentTime from "../components/Elements/currentTime";
import { DarkMode } from "../contexts/DarkMode";
import Badge from "../components/Elements/Badge";
import CardProfile from "../components/Fragments/CardProfile";
import Navigation from "../components/Fragments/Navigation";
import HeroSection from "../components/Layouts/HeroSection.jsx";
import AboutSection from "../components/Layouts/AboutSection.jsx/index.jsx";

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

        <section className="max-w-[800px] md:ml-[300px] w-full mt-[40px]">
          <Badge className="md:my-10 my-5 px-3 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={theme === "black" ? "white" : "black"}
              viewBox="0 0 256 256"
            >
              <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
            </svg>
            SKILLS
          </Badge>

          <div className="sm:text-[48px] text-[37px]">
            Every Design Starts with a Vision, Every Vision{" "}
            <span
              className={
                theme == "black" ? "text-primary-dark" : "text-primary-light"
              }
            >
              Tells a Story
            </span>
          </div>

          <p
            className={`text-xl md:my-8 my-6 md:flex md:flex-col ${
              theme == "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            Since starting my journey as a fullstack developer after graduating
            from Harisenin.com bootcamp, I’ve worked on personal projects and
            collaborated with talented individuals in developing digital
            products. Although I don’t have extensive professional experience
            yet, I’m constantly honing my skills and knowledge in building
            digital solutions for both business and consumer needs. I am quietly
            confident, naturally curious, and always working on improving my
            coding skills, one problem at a time.
          </p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
