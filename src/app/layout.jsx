import "./globals.css";
import Providers from "./providers";
import { absoluteUrl, siteConfig } from "../lib/seo";
import { cookies } from "next/headers";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Portfolio Ubay Dillah",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  category: "portfolio",
  alternates: {
    canonical: "/",
  },
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
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/img/mySelf.webp",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.image),
        width: 1200,
        height: 630,
        alt: "Ubay Dillah, Fullstack Web Developer Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.image)],
    creator: "@ubaydillah1",
  },
};

function normalizeTheme(theme) {
  if (theme === "black" || theme === "winter") return theme;
  return "winter";
}

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const initialTheme = normalizeTheme(cookieStore.get("data-theme")?.value);

  return (
    <html lang="en" data-theme={initialTheme} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var storedTheme = localStorage.getItem("data-theme");
                  var theme = storedTheme || "${initialTheme}";
                  if (theme !== "black" && theme !== "winter") theme = "winter";
                  document.documentElement.setAttribute("data-theme", theme);
                } catch (error) {
                  document.documentElement.setAttribute("data-theme", "${initialTheme}");
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <Providers initialTheme={initialTheme}>{children}</Providers>
      </body>
    </html>
  );
}
