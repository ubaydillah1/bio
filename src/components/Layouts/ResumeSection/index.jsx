/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Briefcase } from "lucide-react";
import Badge from "../../Elements/Badge";
import { DarkMode } from "../../../contexts/DarkMode";

const ResumeSection = () => {
  const { theme } = useContext(DarkMode);

  const experiences = [
    {
      company: "Odama Studio - Remote",
      date: "Jan 2025 - Jun 2025",
      roles: [
        {
          title: "Backend Developer",
          description: `Odama Studio | BACKEND DEVELOPER

Worked on the backend of a car-selling platform, focusing on building secure and scalable systems. Key responsibilities and achievements include:

1. Developed backend architecture with Role-Based Access Control (RBAC) and JWT authentication.
2. Integrated third-party services such as Twilio for SMS notifications and SendGrid for email delivery.
3. Communicated regularly with clients via WhatsApp to gather requirements, provide updates, and clarify issues.
4. Collaborated with a remote team using Notion for task management, documentation, and project planning.
5. Designed and optimized database schemas for better performance and scalability.
6. Handled real-world production issues, debugging, and API improvements.

Skills: Node.js, Express.js, API Design, JWT, RBAC, Notion, Client Communication, Database Design, Twilio, SendGrid`,
        },
      ],
    },
    {
      company: "Web Development Workshop",
      date: "Aug 2024",
      roles: [
        {
          title: "Instructor",
          description:
            "Delivered 4 interactive sessions on HTML, CSS, and JavaScript fundamentals during a campus event, and prepared tailored materials to enhance participants’ understanding of web development basics.",
        },
      ],
    },
  ];

  const education = [
    {
      date: "2023 - Present",
      roles: [
        {
          title: "Information Systems",
          description:
            "University of Trunojoyo Madura | Current GPA: 3.87/4.00",
        },
      ],
    },
  ];

  const courses = [
    {
      date: "Oct 2023 - Feb 2024",
      roles: [
        {
          title: "Full Stack Developer Bootcamp",
          description: `Harisenin.com | FULL STACK DEVELOPER

I've completed the Full Stack Developer Bootcamp from Harisenin.com and earned a perfect GPA of 4.00. Over the five-month course, I developed full-stack skills including:
1. Front-End: React.js, HTML & CSS, and JavaScript.
2. Back-End: Node.js for building REST APIs and implementing authentication.
3. Databases: Designing databases with ERD.
4. Version Control: Git and handling conflicts.
5. Soft Skills: Analytical Thinking and Problem Solving.

Skills: React.js, Express.js, Node.js, Git, GitHub, Database Design`,
        },
      ],
    },
  ];

  const TimelineItem = ({ item, isLast }) => (
    <div className={`relative pl-8 ${isLast ? "pb-0" : "pb-10"}`}>
      <div
        className={`absolute left-[7px] top-[18px] w-[1.5px] ${
          isLast ? "bottom-0" : "-bottom-10"
        } ${theme === "black" ? "bg-[#333]" : "bg-gray-300"}`}
      ></div>

      <div
        className={`absolute left-[3px] top-[8px] h-[10px] w-[10px] rounded-full z-10 ${
          theme === "black" ? "bg-white" : "bg-black"
        }`}
      ></div>

      <p
        className={`text-[18px] ${
          theme === "black" ? "text-[#aaa]" : "text-slate-500"
        }`}
      >
        {item.company || item.institution
          ? `${item.company || item.institution} (${item.date})`
          : item.date}
      </p>
      {item.roles.map((role, index) => (
        <div key={index}>
          <h3
            className={`sm:text-[20px] text-[18px] font-semibold mt-4 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            {role.title}
          </h3>
          <p
            className={`text-[15px] whitespace-pre-line ${
              theme === "black" ? "text-[#999]" : "text-slate-600"
            }`}
          >
            {role.description}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="max-w-[850px] lg:ml-[300px] w-full mt-[40px]">
      <Badge className="lg:my-10 my-5 px-3 gap-2">
        <Briefcase
          width="16"
          height="16"
          color={theme === "black" ? "white" : "black"}
        />
        RESUME
      </Badge>

      <h2
        className={`sm:text-[40px] text-[32px] mb-8 ${
          theme === "black" ? "text-white" : "text-black"
        }`}
      >
        Experience
      </h2>

      <div className="ml-1">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            item={exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>

      <h2
        className={`sm:text-[40px] text-[32px] mb-8 mt-10 ${
          theme === "black" ? "text-white" : "text-black"
        }`}
      >
        Education
      </h2>

      <div className="ml-1">
        {education.map((edu, index) => (
          <TimelineItem
            key={index}
            item={edu}
            isLast={index === education.length - 1}
          />
        ))}
      </div>

      {/* Courses Section */}
      <h2
        className={`sm:text-[40px] text-[32px] mb-8 mt-10 ${
          theme === "black" ? "text-white" : "text-black"
        }`}
      >
        Courses
      </h2>

      <div className="ml-1">
        {courses.map((course, index) => (
          <TimelineItem
            key={index}
            item={course}
            isLast={index === courses.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ResumeSection;
