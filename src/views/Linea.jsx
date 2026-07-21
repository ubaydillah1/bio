"use client";

import { useContext } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { DarkMode } from "../contexts/DarkMode";
import { useLocale } from "../contexts/LocaleContext";
import { useProjectNavigation } from "../hooks/useProjectNavigation";

const Linea = () => {
  const { theme } = useContext(DarkMode);
  const { locale, t } = useLocale();
  const { backToPortfolio } = useProjectNavigation(theme);

  const coverImage = "/assets/img/linea.webp";

  return (
    <div className="max-w-[900px] mx-auto px-4 py-10">
      <button
        onClick={backToPortfolio}
        className={`flex items-center gap-2 text-sm transition mb-6 ${
          theme === "black"
            ? "text-[#999999] hover:text-white"
            : "text-[#5a554c] hover:text-[#2d2a25]"
        }`}
      >
        <ArrowLeft size={18} />
        {t.common.back}
      </button>

      {/* Title */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h1
            className={`text-[40px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {locale === "id"
              ? "Linea - Business Banking yang Lebih Simpel"
              : "Linea - Business Banking Made Simple"}
          </h1>
          <p
            className={`text-base ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            {locale === "id"
              ? "Konsep landing page modern dan responsif yang dibangun dengan HTML, CSS, dan JavaScript."
              : "A modern and responsive landing page concept built with HTML, CSS, and JavaScript."}
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
            theme === "black" ? "text-white" : "text-[#2d2a25]"
          }`}
        >
          {t.project.try}
        </h2>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://linea-alpha.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm border rounded-lg px-4 py-2 transition ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-[#cfc3b0] text-[#3f3a33] hover:bg-[#e9e1d2]"
            }`}
          >
            {t.project.visitWebsite}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-8 mt-10">
        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {t.project.aboutProject}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            {locale === "id" ? (
              <>
                <b>Linea</b> adalah landing page yang bersih, minimal, dan
                responsif, dibuat sebagai bagian dari perjalanan awal saya
                belajar front-end. Konsepnya menampilkan{" "}
                <b>platform business banking</b> yang membantu freelancer,
                startup, dan usaha kecil membuka serta mengelola akun bisnis
                dengan mudah. Desainnya fokus pada{" "}
                <b>kejelasan, keseimbangan layout</b>, dan{" "}
                <b>struktur yang ramah pengguna</b> sambil menjaga codebase
                tetap sederhana dan semantic.
              </>
            ) : (
              <>
                <b>Linea</b> is a clean, minimal, and fully responsive landing
                page built as part of my early front-end learning journey. The
                concept showcases a <b>business banking platform</b> that helps
                freelancers, startups, and small enterprises open and manage
                business accounts effortlessly. The design focuses on{" "}
                <b>clarity, layout balance</b>, and{" "}
                <b>user-friendly structure</b> while keeping the codebase simple
                and semantic.
              </>
            )}
          </p>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {t.project.features}
          </h2>
          <ul
            className={`list-disc list-inside space-y-2 text-base ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            <li>
              {locale === "id"
                ? "Layout landing page responsif untuk semua ukuran layar (HTML + CSS grid system)"
                : "Responsive landing layout for all screen sizes (HTML + CSS grid system)"}
            </li>
            <li>
              {locale === "id"
                ? "Section fitur dan testimonial interaktif dengan JavaScript native"
                : "Interactive feature and testimonial sections powered by native JavaScript"}
            </li>
            <li>
              {locale === "id"
                ? "Animasi dan transisi sederhana untuk alur browsing yang mulus"
                : "Simple animations and transitions for a smooth browsing flow"}
            </li>
            <li>
              {locale === "id"
                ? "Fokus pada aksesibilitas, keterbacaan, dan praktik front-end yang rapi"
                : "Focused on accessibility, readability, and front-end best practices"}
            </li>
          </ul>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {locale === "id" ? "Yang Saya Pelajari" : "What I Learned"}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            {locale === "id" ? (
              <>
                Project ini membantu saya memperkuat dasar{" "}
                <b>struktur HTML, desain layout CSS</b>, dan{" "}
                <b>manipulasi DOM JavaScript</b>. Saya mengeksplorasi prinsip
                responsive design, alignment komponen, dan kontras warna untuk
                menghasilkan layout yang profesional tetapi tetap ringan. Ini
                menjadi salah satu langkah awal saya sebelum masuk lebih dalam
                ke framework seperti React dan Next.js.
              </>
            ) : (
              <>
                This project helped me strengthen my foundation in{" "}
                <b>HTML structure, CSS layout design</b>, and{" "}
                <b>JavaScript DOM manipulation</b>. I explored responsive design
                principles, component alignment, and color contrast to deliver a
                professional yet lightweight layout. It represents one of my
                early steps toward mastering front-end development before
                transitioning into frameworks like React and Next.js.
              </>
            )}
          </p>
        </section>

        <div>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {t.project.keyStack}
          </h2>
          <p
            className={`text-base ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
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
