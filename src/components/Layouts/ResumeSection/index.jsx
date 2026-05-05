import { useContext, useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";
import Badge from "../../Elements/Badge";
import { DarkMode } from "../../../contexts/DarkMode";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ResumeSection = () => {
  const { theme } = useContext(DarkMode);

  const experiences = [
    // ... (data experiences tetap sama)
    {
      company: "Molca Teknologi Nusantara",
      location: "Surabaya, Jawa Timur, Indonesia · Hybrid",
      date: "Jan 2026 - May 2026",
      type: "Internship",
      roles: [
        {
          title: "Full-stack Developer",
          points: [
            "Built and maintained scalable fullstack features across a monorepo architecture, shipping 50+ production-ready deliverables in Next.js and tRPC while consistently meeting sprint goals in an Agile environment.",
            "Improved codebase maintainability by refactoring complex cross-module workflows, enforcing separation of concerns and reducing technical debt across shared services.",
            "Designed an event-driven pipeline using Redis to support asynchronous processing, decoupling components and improving overall system scalability.",
            "Adopted Drizzle ORM for end-to-end type safety between the database layer and API, and evaluated Hono.js as a lightweight option for high-performance microservice design.",
            "Actively contributed in sprint ceremonies, code reviews, and cross-team collaboration to ensure consistent delivery cadence across multiple concurrent services.",
          ],
          skills: ["Next.js", "tRPC", "Redis", "Drizzle ORM", "Hono.js", "Agile"],
        },
      ],
    },
    {
      company: "Odama Studio",
      location: "Remote",
      date: "Jan 2025 - Jun 2025",
      type: "Contract",
      roles: [
        {
          title: "Back End Developer",
          points: [
            "Designed and built the backend infrastructure for Straight Deal, a live car-selling platform serving 1,400+ registered users.",
            "Architected the end-to-end car submission workflow, from initial user listing to final admin price offer, powered by Express.js and Prisma ORM on a Supabase database.",
            "Developed 72 REST API endpoints, implementing Role-Based Access Control (RBAC) to manage distinct permission levels for users and administrators.",
            "Secured the platform with a custom JWT authentication system and Google OAuth2 login integration.",
            "Integrated Twilio for SMS notifications and SendGrid for transactional email. All endpoints documented in Postman to support efficient frontend collaboration.",
          ],
          skills: [
            "Express.js",
            "Prisma ORM",
            "Supabase",
            "RBAC",
            "JWT",
            "OAuth2",
            "Twilio",
            "SendGrid",
          ],
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
      institution: "University of Trunojoyo Madura",
      roles: [
        {
          title: "Information Systems",
          description: "Current GPA: 3.90/4.00",
        },
      ],
    },
  ];

  const courses = [
    {
      date: "Oct 2023 - Feb 2024",
      institution: "Harisenin.com",
      roles: [
        {
          title: "Full Stack Developer Bootcamp",
          points: [
            "Completed an intensive 5-month bootcamp with a perfect GPA of 4.00.",
            "Front-End: Mastered React.js, HTML & CSS, and JavaScript fundamentals.",
            "Back-End: Built REST APIs with Node.js and implemented secure authentication systems.",
            "Databases: Designed efficient database structures using ERD principles.",
            "Version Control: Managed complex workflows and merge conflicts using Git and GitHub.",
            "Soft Skills: Developed strong analytical thinking and problem-solving capabilities.",
          ],
          skills: [
            "React.js",
            "Express.js",
            "Node.js",
            "Git",
            "GitHub",
            "Database Design",
          ],
        },
      ],
    },
  ];

  const TimelineItem = ({ item, isLast }) => {
    const [isActive, setIsActive] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
      const trigger = ScrollTrigger.create({
        trigger: elementRef.current,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => setIsActive(true),
        onEnterBack: () => setIsActive(true),
        onLeave: () => setIsActive(false),
        onLeaveBack: () => setIsActive(false),
      });

      return () => {
        if (trigger) trigger.kill();
      };
    }, []);

    return (
      <div 
        ref={elementRef}
        className={`relative pl-10 ${isLast ? "pb-0" : "pb-12"} group`}
      >
        {/* Vertical Line */}
        <div
          className={`absolute left-[7px] top-[18px] w-[2px] ${
            isLast ? "h-0" : "bottom-0"
          } ${
            theme === "black"
              ? "bg-gradient-to-b from-[#444] to-transparent"
              : "bg-gradient-to-b from-gray-300 to-transparent"
          } transition-all duration-500 ${
            isActive
              ? theme === "black"
                ? "from-emerald-500"
                : "from-blue-500"
              : ""
          }`}
        ></div>

        {/* Dot */}
        <div
          className={`absolute left-[0px] top-[8px] h-[16px] w-[16px] rounded-full z-10 border-4 transition-all duration-500 ${
            theme === "black"
              ? "bg-white border-[#1a1a1a]"
              : "bg-black border-white"
          } ${isActive ? "scale-125" : "scale-100"} ${
            isActive
              ? theme === "black"
                ? "bg-emerald-500"
                : "bg-blue-500"
              : ""
          }`}
        ></div>

        {/* Content */}
        <div className="transition-all duration-500">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span
              className={`text-[13px] font-medium px-3 py-0.5 rounded-full ${
                theme === "black"
                  ? "bg-[#1a1a1a] text-[#888] border border-[#333]"
                  : "bg-gray-100 text-gray-600 border border-gray-200"
              }`}
            >
              {item.date}
            </span>
            {item.type && (
              <span
                className={`text-[12px] font-bold uppercase tracking-widest ${
                  theme === "black" ? "text-emerald-400" : "text-blue-600"
                }`}
              >
                • {item.type}
              </span>
            )}
          </div>

          <h3
            className={`text-[24px] font-bold ${
              theme === "black" ? "text-white" : "text-gray-900"
            }`}
          >
            {item.company || item.institution}
          </h3>
          {item.location && (
            <p
              className={`text-[14px] mt-1 ${
                theme === "black" ? "text-[#666]" : "text-gray-500"
              }`}
            >
              {item.location}
            </p>
          )}

          {item.roles.map((role, index) => (
            <div key={index} className="mt-4">
              <h4
                className={`text-[19px] font-semibold mb-3 ${
                  theme === "black" ? "text-[#ddd]" : "text-gray-800"
                }`}
              >
                {role.title}
              </h4>

              {role.points ? (
                <ul className="space-y-3">
                  {role.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3">
                      <span
                        className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${
                          theme === "black"
                            ? "bg-emerald-500/50"
                            : "bg-blue-500/30"
                        }`}
                      ></span>
                      <p
                        className={`text-[15px] leading-relaxed ${
                          theme === "black" ? "text-[#aaa]" : "text-gray-600"
                        }`}
                      >
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className={`text-[15px] leading-relaxed whitespace-pre-line ${
                    theme === "black" ? "text-[#aaa]" : "text-gray-600"
                  }`}
                >
                  {role.description}
                </p>
              )}

              {role.skills && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {role.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-[12px] px-3 py-1 rounded-md font-medium border transition-all duration-500 ${
                        theme === "black"
                          ? `bg-[#0a0a0a] border-[#222] text-[#777] ${
                              isActive ? "border-emerald-500/50 text-[#999]" : ""
                            }`
                          : `bg-white border-gray-100 text-gray-500 ${
                              isActive ? "border-blue-300 text-gray-700" : ""
                            }`
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className=" lg:ml-[300px] w-full mt-[40px] pb-20">
      <Badge className="lg:my-10 my-5 px-3 gap-2">
        <Briefcase
          width="16"
          height="16"
          color={theme === "black" ? "white" : "black"}
        />
        RESUME
      </Badge>

      <div className="space-y-20">
        <div>
          <h2
            className={`sm:text-[40px] text-[32px] mb-12 font-bold ${
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
        </div>

        <div>
          <h2
            className={`sm:text-[40px] text-[32px] mb-12 font-bold ${
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
        </div>

        <div>
          <h2
            className={`sm:text-[40px] text-[32px] mb-12 font-bold ${
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
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
