import { useContext } from "react";
import Badge from "../../Elements/Badge";
import { DarkMode } from "../../../contexts/DarkMode";
import { useLocale } from "../../../contexts/LocaleContext";

const AboutSection = () => {
  const { theme } = useContext(DarkMode);
  const { t } = useLocale();

  return (
    <section className="lg:ml-[300px] w-full mt-[40px] pr-4 lg:pr-20">
      <Badge className="lg:my-10 my-5 px-3 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill={theme === "black" ? "white" : "#2d2a25"}
          viewBox="0 0 256 256"
        >
          <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
        </svg>
        {t.about.badge}
      </Badge>

      <div className="sm:text-[48px] text-[37px] lg:leading-[60px] font-medium">
        {t.about.title}{" "}
        <span
          className={
            theme == "black" ? "text-primary-dark" : "text-primary-light"
          }
        >
          {t.about.titleHighlight}
        </span>
      </div>

      <div
        className={`text-[17px] lg:text-[19px] leading-relaxed lg:my-10 my-8 space-y-6 ${
          theme == "black" ? "text-[#999999]" : "text-[#4f4a42]"
        }`}
      >
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="flex flex-wrap gap-12 lg:gap-24 mt-16 pb-10">
        <div>
          <h3
            className={`text-6xl font-bold ${theme === "black" ? "text-primary-dark" : "text-primary-light"}`}
          >
            1+
          </h3>
          <p
            className={`text-xs uppercase tracking-widest mt-3 font-semibold ${theme === "black" ? "text-[#666]" : "text-[#756f64]"}`}
          >
            {t.about.experience}
          </p>
        </div>
        <div>
          <h3
            className={`text-6xl font-bold ${theme === "black" ? "text-primary-dark" : "text-primary-light"}`}
          >
            7+
          </h3>
          <p
            className={`text-xs uppercase tracking-widest mt-3 font-semibold ${theme === "black" ? "text-[#666]" : "text-[#756f64]"}`}
          >
            {t.about.projects}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
