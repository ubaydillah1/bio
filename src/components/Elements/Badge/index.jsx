import { useContext } from "react";
import { DarkMode } from "../../../contexts/DarkMode";

const Badge = (props) => {
  const { children, className } = props;
  const { theme } = useContext(DarkMode);
  return (
    <div
      className={`badge badge-outline rounded-full px-5 py-5 text-[12px] font-semibold ${
        theme == "black"
          ? "border-[#FFFFFF66] text-white"
          : "border-[#b8ad9c] text-[#2d2a25]"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
