export const siteConfig = {
  name: "Ubay Dillah Portfolio",
  title: "Ubay Dillah - Fullstack Web Developer",
  description:
    "Portfolio Ubay Dillah, Fullstack Web Developer Indonesia yang membangun aplikasi web scalable dengan React, Next.js, Node.js, Express, dan integrasi AI.",
  url: "https://www.ubaydillah.tech",
  author: "Ubay Dillah",
  email: "ubaydillah1737@gmail.com",
  location: "Jakarta, Indonesia",
  role: "Fullstack Web Developer",
  image: "/assets/img/mySelf.webp",
  sameAs: [
    "https://github.com/ubaydillah1",
    "https://www.linkedin.com/in/ubay-dillah/",
  ],
};

export const seoPages = {
  home: {
    path: "/",
    title: "Ubay Dillah - Fullstack Web Developer Indonesia",
    description:
      "Portfolio Ubay Dillah, Fullstack Web Developer Indonesia untuk React, Next.js, Node.js, Express, API, dashboard, dan aplikasi AI.",
    keywords: [
      "Ubay Dillah",
      "Fullstack Developer Indonesia",
      "Web Developer Indonesia",
      "React Developer",
      "Next.js Developer",
      "Node.js Developer",
      "Portfolio Developer",
      "AI Enthusiast",
    ],
    image: "/assets/img/mySelf.webp",
    imageAlt: "Ubay Dillah, Fullstack Web Developer Indonesia",
    priority: 1,
    changeFrequency: "monthly",
  },
  straightDeal: {
    path: "/straight-deal",
    title: "Straight Deal - Backend Car Selling Workflow",
    description:
      "Straight Deal adalah backend workflow jual beli mobil dengan autentikasi, manajemen user, transaksi, dan infrastruktur produksi.",
    keywords: [
      "Straight Deal",
      "Backend Developer",
      "Car Selling Workflow",
      "Node.js Backend",
      "Express Backend",
      "Portfolio Backend",
    ],
    image: "/assets/img/straight-deal-cover.png",
    imageAlt: "Straight Deal car selling workflow backend project",
    priority: 0.85,
    changeFrequency: "yearly",
    type: "SoftwareApplication",
    applicationCategory: "BusinessApplication",
  },
  ravineCoffee: {
    path: "/ravine-coffee",
    title: "Ravine Coffee - Cafe POS and Online Ordering System",
    description:
      "Ravine Coffee adalah sistem POS cafe dan online ordering dengan real-time order, QRIS Midtrans, dashboard cashier, dan API backend.",
    keywords: [
      "Ravine Coffee",
      "Cafe POS",
      "Online Ordering System",
      "Fullstack Project",
      "Midtrans QRIS",
      "WebSocket",
    ],
    image: "/assets/img/ravine-bg.png",
    imageAlt: "Ravine Coffee cafe POS and online ordering system",
    priority: 0.85,
    changeFrequency: "yearly",
    type: "SoftwareApplication",
    applicationCategory: "BusinessApplication",
  },
  maduraKita: {
    path: "/madura-kita",
    title: "MaduraKita - Digital Hub UMKM Madura",
    description:
      "MaduraKita adalah platform digital untuk membantu UMKM Madura menampilkan produk, budaya lokal, dan peluang bisnis secara online.",
    keywords: [
      "MaduraKita",
      "UMKM Madura",
      "Digital Hub UMKM",
      "Landing Page UMKM",
      "Portfolio Web Developer",
    ],
    image: "/assets/img/madura-bg.png",
    imageAlt: "MaduraKita digital hub for Madura MSMEs",
    priority: 0.8,
    changeFrequency: "yearly",
    type: "CreativeWork",
  },
  linea: {
    path: "/linea",
    title: "Linea - Animated Business Banking Landing Page",
    description:
      "Linea adalah landing page business banking responsif dengan layout modern, animasi halus, dan pengalaman frontend minimalis.",
    keywords: [
      "Linea",
      "Landing Page Animation",
      "Frontend Portfolio",
      "Business Banking Landing Page",
      "Responsive Web Design",
    ],
    image: "/assets/img/linea.png",
    imageAlt: "Linea animated business banking landing page",
    priority: 0.75,
    changeFrequency: "yearly",
    type: "CreativeWork",
  },
  stora: {
    path: "/stora",
    title: "Stora - Storage Management Web Application",
    description:
      "Stora adalah aplikasi storage management untuk mengelola stok, inventaris, dan alur penyimpanan bisnis secara efisien.",
    keywords: [
      "Stora",
      "Storage Management",
      "Inventory Management",
      "Fullstack Application",
      "Portfolio Developer",
    ],
    image: "/assets/img/stora-cover.png",
    imageAlt: "Stora storage management web application",
    priority: 0.85,
    changeFrequency: "yearly",
    type: "SoftwareApplication",
    applicationCategory: "BusinessApplication",
  },
  orbichat: {
    path: "/orbichat",
    title: "OrbiChat - AI Chatbot Platform for Agencies",
    description:
      "OrbiChat adalah platform AI chatbot untuk freelance agency, dibangun untuk otomasi interaksi klien dengan LLM dan dashboard web.",
    keywords: [
      "OrbiChat",
      "AI Chatbot Platform",
      "LLM Application",
      "AI Web Application",
      "Freelance Agency Automation",
    ],
    image: "/assets/img/mySelf.webp",
    imageAlt: "OrbiChat AI chatbot platform dashboard preview",
    priority: 0.85,
    changeFrequency: "yearly",
    type: "SoftwareApplication",
    applicationCategory: "BusinessApplication",
  },
};

export const orderedSeoPages = [
  seoPages.home,
  seoPages.straightDeal,
  seoPages.ravineCoffee,
  seoPages.maduraKita,
  seoPages.linea,
  seoPages.stora,
  seoPages.orbichat,
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata(page) {
  const imageUrl = absoluteUrl(page.image);

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: page.path,
    },
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: page.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [
        {
          url: imageUrl,
          alt: page.imageAlt,
        },
      ],
      creator: "@ubaydillah1",
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.image),
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "REST API",
      "Fullstack Web Development",
      "AI Application Development",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Person",
      name: siteConfig.author,
    },
    inLanguage: "en-US",
  };
}

export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: seoPages.home.title,
    url: absoluteUrl(seoPages.home.path),
    description: seoPages.home.description,
    mainEntity: personJsonLd(),
  };
}

export function projectJsonLd(page) {
  return {
    "@context": "https://schema.org",
    "@type": page.type || "CreativeWork",
    name: page.title,
    headline: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    image: absoluteUrl(page.image),
    author: {
      "@type": "Person",
      name: siteConfig.author,
      url: siteConfig.url,
    },
    creator: {
      "@type": "Person",
      name: siteConfig.author,
      url: siteConfig.url,
    },
    applicationCategory: page.applicationCategory,
    operatingSystem: "Web",
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(page) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.title,
        item: absoluteUrl(page.path),
      },
    ],
  };
}
