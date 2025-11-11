import { useContext } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { DarkMode } from "../contexts/DarkMode";

const MaduraKita = () => {
  const { theme } = useContext(DarkMode);

  const coverImage = "/assets/img/madura-1.jpg";

  return (
    <div className="max-w-[900px] mx-auto px-4 py-10">
      {/* Back Button */}
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
            MaduraKita – Empowering Local MSMEs in Madura
          </h1>
          <p
            className={`text-base ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            Developed as part of a regional innovation challenge to support
            local entrepreneurs in Madura.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden mb-8">
        <img
          src={coverImage}
          alt="MaduraKita Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Try It Yourself */}
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
            href="https://umkm-landing-page.vercel.app"
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

          <a
            href="https://github.com/ubaydillah1/umkm-landing-page"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm border rounded-lg px-4 py-2 transition ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            GitHub Repository
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
            About The Platform
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            <b>MaduraKita</b> is a digital acceleration project designed to
            bridge the gap between <b>local Madurese MSMEs</b> and the modern
            digital economy. The platform highlights traditional craftsmanship
            and business innovation through engaging design, intuitive
            storytelling, and technology-driven presentation. It serves as a{" "}
            <b>digital hub</b> connecting communities, entrepreneurs, and
            digital solutions empowering small businesses to thrive in a global
            context.
          </p>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Technology
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            The platform was built using <b>Next.js</b> with <b>TypeScript</b>{" "}
            for scalability and maintainability. Styling is powered by{" "}
            <b>Tailwind CSS</b> to ensure responsiveness and accessibility,
            while <b>Framer Motion</b> brings the interface to life with fluid
            animations and storytelling transitions. Deployment is managed
            through <b>Vercel</b>, ensuring fast delivery and reliable
            performance across regions.
          </p>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Project Objective
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            The main goal of MaduraKita is to <b>empower local entrepreneurs</b>{" "}
            by giving them a digital space to showcase their identity and
            creativity. The project also aims to{" "}
            <b>connect heritage with innovation</b>, helping local coffee shops,
            craft makers, and creative services build a stronger digital
            presence and reach broader audiences.
          </p>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Challenges
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            The key challenge was to combine <b>storytelling and technology</b>{" "}
            in a single cohesive experience that feels authentic to Madura’s
            identity. The team needed to balance cultural presentation with
            modern UI principles using motion and layout composition to make
            each local business feel distinct while maintaining design harmony
            throughout the platform.
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
            <b>Next.js, TypeScript, Tailwind CSS, Framer Motion, Vercel</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaduraKita;
