import ThemeIcon from "../components/Elements/ThemeIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext } from "react";
import CurrentTime from "../components/Elements/currentTime";
import { DarkMode } from "../contexts/DarkMode";
import Badge from "../components/Elements/Badge";
import CardProfile from "../components/Fragments/CardProfile";
import Navigation from "../components/Fragments/Navigation";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const { theme } = useContext(DarkMode);

  return (
    <div className="mb-[1000px] px-[100px]">
      <div className="fixed top-10 right-10">
        <CurrentTime />
      </div>

      <div className="text-center fixed top-10 left-1/2 z-50">
        <ThemeIcon />
      </div>

      <Navigation />

      <main
        className={`flex w-full px-[80px] pt-[40px] gap-[45px] relative ${
          theme != "black" && "text-black"
        }`}
      >
        <CardProfile />

        <section className="max-w-[800px] ml-[300px] w-full">
          <Badge className="my-10 px-3 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className={`${theme == "black" ? "fill-white" : "fill-black"}`}
              viewBox="0 0 256 256"
            >
              <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>
            </svg>
            INTRODUCE
          </Badge>

          <div className="text-[72px] leading-[90px]">
            Say Hi from{" "}
            <span
              className={`${
                theme == "black" ? "text-primary-dark" : "text-primary-light"
              }`}
            >
              Ubay
            </span>
            , <br />
            Front End Developer and <br />
            Blockchain Enthusiast
          </div>

          <p
            className={`text-xl mt-8  ${
              theme == "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            I develop intuitive designs that enhance user engagement. <br />
            Simple as that!
          </p>

          <div className="w-full h-full flex justify-end">
            <div className="relative h-[165px]">
              <div className="w-[165px] h-[165px] rounded-full border border-[#999999]">
                <p>My Projects</p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="#fff"
                viewBox="0 0 256 256"
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
              >
                <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
