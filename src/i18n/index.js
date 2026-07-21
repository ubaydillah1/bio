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
    resume: {
      badge: "RESUME",
      experience: "Experience",
      education: "Education",
      courses: "Courses",
      experiences: [
        {
          company: "Molca Teknologi Nusantara",
          location: "Surabaya, East Java, Indonesia · Hybrid",
          date: "Jan 2026 - May 2026",
          type: "Internship",
          roles: [
            {
              title: "Full-stack Developer",
              points: [
                "Built and maintained scalable fullstack features across a monorepo architecture, shipping 50+ production-ready deliverables in Next.js and tRPC while consistently meeting sprint goals in an Agile environment.",
                "Improved codebase maintainability by refactoring complex cross-module workflows, enforcing separation of concerns and reducing technical debt across shared services.",
                "Designed an event-driven pipeline using Redis to support asynchronous processing, decoupling components and improving overall system scalability.",
                "Adopted Drizzle ORM for end-to-end type safety between the database layer and API, and evaluated Hono.js as a lightweight option for high-performance microservice design.",
                "Actively contributed in sprint ceremonies, code reviews, and cross-team collaboration to ensure consistent delivery cadence across multiple concurrent services.",
              ],
              skills: ["Next.js", "tRPC", "Redis", "Drizzle ORM", "Hono.js", "Agile"],
            },
          ],
        },
        {
          company: "Odama Studio",
          location: "Remote",
          date: "Jan 2025 - Jun 2025",
          type: "Contract",
          roles: [
            {
              title: "Back End Developer",
              points: [
                "Designed and built the backend infrastructure for Straight Deal, a live car-selling platform serving 1,400+ registered users.",
                "Architected the end-to-end car submission workflow, from initial user listing to final admin price offer, powered by Express.js and Prisma ORM on a Supabase database.",
                "Developed 72 REST API endpoints, implementing Role-Based Access Control (RBAC) to manage distinct permission levels for users and administrators.",
                "Secured the platform with a custom JWT authentication system and Google OAuth2 login integration.",
                "Integrated Twilio for SMS notifications and SendGrid for transactional email. All endpoints documented in Postman to support efficient frontend collaboration.",
              ],
              skills: ["Express.js", "Prisma ORM", "Supabase", "RBAC", "JWT", "OAuth2", "Twilio", "SendGrid"],
            },
          ],
        },
        {
          company: "Web Development Workshop",
          date: "Aug 2024",
          roles: [
            {
              title: "Instructor",
              description:
                "Delivered 4 interactive sessions on HTML, CSS, and JavaScript fundamentals during a campus event, and prepared tailored materials to improve participants' understanding of web development basics.",
            },
          ],
        },
      ],
      educationItems: [
        {
          date: "2023 - Present",
          institution: "University of Trunojoyo Madura",
          roles: [{ title: "Information Systems", description: "Current GPA: 3.90/4.00" }],
        },
      ],
      courseItems: [
        {
          date: "Oct 2023 - Feb 2024",
          institution: "Harisenin.com",
          roles: [
            {
              title: "Full Stack Developer Bootcamp",
              points: [
                "Completed an intensive 5-month bootcamp with a perfect GPA of 4.00.",
                "Front-End: Mastered React.js, HTML & CSS, and JavaScript fundamentals.",
                "Back-End: Built REST APIs with Node.js and implemented secure authentication systems.",
                "Databases: Designed efficient database structures using ERD principles.",
                "Version Control: Managed complex workflows and merge conflicts using Git and GitHub.",
                "Soft Skills: Developed strong analytical thinking and problem-solving capabilities.",
              ],
              skills: ["React.js", "Express.js", "Node.js", "Git", "GitHub", "Database Design"],
            },
          ],
        },
      ],
    },
    skills: {
      badge: "SKILLS",
      title: "My",
      titleHighlight: "Expertise",
    },
    contact: {
      badge: "CONTACT",
      title: "Let's Work",
      titleHighlight: "Together!",
      fullName: "FULL NAME",
      fullNamePlaceholder: "Your Full Name",
      phone: "PHONE",
      optional: "Optional",
      email: "EMAIL",
      emailPlaceholder: "Your Email",
      gender: "GENDER",
      message: "MESSAGE",
      messagePlaceholder: "Write Your Message here...",
      send: "Send Message",
      sending: "Sending...",
      thankTitle: "Thank You!",
      thankBody: "Your message has been sent successfully. We'll get back to you soon.",
      close: "Close",
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
    resume: {
      badge: "RESUME",
      experience: "Pengalaman",
      education: "Pendidikan",
      courses: "Kursus",
      experiences: [
        {
          company: "Molca Teknologi Nusantara",
          location: "Surabaya, Jawa Timur, Indonesia · Hybrid",
          date: "Jan 2026 - Mei 2026",
          type: "Magang",
          roles: [
            {
              title: "Full-stack Developer",
              points: [
                "Membangun dan memelihara fitur fullstack yang scalable dalam arsitektur monorepo, serta mengirim 50+ deliverable production-ready menggunakan Next.js dan tRPC sambil menjaga target sprint Agile.",
                "Meningkatkan maintainability codebase melalui refactor workflow lintas modul, penerapan separation of concerns, dan pengurangan technical debt pada shared services.",
                "Merancang pipeline event-driven menggunakan Redis untuk proses asynchronous, memisahkan ketergantungan antar komponen, dan meningkatkan skalabilitas sistem.",
                "Mengadopsi Drizzle ORM untuk type safety end-to-end antara layer database dan API, serta mengevaluasi Hono.js sebagai opsi microservice yang ringan dan cepat.",
                "Aktif berkontribusi dalam sprint ceremony, code review, dan kolaborasi lintas tim untuk menjaga ritme delivery di beberapa service sekaligus.",
              ],
              skills: ["Next.js", "tRPC", "Redis", "Drizzle ORM", "Hono.js", "Agile"],
            },
          ],
        },
        {
          company: "Odama Studio",
          location: "Remote",
          date: "Jan 2025 - Jun 2025",
          type: "Kontrak",
          roles: [
            {
              title: "Back End Developer",
              points: [
                "Merancang dan membangun infrastruktur backend untuk Straight Deal, platform jual beli mobil live dengan 1.400+ pengguna terdaftar.",
                "Membangun workflow end-to-end submission mobil, dari listing awal user hingga penawaran harga admin, menggunakan Express.js dan Prisma ORM di database Supabase.",
                "Mengembangkan 72 REST API endpoint dengan Role-Based Access Control (RBAC) untuk mengatur permission user dan admin.",
                "Mengamankan platform dengan custom JWT authentication dan integrasi login Google OAuth2.",
                "Mengintegrasikan Twilio untuk SMS notification dan SendGrid untuk transactional email. Semua endpoint didokumentasikan di Postman untuk kolaborasi frontend yang efisien.",
              ],
              skills: ["Express.js", "Prisma ORM", "Supabase", "RBAC", "JWT", "OAuth2", "Twilio", "SendGrid"],
            },
          ],
        },
        {
          company: "Web Development Workshop",
          date: "Agu 2024",
          roles: [
            {
              title: "Instruktur",
              description:
                "Mengajar 4 sesi interaktif tentang dasar HTML, CSS, dan JavaScript dalam acara kampus, serta menyiapkan materi yang disesuaikan untuk memperkuat pemahaman peserta tentang dasar web development.",
            },
          ],
        },
      ],
      educationItems: [
        {
          date: "2023 - Sekarang",
          institution: "Universitas Trunojoyo Madura",
          roles: [{ title: "Sistem Informasi", description: "IPK saat ini: 3.90/4.00" }],
        },
      ],
      courseItems: [
        {
          date: "Okt 2023 - Feb 2024",
          institution: "Harisenin.com",
          roles: [
            {
              title: "Full Stack Developer Bootcamp",
              points: [
                "Menyelesaikan bootcamp intensif selama 5 bulan dengan GPA sempurna 4.00.",
                "Front-End: Menguasai dasar React.js, HTML & CSS, dan JavaScript.",
                "Back-End: Membangun REST API dengan Node.js dan menerapkan sistem authentication yang aman.",
                "Database: Mendesain struktur database efisien menggunakan prinsip ERD.",
                "Version Control: Mengelola workflow Git dan GitHub, termasuk merge conflict.",
                "Soft Skills: Mengembangkan kemampuan berpikir analitis dan problem solving.",
              ],
              skills: ["React.js", "Express.js", "Node.js", "Git", "GitHub", "Database Design"],
            },
          ],
        },
      ],
    },
    skills: {
      badge: "SKILLS",
      title: "Keahlian",
      titleHighlight: "Saya",
    },
    contact: {
      badge: "KONTAK",
      title: "Mari Bekerja",
      titleHighlight: "Sama!",
      fullName: "NAMA LENGKAP",
      fullNamePlaceholder: "Nama lengkap kamu",
      phone: "TELEPON",
      optional: "Opsional",
      email: "EMAIL",
      emailPlaceholder: "Email kamu",
      gender: "GENDER",
      message: "PESAN",
      messagePlaceholder: "Tulis pesan kamu di sini...",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      thankTitle: "Terima Kasih!",
      thankBody: "Pesan kamu berhasil dikirim. Saya akan membalas secepatnya.",
      close: "Tutup",
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
