import { useEffect, useState, useContext } from "react";
import { DarkMode } from "../../../contexts/DarkMode";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  const { theme } = useContext(DarkMode);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div
      className={`flex gap-3 items-center ${theme != "black" && "text-black"}`}
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
