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

        <section className="max-w-[800px] ml-[300px]">
          <Badge className="my-10 px-3 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="20px"
              className={theme === "black" ? "fill-white" : "fill-black"}
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
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
        </section>
      </main>
    </div>
  );
}

export default HomePage;
