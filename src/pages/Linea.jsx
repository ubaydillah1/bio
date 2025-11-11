import { useContext } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { DarkMode } from "../contexts/DarkMode";

const Linea = () => {
  const { theme } = useContext(DarkMode);

  const coverImage = "/assets/img/linea.png";

  return (
    <div className="max-w-[900px] mx-auto px-4 py-10">
      <button
        onClick={() => window.history.back()}
        className={`flex items-center gap-2 text-sm transition mb-6 ${
          theme === "black"
            ? "text-[#999999] hover:text-white"
            : "text-slate-500 hover:text-black"
        }`}
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Title */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h1
            className={`text-[40px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Linea – Business Banking Made Simple
          </h1>
          <p
            className={`text-base ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            A modern and responsive landing page concept built with HTML, CSS,
            and JavaScript.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden mb-8">
        <img
          src={coverImage}
          alt="Linea Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Visit Link */}
      <div className="mt-10 border-t pt-8 space-y-4">
        <h2
          className={`text-[26px] font-semibold ${
            theme === "black" ? "text-white" : "text-black"
          }`}
        >
          Try It Yourself
        </h2>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://linea-alpha.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm border rounded-lg px-4 py-2 transition ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Visit Website
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-8 mt-10">
        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            About The Project
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            <b>Linea</b> is a clean, minimal, and fully responsive landing page
            built as part of my early front-end learning journey. The concept
            showcases a <b>business banking platform</b> that helps freelancers,
            startups, and small enterprises open and manage business accounts
            effortlessly. The design focuses on <b>clarity, layout balance</b>,
            and <b>user-friendly structure</b> while keeping the codebase simple
            and semantic.
          </p>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Features
          </h2>
          <ul
            className={`list-disc list-inside space-y-2 text-base ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            <li>
              Responsive landing layout for all screen sizes (HTML + CSS grid
              system)
            </li>
            <li>
              Interactive feature and testimonial sections powered by native
              JavaScript
            </li>
            <li>
              Simple animations and transitions for a smooth browsing flow
            </li>
            <li>
              Focused on accessibility, readability, and front-end best
              practices
            </li>
          </ul>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            What I Learned
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            This project helped me strengthen my foundation in{" "}
            <b>HTML structure, CSS layout design</b>, and{" "}
            <b>JavaScript DOM manipulation</b>. I explored responsive design
            principles, component alignment, and color contrast to deliver a
            professional yet lightweight layout. It represents one of my early
            steps toward mastering front-end development before transitioning
            into frameworks like React and Next.js.
          </p>
        </section>

        <div>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Key Stack
          </h2>
          <p
            className={`text-base ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            <b>HTML, CSS, JavaScript</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Linea;
