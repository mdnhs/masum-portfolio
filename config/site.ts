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
  MONGODB_URI:
    "mongodb+srv://srb47:XPEcfJkDA206lF7c@folio.wquq5.mongodb.net/masum",
};
