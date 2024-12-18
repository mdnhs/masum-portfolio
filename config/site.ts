export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  title: "Masum | Data Data Analyst",
  description: "Data Analyst",
  keywords: "data analysis, data insights, analytics, business intelligence",
  mainNav: [
    { id: 1, title: "ABOUT ME", href: "/" },
    { id: 2, title: "PROJECTS", href: "/projects" },
    { id: 3, title: "RESUME", href: "/resume" },
    { id: 4, title: "CONTACT", href: "/contact" },
  ],
  API_BASE_URL: "https://mdnhs.github.io/masum-json/",
  API_BASE_URL_PRODUCTION: process.env.API_BASE_URL_PRODUCTION,
  MONGODB_URI: process.env.MONGODB_URI,
};
