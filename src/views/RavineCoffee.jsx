"use client";

import { useState, useContext, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Play,
  Book,
  GithubIcon,
  Server,
  Database,
  Layout,
  Users,
  CreditCard,
} from "lucide-react";
import { DarkMode } from "../contexts/DarkMode";
import { useLocale } from "../contexts/LocaleContext";

const RavineCoffee = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useContext(DarkMode);
  const { locale, t } = useLocale();
  const router = useRouter();

  const media = [
    { type: "image", src: "/assets/img/ravine-bg.webp" },
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
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div>
          <h1
            className={`text-[40px] font-semibold mb-2 max-w-[90%] ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            {locale === "id"
              ? "Ravine Coffee - Sistem Manajemen Order Cafe"
              : "Ravine Coffee - Cafe Order Management System"}
          </h1>
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${theme === "black" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "bg-blue-100 text-blue-700 border border-blue-200"}`}>
              {locale === "id" ? "Project Portfolio" : "Portfolio Project"}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Media */}
      <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden bg-black/5">
        {media[0].type === "video" ? (
          <video
            src={media[0].src}
            autoPlay
            muted
            loop
            playsInline
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

      {/* Quick Stats Box */}
      <div className={`mt-10 p-6 rounded-2xl border flex flex-wrap gap-8 justify-around ${theme === "black" ? "border-[#333] bg-[#121212]" : "border-slate-200 bg-slate-50"}`}>
        <div className="text-center">
          <div className={`flex items-center justify-center mb-2 ${theme === "black" ? "text-blue-400" : "text-blue-600"}`}>
            <Users size={24} />
          </div>
          <div className={`text-2xl font-bold ${theme === "black" ? "text-white" : "text-black"}`}>{locale === "id" ? "3 Role" : "3 Roles"}</div>
          <div className={`text-xs uppercase tracking-widest ${theme === "black" ? "text-[#888]" : "text-slate-400"}`}>{locale === "id" ? "Customer/Kasir/Admin" : "Customer/Cashier/Admin"}</div>
        </div>
        <div className="w-px h-12 bg-current opacity-10 hidden sm:block"></div>
        <div className="text-center">
          <div className={`flex items-center justify-center mb-2 ${theme === "black" ? "text-green-400" : "text-green-600"}`}>
            <CreditCard size={24} />
          </div>
          <div className={`text-2xl font-bold ${theme === "black" ? "text-white" : "text-black"}`}>QRIS</div>
          <div className={`text-xs uppercase tracking-widest ${theme === "black" ? "text-[#888]" : "text-slate-400"}`}>{locale === "id" ? "Integrasi Midtrans" : "Midtrans Integration"}</div>
        </div>
        <div className="w-px h-12 bg-current opacity-10 hidden sm:block"></div>
        <div className="text-center">
          <div className={`flex items-center justify-center mb-2 ${theme === "black" ? "text-purple-400" : "text-purple-600"}`}>
            <Server size={24} />
          </div>
          <div className={`text-2xl font-bold ${theme === "black" ? "text-white" : "text-black"}`}>Fullstack</div>
          <div className={`text-xs uppercase tracking-widest ${theme === "black" ? "text-[#888]" : "text-slate-400"}`}>{locale === "id" ? "Deploy End-to-End" : "End-to-End Deploy"}</div>
        </div>
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

      {/* Links & Credentials */}
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
            href="https://ravine-coffee-shop.vercel.app/welcome"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 transition w-fit ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {locale === "id" ? "Kunjungi Website (User)" : "Visit Website (User)"}
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
            {locale === "id" ? "Kunjungi Login (Admin/Kasir)" : "Visit Login (Admin/Cashier)"}
            <ExternalLink size={16} />
          </a>

          <a
            href="https://github.com/ubaydillah1/ravine-coffee-shop"
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
            href="https://github.com/ubaydillah1/ravine-coffee-be"
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-sm whitespace-nowrap border rounded-lg px-4 py-2 transition w-fit ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {locale === "id" ? "Repo Backend" : "Backend Repo"}
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
          <p className="mb-1 font-semibold">
            {locale === "id" ? "Akun Test" : "Test Accounts"}
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <b>Admin:</b> admin@gmail.com / <b>admin123</b>
            </li>
            <li>
              <b>{locale === "id" ? "Kasir" : "Cashier"}:</b>{" "}
              cashier1@gmail.com / <b>cashier123</b>
            </li>
          </ul>
          <p className="mt-2 italic opacity-80">
            {locale === "id" ? (
              <>
                *Kunjungi <b>/login</b> untuk mencoba role user yang berbeda.
                Fitur WebSocket dioptimalkan untuk local environment.
              </>
            ) : (
              <>
                *Visit <b>/login</b> to test different user roles. WebSocket
                features are optimized for local environments.
              </>
            )}
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
            {t.project.about}
          </h2>
          <p
            className={`text-base text-justify leading-relaxed ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            {locale === "id" ? (
              <>
                <b>Ravine Coffee</b> adalah sistem manajemen cafe fullstack yang
                dibuat untuk mendigitalisasi seluruh perjalanan customer di
                tempat. Sebagai <b>Solo Fullstack Developer</b>, saya membangun
                solusi end-to-end di mana customer bisa scan QR di meja, melihat
                menu, dan membayar langsung melalui <b>QRIS Midtrans</b>.
                Sistem ini memastikan setiap order tersinkron real-time antara
                customer, kasir, dan kitchen staff.
              </>
            ) : (
              <>
                <b>Ravine Coffee</b> is a fullstack cafe management system built
                to digitize the entire in-store customer journey. As the{" "}
                <b>Solo Fullstack Developer</b>, I engineered an end-to-end
                solution where customers can scan a QR code at their table,
                browse the menu, and pay instantly via <b>QRIS Midtrans</b>.
                The system ensures that every order is synchronized in real-time
                between customers, cashiers, and kitchen staff, providing a
                seamless and paperless experience.
              </>
            )}
          </p>
        </section>

        {/* Technical Architecture */}
        <section className={`p-8 rounded-2xl border ${theme === "black" ? "border-[#333] bg-[#121212]" : "border-slate-200 bg-slate-50"}`}>
          <h2
            className={`text-[28px] font-semibold mb-6 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            {locale === "id"
              ? "Engineering Excellence: Arsitektur Real-Time"
              : "Engineering Excellence: Real-Time Architecture"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${theme === "black" ? "bg-blue-500/10 text-blue-400" : "bg-blue-100 text-blue-600"}`}>
                  <Layout size={24} />
                </div>
                <h3 className={`text-xl font-medium ${theme === "black" ? "text-white" : "text-black"}`}>{locale === "id" ? "Hybrid State Management" : "Hybrid State Management"}</h3>
              </div>
              <p className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}>
                {locale === "id" ? (
                  <>
                    Menggabungkan <b>TanStack Query</b> untuk server state
                    (caching dan fetching) dan <b>Zustand</b> untuk client
                    state yang ringan. Ini menjaga UI tetap responsif dan
                    sinkron saat data terus berubah.
                  </>
                ) : (
                  <>
                    Combining <b>TanStack Query</b> for server state (caching &
                    fetching) and <b>Zustand</b> for lightweight client state
                    management. Ensures the UI remains responsive and
                    synchronized during constant data updates.
                  </>
                )}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${theme === "black" ? "bg-green-500/10 text-green-400" : "bg-green-100 text-green-600"}`}>
                  <Database size={24} />
                </div>
                <h3 className={`text-xl font-medium ${theme === "black" ? "text-white" : "text-black"}`}>{locale === "id" ? "Pola DB yang Resilient" : "Resilient DB Pattern"}</h3>
              </div>
              <p className={`text-sm ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}>
                {locale === "id" ? (
                  <>
                    Menerapkan pola <b>Data Snapshotting</b> pada OrderItems.
                    Saat order dibuat, detail produk seperti nama dan harga
                    disalin ke record transaksi agar invoice historis tetap
                    akurat meskipun produk diubah atau dihapus.
                  </>
                ) : (
                  <>
                    Implemented a <b>Data Snapshotting</b> pattern on
                    OrderItems. When an order is placed, product details (name,
                    price) are copied to the transaction record, ensuring
                    historical invoice accuracy even if products are later
                    modified or deleted.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className={`mt-8 p-4 rounded-xl border border-dashed ${theme === "black" ? "border-[#444] text-[#888]" : "border-slate-300 text-slate-400"}`}>
            <p className="text-center font-mono text-xs uppercase tracking-widest mb-4">{locale === "id" ? "Workflow Order dan Payment" : "Ordering & Payment Workflow"}</p>
            <div className="flex flex-col items-center gap-2 text-sm md:text-base font-medium">
              <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-white/5" : "bg-white shadow-sm border"}`}>{locale === "id" ? "Customer Scan QR dan Order" : "Customer Scans QR & Orders"}</div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-blue-500/10 border-blue-500/20" : "bg-blue-50 border-blue-200"}`}>{locale === "id" ? "Payment QRIS Midtrans -> Webhook" : "Midtrans QRIS Payment -> Webhook"}</div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-green-500/10 border-green-500/20" : "bg-green-50 border-green-200"}`}>{locale === "id" ? "Backend Broadcast via WebSocket" : "Backend Broadcasts via WebSocket"}</div>
              <div className="h-4 w-px bg-current opacity-20"></div>
              <div className={`px-4 py-2 rounded-lg ${theme === "black" ? "bg-purple-500/10 border-purple-500/20" : "bg-purple-50 border-purple-200"}`}>{locale === "id" ? "Kasir dan Kitchen Sinkron Instan" : "Cashier & Kitchen Sync Instantly"}</div>
            </div>
          </div>
        </section>

        <section>
          <h2
            className={`text-[28px] font-semibold mb-6 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            {t.project.features}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title:
                  locale === "id" ? "Contactless Ordering" : "Contactless Ordering",
                desc:
                  locale === "id"
                    ? "Menu digital dan sistem order melalui QR code khusus per meja."
                    : "Digital menu and ordering system via table-specific QR codes.",
              },
              {
                title: "Midtrans QRIS Integration",
                desc:
                  locale === "id"
                    ? "Workflow pembayaran otomatis dengan update status real-time melalui webhook."
                    : "Automated payment workflow with real-time status updates via webhooks.",
              },
              {
                title: "Real-Time Sync",
                desc:
                  locale === "id"
                    ? "Notifikasi order instan antara layar kasir dan kitchen menggunakan WebSockets."
                    : "Instant order notification between cashier and kitchen screens using WebSockets.",
              },
              {
                title:
                  locale === "id" ? "Integritas Historis" : "Historical Integrity",
                desc:
                  locale === "id"
                    ? "Sistem snapshot berbasis Prisma untuk menjaga akurasi transaksi meskipun data produk berubah."
                    : "Prisma-backed snapshot system to preserve transaction accuracy across product changes.",
              },
              {
                title:
                  locale === "id" ? "Manajemen Voucher" : "Voucher Management",
                desc:
                  locale === "id"
                    ? "Discount engine yang mendukung kupon fixed dan percentage-based."
                    : "Sophisticated discount engine supporting fixed and percentage-based coupons.",
              },
              {
                title:
                  locale === "id" ? "Catalog Teroptimasi" : "Optimized Catalog",
                desc:
                  locale === "id"
                    ? "Infinite scrolling dan caching efisien untuk menu cafe yang besar."
                    : "Infinite scrolling and efficient caching for large cafe menus.",
              },
              {
                title:
                  locale === "id" ? "Dashboard Multi-Role" : "Multi-Role Dashboards",
                desc:
                  locale === "id"
                    ? "Interface khusus untuk Customer, Kasir, dan Administrator."
                    : "Dedicated interfaces for Customers, Cashiers, and Administrators.",
              },
              {
                title:
                  locale === "id" ? "Riwayat dan Log Order" : "Order History & Logs",
                desc:
                  locale === "id"
                    ? "Tracking state lengkap untuk setiap order dari OPENBILL sampai COMPLETED."
                    : "Comprehensive state tracking for every order from OPENBILL to COMPLETED.",
              },
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
            {t.project.challenges}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            {locale === "id" ? (
              <>
                Salah satu tantangan engineering utama adalah mengelola{" "}
                <b>WebSockets di serverless infrastructure</b>. Deploy ke
                Vercel berarti harus menghadapi sifat serverless function yang
                stateless dan tidak dirancang untuk koneksi persisten. Saya
                mengatasinya dengan merancang <b>reconnection strategies</b>{" "}
                serta memastikan webhook Midtrans menjadi fallback reliable
                untuk konfirmasi pembayaran. Tantangan lain adalah{" "}
                <b>mengamankan koneksi WebSocket</b> agar hanya role Kasir dan
                Kitchen yang terautentikasi yang bisa menerima broadcast event
                sensitif. Di frontend, saya memakai <b>TanStack Query</b> untuk
                mencegah re-render berulang saat update order real-time masuk.
              </>
            ) : (
              <>
                One of the primary engineering challenges was managing{" "}
                <b>WebSockets on Serverless Infrastructure</b>. Deploying to
                Vercel meant dealing with the stateless nature of serverless
                functions, which aren't natively designed for persistent
                connections. I addressed this by architecting the system to
                handle <b>reconnection strategies</b> and ensuring that Midtrans
                webhooks served as a reliable fallback for payment confirmation.
                Another major hurdle was <b>securing WebSocket connections</b>;
                ensuring that only authenticated Cashier and Kitchen roles could
                listen to sensitive broadcast events. Finally, I optimized the
                frontend using <b>TanStack Query</b> to prevent redundant
                re-renders when real-time order updates were received,
                maintaining a smooth 60fps experience even during peak activity.
              </>
            )}
          </p>
        </section>

        <div className="pt-10 border-t border-slate-200 dark:border-white/10">
          <h2
            className={`text-[28px] font-semibold mb-6 ${
              theme === "black" ? "text-white" : "text-black"
            }`}
          >
            {locale === "id" ? "Stack Teknologi" : "Technology Stack"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-medium">
                <Layout size={18} className="text-primary-light dark:text-primary-dark" />
                Frontend
              </div>
              <ul className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>TanStack Query</li>
                <li>Zustand</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-medium">
                <Server size={18} className="text-primary-light dark:text-primary-dark" />
                {locale === "id" ? "Backend dan API" : "Backend & API"}
              </div>
              <ul className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}>
                <li>Express.js</li>
                <li>Prisma ORM</li>
                <li>Socket.io / ws</li>
                <li>Midtrans SDK</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-medium">
                <Database size={18} className="text-primary-light dark:text-primary-dark" />
                Infrastructure
              </div>
              <ul className={`text-sm space-y-1 ${theme === "black" ? "text-[#999999]" : "text-slate-500"}`}>
                <li>Supabase (PostgreSQL)</li>
                <li>Vercel Deployment</li>
                <li>Postman Docs</li>
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
            {t.project.keyStack}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-slate-500"
            }`}
          >
            <b>
              Next.js, TypeScript, Express.js, Prisma ORM, Supabase, Midtrans QRIS, WebSockets, Zustand, TanStack Query, Vercel.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RavineCoffee;
