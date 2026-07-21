"use client";

import { useState, useContext, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Server,
  Cpu,
  Database,
  Layout,
  ExternalLink,
  Lock,
} from "lucide-react";
import { DarkMode } from "../contexts/DarkMode";
import { useLocale } from "../contexts/LocaleContext";
import { useProjectNavigation } from "../hooks/useProjectNavigation";

const OrbiChat = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useContext(DarkMode);
  const { locale, t } = useLocale();
  const { backToPortfolio } = useProjectNavigation(theme);

  const media = [{ type: "video", src: "/assets/video/orbi-video.mp4" }];

  const openViewer = (index) => {
    setCurrentIndex(index);
    setShowViewer(true);
    document.body.style.overflow = "hidden";
  };

  const closeViewer = () => {
    setShowViewer(false);
    document.body.style.overflow = "auto";
  };

  const nextMedia = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  }, [media.length]);

  const prevMedia = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  }, [media.length]);

  useEffect(() => {
    if (!showViewer) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextMedia();
      if (e.key === "ArrowLeft") prevMedia();
      if (e.key === "Escape") closeViewer();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showViewer, nextMedia, prevMedia]);

  return (
    <div className="max-w-[900px] mx-auto px-4 py-10">
      {/* Back Button */}
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
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div>
          <h1
            className={`text-[40px] font-semibold mb-2 max-w-[90%] ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {locale === "id"
              ? "OrbiChat - Platform AI Chatbot untuk Freelance Agency"
              : "OrbiChat - AI Chatbot Platform for Freelance Agencies"}
          </h1>
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${theme === "black" ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "bg-[#efe4d6] text-[#8b5f3d] border border-[#d9c3a8]"}`}
            >
              {t.project.underDevelopment}
            </span>
            <a
              href="https://www.linkedin.com/in/rafi-rohmat-a6a951215/"
              target="_blank"
              rel="noreferrer"
              className={`px-3 py-1 text-xs font-semibold rounded-full transition ${
                theme === "black"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                  : "bg-[#e9e1d2] text-[#496e66] border border-[#cfc3b0] hover:bg-[#d9cebd]"
              }`}
            >
              {t.project.collaboratedWith}
            </a>
          </div>
        </div>
      </div>

      {/* Hero Media */}
      <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-black/5">
        <video
          src={media[0].src}
          muted
          loop
          playsInline
          controls
          preload="metadata"
          poster="/assets/img/orbi-front.webp"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 my-6 auto-rows-auto">
        {media.map((item, index) => (
          <div
            key={index}
            onClick={() => openViewer(index)}
            className="relative cursor-pointer group h-auto"
          >
            <div className="relative">
              <video
                src={item.src}
                muted
                preload="metadata"
                poster="/assets/img/orbi-front.webp"
                className="rounded-lg object-cover w-full h-auto opacity-80 group-hover:opacity-60 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Play
                  size={32}
                  className="text-white opacity-90 group-hover:scale-110 transition-transform"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Media Viewer */}
      {showViewer && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={closeViewer}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
          >
            <X size={28} />
          </button>

          <button
            onClick={prevMedia}
            className="absolute left-6 text-white hover:text-gray-300 transition"
          >
            <ChevronLeft size={40} />
          </button>

          <video
            src={media[currentIndex].src}
            controls
            preload="metadata"
            poster="/assets/img/orbi-front.webp"
            className="max-w-[90%] max-h-[80%] rounded-lg object-contain"
          />

          <button
            onClick={nextMedia}
            className="absolute right-6 text-white hover:text-gray-300 transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}

      {/* Links & Credentials */}
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
            href="https://app.orbichat.pro/dashboard"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 transition w-fit ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-[#cfc3b0] text-[#3f3a33] hover:bg-[#e9e1d2]"
            }`}
          >
            {locale === "id" ? "Kunjungi Dashboard" : "Visit Dashboard"}
            <ExternalLink size={16} />
          </a>

          <div
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 opacity-60 cursor-not-allowed ${
              theme === "black"
                ? "border-[#444] text-[#888]"
                : "border-[#cfc3b0] text-[#4f4a42]"
            }`}
          >
            {t.project.github}
            <Lock size={16} />
          </div>
        </div>

        <div
          className={`mt-4 p-4 rounded-xl border text-sm ${
            theme === "black"
              ? "border-[#333] bg-[#121212] text-[#aaa]"
              : "border-[#cfc3b0] bg-[#f1eadf] text-[#3f3a33]"
          }`}
        >
          <p className="mb-1 font-semibold">
            {locale === "id" ? "Akun Test" : "Test Account"}
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <b>Email:</b> test@gmail.com / <b>Password:</b> testing123
            </li>
          </ul>
          <p className="mt-2 italic opacity-80">
            {locale === "id"
              ? "*Detail code bersifat confidential dan tidak dibuka publik karena batasan credential serta keamanan."
              : "*Code details are confidential and not publicly shared due to credentials and security restrictions."}
          </p>
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-12 mt-10">
        <section>
          <h2
            className={`text-[28px] font-semibold mb-4 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {t.project.about}
          </h2>
          <p
            className={`text-base text-justify leading-relaxed ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            {locale === "id" ? (
              <>
                <b>OrbiChat</b> adalah platform AI chatbot berbasis web yang
                dirancang untuk membantu <b>freelance agency</b> mengotomasi
                interaksi client menggunakan{" "}
                <b>Retrieval-Augmented Generation (RAG)</b> dan Large Language
                Models (LLM). Platform ini memungkinkan agency menyediakan AI
                assistant khusus untuk client yang mampu menjawab pertanyaan,
                memahami konteks percakapan yang kompleks, dan memakai custom
                knowledge base untuk support otomatis 24/7. Di luar automasi,
                OrbiChat juga berfungsi sebagai <b>lead generation tool</b>{" "}
                dengan menangkap email calon customer langsung dari chat flow.
              </>
            ) : (
              <>
                <b>OrbiChat</b> is a web-based AI chatbot platform specifically
                designed to help <b>freelance agencies</b> automate client
                interactions using{" "}
                <b>Retrieval-Augmented Generation (RAG)</b> and Large Language
                Models (LLM). This platform enables agencies to provide their
                clients with dedicated AI assistants capable of answering
                queries, understanding complex conversational context, and
                utilizing custom knowledge bases to provide 24/7 automated
                support. Beyond automation, OrbiChat also serves as a{" "}
                <b>lead generation tool</b>, capturing potential customer emails
                directly through the chat flow to help agencies grow their
                client pipeline.
              </>
            )}
          </p>
        </section>

        {/* Technical Architecture */}
        <section
          className={`p-8 rounded-2xl border ${theme === "black" ? "border-[#333] bg-[#121212]" : "border-[#cfc3b0] bg-[#f1eadf]"}`}
        >
          <h2
            className={`text-[28px] font-semibold mb-6 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {locale === "id"
              ? "Engineering Excellence: Arsitektur Multi-Service"
              : "Engineering Excellence: Multi-Service Architecture"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${theme === "black" ? "bg-blue-500/10 text-blue-400" : "bg-[#e3edf0] text-[#3d6874]"}`}
                >
                  <Server size={24} />
                </div>
                <h3
                  className={`text-xl font-medium ${theme === "black" ? "text-white" : "text-[#2d2a25]"}`}
                >
                  NestJS Backend
                </h3>
              </div>
              <p
                className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"}`}
              >
                {locale === "id" ? (
                  <>
                    Berperan sebagai <b>Orchestrator</b>. Menangani business
                    logic, authentication, API gateway, session management,
                    akses database, Role-Based Access Control (RBAC), dan
                    koordinasi service.
                  </>
                ) : (
                  <>
                    Acts as the <b>Orchestrator</b>. Handles business logic,
                    authentication, API gateway, session management, database
                    access, Role-Based Access Control (RBAC), and service
                    coordination.
                  </>
                )}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${theme === "black" ? "bg-green-500/10 text-green-400" : "bg-[#e4eee7] text-[#496e66]"}`}
                >
                  <Cpu size={24} />
                </div>
                <h3
                  className={`text-xl font-medium ${theme === "black" ? "text-white" : "text-[#2d2a25]"}`}
                >
                  FastAPI AI Service
                </h3>
              </div>
              <p
                className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"}`}
              >
                {locale === "id" ? (
                  <>
                    Fokus khusus pada{" "}
                    <b>
                      Data Ingestion dan RAG (Retrieval-Augmented Generation)
                      Query Processing
                    </b>
                    . Service ini menangani pemrosesan dokumen, interaksi vector
                    storage, prompt optimization, dan komunikasi efisien dengan
                    LLM menggunakan ekosistem AI Python.
                  </>
                ) : (
                  <>
                    Focused specifically on{" "}
                    <b>
                      Data Ingestion and RAG (Retrieval-Augmented Generation)
                      Query Processing
                    </b>
                    . Handles document processing, vector storage interaction,
                    prompt optimization, and efficient communication with LLMs,
                    leveraging Python's robust AI ecosystem.
                  </>
                )}
              </p>
            </div>
          </div>

          <div
            className={`mt-8 p-4 rounded-xl border border-dashed ${theme === "black" ? "border-[#444] text-[#888]" : "border-[#cfc3b0] text-[#756f64]"}`}
          >
            <p className="text-center font-mono text-xs uppercase tracking-widest mb-4">
              {locale === "id" ? "Alur Arsitektur" : "Architecture Flow"}
            </p>
            <div className="flex flex-col items-center gap-2 text-sm md:text-base font-medium">
              <div
                className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-white/5" : "bg-[#f7f2e9] border border-[#cfc3b0] shadow-none"}`}
              >
                {locale === "id" ? "User -> Next.js Frontend" : "User -> Next.js Frontend"}
              </div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div
                className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-blue-500/10 border-blue-500/20" : "bg-[#e3edf0] border-[#bfd0d5] text-[#3d6874]"}`}
              >
                NestJS Backend (Orchestrator)
              </div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div
                className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-green-500/10 border-green-500/20" : "bg-[#e4eee7] border-[#bdcfbf] text-[#496e66]"}`}
              >
                FastAPI AI Service (Python)
              </div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div
                className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-purple-500/10 border-purple-500/20" : "bg-[#ebe5ef] border-[#cec2d8] text-[#6b5d7c]"}`}
              >
                {locale === "id"
                  ? "LLM Provider / Knowledge Base"
                  : "LLM Provider / Knowledge Base"}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-6 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {t.project.features}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title:
                  locale === "id" ? "Chat Berbasis Konteks" : "Context-aware Chat",
                desc:
                  locale === "id"
                    ? "AI menjaga konteks percakapan sebelumnya agar respons tetap relevan."
                    : "AI maintains the context of previous conversations to provide highly relevant responses.",
              },
              {
                title: "Knowledge Base (RAG)",
                desc:
                  locale === "id"
                    ? "AI dapat menjawab pertanyaan berdasarkan data spesifik perusahaan menggunakan Retrieval-Augmented Generation."
                    : "AI is capable of answering questions based on specific company data using Retrieval-Augmented Generation.",
              },
              {
                title:
                  locale === "id" ? "Widget yang Bisa Di-embed" : "Embeddable Widget",
                desc:
                  locale === "id"
                    ? "Agency dapat memasang chatbot di website mana pun cukup dengan copy-paste snippet widget."
                    : "Agencies can deploy their chatbot anywhere: just copy-paste a widget snippet into any website and it's live.",
              },
              {
                title: "Session Management",
                desc:
                  locale === "id"
                    ? "Setiap user memiliki sesi percakapan independen yang tersimpan rapi."
                    : "Each user has an independent conversation session that is neatly stored.",
              },
              {
                title: "AI Guardrails",
                desc:
                  locale === "id"
                    ? "Membatasi domain percakapan AI agar tetap sesuai etika dan scope bisnis."
                    : "Limits the AI's conversation domain to ensure it stays within business ethics and scope.",
              },
              {
                title: "Lead Generation",
                desc:
                  locale === "id"
                    ? "Menangkap email visitor langsung dari chat flow dan mengubah percakapan menjadi lead yang bisa ditindaklanjuti."
                    : "Captures visitor emails directly through the chat flow, turning conversations into actionable leads for agencies.",
              },
              {
                title: "Analytics Dashboard",
                desc:
                  locale === "id"
                    ? "Melacak total lead, chat masuk, penggunaan token, dan metrik percakapan secara real-time dari dashboard pusat."
                    : "Track total leads, incoming chats, token usage, and conversation metrics in real-time from a centralized dashboard.",
              },
              {
                title: "Scalable AI Service",
                desc:
                  locale === "id"
                    ? "AI service dipisah agar ingestion dan query processing yang berat bisa ditangani secara independen."
                    : "AI service is decoupled to handle intensive ingestion and query processing independently.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div
                  className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${theme === "black" ? "bg-primary-dark" : "bg-primary-light"}`}
                ></div>
                <div>
                  <h4
                    className={`font-semibold mb-1 ${theme === "black" ? "text-white" : "text-[#2d2a25]"}`}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"}`}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {locale === "id" ? "Nilai Engineering" : "Engineering Value"}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            {locale === "id" ? (
              <>
                Project ini menunjukkan pemikiran <b>distributed service</b>{" "}
                yang matang dan <b>arsitektur multi-service</b>. Integrasi
                antara backend Node.js (NestJS) sebagai <b>Orchestrator</b> dan
                FastAPI berbasis Python untuk{" "}
                <b>RAG Ingestion dan Query Processing</b> menunjukkan kemampuan
                merancang sistem scalable dengan{" "}
                <b>separation of concerns</b> yang jelas.
              </>
            ) : (
              <>
                This project demonstrates mature{" "}
                <b>distributed service</b> thinking and{" "}
                <b>multi-service architecture</b>. The integration between a
                robust Node.js (NestJS) backend serving as the{" "}
                <b>Orchestrator</b> and a Python-based FastAPI dedicated to{" "}
                <b>RAG Ingestion and Query Processing</b> showcases expertise
                in designing scalable systems with a clear{" "}
                <b>separation of concerns</b>.
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
            {t.project.challenges}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            {locale === "id" ? (
              <>
                Salah satu tantangan engineering terbesar adalah menyeimbangkan{" "}
                <b>efisiensi token</b> dengan <b>akurasi respons</b>. Mengirim
                seluruh konteks ke LLM pada setiap query membuat token boros dan
                biaya tinggi, sementara trimming yang terlalu agresif bisa
                memicu hallucination dan kehilangan konteks. Solusinya adalah
                menerapkan <b>Adaptive RAG</b>, yaitu arsitektur di mana
                classifier AI ringan menganalisis query terlebih dahulu untuk
                menentukan apakah perlu retrieval knowledge base, konteks
                percakapan, atau bisa dijawab langsung. Setelah itu query baru
                diarahkan ke pipeline yang sesuai.
              </>
            ) : (
              <>
                One of the biggest engineering challenges was balancing{" "}
                <b>token efficiency</b> with <b>response accuracy</b>. Naively
                sending full context to the LLM on every query leads to
                excessive token consumption and high costs, while being too
                aggressive with trimming causes hallucinations and loss of
                context. The solution was implementing <b>Adaptive RAG</b>, an
                architecture where a lightweight classifier AI first analyzes
                each incoming query to determine whether it requires knowledge
                base retrieval, conversational context, or can be answered
                directly. Only then is the query routed to the appropriate
                pipeline, ensuring the LLM receives precisely the context it
                needs: nothing more, nothing less. This approach significantly
                reduced token waste while maintaining high response quality and
                contextual accuracy.
              </>
            )}
          </p>
        </section>

        <div className="pt-10 border-t border-[#cfc3b0] dark:border-white/10">
          <h2
            className={`text-[28px] font-semibold mb-6 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {locale === "id" ? "Stack Teknologi" : "Technology Stack"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-medium">
                <Layout
                  size={18}
                  className="text-primary-light dark:text-primary-dark"
                />
                Frontend
              </div>
              <ul
                className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"}`}
              >
                <li>Next.js</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-medium">
                <Server
                  size={18}
                  className="text-primary-light dark:text-primary-dark"
                />
                {locale === "id" ? "Backend dan AI" : "Backend & AI"}
              </div>
              <ul
                className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"}`}
              >
                <li>NestJS (Orchestrator)</li>
                <li>FastAPI (RAG & Ingestion)</li>
                <li>OpenAI GPT</li>
                <li>Adaptive RAG Pipeline</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-medium">
                <Database
                  size={18}
                  className="text-primary-light dark:text-primary-dark"
                />
                Infrastructure
              </div>
              <ul
                className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"}`}
              >
                <li>Supabase (PostgreSQL)</li>
                <li>Redis (Caching)</li>
                <li>Docker & Nginx</li>
                <li>VPS Deployment</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {t.project.keyStack}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            <b>
              Next.js, TypeScript, NestJS, FastAPI, Python, OpenAI GPT, Adaptive
              RAG, Supabase, Redis, Docker, Nginx, Tailwind CSS.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrbiChat;
