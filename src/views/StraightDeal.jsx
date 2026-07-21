"use client";

import { useState, useContext, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Server,
  Cpu,
  Database,
  Layout,
  Lock,
  Users,
  Activity,
} from "lucide-react";
import { DarkMode } from "../contexts/DarkMode";
import { useLocale } from "../contexts/LocaleContext";
import { useProjectNavigation } from "../hooks/useProjectNavigation";

const StraightDeal = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useContext(DarkMode);
  const { locale, t } = useLocale();
  const { backToPortfolio } = useProjectNavigation(theme);

  const images = [
    "/assets/img/straight-deal-cover.png",
    "/assets/img/straight-deal-1.png",
    "/assets/img/straight-deal-2.png",
    "/assets/img/straight-deal-3.png",
    "/assets/img/straight-deal-4.png",
    "/assets/img/straight-deal-5.png",
    "/assets/img/straight-deal-6.png",
    "/assets/img/straight-deal-7.png",
  ];

  const openViewer = (index) => {
    setCurrentIndex(index);
    setShowViewer(true);
    document.body.style.overflow = "hidden";
  };

  const closeViewer = () => {
    setShowViewer(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!showViewer) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeViewer();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showViewer, nextImage, prevImage]);

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

      {/* Title Area */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div>
          <h1
            className={`text-[40px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {locale === "id"
              ? "Straight Deal - Workflow Penjualan Mobil"
              : "Straight Deal - Car Selling Workflow"}
          </h1>
          <div className="flex items-center gap-3">
            <p
              className={`text-base ${
                theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
              }`}
            >
              {locale === "id" ? "Infrastruktur Backend oleh " : "Backend Infrastructure by "}
              <a
                href="https://odama.io"
                target="_blank"
                rel="noreferrer"
                className="text-[#FF6E00] hover:underline transition-all font-medium"
              >
                Odama
              </a>
            </p>
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${theme === "black" ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-[#e4eee7] text-[#496e66] border border-[#bdcfbf]"}`}>
              {locale === "id" ? "Production" : "Production"}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Media */}
      <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-black/5">
        <img
          src={images[0]}
          alt="Straight Deal Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 my-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Straight Deal ${index}`}
            className="rounded-lg object-cover cursor-pointer hover:opacity-80 transition aspect-video h-auto"
            onClick={() => openViewer(index)}
          />
        ))}
      </div>

      {/* Image Viewer */}
      {showViewer && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={closeViewer}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
          >
            <X size={28} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-gray-300 transition bg-black rounded-full p-1"
          >
            <ChevronLeft className="size-[24px] sm:size-[40px]" />
          </button>

          <img
            src={images[currentIndex]}
            alt="Viewer"
            className="max-w-[90%] max-h-[80%] rounded-lg object-contain"
          />

          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gray-300 transition bg-black rounded-full p-1"
          >
            <ChevronRight className="size-[24px] sm:size-[40px]" />
          </button>
        </div>
      )}

      {/* Production Stats Box */}
      <div className={`mt-10 p-6 rounded-2xl border flex flex-wrap gap-8 justify-around ${theme === "black" ? "border-[#333] bg-[#121212]" : "border-[#cfc3b0] bg-[#f1eadf]"}`}>
        <div className="text-center">
          <div className={`flex items-center justify-center mb-2 ${theme === "black" ? "text-blue-400" : "text-[#3d6874]"}`}>
            <Users size={24} />
          </div>
          <div className={`text-2xl font-bold ${theme === "black" ? "text-white" : "text-[#2d2a25]"}`}>1,400+</div>
          <div className={`text-xs uppercase tracking-widest ${theme === "black" ? "text-[#888]" : "text-[#756f64]"}`}>{locale === "id" ? "User Terdaftar" : "Registered Users"}</div>
        </div>
        <div className="w-px h-12 bg-current opacity-10 hidden sm:block"></div>
        <div className="text-center">
          <div className={`flex items-center justify-center mb-2 ${theme === "black" ? "text-green-400" : "text-[#496e66]"}`}>
            <Activity size={24} />
          </div>
          <div className={`text-2xl font-bold ${theme === "black" ? "text-white" : "text-[#2d2a25]"}`}>72</div>
          <div className={`text-xs uppercase tracking-widest ${theme === "black" ? "text-[#888]" : "text-[#756f64]"}`}>API Endpoints</div>
        </div>
        <div className="w-px h-12 bg-current opacity-10 hidden sm:block"></div>
        <div className="text-center">
          <div className={`flex items-center justify-center mb-2 ${theme === "black" ? "text-orange-400" : "text-[#8b5f3d]"}`}>
            <Server size={24} />
          </div>
          <div className={`text-2xl font-bold ${theme === "black" ? "text-white" : "text-[#2d2a25]"}`}>Live</div>
          <div className={`text-xs uppercase tracking-widest ${theme === "black" ? "text-[#888]" : "text-[#756f64]"}`}>{locale === "id" ? "Status Production" : "Production Status"}</div>
        </div>
      </div>

      {/* Links & Credentials */}
      <div className="mt-10 border-t pt-8 space-y-4">
        <h2
          className={`text-[26px] font-semibold ${
            theme === "black" ? "text-white" : "text-[#2d2a25]"
          }`}
        >
          {t.project.access}
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.straightdeal.com"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 transition w-fit ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-[#cfc3b0] text-[#3f3a33] hover:bg-[#e9e1d2]"
            }`}
          >
            {t.project.visitWebsite}
            <ExternalLink size={16} />
          </a>
          <div className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 opacity-60 cursor-not-allowed ${
            theme === "black"
              ? "border-[#444] text-[#888]"
              : "border-[#cfc3b0] text-[#4f4a42]"
          }`}>
            {t.project.github}
            <Lock size={16} />
          </div>
        </div>
        <p className={`italic text-sm opacity-80 ${theme === "black" ? "text-[#aaa]" : "text-[#5a554c]"}`}>
          {locale === "id"
            ? "*Detail code bersifat confidential dan tidak dibuka publik karena batasan client serta keamanan."
            : "*Code details are confidential and not publicly shared due to client and security restrictions."}
        </p>
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
                <b>Straight Deal</b> adalah platform penjualan mobil level
                production yang dibangun untuk membuat transaksi kendaraan lebih
                cepat, aman, dan transparan. Sebagai{" "}
                <b>Full Backend Engineer</b> untuk project ini, saya bekerja
                langsung dengan client untuk menerjemahkan kebutuhan bisnis yang
                kompleks menjadi infrastruktur yang robust. Platform ini
                menangani submission data kendaraan, automated valuation, hingga
                alur negosiasi dua arah antara user dan administrator.
              </>
            ) : (
              <>
                <b>Straight Deal</b> is a production-grade car-selling platform
                built to make vehicle transactions fast, secure, and
                transparent. As the <b>Full Backend Engineer</b> for this
                project, I worked directly with the client to translate complex
                business requirements into a robust infrastructure. The platform
                handles everything from vehicle data submission and automated
                valuation to a two-way negotiation flow between users and
                administrators.
              </>
            )}
          </p>
        </section>

        {/* Technical Architecture */}
        <section className={`p-8 rounded-2xl border ${theme === "black" ? "border-[#333] bg-[#121212]" : "border-[#cfc3b0] bg-[#f1eadf]"}`}>
          <h2
            className={`text-[28px] font-semibold mb-6 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {locale === "id"
              ? "Engineering Excellence: Arsitektur Backend"
              : "Engineering Excellence: Backend Architecture"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${theme === "black" ? "bg-blue-500/10 text-blue-400" : "bg-[#e3edf0] text-[#3d6874]"}`}>
                  <Server size={24} />
                </div>
                <h3 className={`text-xl font-medium ${theme === "black" ? "text-white" : "text-[#2d2a25]"}`}>Express.js Backend</h3>
              </div>
              <p className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"}`}>
                {locale === "id" ? (
                  <>
                    Arsitektur monolith dengan <b>Layered Structure</b>{" "}
                    (Controller - Service - Repository). Backend ini menangani
                    72 API endpoint secara robust dengan TypeScript type safety.
                  </>
                ) : (
                  <>
                    Monolith architecture with a clean{" "}
                    <b>Layered Structure</b> (Controller - Service -
                    Repository). Robustly handles 72 API endpoints with full
                    TypeScript type safety.
                  </>
                )}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${theme === "black" ? "bg-purple-500/10 text-purple-400" : "bg-[#ebe5ef] text-[#6b5d7c]"}`}>
                  <Cpu size={24} />
                </div>
                <h3 className={`text-xl font-medium ${theme === "black" ? "text-white" : "text-[#2d2a25]"}`}>{locale === "id" ? "Automated Cron Jobs" : "Automated Cron Jobs"}</h3>
              </div>
              <p className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"}`}>
                {locale === "id"
                  ? "Scheduled worker mengelola follow-up email otomatis, melacak offer expiration, dan memicu notifikasi sistem untuk user maupun admin."
                  : "Scheduled workers manage automated follow-up emails, track offer expirations, and trigger system-wide notifications for both users and admins."}
              </p>
            </div>
          </div>

          <div className={`mt-8 p-4 rounded-xl border border-dashed ${theme === "black" ? "border-[#444] text-[#888]" : "border-[#cfc3b0] text-[#756f64]"}`}>
            <p className="text-center font-mono text-xs uppercase tracking-widest mb-4">{locale === "id" ? "Workflow Bidding" : "Bidding Workflow"}</p>
            <div className="flex flex-col items-center gap-2 text-sm md:text-base font-medium">
              <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-white/5" : "bg-[#f7f2e9] border border-[#cfc3b0] shadow-none"}`}>{locale === "id" ? "User Submit Detail Mobil" : "User Submits Car Detail"}</div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-blue-500/10 border-blue-500/20" : "bg-[#e3edf0] border-[#bfd0d5] text-[#3d6874]"}`}>{locale === "id" ? "Admin Review dan Kirim Offer" : "Admin Reviews & Sends Offer"}</div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-green-500/10 border-green-500/20" : "bg-[#e4eee7] border-[#bdcfbf] text-[#496e66]"}`}>{locale === "id" ? "Accept -> Deal Closed" : "Accept -> Deal Closed"}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-orange-500/10 border-orange-500/20" : "bg-[#efe4d6] border-[#d9c3a8] text-[#8b5f3d]"}`}>{locale === "id" ? "Decline -> User Counter-Offer" : "Decline -> User Counter-Offer"}</div>
                </div>
              </div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-purple-500/10 border-purple-500/20" : "bg-[#ebe5ef] border-[#cec2d8] text-[#6b5d7c]"}`}>{locale === "id" ? "Keputusan Final Admin (Accept/Reject)" : "Admin Final Decision (Accept/Reject)"}</div>
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
                  locale === "id" ? "Bidding dan Negosiasi" : "Bidding & Negotiation",
                desc:
                  locale === "id"
                    ? "Alur negosiasi dua arah antara user dan admin dengan price locking."
                    : "A sophisticated two-way negotiation flow between users and admins with price locking.",
              },
              {
                title:
                  locale === "id" ? "Follow-up Otomatis" : "Automated Follow-up",
                desc:
                  locale === "id"
                    ? "Pipeline otomatis 7 tahap untuk email, call, dan text berdasarkan aktivitas user."
                    : "7-stage automated pipeline managing emails, calls, and texts based on user activity.",
              },
              {
                title:
                  locale === "id" ? "Verifikasi Identitas" : "Identity Verification",
                desc:
                  locale === "id"
                    ? "Integrasi Persona untuk KYC otomatis dan verifikasi identitas pemilik mobil."
                    : "Integration with Persona for automated KYC and ID verification of car owners.",
              },
              {
                title:
                  locale === "id" ? "Valuasi Mobil Lanjutan" : "Advanced Car Valuation",
                desc:
                  locale === "id"
                    ? "Menghitung harga berdasarkan VIN, mileage, accident history, dan 20+ condition marker."
                    : "Calculates prices based on VIN, mileage, accident history, and 20+ condition markers.",
              },
              {
                title:
                  locale === "id" ? "Sistem Media Multi-View" : "Multi-View Media System",
                desc:
                  locale === "id"
                    ? "Pipeline upload gambar mobil yang terstruktur untuk verifikasi bagian depan, belakang, dan interior."
                    : "Structured car image upload pipeline for front, rear, and interior condition verification.",
              },
              {
                title:
                  locale === "id" ? "Catatan Internal Admin" : "Admin Internal Notes",
                desc:
                  locale === "id"
                    ? "Sistem catatan kolaboratif untuk admin dalam memantau progress submission dan internal flag."
                    : "Collaborative notes system for administrators to track submission progress and internal flags.",
              },
              {
                title: "Role-Based Access (RBAC)",
                desc:
                  locale === "id"
                    ? "Isolasi permission yang ketat antara User, Admin, dan Visitor."
                    : "Strict permission isolation between Users, Admins, and Visitors.",
              },
              {
                title: "OTP & Secure Auth",
                desc:
                  locale === "id"
                    ? "Sistem authentication hybrid dengan Google OAuth2 dan Twilio SMS OTP yang aman."
                    : "Hybrid authentication system with Google OAuth2 and secure Twilio SMS OTP.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${theme === "black" ? "bg-primary-dark" : "bg-primary-light"}`}></div>
                <div>
                  <h4 className={`font-semibold mb-1 ${theme === "black" ? "text-white" : "text-[#2d2a25]"}`}>{feature.title}</h4>
                  <p className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"}`}>{feature.desc}</p>
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
            {t.project.challenges}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            {locale === "id" ? (
              <>
                Tantangan utama adalah mengelola{" "}
                <b>requirement yang terus berubah</b> di environment production.
                Bekerja langsung dengan client tanpa technical PM membuat saya
                perlu menerjemahkan kebutuhan bisnis ke teknis dan melakukan
                perubahan schema cepat sambil menjaga integritas data untuk
                1.400+ user. Saya menyelesaikannya dengan{" "}
                <b>strategi migrasi Prisma</b> yang disiplin dan arsitektur
                backend layered sehingga perubahan bisa modular tanpa merusak
                flow yang sudah berjalan. Selain itu, optimasi koneksi database
                untuk <b>serverless deployment di Vercel</b> membutuhkan
                pengelolaan connection pooling yang hati-hati.
              </>
            ) : (
              <>
                The primary challenge was managing{" "}
                <b>shifting requirements</b> in a live production environment.
                Working directly with a client without a technical PM meant I
                had to handle technical translations and implement rapid schema
                changes while maintaining data integrity for 1,400+ users. I
                solved this by implementing a rigorous{" "}
                <b>Prisma migration strategy</b> and a layered backend
                architecture that allowed for modular changes without breaking
                existing flows. Additionally, optimizing database connections
                for <b>serverless deployment on Vercel</b> required careful
                connection pooling management to handle concurrent traffic
                spikes during bidding sessions.
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
                <Layout size={18} className="text-primary-light dark:text-primary-dark" />
                Backend
              </div>
              <ul className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"}`}>
                <li>Express.js</li>
                <li>TypeScript</li>
                <li>Prisma ORM</li>
                <li>Layered Architecture</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-medium">
                <Lock size={18} className="text-primary-light dark:text-primary-dark" />
                {locale === "id" ? "Auth dan Komunikasi" : "Auth & Comms"}
              </div>
              <ul className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"}`}>
                <li>JWT / Google OAuth2</li>
                <li>Twilio SMS (OTP)</li>
                <li>SendGrid Email</li>
                <li>Persona (KYC)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-medium">
                <Database size={18} className="text-primary-light dark:text-primary-dark" />
                Infrastructure
              </div>
              <ul className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"}`}>
                <li>Supabase (PostgreSQL)</li>
                <li>Vercel Serverless</li>
                <li>Cron Jobs</li>
                <li>Nginx & Docker</li>
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
              Express.js, TypeScript, Prisma ORM, Supabase PostgreSQL, JWT, Google OAuth2, Twilio, SendGrid, Vercel, Docker.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StraightDeal;
