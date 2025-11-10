/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Button from "../../Elements/Button";
import { DarkMode } from "../../../contexts/DarkMode";

const CardProfile = (props) => {
  const { onClickToContact } = props;
  const { theme } = useContext(DarkMode);

  const [isGithubHover, setIsGithubHover] = useState(false);
  const [isLikedinHover, setIslinkedinHover] = useState(false);

  const toggleGithub = () => {
    setIsGithubHover(!isGithubHover);
  };

  const toggleLinkedin = () => {
    setIslinkedinHover(!isLikedinHover);
  };

  const borderColor = (bool) => {
    return bool
      ? theme === "black"
        ? "border-primary-dark"
        : "border-primary-light"
      : theme === "black"
      ? "border-[#999]"
      : "border-[#64748b]";
  };

  const fillStroke = (bool) => {
    return bool
      ? theme === "black"
        ? "#28e98c"
        : "#007aff"
      : theme === "black"
      ? "#94a3b8"
      : "black";
  };

  return (
    <div
      className={`bio-card border-[1px] lg:max-w-[350px] w-full px-8 py-7 rounded-[30px] lg:fixed sticky lg:left-[80px] ${
        theme == "black" ? "border-[#FFFFFF66]" : "border-black"
      }`}
    >
      <div className="flex justify-between">
        <p className="font-bold text-3xl">UBAY</p>
        <div className="text-end text-sm font-medium">
          <p>Full Developer &</p>
          <p>AI Enthusiast</p>
        </div>
      </div>

      <div className="mt-7 w-full px-[10px]">
        <img
          src="./assets/img/mySelf.webp"
          alt="mySelf"
          className="rounded-[30px] object-cover h-full w-full mx-aut lg:max-h-[230px]"
        />
      </div>

      <div className="text-center font-medium mt-5">
        <p>ubaydillah1737@gmail.com</p>
        <p className="text-xl mt-1">Base in Jakarta, ID</p>

        <div className="flex justify-center my-7 gap-4">
          <a
            href="https://github.com/ubaydillah1"
            className={`w-[47px] h-[47px] rounded-full border-[1.6px] transition-all duration-300 ${borderColor(
              isGithubHover
            )} cursor-pointer flex justify-center items-center`}
            onMouseEnter={toggleGithub}
            onMouseLeave={toggleGithub}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={fillStroke(isGithubHover)}
              className="transition-all duration-300"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ubay-dillah/"
            className={`w-[47px] h-[47px] rounded-full border-[1.6px] transition-all duration-300 ${borderColor(
              isLikedinHover
            )}  cursor-pointer flex justify-center items-center`}
            onMouseEnter={toggleLinkedin}
            onMouseLeave={toggleLinkedin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={fillStroke(isLikedinHover)}
              className="transition-all duration-300"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>

        <div>
          <Button className="w-full" onClick={onClickToContact}>
            WORK WITH ME
          </Button>
        </div>

        <p
          className={`text-sm mt-7 w-[90%] mx-auto ${
            theme == "black" ? "text-[#999999]" : "text-slate-500"
          }`}
        >
          © 2025 Ubay Dillah. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default CardProfile;
