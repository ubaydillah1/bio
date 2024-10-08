import ThemeIcon from "../components/Elements/ThemeIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext } from "react";
import CurrentTime from "../components/Elements/currentTime";
import { DarkMode } from "../contexts/DarkMode";
import Badge from "../components/Elements/Badge";
import CardProfile from "../components/Fragments/CardProfile";

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

      <main
        className={`flex w-full px-[80px] pt-[40px] gap-[45px] relative ${
          theme != "black" && "text-black"
        }`}
      >
        <CardProfile />

        <nav
          className={`fixed right-40 top-52 border-[.1px] rounded-full px-7 py-5 flex flex-col gap-10 ${
            theme == "black" ? "border-[#FFFFFF66]" : "border-black"
          }`}
        >
          <div>Home</div>
          <div>Person</div>
          <div>Bag</div>
          <div>Setting</div>
          <div>Contact</div>
        </nav>

        <section className="max-w-[800px] ml-[300px]">
          <Badge className="my-10">🚀 INTRODUCE</Badge>

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
