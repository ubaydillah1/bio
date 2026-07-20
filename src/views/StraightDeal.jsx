"use client";

import { useState, useContext, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
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

const StraightDeal = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useContext(DarkMode);
  const router = useRouter();

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
        onClick={() => router.back()}
        className={`flex items-center gap-2 text-sm transition mb-6 ${
          theme === "black"
            ? "text-[#999999] hover:text-white"
            : "text-slate-500 hover:text-black"
        }`}
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Title Area */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div>
          <h1
            className={`text-[40px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Straight Deal – Car Selling Workflow
          </h1>
          <div className="flex items-center gap-3">
            <p
              className={`text-base ${
                theme === "black" ? "text-[#999999]" : "text-slate-500"
              }`}
            >
              Backend Infrastructure by{" "}
              <a
                href="https://odama.io"
                target="_blank"
                rel="noreferrer"
                className="text-[#FF6E00] hover:underline transition-all font-medium"
              >
                Odama
              </a>
            </p>
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${theme === "black" ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-green-100 text-green-700 border border-green-200"}`}>
              Production
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
      <div className={`mt-10 p-6 rounded-2xl border flex flex-wrap gap-8 justify-around ${theme === "black" ? "border-[#333] bg-[#121212]" : "border-slate-200 bg-slate-50"}`}>
        <div className="text-center">
          <div className={`flex items-center justify-center mb-2 ${theme === "black" ? "text-blue-400" : "text-blue-600"}`}>
            <Users size={24} />
          </div>
          <div className={`text-2xl font-bold ${theme === "black" ? "text-white" : "text-black"}`}>1,400+</div>
          <div className={`text-xs uppercase tracking-widest ${theme === "black" ? "text-[#888]" : "text-slate-400"}`}>Registered Users</div>
        </div>
        <div className="w-px h-12 bg-current opacity-10 hidden sm:block"></div>
        <div className="text-center">
          <div className={`flex items-center justify-center mb-2 ${theme === "black" ? "text-green-400" : "text-green-600"}`}>
            <Activity size={24} />
          </div>
          <div className={`text-2xl font-bold ${theme === "black" ? "text-white" : "text-black"}`}>72</div>
          <div className={`text-xs uppercase tracking-widest ${theme === "black" ? "text-[#888]" : "text-slate-400"}`}>API Endpoints</div>
        </div>
        <div className="w-px h-12 bg-current opacity-10 hidden sm:block"></div>
        <div className="text-center">
          <div className={`flex items-center justify-center mb-2 ${theme === "black" ? "text-orange-400" : "text-orange-600"}`}>
            <Server size={24} />
          </div>
          <div className={`text-2xl font-bold ${theme === "black" ? "text-white" : "text-black"}`}>Live</div>
          <div className={`text-xs uppercase tracking-widest ${theme === "black" ? "text-[#888]" : "text-slate-400"}`}>Production Status</div>
        </div>
      </div>

      {/* Links & Credentials */}
      <div className="mt-10 border-t pt-8 space-y-4">
        <h2
          className={`text-[26px] font-semibold ${
            theme === "black" ? "text-white" : "text-black"
          }`}
        >
          Project Access
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.straightdeal.com"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 transition w-fit ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Visit Website
            <ExternalLink size={16} />
          </a>
          <div className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 opacity-60 cursor-not-allowed ${
            theme === "black"
              ? "border-[#444] text-[#888]"
              : "border-slate-300 text-slate-500"
          }`}>
            GitHub Repository
            <Lock size={16} />
          </div>
        </div>
        <p className={`italic text-sm opacity-80 ${theme === "black" ? "text-[#aaa]" : "text-slate-600"}`}>
          *Code details are confidential and not publicly shared due to client and security restrictions.
        </p>
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
            <b>Straight Deal</b> is a production-grade car-selling platform built to make vehicle transactions fast, secure, and transparent. As the <b>Full Backend Engineer</b> for this project, I worked directly with the client to translate complex business requirements into a robust infrastructure. The platform handles everything from vehicle data submission and automated valuation to a two-way negotiation flow between users and administrators.
          </p>
        </section>

        {/* Technical Architecture */}
        <section className={`p-8 rounded-2xl border ${theme === "black" ? "border-[#333] bg-[#121212]" : "border-slate-200 bg-slate-50"}`}>
          <h2
            className={`text-[28px] font-semibold mb-6 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Engineering Excellence: Backend Architecture
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${theme === "black" ? "bg-blue-500/10 text-blue-400" : "bg-blue-100 text-blue-600"}`}>
                  <Server size={24} />
                </div>
                <h3 className={`text-xl font-medium ${theme === "black" ? "text-white" : "text-black"}`}>Express.js Backend</h3>
              </div>
              <p className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}>
                Monolith architecture with a clean <b>Layered Structure</b> (Controller → Service → Repository). Robustly handles 72 API endpoints with full TypeScript type safety.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${theme === "black" ? "bg-purple-500/10 text-purple-400" : "bg-purple-100 text-purple-600"}`}>
                  <Cpu size={24} />
                </div>
                <h3 className={`text-xl font-medium ${theme === "black" ? "text-white" : "text-black"}`}>Automated Cron Jobs</h3>
              </div>
              <p className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}>
                Scheduled workers manage automated follow-up emails, track offer expirations, and trigger system-wide notifications for both users and admins.
              </p>
            </div>
          </div>

          <div className={`mt-8 p-4 rounded-xl border border-dashed ${theme === "black" ? "border-[#444] text-[#888]" : "border-slate-300 text-slate-400"}`}>
            <p className="text-center font-mono text-xs uppercase tracking-widest mb-4">Bidding Workflow</p>
            <div className="flex flex-col items-center gap-2 text-sm md:text-base font-medium">
              <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-white/5" : "bg-white shadow-sm border"}`}>User Submits Car Detail</div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-blue-500/10 border-blue-500/20" : "bg-blue-50 border-blue-200"}`}>Admin Reviews & Sends Offer</div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-green-500/10 border-green-500/20" : "bg-green-50 border-green-200"}`}>Accept → Deal Closed</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-orange-500/10 border-orange-500/20" : "bg-orange-50 border-orange-200"}`}>Decline → User Counter-Offer</div>
                </div>
              </div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-purple-500/10 border-purple-500/20" : "bg-purple-50 border-purple-200"}`}>Admin Final Decision (Accept/Reject)</div>
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
              { title: "Bidding & Negotiation", desc: "A sophisticated two-way negotiation flow between users and admins with price locking." },
              { title: "Automated Follow-up", desc: "7-stage automated pipeline managing emails, calls, and texts based on user activity." },
              { title: "Identity Verification", desc: "Integration with Persona for automated KYC and ID verification of car owners." },
              { title: "Advanced Car Valuation", desc: "Calculates prices based on VIN, mileage, accident history, and 20+ condition markers." },
              { title: "Multi-View Media System", desc: "Structured car image upload pipeline for front, rear, and interior condition verification." },
              { title: "Admin Internal Notes", desc: "Collaborative notes system for administrators to track submission progress and internal flags." },
              { title: "Role-Based Access (RBAC)", desc: "Strict permission isolation between Users, Admins, and Visitors." },
              { title: "OTP & Secure Auth", desc: "Hybrid authentication system with Google OAuth2 and secure Twilio SMS OTP." },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${theme === "black" ? "bg-primary-dark" : "bg-primary-light"}`}></div>
                <div>
                  <h4 className={`font-semibold mb-1 ${theme === "black" ? "text-white" : "text-black"}`}>{feature.title}</h4>
                  <p className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}>{feature.desc}</p>
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
            Challenges
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            The primary challenge was managing <b>shifting requirements</b> in a live production environment. Working directly with a client without a technical PM meant I had to handle technical translations and implement rapid schema changes while maintaining data integrity for 1,400+ users. I solved this by implementing a rigorous <b>Prisma migration strategy</b> and a layered backend architecture that allowed for modular changes without breaking existing flows. Additionally, optimizing database connections for <b>serverless deployment on Vercel</b> required careful connection pooling management to handle concurrent traffic spikes during bidding sessions.
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
                <Layout size={18} className="text-primary-light dark:text-primary-dark" />
                Backend
              </div>
              <ul className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}>
                <li>Express.js</li>
                <li>TypeScript</li>
                <li>Prisma ORM</li>
                <li>Layered Architecture</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-medium">
                <Lock size={18} className="text-primary-light dark:text-primary-dark" />
                Auth & Comms
              </div>
              <ul className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}>
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
              <ul className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}>
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
              Express.js, TypeScript, Prisma ORM, Supabase PostgreSQL, JWT, Google OAuth2, Twilio, SendGrid, Vercel, Docker.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StraightDeal;
