import { useContext } from "react";
import Badge from "../../Elements/Badge";
import { DarkMode } from "../../../contexts/DarkMode";

const AboutSection = () => {
  const { theme } = useContext(DarkMode);
  return (
    <section className="lg:ml-[300px] w-full mt-[40px] pr-4 lg:pr-20">
      <Badge className="lg:my-10 my-5 px-3 gap-2">
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

      <div className="sm:text-[48px] text-[37px] lg:leading-[60px] font-medium">
        Every Great Product Begins with an even{" "}
        <span
          className={
            theme == "black" ? "text-primary-dark" : "text-primary-light"
          }
        >
          Better Story
        </span>
      </div>

      <div
        className={`text-[17px] lg:text-[19px] leading-relaxed lg:my-10 my-8 space-y-6 ${
          theme == "black" ? "text-[#999999]" : "text-slate-500"
        }`}
      >
        <p>
          I’m a{" "}
          <span className={theme === "black" ? "text-white" : "text-black"}>
            Fullstack Developer
          </span>{" "}
          with a backend focus, dedicated to building reliable, scalable systems
          that truly perform in production.
        </p>
        <p>
          On the frontend, I craft responsive interfaces using{" "}
          <span className={theme === "black" ? "text-white" : "text-black"}>
            React, Next.js, and TypeScript
          </span>{" "}
          paired with{" "}
          <span className={theme === "black" ? "text-white" : "text-black"}>
            Tailwind CSS
          </span>
          . For the backend, I architect structured APIs and efficient data
          flows using{" "}
          <span className={theme === "black" ? "text-white" : "text-black"}>
            Express, Prisma ORM
          </span>
          , and SQL databases.
        </p>
        <p>
          Most recently, I engineered the backend for{" "}
          <span className={theme === "black" ? "text-white" : "text-black"}>
            Straight Deal
          </span>
          , a live car-selling platform serving 1,400+ users, where I handled
          secure RBAC, JWT authentication, and third-party integrations with
          Twilio and SendGrid.
        </p>
        <p>
          I’m always open to full-time roles, freelance projects, or just a good
          technical conversation. Reach me at:{" "}
          <span className={theme === "black" ? "text-white" : "text-black"}>
            ubaydillah1737@gmail.com
          </span>
        </p>
      </div>

      <div className="flex flex-wrap gap-12 lg:gap-24 mt-16 pb-10">
        <div>
          <h3
            className={`text-6xl font-bold ${theme === "black" ? "text-primary-dark" : "text-primary-light"}`}
          >
            1+
          </h3>
          <p
            className={`text-xs uppercase tracking-widest mt-3 font-semibold ${theme === "black" ? "text-[#666]" : "text-slate-400"}`}
          >
            Years of Experience
          </p>
        </div>
        <div>
          <h3
            className={`text-6xl font-bold ${theme === "black" ? "text-primary-dark" : "text-primary-light"}`}
          >
            7+
          </h3>
          <p
            className={`text-xs uppercase tracking-widest mt-3 font-semibold ${theme === "black" ? "text-[#666]" : "text-slate-400"}`}
          >
            Projects Completed
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
