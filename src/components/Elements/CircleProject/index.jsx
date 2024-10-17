import { useContext } from "react";
import { DarkMode } from "../../../contexts/DarkMode";

const CircleProject = () => {
  const { theme } = useContext(DarkMode);

  return (
    <div
      className={`w-[180px] h-[180px] border-[1px] rounded-full flex justify-center items-center cursor-pointer ${
        theme === "black" ? "border-[#999999]" : "border-black"
      }`}
    >
      <div className="relative h-[165px]">
        <div className="circle relative w-[165px] h-[165px] rounded-full flex justify-center items-center ">
          <svg
            width="165"
            height="165"
            viewBox="0 0 200 200"
            className="animate-rotate"
          >
            s
            <path
              id="curve"
              fill="transparent"
              d="M20,100 A80,80 0 1,1 180,100"
            />
            <text
              fill={theme === "black" ? "white" : "black"}
              className="text-[20px]"
              style={{ letterSpacing: "5px" }}
            >
              <textPath href="#curve" startOffset="17%">
                My Projects
              </textPath>
            </text>
            <path
              id="curve2"
              fill="transparent"
              d="M180,100 A80,80 0 1,1 20,100"
            />
            <text
              fill={theme === "black" ? "white" : "black"}
              className="text-[20px]"
              style={{ letterSpacing: "5px" }}
            >
              <textPath href="#curve2" startOffset="17%">
                My Projects
              </textPath>
            </text>
            <circle
              cx="185"
              cy="100"
              r="5"
              fill={theme === "black" ? "white" : "black"}
            />
            <circle
              cx="15"
              cy="100"
              r="5"
              fill={theme === "black" ? "white" : "black"}
            />
          </svg>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill={theme === "black" ? "white" : "black"}
          viewBox="0 0 256 256"
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default CircleProject;
