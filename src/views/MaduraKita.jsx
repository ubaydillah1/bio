"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { DarkMode } from "../contexts/DarkMode";
import { useLocale } from "../contexts/LocaleContext";

const MaduraKita = () => {
  const { theme } = useContext(DarkMode);
  const { locale, t } = useLocale();
  const router = useRouter();

  const coverImage = "/assets/img/madura-1.jpg";

  return (
    <div className="max-w-[900px] mx-auto px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className={`flex items-center gap-2 text-sm transition mb-6 ${
          theme === "black"
            ? "text-[#999999] hover:text-white"
            : "text-slate-500 hover:text-black"
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
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            {locale === "id"
              ? "MaduraKita - Mendukung UMKM Lokal Madura"
              : "MaduraKita - Empowering Local MSMEs in Madura"}
          </h1>
          <p
            className={`text-base ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            {locale === "id"
              ? "Dikembangkan sebagai bagian dari tantangan inovasi regional untuk mendukung pelaku usaha lokal di Madura."
              : "Developed as part of a regional innovation challenge to support local entrepreneurs in Madura."}
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
          {t.project.try}
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
            {t.project.visitWebsite}
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
            {t.project.github}
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
            {t.project.about}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            {locale === "id" ? (
              <>
                <b>MaduraKita</b> adalah project akselerasi digital yang
                dirancang untuk menjembatani <b>UMKM lokal Madura</b> dengan
                ekonomi digital modern. Platform ini menonjolkan kerajinan
                tradisional dan inovasi bisnis melalui desain yang menarik,
                storytelling yang intuitif, dan presentasi berbasis teknologi.
                Project ini berperan sebagai <b>digital hub</b> yang
                menghubungkan komunitas, entrepreneur, dan solusi digital agar
                usaha kecil bisa berkembang di konteks yang lebih luas.
              </>
            ) : (
              <>
                <b>MaduraKita</b> is a digital acceleration project designed to
                bridge the gap between <b>local Madurese MSMEs</b> and the
                modern digital economy. The platform highlights traditional
                craftsmanship and business innovation through engaging design,
                intuitive storytelling, and technology-driven presentation. It
                serves as a <b>digital hub</b> connecting communities,
                entrepreneurs, and digital solutions empowering small businesses
                to thrive in a global context.
              </>
            )}
          </p>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            {t.project.technology}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            {locale === "id" ? (
              <>
                Platform ini dibangun menggunakan <b>Next.js</b> dengan{" "}
                <b>TypeScript</b> untuk skalabilitas dan maintainability.
                Styling menggunakan <b>Tailwind CSS</b> untuk menjaga
                responsivitas dan aksesibilitas, sementara <b>Framer Motion</b>{" "}
                membuat interface terasa hidup lewat animasi dan transisi
                storytelling yang fluid. Deployment dikelola melalui{" "}
                <b>Vercel</b> agar delivery cepat dan performa tetap reliable.
              </>
            ) : (
              <>
                The platform was built using <b>Next.js</b> with{" "}
                <b>TypeScript</b> for scalability and maintainability. Styling
                is powered by <b>Tailwind CSS</b> to ensure responsiveness and
                accessibility, while <b>Framer Motion</b> brings the interface
                to life with fluid animations and storytelling transitions.
                Deployment is managed through <b>Vercel</b>, ensuring fast
                delivery and reliable performance across regions.
              </>
            )}
          </p>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            {locale === "id" ? "Tujuan Project" : "Project Objective"}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            {locale === "id" ? (
              <>
                Tujuan utama MaduraKita adalah{" "}
                <b>memberdayakan pelaku usaha lokal</b> dengan memberi ruang
                digital untuk menampilkan identitas dan kreativitas mereka.
                Project ini juga bertujuan{" "}
                <b>menghubungkan warisan budaya dengan inovasi</b>, membantu
                kedai kopi lokal, pelaku kerajinan, dan layanan kreatif
                membangun presence digital yang lebih kuat.
              </>
            ) : (
              <>
                The main goal of MaduraKita is to{" "}
                <b>empower local entrepreneurs</b> by giving them a digital
                space to showcase their identity and creativity. The project
                also aims to <b>connect heritage with innovation</b>, helping
                local coffee shops, craft makers, and creative services build a
                stronger digital presence and reach broader audiences.
              </>
            )}
          </p>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            {t.project.challenges}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            {locale === "id" ? (
              <>
                Tantangan utamanya adalah menggabungkan{" "}
                <b>storytelling dan teknologi</b> dalam satu pengalaman yang
                tetap terasa autentik dengan identitas Madura. Tim perlu
                menyeimbangkan presentasi budaya dengan prinsip UI modern
                melalui motion dan komposisi layout agar setiap bisnis lokal
                terasa berbeda tetapi tetap harmonis.
              </>
            ) : (
              <>
                The key challenge was to combine{" "}
                <b>storytelling and technology</b> in a single cohesive
                experience that feels authentic to Madura's identity. The team
                needed to balance cultural presentation with modern UI
                principles using motion and layout composition to make each
                local business feel distinct while maintaining design harmony
                throughout the platform.
              </>
            )}
          </p>
        </section>

        <div>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            {t.project.keyStack}
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
