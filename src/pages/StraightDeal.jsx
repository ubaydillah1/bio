import { useState, useContext, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
} from "lucide-react";
import { DarkMode } from "../contexts/DarkMode";

const StraightDeal = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useContext(DarkMode);

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

      {/* Title + Try Button */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div>
          <h1
            className={`text-[40px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            Straight Deal – Car Selling Workflow
          </h1>
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
              className="text-[#FF6E00] hover:underline transition-all"
            >
              Odama
            </a>
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
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
            className="rounded-lg object-cover cursor-pointer hover:opacity-80 transition"
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
        </div>

        <p
          className={`italic text-sm ${
            theme === "black" ? "text-[#999999]" : "text-slate-500"
          }`}
        >
          *Code details are confidential and not publicly shared due to client
          restrictions.*
        </p>
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
            <b>Straight Deal</b> is a <b>car-selling platform</b> built to make
            transactions fast, secure, and transparent. Users can submit car
            details, verify ownership, and receive real-time price offers from
            admins. The backend ensures stable data management and efficient
            workflows for both users and administrators.
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
            The backend is powered by <b>Express.js</b> and <b>Prisma ORM</b>,
            connected to a <b>Supabase PostgreSQL</b> database for structured
            and consistent data handling. <b>JWT authentication</b> secures all
            API access, while <b>Google OAuth2</b> provides a smooth login
            experience. <b>Twilio</b> handles SMS notifications, and{" "}
            <b>SendGrid</b> manages email delivery. The system is deployed on{" "}
            <b>Vercel</b> for scalability and quick response times, with{" "}
            <b>API documentation in Postman</b> for seamless frontend
            integration.
          </p>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            The Goal
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            The goal was to build a robust, secure, and maintainable backend
            system that supports the entire car-selling workflow efficiently.
            Each step from data submission to final transaction is handled with
            high reliability and minimal latency.
          </p>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            User and Audience
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            The system serves car owners seeking a quick and trusted selling
            experience, and admins responsible for verifying submissions,
            managing offers, and completing deals all through a unified backend
            service.
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
            Implementing Role-Based Access Control (RBAC) while maintaining high
            API performance was challenging. The serverless deployment on Vercel
            required optimizing database connections to prevent cold-start
            issues. Integration with Twilio, SendGrid, and Google OAuth2
            demanded precise asynchronous handling to ensure consistent uptime.
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
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            <b>
              Express.js, Typescript, Prisma ORM, Supabase PostgreSQL, JWT,
              Google OAuth2, Twilio, SendGrid, Vercel
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StraightDeal;
