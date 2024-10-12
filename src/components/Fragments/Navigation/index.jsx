import { useContext } from "react";
import { DarkMode } from "../../../contexts/DarkMode";

const Navigation = () => {
  const { theme } = useContext(DarkMode);
  return (
    <nav
      className={`fixed right-10 top-52 border-[.1px] rounded-full px-7 py-5 flex flex-col gap-10 ${
        theme == "black"
          ? "border-[#FFFFFF66] text-white"
          : "border-black text-black"
      }`}
    >
      <div>Home</div>
      <div>Person</div>
      <div>Bag</div>
      <div>Setting</div>
      <div>Contact</div>
    </nav>
  );
};

export default Navigation;
