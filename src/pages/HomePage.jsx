import ThemeIcon from "../components/Elements/ThemeIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {} from "react";
import CurrentTime from "../components/Elements/currentTime";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  return (
    <div className="mb-[1000px] px-[100px]">
      <div className="fixed top-10 right-10">
        <CurrentTime />
      </div>

      <div className="text-center fixed top-10 left-1/2">
        <ThemeIcon />
      </div>

      <main>
        <div className="bio-card"></div>
      </main>
    </div>
  );
}

export default HomePage;
