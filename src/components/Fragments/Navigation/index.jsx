/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import { DarkMode } from "../../../contexts/DarkMode";

const Navigation = ({ scrollToSection, sections }) => {
  const { theme } = useContext(DarkMode);

  return (
    <nav
      className={`fixed lg:right-20 lg:top-52 lg:w-auto lg:bottom-auto lg:left-auto border-[.1px] rounded-full py-6 flex lg:flex-col gap-8 left-10 right-10 bottom-5 justify-between px-5 z-[999] ${
        theme == "black"
          ? "border-[#FFFFFF66] text-white"
          : "border-black text-black"
      }`}
    >
      <div onClick={() => scrollToSection(sections.hero)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className={`${theme == "black" ? "fill-white" : "fill-black"}`}
          viewBox="0 0 256 256"
        >
          <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>
        </svg>
      </div>
      <div onClick={() => scrollToSection(sections.about)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className={`${theme == "black" ? "fill-white" : "fill-black"}`}
          viewBox="0 0 256 256"
        >
          <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
        </svg>
      </div>
      <div onClick={() => scrollToSection(sections.skills)}>
        <svg
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m15 5 4 4"></path>
          <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
          <path d="m8 6 2-2"></path>
          <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
          <path d="m18 16 2-2"></path>
          <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
        </svg>
      </div>
      <div onClick={() => scrollToSection(sections.portfolio)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className={`${theme == "black" ? "fill-white" : "fill-black"}`}
          viewBox="0 0 256 256"
        >
          <path d="M205.66,50.32a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32-11.31l56-56A8,8,0,0,1,205.66,50.32ZM248,58.41a50.13,50.13,0,0,1-14.77,35.66L180,147.3A15.86,15.86,0,0,1,168.69,152H152v16.83a16,16,0,0,1-3.25,9.66,8.08,8.08,0,0,1-.72.83l-8,8a16,16,0,0,1-22.62,0L98.7,168.6l-77,77.06a8,8,0,0,1-11.32-11.32l77.05-77.05-18.7-18.71a16,16,0,0,1,0-22.63l8-8a8,8,0,0,1,.82-.72A16.14,16.14,0,0,1,87.17,104H104V87.3A15.92,15.92,0,0,1,108.68,76l53.24-53.23A50.43,50.43,0,0,1,248,58.41Zm-16,0a34.43,34.43,0,0,0-58.77-24.35L120,87.3V104a16,16,0,0,1-16,16H87.28L80,127.27,128.72,176l7.28-7.28V152a16,16,0,0,1,16-16h16.69l53.23-53.24A34.21,34.21,0,0,0,232,58.41Z"></path>
        </svg>
      </div>
      <div onClick={() => scrollToSection(sections.contact)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className={`${theme == "black" ? "fill-white" : "fill-black"}`}
          viewBox="0 0 256 256"
        >
          <path d="M116,120a12,12,0,1,1,12,12A12,12,0,0,1,116,120ZM84,132a12,12,0,1,0-12-12A12,12,0,0,0,84,132Zm88,0a12,12,0,1,0-12-12A12,12,0,0,0,172,132Zm60-76V184a16,16,0,0,1-16,16H155.57l-13.68,23.94a16,16,0,0,1-27.78,0L100.43,200H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-16,0H40V184h65.07a8,8,0,0,1,7,4l16,28,16-28a8,8,0,0,1,7-4H216Z"></path>
        </svg>
      </div>
    </nav>
  );
};

export default Navigation;
