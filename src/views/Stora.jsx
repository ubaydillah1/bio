"use client";

import { useState, useContext, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Github,
  Play,
} from "lucide-react";
import { DarkMode } from "../contexts/DarkMode";
import { useLocale } from "../contexts/LocaleContext";
import { useProjectNavigation } from "../hooks/useProjectNavigation";

const Stora = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useContext(DarkMode);
  const { locale, t } = useLocale();
  const { backToPortfolio } = useProjectNavigation(theme);

  const media = [
    { type: "image", src: "/assets/img/stora-cover.png" },
    { type: "image", src: "/assets/img/stora-1.png" },
    { type: "image", src: "/assets/img/stora-2.png" },
    { type: "video", src: "/assets/video/stora-demo.mp4" },
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
        <h1
          className={`text-[40px] font-semibold ${
            theme === "black" ? "text-white" : "text-[#2d2a25]"
          }`}
        >
          {locale === "id"
            ? "Stora - Manajemen Penyimpanan"
            : "Stora - Storage Management"}
        </h1>
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
            alt="Stora Cover"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 my-6">
        {media.map((item, index) => (
          <div
            key={index}
            onClick={() => openViewer(index)}
            className="cursor-pointer group"
          >
            {item.type === "video" ? (
              <div className="relative">
                <video
                  src={item.src}
                  muted
                  className="rounded-lg opacity-80 group-hover:opacity-60 transition"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play size={32} className="text-white opacity-90" />
                </div>
              </div>
            ) : (
              <img
                src={item.src}
                alt={`Stora ${index}`}
                className="rounded-lg hover:opacity-80 transition"
              />
            )}
          </div>
        ))}
      </div>

      {/* Viewer */}
      {showViewer && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button
            onClick={closeViewer}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
          >
            <X size={28} />
          </button>

          {/* Previous */}
          <button
            onClick={prevMedia}
            className="absolute left-6 text-white transition bg-black rounded-full p-1 hover:text-gray-300"
          >
            <ChevronLeft className="size-[40px]" />
          </button>

          {/* Media */}
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

          {/* Next */}
          <button
            onClick={nextMedia}
            className="absolute right-6 text-white transition bg-black rounded-full p-1 hover:text-gray-300"
          >
            <ChevronRight className="size-[40px]" />
          </button>
        </div>
      )}

      {/* Visit Links */}
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
            href="https://stora-storage-management.vercel.app"
            target="_blank"
            className={`flex items-center gap-2 text-sm border rounded-lg px-4 py-2 transition ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-[#cfc3b0] text-[#3f3a33] hover:bg-[#e9e1d2]"
            }`}
          >
            {t.project.visitWebsite}
            <ExternalLink size={16} />
          </a>

          <a
            href="https://github.com/ubaydillah1/stora"
            target="_blank"
            className={`flex items-center gap-2 text-sm border rounded-lg px-4 py-2 transition ${
              theme === "black"
                ? "border-[#444] text-[#ccc] hover:bg-[#1a1a1a]"
                : "border-[#cfc3b0] text-[#3f3a33] hover:bg-[#e9e1d2]"
            }`}
          >
            {t.project.github}
            <Github size={16} />
          </a>
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-8 mt-10">
        {/* About */}
        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {t.project.about}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            {locale === "id" ? (
              <>
                <b>Stora</b> adalah sistem file-management yang membantu user
                upload, mengatur, preview, rename, dan menghapus file lewat
                interface yang bersih dan intuitif. User dapat membuat folder,
                berpindah direktori, dan mengelola file seperti platform cloud
                storage. Project ini dibuat untuk menunjukkan arsitektur backend
                yang scalable dan desain frontend yang terstruktur.
              </>
            ) : (
              <>
                <b>Stora</b> is a file-management system that helps users
                upload, organize, preview, rename, and delete files with a clean
                and intuitive interface. Users can create folders, navigate
                directories, and manage files similar to cloud storage
                platforms. It is built as a portfolio project to demonstrate
                scalable backend architecture and structured frontend design.
              </>
            )}
          </p>
        </section>

        {/* Technology */}
        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {t.project.technology}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            {locale === "id" ? (
              <>
                Frontend menggunakan <b>Next.js</b> dengan <b>TypeScript</b>{" "}
                dan <b>Tailwind CSS</b>. Backend terintegrasi dengan{" "}
                <b>Supabase PostgreSQL</b> untuk database dan{" "}
                <b>Supabase Storage</b> untuk upload file. <b>Prisma ORM</b>{" "}
                digunakan untuk schema dan typed query. Sistem mengikuti
                struktur multi-layer dengan{" "}
                <b>Repository, Service, dan Controller</b> agar logic tetap rapi
                dan mudah dirawat.
              </>
            ) : (
              <>
                The frontend uses <b>Next.js</b> with <b>TypeScript</b> and{" "}
                <b>Tailwind CSS</b>. The backend integrates with{" "}
                <b>Supabase PostgreSQL</b> for database storage and{" "}
                <b>Supabase Storage</b> for file uploads.
                <b>Prisma ORM</b> is used for schema and typed queries. The
                system follows a multi-layer structure with{" "}
                <b>Repository, Service, and Controller</b> to keep logic
                organized and clean.
              </>
            )}
          </p>
        </section>

        {/* Goal */}
        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {locale === "id" ? "Tujuan" : "The Goal"}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            {locale === "id"
              ? "Tujuannya adalah membuat platform file management yang fleksibel, bersih, dan developer-friendly sekaligus menunjukkan struktur backend dan usability frontend. Project ini menonjolkan kemampuan desain API, modeling database, arsitektur UI, dan integrasi cloud."
              : "The goal is to create a flexible, clean, and developer-friendly file management platform that demonstrates backend structure and frontend usability. It highlights skills in API design, database modeling, UI architecture, and cloud integration."}
          </p>
        </section>

        {/* Audience */}
        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {locale === "id" ? "User dan Audiens" : "User and Audience"}
          </h2>
          <p
            className={`text-base text-justify ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            {locale === "id" ? (
              <>
                Stora dirancang sebagai <b>project portfolio developer</b> yang
                menampilkan arsitektur terstruktur, integrasi Supabase, dan
                kemampuan modern Next.js. Project ini cocok untuk developer yang
                ingin melihat reusable pattern atau recruiter yang mengevaluasi
                kemampuan backend/frontend engineering.
              </>
            ) : (
              <>
                Stora is designed as a <b>developer portfolio project</b>{" "}
                showcasing structured architecture, Supabase integration, and
                modern Next.js capabilities. It is ideal for developers who want
                to explore reusable patterns or recruiters evaluating
                backend/frontend engineering skills.
              </>
            )}
          </p>
        </section>

        {/* Challenges */}
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
            {locale === "id"
              ? "Tantangan utamanya adalah recursive folder deletion, sinkronisasi file yang konsisten antara database dan Supabase Storage, serta performa preview. Menjaga navigasi direktori tetap stabil dan mencegah fetch berulang juga menjadi bagian penting."
              : "Implementing recursive folder deletion, consistent file syncing between database and Supabase storage, and handling preview performance were key challenges. Ensuring stable directory navigation and preventing redundant fetches was also crucial."}
          </p>
        </section>

        {/* Next Feature */}
        <section>
          <h2
            className={`text-[28px] font-semibold mb-2 ${
              theme === "black" ? "text-white" : "text-[#2d2a25]"
            }`}
          >
            {locale === "id" ? "Fitur Berikutnya" : "Next Features"}
          </h2>

          <ul
            className={`list-disc pl-6 space-y-2 text-base ${
              theme === "black" ? "text-[#999999]" : "text-[#4f4a42]"
            }`}
          >
            <li>
              {locale === "id" ? (
                <>
                  <b>File Sharing</b> - User akan bisa membuat link yang dapat
                  dibagikan, memilih waktu kedaluwarsa, mengatur permission
                  (view-only atau allow download), dan menambahkan password
                  opsional.
                </>
              ) : (
                <>
                  <b>File Sharing</b> - Users will be able to generate
                  shareable links, choose expiration time, assign permissions
                  (view-only or allow download), and optionally protect the link
                  with a password.
                </>
              )}
            </li>
          </ul>
        </section>

        {/* Key Stack */}
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
              Next.js, TypeScript, Prisma ORM, Supabase PostgreSQL, Supabase
              Storage, Tailwind CSS
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stora;
