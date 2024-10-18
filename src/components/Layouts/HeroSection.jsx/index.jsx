import { useContext } from "react";
import Badge from "../../Elements/Badge";
import { DarkMode } from "../../../contexts/DarkMode";
import CircleProject from "../../Elements/CircleProject";

const HeroSection = () => {
  const { theme } = useContext(DarkMode);
  return (
    <section className="max-w-[800px] md:ml-[300px] w-full">
      <Badge className="md:my-10 my-5 px-3 gap-2">
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

      <div className="md:text-[72px] md:leading-[90px] flex flex-col sm:text-[56px] text-[37px] sm:leading-[64px]">
        <span>
          Say Hi from{" "}
          <span
            className={`${
              theme == "black" ? "text-primary-dark" : "text-primary-light"
            }`}
          >
            Ubay,
          </span>{" "}
        </span>

        <span>Front End Developer and Blockchain Enthusiast</span>
      </div>

      <p
        className={`text-xl md:my-8 my-6 md:flex md:flex-col ${
          theme == "black" ? "text-[#999999]" : "text-slate-500"
        }`}
      >
        I develop intuitive designs that enhance user engagement.{" "}
        <span>Simple as that!</span>
      </p>

      <div className="w-full h-full flex md:justify-end">
        <CircleProject />
      </div>
    </section>
  );
};

export default HeroSection;
