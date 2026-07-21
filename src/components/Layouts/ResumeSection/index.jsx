import { useContext, useEffect, useRef, useState } from "react";
import { Briefcase } from "lucide-react";
import Badge from "../../Elements/Badge";
import { DarkMode } from "../../../contexts/DarkMode";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "../../../contexts/LocaleContext";

const ResumeSection = () => {
  const { theme } = useContext(DarkMode);
  const { t } = useLocale();
  const experiences = t.resume.experiences;
  const education = t.resume.educationItems;
  const courses = t.resume.courseItems;

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

      return () => trigger?.kill();
    }, []);

    return (
      <div
        ref={elementRef}
        className={`relative pl-10 ${isLast ? "pb-0" : "pb-12"} group`}
      >
        <div
          className={`absolute left-[7px] top-[18px] w-[2px] ${
            isLast ? "h-0" : "bottom-0"
          } ${
            theme === "black"
              ? "bg-gradient-to-b from-[#444] to-transparent"
              : "bg-gradient-to-b from-[#d8bea0] to-transparent"
          } transition-all duration-500 ${
            isActive
              ? theme === "black"
                ? "from-emerald-500"
                : "from-[#c46a2d]"
              : ""
          }`}
        />

        <div
          className={`absolute left-0 top-2 h-4 w-4 rounded-full z-10 border-4 transition-all duration-500 ${
            theme === "black"
              ? "bg-white border-[#1a1a1a]"
              : "bg-[#2f241a] border-[#fff7ed]"
          } ${isActive ? "scale-125" : "scale-100"} ${
            isActive
              ? theme === "black"
                ? "bg-emerald-500"
                : "bg-[#c46a2d]"
              : ""
          }`}
        />

        <div className="transition-all duration-500">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span
              className={`text-[13px] font-medium px-3 py-0.5 rounded-full ${
                theme === "black"
                  ? "bg-[#1a1a1a] text-[#888] border border-[#333]"
                  : "bg-[#f3dfc5] text-[#7a5b42] border border-[#d8bea0]"
              }`}
            >
              {item.date}
            </span>
            {item.type && (
              <span
                className={`text-[12px] font-bold uppercase tracking-widest ${
                  theme === "black" ? "text-emerald-400" : "text-[#c46a2d]"
                }`}
              >
                &bull; {item.type}
              </span>
            )}
          </div>

          <h3
            className={`text-[24px] font-bold ${
              theme === "black" ? "text-white" : "text-[#2f241a]"
            }`}
          >
            {item.company || item.institution}
          </h3>

          {item.location && (
            <p
              className={`text-[14px] mt-1 ${
                theme === "black" ? "text-[#666]" : "text-[#8f6b50]"
              }`}
            >
              {item.location}
            </p>
          )}

          {item.roles.map((role, index) => (
            <div key={index} className="mt-4">
              <h4
                className={`text-[19px] font-semibold mb-3 ${
                  theme === "black" ? "text-[#ddd]" : "text-[#3d2e20]"
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
                            : "bg-[#c46a2d]/40"
                        }`}
                      />
                      <p
                        className={`text-[15px] leading-relaxed ${
                          theme === "black" ? "text-[#aaa]" : "text-[#7a5b42]"
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
                    theme === "black" ? "text-[#aaa]" : "text-[#7a5b42]"
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
                          : `bg-[#fff7ed]/70 border-[#ead7bd] text-[#8f6b50] ${
                              isActive ? "border-[#c46a2d]/60 text-[#3d2e20]" : ""
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

  const TimelineGroup = ({ title, items }) => (
    <div>
      <h2
        className={`sm:text-[40px] text-[32px] mb-12 font-bold ${
          theme === "black" ? "text-white" : "text-[#2f241a]"
        }`}
      >
        {title}
      </h2>
      <div className="ml-1">
        {items.map((item, index) => (
          <TimelineItem
            key={`${title}-${index}`}
            item={item}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="lg:ml-[300px] w-full mt-[40px] pb-20">
      <Badge className="lg:my-10 my-5 px-3 gap-2">
        <Briefcase
          width="16"
          height="16"
          color={theme === "black" ? "white" : "black"}
        />
        {t.resume.badge}
      </Badge>

      <div className="space-y-20">
        <TimelineGroup title={t.resume.experience} items={experiences} />
        <TimelineGroup title={t.resume.education} items={education} />
        <TimelineGroup title={t.resume.courses} items={courses} />
      </div>
    </section>
  );
};

export default ResumeSection;
