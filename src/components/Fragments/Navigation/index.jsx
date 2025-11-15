/* eslint-disable react/prop-types */
import { useContext } from "react";
import {
  Home,
  User,
  Wrench,
  Briefcase,
  MessageCircle,
  FileText,
} from "lucide-react";
import { DarkMode } from "../../../contexts/DarkMode";

const Navigation = ({ scrollToSection, sections }) => {
  const { theme } = useContext(DarkMode);

  const iconProps = {
    className: "size-[18px] sm:size-[20px]",
    color: theme === "black" ? "white" : "black",
  };

  const navItems = [
    {
      icon: <Home {...iconProps} />,
      action: () => scrollToSection(sections.hero),
    },
    {
      icon: <User {...iconProps} />,
      action: () => scrollToSection(sections.about),
    },
    {
      icon: <FileText {...iconProps} />,
      action: () => scrollToSection(sections.resume),
    },
    {
      icon: <Wrench {...iconProps} />,
      action: () => scrollToSection(sections.skills),
    },
    {
      icon: <Briefcase {...iconProps} />,
      action: () => scrollToSection(sections.portfolio),
    },
    {
      icon: <MessageCircle {...iconProps} />,
      action: () => scrollToSection(sections.contact),
    },
  ];

  return (
    <nav
      className={`fixed lg:right-20 max-w-[500px] mx-auto lg:top-52 lg:w-auto lg:bottom-auto lg:left-auto border-[.1px] rounded-full py-6 flex lg:flex-col gap-8 left-10 right-10 bottom-5 justify-between px-5 z-[999] backdrop-blur-lg
        ${
          theme === "black"
            ? "border-[#FFFFFF33] text-white bg-black/60"
            : "border-black/40 text-black bg-white/60"
        }
      `}
    >
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={item.action}
          className="transition-transform hover:scale-110 focus:outline-none "
          aria-label={`Scroll to ${Object.keys(sections)[index]} section`}
        >
          {item.icon}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
