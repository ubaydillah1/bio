/* eslint-disable react/prop-types */
import { forwardRef, useContext } from "react";
import { DarkMode } from "../../../contexts/DarkMode";

const Button = forwardRef((props, ref) => {
  const { children, className } = props;
  const { theme } = useContext(DarkMode);

  return (
    <button
      ref={ref}
      className={`w-full py-3 font-normal rounded-full ${
        theme === "black"
          ? "bg-primary-dark text-black"
          : "bg-primary-light text-white"
      } ${className}`}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
