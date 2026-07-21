import { forwardRef, useContext } from "react";
import { DarkMode } from "../../../contexts/DarkMode";

const Button = forwardRef((props, ref) => {
  const { children, className = "", onClick, ...buttonProps } = props;
  const { theme } = useContext(DarkMode);

  return (
    <button
      onClick={onClick}
      ref={ref}
      {...buttonProps}
      className={`py-3 font-normal rounded-full border-2 transition-all ease-in duration-200 ${
        theme === "black"
          ? "bg-primary-dark text-black border-primary-dark hover:bg-black hover:text-primary-dark"
          : "bg-primary-light text-[#f7f2e9] border-primary-light hover:bg-[#f7f2e9] hover:text-primary-light"
      }  ${className}`}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
