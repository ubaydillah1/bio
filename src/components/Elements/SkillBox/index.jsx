/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import { DarkMode } from "../../../contexts/DarkMode";

const SkillBoxes = (props) => {
  const { text, children, viewBox = false } = props;

  const { theme } = useContext(DarkMode);
  const boxRef = useRef();

  const [hovered, setHovered] = useState(false);

  const mouseEnter = () => {
    setHovered(true);
  };

  const mouseLeave = () => {
    setHovered(false);
  };

  const textColorHover = () => {
    return theme === "black" ? "text-primary-dark" : "text-primary-light";
  };

  const colorHover = () => {
    return theme === "black" ? "#28e98c" : "#007aff";
  };

  const borderHover = () => {
    return theme === "black" ? "border-primary-dark" : "border-primary-light";
  };

  return (
    <div
      ref={boxRef}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      stroke-width="0"
      className={`border-[2px] font-medium ${
        hovered
          ? borderHover()
          : theme === "black"
          ? "border-[#565656]"
          : "border-[#64748b]"
      } rounded-[20px] flex justify-center items-center flex-col gap-[5px] aspect-square transition-all duration-300`}
    >
      <svg
        stroke={
          hovered ? colorHover() : theme === "black" ? "#BCBCBC" : "#64748b"
        }
        fill={
          hovered ? colorHover() : theme === "black" ? "#BCBCBC" : "#64748b"
        }
        role="img"
        viewBox={viewBox ? viewBox : "0 0 24 24"}
        height="42"
        width="42"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-all duration-300 ${hovered && "scale-[1.2]"}`}
      >
        {children}
      </svg>

      <p
        className={`transition-all duration-300 ${
          hovered ? textColorHover() : "text-[#BCBCBC]"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default SkillBoxes;
