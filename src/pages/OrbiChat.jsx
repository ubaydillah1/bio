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
import { Helmet } from "react-helmet-async";
import { DarkMode } from "../contexts/DarkMode";

const OrbiChat = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useContext(DarkMode);

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
      <Helmet>
        <title>
          OrbiChat - AI Chatbot Platform for Freelance Agencies | Portfolio Ubay
          Dillah
        </title>
        <meta
          name="description"
          content="OrbiChat is a web-based AI chatbot platform specifically designed for freelance agencies to automate customer interaction using LLMs. Built by Ubay Dillah."
        />
        <meta property="og:title" content="OrbiChat - AI Chatbot Platform" />
        <meta
          property="og:description"
          content="Automate client interaction for freelance agencies using Large Language Models (LLM)."
        />
        <meta
          property="og:image"
          content="https://www.ubaydillah.tech/assets/img/mySelf.webp"
        />
        <meta
          property="og:url"
          content="https://www.ubaydillah.tech/orbichat"
        />
      </Helmet>

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
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div>
          <h1
            className={`text-[40px] font-semibold mb-2 max-w-[90%] ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            OrbiChat – AI Chatbot Platform for Freelance Agencies
          </h1>
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${theme === "black" ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "bg-orange-100 text-orange-700 border border-orange-200"}`}
            >
              Under Development
            </span>
          </div>
        </div>
      </div>

      {/* Hero Media */}
      <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-black/5">
        <video
          src={media[0].src}
          autoPlay
          muted
          loop
          playsInline
          controls
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
            autoPlay
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
            theme === "black" ? "text-white" : "text-black"
          }`}
        >
          Try It Yourself
        </h2>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://app.orbichat.pro/dashboard"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 transition w-fit ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Visit Dashboard
            <ExternalLink size={16} />
          </a>

          <div
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 opacity-60 cursor-not-allowed ${
              theme === "black"
                ? "border-[#444] text-[#888]"
                : "border-slate-300 text-slate-500"
            }`}
          >
            GitHub Repository
            <Lock size={16} />
          </div>
        </div>

        <div
          className={`mt-4 p-4 rounded-xl border text-sm ${
            theme === "black"
              ? "border-[#333] bg-[#121212] text-[#aaa]"
              : "border-slate-300 bg-slate-50 text-slate-700"
          }`}
        >
          <p className="mb-1 font-semibold">🧑‍💻 Test Account</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <b>Email:</b> test@gmail.com / <b>Password:</b> testing123
            </li>
          </ul>
          <p className="mt-2 italic opacity-80">
            *Code details are confidential and not publicly shared due to
            credentials and security restrictions.
          </p>
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-12 mt-10">
        <section>
          <h2
            className={`text-[28px] font-semibold mb-4 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            About The Platform
          </h2>
          <p
            className={`text-base text-justify leading-relaxed ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            <b>OrbiChat</b> is a web-based AI chatbot platform specifically
            designed to help <b>freelance agencies</b> automate client
            interactions using <b>Retrieval-Augmented Generation (RAG)</b> and
            Large Language Models (LLM). This platform enables agencies to
            provide their clients with dedicated AI assistants capable of
            answering queries, understanding complex conversational context, and
            utilizing custom knowledge bases to provide 24/7 automated support.
            Beyond automation, OrbiChat also serves as a{" "}
            <b>lead generation tool</b> — capturing potential customer emails
            directly through the chat flow to help agencies grow their client
            pipeline.
          </p>
        </section>

        {/* Technical Architecture */}
        <section
          className={`p-8 rounded-2xl border ${theme === "black" ? "border-[#333] bg-[#121212]" : "border-slate-200 bg-slate-50"}`}
        >
          <h2
            className={`text-[28px] font-semibold mb-6 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Engineering Excellence: Multi-Service Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${theme === "black" ? "bg-blue-500/10 text-blue-400" : "bg-blue-100 text-blue-600"}`}
                >
                  <Server size={24} />
                </div>
                <h3
                  className={`text-xl font-medium ${theme === "black" ? "text-white" : "text-black"}`}
                >
                  NestJS Backend
                </h3>
              </div>
              <p
                className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}
              >
                Acts as the <b>Orchestrator</b>. Handles business logic,
                authentication, API gateway, session management, database
                access, Role-Based Access Control (RBAC), and service
                coordination.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${theme === "black" ? "bg-green-500/10 text-green-400" : "bg-green-100 text-green-600"}`}
                >
                  <Cpu size={24} />
                </div>
                <h3
                  className={`text-xl font-medium ${theme === "black" ? "text-white" : "text-black"}`}
                >
                  FastAPI AI Service
                </h3>
              </div>
              <p
                className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}
              >
                Focused specifically on{" "}
                <b>
                  Data Ingestion and RAG (Retrieval-Augmented Generation) Query
                  Processing
                </b>
                . Handles document processing, vector storage interaction,
                prompt optimization, and efficient communication with LLMs,
                leveraging Python's robust AI ecosystem.
              </p>
            </div>
          </div>

          <div
            className={`mt-8 p-4 rounded-xl border border-dashed ${theme === "black" ? "border-[#444] text-[#888]" : "border-slate-300 text-slate-400"}`}
          >
            <p className="text-center font-mono text-xs uppercase tracking-widest mb-4">
              Architecture Flow
            </p>
            <div className="flex flex-col items-center gap-2 text-sm md:text-base font-medium">
              <div
                className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-white/5" : "bg-white shadow-sm border"}`}
              >
                User → Next.js Frontend
              </div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div
                className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-blue-500/10 border-blue-500/20" : "bg-blue-50 border-blue-200"}`}
              >
                NestJS Backend (Orchestrator)
              </div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div
                className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-green-500/10 border-green-500/20" : "bg-green-50 border-green-200"}`}
              >
                FastAPI AI Service (Python)
              </div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div
                className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-purple-500/10 border-purple-500/20" : "bg-purple-50 border-purple-200"}`}
              >
                LLM Provider / Knowledge Base
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-6 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Context-aware Chat",
                desc: "AI maintains the context of previous conversations to provide highly relevant responses.",
              },
              {
                title: "Knowledge Base (RAG)",
                desc: "AI is capable of answering questions based on specific company data using Retrieval-Augmented Generation.",
              },
              {
                title: "Embeddable Widget",
                desc: "Agencies can deploy their chatbot anywhere — just copy-paste a widget snippet into any website and it's live.",
              },
              {
                title: "Session Management",
                desc: "Each user has an independent conversation session that is neatly stored.",
              },
              {
                title: "AI Guardrails",
                desc: "Limits the AI's conversation domain to ensure it stays within business ethics and scope.",
              },
              {
                title: "Lead Generation",
                desc: "Captures visitor emails directly through the chat flow, turning conversations into actionable leads for agencies.",
              },
              {
                title: "Analytics Dashboard",
                desc: "Track total leads, incoming chats, token usage, and conversation metrics in real-time from a centralized dashboard.",
              },
              {
                title: "Scalable AI Service",
                desc: "AI service is decoupled to handle intensive ingestion and query processing independently.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div
                  className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${theme === "black" ? "bg-primary-dark" : "bg-primary-light"}`}
                ></div>
                <div>
                  <h4
                    className={`font-semibold mb-1 ${theme === "black" ? "text-white" : "text-black"}`}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}
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
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Engineering Value
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            This project demonstrates mature <b>distributed service</b> thinking
            and <b>multi-service architecture</b>. The integration between a
            robust Node.js (NestJS) backend serving as the <b>Orchestrator</b>{" "}
            and a Python-based FastAPI dedicated to{" "}
            <b>RAG Ingestion and Query Processing</b> showcases expertise in
            designing scalable systems with a clear{" "}
            <b>separation of concerns</b>.
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
            One of the biggest engineering challenges was balancing{" "}
            <b>token efficiency</b> with <b>response accuracy</b>. Naively
            sending full context to the LLM on every query leads to excessive
            token consumption and high costs, while being too aggressive with
            trimming causes hallucinations and loss of context. The solution was
            implementing <b>Adaptive RAG</b> — an architecture where a
            lightweight classifier AI first analyzes each incoming query to
            determine whether it requires knowledge base retrieval,
            conversational context, or can be answered directly. Only then is
            the query routed to the appropriate pipeline, ensuring the LLM
            receives precisely the context it needs — nothing more, nothing
            less. This approach significantly reduced token waste while
            maintaining high response quality and contextual accuracy.
          </p>
        </section>

        <div className="pt-10 border-t border-slate-200 dark:border-white/10">
          <h2
            className={`text-[28px] font-semibold mb-6 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Technology Stack
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
                className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}
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
                Backend & AI
              </div>
              <ul
                className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}
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
                className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}
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
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Key Stack
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
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
