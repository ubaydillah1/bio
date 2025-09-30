/* eslint-disable react/prop-types */
import { useContext } from "react";
import Badge from "../../Elements/Badge";
import { DarkMode } from "../../../contexts/DarkMode";
import CircleProject from "../../Elements/CircleProject";

const HeroSection = (props) => {
  const { onClickToProject } = props;

  const { theme } = useContext(DarkMode);
  return (
    <section className="max-w-[850px] lg:ml-[300px] w-full" id="hero">
      <Badge className="lg:my-10 my-5 px-3 gap-2">
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

      <div className="lg:text-[72px] lg:leading-[90px] flex flex-col sm:text-[56px] text-[37px] sm:leading-[64px]">
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

        <span>
          <span
            className={`${
              theme == "black" ? "text-primary-dark" : "text-primary-light"
            }`}
          >
            Fullstack
          </span>{" "}
          Developer and AI Enthusiast
        </span>
      </div>

      <p
        className={`text-xl lg:my-8 my-6 lg:flex lg:flex-col ${
          theme == "black" ? "text-[#999999]" : "text-slate-500"
        }`}
      >
        I craft user-friendly web experiences that combine clean design with
        <span>smooth functionality.</span>
      </p>

      <div className="w-full h-full flex lg:justify-end">
        <CircleProject onClickToProject={onClickToProject} />
      </div>
    </section>
  );
};

export default HeroSection;
