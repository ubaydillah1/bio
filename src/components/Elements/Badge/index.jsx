import { useContext } from "react";
import { DarkMode } from "../../../contexts/DarkMode";

/* eslint-disable react/prop-types */
const Badge = (props) => {
  const { children, className } = props;
  const { theme } = useContext(DarkMode);
  return (
    <div
      className={`badge badge-outline rounded-full px-5 py-5 text-[12px] font-semibold ${
        theme == "black" ? "border-[#FFFFFF66]" : "border-black"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
