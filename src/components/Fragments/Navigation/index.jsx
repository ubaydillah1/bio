import { useContext, useEffect, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Adjust to trigger when section is in middle of screen
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionKey = Object.keys(sections).find(
            (key) => sections[key].current === entry.target
          );
          if (sectionKey) {
            setActiveSection(sectionKey);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    Object.values(sections).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const getIconColor = (sectionKey) => {
    if (activeSection === sectionKey) {
      return theme === "black" ? "#28e98c" : "#c46a2d";
    }
    return theme === "black" ? "white" : "#2f241a";
  };

  const navItems = [
    {
      key: "hero",
      icon: <Home className="size-[18px] sm:size-[20px]" color={getIconColor("hero")} />,
      action: (event) => {
        event.preventDefault();
        scrollToSection(sections.hero, "hero");
      },
    },
    {
      key: "about",
      icon: <User className="size-[18px] sm:size-[20px]" color={getIconColor("about")} />,
      action: (event) => {
        event.preventDefault();
        scrollToSection(sections.about, "about");
      },
    },
    {
      key: "resume",
      icon: <FileText className="size-[18px] sm:size-[20px]" color={getIconColor("resume")} />,
      action: (event) => {
        event.preventDefault();
        scrollToSection(sections.resume, "resume");
      },
    },
    {
      key: "skills",
      icon: <Wrench className="size-[18px] sm:size-[20px]" color={getIconColor("skills")} />,
      action: (event) => {
        event.preventDefault();
        scrollToSection(sections.skills, "skills");
      },
    },
    {
      key: "portfolio",
      icon: <Briefcase className="size-[18px] sm:size-[20px]" color={getIconColor("portfolio")} />,
      action: (event) => {
        event.preventDefault();
        scrollToSection(sections.portfolio, "portfolio");
      },
    },
    {
      key: "contact",
      icon: <MessageCircle className="size-[18px] sm:size-[20px]" color={getIconColor("contact")} />,
      action: (event) => {
        event.preventDefault();
        scrollToSection(sections.contact, "contact");
      },
    },
  ];

  return (
    <nav
      className={`fixed lg:right-20 max-w-[500px] mx-auto lg:top-52 lg:w-auto lg:bottom-auto lg:left-auto border-[.1px] rounded-full py-6 flex lg:flex-col gap-8 left-10 right-10 bottom-5 justify-between px-5 z-[999] backdrop-blur-lg transition-all duration-300
        ${
          theme === "black"
            ? "border-[#FFFFFF33] text-white bg-black/60"
            : "border-[#b8895d]/50 text-[#2f241a] bg-[#fff7ed]/75"
        }
      `}
    >
      {navItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.key}`}
          onClick={item.action}
          className={`transition-all duration-300 hover:scale-125 focus:outline-none ${
            activeSection === item.key ? "scale-110" : "opacity-70 hover:opacity-100"
          }`}
          aria-label={`Scroll to ${item.key} section`}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
