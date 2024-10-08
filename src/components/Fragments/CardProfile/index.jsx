import { useContext } from "react";
import Button from "../../Elements/Button";
import { DarkMode } from "../../../contexts/DarkMode";
import mySelf from "../../../assets/img/mySelf.webp";

const CardProfile = () => {
  const { theme } = useContext(DarkMode);
  return (
    <div
      className={`bio-card border-[1px]  max-w-[350px] w-full px-8 py-7 rounded-[30px] fixed left-[80px] ${
        theme == "black" ? "border-[#FFFFFF66]" : "border-black"
      }`}
    >
      <div className="flex justify-between">
        <p className="font-bold text-3xl">UBAY</p>
        <div className="text-end text-sm font-medium">
          <p>Front End Developer &</p>
          <p>Blockchain Enthusiast</p>
        </div>
      </div>

      <div className="mt-7  w-full">
        <img
          src={mySelf}
          alt="mySelf"
          className="rounded-[30px] object-cover  w-[270px] h-[230px] mx-auto"
        />
      </div>

      <div className="text-center font-medium mt-5">
        <p>ubaydillah1737@gmail.com</p>
        <p className="text-xl mt-1">Base in Jakarta, ID</p>

        <div className="flex justify-center my-7 gap-4">
          <div className="w-[47px] h-[47px] rounded-full bg-green-500"></div>
          <div className="w-[47px] h-[47px] rounded-full bg-green-500"></div>
          <div className="w-[47px] h-[47px] rounded-full bg-green-500"></div>
        </div>

        <div>
          <Button>WORK WITH ME</Button>
        </div>

        <p
          className={`text-sm mt-7 w-[90%] mx-auto ${
            theme == "black" ? "text-[#999999]" : "text-slate-500"
          }`}
        >
          © 2024 Ubay Dillah. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default CardProfile;
