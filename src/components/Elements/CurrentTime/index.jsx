import { useEffect, useState, useContext } from "react";
import { DarkMode } from "../../../contexts/DarkMode";

const CurrentTime = () => {
  const [time, setTime] = useState(null);
  const { theme } = useContext(DarkMode);

  useEffect(() => {
    setTime(new Date());

    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const hours = time ? time.getHours().toString().padStart(2, "0") : "00";
  const minutes = time ? time.getMinutes().toString().padStart(2, "0") : "00";
  const seconds = time ? time.getSeconds().toString().padStart(2, "0") : "00";

  return (
    <div
      className={`flex gap-3 items-center ${
        theme != "black" && "text-[#2f241a]"
      }  lg:flex hidden`}
    >
      <span className="font-mono text-xl">
        JAKARTA.
        <span
          className={`${
            theme == "black" ? "text-primary-dark" : "text-primary-light"
          }`}
        >
          ID
        </span>
      </span>
      <span>•</span>
      <span className="countdown font-mono text-xl">
        <span style={{ "--value": hours }}></span>:
        <span style={{ "--value": minutes }}></span>:
        <span style={{ "--value": seconds }}></span>
      </span>
    </div>
  );
};

export default CurrentTime;
