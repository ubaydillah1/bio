import { useContext } from "react";
import Badge from "../../Elements/Badge";
import { DarkMode } from "../../../contexts/DarkMode";

const AboutSection = () => {
  const { theme } = useContext(DarkMode);
  return (
    <section className="max-w-[800px] md:ml-[300px] w-full mt-[40px]">
      <Badge className="md:my-10 my-5 px-3 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill={theme === "black" ? "white" : "black"}
          viewBox="0 0 256 256"
        >
          <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
        </svg>
        ABOUT
      </Badge>

      <div className="sm:text-[48px] text-[37px]">
        Every Design Starts with a Vision, Every Vision{" "}
        <span
          className={
            theme == "black" ? "text-primary-dark" : "text-primary-light"
          }
        >
          Tells a Story
        </span>
      </div>

      <p
        className={`text-xl md:my-8 my-6 md:flex md:flex-col ${
          theme == "black" ? "text-[#999999]" : "text-slate-500"
        }`}
      >
        Since starting my journey as a fullstack developer after graduating from
        Harisenin.com bootcamp, I’ve worked on personal projects and
        collaborated with talented individuals in developing digital products.
        Although I don’t have extensive professional experience yet, I’m
        constantly honing my skills and knowledge in building digital solutions
        for both business and consumer needs. I am quietly confident, naturally
        curious, and always working on improving my coding skills, one problem
        at a time.
      </p>
    </section>
  );
};

export default AboutSection;
