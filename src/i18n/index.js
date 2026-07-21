export const locales = ["en", "id"];
export const defaultLocale = "en";

export function isLocale(locale) {
  return locales.includes(locale);
}

export function normalizeLocale(locale) {
  return isLocale(locale) ? locale : defaultLocale;
}

export function localizedPath(locale, path = "/") {
  const normalizedLocale = normalizeLocale(locale);
  const normalizedPath = path === "/" ? "" : path;
  return `/${normalizedLocale}${normalizedPath}`;
}

export const dictionaries = {
  en: {
    common: {
      back: "Back",
      blog: "Read my blog",
      workWithMe: "WORK WITH ME",
      sharePrompt: "Know someone looking for a fullstack developer?",
      shareLinkedIn: "Share this portfolio on LinkedIn",
      language: "Language",
    },
    hero: {
      badge: "INTRODUCE",
      titlePrefix: "Say Hi from",
      name: "Ubay Dillah,",
      roleStart: "Fullstack",
      roleRest: "Developer and",
      ai: "AI",
      roleEnd: "Enthusiast",
      description:
        "Say hi from Ubay Dillah, a Fullstack Developer and AI Enthusiast who crafts user-friendly web experiences with clean design and smooth functionality.",
    },
    about: {
      badge: "ABOUT",
      title: "Every Great Product Begins with an even",
      titleHighlight: "Better Story",
      paragraphs: [
        "I am a Fullstack Developer with a backend focus, dedicated to building reliable, scalable systems that truly perform in production.",
        "On the frontend, I craft responsive interfaces using React, Next.js, and TypeScript paired with Tailwind CSS. For the backend, I architect structured APIs and efficient data flows using NestJS, Express, Prisma ORM, and databases like PostgreSQL & MongoDB.",
        "Most recently, I engineered the backend for Straight Deal, a live car-selling platform serving 1,400+ users, where I handled secure RBAC, JWT authentication, and third-party integrations with Twilio and SendGrid.",
        "I am always open to full-time roles, freelance projects, or just a good technical conversation. Reach me at: ubaydillah1737@gmail.com",
      ],
      experience: "Years of Experience",
      projects: "Projects Completed",
    },
    portfolio: {
      badge: "PORTFOLIO",
      title: "Featured",
      titleHighlight: "Portfolios",
      items: {
        orbichat: "OrbiChat - AI Chatbot Platform for Business",
        straightDeal:
          "Straight Deal - Car Selling Workflow (Backend - Odama Studio)",
        ravineCoffee:
          "Ravine Coffee - Cafe POS and Online Ordering System",
        stora: "Stora - Storage Management",
        maduraKita: "MaduraKita - Empowering Local MSMEs in Madura",
        linea: "Linea Studio - Landing Page with animation",
      },
    },
    project: {
      try: "Try It Yourself",
      access: "Project Access",
      visitWebsite: "Visit Website",
      github: "GitHub Repository",
      about: "About The Platform",
      aboutProject: "About The Project",
      technology: "Technology",
      features: "Features",
      challenges: "Challenges",
      keyStack: "Key Stack",
      underDevelopment: "Under Development",
      collaboratedWith: "Collaborated with Rafi Rohmat",
    },
  },
  id: {
    common: {
      back: "Kembali",
      blog: "Baca blog saya",
      workWithMe: "KERJA SAMA",
      sharePrompt: "Kenal seseorang yang butuh fullstack developer?",
      shareLinkedIn: "Bagikan portfolio ini di LinkedIn",
      language: "Bahasa",
    },
    hero: {
      badge: "PERKENALAN",
      titlePrefix: "Halo dari",
      name: "Ubay Dillah,",
      roleStart: "Fullstack",
      roleRest: "Developer dan",
      ai: "AI",
      roleEnd: "Enthusiast",
      description:
        "Halo dari Ubay Dillah, Fullstack Developer dan AI Enthusiast yang membangun pengalaman web ramah pengguna dengan desain bersih dan fungsionalitas yang mulus.",
    },
    about: {
      badge: "TENTANG",
      title: "Setiap produk hebat berawal dari",
      titleHighlight: "cerita yang kuat",
      paragraphs: [
        "Saya adalah Fullstack Developer dengan fokus backend, terbiasa membangun sistem yang reliable, scalable, dan siap berjalan di production.",
        "Di frontend, saya membuat antarmuka responsif dengan React, Next.js, TypeScript, dan Tailwind CSS. Di backend, saya merancang API terstruktur dan alur data efisien menggunakan NestJS, Express, Prisma ORM, serta database seperti PostgreSQL dan MongoDB.",
        "Terbaru, saya mengerjakan backend Straight Deal, platform jual beli mobil live dengan 1.400+ pengguna, mencakup RBAC, JWT authentication, dan integrasi pihak ketiga seperti Twilio dan SendGrid.",
        "Saya terbuka untuk full-time role, freelance project, atau diskusi teknis yang menarik. Hubungi saya di: ubaydillah1737@gmail.com",
      ],
      experience: "Tahun Pengalaman",
      projects: "Project Selesai",
    },
    portfolio: {
      badge: "PORTFOLIO",
      title: "Portfolio",
      titleHighlight: "Pilihan",
      items: {
        orbichat: "OrbiChat - Platform AI Chatbot untuk Bisnis",
        straightDeal:
          "Straight Deal - Workflow Penjualan Mobil (Backend - Odama Studio)",
        ravineCoffee:
          "Ravine Coffee - Sistem POS Cafe dan Online Ordering",
        stora: "Stora - Manajemen Penyimpanan",
        maduraKita: "MaduraKita - Mendukung UMKM Lokal Madura",
        linea: "Linea Studio - Landing Page dengan animasi",
      },
    },
    project: {
      try: "Coba Sendiri",
      access: "Akses Project",
      visitWebsite: "Kunjungi Website",
      github: "Repository GitHub",
      about: "Tentang Platform",
      aboutProject: "Tentang Project",
      technology: "Teknologi",
      features: "Fitur",
      challenges: "Tantangan",
      keyStack: "Stack Utama",
      underDevelopment: "Dalam Pengembangan",
      collaboratedWith: "Kolaborasi dengan Rafi Rohmat",
    },
  },
};

export function getDictionary(locale) {
  return dictionaries[normalizeLocale(locale)];
}
