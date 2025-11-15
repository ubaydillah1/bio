import { useState, useContext, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Play,
  Book,
  GithubIcon,
} from "lucide-react";
import { DarkMode } from "../contexts/DarkMode";

const RavineCoffee = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useContext(DarkMode);

  const media = [
    { type: "image", src: "/assets/img/ravine-bg.png" },
    { type: "video", src: "/assets/video/ravine-1.mp4" },
    { type: "video", src: "/assets/video/ravine-2.mp4" },
    { type: "video", src: "/assets/video/ravine-3.mp4" },
    { type: "video", src: "/assets/video/ravine-4.mp4" },
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
            Ravine Coffee – Cafe Order Management System
          </h1>
        </div>
      </div>

      {/* Hero Media */}
      <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
        {media[0].type === "video" ? (
          <video
            src={media[0].src}
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={media[0].src}
            alt="Ravine Coffee Cover"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 my-6 auto-rows-auto">
        {media.map((item, index) => (
          <div
            key={index}
            onClick={() => openViewer(index)}
            className="relative cursor-pointer group h-auto"
          >
            {item.type === "video" ? (
              <>
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
              </>
            ) : (
              <img
                src={item.src}
                alt={`Ravine ${index}`}
                className="rounded-lg object-cover w-full h-auto hover:opacity-80 transition"
              />
            )}
          </div>
        ))}
      </div>

      {/* Warning Note */}
      <p
        className={`text-center italic mt-2 text-sm ${
          theme === "black" ? "text-red-400" : "text-red-600"
        }`}
      >
        *Realtime and WebSocket features are only available when running
        locally.*
      </p>

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

          {media[currentIndex].type === "video" ? (
            <video
              src={media[currentIndex].src}
              controls
              autoPlay
              className="max-w-[90%] max-h-[80%] rounded-lg object-contain"
            />
          ) : (
            <img
              src={media[currentIndex].src}
              alt="Viewer"
              className="max-w-[90%] max-h-[80%] rounded-lg object-contain"
            />
          )}

          <button
            onClick={nextMedia}
            className="absolute right-6 text-white hover:text-gray-300 transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}

      {/* Visit Links & Credentials */}
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
            href="https://ravine-coffee-shop.vercel.app/welcome"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 transition w-fit ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Visit Website for User Path
            <ExternalLink size={16} />
          </a>

          <a
            href="https://ravine-coffee-shop.vercel.app/login"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 transition w-fit ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Visit Login (Admin / Cashier)
            <ExternalLink size={16} />
          </a>

          <a
            href="https://GithubIcon .com/ubaydillah1/ravine-coffee-shop"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 transition w-fit ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Frontend Repo
            <GithubIcon size={16} />
          </a>

          <a
            href="https://GithubIcon .com/ubaydillah1/ravine-coffee-be"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 transition w-fit ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Backend Repo
            <GithubIcon size={16} />
          </a>

          <a
            href="https://documenter.getpostman.com/view/33200982/2sB3WwowG9#intro"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 transition w-fit ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Postman API Docs
            <Book size={16} />
          </a>
        </div>

        <div
          className={`mt-4 p-4 rounded-xl border text-sm ${
            theme === "black"
              ? "border-[#333] bg-[#121212] text-[#aaa]"
              : "border-slate-300 bg-slate-50 text-slate-700"
          }`}
        >
          <p className="mb-1 font-semibold">🧑‍💻 Test Accounts</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <b>Admin:</b> admin@gmail.com / <b>admin123</b>
            </li>
            <li>
              <b>Cashier:</b> cashier1@gmail.com / <b>cashier123</b>
            </li>
          </ul>
          <p className="mt-2 italic">
            Visit <b>/login</b> to test different user roles.
          </p>
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
            <b>Ravine Coffee</b> is an in-store cafe order and management system
            built to streamline every step of the customer experience. Customers
            can <b>place orders directly from their tables</b> via QR code or
            order at the cashier. Payments are handled securely through{" "}
            <b>QRIS using Midtrans</b>. The platform connects customers,
            cashiers, and kitchen staff in <b>real-time</b> using WebSocket,
            ensuring orders are tracked seamlessly from start to finish.
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
            The frontend is powered by <b>Next.js</b> with <b>Tailwind CSS</b>{" "}
            for styling, <b>TanStack Query</b> for efficient data fetching, and{" "}
            <b>Zustand</b> for lightweight state management. The backend uses{" "}
            <b>Express.js</b> and <b>Prisma ORM</b> connected to a{" "}
            <b>Supabase PostgreSQL</b> database. <b>Midtrans webhooks</b> handle
            real-time QRIS payments, while <b>WebSocket</b> ensures live order
            updates between cashier and kitchen screens. The project is deployed
            with <b>Vercel (frontend & backend)</b> for scalability and
            reliability. Additionally, <b>infinite scroll</b> is implemented to
            dynamically load menus or items, improving user experience on long
            lists.
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
            The goal is to create a{" "}
            <b>fast, connected, and user-friendly cafe ordering experience</b>.
            Each role—customer, cashier, and admin—has dedicated tools to ensure
            smooth operations, minimize manual work, and deliver consistent
            service even during busy hours.
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
            The platform serves three main roles: <b>Customer</b>,{" "}
            <b>Cashier</b>, and <b>Admin</b>. Customers can browse menus, place
            orders, and complete payments via QRIS. Cashiers handle manual
            orders and monitor <b>live kitchen updates</b>. Admins manage menus,
            track <b>revenues and transactions</b>, and oversee voucher features
            (coming soon).
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
            Building consistent <b>real-time synchronization</b> between
            multiple roles was a challenge. The system needed to align{" "}
            <b>Midtrans webhooks</b> for payment confirmations with{" "}
            <b>WebSocket updates</b> for live orders. Frontend optimization
            using <b>TanStack Query</b> and <b>Zustand</b> was crucial to avoid
            redundant re-renders under constant data flow. The backend was
            carefully structured to ensure <b>stable performance</b> and{" "}
            <b>accurate reporting</b> for admins.
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
              Next.js, Typescript, Tailwind CSS, TanStack Query, Zustand,
              Express.js, Prisma ORM, Supabase PostgreSQL, Midtrans QRIS,
              WebSocket, Vercel
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RavineCoffee;
