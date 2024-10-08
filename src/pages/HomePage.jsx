import ThemeIcon from "../components/Elements/ThemeIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext } from "react";
import CurrentTime from "../components/Elements/currentTime";
import { DarkMode } from "../contexts/DarkMode";
import mySelf from "../assets/img/mySelf.webp";
import Button from "../components/Elements/Button";
import Badge from "../components/Elements/Badge";

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
        <div
          className={`bio-card border-[0.001px]  max-w-[350px] w-full px-8 py-7 rounded-[30px] fixed left-[80px] ${
            theme == "black" ? "border-[#FFFFFF66]" : "border-black"
          }`}
        >
          <div className="flex justify-between">
            <p className="font-bold text-3xl">UBAY</p>
            <div className="text-end text-sm font-medium">
              <p>Front End Developer &</p>
              <p>Blockchain Enthusiast</p>
            </div>
          </div>

          <div className="mt-7  w-full">
            <img
              src={mySelf}
              alt="mySelf"
              className="rounded-[30px] object-cover  w-[270px] h-[230px] mx-auto"
            />
          </div>

          <div className="text-center font-medium mt-5">
            <p>ubaydillah1737@gmail.com</p>
            <p className="text-xl mt-1">Base in Jakarta, ID</p>

            <div className="flex justify-center my-7 gap-4">
              <div className="w-[47px] h-[47px] rounded-full bg-green-500"></div>
              <div className="w-[47px] h-[47px] rounded-full bg-green-500"></div>
              <div className="w-[47px] h-[47px] rounded-full bg-green-500"></div>
            </div>

            <div>
              <Button>WORK WITH ME</Button>
            </div>

            <p
              className={`text-sm mt-7 w-[90%] mx-auto ${
                theme == "dark" && "text-slate-500"
              }`}
            >
              © 2024 Ubay Dillah. All Rights Reserved
            </p>
          </div>
        </div>

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
