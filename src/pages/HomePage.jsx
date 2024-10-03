import ThemeIcon from "../components/Elements/ThemeIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const themeIconRef = useRef(null);

  console.log(themeIconRef.current);
  useEffect(() => {
    gsap.to(themeIconRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: themeIconRef.current,
        start: "top 20%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });
  }, []);
  return (
    <div className="">
      <nav className="text-center my-[1000px]">
        <div ref={themeIconRef}>
          <ThemeIcon />
        </div>
      </nav>

      <main></main>
    </div>
  );
}

export default HomePage;
